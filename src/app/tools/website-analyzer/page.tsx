import type { Metadata } from 'next';
import WebsiteAnalyzerPage from '@/pages-ported/tools/WebsiteAnalyzerPage';

export const metadata: Metadata = {
  title: { absolute: 'Free Website Analyzer: SEO, Speed & Core Web Vitals Check' },
  description:
    'Analyze any website free in seconds. Get Lighthouse scores for SEO, performance, accessibility and best practices, plus Core Web Vitals, via Google PageSpeed Insights.',
  alternates: { canonical: 'https://www.marcfriedmanportfolio.com/tools/website-analyzer/' },
  openGraph: {
    title: 'Free Website Analyzer: SEO, Speed & Core Web Vitals Check',
    description:
      'Run a free, instant Lighthouse audit of any website. Performance, accessibility, SEO, and Core Web Vitals in seconds.',
    url: 'https://www.marcfriedmanportfolio.com/tools/website-analyzer/',
    type: 'website',
  },
};

export default function Page() {
  return <WebsiteAnalyzerPage />;
}
