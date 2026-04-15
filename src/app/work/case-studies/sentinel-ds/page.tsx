import type { Metadata } from 'next';
import SentinelDSPage from '@/pages-ported/work/case-studies/SentinelDSPage';

export const metadata: Metadata = {
  title: { absolute: 'Sentinel DS — Cybersecurity Design System | Marc Friedman' },
  description:
    'Open-source cybersecurity design system built for SOC analysts and security teams. 5-level severity scale, dual themes, 15+ AA-compliant components — drop-in React, ~1,000 LOC.',
  alternates: {
    canonical:
      'https://marcfriedmanportfolio.com/work/case-studies/sentinel-ds/',
  },
  openGraph: {
    title: 'Sentinel DS — Cybersecurity Design System',
    description:
      'A purpose-built design system for security operations interfaces. React, CSS variables, dual themes, 15+ components.',
    url: 'https://marcfriedmanportfolio.com/work/case-studies/sentinel-ds/',
    type: 'website',
  },
};

export default function Page() {
  return <SentinelDSPage />;
}
