"use client";

import CaseStudyLayout, { CaseStudyConfig } from '@/components/CaseStudyLayout';

const config: CaseStudyConfig = {
  kicker: 'Case File · 09 · Local / Emergency',
  pkg: 'Niche Closer Site',
  title: 'A Secure',
  italicWord: 'Annapolis.',
  tagline: (
    <>
      A hyper-local lead generation engine for an emergency locksmith. Emergency
      searches turned into immediate phone calls, top 3 in local maps within the
      first month.
    </>
  ),
  heroImage:
    '/images/case-studies/secure-annapolis.jpg',
  metaStats: [
    { value: '+150%', label: 'Leads' },
    { value: 'Top 3', label: 'Local Map' },
    { value: '85%', label: 'Mobile Conv.' },
    { value: '4.8/5', label: 'Reviews' },
  ],
  liveUrl: 'https://www.asecureannapolislocksmith.com',

  marquee: [
    'React',
    'Node.js',
    'Tailwind',
    'Local SEO',
    'Click-to-Call',
    'Trust Signals',
  ],

  challenge: {
    narrative: (
      <>
        <p>
          Local businesses like locksmiths die on page 2 of Google. A Secure
          Annapolis needed immediate trust and zero friction, because an
          emergency customer clicks once and decides in seconds.
        </p>
      </>
    ),
    bullets: [
      'Emergency traffic bouncing within seconds',
      'Slow load times eating mobile conversions',
      'No local SEO authority on Google Maps',
      'Trust signals (licences, insurance) buried below the fold',
    ],
  },

  solution: {
    narrative: (
      <>
        <p>
          I deployed the Niche Closer Package, a premium site structure designed
          specifically to rank high in local maps and convert
          &ldquo;emergency&rdquo; traffic into revenue. Every second of load time
          shaved, every trust badge moved above the fold, every phone number one
          tap away.
        </p>
      </>
    ),
    items: [
      {
        title: 'Click-to-call everywhere',
        description:
          "Phone number sticky on mobile, above the fold on desktop, and on every service page. Emergency customers don&apos;t scroll.",
      },
      {
        title: 'Instant trust',
        description:
          'Licences, insurance badges, and review stars above the fold to instantly de-risk the service.',
      },
      {
        title: 'Local SEO authority',
        description:
          "Schema markup, local business citations, and neighbourhood-specific pages that push the site into Google&apos;s local pack.",
      },
      {
        title: 'Zero-friction mobile',
        description:
          'Mobile-first design. The desktop site is the afterthought, because 90% of emergency searches happen on mobile.',
      },
    ],
    tech: ['React', 'Node.js', 'Tailwind', 'Schema.org'],
  },

  results: {
    stats: [
      { value: '+150%', label: 'Leads' },
      { value: 'Top 3', label: 'Local Map' },
      { value: '85%', label: 'Mobile Conv.' },
      { value: '4.8/5', label: 'Reviews' },
    ],
    testimonial: {
      quote:
        'Very professional wonderful customer service, thank you Marc for all the work you put in, will definitely be using for future projects!',
      author: 'Royi Mazor',
      role: 'Owner, A Secure Annapolis',
    },
  },

  gallery: [
    {
      image:
        '/images/case-studies/secure-annapolis.jpg',
      caption: 'Homepage, trust-first',
      wide: true,
    },
    {
      image:
        '/images/case-studies/secure-annapolis.jpg',
      caption: 'Service detail',
    },
  ],

  next: {
    title: 'Tar & Chip Paving',
    url: '/work/case-studies/tar-chip-paving/',
    image:
      '/images/case-studies/tar-chip-paving.jpg',
  },
};

export default function SecureAnnapolisPage() {
  return <CaseStudyLayout config={config} />;
}
