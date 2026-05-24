import type { Metadata } from 'next';
import DMCAPage from '@/pages-ported/DMCAPage';

export const metadata: Metadata = {
  title: 'DMCA Policy',
  description:
    'How to submit a DMCA takedown request for content hosted on marcfriedmanportfolio.com, and how counter-notifications are handled.',
  alternates: { canonical: 'https://www.marcfriedmanportfolio.com/dmca/' },
};

export default function Page() {
  return <DMCAPage />;
}
