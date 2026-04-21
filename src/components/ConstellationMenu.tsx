"use client";

import { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { X, Linkedin, Palette, Trophy, Calendar } from 'lucide-react';
import { CALENDLY_LINK } from '@/lib/constants';

type Orb = {
  label: string;
  to: string;
  number: string;
  meta: string;
  x: number; // vw %
  y: number; // vh %
};

const orbs: Orb[] = [
  { label: 'Work', to: '/work', number: '01', meta: '14 Case Files', x: 22, y: 30 },
  { label: 'Services', to: '/services', number: '02', meta: '09 Disciplines', x: 68, y: 22 },
  { label: 'Blog', to: '/blog', number: '03', meta: '27 Essays', x: 80, y: 58 },
  { label: 'About', to: '/about', number: '04', meta: 'Profile · Vol. 01', x: 20, y: 64 },
  { label: 'Contact', to: '/contact', number: '05', meta: 'Inbox · Q2 2026', x: 50, y: 84 },
];

// Constellation edges — closes the pentagon
const edges: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 4],
  [4, 3],
  [3, 0],
  [0, 4],
  [1, 3],
];

export default function ConstellationMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [cursor, setCursor] = useState({ x: -9999, y: -9999 });
  const [viewport, setViewport] = useState({ w: 1200, h: 800 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Ambient star field — generated once per mount
  const stars = useMemo(() => {
    const s: { x: number; y: number; size: number; delay: number; opacity: number }[] = [];
    for (let i = 0; i < 60; i++) {
      s.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 1.8 + 0.5,
        delay: Math.random() * 3,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }
    return s;
  }, []);

  useEffect(() => {
    if (!open) return;
    const update = () =>
      setViewport({ w: window.innerWidth, h: window.innerHeight });
    update();
    const onMove = (e: MouseEvent) => setCursor({ x: e.clientX, y: e.clientY });
    const onLeave = () => setCursor({ x: -9999, y: -9999 });
    window.addEventListener('resize', update);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseleave', onLeave);
    return () => {
      window.removeEventListener('resize', update);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  // Precompute pixel positions
  const orbPx = orbs.map((o) => ({
    ...o,
    px: (o.x / 100) * viewport.w,
    py: (o.y / 100) * viewport.h,
  }));

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={containerRef}
          className="fixed inset-0 z-[55] overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Pure black void */}
          <div className="absolute inset-0 bg-black" />

          {/* Radial ambient glow */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-[#A3D1FF]/8 blur-[180px] pointer-events-none"
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Grain */}
          <div
            className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/></svg>\")",
            }}
          />

          {/* Ambient stars */}
          {stars.map((s, i) => (
            <motion.span
              key={i}
              className="absolute rounded-full bg-white pointer-events-none"
              style={{
                left: `${s.x}%`,
                top: `${s.y}%`,
                width: `${s.size}px`,
                height: `${s.size}px`,
              }}
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, s.opacity, s.opacity * 0.3, s.opacity],
              }}
              transition={{
                duration: 3 + Math.random() * 3,
                repeat: Infinity,
                delay: s.delay,
              }}
            />
          ))}

          {/* SVG layer: constellation edges + cursor hairlines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 2 }}>
            {/* Static pentagon edges */}
            {edges.map(([a, b], i) => {
              const A = orbPx[a];
              const B = orbPx[b];
              return (
                <motion.line
                  key={`e${i}`}
                  x1={A.px}
                  y1={A.py}
                  x2={B.px}
                  y2={B.py}
                  stroke="#A3D1FF"
                  strokeOpacity={0.12}
                  strokeWidth={1}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{
                    duration: 1.4,
                    delay: 0.7 + i * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              );
            })}

            {/* Cursor-to-orb hairlines (only within radius) */}
            {orbPx.map((o, i) => {
              const dx = cursor.x - o.px;
              const dy = cursor.y - o.py;
              const dist = Math.hypot(dx, dy);
              const MAX = 360;
              if (dist > MAX || dist < 4) return null;
              const op = Math.pow(1 - dist / MAX, 1.5) * 0.9;
              return (
                <line
                  key={`c${i}`}
                  x1={cursor.x}
                  y1={cursor.y}
                  x2={o.px}
                  y2={o.py}
                  stroke="#A3D1FF"
                  strokeOpacity={op}
                  strokeWidth={1}
                />
              );
            })}
          </svg>

          {/* Masthead label */}
          <motion.div
            className="absolute top-6 left-6 md:top-8 md:left-8 flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.3em] text-white/45"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#A3D1FF] animate-pulse" />
            Navigation · Constellation 01
          </motion.div>

          {/* Close */}
          <motion.button
            onClick={onClose}
            className="absolute top-6 right-6 md:top-8 md:right-8 z-[60] w-12 h-12 flex items-center justify-center border border-white/20 text-white hover:bg-white hover:text-black transition-colors"
            aria-label="Close menu"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <X className="w-5 h-5" />
          </motion.button>

          {/* Orbs + labels */}
          {orbPx.map((o, i) => {
            const dx = cursor.x - o.px;
            const dy = cursor.y - o.py;
            const dist = Math.hypot(dx, dy);
            const PULL = 200;
            const within = dist < PULL && dist > 0;
            const pullStrength = within ? Math.pow(1 - dist / PULL, 2) * 28 : 0;
            const ox = within ? (dx / dist) * pullStrength : 0;
            const oy = within ? (dy / dist) * pullStrength : 0;
            const near = dist < 140;

            return (
              <motion.div
                key={o.to}
                className="absolute"
                style={{
                  left: `${o.x}%`,
                  top: `${o.y}%`,
                  zIndex: 3,
                  transform: `translate(-50%, -50%) translate(${ox}px, ${oy}px)`,
                  transition: 'transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{
                  delay: 0.45 + i * 0.12,
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Link
                  href={o.to}
                  onClick={onClose}
                  className="group flex flex-col items-center"
                >
                  {/* Orb */}
                  <span className="relative w-6 h-6 flex items-center justify-center mb-3 md:mb-4">
                    <span className="absolute inset-[-10px] rounded-full bg-[#A3D1FF]/20 blur-md" />
                    <span className="absolute inset-0 rounded-full bg-[#A3D1FF]/50 animate-[orbpulse_3s_ease-in-out_infinite]" />
                    <span
                      className={`relative w-2.5 h-2.5 rounded-full bg-[#A3D1FF] transition-all duration-500 ${
                        near ? 'scale-[2.2] shadow-[0_0_24px_rgba(163,209,255,0.8)]' : ''
                      } group-hover:scale-[2.4]`}
                    />
                  </span>
                  {/* Meta label */}
                  <div
                    className={`text-[9px] md:text-[10px] font-mono uppercase tracking-[0.3em] transition-colors duration-300 mb-1.5 md:mb-2 ${
                      near ? 'text-[#A3D1FF]' : 'text-white/50'
                    } group-hover:text-[#A3D1FF]`}
                  >
                    {o.number} · {o.meta}
                  </div>
                  {/* Title */}
                  <div
                    className={`text-white text-[2rem] md:text-[3.5rem] leading-none italic transition-all duration-500 ${
                      near ? 'tracking-[-0.01em]' : 'tracking-[-0.02em]'
                    }`}
                    style={{
                      fontFamily: "Georgia, 'Times New Roman', serif",
                    }}
                  >
                    {o.label}
                  </div>
                </Link>
              </motion.div>
            );
          })}

          {/* Cursor halo */}
          <div
            className="absolute pointer-events-none rounded-full bg-[#A3D1FF]/20 blur-xl transition-opacity duration-300"
            style={{
              left: cursor.x - 80,
              top: cursor.y - 80,
              width: 160,
              height: 160,
              opacity: cursor.x > 0 ? 1 : 0,
              zIndex: 1,
            }}
          />

          {/* Bottom socials / availability */}
          <motion.div
            className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 flex items-center justify-between gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.3em] text-white/60">
              <span className="relative flex w-2 h-2">
                <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-60" />
                <span className="relative w-2 h-2 rounded-full bg-green-400" />
              </span>
              Available — Q2 2026
            </div>
            <div className="flex gap-2">
              <a
                href="https://www.linkedin.com/in/portfolio2/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center border border-white/20 text-white hover:bg-[#A3D1FF] hover:text-black hover:border-[#A3D1FF] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5 md:w-4 md:h-4" />
              </a>
              <a
                href="https://www.behance.net/marcfriedmanweb"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center border border-white/20 text-white hover:bg-[#A3D1FF] hover:text-black hover:border-[#A3D1FF] transition-colors"
                aria-label="Behance"
              >
                <Palette className="w-3.5 h-3.5 md:w-4 md:h-4" />
              </a>
              <a
                href="https://www.awwwards.com/marc-friedman/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center border border-white/20 text-white hover:bg-[#A3D1FF] hover:text-black hover:border-[#A3D1FF] transition-colors"
                aria-label="Awwwards"
              >
                <Trophy className="w-3.5 h-3.5 md:w-4 md:h-4" />
              </a>
              <a
                href={CALENDLY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center border border-white/20 text-white hover:bg-[#A3D1FF] hover:text-black hover:border-[#A3D1FF] transition-colors"
                aria-label="Schedule a call"
              >
                <Calendar className="w-3.5 h-3.5 md:w-4 md:h-4" />
              </a>
            </div>
          </motion.div>

          <style jsx>{`
            @keyframes orbpulse {
              0%, 100% { transform: scale(1); opacity: 0.55; }
              50% { transform: scale(1.5); opacity: 0.15; }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
