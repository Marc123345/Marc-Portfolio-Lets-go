import type { Metadata } from 'next';
import FriedmanCohenPage from '@/pages-ported/work/case-studies/FriedmanCohenPage';

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.marcfriedmanportfolio.com/work/case-studies/friedman-cohen/' },
};

export default function Page() {
  return <FriedmanCohenPage />;
}
