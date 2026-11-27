import type { Metadata } from 'next';
import SiliconAtlasPage from '@/pages-ported/work/case-studies/SiliconAtlasPage';

export const metadata: Metadata = {
  title: { absolute: 'Silicon Atlas, Engineering Dashboard UI Kit | Marc Friedman' },
  description:
    'A UX case study following an optical receiver measurement from its first margin excursion to a repeatable test and an evidence-backed review.',
  alternates: {
    canonical: 'https://www.marcfriedmanportfolio.com/work/case-studies/silicon-atlas/',
  },
  openGraph: {
    title: 'Silicon Atlas, Engineering Dashboard UI Kit',
    description:
      'Compare lanes, capture evidence, plan a retest and record a decision. React 19 app, Figma file and design system on one set of tokens.',
    url: 'https://www.marcfriedmanportfolio.com/work/case-studies/silicon-atlas/',
    type: 'website',
    images: ['/images/case-studies/silicon-atlas/cover.webp'],
  },
};

export default function Page() {
  return <SiliconAtlasPage />;
}
