"use client";

/**
 * FlyStudio "works" layout (works.html in the FlyStudio template), in this
 * site's colours: a centred uppercase masthead, then project cards in a
 * repeating rhythm of 2 large + 3 small. Each card is a dark rounded panel with
 * an inset image, a row of pills (first pill in the accent) and an uppercase title.
 */

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import type { Project } from '@/data/projects';

const HEAD = 'var(--font-heading)';

/* ------------------------------------------------------------------ */
/* Masthead                                                            */
/* ------------------------------------------------------------------ */
export function WorksHero({
  kicker,
  title,
  accent,
  intro,
  stripLeft,
  stripRight = 'Scroll for more',
  primary = { href: '/contact/', label: 'Start a project' },
  secondary,
}: {
  kicker: string;
  title: string;
  accent?: string;
  intro?: React.ReactNode;
  stripLeft: string;
  stripRight?: string;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  return (
    <section className="relative bg-black overflow-hidden pt-32 md:pt-40 px-6 lg:px-12">
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#A3D1FF]/8 rounded-full blur-[150px] pointer-events-none" />
      <div className="max-w-7xl mx-auto relative text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.3em] text-white/60 mb-6"
        >
          <span className="text-[#A3D1FF]">◆</span> {kicker}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-white uppercase leading-[0.92] tracking-[-0.01em] mx-auto max-w-5xl"
          style={{ fontFamily: HEAD, fontSize: 'clamp(3rem, 9vw, 8.5rem)', fontWeight: 500 }}
        >
          {title} {accent && <span className="text-[#A3D1FF]">{accent}</span>}
        </motion.h1>
        {intro && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-lg md:text-xl text-white/65 max-w-2xl mx-auto mt-7 leading-snug"
          >
            {intro}
          </motion.p>
        )}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="flex flex-wrap items-center justify-center gap-3 mt-9"
        >
          <Link
            href={primary.href}
            className="ui-btn ui-btn-primary"
          >
            {primary.label} <ArrowUpRight className="w-4 h-4" />
          </Link>
          {secondary && (
            <Link
              href={secondary.href}
              className="ui-btn ui-btn-secondary"
            >
              {secondary.label}
            </Link>
          )}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto relative mt-20 md:mt-28 flex items-center justify-between border-b border-white/10 pb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-white/55">
        <span>{stripLeft}</span>
        <span className="hidden md:inline-flex items-center gap-2">
          {stripRight} <ArrowDown className="w-3.5 h-3.5" />
        </span>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Card                                                                */
/* ------------------------------------------------------------------ */
export function ProjectCard({ p, large = false, priority = false }: { p: Project; large?: boolean; priority?: boolean }) {
  const [broken, setBroken] = useState(false);
  const pills = [p.category, ...p.tags].slice(0, large ? 4 : 3);

  return (
    <Link
      href={p.caseStudyUrl}
      className="group flex h-full flex-col rounded-[20px] bg-[#141414] p-3 md:p-3.5 transition-colors hover:bg-[#1a1a1a]"
    >
      <div className="relative aspect-[40/27] overflow-hidden rounded-[14px] bg-[#1d1d1d]">
        {!broken && p.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={p.image}
            alt={`${p.title} website`}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            onError={() => setBroken(true)}
            className={p.showFullCover ? "h-full w-full object-contain" : "absolute inset-0 h-full w-full object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"}
          />
        ) : (
          <div className="absolute inset-0 grid place-items-center p-6 text-center">
            <span className="uppercase text-white/80" style={{ fontFamily: HEAD, fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
              {p.title}
            </span>
          </div>
        )}
        <span className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-black/60 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>

      <div className="px-3 pb-4 pt-5 md:px-4 md:pb-5 md:pt-6">
        <div className="flex flex-wrap gap-1.5 mb-4">
          {pills.map((t, i) => (
            <span
              key={t}
              className={`rounded-full px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] ${
                i === 0 ? 'bg-[#A3D1FF] text-black' : 'bg-[#232323] text-white/75'
              }`}
            >
              {t}
            </span>
          ))}
        </div>
        <h3
          className="m-0 uppercase text-white leading-[1.05] max-w-[22ch] transition-colors group-hover:text-[#A3D1FF]"
          style={{ fontFamily: HEAD, fontSize: large ? 'clamp(1.5rem, 2.2vw, 2rem)' : 'clamp(1.25rem, 1.6vw, 1.5rem)', fontWeight: 500 }}
        >
          {p.title}
        </h3>
        {large && <p className="mt-3 text-white/55 text-sm leading-relaxed max-w-xl">{p.blurb}</p>}
      </div>
    </Link>
  );
}

/* ------------------------------------------------------------------ */
/* Grid: 2 large, 3 small, repeat                                      */
/* ------------------------------------------------------------------ */
export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5 md:gap-6 lg:gap-7">
      {projects.map((p, i) => {
        const large = i % 5 < 2;
        return (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: (i % 5 < 2 ? i % 5 : (i % 5) - 2) * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className={large ? 'lg:col-span-3' : 'lg:col-span-2'}
          >
            <ProjectCard p={p} large={large} priority={i < 2} />
          </motion.div>
        );
      })}
    </div>
  );
}
