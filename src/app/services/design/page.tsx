import type { Metadata } from 'next';
import DesignPage from '@/pages-ported/services/DesignPage';

export const metadata: Metadata = {
  title: { absolute: 'Professional UI UX Design Services | UX Design Consultancy | Marc Friedman' },
  description: 'Professional UI UX design services and UX design consultancy. UI UX web design services, design systems, prototyping, and user research from a custom UI UX design company in Tel Aviv.',
  alternates: { canonical: 'https://www.marcfriedmanportfolio.com/services/design/' },
  openGraph: {
    title: 'Professional UI UX Design Services | UX Design Consultancy | Marc Friedman',
    description: 'Professional UI UX design services and UX design consultancy. UI UX web design services, design systems, prototyping, and user research from a custom UI UX design company in Tel Aviv.',
    url: 'https://www.marcfriedmanportfolio.com/services/design/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional UI UX Design Services | UX Design Consultancy | Marc Friedman',
    description: 'Professional UI UX design services and UX design consultancy. UI UX web design services, design systems, prototyping, and user research from a custom UI UX design company in Tel Aviv.',
  },
};

export default function Page() {
  return <DesignPage />;
}
