"use client";

import { useEffect } from 'react';
import Lenis from 'lenis';

export default function SmoothScrollProvider() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      wheelMultiplier: 1.1,
      touchMultiplier: 2.0,
      overscroll: false,
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
