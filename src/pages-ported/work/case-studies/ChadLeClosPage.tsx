"use client";

import CaseStudyLayout, { CaseStudyConfig } from '@/components/CaseStudyLayout';

const config: CaseStudyConfig = {
  kicker: 'Case File · 11 · Athlete / Bookings',
  pkg: 'Flagship + Booking',
  title: 'Chad Le Clos',
  italicWord: 'Swimming.',
  tagline: (
    <>
      Olympic champion&apos;s swimming clinics platform — with booking, athlete
      management, and clinic scheduling designed for real parents under real time
      pressure.
    </>
  ),
  heroImage: 'https://i.imgur.com/ApfYPlH.jpg',
  metaStats: [
    { value: 'OLY', label: 'Champion' },
    { value: 'Live', label: 'Bookings' },
    { value: '<2s', label: 'Load' },
    { value: 'ZA', label: 'Region' },
  ],
  liveUrl: 'https://chadleclosswimming.com',

  marquee: [
    'Next.js',
    'Tailwind',
    'Framer Motion',
    'Booking System',
    'Athlete UX',
    'Mobile-first',
  ],

  challenge: {
    narrative: (
      <>
        <p>
          An Olympic champion running in-person swim clinics for kids. Demand was
          high; admin was drowning. Parents were booking by calling, then emailing,
          then showing up unsure of which slot they&apos;d confirmed.
        </p>
      </>
    ),
    bullets: [
      'Bookings handled manually via call + email',
      'No self-serve clinic calendar for parents',
      'Brand presence inconsistent with Chad&apos;s profile',
      'Athlete/coach management scattered across spreadsheets',
    ],
  },

  solution: {
    narrative: (
      <>
        <p>
          I built a flagship brand site with an integrated booking system that lets
          parents self-serve clinic slots in under 60 seconds. The visual treatment
          honours Chad&apos;s Olympic stature while staying functional for
          non-athletic audiences.
        </p>
      </>
    ),
    items: [
      {
        title: 'Self-serve booking',
        description:
          'Parents pick a clinic, a slot, and confirm in under a minute. Automatic email confirmation with calendar attachment.',
      },
      {
        title: 'Clinic management',
        description:
          'Back-end interface for the team to manage clinic dates, capacity, pricing, and athlete info without touching a spreadsheet.',
      },
      {
        title: 'Editorial athlete profile',
        description:
          'Long-form editorial layout that does justice to the athletic career — cinematic imagery, event history, career stats.',
      },
      {
        title: 'Mobile-first',
        description:
          'Most parents book on mobile while kids are in the car. Thumb-friendly CTAs, fast load times, zero modal hell.',
      },
    ],
    tech: ['Next.js', 'Tailwind', 'Framer Motion', 'Booking System'],
  },

  results: {
    stats: [
      { value: 'Self', label: 'Serve Bookings' },
      { value: 'Fast', label: 'Form Completion' },
      { value: 'Mobile', label: 'First' },
      { value: 'Live', label: 'Scheduling' },
    ],
  },

  gallery: [
    {
      image: 'https://i.imgur.com/ApfYPlH.jpg',
      caption: 'Homepage',
      wide: true,
    },
  ],

  next: {
    title: 'Fleet Management',
    url: '/work/case-studies/fleet-management',
    image: 'https://i.imgur.com/EwgHAuK.png',
  },
};

export default function ChadLeClosPage() {
  return <CaseStudyLayout config={config} />;
}
