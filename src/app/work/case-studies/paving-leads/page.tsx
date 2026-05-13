import type { Metadata } from 'next';
import PavingLeadsPage from '@/pages-ported/work/case-studies/PavingLeadsPage';

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.marcfriedmanportfolio.com/work/case-studies/paving-leads/' },
};

export default function Page() {
  return <PavingLeadsPage />;
}
