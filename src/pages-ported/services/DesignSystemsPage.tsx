"use client";

import React from 'react';
import {
  ArrowRight,
  Layers,
  Code,
  Palette,
  Zap,
  Users,
  CircleCheck as CheckCircle2,
  ExternalLink,
  ShieldAlert,
  Truck,
  Github,
} from 'lucide-react';
import ServiceLeadForm from '@/components/ServiceLeadForm';
import { ServiceNavigator } from '@/components/ServiceEditorial';
import { useRouter } from 'next/navigation';

function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: any;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-[#1b1b1b] p-8 border border-white/10 hover:border-[#A3D1FF] transition-all group">
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-[#A3D1FF]/20 blur-xl rounded-full"></div>
        <div className="bg-[#A3D1FF]/10 p-4 relative">
          <Icon className="w-8 h-8 text-[#A3D1FF] group-hover:scale-110 transition-transform" />
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-white">{description}</p>
    </div>
  );
}

function ProcessStep({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-[#1b1b1b] p-8 border border-white/10 h-full">
      <div className="text-6xl font-black text-[#A3D1FF]/20 mb-4 leading-none">{number}</div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
}

// ---------- Sentinel DS (Cybersecurity) visual ----------
const SENTINEL = {
  name: 'Sentinel DS',
  bg: '#0B0F17',
  surface: '#121826',
  accent: '#3DD68C',
  warn: '#F5B14A',
  critical: '#EF4444',
  info: '#3B82F6',
  muted: '#64748B',
};

function SentinelSystemCard() {
  return (
    <div
      className="border border-white/10 overflow-hidden"
      style={{ background: SENTINEL.bg }}
    >
      {/* Header */}
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
          href="https://github.com/Marc123345/Cyber-Security-Design-System"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-xs font-mono text-white/60 hover:text-white transition-colors border border-white/10 px-3 py-1.5 rounded-full"
        >
          <Github className="w-3.5 h-3.5" /> View repo
        </a>
      </div>

      {/* Tokens */}
      <div className="p-6 grid md:grid-cols-2 gap-6">
        {/* Severity scale */}
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
                <div
                  className="h-1 w-24 rounded-full"
                  style={{ background: `${s.color}20` }}
                >
                  <div
                    className="h-full rounded-full"
                    style={{ background: s.color, width: `${s.dot}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Components preview */}
        <div>
          <p className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-3">
            Live Components
          </p>

          {/* Alert */}
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

          {/* KPI cards */}
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

          {/* Buttons */}
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

      {/* Footer stats */}
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

// ---------- Fleet Ops DS (Fleet Management) visual ----------
const FLEET = {
  bg: '#0F1419',
  surface: '#1A2028',
  primary: '#FF6B35',
  accent: '#00D4FF',
  green: '#22C55E',
  yellow: '#FACC15',
};

function FleetSystemCard() {
  return (
    <div
      className="border border-white/10 overflow-hidden"
      style={{ background: FLEET.bg }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 flex items-center justify-center"
            style={{ background: `${FLEET.primary}15` }}
          >
            <Truck className="w-5 h-5" style={{ color: FLEET.primary }} />
          </div>
          <div>
            <div className="text-white font-semibold tracking-tight">Fleet Ops DS</div>
            <div className="text-xs text-white/50">
              Logistics &amp; Real-Time Telemetry System
            </div>
          </div>
        </div>
        <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">
          v 1.2.0
        </span>
      </div>

      <div className="p-6 grid md:grid-cols-2 gap-6">
        {/* Palette + Typography */}
        <div>
          <p className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-3">
            Color Tokens
          </p>
          <div className="grid grid-cols-5 gap-2 mb-6">
            {[
              { name: 'primary', c: FLEET.primary },
              { name: 'accent', c: FLEET.accent },
              { name: 'ok', c: FLEET.green },
              { name: 'warn', c: FLEET.yellow },
              { name: 'surface', c: FLEET.surface },
            ].map((t) => (
              <div key={t.name} className="text-center">
                <div
                  className="aspect-square mb-1.5 border border-white/5"
                  style={{ background: t.c }}
                />
                <div className="text-[9px] font-mono text-white/50 uppercase tracking-wider">
                  {t.name}
                </div>
              </div>
            ))}
          </div>

          <p className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-3">
            Typography
          </p>
          <div className="space-y-2">
            <div>
              <div className="text-white text-2xl font-bold tracking-tight leading-none">
                Aa
              </div>
              <div className="text-[10px] text-white/40 font-mono">Inter · Heading</div>
            </div>
            <div>
              <div className="text-white text-lg font-mono leading-none">12.7°C</div>
              <div className="text-[10px] text-white/40 font-mono">
                JetBrains Mono · Data
              </div>
            </div>
          </div>
        </div>

        {/* Live dashboard snippet */}
        <div>
          <p className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-3">
            Components in Context
          </p>

          {/* Vehicle row */}
          <div
            className="p-3 mb-2 flex items-center justify-between"
            style={{ background: FLEET.surface }}
          >
            <div className="flex items-center gap-3">
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: FLEET.green }}
              />
              <div>
                <div className="text-white text-sm font-semibold">FL-204</div>
                <div className="text-[10px] text-white/50 font-mono">
                  Johannesburg → Durban
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-white text-sm font-mono">68 km/h</div>
              <div
                className="text-[10px] font-mono"
                style={{ color: FLEET.green }}
              >
                ON ROUTE
              </div>
            </div>
          </div>

          <div
            className="p-3 mb-2 flex items-center justify-between"
            style={{ background: FLEET.surface }}
          >
            <div className="flex items-center gap-3">
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: FLEET.yellow }}
              />
              <div>
                <div className="text-white text-sm font-semibold">FL-117</div>
                <div className="text-[10px] text-white/50 font-mono">
                  Idle — Depot 3
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-white text-sm font-mono">0 km/h</div>
              <div
                className="text-[10px] font-mono"
                style={{ color: FLEET.yellow }}
              >
                IDLE 12m
              </div>
            </div>
          </div>

          <div
            className="p-3 flex items-center justify-between"
            style={{ background: FLEET.surface }}
          >
            <div className="flex items-center gap-3">
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: FLEET.primary }}
              />
              <div>
                <div className="text-white text-sm font-semibold">FL-032</div>
                <div className="text-[10px] text-white/50 font-mono">
                  Engine warn · DTC P0420
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-white text-sm font-mono">—</div>
              <div
                className="text-[10px] font-mono"
                style={{ color: FLEET.primary }}
              >
                ATTENTION
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="border-t border-white/5 px-6 py-4 grid grid-cols-4 gap-4"
        style={{ background: FLEET.surface }}
      >
        {[
          { label: 'Components', value: '22' },
          { label: 'Data Cards', value: '9' },
          { label: 'Map Layers', value: '4' },
          { label: 'Uptime', value: '99.9%' },
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

export default function DesignSystemsPage() {
  const router = useRouter();

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-[#A3D1FF] mb-6">
              Design Systems · Case Studies · Process
            </p>
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
              Design systems that <span className="text-[#A3D1FF]">ship</span>.
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Tokens, components, documentation, and the opinionated rules that keep a
              product consistent across 50+ screens. Below: two production systems I
              designed and built from scratch.
            </p>
            <button
              onClick={() => router.push('/contact')}
              className="mr_btn mr_btn_primary group relative overflow-hidden"
            >
              <span className="relative z-10">Start Your Design System</span>
              <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              <ArrowRight className="ml-2 w-5 h-5 relative z-10 group-hover:rotate-45 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>

      {/* ================== SENTINEL DS CASE STUDY ================== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#3DD68C] mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3DD68C]" /> Case Study
                01
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
                Sentinel DS — Built for Security Operations Centers
              </h2>
              <p className="text-lg text-white/80 mb-6 leading-relaxed">
                An enterprise-grade design system for threat detection and incident
                response interfaces. Purpose-built for SOC analysts working
                high-stakes, data-dense dashboards where clarity and speed are
                non-negotiable.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  '5-level severity scale for alert prioritization',
                  'Dual themes + 4px spacing grid + motion system',
                  '15+ components (alerts, tables, KPI cards, modals, sidebars)',
                  'Self-contained React drop-in (~1,000 LOC)',
                  'ARIA roles, keyboard nav, focus indicators — AA out of the box',
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-white/80">
                    <CheckCircle2 className="w-5 h-5 text-[#3DD68C] mt-0.5 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mb-8">
                {['React', 'Vite', 'CSS Variables', 'Inter', 'JetBrains Mono'].map(
                  (t) => (
                    <span
                      key={t}
                      className="px-3 py-1 border border-white/10 text-white/70 rounded-full text-xs font-mono"
                    >
                      {t}
                    </span>
                  ),
                )}
              </div>
              <a
                href="https://github.com/Marc123345/Cyber-Security-Design-System"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white font-medium hover:text-[#A3D1FF] transition-colors"
              >
                <Github className="w-4 h-4" />
                View on GitHub
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            <SentinelSystemCard />
          </div>
        </div>
      </section>

      {/* ================== FLEET OPS DS CASE STUDY ================== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <FleetSystemCard />
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#FF6B35] mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35]" /> Case Study
                02
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
                Fleet Ops DS — Real-time Logistics at Scale
              </h2>
              <p className="text-lg text-white/80 mb-6 leading-relaxed">
                A design system for a fleet management platform tracking hundreds of
                vehicles across live telemetry streams. Built to surface anomalies
                fast without overwhelming dispatchers staring at 20+ feeds at once.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Status-driven color system (on-route / idle / attention)',
                  '22 components tuned for dense data tables and live maps',
                  'Monospace typography for telemetry (speed, fuel, DTC codes)',
                  'Map layer tokens: routes, geofences, heatmaps, vehicles',
                  'Tested against 500+ concurrent vehicle updates',
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-white/80">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6B35] mt-0.5 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mb-8">
                {['React', 'Next.js', 'Mapbox GL', 'Tailwind', 'WebSockets'].map(
                  (t) => (
                    <span
                      key={t}
                      className="px-3 py-1 border border-white/10 text-white/70 rounded-full text-xs font-mono"
                    >
                      {t}
                    </span>
                  ),
                )}
              </div>
              <a
                href="/work/case-studies/fleet-management"
                className="inline-flex items-center gap-2 text-white font-medium hover:text-[#A3D1FF] transition-colors"
              >
                Read full case study
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================== PROCESS ================== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-[#A3D1FF] mb-4">
              My Process
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
              From chaos to consistency in 6 weeks.
            </h2>
            <p className="text-lg text-white/70">
              Every design system I build follows the same pragmatic path — audit the
              mess, define the rules, ship the components, document the decisions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ProcessStep
              number="01"
              title="Audit"
              description="Every button, color, and spacing in the current product. I catalogue the inconsistencies so everyone sees the problem."
            />
            <ProcessStep
              number="02"
              title="Tokens"
              description="Color, type, spacing, elevation, motion. Defined once in CSS variables so design and code stay in sync."
            />
            <ProcessStep
              number="03"
              title="Components"
              description="Built in React with variants, states, and accessibility baked in. Storybook or live playground for every one."
            />
            <ProcessStep
              number="04"
              title="Documentation"
              description="Usage, do's and don'ts, code snippets. Good systems fail without good docs — I write them as I build."
            />
          </div>
        </div>
      </section>

      {/* ================== WHY ================== */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 tracking-tight">
            What a good design system actually does
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={Layers}
              title="Component Libraries"
              description="Reusable React components with every state, variant, and a11y requirement solved once — then never again."
            />
            <FeatureCard
              icon={Code}
              title="Design Tokens"
              description="Colors, type, spacing, motion. Defined as CSS variables so a brand update is one file, not 200."
            />
            <FeatureCard
              icon={Palette}
              title="Visual Language"
              description="The opinions that make a product feel like itself — documented so new hires don't reinvent them."
            />
            <FeatureCard
              icon={Zap}
              title="40% Faster Builds"
              description="New screens in hours, not days. Stop rebuilding the same button for the eighth time."
            />
            <FeatureCard
              icon={Users}
              title="Designer ↔ Developer Sync"
              description="One shared language between Figma and code. Handoffs stop being a source of bugs."
            />
            <FeatureCard
              icon={CheckCircle2}
              title="Quality by Default"
              description="Accessibility, performance, and consistency become properties of the system — not heroics from each team."
            />
          </div>
        </div>
      </section>

      <ServiceNavigator currentSlug="design-systems" />

      {/* Lead Form Section */}
      <section id="contact-form" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <ServiceLeadForm
            service="Design Systems"
            benefits={[
              '40% faster development cycles',
              'Consistent brand experience',
              'Reduced design debt',
              'Improved team collaboration',
              'Scalable component architecture',
            ]}
            testimonial={{
              quote:
                'The design system Marc created transformed our development process and ensured consistency across all our products.',
              author: 'VP Product',
              role: 'WebAI | VP Product at MarginX.ai',
            }}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
            Ready to stop rebuilding the same button?
          </h2>
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            Let&apos;s build the design system your team has been asking for.
          </p>
          <button
            onClick={() => router.push('/contact')}
            className="mr_btn mr_btn_primary group relative overflow-hidden"
          >
            <span className="relative z-10">Start Your Project</span>
            <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            <ArrowRight className="ml-2 w-5 h-5 relative z-10 group-hover:rotate-45 transition-transform duration-300" />
          </button>
        </div>
      </section>
    </>
  );
}
