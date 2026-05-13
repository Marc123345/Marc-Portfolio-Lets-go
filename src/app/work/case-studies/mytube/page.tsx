import type { Metadata } from 'next';
import MyTubePage from '@/pages-ported/work/case-studies/MyTubePage';

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.marcfriedmanportfolio.com/work/case-studies/mytube/' },
};

export default function Page() {
  return <MyTubePage />;
}
