"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Gauge, Search, Smartphone, ShieldCheck, Sparkles, Globe } from 'lucide-react';

function AuditForm() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js';
    script.async = true;
    script.onload = () => {
      (window as unknown as Record<string, unknown> & { jotformEmbedHandler?: (sel: string, base: string) => void })
        .jotformEmbedHandler?.("iframe[id='JotFormIFrame-261294575681063']", 'https://form.jotform.com/');
    };
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);

  return (
    <div style={{ position: 'relative', minHeight: '480px' }}>
      {!loaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4"
          style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
          <div className="w-8 h-8 rounded-full border-2 animate-spin"
            style={{ borderColor: 'rgba(163,209,255,0.15)', borderTopColor: '#A3D1FF' }} />
          <span style={{ fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(163,209,255,0.5)' }}>
            Loading form
          </span>
        </div>
      )}
      <iframe
        id="JotFormIFrame-261294575681063"
        title="Free Website Audit Request"
        onLoad={() => setLoaded(true)}
        allow="geolocation; microphone; camera; fullscreen; payment"
        src="https://form.jotform.com/261294575681063"
        style={{
          minWidth: '100%', maxWidth: '100%', height: '480px', border: 'none',
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}
        scrolling="no"
      />
    </div>
  );
}

const SERIF = "Georgia, 'Times New Roman', serif";
const ACCENT = '#A3D1FF';

const GRAIN =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/></svg>\")";

const checks = [
  { icon: Gauge,       label: 'Site speed & Core Web Vitals' },
  { icon: Search,      label: 'On-page SEO & metadata' },
  { icon: Smartphone,  label: 'Mobile responsiveness' },
  { icon: ShieldCheck, label: 'Trust signals & credibility' },
  { icon: Sparkles,    label: 'Conversion path & CTAs' },
  { icon: Globe,       label: 'Technical structure & schema' },
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Free Website Analyzer',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'All',
  url: 'https://marcfriedmanportfolio.com/free-website-analyzer',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description:
    'Get a free, hand-reviewed audit of your website covering speed, SEO, mobile usability, conversions, and credibility.',
  provider: { '@type': 'Person', name: 'Marc Friedman', url: 'https://marcfriedmanportfolio.com' },
};

function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function FreeWebsiteAnalyzerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* ── Hero ── */}
      <section className="relative bg-black overflow-hidden pt-28 pb-20 px-6 lg:px-12">
        <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none" style={{ backgroundImage: GRAIN }} />
        <div className="absolute top-1/4 left-[-10%] w-[700px] h-[700px] rounded-full blur-[140px] pointer-events-none" style={{ backgroundColor: `${ACCENT}08` }} />

        <div className="max-w-7xl mx-auto relative">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs font-mono uppercase tracking-[0.35em] mb-6"
            style={{ color: ACCENT }}
          >
            — Free tool · No signup · 48-hour turnaround
          </motion.p>

          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-14 xl:gap-20 items-start">

            {/* Left */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-white leading-[0.95] tracking-[-0.03em] mb-6"
                style={{ fontFamily: SERIF, fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontWeight: 400 }}
              >
                Find out what&apos;s{' '}
                <em className="italic" style={{ color: ACCENT }}>costing you</em>{' '}
                customers.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.25 }}
                className="text-white/65 text-lg leading-relaxed mb-10 max-w-lg"
              >
                Submit your site. I personally review it across six dimensions and send you a plain-English report within 48 hours. Free. No pitch.
              </motion.p>

              {/* What's included */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.38 }}
                className="border border-white/10 divide-y divide-white/8"
              >
                {checks.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-4 px-6 py-4">
                    <Icon className="w-4 h-4 shrink-0" style={{ color: ACCENT }} />
                    <span className="text-white/75 text-sm">{label}</span>
                  </div>
                ))}
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.55 }}
                className="mt-6 text-[11px] font-mono uppercase tracking-[0.25em] text-white/30"
              >
                Reviewed personally by Marc · 50+ websites shipped · 100% free
              </motion.p>
            </div>

            {/* Right — form */}
            <motion.div
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div
                className="relative border border-white/10 p-7 md:p-9"
                style={{ background: 'rgba(10,10,10,0.85)', backdropFilter: 'blur(16px)' }}
              >
                {/* Corner bolts */}
                <div className="absolute top-3 left-3 w-1.5 h-1.5 rounded-full bg-white/15" />
                <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-white/15" />
                <div className="absolute bottom-3 left-3 w-1.5 h-1.5 rounded-full bg-white/15" />
                <div className="absolute bottom-3 right-3 w-1.5 h-1.5 rounded-full bg-white/15" />

                <div className="flex items-center justify-between mb-6 text-[10px] font-mono uppercase tracking-[0.3em] text-white/40">
                  <span>Audit Request</span>
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    Accepting requests
                  </span>
                </div>

                <AuditForm />
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}
