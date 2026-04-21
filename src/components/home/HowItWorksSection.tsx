"use client";

import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { useRef, useState } from 'react';
import { Phone, Rocket } from 'lucide-react';

const SERIF = "Georgia, 'Times New Roman', serif";

type Chapter = {
  numeral: string;
  kicker: string;
  title: string;
  description: string;
  tag: string;
  visual: 'call' | 'build' | 'launch';
};

const chapters: Chapter[] = [
  {
    numeral: 'I',
    kicker: 'Week 00',
    title: 'Book a Call',
    description:
      "Tell me what's frustrating you about your website. I'll tell you if I can help. 30 minutes, zero obligation.",
    tag: 'Zero-obligation discovery',
    visual: 'call',
  },
  {
    numeral: 'II',
    kicker: 'Weeks 01–06',
    title: 'I Build It',
    description:
      "Custom design and development. Modern tech stack (React/Node). Weekly updates so you're never in the dark.",
    tag: 'Hand-coded, no templates',
    visual: 'build',
  },
  {
    numeral: 'III',
    kicker: 'Week 07+',
    title: 'You Launch & Grow',
    description:
      'Your site goes live, leads start coming in, and I stick around for 30 days to make sure nothing breaks.',
    tag: '30 days of post-launch care',
    visual: 'launch',
  },
];

