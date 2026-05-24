import type { Metadata } from 'next';
import ServicesPage from '@/pages-ported/ServicesPage';

export const metadata: Metadata = {
  title: 'Services — Web Design, Development, SEO & AI Integration',
  description:
    'Custom React/Next.js websites, design systems, SEO, AI integration, and cybersecurity audits for agencies, ecommerce, and B2B teams. Based in Tel Aviv, serving clients worldwide.',
  alternates: { canonical: 'https://www.marcfriedmanportfolio.com/services/' },
  openGraph: {
    title: 'Services — Web Design, Development, SEO & AI Integration',
    description:
      'Custom React/Next.js websites, design systems, SEO, AI integration, and cybersecurity audits for agencies, ecommerce, and B2B teams.',
    url: 'https://www.marcfriedmanportfolio.com/services/',
    type: 'website',
  },
};

export default function Page() {
  return <ServicesPage />;
}
