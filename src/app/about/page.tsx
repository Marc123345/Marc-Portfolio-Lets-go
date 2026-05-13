import type { Metadata } from 'next';
import AboutPage from '@/pages-ported/AboutPage';

export const metadata: Metadata = {
  title: { absolute: 'About Marc Friedman | Freelance Website Designer & Full Stack Developer' },
  description: 'Freelance website designer with 6+ years building high-performance websites across 3 continents. 50+ projects delivered. Google website designer — direct collaboration, no middlemen.',
  alternates: { canonical: 'https://www.marcfriedmanportfolio.com/about/' },
  openGraph: {
    title: 'About Marc Friedman | Freelance Website Designer & Full Stack Developer',
    description: 'Freelance website designer with 6+ years building high-performance websites across 3 continents. 50+ projects delivered. Google website designer — direct collaboration, no middlemen.',
    url: 'https://www.marcfriedmanportfolio.com/about/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Marc Friedman | Freelance Website Designer & Full Stack Developer',
    description: 'Freelance website designer with 6+ years building high-performance websites across 3 continents. 50+ projects delivered. Google website designer — direct collaboration, no middlemen.',
  },
};

export default function Page() {
  return <AboutPage />;
}
