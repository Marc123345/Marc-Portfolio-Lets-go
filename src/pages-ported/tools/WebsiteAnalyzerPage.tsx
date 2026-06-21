"use client";

import React from 'react';
import { Gauge } from 'lucide-react';
import WebsiteAnalyzer from '@/components/WebsiteAnalyzer';

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
    <main className="min-h-screen bg-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }}
      />
      <section className="mx-auto max-w-3xl px-6 pt-28 pb-24 md:pt-36">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 border border-[#A3D1FF]/40 bg-[#A3D1FF]/[0.06] text-[10px] font-mono uppercase tracking-[0.28em] text-[#A3D1FF]">
          <Gauge className="w-3.5 h-3.5" />
          Free Tool
        </div>

        <h1 className="text-4xl md:text-5xl font-semibold leading-[1.05] tracking-tight">
          Website <span className="text-[#A3D1FF]">Analyzer</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
          Paste any URL and get an instant, real Lighthouse audit, performance,
          accessibility, best practices, SEO, and Core Web Vitals. Powered by Google
          PageSpeed Insights. No sign-up.
        </p>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
          <WebsiteAnalyzer />
        </div>
      </section>
    </main>
  );
}
