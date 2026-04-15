"use client";

import { ArrowUpRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

const SERIF = "Georgia, 'Times New Roman', serif";

type Clip = {
  publication: string;
  kind: string;
  title: string;
  blurb: string;
  url: string;
  image?: string;
  accent: string;
  rotate: string;
};

const clips: Clip[] = [
  {
    publication: 'DesignRush',
    kind: 'Feature',
    title: 'Untapped Africa — Best Website Designs',
    blurb:
      'Featured for exceptional user experience and social impact focus among the year\'s standouts.',
    url: 'https://www.designrush.com/best-designs/websites/untapped-africa-website-design',
    image:
      'https://ik.imagekit.io/qcvroy8xpd/Screenshot.png?updatedAt=1754018965491',
    accent: '#A3D1FF',
    rotate: '-1.5deg',
  },
  {
    publication: 'DesignRush',
    kind: 'Agency Profile',
    title: 'Marc Friedman Design Agency',
    blurb:
      'Comprehensive agency profile showcasing design expertise and verified client success stories.',
    url: 'https://www.designrush.com/agency/profile/marc-friedman-design-agency',
    accent: '#A3D1FF',
    rotate: '1deg',
  },
  {
    publication: 'Awwwards',
    kind: 'Recognition',
    title: 'Site of the Day — Recognition',
    blurb:
      'Recognized for excellence in digital design and user experience across multiple client projects.',
    url: 'https://www.awwwards.com/marc-friedman/',
    accent: '#FFB800',
    rotate: '-0.5deg',
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

function ClipCard({ clip, index }: { clip: Clip; index: number }) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [index % 2 === 0 ? '5%' : '-5%', index % 2 === 0 ? '-5%' : '5%'],
  );

  return (
    <motion.a
      ref={cardRef}
      href={clip.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 40, rotate: 0 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ rotate: 0, y: -8, transition: { duration: 0.4 } }}
      style={{ y, transform: `rotate(${clip.rotate})` }}
      className="group block relative bg-[#12161b] border border-white/10 hover:border-white/30 transition-colors"
    >
      {/* Film-strip holes / corner bolts */}
      <div className="absolute top-3 left-3 w-2 h-2 rounded-full bg-white/20" />
      <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-white/20" />

      {/* Image or iconic block */}
      <div className="aspect-[16/11] overflow-hidden relative bg-black">
        {clip.image ? (
          <img
            src={clip.image}
            alt={clip.title}
            className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-[900ms]"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center"
            style={{
              background: `radial-gradient(120% 120% at 50% 0%, ${clip.accent}12 0%, #0a0a0a 55%)`,
            }}
          >
            <span
              className="text-white/90 leading-none"
              style={{
                fontFamily: SERIF,
                fontSize: 'clamp(3rem, 6vw, 5rem)',
                fontWeight: 400,
                fontStyle: 'italic',
              }}
            >
              {clip.publication}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      {/* Meta ticker */}
      <div className="flex items-center justify-between px-5 py-3 border-y border-white/10 text-[10px] font-mono uppercase tracking-[0.3em] text-white/50">
        <span style={{ color: clip.accent }}>— {clip.kind}</span>
        <span>No. {String(index + 1).padStart(2, '0')}</span>
      </div>

      {/* Body */}
      <div className="p-6">
        <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 mb-3">
          {clip.publication}
        </div>
        <h3
          className="text-white mb-3 leading-tight tracking-tight group-hover:text-[#A3D1FF] transition-colors"
          style={{
            fontFamily: SERIF,
            fontSize: 'clamp(1.25rem, 2vw, 1.75rem)',
            fontWeight: 500,
          }}
        >
          {clip.title}
        </h3>
        <p className="text-white/60 text-sm leading-relaxed mb-6">{clip.blurb}</p>
        <div className="inline-flex items-center gap-2 text-white/70 group-hover:text-white transition-colors text-sm font-medium">
          Read feature
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </div>
    </motion.a>
  );
}

export default function PressSection() {
  return (
    <section className="relative py-28 md:py-36 px-6 lg:px-12 bg-black border-t border-white/10 overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#A3D1FF]/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <ChapterMarker number="Chapter · Press Desk" label="Recognition · 2024–26" />

        <div className="grid md:grid-cols-[1.2fr_1fr] gap-8 md:gap-16 items-end mb-20">
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
            Press <em className="italic text-[#A3D1FF]">clippings</em> &amp; nice things said.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/60 text-lg leading-relaxed"
          >
            Featured in leading design publications and recognized for excellence in web
            development.
          </motion.p>
        </div>

        {/* Overlapping clippings grid */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-10 mb-20">
          {clips.map((clip, i) => (
            <ClipCard key={i} clip={clip} index={i} />
          ))}
        </div>

        <div className="flex items-center justify-between border-t border-white/10 pt-8">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40">
            — End of spread
          </span>
          <Link
            href="/press"
            className="inline-flex items-center gap-2 text-white font-medium border-b border-white/30 hover:border-[#A3D1FF] hover:text-[#A3D1FF] transition-colors py-1"
          >
            View all press coverage
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
