import type { Metadata } from 'next';
import TarChipPage from '@/pages-ported/work/case-studies/TarChipPage';

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.marcfriedmanportfolio.com/work/case-studies/tar-chip-paving/' },
};

export default function Page() {
  return <TarChipPage />;
}
