"use client";

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const SERIF = "Georgia, 'Times New Roman', serif";

export default function SiteLoader() {
  const [visible, setVisible] = useState<boolean | null>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const seen = sessionStorage.getItem('mf-loader-seen');
      if (seen) {
        setVisible(false);
        return;
      }
    } catch {
      // sessionStorage unavailable — still show loader once
    }

    setVisible(true);

    const duration = 1700;
    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setCount(Math.round(eased * 100));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          try {
            sessionStorage.setItem('mf-loader-seen', '1');
          } catch {
            // no-op
          }
          setVisible(false);
        }, 400);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (visible) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [visible]);

  if (visible === null) return null;

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[9999] bg-black overflow-hidden"
          initial={{ clipPath: 'inset(0 0 0 0)' }}
          exit={{ clipPath: 'inset(0 0 100% 0)' }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Grain */}
          <div
            className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.5'/></svg>\")",
            }}
          />
          {/* Glow */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[500px] h-[500px] rounded-full bg-[#A3D1FF]/10 blur-[120px]" />
          </div>

          {/* Top meta bar */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="absolute top-6 left-0 right-0 px-6 md:px-10 flex justify-between text-[10px] md:text-xs font-mono uppercase tracking-[0.3em] text-white/50"
          >
            <span>Marc Friedman · Portfolio</span>
            <span>Loading — Vol. 01</span>
          </motion.div>

          {/* Name — kinetic reveal */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xs font-mono uppercase tracking-[0.4em] text-[#A3D1FF] mb-8"
            >
              — Portfolio —
            </motion.p>

            <h1
              className="flex flex-wrap justify-center text-white leading-[0.9] tracking-[-0.04em] mb-12"
              style={{
                fontFamily: SERIF,
                fontSize: 'clamp(2.5rem, 8vw, 6.5rem)',
                fontWeight: 400,
              }}
            >
              <span className="overflow-hidden inline-block">
                <motion.span
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block italic font-light"
                >
                  Marc
                </motion.span>
              </span>
              <span className="inline-block w-4 md:w-6" />
              <span className="overflow-hidden inline-block">
                <motion.span
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block"
                >
                  Friedman.
                </motion.span>
              </span>
            </h1>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="w-[280px] md:w-[400px]"
            >
              <div className="flex items-baseline justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-[0.3em] text-white/50">
                  Booting
                </span>
                <span
                  className="text-white font-mono text-lg"
                  style={{ fontVariantNumeric: 'tabular-nums' }}
                >
                  {String(count).padStart(3, '0')}
                </span>
              </div>
              <div className="h-[2px] w-full bg-white/10 overflow-hidden">
                <div
                  className="h-full bg-[#A3D1FF]"
                  style={{ width: `${count}%`, transition: 'width 40ms linear' }}
                />
              </div>
            </motion.div>
          </div>

          {/* Bottom meta bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute bottom-6 left-0 right-0 px-6 md:px-10 flex justify-between text-[10px] md:text-xs font-mono uppercase tracking-[0.3em] text-white/50"
          >
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Available — Q2 2026
            </span>
            <span>Design · Development</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
