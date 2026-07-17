import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: { absolute: 'Free Tools & Resources for Web Projects | Marc Friedman' },
  description:
    'Free tools: instant website analyzer, website ROI calculator, project timeline visualizer, and free B2B website guides and checklists.',
  alternates: { canonical: 'https://www.marcfriedmanportfolio.com/tools/' },
  openGraph: {
    title: 'Free Tools & Resources for Web Projects | Marc Friedman',
    description:
      'Free tools: website analyzer, ROI calculator, project timeline, and free B2B website guides.',
    url: 'https://www.marcfriedmanportfolio.com/tools/',
    type: 'website',
  },
};

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

const TOOLS = [
  {
    href: '/tools/website-analyzer',
    title: 'Website Analyzer',
    desc: 'Instant Lighthouse audit of any URL, performance, accessibility, SEO, and Core Web Vitals. Powered by Google PageSpeed Insights.',
    tag: 'Live audit',
  },
  {
    href: '/tools/roi-calculator',
    title: 'Website ROI Calculator',
    desc: 'Model the return on a redesign, see how traffic, conversion rate, and order value translate into real revenue.',
    tag: 'Calculator',
  },
  {
    href: '/tools/project-timeline',
    title: 'Project Timeline',
    desc: 'Visualize a realistic timeline and phases for your web design and development project.',
    tag: 'Planner',
  },
  {
    href: '/resources',
    title: 'Free Guides & Checklists',
    desc: 'B2B Website Mastery, the B2B Website Checklist, and the Landing Page Lead Magnet. Free PDFs, delivered to your inbox.',
    tag: 'Free guides',
  },
];

export default function ToolsHubPage() {
  return (
    <main className="bg-black">
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
          <ChapterMarker number="Tools · Vol. 01" label="Free · No sign-up" />

          <h1
            className="text-white leading-[0.9] tracking-[-0.04em] mb-8 max-w-5xl"
            style={{
              fontFamily: SERIF,
              fontSize: 'clamp(2.75rem, 7.5vw, 6.5rem)',
              fontWeight: 400,
            }}
          >
            Free <em className="italic text-[#A3D1FF]">tools.</em>
          </h1>

          <p className="text-xl md:text-2xl text-white/70 max-w-2xl leading-snug">
            A small suite of tools I built to plan, measure, and improve a website. No
            sign-up required, use them as much as you like.
          </p>
        </div>
      </section>

      {/* ===================== THE SUITE ===================== */}
      <section className="relative bg-[#0a0a0a] py-24 md:py-28 px-6 lg:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <ChapterMarker number="01" label="The suite" />

          <div className="border-t border-white/10">
            {TOOLS.map(({ href, title, desc, tag }) => (
              <Link key={href} href={href} className="group block border-b border-white/10">
                <div className="flex items-start justify-between gap-8 py-8 md:py-10">
                  <div className="max-w-2xl">
                    <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 mb-3">
                      {tag}
                    </p>
                    <h2
                      className="text-white leading-[1.15] tracking-tight group-hover:text-[#A3D1FF] transition-colors duration-300 mb-3"
                      style={{
                        fontFamily: SERIF,
                        fontSize: 'clamp(1.5rem, 2.5vw, 2.15rem)',
                        fontWeight: 500,
                      }}
                    >
                      {title}
                    </h2>
                    <p className="text-white/60 leading-relaxed text-sm">{desc}</p>
                  </div>

                  <ArrowUpRight className="w-5 h-5 shrink-0 mt-1 text-white/40 group-hover:text-[#A3D1FF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
