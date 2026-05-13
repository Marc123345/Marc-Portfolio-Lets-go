import type { Metadata } from 'next';
import ChadLeClosPage from '@/pages-ported/work/case-studies/ChadLeClosPage';

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.marcfriedmanportfolio.com/work/case-studies/chad-le-clos/' },
};

export default function Page() {
  return <ChadLeClosPage />;
}
