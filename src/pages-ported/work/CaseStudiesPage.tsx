"use client";

import React from 'react';
import { WorksHero, ProjectGrid } from '@/components/WorksShowcase';
import { PROJECTS } from '@/data/projects';

/* FlyStudio works.html layout: centred masthead, then the 2 + 3 project grid. */
export default function CaseStudiesPage() {
  return (
    <>
      <WorksHero
        kicker="Case studies"
        title="Where the work"
        accent="gets explained."
        intro="The brief, what I built, and what changed afterwards, one file per client."
        stripLeft={`${PROJECTS.length} case files`}
        primary={{ href: '/contact/', label: 'Start a project' }}
        secondary={{ href: '/work/', label: 'All work' }}
      />
      <section className="relative bg-black px-6 lg:px-12 pt-12 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto">
          <ProjectGrid projects={PROJECTS} />
        </div>
      </section>
    </>
  );
}
