"use client";

import CaseStudyLayout, { CaseStudyConfig } from '@/components/CaseStudyLayout';

const config: CaseStudyConfig = {
  kicker: 'Case File · 07 · Research / Consultancy',
  pkg: 'Enterprise Flagship',
  title: 'Ask',
  italicWord: 'Africa.',
  tagline: (
    <>
      A commanding digital presence for one of Africa&apos;s leading research and
      consultancy firms. Built to reflect decades of expertise and continental reach
      — without sacrificing accessibility.
    </>
  ),
  heroImage: 'https://ik.imagekit.io/qcvroy8xpd/image%202%20(1).png',
  metaStats: [
    { value: 'Pan', label: 'African Reach' },
    { value: 'Enterprise', label: 'Positioning' },
    { value: '<2s', label: 'Load' },
    { value: 'ZA', label: 'HQ' },
  ],
  liveUrl: 'https://askafrica.co.za/',

  marquee: [
    'React',
    'Tailwind',
    'Framer Motion',
    'Vite',
    'Authority UX',
    'Enterprise-ready',
  ],

  challenge: {
    narrative: (
      <>
        <p>
          Ask Africa is a premier research and consultancy firm operating across the
          continent. With decades of expertise in market research, brand tracking,
          and strategic consulting, they needed a site that reflected the weight of
          that track record.
        </p>
        <p>
          The old site didn&apos;t convey authority and was impossible to navigate
          for enterprise partners looking for specific research verticals.
        </p>
      </>
    ),
    bullets: [
      'Brand read like a regional vendor, not a continental leader',
      'Research verticals buried under generic navigation',
      'No clear path for enterprise partners to engage',
      'Mobile experience incomplete',
    ],
  },

  solution: {
    narrative: (
      <>
        <p>
          I built a commanding, authority-driven platform that positions Ask Africa
          as the go-to research partner for the continent. Content architecture
          tuned for enterprise decision-makers. Design language that says
          &ldquo;decades of experience&rdquo; without shouting it.
        </p>
      </>
    ),
    items: [
      {
        title: 'Content architecture',
        description:
          'Structured information hierarchy that makes decades of research expertise easy to explore — by industry, by country, by methodology.',
      },
      {
        title: 'Continental focus',
        description:
          "Design elements and content strategy that reflect Ask Africa&apos;s pan-African reach without relying on cliché.",
      },
      {
        title: 'Trust building',
        description:
          'Visual design and content flow that establishes immediate credibility with enterprise clients looking for rigour.',
      },
      {
        title: 'Performance-first',
        description:
          'Optimised for all devices and connection speeds — especially important for the markets Ask Africa actually serves.',
      },
    ],
    tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
  },

  results: {
    stats: [
      { value: 'Pan', label: 'African Reach' },
      { value: '100%', label: 'Custom Build' },
      { value: 'Enterprise', label: 'Ready' },
      { value: 'AA', label: 'Accessibility' },
    ],
  },

  gallery: [
    {
      image: 'https://ik.imagekit.io/qcvroy8xpd/image%202%20(1).png',
      caption: 'Homepage flagship',
      wide: true,
    },
  ],

  next: {
    title: 'Friedman & Cohen',
    url: '/work/case-studies/friedman-cohen',
    image:
      'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%201%20-%201x1(3).png?updatedAt=1767539579776',
  },
};

export default function AskAfricaPage() {
  return <CaseStudyLayout config={config} />;
}
