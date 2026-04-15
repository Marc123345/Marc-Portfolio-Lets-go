import type { Metadata } from 'next';
import SaaSPage from '@/pages-ported/services/SaaSPage';

export const metadata: Metadata = {
  title: { absolute: 'SaaS Development Company | Custom Web Applications | Marc Friedman' },
  description: 'End-to-end SaaS development. Scalable architecture, 99.9% uptime, enterprise-grade security. From MVP to full-scale platform. React, Node.js, PostgreSQL.',
  alternates: { canonical: 'https://marcfriedmanportfolio.com/services/saas/' },
  openGraph: {
    title: 'SaaS Development Company | Custom Web Applications | Marc Friedman',
    description: 'End-to-end SaaS development. Scalable architecture, 99.9% uptime, enterprise-grade security. From MVP to full-scale platform. React, Node.js, PostgreSQL.',
    url: 'https://marcfriedmanportfolio.com/services/saas/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SaaS Development Company | Custom Web Applications | Marc Friedman',
    description: 'End-to-end SaaS development. Scalable architecture, 99.9% uptime, enterprise-grade security. From MVP to full-scale platform. React, Node.js, PostgreSQL.',
  },
};

export default function Page() {
  return <SaaSPage />;
}
