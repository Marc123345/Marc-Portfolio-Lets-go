import type { Metadata } from 'next';
import PavingLeadsPage from '@/pages-ported/work/case-studies/PavingLeadsPage';

const title = 'Paving Leads Case Study | #1 Ranking, 2x Leads | Marc Friedman';
const description =
  'High-velocity SEO build for paving contractors. From failing Core Web Vitals to a #1 ranking with 300% traffic growth and doubled organic leads.';
const url = 'https://www.marcfriedmanportfolio.com/work/case-studies/paving-leads/';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'website' },
  twitter: { card: 'summary_large_image', title, description },
};

export default function Page() {
  return <PavingLeadsPage />;
}
