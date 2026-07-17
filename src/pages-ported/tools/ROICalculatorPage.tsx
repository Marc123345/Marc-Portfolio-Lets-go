"use client";

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import ROICalculator from '@/components/ROICalculator';

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

const RESULTS = [
  {
    client: 'Binns Media Group',
    result:
      'A 40% increase in engagement and 60% faster load times, resulting in significantly improved user retention and content consumption.',
  },
  {
    client: 'Wellness TCYS',
    result:
      'A 200% increase in online bookings and 150% growth in organic traffic after implementing a conversion-focused design strategy.',
  },
  {
    client: 'A Secure Annapolis Locksmith',
    result:
      'A 150% increase in qualified leads and top 3 rankings in local search results, dramatically growing the business.',
  },
];

const BEYOND = [
  'Enhanced brand perception and credibility',
  'Improved customer experience and satisfaction',
  'Better competitive positioning in your market',
  'Long-term scalability for future growth',
];

export default function ROICalculatorPage() {
  const toolSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Website ROI Calculator - Free Business Tool',
    applicationCategory: 'WebApplication',
    operatingSystem: 'All',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    description:
      'Calculate the potential return on investment for your website redesign project. See how a strategic website can impact your bottom line.',
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
          <ChapterMarker number="Tool · Vol. 02" label="Free · No sign-up" />

          <h1
            className="text-white leading-[0.9] tracking-[-0.04em] mb-8 max-w-5xl"
            style={{
              fontFamily: SERIF,
              fontSize: 'clamp(2.75rem, 7.5vw, 6.5rem)',
              fontWeight: 400,
            }}
          >
            Website ROI <em className="italic text-[#A3D1FF]">calculator.</em>
          </h1>

          <p className="text-xl md:text-2xl text-white/70 max-w-2xl leading-snug">
            Model the return on a redesign. See how traffic, conversion rate, and order
            value translate into real revenue.
          </p>

          <p className="mt-6 text-[11px] font-mono uppercase tracking-[0.3em] text-white/40">
            Estimates only · Your numbers, your assumptions
          </p>
        </div>
      </section>

      {/* ===================== THE CALCULATOR ===================== */}
      <section className="relative bg-[#0a0a0a] py-24 md:py-28 px-6 lg:px-12 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <ChapterMarker number="01" label="Run the numbers" />
          <ROICalculator />
        </div>
      </section>

      {/* ===================== REAL RESULTS ===================== */}
      <section className="relative bg-black py-24 md:py-32 px-6 lg:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <ChapterMarker number="02" label="Real results" />

          <div className="grid md:grid-cols-3 gap-8 md:gap-10 pt-6">
            {RESULTS.map((item) => (
              <div key={item.client} className="border-t border-white/10 pt-6">
                <h3
                  className="text-white leading-[1.15] tracking-tight mb-3"
                  style={{
                    fontFamily: SERIF,
                    fontSize: 'clamp(1.25rem, 2vw, 1.65rem)',
                    fontWeight: 500,
                  }}
                >
                  {item.client}
                </h3>
                <p className="text-white/60 leading-relaxed text-sm">{item.result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== BEYOND THE NUMBERS ===================== */}
      <section className="relative bg-[#0a0a0a] py-24 md:py-32 px-6 lg:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <ChapterMarker number="03" label="Beyond the numbers" />

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <h2
                className="text-white leading-[1.05] tracking-[-0.02em] mb-6"
                style={{
                  fontFamily: SERIF,
                  fontSize: 'clamp(1.75rem, 3vw, 2.75rem)',
                  fontWeight: 400,
                }}
              >
                ROI is the floor,{' '}
                <em className="italic text-[#A3D1FF]">not the ceiling.</em>
              </h2>
              <p className="text-white/60 leading-relaxed mb-8">
                A strategic redesign delivers benefits that never show up in a payback
                calculation:
              </p>

              <ul className="space-y-4">
                {BEYOND.map((item) => (
                  <li key={item} className="flex items-start gap-4 border-t border-white/10 pt-4">
                    <span className="text-[#A3D1FF] font-mono text-xs mt-1">/</span>
                    <span className="text-white/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden bg-[#1b1b1b]">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
                alt="Business strategy meeting discussing website ROI and investment planning"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section className="relative bg-black py-32 md:py-40 px-6 lg:px-12 border-t border-white/10 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#A3D1FF]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative">
          <h2
            className="text-white leading-[0.95] tracking-[-0.04em] mb-12 max-w-5xl"
            style={{
              fontFamily: SERIF,
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              fontWeight: 400,
            }}
          >
            Let&apos;s build the site{' '}
            <em className="italic text-[#A3D1FF]">that earns it back.</em>
          </h2>

          <div className="flex flex-wrap items-center gap-6">
            <Link
              href="/contact/"
              className="inline-flex items-center gap-3 bg-white text-black font-medium px-8 py-4 hover:bg-[#A3D1FF] transition-colors group"
            >
              Book a free strategy call
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>

            <Link
              href="/work/"
              className="inline-flex items-center gap-3 text-white font-medium border-b border-white/30 hover:border-[#A3D1FF] hover:text-[#A3D1FF] transition-colors py-1"
            >
              See the work
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
