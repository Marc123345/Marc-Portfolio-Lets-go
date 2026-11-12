"use client";

import { useEffect, useRef } from 'react';

interface Ribbon {
  /** Where the S-curve starts/ends, as fractions of the canvas. */
  from: [number, number];
  to: [number, number];
  lines: number;
  /** Ribbon thickness as a fraction of canvas height. */
  spread: number;
  /** RGB triplet. */
  rgb: string;
  alpha: number;
  speed: number;
}

interface SilkCanvasProps {
  className?: string;
  /** Mirror horizontally (ribbon rises right-to-left instead). */
  flip?: boolean;
  ribbons?: Ribbon[];
}

const DEFAULT_RIBBONS: Ribbon[] = [
  { from: [0.12, 1.05], to: [1.02, 0.05], lines: 34, spread: 0.16, rgb: '255,255,255', alpha: 0.11, speed: 0.22 },
  { from: [0.3, 1.1], to: [1.05, 0.3], lines: 26, spread: 0.12, rgb: '163,209,255', alpha: 0.14, speed: 0.3 },
];

/**
 * Animated "silk wave" background: bundles of thin lines following an
 * S-curve that twist and breathe over time, the moving version of the
 * service-bg-2-1.jpg wave used on RoofCoat Leads' "Everything You Need to
 * Grow" section.
 *
 * Pauses offscreen / in hidden tabs, caps DPR at 1.5, and draws one still
 * frame for prefers-reduced-motion.
 */
export default function SilkCanvas({ className = '', flip = false, ribbons = DEFAULT_RIBBONS }: SilkCanvasProps) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let w = 0;
    let h = 0;
    let raf = 0;
    let visible = true;
    let t = 0;
    let last = performance.now();
    const ptr = { y: 0, ty: 0 };

    const resize = () => {
      const r = canvas.getBoundingClientRect();
      w = Math.max(1, r.width);
      h = Math.max(1, r.height);
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    // smoothstep S-curve between two points
    const ease = (u: number) => u * u * (3 - 2 * u);

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.save();
      if (flip) {
        ctx.translate(w, 0);
        ctx.scale(-1, 1);
      }
      ctx.lineWidth = 1;
      const steps = Math.max(40, Math.round(w / 14));

      for (const rb of ribbons) {
        const x0 = rb.from[0] * w;
        const y0 = rb.from[1] * h;
        const x1 = rb.to[0] * w;
        const y1 = rb.to[1] * h;
        const tt = t * rb.speed;

        for (let i = 0; i < rb.lines; i++) {
          const f = i / (rb.lines - 1); // 0..1 across the ribbon
          // lines in the middle of the bundle are brighter
          const a = rb.alpha * (0.35 + 0.65 * Math.sin(f * Math.PI));
          ctx.strokeStyle = `rgba(${rb.rgb},${a.toFixed(3)})`;
          ctx.beginPath();
          for (let s = 0; s <= steps; s++) {
            const u = s / steps;
            const x = x0 + (x1 - x0) * u;
            const base = y0 + (y1 - y0) * ease(u);
            // twist: the ribbon narrows and widens along its length and over time
            const twist = Math.sin(u * Math.PI * 1.6 + tt * 0.9);
            const off = (f - 0.5) * rb.spread * h * (0.35 + 0.65 * Math.abs(twist));
            const wave =
              Math.sin(u * 5.2 + tt + f * 1.4) * h * 0.018 +
              Math.sin(u * 2.1 - tt * 0.6) * h * 0.03;
            const y = base + off + wave + ptr.y * h * 0.04 * u;
            if (s === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.stroke();
        }
      }
      ctx.restore();
    };

    const loop = (now: number) => {
      t += Math.min((now - last) / 1000, 0.05);
      last = now;
      ptr.y += (ptr.ty - ptr.y) * 0.04;
      draw();
      raf = requestAnimationFrame(loop);
    };
    const start = () => {
      if (reduce || raf || !visible || document.hidden) return;
      last = performance.now();
      raf = requestAnimationFrame(loop);
    };
    const stop = () => {
      cancelAnimationFrame(raf);
      raf = 0;
    };

    resize();
    draw();

    const ro = new ResizeObserver(() => {
      resize();
      draw();
    });
    ro.observe(canvas);

    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      if (visible) start();
      else stop();
    });
    io.observe(canvas);

    const onVis = () => (document.hidden ? stop() : start());
    document.addEventListener('visibilitychange', onVis);

    const onMove = (e: PointerEvent) => {
      ptr.ty = e.clientY / window.innerHeight - 0.5;
    };
    if (!reduce) window.addEventListener('pointermove', onMove, { passive: true });

    start();
    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
      document.removeEventListener('visibilitychange', onVis);
      window.removeEventListener('pointermove', onMove);
    };
  }, [flip, ribbons]);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
    />
  );
}
