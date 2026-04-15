"use client";

import CaseStudyLayout, { CaseStudyConfig } from '@/components/CaseStudyLayout';

const config: CaseStudyConfig = {
  kicker: 'Case File · 01 · Media Platform',
  pkg: 'Flagship · 18-mo retainer',
  title: 'Binns Media',
  italicWord: 'Group.',
  tagline: (
    <>
      From &ldquo;production house&rdquo; to streaming-grade media ecosystem for
      authentic voices in comedy, audio, and storytelling out of Atlanta.
    </>
  ),
  heroImage:
    'https://ik.imagekit.io/qcvroy8xpd/Mockup%204%20-%2016x9.png?updatedAt=1767538713061',
  metaStats: [
    { value: '5.0', label: 'Clutch Score' },
    { value: '18mo', label: 'Retainer' },
    { value: '98', label: 'Lighthouse' },
    { value: 'Atlanta', label: 'HQ' },
  ],
  liveUrl: 'https://www.binnsmediagroup.com/',

  marquee: [
    'React 18',
    'TypeScript',
    'Postgres',
    'GSAP',
    'Netflix-style UX',
    'Flagship Build',
  ],

  challenge: {
    narrative: (
      <>
        <p>
          Binns Media Group (BMG) develops culture-shaping content — podcasts, audio
          albums, comedy, serialised storytelling. Their old presence read like a
          single-production site. It couldn&apos;t contain the ecosystem they were
          building.
        </p>
        <p>
          They needed a platform that handled video, audio, editorial, and subscriber
          experiences — and still loaded fast under heavy media.
        </p>
      </>
    ),
    bullets: [
      'Content scattered across disconnected pages',
      'No scalable subscriber or audience model',
      'Site performance collapsed under media weight',
      'Brand read like a vendor, not a media company',
    ],
  },

  solution: {
    narrative: (
      <>
        <p>
          I re-engineered BMG&apos;s digital home as a scalable, Netflix-style
          streaming platform. Editorial + audio + video + subscriber flows under one
          system, one design language, one performance budget.
        </p>
      </>
    ),
    items: [
      {
        title: 'Streaming-grade catalog',
        description:
          'Custom React + TypeScript architecture tuned for heavy media, with lazy-loaded shelves, smart prefetch, and a unified content model.',
      },
      {
        title: 'Editorial + audio + video',
        description:
          'One CMS powering three content surfaces — articles, podcasts, and shows — without forcing them into the same template.',
      },
      {
        title: 'Subscriber system',
        description:
          'Authentication, roles, premium content gating, all wired to a Postgres backend that can grow with the audience.',
      },
      {
        title: 'Performance as brand',
        description:
          'Core Web Vitals in the 90s even with heavy video thumbnails. Subscribers stay because nothing stalls.',
      },
    ],
    tech: ['React 18', 'TypeScript', 'Postgres', 'GSAP', 'Cloudflare'],
  },

  results: {
    stats: [
      { value: '98', label: 'Lighthouse' },
      { value: '4x', label: 'Engagement' },
      { value: '18mo', label: 'On Retainer' },
      { value: '5.0', label: 'Clutch Score' },
    ],
    testimonial: {
      quote:
        'Marc was able to execute the vision perfectly. He dedicates his time to the client, ensuring the client is completely satisfied at each step of the process.',
      author: 'Omar Turner',
      role: 'CEO, Binns Media Group',
    },
  },

  gallery: [
    {
      image:
        'https://ik.imagekit.io/qcvroy8xpd/Mockup%204%20-%2016x9.png?updatedAt=1767538713061',
      caption: 'Flagship desktop',
      wide: true,
    },
    {
      image:
        'https://ik.imagekit.io/qcvroy8xpd/Mockup%203%20-%2016x9.png?updatedAt=1767538713124',
      caption: 'Dark theme',
    },
    {
      image:
        'https://ik.imagekit.io/qcvroy8xpd/Mockup%201%20-%201x1.png?updatedAt=1767538712766',
      caption: 'Editorial detail',
    },
    {
      image:
        'https://ik.imagekit.io/qcvroy8xpd/Mockup%202%20-%201x1.png?updatedAt=1767538712531',
      caption: 'Component system',
    },
    {
      image:
        'https://ik.imagekit.io/qcvroy8xpd/67eb0d66b12c7394660719%20(1).jpeg?updatedAt=1766490775632',
      caption: 'Mobile experience',
    },
  ],

  next: {
    title: 'Untapped Africa',
    url: '/work/case-studies/untapped-africa',
    image:
      'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%201%20-%201x1(1).png?updatedAt=1767539579782',
  },
};

export default function BinnsMediaPage() {
  return <CaseStudyLayout config={config} />;
}
