"use client";

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, FileDown } from 'lucide-react';
import LeadMagnetFormEmbed from '@/components/LeadMagnetFormEmbed';

const SERIF = "var(--font-heading)";
const ACCENT = '#A3D1FF';

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

type Resource = {
  id: string;
  kind: string;
  cover: string;
  coverAlt: string;
  title: string;
  titleAccent: string;
  excerpt: string;
  /** Omitted for the landing page guide, which uses the embed's default form. */
  formId?: string;
  formHeading: string;
  formTitle: string;
};

const RESOURCES: Resource[] = [
  {
    id: 'b2b-website-mastery',
    kind: 'Guide',
    cover: 'https://ik.imagekit.io/qcvroy8xpd/b2b-website-mastery-cover.png',
    coverAlt: 'Cover of the free guide, B2B Website Mastery',
    title: 'B2B Website',
    titleAccent: 'Mastery',
    excerpt:
      'A practical guide to designing and building B2B websites that generate qualified leads, not just internal approval. Strategy through launch.',
    formId: '261968253944066',
    formHeading: 'Get the free guide',
    formTitle: 'Get the free B2B Website Mastery guide',
  },
  {
    id: 'b2b-checklist',
    kind: 'Checklist',
    cover:
      'https://ik.imagekit.io/qcvroy8xpd/b2b-website-checklist-cover_6-EphRF04.png',
    coverAlt: 'Cover of the free B2B Website Checklist',
    title: 'The B2B Website',
    titleAccent: 'Checklist',
    excerpt:
      'A no-fluff checklist for auditing a B2B website against the things that actually drive pipeline: conversion, speed, trust, and search.',
    formId: '261967965285073',
    formHeading: 'Get the free checklist',
    formTitle: 'Get the free B2B Website Checklist',
  },
  {
    id: 'landing-page-lead-magnet',
    kind: 'Guide',
    cover: 'https://ik.imagekit.io/qcvroy8xpd/Landing%20Page%20persuasion.png',
    coverAlt: 'Cover of the free guide, The Landing Page Lead Magnet',
    title: 'The Landing Page',
    titleAccent: 'Lead Magnet',
    excerpt:
      'A no-fluff guide to building landing pages that turn visitors into leads, from headline frameworks to the layout mistakes that cost you signups.',
    formHeading: 'Get the free guide',
    formTitle: 'Get the Free Landing Page Guide',
  },
];

export default function ResourcesPage() {
  const [active, setActive] = useState<Resource | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!active) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(null);
    };
    window.addEventListener('keydown', onKey);

    // Lock the page behind the dialog so the form, not the grid, scrolls.
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [active]);

  return (
    <main className="bg-black">
      {/* ===================== HERO ===================== */}
      <section className="relative bg-black overflow-hidden pt-28 pb-16 px-6 lg:px-12">
        <div
          className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.5'/></svg>\")",
          }}
        />
        <div className="absolute top-1/3 left-[-10%] w-[700px] h-[700px] bg-[#A3D1FF]/8 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative">
          <ChapterMarker number="Resources · Vol. 01" label="Guides · Checklists · Free" />

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-white leading-[0.9] tracking-[-0.04em] mb-8 max-w-5xl"
            style={{
              fontFamily: SERIF,
              fontSize: 'clamp(2.75rem, 7.5vw, 6.5rem)',
              fontWeight: 400,
            }}
          >
            Free <em className="italic text-[#A3D1FF]">resources.</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-xl md:text-2xl text-white/70 max-w-2xl leading-snug"
          >
            Everything I&apos;ve learned building B2B sites that generate pipeline, written
            down and given away. Pick one, hit download, and the PDF is yours.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-6 text-[11px] font-mono uppercase tracking-[0.3em] text-white/40"
          >
            No gatekeeping · No sales call · Unsubscribe anytime
          </motion.p>
        </div>
      </section>

      {/* ===================== THE LIBRARY ===================== */}
      <section className="relative bg-[#0a0a0a] py-24 md:py-28 px-6 lg:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <ChapterMarker number="01" label="The library" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 pt-6">
            {RESOURCES.map((resource, i) => (
              <motion.article
                key={resource.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
              >
                <button
                  type="button"
                  onClick={() => setActive(resource)}
                  aria-haspopup="dialog"
                  className="group block w-full text-left"
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-[#1b1b1b] mb-6">
                    <img
                      src={resource.cover}
                      alt={resource.coverAlt}
                      loading={i === 0 ? 'eager' : 'lazy'}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-[900ms]"
                    />
                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-[10px] font-mono uppercase tracking-[0.3em] text-white/80">
                      <span>{resource.kind}</span>
                      <span>PDF</span>
                    </div>
                  </div>

                  <h2
                    className="text-white leading-[1.1] tracking-tight group-hover:text-[#A3D1FF] transition-colors duration-500 mb-3"
                    style={{
                      fontFamily: SERIF,
                      fontSize: 'clamp(1.5rem, 2.5vw, 2.15rem)',
                      fontWeight: 500,
                    }}
                  >
                    {resource.title} {resource.titleAccent}
                  </h2>

                  <p className="text-white/60 leading-relaxed text-sm">
                    {resource.excerpt}
                  </p>

                  <div className="mt-6 inline-flex items-center gap-2 text-white font-medium border-b border-white/30 group-hover:border-[#A3D1FF] group-hover:text-[#A3D1FF] transition-colors pb-1">
                    Download
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </button>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== OPT-IN DIALOG ===================== */}
      {/* The form is mounted only once the visitor asks for the download. */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[120] flex items-start justify-center overflow-y-auto p-4 sm:p-6"
          >
            <button
              aria-label="Close"
              onClick={() => setActive(null)}
              className="fixed inset-0 cursor-default bg-black/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative my-auto w-full max-w-2xl bg-[#0b0b0b] border border-white/10 overflow-hidden"
              role="dialog"
              aria-modal="true"
              aria-labelledby="resource-dialog-title"
            >
              <div
                aria-hidden
                className="absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full blur-[120px] pointer-events-none"
                style={{ background: `${ACCENT}24` }}
              />

              <button
                ref={closeRef}
                aria-label="Close"
                onClick={() => setActive(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center border border-white/15 text-white/60 hover:text-white hover:border-white/40 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="relative p-7 sm:p-8">
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 border text-[10px] font-mono uppercase tracking-[0.28em]"
                  style={{
                    borderColor: `${ACCENT}40`,
                    color: ACCENT,
                    background: `${ACCENT}0d`,
                  }}
                >
                  <FileDown className="w-3.5 h-3.5" />
                  Free {active.kind}
                </div>

                <div className="flex gap-5">
                  <img
                    src={active.cover}
                    alt={active.coverAlt}
                    className="hidden sm:block w-24 h-auto shrink-0 self-start border border-white/10"
                  />
                  <div>
                    <h2
                      id="resource-dialog-title"
                      className="text-white leading-tight tracking-[-0.02em] mb-3"
                      style={{
                        fontFamily: SERIF,
                        fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                        fontWeight: 400,
                      }}
                    >
                      {active.title}{' '}
                      <em className="italic" style={{ color: ACCENT }}>
                        {active.titleAccent}
                      </em>
                    </h2>
                    <p className="text-white/60 leading-relaxed text-sm">
                      {active.excerpt} Enter your details below and the download is yours.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/10">
                  <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 mb-4">
                    {active.formHeading}
                  </p>
                  <LeadMagnetFormEmbed
                    key={active.id}
                    formId={active.formId}
                    title={active.formTitle}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
