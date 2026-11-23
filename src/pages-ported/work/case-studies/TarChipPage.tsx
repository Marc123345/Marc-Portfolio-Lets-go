"use client";

import CaseStudyLayout, { CaseStudyConfig } from '@/components/CaseStudyLayout';

const config: CaseStudyConfig = {
  kicker: 'Case File · 10 · Specialty Contractor',
  pkg: 'Professional Web Presence',
  title: 'Tar & Chip',
  italicWord: 'Paving.',
  tagline: (
    <>
      A specialised showcase for premium surface solutions. Professional digital
      presence that highlights expertise in tar and chip paving applications, and
      turns showcase traffic into quotes.
    </>
  ),
  heroImage:
    '/images/case-studies/tar-chip-paving.jpg',
  metaStats: [
    { value: 'Bento', label: 'Layout' },
    { value: 'Mobile', label: 'First' },
    { value: '100%', label: 'Custom' },
    { value: 'USA', label: 'Region' },
  ],

  marquee: [
    'React',
    'Tailwind',
    'Framer Motion',
    'Quote System',
    'Responsive',
    'Specialty Trade',
  ],

  challenge: {
    narrative: (
      <>
        <p>
          The client needed a professional web presence to showcase their expertise
          in tar and chip paving, a specialised application in the asphalt
          industry. Their existing presence looked no different from a generic
          paving site, burying their niche expertise.
        </p>
      </>
    ),
    bullets: [
      'Niche expertise invisible to buyers',
      'No quote-request flow',
      'Generic brand reading like any paving shop',
      'Mobile experience afterthought',
    ],
  },

  solution: {
    narrative: (
      <>
        <p>
          I developed a clean, professional website that highlights their unique
          capabilities while maintaining an authentic connection to the paving
          industry. Bento-grid layout for visual work, tight quote flow for sales.
        </p>
      </>
    ),
    items: [
      {
        title: 'Bento gallery',
        description:
          'Asymmetric showcase grid that lets the work breathe. Desktop, mobile, and detail views each get the space they deserve.',
      },
      {
        title: 'Quote request flow',
        description:
          'Zero-friction inline form on every service page. Visitors click once from interest to inquiry.',
      },
      {
        title: 'Authentic industry aesthetic',
        description:
          "Design that respects the trade, rugged, professional, not softened by generic SaaS gloss.",
      },
      {
        title: 'Mobile-first',
        description:
          'Contractors browse on phones between jobs. Mobile experience tuned for fast load and thumb-reach CTAs.',
      },
    ],
    tech: ['React', 'Tailwind', 'Framer Motion', 'Responsive Design'],
  },

  results: {
    stats: [
      { value: 'Bento', label: 'Layout' },
      { value: 'Mobile', label: 'First' },
      { value: '100%', label: 'Custom' },
      { value: 'Specialty', label: 'Positioned' },
    ],
  },

  gallery: [
    {
      image:
        '/images/case-studies/tar-chip-paving.jpg',
      caption: 'Homepage',
      wide: true,
    },
  ],

  next: {
    title: 'Chad Le Clos Swimming',
    url: '/work/case-studies/chad-le-clos/',
    image: '/images/clients/ApfYPlH.webp',
  },
};

export default function TarChipPage() {
  return <CaseStudyLayout config={config} />;
}
