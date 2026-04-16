"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import ArcSlider, { ArcCard } from '@/components/ArcSlider';

const SERIF = "Georgia, 'Times New Roman', serif";

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
    id: 'seo-content-layout',
    title: 'SEO Content & Layout',
    category: 'SEO',
    blurb:
      "Pages structured for search engines AND humans — content that ranks because it answers, layouts that convert.",
    href: '/services/seo-content-layout',
    bullets: ['On-page SEO', 'Conversion layouts', 'Schema.org'],
  },
  {
    id: 'aeo',
    title: 'AEO',
    category: 'Answer Engines',
    blurb:
      'Get cited by ChatGPT, Perplexity, Claude, and Google AI Overviews. Structured content AI engines can extract.',
    href: '/services/aeo',
    bullets: ['ChatGPT + Perplexity', 'Schema-first', 'Citation tracking'],
  },
  {
    id: 'geo',
    title: 'GEO',
    category: 'Generative Search',
    blurb:
      'Show up inside AI-generated answers across LLMs. The new SEO playbook for an AI-first search era.',
    href: '/services/geo',
    bullets: ['LLM-first content', 'Brand-as-entity', 'Cross-engine tracking'],
  },
  {
    id: 'local-seo',
    title: 'Local SEO',
    category: 'Local',
    blurb:
      'Dominate Google Maps, win the Local 3-Pack, turn your Google Business Profile into your best landing page.',
    href: '/services/local-seo',
    bullets: ['GBP optimisation', 'Local 3-Pack', 'NAP + reviews'],
  },
  {
    id: 'maintenance-hosting',
    title: 'Maintenance & Hosting',
    category: 'Care',
    blurb:
      'Your site kept fast, secure, and online — by the same person who built it. Cloudflare-grade hosting handled.',
    href: '/services/maintenance-hosting',
    bullets: ['Same-day fixes', 'Cloudflare hosting', 'Monthly perf report'],
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

export default function ServicesArcSection() {
  return (
    <section className="relative bg-black border-t border-white/10 py-28 md:py-36 px-6 lg:px-12 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[700px] bg-[#A3D1FF]/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <ChapterMarker number="Chapter · Services" label="11 Disciplines" />

        <div className="grid md:grid-cols-[1.2fr_1fr] gap-8 md:gap-16 items-end mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9 }}
            className="text-white leading-[0.95] tracking-[-0.03em]"
            style={{
              fontFamily: SERIF,
              fontSize: 'clamp(2.75rem, 7vw, 6rem)',
              fontWeight: 400,
            }}
          >
            What I <em className="italic text-[#A3D1FF]">do.</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/60 text-lg leading-relaxed"
          >
            Drag the arc, click any card, or use the arrows. Each opens the
            full service page.
          </motion.p>
        </div>

        <ArcSlider cards={services} />

        <div className="mt-16 flex items-center justify-between border-t border-white/10 pt-8">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40">
            — End of arc
          </span>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-white font-medium border-b border-white/30 hover:border-[#A3D1FF] hover:text-[#A3D1FF] transition-colors py-1"
          >
            See all services in detail
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
