"use client";

import CaseStudyLayout, { CaseStudyConfig } from '@/components/CaseStudyLayout';

const config: CaseStudyConfig = {
  kicker: 'Case File · 06 · AI Healthcare',
  pkg: 'Vision to MVP',
  title: 'iLight',
  italicWord: 'Care.',
  tagline: (
    <>
      Human + AI-powered mental health and resilience. I took a founder&apos;s
      vision and built the entire digital ecosystem — brand, website, MVP platform,
      and pitch deck — in under 6 weeks.
    </>
  ),
  heroImage:
    'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%201%20-%201x1(5).png?updatedAt=1767539579818',
  metaStats: [
    { value: '6wk', label: 'Vision → MVP' },
    { value: '4-in-1', label: 'Deliverables' },
    { value: 'AI', label: 'Healthcare' },
    { value: '2025', label: 'Launched' },
  ],
  liveUrl: 'https://www.ilight.care',

  marquee: [
    'React',
    'Node.js',
    'AI / LLM',
    'Healthcare UX',
    'Brand + Product',
    'MVP Package',
  ],

  challenge: {
    narrative: (
      <>
        <p>
          A founder with a clear vision for AI-assisted mental health but nothing
          visible — no brand, no site, no product, no pitch. The window to raise
          was closing and every week without an MVP was a week without signal.
        </p>
      </>
    ),
    bullets: [
      'No brand identity or visual system',
      'No marketing site to direct investors to',
      'MVP concept existed only in docs',
      'Pitch materials inconsistent across decks',
    ],
  },

  solution: {
    narrative: (
      <>
        <p>
          I acted as the interim CTO and product team. I took the project from
          messy notes to a fully clickable product and investor-ready presentation
          in under six weeks — brand, marketing site, SaaS MVP, and deck all
          shipped together.
        </p>
      </>
    ),
    items: [
      {
        title: 'Brand system',
        description:
          'Logo, typography, colour system, and voice — designed around trust, calm, and clinical credibility. Applied everywhere from pitch deck to product UI.',
      },
      {
        title: 'Marketing website',
        description:
          'The public-facing site that tells the story, captures leads, and gives investors something tangible to click through before the first call.',
      },
      {
        title: 'SaaS MVP platform',
        description:
          'React dashboard with secure auth, core AI flows, and clinician safety checks. Built to actually be used — not just demoed.',
      },
      {
        title: 'Pitch deck',
        description:
          'Investor-ready presentation that mirrors the brand and tells the product story with real screenshots, not placeholders.',
      },
    ],
    tech: ['React', 'Node.js', 'AI/LLM', 'PostgreSQL', 'Cloudflare'],
  },

  results: {
    stats: [
      { value: '6wk', label: 'Vision → MVP' },
      { value: '4-in-1', label: 'Deliverables' },
      { value: 'LLM', label: 'Grounded AI' },
      { value: 'Live', label: 'Production' },
    ],
  },

  gallery: [
    {
      image:
        'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%204%20-%2016x9(4).png?updatedAt=1767539579763',
      caption: 'Marketing site',
      wide: true,
    },
    {
      image:
        'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%201%20-%201x1(5).png?updatedAt=1767539579818',
      caption: 'Product surface',
    },
    {
      image:
        'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%203%20-%2016x9(5).png?updatedAt=1767539579921',
      caption: 'Dark theme',
    },
    {
      image:
        'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/download%20(60).png',
      caption: 'SaaS dashboard',
    },
    {
      image:
        'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/download%20(58).png',
      caption: 'Analytics view',
    },
  ],

  next: {
    title: 'Videoleap',
    url: '/work/case-studies/videoleap',
    image: 'https://i.imgur.com/SubVB9A.jpeg',
  },
};

export default function ILightPage() {
  return <CaseStudyLayout config={config} />;
}
