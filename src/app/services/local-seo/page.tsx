import type { Metadata } from 'next';
import LocalSeoPage from '@/pages-ported/services/LocalSeoPage';

export const metadata: Metadata = {
  title: { absolute: 'Local SEO & Google Business — Marc Friedman' },
  description:
    'Dominate Google Maps, win the Local 3-Pack, and turn your Google Business Profile into the most productive page on your business.',
  alternates: { canonical: 'https://marcfriedmanportfolio.com/services/local-seo/' },
};

export default function Page() {
  return <LocalSeoPage />;
}
