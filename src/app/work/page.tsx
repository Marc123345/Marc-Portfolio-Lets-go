import type { Metadata } from 'next';
import WorkPage from '@/pages-ported/WorkPage';

export const metadata: Metadata = {
  title: { absolute: 'Portfolio | Web Design Case Studies & Client Results | Marc Friedman' },
  description: '50+ projects across 3 continents. See real client results: #1 Google rankings, 300% traffic increases, 250% engagement boosts. React, Next.js & GSAP.',
  alternates: { canonical: 'https://marcfriedmanportfolio.com/work/' },
  openGraph: {
    title: 'Portfolio | Web Design Case Studies & Client Results | Marc Friedman',
    description: '50+ projects across 3 continents. See real client results: #1 Google rankings, 300% traffic increases, 250% engagement boosts. React, Next.js & GSAP.',
    url: 'https://marcfriedmanportfolio.com/work/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio | Web Design Case Studies & Client Results | Marc Friedman',
    description: '50+ projects across 3 continents. See real client results: #1 Google rankings, 300% traffic increases, 250% engagement boosts. React, Next.js & GSAP.',
  },
};

export default function Page() {
  return <WorkPage />;
}
