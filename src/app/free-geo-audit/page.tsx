import type { Metadata } from 'next';
import FreeGeoAuditPage from '@/pages-ported/FreeGeoAuditPage';

export const metadata: Metadata = {
  title: { absolute: 'Free GEO Audit | AI Visibility Across ChatGPT, Perplexity, Google AI Overviews' },
  description:
    'A free, expert-reviewed Generative Engine Optimization (GEO) audit covering AI visibility across ChatGPT, Perplexity, Google AI Overviews, and Gemini.',
  alternates: { canonical: 'https://www.marcfriedmanportfolio.com/free-geo-audit/' },
  openGraph: {
    title: 'Free GEO Audit | AI Visibility Across ChatGPT, Perplexity, Google AI Overviews',
    description:
      'A free, expert-reviewed Generative Engine Optimization (GEO) audit covering AI visibility across ChatGPT, Perplexity, Google AI Overviews, and Gemini.',
    url: 'https://www.marcfriedmanportfolio.com/free-geo-audit/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free GEO Audit | AI Visibility Across ChatGPT, Perplexity, Google AI Overviews',
    description:
      'A free, expert-reviewed Generative Engine Optimization (GEO) audit covering AI visibility across ChatGPT, Perplexity, Google AI Overviews, and Gemini.',
  },
};

export default function Page() {
  return <FreeGeoAuditPage />;
}
