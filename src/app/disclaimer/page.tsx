import type { Metadata } from 'next';
import DisclaimerPage from '@/pages-ported/DisclaimerPage';

export const metadata: Metadata = {
  title: 'Disclaimer',
  description:
    'The disclaimer for marcfriedmanportfolio.com — accuracy, scope, and limitations of content, advice, and case studies published on the site.',
  alternates: { canonical: 'https://www.marcfriedmanportfolio.com/disclaimer/' },
};

export default function Page() {
  return <DisclaimerPage />;
}
