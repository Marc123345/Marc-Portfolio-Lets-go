import type { Metadata } from 'next';
import ExternalWebDepartmentPage from '@/pages-ported/services/ExternalWebDepartmentPage';

export const metadata: Metadata = {
  title: { absolute: 'External Web Department | Outsourced Web Design for Multi-Location Brands' },
  description: 'Ongoing web production for franchise and multi-brand businesses. Scalable design systems, continuous improvements, and dedicated development support.',
  alternates: { canonical: 'https://marcfriedmanportfolio.com/services/external-web-department/' },
  openGraph: {
    title: 'External Web Department | Outsourced Web Design for Multi-Location Brands',
    description: 'Ongoing web production for franchise and multi-brand businesses. Scalable design systems, continuous improvements, and dedicated development support.',
    url: 'https://marcfriedmanportfolio.com/services/external-web-department/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'External Web Department | Outsourced Web Design for Multi-Location Brands',
    description: 'Ongoing web production for franchise and multi-brand businesses. Scalable design systems, continuous improvements, and dedicated development support.',
  },
};

export default function Page() {
  return <ExternalWebDepartmentPage />;
}
