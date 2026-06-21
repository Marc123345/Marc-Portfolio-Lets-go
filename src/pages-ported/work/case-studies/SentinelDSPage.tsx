"use client";

import CaseStudyLayout, { CaseStudyConfig } from '@/components/CaseStudyLayout';

const config: CaseStudyConfig = {
  kicker: 'Case File · 15 · Cybersecurity DS',
  pkg: 'Open Source · Design System',
  title: 'Sentinel',
  italicWord: 'DS.',
  tagline: (
    <>
      An open-source, enterprise-grade design system purpose-built for security
      operations. Tokens, components, and patterns tuned for SOC analysts working
      high-stakes, data-dense interfaces.
    </>
  ),
  heroImage: 'https://ik.imagekit.io/qcvroy8xpd/image%201%20(10).png',
  metaStats: [
    { value: '15+', label: 'Components' },
    { value: '80+', label: 'Tokens' },
    { value: '2', label: 'Themes' },
    { value: 'AA', label: 'A11y' },
  ],

  marquee: [
    'React',
    'Vite',
    'CSS Variables',
    'Design Tokens',
    'Accessibility',
    'SOC UI',
    'Open Source',
  ],

  challenge: {
    narrative: (
      <>
        <p>
          Most SOC dashboards look like they were assembled by whichever engineer
          was free that sprint. Inconsistent severity colors. Unreadable typography
          under fluorescent lights. Modals that don&apos;t dismiss on Escape
          because nobody had time.
        </p>
        <p>
          Analysts are working at 3am with stakes attached to every click. They
          deserve interfaces designed for that reality, not generic Material
          clones.
        </p>
      </>
    ),
    bullets: [
      'No shared visual language across security tools',
      'Severity colors invented per-team, often contradictory',
      'Accessibility treated as an afterthought',
      'Components rebuilt from scratch every project',
    ],
  },

  solution: {
    narrative: (
      <>
        <p>
          Sentinel ships as a single self-contained React file (~1,000 LOC) with
          CSS-variable theming. Drop it into any project, get a full security UI
          vocabulary on day one.
        </p>
        <p>
          Built from the analyst&apos;s perspective, every token, every
          interaction, every component decision answers the question:{' '}
          <em className="text-white">does this help me triage faster?</em>
        </p>
      </>
    ),
    items: [
      {
        title: '5-Level Severity Scale',
        description:
          'Critical / High / Medium / Low / Info, color, weight, and motion all carry meaning. Tested for color-blindness as part of the AA pass.',
      },
      {
        title: 'Dual Themes',
        description:
          'Dark by default (SOC reality). Light variant for client-facing reports. Both share the same token system, no parallel design files.',
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
    ],
    tech: ['React', 'Vite', 'CSS Variables', 'Inter', 'JetBrains Mono'],
  },

  results: {
    stats: [
      { value: '1,000', label: 'LOC' },
      { value: '15+', label: 'Components' },
      { value: '0', label: 'Dependencies' },
      { value: 'AA', label: 'Accessibility' },
    ],
    testimonial: {
      quote:
        'Most design systems try to be everything to everyone. Sentinel picks one job, security UI, and does it ruthlessly well.',
      author: 'Marc Friedman',
      role: 'Author',
    },
  },

  gallery: [
    {
      image: 'https://ik.imagekit.io/qcvroy8xpd/image%201%20(10).png',
      caption: 'Sentinel DS, severity scale & SOC alert pattern',
      wide: true,
    },
  ],

  next: {
    title: 'Binns Media Group',
    url: '/work/case-studies/binns-media/',
    image:
      'https://ik.imagekit.io/qcvroy8xpd/Mockup%204%20-%2016x9.png?updatedAt=1767538713061',
  },
};

export default function SentinelDSPage() {
  return <CaseStudyLayout config={config} />;
}
