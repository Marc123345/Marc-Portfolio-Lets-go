import type { Metadata } from 'next';
import AutoMarginPage from '@/pages-ported/work/case-studies/AutoMarginPage';

export const metadata: Metadata = {
  title: { absolute: 'AutoMarginX Case Study | 35% Faster Dealer Decisions | Marc Friedman' },
  description: 'Real-time dealership analytics platform enabling 35% faster decisions and higher profits. Built with React, Node.js, and PostgreSQL.',
  alternates: { canonical: 'https://www.marcfriedmanportfolio.com/work/case-studies/automarginx/' },
  openGraph: {
    title: 'AutoMarginX Case Study | 35% Faster Dealer Decisions | Marc Friedman',
    description: 'Real-time dealership analytics platform enabling 35% faster decisions and higher profits. Built with React, Node.js, and PostgreSQL.',
    url: 'https://www.marcfriedmanportfolio.com/work/case-studies/automarginx/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AutoMarginX Case Study | 35% Faster Dealer Decisions | Marc Friedman',
    description: 'Real-time dealership analytics platform enabling 35% faster decisions and higher profits. Built with React, Node.js, and PostgreSQL.',
  },
};

export default function Page() {
  return <AutoMarginPage />;
}
