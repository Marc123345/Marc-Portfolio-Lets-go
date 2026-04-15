import type { Metadata } from 'next';
import HomePage from '@/pages-ported/HomePage';

export const metadata: Metadata = {
  title: { absolute: 'Web Design Agency Tel Aviv | Custom Websites That Convert | Marc Friedman' },
  description: 'Award-winning web design agency in Tel Aviv. Custom React & Next.js websites with 98/100 PageSpeed scores. 50+ projects, 5.0★ Google rating. Book a free strategy call.',
  alternates: { canonical: 'https://marcfriedmanportfolio.com/' },
  openGraph: {
    title: 'Web Design Agency Tel Aviv | Custom Websites That Convert | Marc Friedman',
    description: 'Award-winning web design agency in Tel Aviv. Custom React & Next.js websites with 98/100 PageSpeed scores. 50+ projects, 5.0★ Google rating. Book a free strategy call.',
    url: 'https://marcfriedmanportfolio.com/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design Agency Tel Aviv | Custom Websites That Convert | Marc Friedman',
    description: 'Award-winning web design agency in Tel Aviv. Custom React & Next.js websites with 98/100 PageSpeed scores. 50+ projects, 5.0★ Google rating. Book a free strategy call.',
  },
};

export default function Page() {
  return <HomePage />;
}
