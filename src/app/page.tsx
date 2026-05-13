import type { Metadata } from 'next';
import HomePage from '@/pages-ported/HomePage';

export const metadata: Metadata = {
  title: { absolute: 'Website Designer | Freelance Website Designer | Google Website Designer | Marc Friedman' },
  description: 'Award-winning freelance website designer. Custom React & Next.js websites with 98/100 PageSpeed scores. Google website designer with 50+ projects, 5.0★ Google rating. Book a free strategy call.',
  alternates: { canonical: 'https://www.marcfriedmanportfolio.com/' },
  keywords: ['Website Designer', 'Freelance Website Designer', 'Google Website Designer', 'בונה אתרים', 'Marc Friedman'],
  openGraph: {
    title: 'Website Designer | Freelance Website Designer | Google Website Designer | Marc Friedman',
    description: 'Award-winning freelance website designer. Custom React & Next.js websites with 98/100 PageSpeed scores. Google website designer with 50+ projects, 5.0★ Google rating. Book a free strategy call.',
    url: 'https://www.marcfriedmanportfolio.com/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Designer | Freelance Website Designer | Google Website Designer | Marc Friedman',
    description: 'Award-winning freelance website designer. Custom React & Next.js websites with 98/100 PageSpeed scores. Google website designer with 50+ projects, 5.0★ Google rating. Book a free strategy call.',
  },
};

export default function Page() {
  return <HomePage />;
}
