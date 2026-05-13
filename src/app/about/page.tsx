import type { Metadata } from 'next';
import AboutPage from '@/pages-ported/AboutPage';

export const metadata: Metadata = {
  title: { absolute: 'About Marc Friedman | Full Stack Developer & Designer in Tel Aviv' },
  description: '6+ years building high-performance websites across 3 continents. 50+ projects delivered. AWS Accelerator alumni. Direct collaboration — no middlemen, no interns.',
  alternates: { canonical: 'https://marcfriedmanportfolio.com/about/' },
  openGraph: {
    title: 'About Marc Friedman | Full Stack Developer & Designer in Tel Aviv',
    description: '6+ years building high-performance websites across 3 continents. 50+ projects delivered. AWS Accelerator alumni. Direct collaboration — no middlemen, no interns.',
    url: 'https://marcfriedmanportfolio.com/about/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Marc Friedman | Full Stack Developer & Designer in Tel Aviv',
    description: '6+ years building high-performance websites across 3 continents. 50+ projects delivered. AWS Accelerator alumni. Direct collaboration — no middlemen, no interns.',
  },
};

export default function Page() {
  return <AboutPage />;
}
