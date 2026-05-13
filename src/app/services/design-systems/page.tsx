import type { Metadata } from 'next';
import DesignSystemsPage from '@/pages-ported/services/DesignSystemsPage';

export const metadata: Metadata = {
  title: { absolute: 'Design System Development | Component Libraries & Style Guides' },
  description: 'Custom design systems that deliver 40% faster development. Component libraries, design tokens, and reusable architecture for consistent, scalable products.',
  alternates: { canonical: 'https://marcfriedmanportfolio.com/services/design-systems/' },
  openGraph: {
    title: 'Design System Development | Component Libraries & Style Guides',
    description: 'Custom design systems that deliver 40% faster development. Component libraries, design tokens, and reusable architecture for consistent, scalable products.',
    url: 'https://marcfriedmanportfolio.com/services/design-systems/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Design System Development | Component Libraries & Style Guides',
    description: 'Custom design systems that deliver 40% faster development. Component libraries, design tokens, and reusable architecture for consistent, scalable products.',
  },
};

export default function Page() {
  return <DesignSystemsPage />;
}
