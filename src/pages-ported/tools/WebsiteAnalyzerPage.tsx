"use client";

import React from 'react';
import WebsiteAnalyzer from '@/components/WebsiteAnalyzer';

const SERIF = "var(--font-heading)";

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

export default function WebsiteAnalyzerPage() {
  const toolSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Website Analyzer, Free Instant Speed & SEO Audit',
    applicationCategory: 'WebApplication',
    operatingSystem: 'All',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    description:
      'Run a free, instant Lighthouse audit of any website, performance, accessibility, best practices, SEO, and Core Web Vitals.',
    creator: { '@type': 'Person', name: 'Marc Friedman' },
  };

  return (
    <main className="bg-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }}
      />

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
          <ChapterMarker number="Tool · Vol. 01" label="Free · No sign-up" />

          <h1
            className="text-white leading-[0.9] tracking-[-0.04em] mb-8 max-w-5xl"
            style={{
              fontFamily: SERIF,
              fontSize: 'clamp(2.75rem, 7.5vw, 6.5rem)',
              fontWeight: 400,
            }}
          >
            Website <em className="italic text-[#A3D1FF]">analyzer.</em>
          </h1>

          <p className="text-xl md:text-2xl text-white/70 max-w-2xl leading-snug">
            Paste any URL and get an instant, real Lighthouse audit, performance,
            accessibility, best practices, SEO, and Core Web Vitals.
          </p>

          <p className="mt-6 text-[11px] font-mono uppercase tracking-[0.3em] text-white/40">
            Powered by Google PageSpeed Insights · No sign-up
          </p>
        </div>
      </section>

      {/* ===================== THE AUDIT ===================== */}
      <section className="relative bg-[#0a0a0a] py-24 md:py-28 px-6 lg:px-12 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <ChapterMarker number="01" label="Run the audit" />
          <WebsiteAnalyzer />
        </div>
      </section>
    </main>
  );
}
