import type { Metadata } from 'next';
import AeoPage from '@/pages-ported/services/AeoPage';

export const metadata: Metadata = {
  title: { absolute: 'AEO — Answer Engine Optimization | Marc Friedman' },
  description:
    'Get cited by ChatGPT, Perplexity, Claude, and Google AI Overviews. Structured content AI engines can extract, attribute, and surface.',
  alternates: { canonical: 'https://marcfriedmanportfolio.com/services/aeo/' },
};

export default function Page() {
  return <AeoPage />;
}
