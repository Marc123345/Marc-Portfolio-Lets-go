import type { Metadata } from 'next';
import AskAfricaPage from '@/pages-ported/work/case-studies/AskAfricaPage';

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.marcfriedmanportfolio.com/work/case-studies/ask-africa/' },
};

export default function Page() {
  return <AskAfricaPage />;
}
