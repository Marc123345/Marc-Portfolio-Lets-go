import type { Metadata } from 'next';
import SeoContentLayoutPage from '@/pages-ported/services/SeoContentLayoutPage';

export const metadata: Metadata = {
  title: { absolute: 'SEO Content & Layout — Marc Friedman' },
  description:
    'Pages structured for search engines AND humans. Content that ranks because it answers, layouts that convert because they don\'t make visitors think.',
  alternates: {
    canonical: 'https://marcfriedmanportfolio.com/services/seo-content-layout/',
  },
};

export default function Page() {
  return <SeoContentLayoutPage />;
}
