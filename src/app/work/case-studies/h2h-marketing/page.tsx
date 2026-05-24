import type { Metadata } from 'next';
import H2HMarketingPage from '@/pages-ported/work/case-studies/H2HMarketingPage';

const title = 'H2H Marketing Case Study | Human-First Agency Brand | Marc Friedman';
const description =
  'Brand and site for a social marketing agency built around a human-to-human strategy. Conversion-focused layout that reads distinct, not template.';
const url = 'https://marcfriedmanportfolio.com/work/case-studies/h2h-marketing/';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'website' },
  twitter: { card: 'summary_large_image', title, description },
};

export default function Page() {
  return <H2HMarketingPage />;
}
