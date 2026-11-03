import React, { useCallback, useEffect, useRef } from 'react';

/**
 * A word built out of square pixels.
 *
 * The text is drawn once to an offscreen canvas, sampled on a grid, and every
 * lit cell becomes a square. The squares start scattered and settle into the
 * letterforms left to right, so the word assembles itself out of its own dots.
 * Replays on hover or focus.
 */
export default function Halftone({
  text,
  font = '700 1em Archivo, "DM Sans", sans-serif',
  step = 6,
  color = '#111316',
  className = '',
}) {
  const wrap = useRef(null);
  const canvas = useRef(null);
  const dots = useRef([]);
  const raf = useRef(0);
  const size = useRef({ w: 0, h: 0, dpr: 1 });

  const build = useCallback(() => {
    const host = wrap.current;
    const cv = canvas.current;
    if (!host || !cv) return;

    const avail = host.clientWidth || 600;
    // pick a size that fills the column without overflowing it
    const probe = document.createElement('canvas').getContext('2d');
    let fontSize = 160;
    probe.font = font.replace('1em', `${fontSize}px`);
    const ratio = avail / Math.max(1, probe.measureText(text).width);
    fontSize = Math.max(44, Math.min(190, Math.floor(fontSize * ratio * 0.98)));

    const pad = Math.round(fontSize * 0.2);
    probe.font = font.replace('1em', `${fontSize}px`);
    const m = probe.measureText(text);
    const w = Math.ceil(m.width) + pad * 2;
    const h = Math.ceil(fontSize * 1.26) + pad * 2;

    // render the word, then read it back
    const src = document.createElement('canvas');
    src.width = w;
    src.height = h;
    const sx = src.getContext('2d');
    sx.font = probe.font;
    sx.textBaseline = 'alphabetic';
    sx.fillStyle = '#000';
    sx.fillText(text, pad, h - pad - fontSize * 0.14);
    const data = sx.getImageData(0, 0, w, h).data;

    const found = [];
    for (let y = 0; y < h; y += step) {
      for (let x = 0; x < w; x += step) {
        if (data[(y * w + x) * 4 + 3] > 128) {
          found.push({ x, y, ox: 0, oy: 0, tx: 0, ty: 0 });
        }
      }
    }
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    cv.width = Math.round(w * dpr);
    cv.height = Math.round(h * dpr);
    cv.style.width = `${w}px`;
    cv.style.height = `${h}px`;
    size.current = { w, h, dpr };
    dots.current = found;
  }, [text, font, step]);

  const pointer = useRef({ x: -9999, y: -9999, on: false });

  const draw = useCallback(() => {
    const cv = canvas.current;
    if (!cv) return false;
    const { w, h, dpr } = size.current;
    const ctx = cv.getContext('2d');
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = color;
    const box = step * 0.76;
    const { x: px, y: py, on } = pointer.current;
    const R = 52;    // only squares this close are disturbed
    const PUSH = 24; // and this is how far they go
    let moving = false;

    for (const p of dots.current) {
      let tx = 0;
      let ty = 0;
      if (on) {
        const dx = p.x - px;
        const dy = p.y - py;
        const d = Math.hypot(dx, dy);
        if (d < R) {
          const f = (1 - d / R) ** 2 * PUSH;
          const a = d < 0.001 ? Math.random() * Math.PI * 2 : Math.atan2(dy, dx);
          tx = Math.cos(a) * f;
          ty = Math.sin(a) * f;
        }
      }
      p.tx = tx;
      p.ty = ty;
      p.ox += (p.tx - p.ox) * 0.2;
      p.oy += (p.ty - p.oy) * 0.2;
      if (Math.abs(p.ox - p.tx) > 0.08 || Math.abs(p.oy - p.ty) > 0.08) moving = true;
      ctx.fillRect(p.x + p.ox, p.y + p.oy, box, box);
    }
    return moving;
  }, [color, step]);

  const loop = useCallback(() => {
    cancelAnimationFrame(raf.current);
    const tick = () => {
      if (draw()) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
  }, [draw]);

  const onMove = useCallback(
    (e) => {
      const cv = canvas.current;
      if (!cv || window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
      const r = cv.getBoundingClientRect();
      pointer.current = {
        x: ((e.clientX - r.left) / r.width) * size.current.w,
        y: ((e.clientY - r.top) / r.height) * size.current.h,
        on: true,
      };
      loop();
    },
    [loop]
  );

  const onLeave = useCallback(() => {
    pointer.current.on = false;
    loop();
  }, [loop]);

  useEffect(() => {
    let alive = true;
    const start = () => {
      if (!alive) return;
      build();
      draw();
    };
    if (document.fonts?.ready) document.fonts.ready.then(start);
    else start();

    let frame = 0;
    const onResize = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        build();
        draw();
      });
    };
    window.addEventListener('resize', onResize);
    return () => {
      alive = false;
      cancelAnimationFrame(raf.current);
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', onResize);
    };
  }, [build, draw]);

  return (
    <span
      className={`halftone ${className}`.trim()}
      ref={wrap}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      tabIndex={0}
      role="img"
      aria-label={text}
    >
      <canvas ref={canvas} aria-hidden="true" />
    </span>
  );
}
