"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Github, Mail, ShieldAlert } from 'lucide-react';
import Link from 'next/link';
import {
  ChapterMarker,
  ServiceMarquee,
  StatsBar,
  SERIF,
} from '@/components/ServiceEditorial';

const SENTINEL = {
  bg: '#0B0F17',
  surface: '#121826',
  accent: '#3DD68C',
  warn: '#F5B14A',
  critical: '#EF4444',
  info: '#3B82F6',
  muted: '#64748B',
};

const REPO = 'https://github.com/Marc123345/Cyber-Security-Design-System';

function SentinelSystemCard() {
  return (
    <div
      className="border border-white/10 overflow-hidden"
      style={{ background: SENTINEL.bg }}
    >
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 flex items-center justify-center"
            style={{ background: `${SENTINEL.accent}15` }}
          >
            <ShieldAlert className="w-5 h-5" style={{ color: SENTINEL.accent }} />
          </div>
          <div>
            <div className="text-white font-semibold tracking-tight">Sentinel DS</div>
            <div className="text-xs" style={{ color: SENTINEL.muted }}>
              Enterprise Cybersecurity Design System
            </div>
          </div>
        </div>
        <a
          href={REPO}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-xs font-mono text-white/60 hover:text-white transition-colors border border-white/10 px-3 py-1.5"
        >
          <Github className="w-3.5 h-3.5" /> View repo
        </a>
      </div>

      <div className="p-6 grid md:grid-cols-2 gap-6">
        <div>
          <p className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-3">
            Severity Scale — 5 Levels
          </p>
          <div className="space-y-2">
            {[
              { name: 'Critical', color: '#EF4444', dot: 100 },
              { name: 'High', color: '#F5B14A', dot: 80 },
              { name: 'Medium', color: '#FACC15', dot: 60 },
              { name: 'Low', color: '#3B82F6', dot: 40 },
              { name: 'Info', color: '#3DD68C', dot: 20 },
            ].map((s) => (
              <div
                key={s.name}
                className="flex items-center justify-between px-3 py-2"
                style={{ background: SENTINEL.surface }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ background: s.color }}
                  />
                  <span className="text-white text-sm font-medium">{s.name}</span>
                </div>
                <div className="h-1 w-24" style={{ background: `${s.color}20` }}>
                  <div
                    className="h-full"
                    style={{ background: s.color, width: `${s.dot}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-3">
            Live Components
          </p>

          <div
            className="p-3 mb-3 border"
            style={{
              background: `${SENTINEL.critical}10`,
              borderColor: `${SENTINEL.critical}40`,
            }}
          >
            <div className="flex items-start gap-2">
              <span
                className="mt-1 w-1.5 h-1.5 rounded-full shrink-0"
                style={{ background: SENTINEL.critical }}
              />
              <div>
                <div
                  className="text-xs font-bold uppercase tracking-wider mb-1"
                  style={{ color: SENTINEL.critical }}
                >
                  Critical · SOC Alert
                </div>
                <div className="text-white text-sm">
                  Unauthorized root access detected · node-07
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 mb-3">
            <div className="p-3" style={{ background: SENTINEL.surface }}>
              <div className="text-[10px] text-white/50 uppercase tracking-widest mb-1">
                Open Alerts
              </div>
              <div className="text-white text-xl font-bold">127</div>
            </div>
            <div className="p-3" style={{ background: SENTINEL.surface }}>
              <div className="text-[10px] text-white/50 uppercase tracking-widest mb-1">
                MTTR
              </div>
              <div className="text-white text-xl font-bold">
                4.2<span className="text-sm text-white/50">m</span>
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <button
              className="flex-1 text-xs font-semibold px-3 py-2"
              style={{ background: SENTINEL.accent, color: '#000' }}
            >
              Acknowledge
            </button>
            <button
              className="flex-1 text-xs font-semibold px-3 py-2 border text-white"
              style={{ borderColor: 'rgba(255,255,255,0.15)' }}
            >
              Investigate
            </button>
          </div>
        </div>
      </div>

      <div
        className="border-t border-white/5 px-6 py-4 grid grid-cols-4 gap-4"
        style={{ background: SENTINEL.surface }}
      >
        {[
          { label: 'Components', value: '15+' },
          { label: 'Tokens', value: '80+' },
          { label: 'Themes', value: '2' },
          { label: 'A11y', value: 'AA' },
        ].map((s) => (
          <div key={s.label}>
            <div className="text-white font-bold text-lg">{s.value}</div>
            <div className="text-[10px] text-white/40 uppercase tracking-widest">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Masthead() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section ref={ref} className="relative min-h-screen bg-black overflow-hidden">
      {/* Backdrop — security dark teal w/ noise */}
      <motion.div className="absolute inset-0 z-0" style={{ y, opacity, scale }}>
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(120% 120% at 30% 0%, rgba(61,214,140,0.08) 0%, #0B0F17 55%, #000 100%)',
          }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.5, delay: 0.3 }}
        className="absolute top-1/2 left-0 lg:left-[5%] -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#3DD68C]/10 blur-[140px] z-[5] pointer-events-none"
      />

      <div
        className="absolute inset-0 z-10 opacity-[0.07] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.5'/></svg>\")",
        }}
      />

      <div className="absolute inset-0 z-[15] pointer-events-none hidden md:block">
        {['top-8 left-8', 'top-8 right-8', 'bottom-8 left-8', 'bottom-8 right-8'].map(
          (pos, i) => (
            <div key={i} className={`absolute ${pos} w-4 h-4`}>
              <div className="absolute inset-0 border-l border-t border-white/20" />
            </div>
          ),
        )}
      </div>

      <div className="container-custom relative z-20 min-h-screen flex flex-col justify-between pt-32 pb-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex justify-between items-start text-[10px] md:text-xs font-mono uppercase tracking-[0.3em] text-white/60"
        >
          <div className="flex items-center gap-3">
            <span className="w-6 h-[1px] bg-white/40" />
            <span>Case File · 15 · Cybersecurity DS</span>
          </div>
          <span className="text-right max-w-xs">
            Package
            <br />
            <span className="text-white/80">Open Source · Design System</span>
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="flex items-center gap-4 mb-6"
            >
              <motion.span
                className="inline-block w-10 h-[1px]"
                style={{ background: SENTINEL.accent, transformOrigin: 'left' }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.2, duration: 0.7 }}
              />
              <p
                className="text-xs font-mono uppercase tracking-[0.4em]"
                style={{ color: SENTINEL.accent }}
              >
                Case File
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="text-white leading-[0.88] tracking-[-0.04em] mb-8"
              style={{
                fontFamily: SERIF,
                fontSize: 'clamp(2.75rem, 8vw, 7rem)',
                fontWeight: 400,
              }}
            >
              <span className="block">Sentinel</span>
              <span
                className="block italic font-light"
                style={{ color: SENTINEL.accent }}
              >
                DS.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="text-xl md:text-2xl text-white/75 max-w-2xl leading-snug"
            >
              An open-source, enterprise-grade design system purpose-built for
              security operations. Tokens, components, and patterns tuned for SOC
              analysts working high-stakes, data-dense interfaces.
            </motion.p>
          </div>

          {/* Right — live preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.9 }}
            className="hidden lg:block"
          >
            <SentinelSystemCard />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-wrap items-end gap-x-8 gap-y-3 pt-6 border-t border-white/10"
        >
          {[
            { label: 'Components', value: '15+' },
            { label: 'Tokens', value: '80+' },
            { label: 'Themes', value: '2' },
            { label: 'A11y', value: 'AA' },
          ].map((s) => (
            <div key={s.label}>
              <div
                className="text-white leading-none mb-1"
                style={{
                  fontFamily: SERIF,
                  fontSize: 'clamp(1.25rem, 1.8vw, 1.6rem)',
                  fontWeight: 500,
                  fontVariantNumeric: 'tabular-nums',
                }}
              >
                {s.value}
              </div>
              <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/50">
                {s.label}
              </div>
            </div>
          ))}
          <a
            href={REPO}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto inline-flex items-center gap-2 text-xs md:text-sm font-medium text-white border-b border-white/30 hover:text-[#3DD68C] hover:border-[#3DD68C] transition-colors pb-1"
          >
            <Github className="w-3.5 h-3.5" /> Open repo on GitHub
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default function SentinelDSPage() {
  return (
    <>
      <Masthead />

      <ServiceMarquee
        phrases={[
          'React',
          'CSS Variables',
          'Dual Themes',
          'Severity Scale',
          'AA Accessibility',
          'Open Source',
          'Drop-in DS',
        ]}
      />

      {/* Mobile-only system card (since hero shows it inline on desktop) */}
      <section className="lg:hidden bg-black px-6 py-12 border-t border-white/10">
        <SentinelSystemCard />
      </section>

      {/* ============== CHAPTER 01 — THE CHALLENGE ============== */}
      <section className="relative py-24 md:py-32 px-6 lg:px-12 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <ChapterMarker number="01" label="The Challenge" />
          <div className="grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-20">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9 }}
              className="text-white leading-[1.0] tracking-[-0.03em]"
              style={{
                fontFamily: SERIF,
                fontSize: 'clamp(2rem, 4.5vw, 4rem)',
                fontWeight: 400,
              }}
            >
              Security UI is{' '}
              <em className="italic" style={{ color: SENTINEL.accent }}>
                still a mess.
              </em>
            </motion.h2>
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="text-lg md:text-xl text-white/75 leading-relaxed space-y-5"
              >
                <p>
                  Most SOC dashboards look like they were assembled by
                  whichever engineer was free that sprint. Inconsistent severity
                  colors. Unreadable typography under fluorescent lights. Modals
                  that don&apos;t dismiss on Escape because nobody had time.
                </p>
                <p>
                  Analysts are working at 3am with stakes attached to every
                  click. They deserve interfaces designed for that reality —
                  not generic Material clones.
                </p>
              </motion.div>
              <ul className="mt-8 space-y-2 border-t border-white/10 pt-6">
                {[
                  'No shared visual language across security tools',
                  'Severity colors invented per-team, often contradictory',
                  'Accessibility treated as an afterthought',
                  'Components rebuilt from scratch every project',
                ].map((b) => (
                  <li key={b} className="text-white/70 flex gap-3">
                    <span
                      className="font-mono mt-1.5 shrink-0"
                      style={{ color: SENTINEL.accent }}
                    >
                      —
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============== CHAPTER 02 — THE SOLUTION ============== */}
      <section className="relative py-24 md:py-32 px-6 lg:px-12 bg-[#0a0a0a] border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <ChapterMarker number="02" label="The Solution" />
          <div className="grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-20 mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9 }}
              className="text-white leading-[1.0] tracking-[-0.03em]"
              style={{
                fontFamily: SERIF,
                fontSize: 'clamp(2rem, 4.5vw, 4rem)',
                fontWeight: 400,
              }}
            >
              A drop-in{' '}
              <em className="italic" style={{ color: SENTINEL.accent }}>
                React system.
              </em>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-lg md:text-xl text-white/75 leading-relaxed space-y-5"
            >
              <p>
                Sentinel ships as a single self-contained React file (~1,000
                LOC) with CSS-variable theming. Drop it into any project, get a
                full security UI vocabulary on day one.
              </p>
              <p>
                Built from the analyst&apos;s perspective — every token, every
                interaction, every component decision answers the question:{' '}
                <em className="text-white">does this help me triage faster?</em>
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              {
                title: '5-Level Severity Scale',
                description:
                  'Critical / High / Medium / Low / Info — color, weight, and motion all carry meaning. Tested for color-blindness as part of the AA pass.',
              },
              {
                title: 'Dual Themes',
                description:
                  'Dark by default (SOC reality). Light variant for client-facing reports. Both share the same token system — no parallel design files.',
              },
              {
                title: '15+ Components',
                description:
                  'Buttons, alerts, severity indicators, data tables, KPI cards, sidebars, modals, progress bars. All keyboard-navigable, all ARIA-correct.',
              },
              {
                title: 'Accessibility built in',
                description:
                  'AA contrast everywhere. Focus indicators that survive at-glance. ESC closes overlays. Screen-reader announcements for live alerts.',
              },
            ].map((it, i) => (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="border border-white/10 p-6 md:p-8 bg-[#12151b]"
              >
                <div
                  className="font-mono text-xs tracking-[0.2em] mb-3"
                  style={{
                    color: `${SENTINEL.accent}cc`,
                    fontVariantNumeric: 'tabular-nums',
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3
                  className="text-white mb-3 leading-tight"
                  style={{
                    fontFamily: SERIF,
                    fontSize: 'clamp(1.25rem, 2vw, 1.75rem)',
                    fontWeight: 500,
                  }}
                >
                  {it.title}
                </h3>
                <p className="text-white/65 text-sm leading-relaxed">
                  {it.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 border-t border-white/10 pt-8">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 mr-2">
              — Stack
            </span>
            {['React', 'Vite', 'CSS Variables', 'Inter', 'JetBrains Mono'].map(
              (t) => (
                <span
                  key={t}
                  className="px-3 py-1 border border-white/15 text-white/70 text-xs font-mono"
                >
                  {t}
                </span>
              ),
            )}
          </div>
        </div>
      </section>

      {/* ============== CHAPTER 03 — IN CONTEXT ============== */}
      <section className="relative py-24 md:py-32 px-6 lg:px-12 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <ChapterMarker number="03" label="In Context" />
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9 }}
            className="text-white leading-[1.0] tracking-[-0.03em] mb-12 max-w-3xl"
            style={{
              fontFamily: SERIF,
              fontSize: 'clamp(2rem, 4.5vw, 4rem)',
              fontWeight: 400,
            }}
          >
            The system,{' '}
            <em className="italic" style={{ color: SENTINEL.accent }}>
              live.
            </em>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9 }}
          >
            <SentinelSystemCard />
          </motion.div>
          <p className="mt-6 text-[10px] font-mono uppercase tracking-[0.3em] text-white/40">
            — Severity scale, KPI cards, alert pattern, action buttons. Real
            tokens, rendered live.
          </p>
        </div>
      </section>

      {/* ============== CHAPTER 04 — RESULTS ============== */}
      <section className="relative py-24 md:py-32 px-6 lg:px-12 bg-[#0a0a0a] border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <ChapterMarker number="04" label="The Receipts" />
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9 }}
            className="text-white leading-[1.0] tracking-[-0.03em] mb-10 max-w-3xl"
            style={{
              fontFamily: SERIF,
              fontSize: 'clamp(2rem, 4.5vw, 4rem)',
              fontWeight: 400,
            }}
          >
            What{' '}
            <em className="italic" style={{ color: SENTINEL.accent }}>
              shipped.
            </em>
          </motion.h2>
          <StatsBar
            stats={[
              { value: '1,000', label: 'LOC' },
              { value: '15+', label: 'Components' },
              { value: '0', label: 'Dependencies' },
              { value: 'AA', label: 'Accessibility' },
            ]}
          />

          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9 }}
            className="mt-16 max-w-4xl border-l-2 pl-6 md:pl-10"
            style={{ borderColor: SENTINEL.accent }}
          >
            <p
              className="text-white/95 leading-[1.25] italic"
              style={{
                fontFamily: SERIF,
                fontSize: 'clamp(1.5rem, 2.6vw, 2.25rem)',
                fontWeight: 400,
              }}
            >
              &ldquo;Most design systems try to be everything to everyone.
              Sentinel picks one job — security UI — and does it ruthlessly
              well.&rdquo;
            </p>
            <footer
              className="mt-6 text-[10px] font-mono uppercase tracking-[0.3em]"
              style={{ color: SENTINEL.accent }}
            >
              — Marc Friedman · Author
            </footer>
          </motion.blockquote>
        </div>
      </section>

      {/* ============== NEXT CASE ============== */}
      <section className="relative py-20 md:py-24 px-6 lg:px-12 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <ChapterMarker number="Next" label="Another Case File" />
          <Link
            href="/work/case-studies/binns-media"
            className="group relative grid md:grid-cols-[1fr_1.4fr] gap-8 md:gap-12 items-center border border-white/10 hover:border-white/30 transition-colors overflow-hidden"
          >
            <div className="relative aspect-[4/3] md:aspect-auto md:h-full overflow-hidden bg-[#0f1116]">
              <img
                src="https://ik.imagekit.io/qcvroy8xpd/Mockup%204%20-%2016x9.png?updatedAt=1767538713061"
                alt="Binns Media Group"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-[900ms]"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(90deg, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.5) 100%)',
                }}
              />
            </div>
            <div className="p-8 md:p-12">
              <p
                className="text-xs font-mono uppercase tracking-[0.3em] mb-4"
                style={{ color: SENTINEL.accent }}
              >
                — Up next
              </p>
              <h3
                className="text-white leading-[1.0] tracking-[-0.03em] mb-6 transition-colors"
                style={{
                  fontFamily: SERIF,
                  fontSize: 'clamp(2rem, 5vw, 4rem)',
                  fontWeight: 500,
                }}
              >
                Binns Media Group
              </h3>
              <div className="inline-flex items-center gap-2 text-white font-medium border-b border-white/30 group-hover:border-white pb-1 transition-colors">
                Read the file
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ============== COLOPHON ============== */}
      <section className="relative bg-[#0a0a0a] py-24 md:py-32 px-6 lg:px-12 border-t border-white/10 overflow-hidden">
        <div
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] blur-[120px] rounded-full pointer-events-none"
          style={{ background: `${SENTINEL.accent}10` }}
        />
        <div className="max-w-7xl mx-auto relative">
          <ChapterMarker number="Colophon" label="Use it. Fork it. Ship it." />
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-white leading-[0.95] tracking-[-0.04em] mb-10 max-w-5xl"
            style={{
              fontFamily: SERIF,
              fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
              fontWeight: 400,
            }}
          >
            Need something{' '}
            <em className="italic" style={{ color: SENTINEL.accent }}>
              like this for your product?
            </em>
          </motion.h2>
          <p className="text-xl text-white/70 max-w-3xl leading-relaxed mb-12">
            Sentinel is open source. Use it, fork it, contribute. Or commission
            a private design system tuned to your product&apos;s reality.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <a
              href={REPO}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-black font-medium px-8 py-4 hover:bg-[#3DD68C] transition-colors group"
            >
              <Github className="w-4 h-4" />
              Open the Repo
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-white font-medium border border-white/20 hover:border-white/60 px-8 py-4 transition-colors"
            >
              <Mail className="w-4 h-4" />
              Commission a Custom DS
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
