"use client";

import { useEffect } from 'react';
import Lenis from 'lenis';

export default function SmoothScrollProvider() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    /* Skip Lenis on mobile, native touch scroll is already smooth
       and the RAF loop drains battery + clashes with browser
       overscroll behavior on iOS. */
    if (window.matchMedia('(max-width: 768px)').matches) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.2,
    });

    // Expose on window so SiteLoader can pause/resume during load sequence
    (window as unknown as Record<string, unknown>).__lenis = lenis;

    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      delete (window as unknown as Record<string, unknown>).__lenis;
    };
  }, []);

  return null;
}
