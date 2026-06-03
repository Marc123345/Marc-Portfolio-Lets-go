import type { Metadata } from 'next';
import GeoPage from '@/pages-ported/services/GeoPage';

export const metadata: Metadata = {
  title: { absolute: 'Generative AI SEO & GEO | AI Visibility for ChatGPT, Gemini & Perplexity | Marc Friedman' },
  description:
    'Generative AI SEO services that get your brand cited inside ChatGPT, Gemini, Claude, and Perplexity. AI visibility SEO strategies for the AI-first search era.',
  alternates: { canonical: 'https://www.marcfriedmanportfolio.com/services/geo/' },
  openGraph: {
    title: 'Generative AI SEO & GEO | AI Visibility for ChatGPT, Gemini & Perplexity | Marc Friedman',
    description:
      'Generative AI SEO services that get your brand cited inside ChatGPT, Gemini, Claude, and Perplexity. AI visibility SEO strategies for the AI-first search era.',
    url: 'https://www.marcfriedmanportfolio.com/services/geo/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Generative AI SEO & GEO | AI Visibility for ChatGPT, Gemini & Perplexity | Marc Friedman',
    description:
      'Generative AI SEO services that get your brand cited inside ChatGPT, Gemini, Claude, and Perplexity. AI visibility SEO strategies for the AI-first search era.',
  },
};

export default function Page() {
  return <GeoPage />;
}
