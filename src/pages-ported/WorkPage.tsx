"use client";

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import WorkByService from '@/components/WorkByService';
import RoofingSites from '@/components/RoofingSites';
import { WorksHero, ProjectGrid } from '@/components/WorksShowcase';
import { WORK_SERVICES } from '@/data/workByService';
import { PROJECTS as projects } from '@/data/projects';

const workSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Portfolio, Marc Friedman',
  description:
    'Real projects. Real results. No templates, no WordPress, no shortcuts.',
  url: 'https://www.marcfriedmanportfolio.com/work',
};

export default function WorkPage() {
  const [filter, setFilter] = useState('all');

  // deep links: /work/#ai, /work/#seo …
  useEffect(() => {
    const k = window.location.hash.replace('#', '');
    if (WORK_SERVICES.some((s) => s.key === k)) setFilter(k); // eslint-disable-line react-hooks/set-state-in-effect
  }, []);

  const list = useMemo(() => {
    const g = WORK_SERVICES.find((s) => s.key === filter);
    return g ? projects.filter((p) => g.projects.includes(p.title)) : projects;
  }, [filter]);
  const group = WORK_SERVICES.find((s) => s.key === filter);

  const pickFilter = (k: string) => {
    setFilter(k);
    window.history.replaceState(null, '', k === 'all' ? window.location.pathname : `#${k}`);
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(workSchema) }}
      />

      {/* ===================== MASTHEAD (FlyStudio works hero) ===================== */}
      <WorksHero
        kicker={`Portfolio · ${projects.length} case files`}
        title="Real projects."
        accent="Real results."
        intro="No templates, no WordPress, no shortcuts. Every project below links to the full case file."
        stripLeft="Selected work · 2023–2026"
        primary={{ href: '/contact/', label: 'Start a project' }}
        secondary={{ href: '/work/case-studies/', label: 'Case studies' }}
      />

      {/* ===================== PROJECT GRID ===================== */}
      <section className="relative bg-black px-6 lg:px-12 pt-10 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto relative">
          {/* service filter */}
          <div className="-mx-6 px-6 lg:mx-0 lg:px-0 mb-10 overflow-x-auto [scrollbar-width:none]">
            <div role="tablist" aria-label="Filter work by service" className="flex gap-2 w-max lg:w-auto lg:flex-wrap">
              {[{ key: 'all', label: 'All work', n: projects.length }, ...WORK_SERVICES.map((s) => ({ key: s.key, label: s.label, n: s.projects.length }))].map((t) => {
                const on = t.key === filter;
                return (
                  <button
                    key={t.key}
                    type="button"
                    role="tab"
                    aria-selected={on}
                    onClick={() => pickFilter(t.key)}
                    className={`shrink-0 inline-flex items-center gap-2 rounded-full px-4 py-2 text-[11px] font-mono uppercase tracking-[0.15em] transition-colors ${
                      on ? 'bg-[#A3D1FF] text-black' : 'bg-[#141414] text-white/65 hover:bg-[#1f1f1f] hover:text-white'
                    }`}
                  >
                    {t.label}
                    <span className={on ? 'text-black/55' : 'text-white/30'} style={{ fontVariantNumeric: 'tabular-nums' }}>
                      {String(t.n).padStart(2, '0')}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
          {group && (
            <div className="flex flex-wrap items-baseline justify-between gap-4 mb-10 -mt-4">
              <p className="text-white/60 max-w-xl">{group.blurb}</p>
              <Link href={group.href} className="text-sm text-white/80 hover:text-[#A3D1FF] border-b border-white/25 hover:border-[#A3D1FF] pb-0.5 transition-colors inline-flex items-center gap-1.5">
                About {group.label} <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          )}

          <div key={filter}>
            <ProjectGrid projects={list} />
          </div>
        </div>
      </section>

      <WorkByService projects={projects} />

      <RoofingSites />
    </>
  );
}
