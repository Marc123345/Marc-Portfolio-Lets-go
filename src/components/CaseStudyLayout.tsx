"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Mail } from 'lucide-react';
import Link from 'next/link';
import {
  ChapterMarker,
  ServiceMarquee,
  StatsBar,
  SERIF,
} from '@/components/ServiceEditorial';

export type CaseStudyConfig = {
  // Masthead
  kicker: string;
  pkg?: string;
  title: string;
  italicWord: string;
  tagline: React.ReactNode;
  heroImage: string;
  metaStats: { label: string; value: string }[];
  liveUrl?: string;

  // Marquee tags
  marquee: string[];

  // Challenge
  challenge: {
    narrative: React.ReactNode;
    bullets?: string[];
  };

  // Solution
  solution: {
    narrative: React.ReactNode;
    items: { title: string; description: string }[];
    tech: string[];
  };

  // Results
  results: {
    stats: { value: string; label: string }[];
    testimonial?: {
      quote: string;
      author: string;
      role: string;
    };
  };

  // Gallery
  gallery: { image: string; caption?: string; wide?: boolean }[];

  // Next case
  next: {
    title: string;
    url: string;
    image: string;
  };
};

function CaseMasthead({
  kicker,
  pkg,
  title,
  italicWord,
  tagline,
  heroImage,
  metaStats,
  liveUrl,
}: Pick<
  CaseStudyConfig,
  'kicker' | 'pkg' | 'title' | 'italicWord' | 'tagline' | 'heroImage' | 'metaStats' | 'liveUrl'
>) {
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
      <motion.div className="absolute inset-0 z-0" style={{ y, opacity, scale }}>
        <motion.div
          initial={{ scale: 1.25, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 lg:left-[38%]"
        >
          <img
            src={heroImage}
            alt=""
            className="w-full h-full object-cover object-center grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/20 lg:from-black lg:via-black/55 lg:to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.5, delay: 0.3 }}
        className="absolute top-1/2 left-0 lg:left-[5%] -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#A3D1FF]/10 blur-[140px] z-[5] pointer-events-none"
      />

      <div
        className="absolute inset-0 z-10 opacity-[0.07] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.5'/></svg>\")",
        }}
      />

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
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex justify-between items-start text-[10px] md:text-xs font-mono uppercase tracking-[0.3em] text-white/60"
        >
          <div className="flex items-center gap-3">
            <span className="w-6 h-[1px] bg-white/40" />
            <span>{kicker}</span>
          </div>
          {pkg && (
            <span className="text-right max-w-xs">
              Package
              <br />
              <span className="text-white/80">{pkg}</span>
            </span>
          )}
        </motion.div>

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
              Case File
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-white leading-[0.88] tracking-[-0.04em] mb-8"
            style={{
              fontFamily: SERIF,
              fontSize: 'clamp(2.75rem, 8vw, 7rem)',
              fontWeight: 400,
            }}
          >
            <span className="block">{title}</span>
            <span className="block italic text-white/80 font-light">{italicWord}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="text-xl md:text-2xl text-white/75 max-w-2xl leading-snug"
          >
            {tagline}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-wrap items-end gap-x-8 gap-y-3 pt-6 border-t border-white/10"
        >
          {metaStats.map((s) => (
            <div key={s.label}>
              <div
                className="text-white leading-none mb-1"
                style={{
                  fontFamily: SERIF,
                  fontSize: 'clamp(1.25rem, 1.8vw, 1.6rem)',
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
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto inline-flex items-center gap-2 text-xs md:text-sm font-medium text-white border-b border-white/30 hover:border-[#A3D1FF] hover:text-[#A3D1FF] transition-colors pb-1"
            >
              Visit live site
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function Gallery({ items }: { items: CaseStudyConfig['gallery'] }) {
  if (items.length === 0) return null;
  return (
    <div className="grid md:grid-cols-12 gap-4 auto-rows-[minmax(240px,auto)]">
      {items.map((it, i) => {
        const span = it.wide ? 'md:col-span-12' : 'md:col-span-6';
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: i * 0.05 }}
            className={`${span} relative group overflow-hidden border border-white/10 bg-[#0f1116] min-h-[280px]`}
          >
            <img
              src={it.image}
              alt={it.caption || ''}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.03]"
              loading="lazy"
            />
            {it.caption && (
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/80">
                  {it.caption}
                </p>
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}

export default function CaseStudyLayout({ config }: { config: CaseStudyConfig }) {
  const {
    kicker,
    pkg,
    title,
    italicWord,
    tagline,
    heroImage,
    metaStats,
    liveUrl,
    marquee,
    challenge,
    solution,
    results,
    gallery,
    next,
  } = config;

  return (
    <>
      <CaseMasthead
        kicker={kicker}
        pkg={pkg}
        title={title}
        italicWord={italicWord}
        tagline={tagline}
        heroImage={heroImage}
        metaStats={metaStats}
        liveUrl={liveUrl}
      />

      <ServiceMarquee phrases={marquee} />

      {/* ============== CHAPTER 01 — THE CHALLENGE ============== */}
      <section className="relative py-24 md:py-32 px-6 lg:px-12 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <ChapterMarker number="01" label="The Challenge" />
          <div className="grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-20">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9 }}
              className="text-white leading-[1.0] tracking-[-0.03em]"
              style={{
                fontFamily: SERIF,
                fontSize: 'clamp(2rem, 4.5vw, 4rem)',
                fontWeight: 400,
              }}
            >
              What they came <em className="italic text-[#A3D1FF]">with.</em>
            </motion.h2>
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="text-lg md:text-xl text-white/75 leading-relaxed space-y-5"
              >
                {challenge.narrative}
              </motion.div>
              {challenge.bullets && challenge.bullets.length > 0 && (
                <ul className="mt-8 space-y-2 border-t border-white/10 pt-6">
                  {challenge.bullets.map((b) => (
                    <li key={b} className="text-white/70 flex gap-3">
                      <span className="text-[#A3D1FF] font-mono mt-1.5 shrink-0">—</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ============== CHAPTER 02 — THE SOLUTION ============== */}
      <section className="relative py-24 md:py-32 px-6 lg:px-12 bg-[#0a0a0a] border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <ChapterMarker number="02" label="The Solution" />
          <div className="grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-20 mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9 }}
              className="text-white leading-[1.0] tracking-[-0.03em]"
              style={{
                fontFamily: SERIF,
                fontSize: 'clamp(2rem, 4.5vw, 4rem)',
                fontWeight: 400,
              }}
            >
              What I <em className="italic text-[#A3D1FF]">shipped.</em>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-lg md:text-xl text-white/75 leading-relaxed space-y-5"
            >
              {solution.narrative}
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {solution.items.map((it, i) => (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="border border-white/10 p-6 md:p-8 bg-[#12151b]"
              >
                <div
                  className="text-[#A3D1FF]/80 font-mono text-xs tracking-[0.2em] mb-3"
                  style={{ fontVariantNumeric: 'tabular-nums' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3
                  className="text-white mb-3 leading-tight"
                  style={{
                    fontFamily: SERIF,
                    fontSize: 'clamp(1.25rem, 2vw, 1.75rem)',
                    fontWeight: 500,
                  }}
                >
                  {it.title}
                </h3>
                <p className="text-white/65 text-sm leading-relaxed">{it.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 border-t border-white/10 pt-8">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 mr-2">
              — Stack
            </span>
            {solution.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 border border-white/15 text-white/70 text-xs font-mono"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ============== GALLERY ============== */}
      {gallery.length > 0 && (
        <section className="relative py-24 md:py-32 px-6 lg:px-12 bg-black border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <ChapterMarker number="03" label="In Context" />
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9 }}
              className="text-white leading-[1.0] tracking-[-0.03em] mb-12 max-w-3xl"
              style={{
                fontFamily: SERIF,
                fontSize: 'clamp(2rem, 4.5vw, 4rem)',
                fontWeight: 400,
              }}
            >
              The <em className="italic text-[#A3D1FF]">work.</em>
            </motion.h2>
            <Gallery items={gallery} />
          </div>
        </section>
      )}

      {/* ============== CHAPTER 04 — THE RESULTS ============== */}
      <section className="relative py-24 md:py-32 px-6 lg:px-12 bg-[#0a0a0a] border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <ChapterMarker number="04" label="The Results" />
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9 }}
            className="text-white leading-[1.0] tracking-[-0.03em] mb-10 max-w-3xl"
            style={{
              fontFamily: SERIF,
              fontSize: 'clamp(2rem, 4.5vw, 4rem)',
              fontWeight: 400,
            }}
          >
            What <em className="italic text-[#A3D1FF]">shipped.</em>
          </motion.h2>
          <StatsBar stats={results.stats} />
          {results.testimonial && (
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.9 }}
              className="mt-16 max-w-4xl border-l-2 border-[#A3D1FF] pl-6 md:pl-10"
            >
              <p
                className="text-white/95 leading-[1.25] italic"
                style={{
                  fontFamily: SERIF,
                  fontSize: 'clamp(1.5rem, 2.6vw, 2.25rem)',
                  fontWeight: 400,
                }}
              >
                &ldquo;{results.testimonial.quote}&rdquo;
              </p>
              <footer className="mt-6 text-[10px] font-mono uppercase tracking-[0.3em] text-[#A3D1FF]">
                — {results.testimonial.author} · {results.testimonial.role}
              </footer>
            </motion.blockquote>
          )}
        </div>
      </section>

      {/* ============== NEXT CASE ============== */}
      <section className="relative py-20 md:py-24 px-6 lg:px-12 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <ChapterMarker number="Next" label="Another Case File" />
          <Link
            href={next.url}
            className="group relative grid md:grid-cols-[1fr_1.4fr] gap-8 md:gap-12 items-center border border-white/10 hover:border-white/30 transition-colors overflow-hidden"
          >
            <div className="relative aspect-[4/3] md:aspect-auto md:h-full overflow-hidden bg-[#0f1116]">
              <img
                src={next.image}
                alt={next.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-[900ms]"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(90deg, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.5) 100%)',
                }}
              />
            </div>
            <div className="p-8 md:p-12">
              <p className="text-xs font-mono uppercase tracking-[0.3em] text-[#A3D1FF] mb-4">
                — Up next
              </p>
              <h3
                className="text-white leading-[1.0] tracking-[-0.03em] mb-6 group-hover:text-[#A3D1FF] transition-colors"
                style={{
                  fontFamily: SERIF,
                  fontSize: 'clamp(2rem, 5vw, 4rem)',
                  fontWeight: 500,
                }}
              >
                {next.title}
              </h3>
              <div className="inline-flex items-center gap-2 text-white font-medium border-b border-white/30 group-hover:border-[#A3D1FF] pb-1 transition-colors">
                Read the file
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ============== COLOPHON ============== */}
      <section className="relative bg-[#0a0a0a] py-24 md:py-32 px-6 lg:px-12 border-t border-white/10 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#A3D1FF]/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto relative">
          <ChapterMarker number="Colophon" label="Let's build together." />
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-white leading-[0.95] tracking-[-0.04em] mb-10 max-w-5xl"
            style={{
              fontFamily: SERIF,
              fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
              fontWeight: 400,
            }}
          >
            Want to be the{' '}
            <em className="italic text-[#A3D1FF]">next case file?</em>
          </motion.h2>
          <div className="flex flex-wrap items-center gap-6">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-white text-black font-medium px-8 py-4 hover:bg-[#A3D1FF] transition-colors group"
            >
              <Mail className="w-4 h-4" />
              Book a Strategy Call
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-white font-medium border border-white/20 hover:border-white/60 px-8 py-4 transition-colors"
            >
              See all cases
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
