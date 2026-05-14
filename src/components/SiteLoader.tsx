"use client";

import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const LOADING_LETTERS = ['L', 'o', 'a', 'd', 'i', 'n', 'g'];

export default function SiteLoader() {
  const [visible, setVisible] = useState<boolean | null>(null);

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

    const t = setTimeout(() => {
      try {
        sessionStorage.setItem('mf-loader-seen', '1');
      } catch {
        // no-op
      }
      setVisible(false);
    }, 1700);

    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';
      const lenis = (window as unknown as Record<string, unknown>).__lenis as
        | { stop: () => void; start: () => void }
        | undefined;
      lenis?.stop();
      return () => {
        document.body.style.overflow = '';
        lenis?.start();
      };
    }
  }, [visible]);

  if (visible === null) return null;

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } }}
        >
          {/* Marc logo */}
          <motion.img
            src="/images/marc-friedman-primary.svg"
            alt="Marc Friedman"
            width={140}
            height={56}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="h-14 md:h-16 w-auto mb-8"
          />

          {/* Nino-style staggered 'Loading' letters */}
          <div
            aria-label="Loading"
            className="flex"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 20,
              fontWeight: 200,
              letterSpacing: '15px',
              textTransform: 'uppercase',
              color: '#FCFCFB',
            }}
          >
            {LOADING_LETTERS.map((ch, i) => (
              <span
                key={i}
                style={{
                  display: 'inline-block',
                  animation: 'mf-loader-blink 1s infinite alternate',
                  animationDelay: `${i * 0.1}s`,
                }}
              >
                {ch}
              </span>
            ))}
          </div>

          <style jsx>{`
            @keyframes mf-loader-blink {
              0% { opacity: 1; }
              100% { opacity: 0; }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
