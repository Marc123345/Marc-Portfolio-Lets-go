import type { Metadata } from 'next';
import WebsiteAnalyzerPage from '@/pages-ported/tools/WebsiteAnalyzerPage';

export const metadata: Metadata = {
  title: { absolute: 'Free Website Analyzer, Instant Speed & SEO Audit | Marc Friedman' },
  description:
    'Run a free, instant Lighthouse audit of any website, performance, accessibility, best practices, SEO, and Core Web Vitals. Powered by Google PageSpeed Insights.',
  alternates: { canonical: 'https://www.marcfriedmanportfolio.com/tools/website-analyzer/' },
  openGraph: {
    title: 'Free Website Analyzer, Instant Speed & SEO Audit | Marc Friedman',
    description:
      'Run a free, instant Lighthouse audit of any website. Performance, accessibility, SEO, and Core Web Vitals in seconds.',
    url: 'https://www.marcfriedmanportfolio.com/tools/website-analyzer/',
    type: 'website',
  },
};

export default function Page() {
  return <WebsiteAnalyzerPage />;
}
