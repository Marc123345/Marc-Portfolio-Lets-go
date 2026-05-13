import type { Metadata } from 'next';
import ILightPage from '@/pages-ported/work/case-studies/ILightPage';

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.marcfriedmanportfolio.com/work/case-studies/ilight/' },
};

export default function Page() {
  return <ILightPage />;
}
