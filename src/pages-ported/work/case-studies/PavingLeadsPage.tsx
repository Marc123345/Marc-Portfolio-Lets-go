"use client";

import CaseStudyLayout, { CaseStudyConfig } from '@/components/CaseStudyLayout';

const config: CaseStudyConfig = {
  kicker: 'Case File · 04 · SEO / Lead Gen',
  pkg: 'Niche Closer · SEO Flagship',
  title: 'Paving',
  italicWord: 'Leads.',
  tagline: (
    <>
      A high-velocity SEO engine for paving contractors. From failing Core Web
      Vitals to #1 on Google — organic leads doubled in the first month after
      launch.
    </>
  ),
  heroImage:
    'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%204%20-%2016_9.png?updatedAt=1767539579010',
  metaStats: [
    { value: '#1', label: 'Google Rank' },
    { value: '300%', label: 'Traffic ↑' },
    { value: '2x', label: 'Leads' },
    { value: '98', label: 'Lighthouse' },
  ],
  liveUrl: 'https://pavinglead.com/',

  marquee: [
    'Next.js',
    'SEO Architecture',
    'Lead Forms',
    'Local SEO',
    'Core Web Vitals',
    'Niche Closer',
  ],

  challenge: {
    narrative: (
      <>
        <p>
          Ezra came to me with a clear goal: <em>&ldquo;Make me a professional
          website and get me ranked.&rdquo;</em>
        </p>
        <p>
          The old site loaded slowly, ranked poorly, and hid every contact form
          three clicks deep. Every failing Core Web Vital was a dollar of organic
          traffic left on the table.
        </p>
      </>
    ),
    bullets: [
      'Failing Core Web Vitals across the board',
      'Weak SEO architecture — no keyword depth',
      'Lead forms buried behind modal menus',
      'Content didn&apos;t match search intent',
    ],
  },

  solution: {
    narrative: (
      <>
        <p>
          I deployed the Niche Closer Package. This isn&apos;t a brochure — it&apos;s
          a funnel. I focused purely on speed, SEO hierarchy, and aggressive
          call-to-actions to dominate the paving niche.
        </p>
      </>
    ),
    items: [
      {
        title: 'SEO-first architecture',
        description:
          "Didn&apos;t bolt SEO on; baked it into the URL structure, page hierarchy, and content model. Every page is a landing page for a specific intent.",
      },
      {
        title: 'High-velocity lead capture',
        description:
          'Sticky phone CTAs, inline quote forms, and a zero-friction mobile call flow that turns emergency searches into immediate calls.',
      },
      {
        title: 'Performance as a ranking signal',
        description:
          'Next.js + edge caching + aggressive image optimization. Perfect Core Web Vitals scores — Google rewards that directly.',
      },
      {
        title: 'Local dominance',
        description:
          'Schema markup, Google Business integration, and location-specific pages that push the site into local pack rankings.',
      },
    ],
    tech: ['Next.js', 'React', 'Node.js', 'Schema.org', 'Analytics'],
  },

  results: {
    stats: [
      { value: '#1', label: 'Google' },
      { value: '300%', label: 'Traffic ↑' },
      { value: '2x', label: 'Leads in 30d' },
      { value: '98', label: 'Lighthouse' },
    ],
    testimonial: {
      quote:
        'Fantastic work Marc — thank you for building my dream website!!',
      author: 'Ezra Rubinson',
      role: 'Digital Marketing Agency Owner, Boston',
    },
  },

  gallery: [
    {
      image:
        'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%204%20-%2016_9.png?updatedAt=1767539579010',
      caption: 'Homepage',
      wide: true,
    },
    {
      image:
        'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%201%20-%201x1(4).png?updatedAt=1767539579396',
      caption: 'Service detail',
    },
    {
      image:
        'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%202%20-%201x1(4).png?updatedAt=1767539578842',
      caption: 'Mobile lead flow',
    },
    {
      image:
        'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%203%20-%2016x9(4).png?updatedAt=1767539579462',
      caption: 'Service pages',
      wide: true,
    },
  ],

  next: {
    title: 'A Secure Annapolis',
    url: '/work/case-studies/secure-annapolis',
    image:
      'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%201%20-%201x1(2).png?updatedAt=1767539579194',
  },
};

export default function PavingLeadsPage() {
  return <CaseStudyLayout config={config} />;
}
