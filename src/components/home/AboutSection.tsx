"use client";

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, MessageSquare, Move, Pen, Code2, Layers, Palette as PaletteIcon } from 'lucide-react';
import Link from 'next/link';

const SERIF = "Georgia, 'Times New Roman', serif";
const CALENDLY_LINK = 'https://calendly.com/marc-friedman-web-design--meeting-link/30min';
const PORTRAIT =
  'https://ik.imagekit.io/qcvroy8xpd/PW8VUKH.png?updatedAt=1759693058055&tr=f-webp';

function ChapterMarker({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <span className="text-white/50 text-xs font-mono tracking-[0.3em] uppercase">
        {number}
      </span>
      <span className="h-[1px] flex-1 bg-white/15 max-w-[60px]" />
      <span className="text-white/50 text-xs font-mono tracking-[0.3em] uppercase">
        {label}
      </span>
    </div>
  );
}

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-20% 0px' });

  const [slider, setSlider] = useState(50);
  const [mode, setMode] = useState<'auto' | 'cursor' | 'drag'>('auto');
  const draggingRef = useRef(false);

  // Auto-oscillate demo when not interacted with
  useEffect(() => {
    if (mode !== 'auto' || !inView) return;
    let t = Math.PI / 2;
    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      t += dt * 0.7;
      const pct = 50 + Math.sin(t) * 30;
      setSlider(pct);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [mode, inView]);

  const clamp = (n: number) => Math.max(2, Math.min(98, n));

  const moveToX = (clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setSlider(clamp(pct));
  };

  // Pointer events for unified touch/mouse drag
  useEffect(() => {
    const onPointerMove = (e: PointerEvent) => {
      if (!draggingRef.current) return;
      moveToX(e.clientX);
    };
    const onPointerUp = () => {
      if (draggingRef.current) {
        draggingRef.current = false;
        setMode('auto');
      }
    };
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('pointercancel', onPointerUp);
    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('pointercancel', onPointerUp);
    };
  }, []);

  const startDrag = (e: React.PointerEvent) => {
    e.preventDefault();
    draggingRef.current = true;
    setMode('drag');
    moveToX(e.clientX);
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 px-6 lg:px-12 bg-black border-t border-white/10 overflow-hidden"
    >
      {/* Glow + grain */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#A3D1FF]/8 rounded-full blur-[140px] pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/></svg>\")",
        }}
      />

      <div className="max-w-7xl mx-auto relative">
        <ChapterMarker number="Chapter · The Operator" label="About · One Person" />

        <div className="text-center mb-10 md:mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-[10px] font-mono uppercase tracking-[0.35em] text-[#A3D1FF] mb-6"
          >
            — The pitch, in one sentence
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-white leading-[0.9] tracking-[-0.03em]"
            style={{
              fontFamily: SERIF,
              fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
              fontWeight: 400,
            }}
          >
            One designer.{' '}
            <span className="md:inline block">One developer.</span>{' '}
            <em className="italic text-[#A3D1FF]">Zero handoffs.</em>
          </motion.h2>
        </div>

        {/* Dual Identity Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {/* Side labels */}
          <div className="absolute -top-10 left-0 right-0 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.3em] px-2">
            <span className="flex items-center gap-2 text-white/60">
              <Pen className="w-3 h-3" strokeWidth={1.5} />
              <span>Designer</span>
            </span>
            <span className="flex items-center gap-2 text-white/60">
              <span>Developer</span>
              <Code2 className="w-3 h-3" strokeWidth={1.5} />
            </span>
          </div>

          <div
            ref={containerRef}
            className="relative aspect-[16/10] md:aspect-[16/9] max-w-6xl mx-auto select-none overflow-hidden border border-white/10 bg-black touch-none"
            onMouseEnter={() => {
              if (!draggingRef.current) setMode('cursor');
            }}
            onMouseMove={(e) => {
              if (draggingRef.current || mode === 'drag') return;
              moveToX(e.clientX);
            }}
            onMouseLeave={() => {
              if (!draggingRef.current) setMode('auto');
            }}
          >
            {/* Designer layer (base) */}
            <DesignerLayer />

            {/* Developer layer — clipped from the slider position rightward */}
            <div
              className="absolute inset-0"
              style={{ clipPath: `inset(0 0 0 ${slider}%)` }}
            >
              <DeveloperLayer />
            </div>

            {/* Slider divider */}
            <div
              className="absolute top-0 bottom-0 z-20 pointer-events-none"
              style={{ left: `${slider}%`, transform: 'translateX(-50%)' }}
            >
              <div className="relative w-px h-full bg-[#A3D1FF]/90">
                {/* Top label */}
                <div className="absolute top-5 left-1/2 -translate-x-1/2 text-[8px] font-mono uppercase tracking-[0.35em] text-[#A3D1FF] whitespace-nowrap px-2 py-1 bg-black/60 backdrop-blur-sm border border-[#A3D1FF]/30">
                  Drag
                </div>
                {/* Handle */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto cursor-ew-resize touch-none"
                  onPointerDown={startDrag}
                >
                  <div className="relative">
                    <span className="absolute inset-[-10px] rounded-full bg-[#A3D1FF]/30 blur-md" />
                    <div className="relative w-14 h-14 rounded-full bg-[#A3D1FF] flex items-center justify-center shadow-[0_0_32px_rgba(163,209,255,0.6)]">
                      <Move className="w-5 h-5 text-black" strokeWidth={2} />
                    </div>
                  </div>
                </div>
                {/* Equation label at bottom */}
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-[14px] font-mono text-[#A3D1FF] whitespace-nowrap italic" style={{ fontFamily: SERIF }}>
                  =
                </div>
              </div>
            </div>

            {/* Grain inside portrait for film texture */}
            <div
              className="absolute inset-0 opacity-[0.08] mix-blend-overlay pointer-events-none"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.95' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/></svg>\")",
              }}
            />
          </div>

          {/* Bottom mode indicator */}
          <div className="mt-4 flex items-center justify-center gap-3 text-[10px] font-mono uppercase tracking-[0.3em] text-white/40">
            <span
              className={`flex w-1.5 h-1.5 rounded-full ${
                mode === 'auto' ? 'bg-white/30' : 'bg-[#A3D1FF] animate-pulse'
              }`}
            />
            <span>
              {mode === 'auto'
                ? 'Auto · Hover or drag to explore'
                : 'Live · Tracking your cursor'}
            </span>
          </div>
        </motion.div>

        {/* Stats */}
        <StatsRow />

        {/* Supporting copy + CTAs */}
        <div className="max-w-2xl mx-auto mt-14 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="space-y-6 text-lg md:text-xl text-white/75 leading-relaxed mb-10"
          >
            <p>
              At an agency, your project gets passed between a designer, a developer, a
              PM, and{' '}
              <em className="text-white/90" style={{ fontFamily: SERIF }}>
                whoever&apos;s available on Tuesday
              </em>
              .
            </p>
            <p>
              With me, the person who designs your site is the same person who codes it.
              Fewer misunderstandings, faster turnarounds, a website that actually matches
              the vision.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-5"
          >
            <a
              href={CALENDLY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-black font-medium px-8 py-4 hover:bg-[#A3D1FF] transition-colors group"
            >
              <MessageSquare className="w-4 h-4" />
              Let&apos;s talk
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-white font-medium border-b border-white/30 hover:border-[#A3D1FF] hover:text-[#A3D1FF] transition-colors py-1"
            >
              Full profile
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function DesignerLayer() {
  return (
    <div className="absolute inset-0">
      <img
        src={PORTRAIT}
        alt="Marc Friedman — designer"
        className="absolute inset-0 w-full h-full object-cover object-top grayscale contrast-125"
      />
      {/* Warm/cream overlay tint for the designer side */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f5efe8]/[0.05] via-transparent to-transparent mix-blend-soft-light" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

      {/* Top meta */}
      <div className="absolute top-5 left-5 md:top-6 md:left-6 flex items-center gap-2 text-[9px] font-mono uppercase tracking-[0.3em] text-white/75">
        <span className="w-1.5 h-1.5 rounded-full bg-[#A3D1FF]" />
        Designer · Vol. 01
      </div>
      <div className="absolute top-5 right-[55%] md:top-6 text-[9px] font-mono uppercase tracking-[0.3em] text-white/50 hidden sm:block">
        Figma · Grid 12
      </div>

      {/* Figma-style corner selection brackets */}
      <div className="absolute top-10 left-[12%] w-5 h-5 border-l-2 border-t-2 border-[#A3D1FF]/70" />
      <div className="absolute top-10 left-[42%] w-5 h-5 border-r-2 border-t-2 border-[#A3D1FF]/70" />
      <div className="absolute bottom-14 left-[12%] w-5 h-5 border-l-2 border-b-2 border-[#A3D1FF]/70" />
      <div className="absolute bottom-14 left-[42%] w-5 h-5 border-r-2 border-b-2 border-[#A3D1FF]/70" />

      {/* Selection bounding label */}
      <div className="absolute top-[7%] left-[12%] -translate-y-full mb-1 flex items-center gap-1.5 text-[9px] font-mono text-[#A3D1FF] px-1.5 py-0.5 bg-black/70 border border-[#A3D1FF]/40">
        <Layers className="w-2.5 h-2.5" />
        Portrait — 240 × 320
      </div>

      {/* Annotation line + label pointing to subject */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        preserveAspectRatio="none"
      >
        <line
          x1="8%"
          y1="35%"
          x2="22%"
          y2="45%"
          stroke="#A3D1FF"
          strokeWidth="1"
          strokeDasharray="3 3"
          opacity="0.7"
        />
        <circle cx="22%" cy="45%" r="3" fill="none" stroke="#A3D1FF" strokeWidth="1" />
      </svg>
      <div className="absolute top-[30%] left-[2%] text-[9px] font-mono uppercase tracking-[0.25em] text-white/70 max-w-[12ch]">
        Typography
        <br />
        <span className="text-[#A3D1FF]">Georgia · 400</span>
      </div>

      {/* Color swatches (bottom) */}
      <div className="absolute bottom-5 left-5 md:bottom-6 md:left-6 flex items-center gap-2">
        <PaletteIcon className="w-3 h-3 text-white/50" strokeWidth={1.5} />
        <div className="flex gap-0.5">
          {['#000000', '#0a0a0a', '#1a1a1a', '#A3D1FF', '#f5f3ef', '#ffffff'].map((c, i) => (
            <div
              key={i}
              className="w-4 h-4 border border-white/25"
              style={{ backgroundColor: c }}
            />
          ))}
        </div>
      </div>

      {/* Ruler marks along top edge */}
      <div className="absolute top-0 left-0 right-0 h-3 flex items-end justify-between px-[12%] pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <span
            key={i}
            className={`${i % 4 === 0 ? 'h-2' : 'h-1'} w-px bg-[#A3D1FF]/40`}
          />
        ))}
      </div>
    </div>
  );
}

function DeveloperLayer() {
  return (
    <div className="absolute inset-0">
      <img
        src={PORTRAIT}
        alt="Marc Friedman — developer"
        className="absolute inset-0 w-full h-full object-cover object-top grayscale contrast-125"
      />
      {/* Blue-tech tint for the developer side */}
      <div className="absolute inset-0 bg-[#A3D1FF]/[0.06] mix-blend-color" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

      {/* Top meta */}
      <div className="absolute top-5 right-5 md:top-6 md:right-6 flex items-center gap-2 text-[9px] font-mono uppercase tracking-[0.3em] text-white/75">
        Developer · Vol. 01
        <span className="w-1.5 h-1.5 rounded-full bg-[#A3D1FF]" />
      </div>
      <div className="absolute top-5 left-[55%] md:top-6 text-[9px] font-mono uppercase tracking-[0.3em] text-white/50 hidden sm:block">
        React · Next.js · Node
      </div>

      {/* Terminal/code window */}
      <div className="absolute top-1/2 right-[4%] md:right-[6%] -translate-y-1/2 w-[280px] md:w-[340px] border border-white/20 bg-black/85 backdrop-blur-sm font-mono text-[11px] leading-[1.8]">
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/10">
          <span className="w-2 h-2 rounded-full bg-white/20" />
          <span className="w-2 h-2 rounded-full bg-white/20" />
          <span className="w-2 h-2 rounded-full bg-white/20" />
          <span className="ml-auto text-[9px] text-white/40 tracking-[0.25em] uppercase">
            marc.ts
          </span>
        </div>
        <div className="p-4">
          <div className="flex gap-3 text-white/80">
            <span className="text-white/25 tabular-nums select-none">01</span>
            <span>
              <span className="text-[#A3D1FF]">const</span>{' '}
              <span className="text-white">Marc</span> = {'{'}
            </span>
          </div>
          <div className="flex gap-3 text-white/80">
            <span className="text-white/25 tabular-nums select-none">02</span>
            <span className="pl-3">
              <span className="text-white/60">role:</span>{' '}
              <span className="text-[#A3D1FF]">&apos;designer&apos;</span>,
            </span>
          </div>
          <div className="flex gap-3 text-white/80">
            <span className="text-white/25 tabular-nums select-none">03</span>
            <span className="pl-3">
              <span className="text-white/60">alsoRole:</span>{' '}
              <span className="text-[#A3D1FF]">&apos;developer&apos;</span>,
            </span>
          </div>
          <div className="flex gap-3 text-white/80">
            <span className="text-white/25 tabular-nums select-none">04</span>
            <span className="pl-3">
              <span className="text-white/60">handoffs:</span>{' '}
              <span className="text-white">0</span>,
            </span>
          </div>
          <div className="flex gap-3 text-white/80">
            <span className="text-white/25 tabular-nums select-none">05</span>
            <span className="pl-3">
              <span className="text-white/60">shipped:</span>{' '}
              <span className="text-white">50</span>+,
            </span>
          </div>
          <div className="flex gap-3 text-white/80">
            <span className="text-white/25 tabular-nums select-none">06</span>
            <span>{'};'}</span>
          </div>
          <div className="flex gap-3 mt-1">
            <span className="text-white/25 tabular-nums select-none">→</span>
            <span className="text-[#A3D1FF]">
              ✓ compiled
              <span className="inline-block w-2 h-3 bg-[#A3D1FF] ml-1 align-middle animate-pulse" />
            </span>
          </div>
        </div>
      </div>

      {/* Corner: git branch */}
      <div className="absolute bottom-5 left-5 md:bottom-6 md:left-6 flex items-center gap-2 text-[9px] font-mono uppercase tracking-[0.25em] text-white/50">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-400" />
        <span>
          <span className="text-[#A3D1FF]">main</span> · up to date
        </span>
      </div>
    </div>
  );
}

function StatsRow() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="grid grid-cols-3 gap-4 md:gap-6 py-8 border-y border-white/10 mt-12 max-w-3xl mx-auto"
    >
      {[
        { n: '01', l: 'Point of contact' },
        { n: '00', l: 'Handoffs' },
        { n: '50+', l: 'Shipped' },
      ].map((s) => (
        <div key={s.l} className="text-center">
          <div
            className="text-white italic leading-none mb-2"
            style={{
              fontFamily: SERIF,
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 400,
              fontVariantNumeric: 'tabular-nums',
            }}
          >
            {s.n}
          </div>
          <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/50">
            {s.l}
          </div>
        </div>
      ))}
    </motion.div>
  );
}
