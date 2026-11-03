import React, { useEffect, useId, useMemo, useRef } from 'react';

/**
 * Van Gogh marks made of the real painted texture.
 *
 * A small number of spirals and sweeping strokes, scattered down the page.
 * One arrives as soon as you start scrolling; the rest appear in different
 * places as you keep going. Deliberately sparse — a few marks, not a field.
 *
 *   <PaintBurst origin="moon|flower"/>  one spiral sitting on the collage
 *   <PaintStrokes/>                     the marks that follow down the page
 */

const TEXTURE = 'media/vangogh-painted-sky.png';

/* ── shapes ──────────────────────────────────────────────────────────── */

// an Archimedean spiral, drawn as a smooth polyline
function spiral({ cx, cy, turns = 2.1, r0 = 16, r1 = 120, from = 0, dir = 1 }) {
  const steps = Math.round(turns * 26);
  const pts = [];
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const a = from + dir * t * turns * Math.PI * 2;
    const r = r0 + (r1 - r0) * t;
    pts.push([cx + Math.cos(a) * r, cy + Math.sin(a) * r]);
  }
  return pts.reduce((d, [x, y], i) => d + (i ? `L${x.toFixed(1)} ${y.toFixed(1)}` : `M${x.toFixed(1)} ${y.toFixed(1)}`), '');
}

// a long S, like a brush dragged and flicked back
function sweep({ x, y, w = 180, h = 150, dir = 1 }) {
  return `M${x} ${y} C${x + w * dir * 0.7} ${y + h * 0.1} ${x + w * dir * 0.1} ${y + h * 0.6} ${x + w * dir * 0.8} ${y + h * 0.78}`;
}

// a short comma — one flick of the wrist
function comma({ x = 170, y = 110, len = 120, dir = 1 }) {
  return `M${x} ${y} C${x + 34 * dir} ${y + len * 0.34} ${x + 12 * dir} ${y + len * 0.68} ${x - 22 * dir} ${y + len}`;
}

/* ── one mark, cut out of the painting ───────────────────────────────── */

function Mark({ d, width, size, t, className = '' }) {
  const uid = useId().replace(/:/g, '');
  const maskId = `mm-${uid}`;
  const patId = `mp-${uid}`;
  const roughId = `mr-${uid}`;
  return (
    <svg
      className={`paint-mark ${className}`}
      viewBox={`0 0 ${size} ${size}`}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <filter id={roughId} x="-30%" y="-30%" width="160%" height="160%">
          <feTurbulence type="fractalNoise" baseFrequency=".8 .32" numOctaves="3" seed="7" result="g" />
          <feDisplacementMap in="SourceGraphic" in2="g" scale="6" xChannelSelector="R" yChannelSelector="G" />
        </filter>
        <pattern id={patId} patternUnits="userSpaceOnUse" width={size} height={size}>
          <image href={TEXTURE} x="0" y="0" width={size} height={size} preserveAspectRatio="xMidYMid slice" />
        </pattern>
        <mask id={maskId} maskUnits="userSpaceOnUse" x="0" y="0" width={size} height={size}>
          <path
            className="paint-dab"
            d={d}
            fill="none"
            stroke="#fff"
            strokeWidth={width}
            strokeLinecap="round"
            pathLength="1"
            filter={`url(#${roughId})`}
            style={{ '--t': t }}
          />
        </mask>
      </defs>
      <rect x="0" y="0" width={size} height={size} fill={`url(#${patId})`} mask={`url(#${maskId})`} />
    </svg>
  );
}

/* ── a spiral resting on the moon / the irises ───────────────────────── */

export function PaintBurst({ origin = 'moon' }) {
  const d = useMemo(
    () =>
      origin === 'moon'
        ? spiral({ cx: 300, cy: 300, turns: 2.2, r0: 20, r1: 180, from: -0.6, dir: 1 })
        : spiral({ cx: 300, cy: 300, turns: 1.9, r0: 18, r1: 165, from: 2.1, dir: -1 }),
    [origin]
  );
  return (
    <Mark
      className={`paint-burst paint-burst--${origin}`}
      d={d}
      width={origin === 'moon' ? 26 : 22}
      size={600}
      t={origin === 'moon' ? 0.004 : 0.03}
    />
  );
}

