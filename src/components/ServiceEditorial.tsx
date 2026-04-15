"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Mail } from 'lucide-react';
import Link from 'next/link';

export const SERIF = "'Fraunces', Georgia, 'Times New Roman', serif";
const CALENDLY = 'https://calendly.com/marc-friedman-web-design--meeting-link/30min';

/* ---------------- Chapter Marker ---------------- */
export function ChapterMarker({ number, label }: { number: string; label: string }) {
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

/* ---------------- Kinetic Word ---------------- */
export function KineticWord({
  word,
  delay = 0,
  italic = false,
}: {
  word: string;
  delay?: number;
  italic?: boolean;
}) {
  return (
    <span className={`inline-block ${italic ? 'italic font-light' : ''}`}>
      {word.split('').map((ch, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span
            initial={{ y: '105%' }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.9,
              delay: delay + i * 0.04,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="inline-block"
          >
            {ch === ' ' ? '\u00A0' : ch}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/* ---------------- Service Masthead ---------------- */
export function ServiceMasthead({
  kicker,
  title,
  italicWord,
  tagline,
  meta,
  imageSrc,
  volumeNumber = '01',
}: {
  kicker: string;
  title: string;
  italicWord: string;
  tagline: React.ReactNode;
  meta: string[];
  imageSrc?: string;
  volumeNumber?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section ref={ref} className="relative min-h-screen bg-black overflow-hidden">
      {imageSrc && (
        <motion.div
          className="absolute inset-0 z-0"
          style={{ y, opacity, scale }}
        >
          <motion.div
            initial={{ scale: 1.25, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 lg:left-[38%]"
          >
            <img
              src={imageSrc}
              alt=""
              className="w-full h-full object-cover object-center grayscale contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/20 lg:from-black lg:via-black/55 lg:to-black/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
          </motion.div>
        </motion.div>
      )}

      {/* Spotlight glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.5, delay: 0.3 }}
        className="absolute top-1/2 left-0 lg:left-[5%] -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#A3D1FF]/10 blur-[140px] z-[5] pointer-events-none"
      />

      {/* Grain */}
      <div
        className="absolute inset-0 z-10 opacity-[0.07] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.5'/></svg>\")",
        }}
      />

      {/* Corner frame marks */}
      <div className="absolute inset-0 z-[15] pointer-events-none hidden md:block">
        {['top-8 left-8', 'top-8 right-8', 'bottom-8 left-8', 'bottom-8 right-8'].map(
          (pos, i) => (
            <div key={i} className={`absolute ${pos} w-4 h-4`}>
              <div className="absolute inset-0 border-l border-t border-white/20" />
            </div>
          ),
        )}
      </div>

      <div className="container-custom relative z-20 min-h-screen flex flex-col justify-between pt-32 pb-10">
        {/* Top ribbon */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex justify-between items-start text-[10px] md:text-xs font-mono uppercase tracking-[0.3em] text-white/60"
        >
          <div className="flex items-center gap-3">
            <span className="w-6 h-[1px] bg-white/40" />
            <span>Service · Vol. {volumeNumber}</span>
          </div>
          <span className="text-right">
            Marc Friedman
            <br />
            <span className="text-white/40">Est. 2018</span>
          </span>
        </motion.div>

        {/* Title block */}
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="flex items-center gap-4 mb-6"
          >
            <motion.span
              className="inline-block w-10 h-[1px] bg-[#A3D1FF]"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              style={{ transformOrigin: 'left' }}
            />
            <p className="text-xs font-mono uppercase tracking-[0.4em] text-[#A3D1FF]">
              {kicker}
            </p>
          </motion.div>

          <h1
            className="text-white leading-[0.88] tracking-[-0.04em] mb-8"
            style={{
              fontFamily: SERIF,
              fontSize: 'clamp(3rem, 11vw, 10rem)',
              fontWeight: 400,
            }}
          >
            <span className="block">
              <KineticWord word={title} delay={0.25} />
            </span>
            <span className="block text-white/80">
              <KineticWord word={italicWord} delay={0.5} italic />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.7 }}
            className="text-xl md:text-2xl text-white/75 max-w-2xl leading-snug"
          >
            {tagline}
          </motion.p>
        </div>

        {/* Meta bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-6 border-t border-white/10 text-[10px] md:text-xs font-mono uppercase tracking-[0.25em] text-white/60"
        >
          <span className="flex items-center gap-2 text-white">
            <span className="relative flex w-2 h-2">
              <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-60" />
              <span className="relative w-2 h-2 rounded-full bg-green-400" />
            </span>
            Taking bookings — Q2 2026
          </span>
          {meta.map((m) => (
            <span key={m}>{m}</span>
          ))}
          <Link
            href="#start"
            className="ml-auto flex items-center gap-2 text-white hover:text-[#A3D1FF] transition-colors group"
          >
            Start a project
            <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- Marquee Strip ---------------- */
export function ServiceMarquee({ phrases }: { phrases: string[] }) {
  return (
    <section className="relative bg-black border-y border-white/10 overflow-hidden">
      <style>{`
        @keyframes svc-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .svc-marquee {
          animation: svc-marquee 36s linear infinite;
          display: flex;
          width: max-content;
        }
        @media (prefers-reduced-motion: reduce) { .svc-marquee { animation: none; } }
      `}</style>
      <div className="svc-marquee py-6 md:py-8">
        {[...Array(2)].map((_, dup) => (
          <div key={dup} className="flex items-center gap-10 md:gap-16 pr-10 md:pr-16">
            {phrases.map((phrase, i) => (
              <span key={i} className="flex items-center gap-10 md:gap-16 shrink-0">
                <span
                  className="text-white/80 leading-none whitespace-nowrap"
                  style={{
                    fontFamily: SERIF,
                    fontSize: 'clamp(1.75rem, 4vw, 3rem)',
                    fontWeight: 500,
                    fontStyle: i % 2 === 0 ? 'italic' : 'normal',
                  }}
                >
                  {phrase}
                </span>
                <span className="text-[#A3D1FF] text-3xl md:text-5xl">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Editorial Section Wrapper ---------------- */
export function EditorialSection({
  chapter,
  label,
  title,
  italicTitle,
  lead,
  children,
  bg = 'bg-black',
}: {
  chapter: string;
  label: string;
  title: React.ReactNode;
  italicTitle?: string;
  lead?: React.ReactNode;
  children: React.ReactNode;
  bg?: string;
}) {
  return (
    <section
      className={`relative py-24 md:py-32 px-6 lg:px-12 ${bg} border-t border-white/10`}
    >
      <div className="max-w-7xl mx-auto">
        <ChapterMarker number={chapter} label={label} />
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9 }}
          className="text-white leading-[0.95] tracking-[-0.03em] mb-8 max-w-5xl"
          style={{
            fontFamily: SERIF,
            fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
            fontWeight: 400,
          }}
        >
          {title}
          {italicTitle && (
            <>
              {' '}
              <em className="italic text-[#A3D1FF]">{italicTitle}</em>
            </>
          )}
        </motion.h2>
        {lead && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white/70 max-w-3xl mb-16 leading-relaxed"
          >
            {lead}
          </motion.p>
        )}
        {children}
      </div>
    </section>
  );
}

/* ---------------- Problem Quote (voice-of-customer) ---------------- */
export function ProblemQuote({
  text,
  align = 'left',
  size = 'md',
}: {
  text: string;
  align?: 'left' | 'right';
  size?: 'md' | 'lg';
}) {
  const sizeClass =
    size === 'lg'
      ? 'text-[clamp(1.5rem,2.6vw,2.25rem)]'
      : 'text-[clamp(1.15rem,1.8vw,1.5rem)]';
  return (
    <motion.blockquote
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`relative ${align === 'right' ? 'md:ml-auto md:text-right' : ''}`}
      style={{ maxWidth: '640px' }}
    >
      <span
        aria-hidden
        className="absolute -top-8 -left-3 text-[#A3D1FF]/30"
        style={{
          fontFamily: SERIF,
          fontSize: '5rem',
          lineHeight: 0.8,
          fontStyle: 'italic',
        }}
      >
        &ldquo;
      </span>
      <p
        className={`${sizeClass} italic text-white/90 leading-[1.25]`}
        style={{ fontFamily: SERIF, fontWeight: 400 }}
      >
        {text}
      </p>
    </motion.blockquote>
  );
}

/* ---------------- Deliverable Row (numbered list) ---------------- */
export function DeliverableRow({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7 }}
      className="grid md:grid-cols-[80px_1fr] gap-6 md:gap-10 py-10 border-b border-white/10 group"
    >
      <div
        className="text-[#A3D1FF]/80 font-mono text-sm tracking-[0.2em]"
        style={{ fontVariantNumeric: 'tabular-nums' }}
      >
        {number}
      </div>
      <div>
        <h3
          className="text-white leading-[1.05] tracking-[-0.02em] mb-4 group-hover:text-[#A3D1FF] transition-colors"
          style={{
            fontFamily: SERIF,
            fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
            fontWeight: 500,
          }}
        >
          {title}
        </h3>
        <p className="text-white/70 leading-relaxed max-w-2xl">{description}</p>
      </div>
    </motion.div>
  );
}

/* ---------------- Process Chapter (for 4D-style steps) ---------------- */
export function ProcessChapter({
  numeral,
  title,
  description,
  items,
  reverse = false,
}: {
  numeral: string;
  title: string;
  description: string;
  items: string[];
  reverse?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 py-14 md:py-20 border-t border-white/10 ${
        reverse ? 'md:grid-cols-[1fr_200px]' : ''
      }`}
    >
      <div className={`${reverse ? 'md:order-2 md:text-right' : ''}`}>
        <div
          className="text-[#A3D1FF] leading-none"
          style={{
            fontFamily: SERIF,
            fontSize: 'clamp(4rem, 10vw, 8rem)',
            fontWeight: 300,
            fontStyle: 'italic',
          }}
        >
          {numeral}
        </div>
      </div>
      <div className={`${reverse ? 'md:order-1' : ''}`}>
        <h3
          className="text-[clamp(2rem,4vw,3.5rem)] text-white mb-6 leading-[1.05] tracking-tight"
          style={{ fontFamily: SERIF, fontWeight: 500 }}
        >
          {title}
        </h3>
        <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-2xl">
          {description}
        </p>
        <ul className="space-y-2 max-w-2xl">
          {items.map((item, index) => (
            <li
              key={index}
              className="text-white/70 text-sm flex gap-3 items-start"
            >
              <span className="text-[#A3D1FF] font-mono mt-1">—</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

/* ---------------- Stats Bar ---------------- */
export function StatsBar({
  stats,
}: {
  stats: { value: string; label: string }[];
}) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 py-8 border-y border-white/10 my-16">
      {stats.map((s) => (
        <div key={s.label} className="text-center md:text-left">
          <div
            className="text-white leading-none mb-2"
            style={{
              fontFamily: SERIF,
              fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
              fontWeight: 500,
              fontVariantNumeric: 'tabular-nums',
            }}
          >
            {s.value}
          </div>
          <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/50">
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ---------------- Case Study Card Row (for recent work) ---------------- */
export function WorkRow({
  items,
}: {
  items: { href: string; title: string; blurb: string; image: string; tags: string[] }[];
}) {
  return (
    <div className="grid md:grid-cols-2 gap-6 md:gap-8">
      {items.map((item, i) => (
        <motion.a
          key={item.title}
          href={item.href}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: i * 0.08 }}
          className="group block border border-white/10 hover:border-white/30 transition-colors overflow-hidden"
        >
          <div className="aspect-[16/10] overflow-hidden bg-black">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-[900ms]"
            />
          </div>
          <div className="p-6">
            <h3
              className="text-white mb-3 leading-tight group-hover:text-[#A3D1FF] transition-colors"
              style={{
                fontFamily: SERIF,
                fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                fontWeight: 500,
              }}
            >
              {item.title}
            </h3>
            <p className="text-white/60 text-sm mb-4">{item.blurb}</p>
            <div className="flex flex-wrap gap-2">
              {item.tags.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-[0.2em] border border-white/15 text-white/60 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.a>
      ))}
    </div>
  );
}

/* ---------------- Closing CTA ---------------- */
export function ServiceColophon({
  headline,
  italicHeadline,
  lead,
}: {
  headline: string;
  italicHeadline: string;
  lead: string;
}) {
  return (
    <section
      id="start"
      className="relative bg-[#0a0a0a] py-32 md:py-40 px-6 lg:px-12 border-t border-white/10 overflow-hidden"
    >
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#A3D1FF]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto relative">
        <ChapterMarker number="Colophon" label="Start here." />
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-white leading-[0.95] tracking-[-0.04em] mb-12 max-w-5xl"
          style={{
            fontFamily: SERIF,
            fontSize: 'clamp(3rem, 9vw, 8rem)',
            fontWeight: 400,
          }}
        >
          {headline}
          <br />
          <em className="italic text-[#A3D1FF]">{italicHeadline}</em>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-xl text-white/70 max-w-3xl leading-relaxed mb-12"
        >
          {lead}
        </motion.p>
        <div className="flex flex-wrap items-center gap-6 mb-16">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-white text-black font-medium px-8 py-4 rounded-full hover:bg-[#A3D1FF] transition-colors group"
          >
            <Mail className="w-4 h-4" />
            Book a Free Strategy Call
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white font-medium px-8 py-4 rounded-full border border-white/20 hover:border-white/60 transition-colors group"
          >
            Or book directly
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-8 border-t border-white/10 text-[10px] font-mono uppercase tracking-[0.25em] text-white/40">
          <span>Service · Vol. 01</span>
          <span>Issue: 2026</span>
          <span>Marc Friedman</span>
          <span className="ml-auto text-white/60">Thanks for reading.</span>
        </div>
      </div>
    </section>
  );
}
