import type { Metadata } from 'next';
import WebsiteAnalyzerPage from '@/pages-ported/tools/WebsiteAnalyzerPage';
import ServiceCallout from '@/components/ServiceCallout';

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
  return (
    <>
      <WebsiteAnalyzerPage />
      <ServiceCallout
        heading={"Got a low score? Here is how to fix it."}
        lead={"The analyzer shows what is wrong. If you want it fixed, these are the services that usually move the numbers."}
        links={[
          { href: "/services/web-development/", label: "Custom web development", blurb: "Rebuilds in Next.js that load fast and pass Core Web Vitals." },
          { href: "/services/seo-content-layout/", label: "SEO content and site structure", blurb: "Fix the on-page SEO issues the audit flagged." },
          { href: "/services/maintenance-hosting/", label: "Maintenance and hosting", blurb: "Keep speed, security and uptime in check after launch." },
          { href: "/services/b2b-web-design/", label: "B2B web design", blurb: "Lead-focused websites for B2B and industrial companies." },
        ]}
      />
    </>
  );
}
