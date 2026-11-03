import React, { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Léiriú, running in your browser.
 *
 * The installation reads what is in front of it and pushes 48 blocks out to
 * match. This does the same thing with a webcam: the picture is sampled down
 * to the same grid, and each cell's brightness decides how far its block
 * comes forward. Freeze holds the relief, the way the button on the real one
 * does. Nothing is uploaded, recorded or kept: the frames stay in this tab.
 */

const GRIDS = {
  48: { cols: 8, rows: 6, label: '48 blocks', note: 'the grid I built' },
  144: { cols: 12, rows: 12, label: '144 blocks', note: 'the grid I want next' },
};

export default function ReflectionBlocks() {
  const [state, setState] = useState('idle'); // idle | asking | live | frozen | denied | nocam
  const [size, setSize] = useState(48);
  const video = useRef(null);
  const canvas = useRef(null);
  const stream = useRef(null);
  const raf = useRef(0);
  const frozen = useRef(null);
  const still = useRef(null);

  const stop = useCallback(() => {
    cancelAnimationFrame(raf.current);
    stream.current?.getTracks().forEach((t) => t.stop());
    stream.current = null;
    still.current = null;
    frozen.current = null;
    setState('idle');
  }, []);

  useEffect(() => () => stop(), [stop]);

  /* sample whatever the source is down to the grid, then draw the relief */
  const render = useCallback(() => {
    const cv = canvas.current;
    const src = still.current || video.current;
    if (!cv || !src) return;
    const { cols, rows } = GRIDS[size];

    const read = frozen.current || sample(src, cols, rows);
    if (!read) return;

    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const w = cv.clientWidth;
    const h = Math.round((w * rows) / cols);
    if (cv.width !== Math.round(w * dpr)) {
      cv.width = Math.round(w * dpr);
      cv.height = Math.round(h * dpr);
      cv.style.height = `${h}px`;
    }
    const ctx = cv.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);

    const cw = w / cols;
    const ch = h / rows;
    const pad = Math.max(1, Math.min(cw, ch) * 0.1);
    const reach = Math.min(cw, ch) * 0.42;

    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const v = read[y * cols + x]; // 0..1, already mirrored
        const d = v * reach;
        const bx = x * cw + pad;
        const by = y * ch + pad;
        const bw = cw - pad * 2;
        const bh = ch - pad * 2;

        // the block, pushed out towards the viewer
        ctx.fillStyle = `rgba(20,28,24,${0.1 + v * 0.16})`;
        ctx.fillRect(bx, by, bw, bh);

        // its two visible sides, so the push reads as depth
        ctx.fillStyle = `rgba(47,83,67,${0.26 + v * 0.42})`;
        ctx.beginPath();
        ctx.moveTo(bx, by);
        ctx.lineTo(bx + d, by - d);
        ctx.lineTo(bx + bw + d, by - d);
        ctx.lineTo(bx + bw, by);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = `rgba(47,83,67,${0.16 + v * 0.3})`;
        ctx.beginPath();
        ctx.moveTo(bx + bw, by);
        ctx.lineTo(bx + bw + d, by - d);
        ctx.lineTo(bx + bw + d, by + bh - d);
        ctx.lineTo(bx + bw, by + bh);
        ctx.closePath();
        ctx.fill();

        // the face
        ctx.fillStyle = `rgb(${233 - v * 60},${236 - v * 54},${232 - v * 62})`;
        ctx.fillRect(bx + d, by - d, bw, bh);
        ctx.strokeStyle = 'rgba(47,83,67,.3)';
        ctx.lineWidth = 0.6;
        ctx.strokeRect(bx + d, by - d, bw, bh);
      }
    }
  }, [size]);

  const loop = useCallback(() => {
    render();
    raf.current = requestAnimationFrame(loop);
  }, [render]);

  const [why, setWhy] = useState('');

  const start = async () => {
    setWhy('');
    setState('asking');
    if (!window.isSecureContext) {
      setWhy('A browser only hands over the camera on a secure connection.');
      setState('nocam');
      return;
    }
    if (!navigator.mediaDevices?.getUserMedia) {
      setWhy('This browser, or the frame this page is sitting in, does not offer the camera to a page at all. Opening the page in its own tab usually fixes it.');
      setState('nocam');
      return;
    }
    try {
      const s = await navigator.mediaDevices.getUserMedia({
        video: { width: { ideal: 320 }, height: { ideal: 240 }, facingMode: 'user' },
        audio: false,
      });
      stream.current = s;
      const v = video.current;
      v.srcObject = s;
      await v.play();
      frozen.current = null;
      still.current = null;
      setState('live');
      loop();
    } catch (err) {
      const n = err?.name || '';
      setWhy(
        n === 'NotAllowedError'
          ? 'The camera was refused. If you did not see a prompt, the frame this page sits in is blocking it: open the page in its own tab and try again.'
          : n === 'NotFoundError'
          ? 'No camera was found on this device.'
          : n === 'NotReadableError'
          ? 'Something else on this machine is already using the camera.'
          : 'The camera could not be started here.'
      );
      setState('denied');
    }
  };

  const usePhoto = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const img = new Image();
    img.onload = () => {
      still.current = img;
      frozen.current = null;
      setState('frozen');
      cancelAnimationFrame(raf.current);
      render();
      URL.revokeObjectURL(img.src);
    };
    img.src = URL.createObjectURL(file);
  };

  const freeze = () => {
    const { cols, rows } = GRIDS[size];
    frozen.current = sample(still.current || video.current, cols, rows);
    cancelAnimationFrame(raf.current);
    setState('frozen');
    render();
  };

  const unfreeze = () => {
    frozen.current = null;
    if (still.current) return;
    setState('live');
    loop();
  };

  useEffect(() => {
    if (state === 'frozen') render();
  }, [size, state, render]);

  const running = state === 'live' || state === 'frozen';

  return (
    <section className="refl" aria-labelledby="refl-title">
      <div className="refl__copy">
        <p className="lei-label">TRY IT YOURSELF <span className="refl__wip">WORK IN PROGRESS</span></p>
        <h2 id="refl-title">
          What would Léiriú
          <br />
          <em>make of you?</em>
        </h2>
        <p>
          The installation reads whatever is in front of it and pushes its blocks out to match.
          This does the same with your camera, on the same grid I built. Nothing is uploaded or
          saved: the picture never leaves this tab.
        </p>

        <div className="refl__controls">
          {!running && state !== 'asking' && (
            <button type="button" className="refl__go" onClick={start}>
              Turn on my camera <span aria-hidden="true">→</span>
            </button>
          )}
          {state === 'asking' && <p className="refl__note">Waiting for camera permission…</p>}
          {(state === 'denied' || state === 'nocam') && (
            <p className="refl__note refl__note--warn">
              {why} Use a photo instead and it does exactly the same thing.
            </p>
          )}

          <label className="refl__file">
            <input type="file" accept="image/*" onChange={usePhoto} />
            <span>Use a photo instead</span>
          </label>

          {running && (
            <>
              {state === 'live' ? (
                <button type="button" className="refl__go" onClick={freeze}>
                  Freeze
                </button>
              ) : (
                !still.current && (
                  <button type="button" className="refl__go" onClick={unfreeze}>
                    Live again
                  </button>
                )
              )}
              <button type="button" className="refl__quit" onClick={stop}>
                Turn it off
              </button>
            </>
          )}
        </div>

        <div className="refl__grid" role="group" aria-label="Grid size">
          {Object.entries(GRIDS).map(([k, g]) => (
            <button
              key={k}
              type="button"
              aria-pressed={size === Number(k)}
              onClick={() => setSize(Number(k))}
            >
              {g.label}
              <small>{g.note}</small>
            </button>
          ))}
        </div>
      </div>

      <div className={`refl__stage ${running ? 'is-on' : ''}`}>
        <canvas ref={canvas} aria-label="Your reflection, rendered as moving blocks" />
        {!running && (
          <p className="refl__placeholder">
            <span>PAUSE TO FEEL YOUR REFLECTION</span>
            <small>Turn on the camera, or drop in a photo</small>
          </p>
        )}
        <video ref={video} playsInline muted aria-hidden="true" />
      </div>
    </section>
  );
}

