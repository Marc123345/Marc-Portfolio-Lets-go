import type { Metadata } from 'next';
import FreeGeoAuditPage from '@/pages-ported/FreeGeoAuditPage';

export const metadata: Metadata = {
  title: { absolute: 'Free GEO Audit | AI Visibility Audit by Marc Friedman' },
  description:
    'Find out if AI engines like ChatGPT, Perplexity, and Google AI Overviews can find and quote your site. Free, expert-reviewed Generative Engine Optimization audit.',
  alternates: { canonical: 'https://www.marcfriedmanportfolio.com/free-geo-audit/' },
  openGraph: {
    title: 'Free GEO Audit | AI Visibility Audit by Marc Friedman',
    description:
      'Free, expert-reviewed Generative Engine Optimization audit covering ChatGPT, Perplexity, Gemini, and Google AI Overviews.',
    url: 'https://www.marcfriedmanportfolio.com/free-geo-audit/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free GEO Audit | AI Visibility Audit by Marc Friedman',
    description:
      'Free, expert-reviewed Generative Engine Optimization audit. See if AI is quoting your site.',
  },
};

export default function Page() {
  return <FreeGeoAuditPage />;
}
