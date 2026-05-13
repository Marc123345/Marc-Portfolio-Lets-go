import type { Metadata } from 'next';
import UntappedAfricaPage from '@/pages-ported/work/case-studies/UntappedAfricaPage';

export const metadata: Metadata = {
  title: { absolute: 'Untapped Africa Case Study | 250% Engagement Increase | Marc Friedman' },
  description: 'How we built a water infrastructure platform serving 500,000+ people across 8 African countries with Next.js, TypeScript, and Mapbox GL.',
  alternates: { canonical: 'https://marcfriedmanportfolio.com/work/case-studies/untapped-africa/' },
  openGraph: {
    title: 'Untapped Africa Case Study | 250% Engagement Increase | Marc Friedman',
    description: 'How we built a water infrastructure platform serving 500,000+ people across 8 African countries with Next.js, TypeScript, and Mapbox GL.',
    url: 'https://marcfriedmanportfolio.com/work/case-studies/untapped-africa/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Untapped Africa Case Study | 250% Engagement Increase | Marc Friedman',
    description: 'How we built a water infrastructure platform serving 500,000+ people across 8 African countries with Next.js, TypeScript, and Mapbox GL.',
  },
};

export default function Page() {
  return <UntappedAfricaPage />;
}
