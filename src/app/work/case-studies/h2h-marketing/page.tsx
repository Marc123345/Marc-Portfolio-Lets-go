import type { Metadata } from 'next';
import H2HMarketingPage from '@/pages-ported/work/case-studies/H2HMarketingPage';

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.marcfriedmanportfolio.com/work/case-studies/h2h-marketing/' },
};

export default function Page() {
  return <H2HMarketingPage />;
}
