"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const SERIF = "'Fraunces', Georgia, 'Times New Roman', serif";

const steps = [
  {
    numeral: 'I.',
    kicker: 'Week 00',
    title: 'Book a Call',
    description:
      "Tell me what's frustrating you about your website. I'll tell you if I can help. 30 minutes, zero obligation.",
    tag: 'Zero-obligation discovery',
  },
  {
    numeral: 'II.',
    kicker: 'Weeks 01–06',
    title: 'I Build It',
    description:
      "Custom design and development. Modern tech stack (React/Node). Weekly updates so you're never in the dark.",
    tag: 'Hand-coded, no templates',
  },
  {
    numeral: 'III.',
    kicker: 'Week 07+',
    title: 'You Launch & Grow',
    description:
      'Your site goes live, leads start coming in, and I stick around for 30 days to make sure nothing breaks. Your success is my next case study.',
    tag: '30 days of post-launch care',
  },
];

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

function Step({
  step,
  index,
  total,
}: {
  step: (typeof steps)[number];
  index: number;
  total: number;
}) {
  const rowRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: rowRef,
    offset: ['start 80%', 'end 20%'],
  });
  const lineScale = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const numY = useTransform(scrollYProgress, [0, 1], ['40%', '-40%']);
  const numOpacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75, 1],
    [0.2, 1, 1, 0.2],
  );

  const isLast = index === total - 1;

  return (
    <div ref={rowRef} className="relative grid md:grid-cols-[220px_1fr] gap-8 md:gap-16 py-14 md:py-20">
      {/* Left: giant numeral with scroll motion */}
      <div className="relative">
        <motion.div
          style={{ y: numY, opacity: numOpacity }}
          className="text-[#A3D1FF] leading-none"
        >
          <span
            style={{
              fontFamily: SERIF,
              fontSize: 'clamp(5rem, 13vw, 11rem)',
              fontWeight: 300,
              fontStyle: 'italic',
            }}
          >
            {step.numeral}
          </span>
        </motion.div>
      </div>

      {/* Connecting vertical line (except on last step) */}
      {!isLast && (
        <motion.span
          style={{ scaleY: lineScale }}
          className="hidden md:block absolute left-[110px] top-[60%] bottom-[-60%] w-[1px] bg-gradient-to-b from-[#A3D1FF]/60 via-[#A3D1FF]/30 to-transparent origin-top"
        />
      )}

      {/* Right: copy */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex items-center gap-3 mb-5">
          <span className="text-[10px] font-mono uppercase tracking-[0.35em] text-white/50">
            {step.kicker}
          </span>
          <span className="h-[1px] w-8 bg-white/20" />
          <span className="text-[10px] font-mono uppercase tracking-[0.35em] text-[#A3D1FF]">
            Step {index + 1} of {total}
          </span>
        </div>

        <h3
          className="text-white mb-6 leading-[1.0] tracking-[-0.02em]"
          style={{
            fontFamily: SERIF,
            fontSize: 'clamp(2.25rem, 5vw, 4rem)',
            fontWeight: 400,
          }}
        >
          {step.title}
        </h3>

        <p className="text-lg md:text-xl text-white/75 leading-relaxed max-w-2xl mb-6">
          {step.description}
        </p>

        <span className="inline-flex items-center gap-2 px-3 py-1.5 border border-white/15 rounded-full text-xs font-mono uppercase tracking-[0.2em] text-white/70">
          <span className="w-1.5 h-1.5 rounded-full bg-[#A3D1FF]" />
          {step.tag}
        </span>
      </motion.div>
    </div>
  );
}

export default function HowItWorksSection() {
  return (
    <section className="relative py-28 md:py-36 px-6 lg:px-12 bg-[#0a0a0a] border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <ChapterMarker number="Chapter · The Path" label="Process · 03 Stages" />

        <div className="grid md:grid-cols-[1.2fr_1fr] gap-8 md:gap-16 items-end mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9 }}
            className="text-white leading-[0.95] tracking-[-0.03em]"
            style={{
              fontFamily: SERIF,
              fontSize: 'clamp(2.75rem, 7vw, 6.5rem)',
              fontWeight: 400,
            }}
          >
            Three steps.{' '}
            <em className="italic text-[#A3D1FF]">No mysteries.</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/60 text-lg leading-relaxed"
          >
            Every engagement follows the same rhythm — so you always know what&apos;s next
            and when.
          </motion.p>
        </div>

        <div className="divide-y divide-white/10 border-y border-white/10 relative">
          {steps.map((step, i) => (
            <Step key={step.title} step={step} index={i} total={steps.length} />
          ))}
        </div>
      </div>
    </section>
  );
}
