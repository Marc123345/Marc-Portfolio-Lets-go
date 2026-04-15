import type { Metadata } from 'next';
import GeoPage from '@/pages-ported/services/GeoPage';

export const metadata: Metadata = {
  title: { absolute: 'GEO — Generative Engine Optimization | Marc Friedman' },
  description:
    'Show up inside AI-generated answers across LLMs and answer engines. The new SEO playbook for an AI-first search era.',
  alternates: { canonical: 'https://marcfriedmanportfolio.com/services/geo/' },
};

export default function Page() {
  return <GeoPage />;
}