/* ── the handful of marks that follow down the page ──────────────────── */

const MARKS = [
  { kind: 'spiral', side: 'left',  top: '6%',  scale: 0.8,  t: 0.012, turns: 1.8, w: 24, inset: 10 },
  { kind: 'comma',  side: 'right', top: '13%', scale: 0.7,  t: 0.05,  w: 28, inset: 30 },
  { kind: 'spiral', side: 'right', top: '20%', scale: 1,    t: 0.10,  turns: 2.1, w: 24, inset: 0, dir: -1 },
  { kind: 'sweep',  side: 'left',  top: '27%', scale: 0.95, t: 0.16,  w: 26, inset: 40 },
  { kind: 'comma',  side: 'left',  top: '34%', scale: 0.65, t: 0.22,  w: 26, inset: 0, dir: -1 },
  { kind: 'spiral', side: 'right', top: '40%', scale: 1.1,  t: 0.28,  turns: 1.7, w: 22, inset: 24 },
  { kind: 'sweep',  side: 'right', top: '47%', scale: 0.85, t: 0.35,  w: 24, inset: 0 },
  { kind: 'spiral', side: 'left',  top: '53%', scale: 0.9,  t: 0.42,  turns: 2.3, w: 26, inset: 18, dir: -1 },
  { kind: 'comma',  side: 'left',  top: '60%', scale: 0.7,  t: 0.49,  w: 27, inset: 48 },
  { kind: 'spiral', side: 'right', top: '66%', scale: 1,    t: 0.56,  turns: 1.9, w: 24, inset: 0 },
  { kind: 'sweep',  side: 'right', top: '73%', scale: 0.9,  t: 0.63,  w: 25, inset: 34, dir: -1 },
  { kind: 'spiral', side: 'left',  top: '79%', scale: 0.85, t: 0.70,  turns: 2.0, w: 26, inset: 0 },
  { kind: 'comma',  side: 'left',  top: '86%', scale: 0.75, t: 0.77,  w: 26, inset: 26, dir: -1 },
  { kind: 'spiral', side: 'right', top: '91%', scale: 1.05, t: 0.84,  turns: 1.8, w: 23, inset: 12, dir: -1 },
  { kind: 'sweep',  side: 'right', top: '96%', scale: 0.8,  t: 0.91,  w: 24, inset: 0 },
];

export default function PaintStrokes() {
  const layer = useRef(null);

  useEffect(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      document.documentElement.style.setProperty('--paint', '1');
      return;
    }
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? window.scrollY / max : 1;
      document.documentElement.style.setProperty('--paint', String(Math.min(1, p)));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      document.documentElement.style.removeProperty('--paint');
    };
  }, []);

  return (
    <div className="paint-layer" ref={layer} aria-hidden="true">
      {MARKS.map((m, i) => (
        <span
          key={i}
          className={`paint-slot paint-slot--${m.side}`}
          style={{ top: m.top, '--mark-scale': m.scale, '--mark-inset': `${m.inset ?? 0}px` }}
        >
          <Mark
            d={
              m.kind === 'spiral'
                ? spiral({ cx: 170, cy: 170, turns: m.turns, r0: 14, r1: 118, from: i, dir: m.dir ?? 1 })
                : m.kind === 'comma'
                ? comma({ x: m.dir === -1 ? 200 : 140, y: 100, len: 150, dir: m.dir ?? 1 })
                : sweep({ x: m.dir === -1 ? 250 : 90, y: 60, w: 170, h: 200, dir: m.dir ?? 1 })
            }
            width={m.w}
            size={340}
            t={m.t}
          />
        </span>
      ))}
    </div>
  );
}
