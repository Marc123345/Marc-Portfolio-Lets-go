import type { Metadata } from 'next';
import DesignPage from '@/pages-ported/services/DesignPage';

export const metadata: Metadata = {
  title: { absolute: 'Website Designer Services | UI/UX Design & Prototyping | Marc Friedman' },
  description: 'Professional website designer services. Wireframing, prototyping, design systems, and user research. Boost conversions with data-driven, user-centered design.',
  alternates: { canonical: 'https://www.marcfriedmanportfolio.com/services/design/' },
  openGraph: {
    title: 'Website Designer Services | UI/UX Design & Prototyping | Marc Friedman',
    description: 'Professional website designer services. Wireframing, prototyping, design systems, and user research. Boost conversions with data-driven, user-centered design.',
    url: 'https://www.marcfriedmanportfolio.com/services/design/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Designer Services | UI/UX Design & Prototyping | Marc Friedman',
    description: 'Professional website designer services. Wireframing, prototyping, design systems, and user research. Boost conversions with data-driven, user-centered design.',
    url: 'https://www.marcfriedmanportfolio.com/services/design/',
  },
};

export default function Page() {
  return <DesignPage />;
}
