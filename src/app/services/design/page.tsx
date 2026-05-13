import type { Metadata } from 'next';
import DesignPage from '@/pages-ported/services/DesignPage';

export const metadata: Metadata = {
  title: { absolute: 'UI/UX Design Services | User-Centered Design & Prototyping | Tel Aviv' },
  description: 'Professional UI/UX design services. Wireframing, prototyping, design systems, and user research. Boost conversions with data-driven, user-centered design.',
  alternates: { canonical: 'https://marcfriedmanportfolio.com/services/design/' },
  openGraph: {
    title: 'UI/UX Design Services | User-Centered Design & Prototyping | Tel Aviv',
    description: 'Professional UI/UX design services. Wireframing, prototyping, design systems, and user research. Boost conversions with data-driven, user-centered design.',
    url: 'https://marcfriedmanportfolio.com/services/design/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UI/UX Design Services | User-Centered Design & Prototyping | Tel Aviv',
    description: 'Professional UI/UX design services. Wireframing, prototyping, design systems, and user research. Boost conversions with data-driven, user-centered design.',
  },
};

export default function Page() {
  return <DesignPage />;
}
