import type { Metadata } from 'next';
import LongevityClinicPage from './LongevityClinicPage';

export const metadata: Metadata = {
  title: { absolute: 'Web Design for Longevity & Biohacking Clinics | Marc Friedman' },
  description:
    'Custom React websites for longevity, biohacking, and regenerative medicine clinics. 14-day delivery. Free Google Business setup and 3 months of SEO included.',
  alternates: {
    canonical: 'https://www.marcfriedmanportfolio.com/longevity-clinics',
  },
  openGraph: {
    title: 'Web Design for Longevity & Biohacking Clinics | Marc Friedman',
    description:
      'Custom React websites for longevity, biohacking, and regenerative medicine clinics. 14-day delivery. Free Google Business setup and 3 months of SEO included.',
    url: 'https://www.marcfriedmanportfolio.com/longevity-clinics',
    images: [
      {
        url: '/images/longevity/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Web Design for Longevity & Biohacking Clinics — Marc Friedman',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design for Longevity & Biohacking Clinics | Marc Friedman',
    description:
      'Custom React websites for longevity, biohacking, and regenerative medicine clinics. 14-day delivery. Free Google Business setup and 3 months of SEO included.',
    images: ['/images/longevity/og-image.jpg'],
  },
};

export default function Page() {
  return <LongevityClinicPage />;
}
