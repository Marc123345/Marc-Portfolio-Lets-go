import type { Metadata } from 'next';
import FriedmanCohenPage from '@/pages-ported/work/case-studies/FriedmanCohenPage';

const title = 'Friedman & Cohen Case Study | 100-Year B2B Transformation | Marc Friedman';
const description =
  'Century-old retail legacy re-engineered into a digital procurement platform. Self-serve portal for developers and hospitality buyers with live inventory.';
const url = 'https://marcfriedmanportfolio.com/work/case-studies/friedman-cohen/';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'website' },
  twitter: { card: 'summary_large_image', title, description },
};

export default function Page() {
  return <FriedmanCohenPage />;
}
