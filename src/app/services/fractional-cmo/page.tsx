import type { Metadata } from 'next';
import FractionalCMOPage from '@/pages-ported/services/FractionalCMOPage';

export const metadata: Metadata = {
  title: { absolute: 'Fractional CMO Partnership | White-Label Web Design for Agencies' },
  description: 'Design & development execution for marketing agencies. High-converting landing pages, sales-ready websites, white-label delivery under your brand.',
  alternates: { canonical: 'https://marcfriedmanportfolio.com/services/fractional-cmo/' },
  openGraph: {
    title: 'Fractional CMO Partnership | White-Label Web Design for Agencies',
    description: 'Design & development execution for marketing agencies. High-converting landing pages, sales-ready websites, white-label delivery under your brand.',
    url: 'https://marcfriedmanportfolio.com/services/fractional-cmo/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fractional CMO Partnership | White-Label Web Design for Agencies',
    description: 'Design & development execution for marketing agencies. High-converting landing pages, sales-ready websites, white-label delivery under your brand.',
  },
};

export default function Page() {
  return <FractionalCMOPage />;
}
