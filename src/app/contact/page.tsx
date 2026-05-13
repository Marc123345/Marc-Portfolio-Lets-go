import type { Metadata } from 'next';
import ContactPage from '@/pages-ported/ContactPage';

export const metadata: Metadata = {
  title: { absolute: 'Contact Marc Friedman | Free Website Strategy Call | Tel Aviv' },
  description: 'Book a free 30-minute strategy call. Let\'s discuss your website goals and how custom web design can grow your business. 24-hour response guaranteed.',
  alternates: { canonical: 'https://marcfriedmanportfolio.com/contact/' },
  openGraph: {
    title: 'Contact Marc Friedman | Free Website Strategy Call | Tel Aviv',
    description: 'Book a free 30-minute strategy call. Let\'s discuss your website goals and how custom web design can grow your business. 24-hour response guaranteed.',
    url: 'https://marcfriedmanportfolio.com/contact/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Marc Friedman | Free Website Strategy Call | Tel Aviv',
    description: 'Book a free 30-minute strategy call. Let\'s discuss your website goals and how custom web design can grow your business. 24-hour response guaranteed.',
  },
};

export default function Page() {
  return <ContactPage />;
}