/* one shared sampler: draw the source tiny, read it back, mirror it */
let scratch = null;
function sample(src, cols, rows) {
  if (!src) return null;
  if (src.tagName === 'VIDEO' && (!src.videoWidth || src.readyState < 2)) return null;
  if (!scratch) scratch = document.createElement('canvas');
  scratch.width = cols;
  scratch.height = rows;
  const c = scratch.getContext('2d', { willReadFrequently: true });
  c.save();
  c.translate(cols, 0);
  c.scale(-1, 1); // a reflection, so flip it
  try {
    c.drawImage(src, 0, 0, cols, rows);
  } catch {
    c.restore();
    return null;
  }
  c.restore();
  const { data } = c.getImageData(0, 0, cols, rows);
  const out = new Float32Array(cols * rows);
  let lo = 1;
  let hi = 0;
  for (let i = 0; i < out.length; i++) {
    const l = (data[i * 4] * 0.299 + data[i * 4 + 1] * 0.587 + data[i * 4 + 2] * 0.114) / 255;
    out[i] = l;
    if (l < lo) lo = l;
    if (l > hi) hi = l;
  }
  // stretch the range, or a dim room gives a flat wall
  const span = Math.max(0.12, hi - lo);
  for (let i = 0; i < out.length; i++) out[i] = Math.min(1, Math.max(0, (out[i] - lo) / span));
  return out;
}
