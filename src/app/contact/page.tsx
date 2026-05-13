import type { Metadata } from 'next';
import ContactPage from '@/pages-ported/ContactPage';

export const metadata: Metadata = {
  title: { absolute: 'Contact Marc Friedman | Freelance Website Designer | Free Strategy Call' },
  description: 'Book a free call with a freelance website designer. Let\'s discuss your goals and how a custom website design can grow your business. 24-hour response guaranteed.',
  alternates: { canonical: 'https://www.marcfriedmanportfolio.com/contact/' },
  openGraph: {
    title: 'Contact Marc Friedman | Freelance Website Designer | Free Strategy Call',
    description: 'Book a free call with a freelance website designer. Let\'s discuss your goals and how a custom website design can grow your business. 24-hour response guaranteed.',
    url: 'https://www.marcfriedmanportfolio.com/contact/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Marc Friedman | Freelance Website Designer | Free Strategy Call',
    description: 'Book a free call with a freelance website designer. Let\'s discuss your goals and how a custom website design can grow your business. 24-hour response guaranteed.',
  },
};

export default function Page() {
  return <ContactPage />;
}
