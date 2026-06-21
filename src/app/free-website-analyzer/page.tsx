import type { Metadata } from 'next';
import FreeWebsiteAnalyzerPage from '@/pages-ported/FreeWebsiteAnalyzerPage';

export const metadata: Metadata = {
  title: { absolute: 'Free Website Analyzer | Hand-Reviewed Audit | Marc Friedman' },
  description:
    'Get a free, hand-reviewed audit of your website, speed, SEO, mobile, conversions, credibility, schema. Delivered by a human, not a script.',
  alternates: { canonical: 'https://www.marcfriedmanportfolio.com/free-website-analyzer/' },
  openGraph: {
    title: 'Free Website Analyzer | Hand-Reviewed Audit | Marc Friedman',
    description:
      'Get a free, hand-reviewed audit of your website, speed, SEO, mobile, conversions, credibility, schema. Delivered by a human, not a script.',
    url: 'https://www.marcfriedmanportfolio.com/free-website-analyzer/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Website Analyzer | Hand-Reviewed Audit | Marc Friedman',
    description:
      'Get a free, hand-reviewed audit of your website, speed, SEO, mobile, conversions, credibility, schema. Delivered by a human, not a script.',
  },
};

export default function Page() {
  return <FreeWebsiteAnalyzerPage />;
}
