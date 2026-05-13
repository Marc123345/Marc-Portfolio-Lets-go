import type { Metadata } from 'next';
import FreeWebsiteAnalyzerPage from '@/pages-ported/FreeWebsiteAnalyzerPage';

export const metadata: Metadata = {
  title: { absolute: 'Free Website Analyzer | Expert Audit by Marc Friedman' },
  description:
    'Get a free, hand-reviewed audit of your website — speed, SEO, mobile, conversions, and credibility — delivered within 48 hours.',
  alternates: { canonical: 'https://www.marcfriedmanportfolio.com/free-website-analyzer/' },
  openGraph: {
    title: 'Free Website Analyzer | Expert Audit by Marc Friedman',
    description:
      'A real human review covering speed, SEO, mobile, conversions, and credibility — delivered within 48 hours.',
    url: 'https://www.marcfriedmanportfolio.com/free-website-analyzer/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Website Analyzer | Expert Audit by Marc Friedman',
    description:
      'A real human review covering speed, SEO, mobile, conversions, and credibility.',
  },
};

export default function Page() {
  return <FreeWebsiteAnalyzerPage />;
}
