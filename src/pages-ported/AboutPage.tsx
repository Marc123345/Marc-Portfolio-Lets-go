"use client";

import React, { useRef, useMemo } from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Globe from '@/components/Globe';

/* Split a word into per-letter spans for kinetic reveal */
function KineticWord({
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

/* Floating ambient dust */
function AmbientDust() {
  const dots = useMemo(
    () =>
      Array.from({ length: 18 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 12 + 12,
        delay: Math.random() * 8,
      })),
    [],
  );
  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      {dots.map((d) => (
        <motion.span
          key={d.id}
          className="absolute rounded-full bg-[#A3D1FF]/40"
          style={{
            left: `${d.x}%`,
            top: `${d.y}%`,
            width: d.size,
            height: d.size,
            filter: 'blur(0.5px)',
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.2, 0.7, 0.2],
          }}
          transition={{
            duration: d.duration,
            delay: d.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

const SERIF = "Georgia, 'Times New Roman', serif";

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Marc Friedman',
  jobTitle: 'Full Stack Designer & Developer',
  description:
    'Full Stack Designer & Developer creating exceptional digital experiences for clients worldwide. Expert in web development, UI/UX design, and conversion optimization.',
  knowsAbout: [
    'Web Design',
    'Web Development',
    'UI/UX Design',
    'API Development',
    'Design Systems',
    'Conversion Optimization',
  ],
  url: 'https://www.marcfriedmanportfolio.com/about',
  sameAs: [
    'https://www.linkedin.com/in/portfolio2/',
    'https://www.behance.net/marcfriedmanweb',
    'https://g.co/kgs/78fRZ6r',
  ],
};

/* ---------------- Chapter Marker ---------------- */
function ChapterMarker({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <span
        className="text-white/50 text-sm font-mono tracking-[0.3em] uppercase"
        style={{ fontVariantNumeric: 'tabular-nums' }}
      >
        {number}
      </span>
      <span className="h-[1px] flex-1 bg-white/15 max-w-[60px]" />
      <span className="text-white/50 text-sm font-mono tracking-[0.3em] uppercase">
        {label}
      </span>
    </div>
  );
}

/* ---------------- Problems Quote ---------------- */
function ProblemQuote({
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
      ? 'text-[clamp(1.75rem,3vw,2.75rem)]'
      : 'text-[clamp(1.25rem,2vw,1.75rem)]';
  return (
    <motion.blockquote
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`relative ${align === 'right' ? 'md:text-right md:ml-auto' : ''}`}
      style={{ maxWidth: '640px' }}
    >
      <span
        aria-hidden
        className="absolute -top-8 -left-3 text-[#A3D1FF]/30"
        style={{
          fontFamily: SERIF,
          fontSize: '6rem',
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

/* ---------------- Chapter Section (Process) ---------------- */
function ProcessChapter({
  numeral,
  title,
  description,
  items,
  quote,
  attribution,
  reverse = false,
}: {
  numeral: string;
  title: string;
  description: string;
  items: string[];
  quote: string;
  attribution: string;
  reverse?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 py-16 md:py-24 border-t border-white/10 ${
        reverse ? 'md:grid-cols-[1fr_200px]' : ''
      }`}
    >
      <div className={`${reverse ? 'md:order-2 md:text-right' : ''}`}>
        <div
          className="text-[clamp(3rem,7vw,6rem)] text-[#A3D1FF] leading-none"
          style={{
            fontFamily: SERIF,
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
        <ul className="space-y-2 mb-10 max-w-2xl">
          {items.map((item, index) => (
            <li key={index} className="text-white/70 text-sm flex gap-3 items-start">
              <span className="text-[#A3D1FF] font-mono mt-1">—</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="max-w-xl pl-6 border-l-2 border-[#A3D1FF]">
          <p
            className="text-xl text-white/90 leading-snug italic mb-3"
            style={{ fontFamily: SERIF }}
          >
            &ldquo;{quote}&rdquo;
          </p>
          <p className="text-xs text-[#A3D1FF] font-mono tracking-[0.2em] uppercase">
            — {attribution}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

/* ---------------- Main Page ---------------- */
export default function AboutPage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const problems = [
    {
      text: 'Our website looks like it was built in 2018 and we\'re embarrassed to send people there.',
      size: 'lg' as const,
      align: 'left' as const,
    },
    {
      text: "We're getting traffic but nobody's filling out the contact form.",
      size: 'md' as const,
      align: 'right' as const,
    },
    {
      text: "Our site takes forever to load and we're losing people before they even see what we do.",
      size: 'md' as const,
      align: 'left' as const,
    },
    {
      text: "We're copy-pasting data between 4 different tools and it's eating our week.",
      size: 'md' as const,
      align: 'right' as const,
    },
    {
      text: "I know what I want but I can't explain it to a developer.",
      size: 'lg' as const,
      align: 'left' as const,
    },
    {
      text: "We've spent money on marketing but have no idea what's working.",
      size: 'md' as const,
      align: 'right' as const,
    },
  ];

  const design = [
    { name: 'UI/UX Design', proof: '50+ interfaces shipped to production' },
    {
      name: 'Design Systems',
      proof: 'Built from scratch for Binns Media, Untapped Africa + 8 others',
    },
    { name: 'Prototyping', proof: 'Figma-to-code workflow on every project since 2020' },
  ];
  const development = [
    { name: 'React / Next.js', proof: 'Primary stack for 40+ production sites' },
    { name: 'TypeScript', proof: 'Used on every project since 2023' },
    { name: 'Node.js', proof: 'Built 15+ APIs and backends' },
    { name: 'PostgreSQL', proof: 'Production databases for SaaS and B2B platforms' },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      {/* ===================== MASTHEAD ===================== */}
      <section
        ref={heroRef}
        className="relative min-h-screen bg-black overflow-hidden"
      >
        {/* Portrait layer — parallax + slow zoom */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
        >
          <motion.div
            initial={{ scale: 1.25, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 lg:left-[38%]"
          >
            <img
              src="https://ik.imagekit.io/qcvroy8xpd/PW8VUKH.png?updatedAt=1759693058055&tr=f-webp"
              alt="Marc Friedman"
              className="w-full h-full object-cover object-top grayscale contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/20 lg:from-black lg:via-black/50 lg:to-black/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
          </motion.div>
        </motion.div>

        {/* Ambient dust particles */}
        <AmbientDust />

        {/* Subtle spotlight glow behind name */}
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

        {/* Frame guides — subtle corner marks */}
        <div className="absolute inset-0 z-[15] pointer-events-none hidden md:block">
          {[
            'top-8 left-8',
            'top-8 right-8',
            'bottom-8 left-8',
            'bottom-8 right-8',
          ].map((pos, i) => (
            <div key={i} className={`absolute ${pos} w-4 h-4`}>
              <div className="absolute inset-0 border-l border-t border-white/20" />
            </div>
          ))}
        </div>

        <div className="container-custom relative z-20 min-h-screen flex flex-col justify-between pt-32 pb-10">
          {/* Top meta bar */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex justify-between items-start text-[10px] md:text-xs font-mono uppercase tracking-[0.3em] text-white/60"
          >
            <div className="flex items-center gap-3">
              <span className="w-6 h-[1px] bg-white/40" />
              <span>Profile · Vol. 01</span>
            </div>
            <span className="text-right">
              Full-Stack Designer
              <br />
              <span className="text-white/40">Est. 2018</span>
            </span>
          </motion.div>

          {/* Name block */}
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
                Meet the designer
              </p>
            </motion.div>

            <h1
              className="text-white leading-[0.88] tracking-[-0.04em] mb-8"
              style={{
                fontFamily: SERIF,
                fontSize: 'clamp(3rem, 8.5vw, 7.5rem)',
                fontWeight: 400,
              }}
            >
              <span className="block text-white/70">
                <KineticWord word="Marc" delay={0.25} italic />
              </span>
              <span className="block">
                <KineticWord word="Friedman." delay={0.5} />
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.7 }}
              className="text-xl md:text-2xl text-white/75 max-w-xl leading-snug mb-2"
            >
              A designer and developer who builds websites that{' '}
              <em className="text-white" style={{ fontFamily: SERIF }}>
                bring in customers
              </em>{' '}
              — not just compliments.
            </motion.p>
          </div>

          {/* Bottom row — meta + scroll indicator */}
          <div>
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
                Available — Q2 2026
              </span>
              <span>50+ Projects</span>
              <span>US · EU · Africa</span>
              <span className="hidden md:inline">Design + Development</span>
              <Link
                href="#story"
                className="ml-auto flex items-center gap-2 text-white hover:text-[#A3D1FF] transition-colors group"
              >
                Read the story
                <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.8 }}
              className="flex items-center gap-3 mt-6 text-white/40"
            >
              <span className="text-[10px] font-mono uppercase tracking-[0.3em]">
                Scroll
              </span>
              <div className="relative w-20 h-[2px] bg-white/10 overflow-hidden">
                <motion.div
                  className="absolute inset-y-0 left-0 w-8 bg-white/60"
                  animate={{ x: [0, 48, 0] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===================== KINETIC MARQUEE STRIP ===================== */}
      <section className="relative bg-black border-y border-white/10 overflow-hidden">
        <style>{`
          @keyframes about-marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .about-marquee {
            animation: about-marquee 32s linear infinite;
            display: flex;
            width: max-content;
          }
          @media (prefers-reduced-motion: reduce) {
            .about-marquee { animation: none; }
          }
        `}</style>
        <div className="about-marquee py-6 md:py-8">
          {[...Array(2)].map((_, dup) => (
            <div key={dup} className="flex items-center gap-10 md:gap-16 pr-10 md:pr-16">
              {[
                'Full-Stack',
                'Design Systems',
                'React · Next.js',
                'Conversion-First',
                'Hand-coded',
                'No Templates',
                'Available Q2 2026',
                'Based Globally',
                'Shipped 50+',
              ].map((phrase, i) => (
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

      {/* ===================== CHAPTER 01 — THE STORY ===================== */}
      <section id="story" className="relative bg-black py-24 md:py-32 px-6 lg:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <ChapterMarker number="01" label="The Story" />

          <div className="grid md:grid-cols-[1.2fr_1fr] gap-12 md:gap-20">
            {/* Left: headline + intro */}
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8 }}
                className="text-white leading-[1.0] tracking-[-0.03em] mb-10"
                style={{
                  fontFamily: SERIF,
                  fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                  fontWeight: 400,
                }}
              >
                Six years of shipping the{' '}
                <em className="text-[#A3D1FF]">uncompromising</em> version.
              </motion.h2>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg md:text-xl text-white/80 leading-relaxed space-y-6 max-w-2xl"
              >
                <p>
                  <span
                    className="float-left text-[5rem] leading-[0.85] mr-3 mt-1 text-[#A3D1FF]"
                    style={{ fontFamily: SERIF, fontWeight: 500 }}
                  >
                    I
                  </span>
                  &apos;m Marc. I design and build websites that bring in customers —
                  not just compliments. Over the past 6 years, I&apos;ve shipped{' '}
                  <strong className="text-white">50+ projects</strong> for startups,
                  agencies, and brands across the US, Europe, and Africa.
                </p>
                <p>
                  Every one of them was designed, coded, and launched by me
                  personally. No handoffs. No junior devs. No project managers playing
                  telephone.
                </p>
              </motion.div>
            </div>

            {/* Right: stats column */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-8 md:border-l md:border-white/10 md:pl-12"
            >
              {[
                { n: '06', label: 'Years Shipping' },
                { n: '50+', label: 'Projects Delivered' },
                { n: '03', label: 'Continents Served' },
                { n: '100%', label: 'Built by One Person' },
              ].map((s, idx) => (
                <div
                  key={s.label}
                  className="flex items-baseline justify-between gap-6 border-b border-white/5 pb-6"
                >
                  <span
                    className="text-white leading-none"
                    style={{
                      fontFamily: SERIF,
                      fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                      fontWeight: 500,
                      fontVariantNumeric: 'tabular-nums',
                    }}
                  >
                    {s.n}
                  </span>
                  <span className="text-xs font-mono uppercase tracking-[0.25em] text-white/50 text-right">
                    {s.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===================== CHAPTER · GLOBE ===================== */}
      <section className="relative bg-black py-24 md:py-32 px-6 lg:px-12 border-t border-white/10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[#A3D1FF]/8 rounded-full blur-[160px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative">
          <ChapterMarker number="Interlude" label="Clients · Three Continents" />

          <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-center">
            {/* Left — editorial text */}
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.9 }}
                className="text-white leading-[0.95] tracking-[-0.03em] mb-8"
                style={{
                  fontFamily: SERIF,
                  fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                  fontWeight: 400,
                }}
              >
                Clients where the <em className="italic text-[#A3D1FF]">sun rises.</em>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="text-lg md:text-xl text-white/70 leading-relaxed mb-10 max-w-xl"
              >
                Shipped from — and to —{' '}
                <strong className="text-white">US, Europe, and Africa</strong>. Time
                zones sort themselves out. Good work travels.
              </motion.p>

              <motion.ul
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="grid grid-cols-2 gap-4 max-w-md"
              >
                {[
                  { city: 'New York', country: 'USA' },
                  { city: 'Washington D.C.', country: 'USA' },
                  { city: 'Miami', country: 'USA' },
                  { city: 'Los Angeles', country: 'USA' },
                  { city: 'Tel Aviv', country: 'Israel' },
                  { city: 'London', country: 'UK' },
                  { city: 'Paris', country: 'France' },
                  { city: 'Cape Town', country: 'South Africa' },
                  { city: 'Nairobi', country: 'Kenya' },
                ].map((l) => (
                  <li
                    key={l.city}
                    className="border-b border-white/10 pb-3 text-sm"
                  >
                    <div className="text-white">{l.city}</div>
                    <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40 mt-0.5">
                      {l.country}
                    </div>
                  </li>
                ))}
              </motion.ul>
            </div>

            {/* Right — dot globe */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <Globe size={560} />
              <p className="text-center mt-6 text-[10px] font-mono uppercase tracking-[0.3em] text-white/40">
                — Drag to spin
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===================== CHAPTER 02 — PROBLEMS ===================== */}
      <section className="relative bg-[#0a0a0a] py-28 md:py-36 px-6 lg:px-12 border-t border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <ChapterMarker number="02" label="In Their Words" />

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="text-white leading-[1.0] tracking-[-0.03em] mb-20 max-w-4xl"
            style={{
              fontFamily: SERIF,
              fontSize: 'clamp(2.25rem, 5vw, 4.5rem)',
              fontWeight: 400,
            }}
          >
            Most clients come to me saying one of{' '}
            <em className="italic text-[#A3D1FF]">these six things</em>.
          </motion.h2>

          <div className="space-y-16 md:space-y-20">
            {problems.map((p, i) => (
              <div
                key={i}
                className={`flex ${
                  p.align === 'right' ? 'justify-end' : 'justify-start'
                }`}
              >
                <ProblemQuote text={p.text} align={p.align} size={p.size} />
              </div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-24 pt-8 border-t border-white/10 text-center text-white/70 text-xl leading-relaxed max-w-3xl mx-auto"
          >
            If any of those sound familiar — that&apos;s where I come in. I don&apos;t
            just build websites, I fix the problems that are quietly costing you
            customers.
          </motion.p>
        </div>
      </section>

      {/* ===================== CHAPTER 03 — PROOF ===================== */}
      <section className="relative bg-black py-24 md:py-32 px-6 lg:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <ChapterMarker number="03" label="Proof, Not Percentages" />

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="text-white leading-[1.0] tracking-[-0.03em] mb-16 max-w-4xl"
            style={{
              fontFamily: SERIF,
              fontSize: 'clamp(2.25rem, 5vw, 4.5rem)',
              fontWeight: 400,
            }}
          >
            Self-assigned <em className="italic text-[#A3D1FF]">95%</em> is a lie.
            These are the receipts.
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Design */}
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.3em] text-[#A3D1FF] mb-8">
                A. Design
              </p>
              <div className="space-y-8">
                {design.map((s) => (
                  <motion.div
                    key={s.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.6 }}
                    className="border-b border-white/10 pb-6"
                  >
                    <h3
                      className="text-white mb-2 leading-tight"
                      style={{
                        fontFamily: SERIF,
                        fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)',
                        fontWeight: 500,
                      }}
                    >
                      {s.name}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed">{s.proof}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Development */}
            <div className="md:border-l md:border-white/10 md:pl-16">
              <p className="text-xs font-mono uppercase tracking-[0.3em] text-[#A3D1FF] mb-8">
                B. Development
              </p>
              <div className="space-y-8">
                {development.map((s) => (
                  <motion.div
                    key={s.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.6 }}
                    className="border-b border-white/10 pb-6"
                  >
                    <h3
                      className="text-white mb-2 leading-tight"
                      style={{
                        fontFamily: SERIF,
                        fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)',
                        fontWeight: 500,
                      }}
                    >
                      {s.name}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed">{s.proof}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CHAPTER 04 — THE PROCESS ===================== */}
      <section className="relative bg-[#0a0a0a] py-24 md:py-32 px-6 lg:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <ChapterMarker number="04" label="The Process" />

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="text-white leading-[1.0] tracking-[-0.03em] mb-10 max-w-4xl"
            style={{
              fontFamily: SERIF,
              fontSize: 'clamp(2.25rem, 5vw, 4.5rem)',
              fontWeight: 400,
            }}
          >
            Four chapters. <em className="italic text-[#A3D1FF]">Same rhythm,</em>{' '}
            every project.
          </motion.h2>

          <div>
            <ProcessChapter
              numeral="I."
              title="Discover"
              description="Understanding your business goals, challenges, and market position before any pixels move."
              items={[
                'In-depth stakeholder interviews',
                'Market & competitive analysis',
                'User research with real customers',
                'Actionable competitive audit',
              ]}
              quote="Marc asked questions about our business that our last agency never thought to ask."
              attribution="Omar Turner · Binns Media"
            />
            <ProcessChapter
              numeral="II."
              title="Define"
              description="Translating research insights into clear strategies, deliverables, and measurable targets."
              items={[
                'Strategic roadmap with KPIs',
                'User personas based on research',
                'IA optimized for conversion',
                'Scalable technical requirements',
              ]}
              quote="He turned our half-formed ideas into a plan we could actually execute on."
              attribution="Dinesh Varahni · Varahni Group"
              reverse
            />
            <ProcessChapter
              numeral="III."
              title="Design"
              description="Creating intuitive interfaces and seamless user experiences grounded in the strategy."
              items={[
                'Data-driven wireframing',
                'Conversion-focused UI design',
                'Interactive prototyping',
                'Documented design system',
              ]}
              quote="The first mockup was closer to what we wanted than three months of work with a previous designer."
              attribution="AutoMarginX Team"
            />
            <ProcessChapter
              numeral="IV."
              title="Develop"
              description="Shipping robust, scalable, measurable solutions using modern technologies."
              items={[
                'SEO-optimized frontend development',
                'Secure backend integration',
                'Lighthouse scores in the 90s',
                'Comprehensive testing & QA',
              ]}
              quote="Our site went from failing Core Web Vitals to a 98 Lighthouse score. Leads doubled in the first month."
              attribution="Paving Leads"
              reverse
            />
          </div>
        </div>
      </section>

      {/* ===================== CHAPTER 05 — BEYOND THE WORK ===================== */}
      <section className="relative bg-black py-24 md:py-32 px-6 lg:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <ChapterMarker number="05" label="Off the Clock" />

          <div className="grid md:grid-cols-[1fr_1fr] gap-12 md:gap-20 items-start">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8 }}
                className="text-white leading-[1.0] tracking-[-0.03em] mb-10"
                style={{
                  fontFamily: SERIF,
                  fontSize: 'clamp(2.25rem, 5vw, 4.5rem)',
                  fontWeight: 400,
                }}
              >
                Beyond the screen.
              </motion.h2>
              <div className="space-y-6 text-lg md:text-xl text-white/80 leading-relaxed">
                <p>
                  When I&apos;m not shipping websites, I&apos;m usually hiking
                  somewhere in the{' '}
                  <em className="text-[#A3D1FF]" style={{ fontFamily: SERIF }}>
                    Galilee
                  </em>
                  , hunting for the best coffee in Tel Aviv, or helping junior
                  designers build their first portfolios.
                </p>
                <p>
                  I&apos;ve mentored <strong className="text-white">20+ designers</strong>{' '}
                  and contributed to open-source projects that other developers
                  actually use.
                </p>
              </div>
            </div>

            {/* Photo collage */}
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="aspect-[3/4] overflow-hidden col-span-2"
              >
                <img
                  src="https://ik.imagekit.io/qcvroy8xpd/uoq5Ztg.jpeg"
                  alt="Marc at work"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="aspect-square overflow-hidden"
              >
                <img
                  src="https://ik.imagekit.io/qcvroy8xpd/TTV8Liw.jpg"
                  alt="Workspace"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="aspect-square overflow-hidden"
              >
                <img
                  src="https://ik.imagekit.io/qcvroy8xpd/PW8VUKH.png?updatedAt=1759693058055&tr=f-webp"
                  alt="Marc Friedman"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CLOSING ===================== */}
      <section className="relative bg-[#0a0a0a] py-32 md:py-40 px-6 lg:px-12 border-t border-white/10 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#A3D1FF]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative">
          <ChapterMarker number="Colophon" label="The End." />

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-white leading-[0.95] tracking-[-0.04em] mb-12 max-w-5xl"
            style={{
              fontFamily: SERIF,
              fontSize: 'clamp(2.5rem, 6.5vw, 5.5rem)',
              fontWeight: 400,
            }}
          >
            Let&apos;s make
            <br />
            <em className="italic text-[#A3D1FF]">something real.</em>
          </motion.h2>

          <div className="flex flex-wrap items-center gap-6 mb-16">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-white text-black font-medium px-8 py-4 hover:bg-[#A3D1FF] transition-colors group"
            >
              <Mail className="w-4 h-4" />
              Book a Free Strategy Call
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-white font-medium px-8 py-4 border border-white/20 hover:border-white/60 transition-colors group"
            >
              See the Work
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-8 border-t border-white/10 text-xs font-mono uppercase tracking-[0.25em] text-white/40">
            <span>Profile · Vol. 01</span>
            <span>Issue: 2026</span>
            <span>Marc Friedman</span>
            <span className="ml-auto text-white/60">Thanks for reading.</span>
          </div>
        </div>
      </section>
    </>
  );
}
