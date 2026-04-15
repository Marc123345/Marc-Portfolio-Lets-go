"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import ArcSlider, { ArcCard } from '@/components/ArcSlider';
import {
  ChapterMarker,
  ServiceMarquee,
  ServiceColophon,
  SERIF,
} from '@/components/ServiceEditorial';

const services: ArcCard[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    category: 'Build',
    blurb:
      'Custom-coded React sites that load in under 2 seconds, rank on Google, and convert.',
    href: '/services/web-development',
    bullets: ['React + Next.js', 'CMS + integrations', '4–12 week builds'],
  },
  {
    id: 'design',
    title: 'UI/UX Design',
    category: 'Design',
    blurb:
      'Interfaces grounded in research, built to move the number that actually matters.',
    href: '/services/design',
    bullets: ['Research → wireframe → ship', 'Conversion-focused', 'A11y AA'],
  },
  {
    id: 'design-systems',
    title: 'Design Systems',
    category: 'Systems',
    blurb:
      'Tokens, components, documentation. The opinionated rules that keep a product consistent.',
    href: '/services/design-systems',
    bullets: ['Audit → tokens → ship', 'Storybook + docs', 'OSS-friendly'],
  },
  {
    id: 'startup-mvp',
    title: 'Startup MVP',
    category: 'Launch',
    blurb:
      'Ship the product that proves your thesis — fast. Built to raise, win first users, or kill an idea.',
    href: '/services/startup-mvp',
    bullets: ['30-day launches', 'Investor-ready', 'Founder-built'],
  },
  {
    id: 'ai-integration',
    title: 'AI Integration',
    category: 'AI',
    blurb:
      'Real AI in real products — not demos. Measurable outcomes, production-ready architecture.',
    href: '/services/ai-integration',
    bullets: ['LLM + RAG + agents', 'Evals + guardrails', 'Anthropic / OpenAI'],
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity UX',
    category: 'Security',
    blurb:
      'Security baked into the product — not bolted on after a breach. SOC dashboards, auth, access control.',
    href: '/services/cybersecurity',
    bullets: ['OWASP-aware', 'SOC-grade UX', 'Pen-test friendly'],
  },
  {
    id: 'external-web-department',
    title: 'External Web Department',
    category: 'Retainer',
    blurb:
      'For multi-brand and multi-location companies that need to ship sites fast — without hiring a team.',
    href: '/services/external-web-department',
    bullets: ['Multi-brand', 'On-demand shipping', 'Free first landing page'],
  },
  {
    id: 'premium-web-package',
    title: 'Premium Web',
    category: 'Flagship',
    blurb:
      "A complete, high-end website — strategic planning, custom design, React build, CRM, secure hosting.",
    href: '/services/premium-web-package',
    bullets: ['React + Next.js', 'CRM + analytics', 'Cloudflare hosting'],
  },
  {
    id: 'monthly-retainer',
    title: 'Monthly Retainer',
    category: 'Care',
    blurb:
      'Website, handled. Monthly design, dev, and performance care from someone who knows your codebase.',
    href: '/services/monthly-retainer',
    bullets: ['Same-day fixes', 'Weekly cadence', 'Monthly perf report'],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ===================== MASTHEAD ===================== */}
      <section className="relative bg-black overflow-hidden pt-28 pb-12 px-6 lg:px-12 border-b border-white/10">
        <div
          className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.5'/></svg>\")",
          }}
        />
        <div className="absolute top-1/3 left-[-10%] w-[700px] h-[700px] bg-[#A3D1FF]/8 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative">
          <ChapterMarker number="Chapter · Services" label="09 Disciplines · 2026" />

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs font-mono uppercase tracking-[0.35em] text-[#A3D1FF] mb-6"
          >
            — Nine ways to work together
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-white leading-[0.9] tracking-[-0.04em] mb-8 max-w-5xl"
            style={{
              fontFamily: SERIF,
              fontSize: 'clamp(2.75rem, 7vw, 6rem)',
              fontWeight: 400,
            }}
          >
            What I <em className="italic text-[#A3D1FF]">do.</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-xl md:text-2xl text-white/70 max-w-2xl leading-snug"
          >
            Drag, click, or use the arrows. Each card opens the full service
            page.
          </motion.p>
        </div>
      </section>

      {/* ===================== ARC SLIDER ===================== */}
      <section className="relative bg-black py-20 md:py-28 px-6 lg:px-12 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[700px] bg-[#A3D1FF]/8 rounded-full blur-[160px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative">
          <ArcSlider cards={services} />
        </div>
      </section>

      <ServiceMarquee
        phrases={[
          'React · Next.js',
          'Design Systems',
          'AI · Security',
          'Startup MVP',
          'Retainer · Care',
          'Multi-brand',
          'Hand-coded',
        ]}
      />

      {/* ===================== INDEX (LIST FALLBACK) ===================== */}
      <section className="relative bg-[#0a0a0a] py-24 md:py-32 px-6 lg:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <ChapterMarker number="Index" label="All Services · A–Z" />
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9 }}
            className="text-white leading-[0.95] tracking-[-0.03em] mb-12 max-w-3xl"
            style={{
              fontFamily: SERIF,
              fontSize: 'clamp(2rem, 4.5vw, 4rem)',
              fontWeight: 400,
            }}
          >
            Or skim the{' '}
            <em className="italic text-[#A3D1FF]">whole shelf.</em>
          </motion.h2>

          <ul className="border-y border-white/10">
            {services.map((s, i) => (
              <li
                key={s.id}
                className="border-b border-white/10 last:border-b-0 group"
              >
                <Link
                  href={s.href}
                  className="grid md:grid-cols-[80px_1fr_180px_24px] gap-4 md:gap-8 items-center py-5 md:py-6"
                >
                  <span
                    className="text-[#A3D1FF]/60 font-mono text-xs tracking-[0.2em] hidden md:block"
                    style={{ fontVariantNumeric: 'tabular-nums' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3
                    className="text-white leading-[1.1] tracking-tight group-hover:text-[#A3D1FF] transition-colors"
                    style={{
                      fontFamily: SERIF,
                      fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)',
                      fontWeight: 500,
                    }}
                  >
                    {s.title}
                  </h3>
                  <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/50 hidden md:block">
                    {s.category}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all hidden md:block" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ServiceColophon
        headline="Don't see what"
        italicHeadline="you need?"
        lead="Most engagements are some combination of these. Book a call and we'll scope it from scratch."
      />
    </>
  );
}
