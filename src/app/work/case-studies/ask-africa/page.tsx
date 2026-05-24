import type { Metadata } from 'next';
import AskAfricaPage from '@/pages-ported/work/case-studies/AskAfricaPage';

const title = 'Ask Africa Case Study | Pan-African Research Platform | Marc Friedman';
const description =
  'Enterprise research platform positioning Ask Africa as the continent\'s leading consultancy. Authority-driven design and content architecture built for enterprise decision-makers.';
const url = 'https://www.marcfriedmanportfolio.com/work/case-studies/ask-africa/';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'website' },
  twitter: { card: 'summary_large_image', title, description },
};

export default function Page() {
  return <AskAfricaPage />;
}
