import type { Metadata } from 'next';
import ILightPage from '@/pages-ported/work/case-studies/ILightPage';

const title = 'iLight Care Case Study | Concept to MVP in 6 Weeks | Marc Friedman';
const description =
  'AI mental health platform taken from concept to investor-ready in 6 weeks: brand, marketing site, SaaS MVP, and pitch deck shipped together.';
const url = 'https://marcfriedmanportfolio.com/work/case-studies/ilight/';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'website' },
  twitter: { card: 'summary_large_image', title, description },
};

export default function Page() {
  return <ILightPage />;
}
