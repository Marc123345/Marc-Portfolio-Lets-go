"use client";

import React from 'react';
import ProjectTimelineVisualizer from '@/components/ProjectTimelineVisualizer';

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

const PRINCIPLES = [
  {
    title: 'Transparency',
    body: 'No surprises or hidden steps. You know exactly what to expect at every stage of the project.',
  },
  {
    title: 'Collaboration',
    body: 'We work closely together throughout the process, ensuring your vision is realized.',
  },
  {
    title: 'Efficiency',
    body: 'A streamlined process eliminates delays and keeps your project on track for timely delivery.',
  },
];

const QUOTES = [
  {
    client: 'Binns Media Group',
    quote:
      'The timeline was clear from day one, and Marc delivered exactly as promised. No surprises, just excellent results.',
  },
  {
    client: 'Wellness TCYS',
    quote:
      'The project timeline made it easy to plan our marketing around the launch. Everything was delivered on schedule.',
  },
];

export default function ProjectTimelinePage() {
  const toolSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Website Project Timeline Visualizer',
    applicationCategory: 'WebApplication',
    operatingSystem: 'All',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    description:
      "See exactly what to expect during your website project with an interactive timeline tool. A transparent process ensures you're informed every step of the way.",
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
          <ChapterMarker number="Tool · Vol. 03" label="Free · No sign-up" />

          <h1
            className="text-white leading-[0.9] tracking-[-0.04em] mb-8 max-w-5xl"
            style={{
              fontFamily: SERIF,
              fontSize: 'clamp(2.75rem, 7.5vw, 6.5rem)',
              fontWeight: 400,
            }}
          >
            Project <em className="italic text-[#A3D1FF]">timeline.</em>
          </h1>

          <p className="text-xl md:text-2xl text-white/70 max-w-2xl leading-snug">
            See exactly what to expect during your website project, phase by phase, so
            you&apos;re informed and involved every step of the way.
          </p>

          <p className="mt-6 text-[11px] font-mono uppercase tracking-[0.3em] text-white/40">
            Discovery · Design · Build · Launch
          </p>
        </div>
      </section>

      {/* ===================== THE TIMELINE ===================== */}
      <section className="relative bg-[#0a0a0a] py-24 md:py-28 px-6 lg:px-12 border-t border-white/10">
        <div className="max-w-4xl mx-auto">
          <ChapterMarker number="01" label="The phases" />
          <ProjectTimelineVisualizer />
        </div>
      </section>

      {/* ===================== WHY IT WORKS ===================== */}
      <section className="relative bg-black py-24 md:py-32 px-6 lg:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <ChapterMarker number="02" label="Why it works" />

          <div className="grid md:grid-cols-3 gap-8 md:gap-10 pt-6">
            {PRINCIPLES.map((item) => (
              <div key={item.title} className="border-t border-white/10 pt-6">
                <h3
                  className="text-white leading-[1.15] tracking-tight mb-3"
                  style={{
                    fontFamily: SERIF,
                    fontSize: 'clamp(1.25rem, 2vw, 1.65rem)',
                    fontWeight: 500,
                  }}
                >
                  {item.title}
                </h3>
                <p className="text-white/60 leading-relaxed text-sm">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CLIENT STORIES ===================== */}
      <section className="relative bg-[#0a0a0a] py-24 md:py-32 px-6 lg:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <ChapterMarker number="03" label="Client stories" />

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <h2
                className="text-white leading-[1.05] tracking-[-0.02em] mb-8"
                style={{
                  fontFamily: SERIF,
                  fontSize: 'clamp(1.75rem, 3vw, 2.75rem)',
                  fontWeight: 400,
                }}
              >
                Delivered on time,{' '}
                <em className="italic text-[#A3D1FF]">as promised.</em>
              </h2>

              <div className="space-y-8">
                {QUOTES.map((item) => (
                  <blockquote key={item.client} className="border-t border-white/10 pt-6">
                    <p
                      className="text-white/90 leading-[1.35] italic mb-3"
                      style={{
                        fontFamily: SERIF,
                        fontSize: 'clamp(1.15rem, 1.8vw, 1.5rem)',
                        fontWeight: 400,
                      }}
                    >
                      &ldquo;{item.quote}&rdquo;
                    </p>
                    <footer className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40">
                      {item.client}
                    </footer>
                  </blockquote>
                ))}
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden bg-[#1b1b1b]">
              <img
                src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80"
                alt="Project timeline planning and management session for web development"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
