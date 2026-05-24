import type { Metadata } from 'next';
import ChadLeClosPage from '@/pages-ported/work/case-studies/ChadLeClosPage';

const title = 'Chad Le Clos Swimming Case Study | Self-Serve Booking | Marc Friedman';
const description =
  'Olympic champion\'s swimming clinics platform with integrated booking. Mobile-first design that converts searches into reservations.';
const url = 'https://www.marcfriedmanportfolio.com/work/case-studies/chad-le-clos/';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'website' },
  twitter: { card: 'summary_large_image', title, description },
};

export default function Page() {
  return <ChadLeClosPage />;
}
