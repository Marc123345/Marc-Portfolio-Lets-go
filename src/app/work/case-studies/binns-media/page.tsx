import type { Metadata } from 'next';
import BinnsMediaPage from '@/pages-ported/work/case-studies/BinnsMediaPage';

export const metadata: Metadata = {
  title: { absolute: 'Binns Media Group Case Study | Digital Media Platform Redesign' },
  description: 'Complete redesign of a NYC digital media platform. Improved engagement, faster load times, and better content discovery with React 18 and GSAP.',
  alternates: { canonical: 'https://marcfriedmanportfolio.com/work/case-studies/binns-media/' },
  openGraph: {
    title: 'Binns Media Group Case Study | Digital Media Platform Redesign',
    description: 'Complete redesign of a NYC digital media platform. Improved engagement, faster load times, and better content discovery with React 18 and GSAP.',
    url: 'https://marcfriedmanportfolio.com/work/case-studies/binns-media/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Binns Media Group Case Study | Digital Media Platform Redesign',
    description: 'Complete redesign of a NYC digital media platform. Improved engagement, faster load times, and better content discovery with React 18 and GSAP.',
  },
};

export default function Page() {
  return <BinnsMediaPage />;
}
