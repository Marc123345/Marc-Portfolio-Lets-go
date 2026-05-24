import type { Metadata } from 'next';
import BiohackingClinicPage from './BiohackingClinicPage';

export const metadata: Metadata = {
  title: { absolute: 'Web Design for Biohacking Studios & Performance Clinics | Marc Friedman' },
  description:
    'Custom React websites for biohacking studios and performance optimization clinics. 14-day delivery. Free Google Business setup and 3 months of SEO included.',
  alternates: {
    canonical: 'https://www.marcfriedmanportfolio.com/biohacking-clinics/',
  },
  openGraph: {
    title: 'Web Design for Biohacking Studios & Performance Clinics | Marc Friedman',
    description:
      'Custom React websites for biohacking studios and performance optimization clinics. 14-day delivery. Free Google Business setup and 3 months of SEO included.',
    url: 'https://www.marcfriedmanportfolio.com/biohacking-clinics',
    images: [
      {
        url: '/images/longevity/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Web Design for Biohacking Studios & Performance Clinics — Marc Friedman',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design for Biohacking Studios & Performance Clinics | Marc Friedman',
    description:
      'Custom React websites for biohacking studios and performance optimization clinics. 14-day delivery. Free Google Business setup and 3 months of SEO included.',
    images: ['/images/longevity/og-image.jpg'],
  },
};

export default function Page() {
  return <BiohackingClinicPage />;
}
