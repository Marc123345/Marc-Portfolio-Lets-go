"use client";

import CaseStudyLayout, { CaseStudyConfig } from '@/components/CaseStudyLayout';

const config: CaseStudyConfig = {
  kicker: 'Case File · 05 · SaaS Analytics',
  pkg: 'Enterprise SaaS',
  title: 'AutoMargin',
  italicWord: 'X.',
  tagline: (
    <>
      Real-time dealer analytics platform. Fragmented market data &rarr; unified
      live dashboards. Dealerships saw 35% faster decisions and higher margins.
    </>
  ),
  heroImage: 'https://i.imgur.com/PiKh199.png',
  metaStats: [
    { value: '35%', label: 'Faster Decisions' },
    { value: 'Live', label: 'Telemetry' },
    { value: 'RBAC', label: 'Auth' },
    { value: 'USA', label: 'Region' },
  ],

  marquee: [
    'React',
    'Node.js',
    'PostgreSQL',
    'Real-time',
    'Dashboards',
    'Analytics UX',
    'RBAC',
  ],

  challenge: {
    narrative: (
      <>
        <p>
          Dealerships were making million-dollar decisions on data that was already
          stale by the time it hit their inbox. Four reporting tools, three
          spreadsheets, zero single source of truth.
        </p>
        <p>
          They needed a dashboard that surfaced the right data in real time — and
          didn&apos;t require a BI analyst to read.
        </p>
      </>
    ),
    bullets: [
      'Fragmented market data across 4+ tools',
      'Reports stale before decisions could be made',
      'No role-based access for team hierarchies',
      'Dashboards demanded technical literacy to parse',
    ],
  },

  solution: {
    narrative: (
      <>
        <p>
          I built a real-time data platform with intuitive visualisations and
          AI-powered pricing recommendations. One screen, one number, one clear
          next action — for every role in the dealership.
        </p>
      </>
    ),
    items: [
      {
        title: 'Real-time dashboard',
        description:
          'Live telemetry feeds into a React dashboard that updates without refresh. Built for glanceability, not data hoarding.',
      },
      {
        title: 'Role-based views',
        description:
          'Sales, ops, finance, and leadership each see the slice of the data relevant to them — with proper RBAC enforced at the API.',
      },
      {
        title: 'AI-powered recommendations',
        description:
          'Dynamic pricing suggestions based on market comparables, inventory aging, and demand curves. Confidence scored.',
      },
      {
        title: 'Built-in auditability',
        description:
          'Every pricing decision and data change logged. When auditors ask, the trail is there without scrambling.',
      },
    ],
    tech: ['React', 'Node.js', 'PostgreSQL', 'Chart.js', 'WebSockets'],
  },

  results: {
    stats: [
      { value: '35%', label: 'Faster Decisions' },
      { value: 'Live', label: 'Telemetry' },
      { value: 'RBAC', label: 'Auth' },
      { value: '4→1', label: 'Tools Consolidated' },
    ],
    testimonial: {
      quote:
        'The design system Marc created transformed our development process and ensured consistency across all our products.',
      author: 'VP Product',
      role: 'MarginX.ai',
    },
  },

  gallery: [
    {
      image: 'https://i.imgur.com/PiKh199.png',
      caption: 'Dealer dashboard',
      wide: true,
    },
  ],

  next: {
    title: 'Fleet Management',
    url: '/work/case-studies/fleet-management',
    image: 'https://i.imgur.com/EwgHAuK.png',
  },
};

export default function AutoMarginPage() {
  return <CaseStudyLayout config={config} />;
}
