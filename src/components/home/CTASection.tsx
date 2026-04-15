"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import ContactForm from '@/components/ContactForm';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const SERIF = "'Fraunces', Georgia, 'Times New Roman', serif";
const CALENDLY_LINK = 'https://calendly.com/marc-friedman-web-design--meeting-link/30min';

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

export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const typeY = useTransform(scrollYProgress, [0, 1], ['6%', '-6%']);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 md:py-44 px-6 lg:px-12 bg-[#0a0a0a] border-t border-white/10 overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-[#A3D1FF]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#A3D1FF]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Grain */}
      <div
        className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.5'/></svg>\")",
        }}
      />

      <div className="max-w-7xl mx-auto relative">
        <ChapterMarker number="Colophon · End Matter" label="Let's Build · 2026" />

        {/* Dramatic headline */}
        <motion.div style={{ y: typeY }} className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-white leading-[0.92] tracking-[-0.04em] max-w-6xl"
            style={{
              fontFamily: SERIF,
              fontSize: 'clamp(3rem, 9vw, 9rem)',
              fontWeight: 400,
            }}
          >
            Every day without a great website is a day your{' '}
            <em className="italic text-[#A3D1FF]">competitor</em> gets the lead.
          </motion.h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mb-20"
        >
          Let&apos;s fix that. Book 30 minutes — I&apos;ll audit your current site{' '}
          <em className="text-white" style={{ fontFamily: SERIF }}>
            live on the call
          </em>{' '}
          and show you exactly what&apos;s costing you customers.
        </motion.p>

        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-start">
          {/* Left — form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="relative"
          >
            <div className="relative bg-[#111418] border border-white/10 p-8 md:p-10 rounded-sm">
              {/* Corner bolts */}
              <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-white/20" />
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-white/20" />
              <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-white/20" />
              <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-white/20" />

              <div className="flex items-center justify-between mb-6 text-[10px] font-mono uppercase tracking-[0.3em] text-white/50">
                <span>Form · 01</span>
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  Accepting inquiries
                </span>
              </div>

              <ContactForm />

              <p className="text-center text-sm text-white/60 mt-6">
                Or{' '}
                <a
                  href={CALENDLY_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#A3D1FF] font-medium hover:underline"
                >
                  book directly on my calendar
                </a>
              </p>
            </div>
          </motion.div>

          {/* Right — editorial sidebar */}
          <motion.aside
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="space-y-10"
          >
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.35em] text-[#A3D1FF] mb-4">
                — What happens next
              </p>
              <ol className="space-y-5">
                {[
                  {
                    n: '01',
                    t: 'You fill the form.',
                    d: 'Takes about 90 seconds. No pre-screeners.',
                  },
                  {
                    n: '02',
                    t: 'I reply within 24 hours.',
                    d: 'With honest thoughts and a proposed next step.',
                  },
                  {
                    n: '03',
                    t: 'We talk for 30 minutes.',
                    d: 'I audit your site live. You walk away with a plan.',
                  },
                ].map((s) => (
                  <li key={s.n} className="flex gap-5 items-baseline border-b border-white/10 pb-5">
                    <span
                      className="text-[#A3D1FF]/70 text-xs font-mono tracking-[0.2em] shrink-0"
                      style={{ fontVariantNumeric: 'tabular-nums' }}
                    >
                      {s.n}
                    </span>
                    <div>
                      <p
                        className="text-white text-2xl md:text-3xl leading-tight mb-1"
                        style={{ fontFamily: SERIF, fontWeight: 500 }}
                      >
                        {s.t}
                      </p>
                      <p className="text-sm text-white/60 leading-relaxed">{s.d}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <p className="text-xs font-mono uppercase tracking-[0.35em] text-[#A3D1FF] mb-4">
                — Or skip the form
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={CALENDLY_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-black font-medium px-6 py-3 rounded-full hover:bg-[#A3D1FF] transition-colors group"
                >
                  Book the 30-min call
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 text-white font-medium border-b border-white/30 hover:border-[#A3D1FF] hover:text-[#A3D1FF] transition-colors py-1"
                >
                  See the work first
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 pt-6 border-t border-white/10">
              Thanks for scrolling this far. · Marc Friedman · 2026
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