export default function HowItWorksSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const trackX = useTransform(scrollYProgress, [0.05, 0.95], ['0vw', '-200vw']);
  const scrubberW = useTransform(scrollYProgress, [0.05, 0.95], ['0%', '100%']);
  const introOpacity = useTransform(scrollYProgress, [0, 0.04, 0.08], [1, 0.6, 0]);
  const introScale = useTransform(scrollYProgress, [0, 0.08], [1, 1.15]);

  const [activeChapter, setActiveChapter] = useState(0);
  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    // Map scroll progress to active chapter (with small buffers)
    if (v < 0.08) setActiveChapter(0);
    else if (v < 0.38) setActiveChapter(0);
    else if (v < 0.68) setActiveChapter(1);
    else setActiveChapter(2);
  });

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0a0a0a] border-t border-b border-white/10"
      style={{ height: '320vh' }}
      aria-label="How it works"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Grain */}
        <div
          className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/></svg>\")",
          }}
        />
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-[#A3D1FF]/5 blur-[180px] pointer-events-none" />

        {/* Top: film strip progress bar */}
        <div className="absolute top-8 md:top-10 left-6 md:left-12 right-6 md:right-12 z-30 flex items-center gap-4 md:gap-8">
          <div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.3em] text-white/50 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A3D1FF] animate-pulse" />
            <span className="hidden sm:inline">Chapter · The Path</span>
          </div>

          {/* Scrubber with film sprocket ticks */}
          <div className="flex-1 relative h-[1px] bg-white/10">
            <motion.div
              className="absolute inset-y-0 left-0 bg-[#A3D1FF]"
              style={{ width: scrubberW }}
            />
            {chapters.map((ch, i) => {
              const pos = i / (chapters.length - 1);
              const reached = activeChapter >= i;
              return (
                <div
                  key={i}
                  className="absolute top-1/2"
                  style={{ left: `${pos * 100}%`, transform: 'translate(-50%, -50%)' }}
                >
                  <div
                    className={`w-3 h-3 border transition-colors duration-500 ${
                      reached ? 'border-[#A3D1FF] bg-[#A3D1FF]' : 'border-white/30 bg-[#0a0a0a]'
                    }`}
                  />
                  <span
                    className={`absolute top-5 left-1/2 -translate-x-1/2 text-[9px] font-mono uppercase tracking-[0.25em] whitespace-nowrap transition-colors duration-500 ${
                      reached ? 'text-[#A3D1FF]' : 'text-white/30'
                    }`}
                  >
                    {ch.numeral}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#A3D1FF] tabular-nums shrink-0">
            {String(activeChapter + 1).padStart(2, '0')} / 03
          </div>
        </div>

        {/* Intro title — visible at scroll start */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center z-20 px-6 pointer-events-none"
          style={{ opacity: introOpacity, scale: introScale }}
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="h-[1px] w-10 bg-white/25" />
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/50">
              Process · 03 Stages
            </span>
            <span className="h-[1px] w-10 bg-white/25" />
          </div>
          <h2
            className="text-white text-center leading-[0.9] tracking-[-0.03em]"
            style={{
              fontFamily: SERIF,
              fontSize: 'clamp(3rem, 8.5vw, 7.5rem)',
              fontWeight: 400,
            }}
          >
            Three steps.
            <br />
            <em className="italic text-[#A3D1FF]">No mysteries.</em>
          </h2>
          <p className="mt-8 text-white/60 text-sm md:text-base font-mono uppercase tracking-[0.3em]">
            ↓ Scroll to watch the reel
          </p>
        </motion.div>

        {/* Horizontal track with 3 chapter panels */}
        <motion.div
          className="absolute inset-0 flex"
          style={{ x: trackX, width: '300vw' }}
          aria-hidden="true"
        >
          {chapters.map((ch, i) => (
            <ChapterPanel key={ch.numeral} chapter={ch} index={i} />
          ))}
        </motion.div>

        {/* Corner film-sprocket decoration */}
        <div className="absolute top-20 left-6 md:left-12 flex gap-2 z-10 pointer-events-none">
          {[0, 1, 2, 3, 4].map((i) => (
            <span key={i} className="w-1.5 h-3 bg-white/10" />
          ))}
        </div>
        <div className="absolute bottom-8 right-6 md:right-12 flex gap-2 z-10 pointer-events-none">
          {[0, 1, 2, 3, 4].map((i) => (
            <span key={i} className="w-1.5 h-3 bg-white/10" />
          ))}
        </div>
      </div>
    </section>
  );
}

function ChapterPanel({ chapter, index }: { chapter: Chapter; index: number }) {
  return (
    <div className="relative w-screen h-full flex items-center">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center">
        {/* Left: content */}
        <div className="relative">
          {/* Ghost numeral — huge, behind text */}
          <span
            className="absolute -top-16 -left-8 md:-top-24 md:-left-12 leading-none italic pointer-events-none select-none"
            style={{
              fontFamily: SERIF,
              fontSize: 'clamp(12rem, 24vw, 24rem)',
              fontWeight: 300,
              color: 'rgba(163, 209, 255, 0.07)',
            }}
          >
            {chapter.numeral}
          </span>

          <div className="relative">
            <div className="flex items-center gap-3 mb-6 text-[10px] font-mono uppercase tracking-[0.3em]">
              <span className="text-[#A3D1FF]">{chapter.kicker}</span>
              <span className="h-[1px] w-8 bg-[#A3D1FF]/50" />
              <span className="text-white/60">Step {index + 1} of 3</span>
            </div>

            <h3
              className="text-white leading-[0.95] tracking-[-0.02em] mb-6"
              style={{
                fontFamily: SERIF,
                fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
                fontWeight: 400,
              }}
            >
              {chapter.title}
            </h3>

            <p className="text-lg md:text-xl text-white/75 leading-relaxed mb-8 max-w-xl">
              {chapter.description}
            </p>

            <span className="inline-flex items-center gap-2 px-4 py-2 border border-white/20 text-[11px] font-mono uppercase tracking-[0.2em] text-white/75">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A3D1FF]" />
              {chapter.tag}
            </span>
          </div>
        </div>

        {/* Right: diagram */}
        <div className="hidden lg:flex items-center justify-center">
          <div className="relative w-[380px] h-[380px] xl:w-[440px] xl:h-[440px]">
            {chapter.visual === 'call' && <CallDiagram />}
            {chapter.visual === 'build' && <BuildDiagram />}
            {chapter.visual === 'launch' && <LaunchDiagram />}
          </div>
        </div>
      </div>
    </div>
  );
}

function CallDiagram() {
  return (
    <div className="relative w-full h-full">
      {[0, 1, 2, 3].map((i) => (
        <motion.span
          key={i}
          className="absolute inset-0 rounded-full border border-[#A3D1FF]/25"
          initial={{ scale: 0.2, opacity: 0 }}
          animate={{ scale: 1.1, opacity: [0, 0.7, 0] }}
          transition={{ duration: 3.2, repeat: Infinity, delay: i * 0.8, ease: 'easeOut' }}
        />
      ))}
      {/* Orbit dots */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        <span className="absolute top-[8%] left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#A3D1FF]/60" />
      </motion.div>
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: -360 }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
      >
        <span className="absolute top-1/2 right-[8%] -translate-y-1/2 w-1 h-1 rounded-full bg-white/40" />
      </motion.div>

      {/* Center phone */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-24 h-24 rounded-full bg-[#A3D1FF]/15 backdrop-blur-sm border border-[#A3D1FF]/30 flex items-center justify-center">
          <Phone className="w-8 h-8 text-[#A3D1FF]" strokeWidth={1.2} />
        </div>
      </div>

      {/* Corner meta */}
      <div className="absolute top-0 left-0 text-[9px] font-mono uppercase tracking-[0.3em] text-white/40">
        · Dial · Tone · Connect
      </div>
      <div className="absolute bottom-0 right-0 text-[9px] font-mono uppercase tracking-[0.3em] text-white/40">
        30 min
      </div>
    </div>
  );
}

function BuildDiagram() {
  const lines = [
    "const site = async () => {",
    "  await design();",
    "  await develop();",
    "  await review();",
    "  return launch();",
    "};",
  ];
  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 border border-white/15 bg-black/50 backdrop-blur-sm">
        {/* Window chrome */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-white/20" />
            <span className="w-2 h-2 rounded-full bg-white/20" />
            <span className="w-2 h-2 rounded-full bg-white/20" />
          </div>
          <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-white/40">
            build · 02
          </span>
        </div>

        <div className="p-5 font-mono text-[11px] leading-[1.9]">
          {lines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.12 }}
              className="flex gap-4 text-white/75"
            >
              <span className="text-white/25 select-none tabular-nums">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span>
                {line.includes('await') ? (
                  <>
                    <span className="text-[#A3D1FF]">await</span>
                    {line.replace('await', '')}
                  </>
                ) : line.includes('return') ? (
                  <>
                    <span className="text-[#A3D1FF]">return</span>
                    {line.replace('return', '')}
                  </>
                ) : line.includes('const') ? (
                  <>
                    <span className="text-[#A3D1FF]">const</span>
                    {line.replace('const', '')}
                  </>
                ) : (
                  line
                )}
              </span>
            </motion.div>
          ))}
          <motion.div
            className="inline-block w-2 h-4 bg-[#A3D1FF] ml-12 mt-1"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </div>
      </div>

      {/* Corner film marks */}
      <div className="absolute -top-2 -left-2 w-4 h-4 border-l border-t border-[#A3D1FF]/40" />
      <div className="absolute -top-2 -right-2 w-4 h-4 border-r border-t border-[#A3D1FF]/40" />
      <div className="absolute -bottom-2 -left-2 w-4 h-4 border-l border-b border-[#A3D1FF]/40" />
      <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r border-b border-[#A3D1FF]/40" />
    </div>
  );
}

function LaunchDiagram() {
  return (
    <div className="relative w-full h-full">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200" fill="none">
        {/* Grid */}
        {[0, 1, 2, 3, 4].map((i) => (
          <line
            key={`h${i}`}
            x1="20"
            y1={40 + i * 35}
            x2="180"
            y2={40 + i * 35}
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="0.5"
          />
        ))}
        {[0, 1, 2, 3, 4].map((i) => (
          <line
            key={`v${i}`}
            x1={40 + i * 35}
            y1="20"
            x2={40 + i * 35}
            y2="180"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="0.5"
          />
        ))}

        {/* Trajectory */}
        <motion.path
          d="M 20 180 Q 80 170, 120 120 T 180 20"
          stroke="#A3D1FF"
          strokeWidth="1.2"
          strokeDasharray="4 3"
          fill="none"
          initial={{ pathLength: 0, opacity: 0.5 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Ghost traces */}
        {[0.3, 0.6, 0.9].map((t, i) => (
          <motion.circle
            key={i}
            cx={20 + (180 - 20) * t}
            cy={180 - (180 - 20) * t - 10}
            r="1.5"
            fill="#A3D1FF"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.4 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 + i * 0.2, duration: 0.4 }}
          />
        ))}
      </svg>

      {/* Destination badge */}
      <motion.div
        className="absolute top-[10%] right-[10%] z-10"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 2, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="relative">
          <span className="absolute inset-[-12px] rounded-full bg-[#A3D1FF]/20 blur-md" />
          <div className="relative w-16 h-16 rounded-full bg-[#A3D1FF] flex items-center justify-center">
            <Rocket className="w-6 h-6 text-black" strokeWidth={1.5} />
          </div>
        </div>
      </motion.div>

      {/* Origin marker */}
      <div className="absolute bottom-[10%] left-[10%]">
        <div className="w-3 h-3 border border-[#A3D1FF]/60 rounded-full" />
        <div className="text-[9px] font-mono uppercase tracking-[0.25em] text-white/50 mt-2">
          Launch
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-0 left-0 text-[9px] font-mono uppercase tracking-[0.3em] text-white/40">
        · Orbit
      </div>
      <div className="absolute bottom-0 right-0 text-[9px] font-mono uppercase tracking-[0.3em] text-[#A3D1FF]">
        +30 days
      </div>
    </div>
  );
}
