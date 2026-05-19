"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Maximize2, X } from "lucide-react";

import { SLIDES } from "./slides/registry";

const VARIANTS = {
  enter: (dir: number) => ({
    opacity: 0,
    x: dir > 0 ? 60 : -60,
    filter: "blur(8px)",
  }),
  center: { opacity: 1, x: 0, filter: "blur(0px)" },
  exit: (dir: number) => ({
    opacity: 0,
    x: dir > 0 ? -60 : 60,
    filter: "blur(8px)",
  }),
};

export default function Deck() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const total = SLIDES.length;

  const go = useCallback(
    (next: number) => {
      const clamped = Math.max(0, Math.min(total - 1, next));
      setDir(clamped > index ? 1 : -1);
      setIndex(clamped);
    },
    [index, total],
  );

  // Keyboard nav
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (
        e.key === "ArrowRight" ||
        e.key === "ArrowDown" ||
        e.key === " " ||
        e.key === "PageDown"
      ) {
        e.preventDefault();
        go(index + 1);
      } else if (
        e.key === "ArrowLeft" ||
        e.key === "ArrowUp" ||
        e.key === "PageUp"
      ) {
        e.preventDefault();
        go(index - 1);
      } else if (e.key === "Home") {
        e.preventDefault();
        go(0);
      } else if (e.key === "End") {
        e.preventDefault();
        go(total - 1);
      } else if (/^[0-9]$/.test(e.key)) {
        const n = parseInt(e.key, 10);
        go(n === 0 ? 9 : n - 1);
      } else if (e.key === "f" || e.key === "F") {
        toggleFullscreen();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, index, total]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  const Active = useMemo(() => SLIDES[index].component, [index]);
  const meta = SLIDES[index];
  const progress = ((index + 1) / total) * 100;

  return (
    <div className="relative w-full h-full overflow-hidden bg-black select-none">
      {/* Progress bar */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-white/5 z-50">
        <motion.div
          className="h-full bg-[#A3D1FF]"
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>

      {/* Top chrome */}
      <div className="absolute top-0 left-0 right-0 z-40 flex items-center justify-between px-6 md:px-10 pt-5">
        <div className="flex items-center gap-3">
          <span
            className="inline-block w-2 h-2 rounded-full bg-[#A3D1FF]"
            style={{ boxShadow: "0 0 14px 2px rgba(163,209,255,0.6)" }}
          />
          <span
            className="text-[11px] tracking-[0.22em] uppercase text-white/55"
            style={{ fontFamily: "var(--font-body)" }}
          >
            EID · Growth Opportunity · 2026
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span
            className="font-mono text-[11px] tracking-[0.2em] text-white/45"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          <button
            onClick={toggleFullscreen}
            aria-label="Toggle fullscreen"
            className="p-2 text-white/40 hover:text-[#A3D1FF] transition-colors"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
          <a
            href="/"
            aria-label="Exit deck"
            className="p-2 text-white/40 hover:text-[#A3D1FF] transition-colors"
          >
            <X className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Slide stage */}
      <div className="absolute inset-0 flex items-center justify-center">
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={index}
            custom={dir}
            variants={VARIANTS}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Active />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom chrome */}
      <div className="absolute bottom-0 left-0 right-0 z-40 flex items-end justify-between px-6 md:px-10 pb-5 pointer-events-none">
        <div
          className="text-[10px] tracking-[0.25em] uppercase text-white/35 max-w-[40%] truncate"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {meta.act ? `${meta.act} · ` : ""}
          {meta.label}
        </div>

        <div className="flex items-center gap-1 pointer-events-auto">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="group h-6 flex items-center"
            >
              <span
                className={`block transition-all duration-300 ${
                  i === index
                    ? "w-8 h-[3px] bg-[#A3D1FF]"
                    : "w-2 h-[2px] bg-white/20 group-hover:bg-white/50"
                }`}
              />
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 pointer-events-auto">
          <button
            onClick={() => go(index - 1)}
            disabled={index === 0}
            aria-label="Previous slide"
            className="px-3 py-2 border border-white/15 text-white/70 hover:text-[#A3D1FF] hover:border-white/40 disabled:opacity-25 disabled:pointer-events-none transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => go(index + 1)}
            disabled={index === total - 1}
            aria-label="Next slide"
            className="px-3 py-2 bg-white text-black hover:bg-[#A3D1FF] disabled:opacity-25 disabled:pointer-events-none transition-colors"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Subtle grain layer for warmth */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-30 opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />

      {/* First-visit hint */}
      {index === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="absolute bottom-20 left-1/2 -translate-x-1/2 z-40 text-[10px] tracking-[0.3em] uppercase text-white/40"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Press → or click next · F for fullscreen
        </motion.div>
      )}
    </div>
  );
}
