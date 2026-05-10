"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, Bot, MessageSquare, FileText, Sparkles, Search } from 'lucide-react';
import AuditFormEmbed from '@/components/AuditFormEmbed';

const SERIF = "Georgia, 'Times New Roman', serif";

const toolSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Free GEO Audit',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'All',
  url: 'https://marcfriedmanportfolio.com/free-geo-audit',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  description:
    'A free, expert-reviewed Generative Engine Optimization (GEO) audit covering AI visibility across ChatGPT, Perplexity, Google AI Overviews, and Gemini.',
  provider: {
    '@type': 'Person',
    name: 'Marc Friedman',
    url: 'https://marcfriedmanportfolio.com',
  },
};

const checks = [
  { icon: Bot, label: 'AI crawler accessibility (GPTBot, PerplexityBot, ClaudeBot)' },
  { icon: MessageSquare, label: 'Answer engine quotability of your content' },
  { icon: Brain, label: 'Semantic structure & topical authority' },
  { icon: FileText, label: 'Schema markup (FAQ, Article, Organization, HowTo)' },
  { icon: Search, label: 'Citation potential in AI-generated answers' },
  { icon: Sparkles, label: 'Content rewrites for AI-first ranking' },
];

const enginesCovered = [
  'ChatGPT Search',
  'Google AI Overviews',
  'Perplexity',
  'Gemini',
  'Claude',
  'Bing Copilot',
];

export default function FreeGeoAuditPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }}
      />

      <section className="relative bg-black overflow-hidden pt-28 pb-20 px-6 lg:px-12">
        <div
          className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.5'/></svg>\")",
          }}
        />
        <div className="absolute top-1/4 right-[-10%] w-[700px] h-[700px] bg-[#A3D1FF]/8 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-[#A3D1FF]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 justify-center mb-6"
          >
            <span className="px-3 py-1 border border-[#A3D1FF]/40 bg-[#A3D1FF]/5 text-[10px] font-mono uppercase tracking-[0.3em] text-[#A3D1FF]">
              New · 2026
            </span>
            <span className="text-xs font-mono uppercase tracking-[0.35em] text-[#A3D1FF]">
              — AI Visibility Audit
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-white leading-[0.95] tracking-[-0.04em] mb-6 text-center"
            style={{
              fontFamily: SERIF,
              fontSize: 'clamp(2.5rem, 6.5vw, 6rem)',
              fontWeight: 400,
            }}
          >
            Free <em className="italic text-[#A3D1FF]">GEO</em> Audit.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-snug text-center mb-3"
          >
            Find out if AI engines like ChatGPT, Perplexity, and Google AI Overviews are quoting
            your site — or your competitors.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-sm text-white/40 text-center mb-10 italic"
            style={{ fontFamily: SERIF }}
          >
            Generative Engine Optimization, reviewed by a human.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            <a
              href="#audit-form"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('audit-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="mr_btn mr_btn_primary inline-flex items-center gap-2"
            >
              <span>Request My Free GEO Audit</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          <div className="mt-14">
            <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/35 text-center mb-4">
              — Engines we audit against
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {enginesCovered.map((e) => (
                <span
                  key={e}
                  className="px-3 py-1.5 border border-white/15 text-xs text-white/70 font-mono uppercase tracking-[0.15em]"
                >
                  {e}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-[#0a0a0a] py-24 px-6 lg:px-12 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="text-white leading-[1.0] tracking-[-0.02em] mb-4 max-w-3xl"
            style={{
              fontFamily: SERIF,
              fontSize: 'clamp(2rem, 4vw, 3.25rem)',
              fontWeight: 500,
            }}
          >
            What we <em className="italic text-[#A3D1FF]">audit.</em>
          </motion.h2>
          <p className="text-white/60 max-w-2xl mb-12">
            SEO is no longer enough. Six diagnostics designed to reveal whether AI answer engines
            can — and will — cite your site.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {checks.map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="p-6 bg-[#111418] border border-white/10 hover:border-[#A3D1FF]/40 transition-colors"
                >
                  <Icon className="w-6 h-6 text-[#A3D1FF] mb-4" />
                  <p className="text-white font-medium leading-snug">{c.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative bg-black py-24 px-6 lg:px-12 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="text-white leading-[1.0] tracking-[-0.02em] mb-4 text-center"
            style={{
              fontFamily: SERIF,
              fontSize: 'clamp(2rem, 4vw, 3.25rem)',
              fontWeight: 500,
            }}
          >
            Why <em className="italic text-[#A3D1FF]">GEO</em> matters now.
          </motion.h2>
          <p className="text-white/60 text-center max-w-2xl mx-auto mb-12">
            Search is splitting in two. Half your future traffic comes from AI answers — not the
            blue links.
          </p>

          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { stat: '60%+', label: 'of zero-click searches now end inside an AI answer' },
              { stat: '8 in 10', label: 'B2B buyers research with ChatGPT or Perplexity' },
              { stat: '< 24mo', label: 'until GEO is table-stakes, like SEO was in 2010' },
            ].map((s, i) => (
              <motion.div
                key={s.stat}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-6 border border-white/10 bg-[#111418]"
              >
                <p
                  className="text-[#A3D1FF] mb-3"
                  style={{
                    fontFamily: SERIF,
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    fontWeight: 500,
                    fontVariantNumeric: 'tabular-nums',
                  }}
                >
                  {s.stat}
                </p>
                <p className="text-white/65 text-sm leading-relaxed">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Audit request form ── */}
      <section id="audit-form" className="relative bg-[#0a0a0a] border-t border-white/10 py-24 px-6 lg:px-12">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs font-mono uppercase tracking-[0.35em] text-[#A3D1FF] mb-4 text-center">— Free · No signup</p>
          <h2 className="text-center text-white mb-10" style={{ fontFamily: SERIF, fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', fontWeight: 400 }}>
            Request your free GEO audit
          </h2>
          <AuditFormEmbed />
        </div>
      </section>
    </>
  );
}
