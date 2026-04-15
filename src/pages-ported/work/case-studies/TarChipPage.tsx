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
      presence that highlights expertise in tar and chip paving applications — and
      turns showcase traffic into quotes.
    </>
  ),
  heroImage:
    'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%204%20-%2016x9(5).png?updatedAt=1767539578933',
  metaStats: [
    { value: 'Bento', label: 'Layout' },
    { value: 'Mobile', label: 'First' },
    { value: '100%', label: 'Custom' },
    { value: 'USA', label: 'Region' },
  ],
  liveUrl: 'https://cumberlandtarchip.org/',

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
          in tar and chip paving — a specialised application in the asphalt
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
          "Design that respects the trade — rugged, professional, not softened by generic SaaS gloss.",
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
        'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%204%20-%2016x9(5).png?updatedAt=1767539578933',
      caption: 'Homepage',
      wide: true,
    },
    {
      image:
        'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%201%20-%201x1(6).png?updatedAt=1767539579420',
      caption: 'Service detail',
    },
    {
      image:
        'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%202%20-%201x1(6).png?updatedAt=1767539577975',
      caption: 'Mobile',
    },
    {
      image:
        'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%203%20-%2016x9(6).png?updatedAt=1767539579791',
      caption: 'Services',
      wide: true,
    },
  ],

  next: {
    title: 'Chad Le Clos Swimming',
    url: '/work/case-studies/chad-le-clos',
    image: 'https://i.imgur.com/ApfYPlH.jpg',
  },
};

export default function TarChipPage() {
  return <CaseStudyLayout config={config} />;
}
