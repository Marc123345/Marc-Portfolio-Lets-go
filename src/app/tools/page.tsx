import type { Metadata } from 'next';
import Link from 'next/link';
import { Gauge, Calculator, CalendarClock, FileDown, ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: { absolute: 'Free Tools & Resources for Web Projects | Marc Friedman' },
  description:
    'Free tools: instant website analyzer, website ROI calculator, AI crawler optimization checker, project timeline visualizer, and a landing page guide.',
  alternates: { canonical: 'https://www.marcfriedmanportfolio.com/tools/' },
  openGraph: {
    title: 'Free Tools & Resources for Web Projects | Marc Friedman',
    description:
      'Free tools: website analyzer, ROI calculator, AI crawler checker, project timeline, and a landing page guide.',
    url: 'https://www.marcfriedmanportfolio.com/tools/',
    type: 'website',
  },
};

const TOOLS = [
  {
    href: '/tools/website-analyzer',
    icon: Gauge,
    title: 'Website Analyzer',
    desc: 'Instant Lighthouse audit of any URL, performance, accessibility, SEO, and Core Web Vitals. Powered by Google PageSpeed Insights.',
    tag: 'Live audit',
  },
  {
    href: '/tools/roi-calculator',
    icon: Calculator,
    title: 'Website ROI Calculator',
    desc: 'Model the return on a redesign, see how traffic, conversion rate, and order value translate into real revenue.',
    tag: 'Calculator',
  },
  {
    href: '/tools/project-timeline',
    icon: CalendarClock,
    title: 'Project Timeline',
    desc: 'Visualize a realistic timeline and phases for your web design and development project.',
    tag: 'Planner',
  },
  {
    href: '/resources',
    icon: FileDown,
    title: 'The Landing Page Lead Magnet',
    desc: 'Free PDF guide to building landing pages that turn visitors into leads. Delivered straight to your inbox.',
    tag: 'Free guide',
  },
];

export default function ToolsHubPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-6xl px-6 pt-28 pb-24 md:pt-36">
        <p className="mb-6 font-mono text-xs uppercase tracking-[0.32em] text-[#A3D1FF]">
          Free Tools &amp; Resources
        </p>
        <h1 className="text-4xl md:text-5xl font-semibold leading-[1.05] tracking-tight max-w-2xl">
          Tools to plan, measure, and <span className="text-[#A3D1FF]">improve</span> your website.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
          A small suite of free tools I built. No sign-up required, use them as much as you like.
        </p>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TOOLS.map(({ href, icon: Icon, title, desc, tag }) => (
            <Link
              key={href}
              href={href}
              className="group relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-[#A3D1FF]/40 hover:bg-white/[0.05] transition-colors"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-[#A3D1FF]/10 border border-[#A3D1FF]/20">
                  <Icon className="w-5 h-5 text-[#A3D1FF]" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40">{tag}</span>
              </div>
              <h2 className="text-xl font-semibold mb-2 flex items-center gap-1.5">
                {title}
                <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-[#A3D1FF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </h2>
              <p className="text-sm leading-relaxed text-white/60">{desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
