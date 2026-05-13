import type { Metadata } from 'next';
import VideoleapPage from '@/pages-ported/work/case-studies/VideoleapPage';

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.marcfriedmanportfolio.com/work/case-studies/videoleap/' },
};

export default function Page() {
  return <VideoleapPage />;
}
