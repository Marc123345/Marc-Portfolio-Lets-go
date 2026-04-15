"use client";

import CaseStudyLayout, { CaseStudyConfig } from '@/components/CaseStudyLayout';

const config: CaseStudyConfig = {
  kicker: 'Case File · 08 · B2B Procurement',
  pkg: 'Flagship · B2B Platform',
  title: 'Friedman',
  italicWord: '& Cohen.',
  tagline: (
    <>
      A century-old retail legacy re-engineered for the digital procurement age. A
      B2B platform for developers, student accommodations, and the hospitality
      sector.
    </>
  ),
  heroImage:
    'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%204%20-%2016x9(3).png?updatedAt=1767539578460',
  metaStats: [
    { value: '100+', label: 'Years Legacy' },
    { value: '4.4', label: 'Google' },
    { value: '1.3k', label: 'Reviews' },
    { value: 'B2B', label: 'Platform' },
  ],
  liveUrl: 'https://b2b.fandc.co.za',

  marquee: [
    'React',
    'Node.js',
    'PostgreSQL',
    'Real-time Data',
    'B2B Procurement',
    'Role-based Access',
  ],

  challenge: {
    narrative: (
      <>
        <p>
          Friedman &amp; Cohen is a cornerstone of the Western Cape retail community.
          But as retail shifted, they needed to evolve from a traditional department
          store into a digital-first procurement powerhouse.
        </p>
      </>
    ),
    bullets: [
      'Legacy B2B orders happening over email + spreadsheets',
      'No self-serve portal for property developers',
      'Inventory + pricing split across disconnected systems',
      'Brand heritage at risk of feeling dated',
    ],
  },

  solution: {
    narrative: (
      <>
        <p>
          My mission was to build F&amp;C Procurement: a digital platform specialising
          in furnishing solutions for property developers, student accommodations, and
          the hospitality sector. I abstracted the complexity of supply chain
          logistics into a clean, approachable interface.
        </p>
      </>
    ),
    items: [
      {
        title: 'Self-serve procurement portal',
        description:
          'Developers log in, browse the catalogue, request quotes, and track orders — without needing to email a rep.',
      },
      {
        title: 'Live inventory + pricing',
        description:
          'Real-time integration with back-end inventory. Pricing reflects actual stock and volume discounts on the fly.',
      },
      {
        title: 'Role-based workflows',
        description:
          'Buyers, finance, and partners each have their own view and approval flow. Audit trails baked in.',
      },
      {
        title: 'Heritage-modern visual',
        description:
          "Typography and restraint that nod to the 100-year brand while feeling current. No stock imagery, no cliché.",
      },
    ],
    tech: ['React', 'Node.js', 'PostgreSQL', 'Real-time', 'Tailwind'],
  },

  results: {
    stats: [
      { value: '100+', label: 'Years Active' },
      { value: '4.4/5', label: 'Google Rating' },
      { value: '1,350+', label: 'Reviews' },
      { value: 'B2B', label: 'Platform Live' },
    ],
  },

  gallery: [
    {
      image:
        'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%204%20-%2016x9(3).png?updatedAt=1767539578460',
      caption: 'Desktop homepage',
      wide: true,
    },
    {
      image:
        'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%203%20-%2016x9(3).png?updatedAt=1767539580203',
      caption: 'Dark theme',
    },
    {
      image:
        'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%201%20-%201x1(3).png?updatedAt=1767539579776',
      caption: 'Detail view',
    },
    {
      image:
        'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%202%20-%201x1(3).png?updatedAt=1767539578244',
      caption: 'Mobile',
    },
  ],

  next: {
    title: 'A Secure Annapolis',
    url: '/work/case-studies/secure-annapolis',
    image:
      'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%201%20-%201x1(2).png?updatedAt=1767539579194',
  },
};

export default function FriedmanCohenPage() {
  return <CaseStudyLayout config={config} />;
}
