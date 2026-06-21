import type { Metadata } from 'next';
import DentalLandingPage from '@/pages-ported/DentalLandingPage';

export const metadata: Metadata = {
  title: { absolute: 'Free 30-Min Dental Website Audit, Marc Friedman' },
  description:
    'A live, free 30-minute audit of your dental practice website. You leave with a written fix list, whether you hire me or not.',
  alternates: { canonical: 'https://www.marcfriedmanportfolio.com/dental-audit/' },
  openGraph: {
    title: 'Free 30-Min Dental Website Audit, Marc Friedman',
    description:
      'A live, free 30-minute audit of your dental practice website. You leave with a written fix list, whether you hire me or not.',
    url: 'https://www.marcfriedmanportfolio.com/dental-audit/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free 30-Min Dental Website Audit, Marc Friedman',
    description:
      'A live, free 30-minute audit of your dental practice website. You leave with a written fix list, whether you hire me or not.',
  },
};

export default function Page() {
  return <DentalLandingPage />;
}
