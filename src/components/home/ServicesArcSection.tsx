"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, Hammer, TrendingUp, Cpu, Wrench } from 'lucide-react';

const SERIF = "var(--font-heading)";

type ServiceGroup = {
  id: string;
  parent: string;
  icon: React.ComponentType<{ className?: string }>;
  blurb: string;
  href: string;
  services: { label: string; href: string }[];
};

/* Hick's-Law-friendly grouping: 11 disciplines collapsed into 4
   decision-bearing parent categories. Serial-position-ordered:
   highest-value (Build, Specialize) anchor positions 1 and 4 so
   primacy + recency carry the strongest groups; the lower-leverage
   Care group is buried in the middle. */
const groups: ServiceGroup[] = [
  {
    id: 'build',
    parent: 'Build',
    icon: Hammer,
    blurb:
      'Custom-coded sites, products, and MVPs — designed and shipped end-to-end.',
    href: '/services',
    services: [
      { label: 'Web Development', href: '/services/web-development' },
      { label: 'UI/UX Design', href: '/services/design' },
      { label: 'Design Systems', href: '/services/design-systems' },
      { label: 'Startup MVP', href: '/services/startup-mvp' },
    ],
  },
  {
    id: 'grow',
    parent: 'Grow',
    icon: TrendingUp,
    blurb:
      'Get found — by Google, by AI engines, and by the people searching for what you sell.',
    href: '/services',
    services: [
      { label: 'SEO Content & Layout', href: '/services/seo-content-layout' },
      { label: 'AEO (Answer Engines)', href: '/services/aeo' },
      { label: 'GEO (Generative Search)', href: '/services/geo' },
      { label: 'Local SEO', href: '/services/local-seo' },
    ],
  },
  {
    id: 'care',
    parent: 'Care',
    icon: Wrench,
    blurb:
      'Keep your site fast, secure, and online — by the same person who built it.',
    href: '/services',
    services: [
      { label: 'Maintenance & Hosting', href: '/services/maintenance-hosting' },
    ],
  },
  {
    id: 'specialize',
    parent: 'Specialize',
    icon: Cpu,
    blurb:
      'Production-grade AI features and security UX, built into the product — not bolted on after.',
    href: '/services',
    services: [
      { label: 'AI Integration', href: '/services/ai-integration' },
      { label: 'Cybersecurity UX', href: '/services/cybersecurity' },
    ],
  },
];

export default function ServicesArcSection() {
  return (
    <section className="relative bg-black border-t border-white/10 py-28 md:py-36 px-6 lg:px-12 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[700px] bg-[#A3D1FF]/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid md:grid-cols-[1.2fr_1fr] gap-8 md:gap-16 items-end mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9 }}
            className="text-white leading-[0.95] tracking-[-0.03em]"
            style={{
              fontFamily: SERIF,
              fontSize: 'clamp(2.75rem, 7vw, 6rem)',
              fontWeight: 400,
            }}
          >
            What I <em className="italic text-[#A3D1FF]">do.</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/60 text-lg leading-relaxed"
          >
            Four areas of focus. Each opens into the disciplines underneath.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {groups.map((g, i) => {
            const Icon = g.icon;
            return (
              <motion.div
                key={g.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group relative bg-[#0a0a0a] border border-white/10 hover:border-[#A3D1FF]/60 transition-colors p-8 md:p-10 flex flex-col"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 flex items-center justify-center border border-white/15 text-[#A3D1FF] group-hover:border-[#A3D1FF] transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <Link
                    href={g.href}
                    aria-label={`See all ${g.parent} services`}
                    className="text-white/40 hover:text-[#A3D1FF] transition-colors"
                  >
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>

                <h3
                  className="text-white leading-[1.0] mb-3"
                  style={{
                    fontFamily: SERIF,
                    fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                    fontWeight: 500,
                    letterSpacing: '-0.02em',
                  }}
                >
                  {g.parent}
                </h3>

                <p className="text-white/70 text-base leading-relaxed mb-6 max-w-md">
                  {g.blurb}
                </p>

                <ul className="mt-auto space-y-1 pt-4 border-t border-white/10">
                  {g.services.map((s) => (
                    <li key={s.href}>
                      <Link
                        href={s.href}
                        className="flex items-center justify-between py-2 text-sm text-white/70 hover:text-[#A3D1FF] transition-colors"
                      >
                        <span>{s.label}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-60 transition-opacity" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 md:mt-16 flex justify-end">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-white font-medium border-b border-white/30 hover:border-[#A3D1FF] hover:text-[#A3D1FF] transition-colors py-1"
          >
            See all 11 services in detail
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
