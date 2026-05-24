import type { Metadata } from 'next';
import TarChipPage from '@/pages-ported/work/case-studies/TarChipPage';

const title = 'Tar & Chip Paving Case Study | Specialty Contractor Site | Marc Friedman';
const description =
  'Showcase site for premium tar and chip paving. Bento gallery layout paired with a quote request flow that converts visitors into estimates.';
const url = 'https://marcfriedmanportfolio.com/work/case-studies/tar-chip-paving/';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'website' },
  twitter: { card: 'summary_large_image', title, description },
};

export default function Page() {
  return <TarChipPage />;
}
