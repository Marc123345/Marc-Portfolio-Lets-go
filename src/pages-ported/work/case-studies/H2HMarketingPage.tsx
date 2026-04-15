"use client";

import CaseStudyLayout, { CaseStudyConfig } from '@/components/CaseStudyLayout';

const config: CaseStudyConfig = {
  kicker: 'Case File · 03 · Agency Brand',
  pkg: 'Flagship · Brand-first',
  title: 'H2H',
  italicWord: 'Marketing.',
  tagline: (
    <>
      A bold digital presence for a social marketing agency connecting brands with
      real audiences through authentic, human-to-human strategies.
    </>
  ),
  heroImage: 'https://ik.imagekit.io/qcvroy8xpd/image%201%20(5).png',
  metaStats: [
    { value: '100%', label: 'Custom Build' },
    { value: '<2s', label: 'Load' },
    { value: 'AA', label: 'Accessibility' },
    { value: 'USA', label: 'Region' },
  ],
  liveUrl: 'https://www.h2hsocialmarketing.com/',

  marquee: [
    'React',
    'Tailwind',
    'Framer Motion',
    'Vite',
    'Brand-First',
    'Conversion UX',
  ],

  challenge: {
    narrative: (
      <>
        <p>
          H2H Social Marketing is a forward-thinking agency that believes in
          human-to-human connection. Their old site didn&apos;t convey the story —
          it read generic, indistinguishable from a hundred other marketing shops.
        </p>
        <p>
          They needed a site that practiced what they preach: professional yet
          approachable, data-driven yet unmistakably human.
        </p>
      </>
    ),
    bullets: [
      'Generic brand presence lost against competitors',
      'Services buried under industry jargon',
      'No conversion path from visitor to inquiry',
      'Mobile experience an afterthought',
    ],
  },

  solution: {
    narrative: (
      <>
        <p>
          I built a brand-first marketing site that embodies H2H&apos;s philosophy.
          Clean aesthetics, clear service architecture, and conversion paths
          engineered to guide visitors from &ldquo;interesting&rdquo; to
          &ldquo;let&apos;s talk.&rdquo;
        </p>
      </>
    ),
    items: [
      {
        title: 'Brand-first visual system',
        description:
          'Clean, modern aesthetics with Framer Motion micro-interactions that feel professional and human at the same time.',
      },
      {
        title: 'Conversion-focused layouts',
        description:
          'Every page with a clear next-step. CTAs placed where attention naturally peaks, not where templates dictate.',
      },
      {
        title: 'Full responsiveness',
        description:
          'Designed mobile-first and tested against real devices. The mobile experience is the primary experience, not a consolation.',
      },
      {
        title: 'SEO from day one',
        description:
          'Semantic HTML, clean schema, fast Core Web Vitals. Google reads the site correctly and ranks accordingly.',
      },
    ],
    tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
  },

  results: {
    stats: [
      { value: '100%', label: 'Custom Build' },
      { value: '<2s', label: 'Load Time' },
      { value: 'AA', label: 'Accessibility' },
      { value: 'All', label: 'Devices' },
    ],
    testimonial: {
      quote:
        "Marc is an incredible ally. Highly responsive with quick solutions. This was a high-stakes project that did not lend itself to a template solution. He's the real deal, a true professional.",
      author: 'Bradley Thompson',
      role: 'Marketing Director',
    },
  },

  gallery: [
    {
      image: 'https://ik.imagekit.io/qcvroy8xpd/image%201%20(5).png',
      caption: 'Homepage flagship',
      wide: true,
    },
  ],

  next: {
    title: 'Ask Africa',
    url: '/work/case-studies/ask-africa',
    image: 'https://ik.imagekit.io/qcvroy8xpd/image%202%20(1).png',
  },
};

export default function H2HMarketingPage() {
  return <CaseStudyLayout config={config} />;
}
