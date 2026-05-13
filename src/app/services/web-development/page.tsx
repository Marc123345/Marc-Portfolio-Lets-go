import type { Metadata } from 'next';
import WebDevelopmentPage from '@/pages-ported/services/WebDevelopmentPage';

export const metadata: Metadata = {
  title: { absolute: 'Custom Website Development | React & Next.js Websites | Marc Friedman' },
  description: 'Custom website development with React & Next.js. SEO-optimized, sub-2-second load times, mobile-first design. Packages from landing pages to full web apps.',
  alternates: { canonical: 'https://marcfriedmanportfolio.com/services/web-development/' },
  openGraph: {
    title: 'Custom Website Development | React & Next.js Websites | Marc Friedman',
    description: 'Custom website development with React & Next.js. SEO-optimized, sub-2-second load times, mobile-first design. Packages from landing pages to full web apps.',
    url: 'https://marcfriedmanportfolio.com/services/web-development/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Website Development | React & Next.js Websites | Marc Friedman',
    description: 'Custom website development with React & Next.js. SEO-optimized, sub-2-second load times, mobile-first design. Packages from landing pages to full web apps.',
  },
};

export default function Page() {
  return <WebDevelopmentPage />;
}
