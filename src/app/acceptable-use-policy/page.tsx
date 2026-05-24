import type { Metadata } from 'next';
import AcceptableUsePolicyPage from '@/pages-ported/AcceptableUsePolicyPage';

export const metadata: Metadata = {
  title: 'Acceptable Use Policy',
  description:
    'The rules for acceptable use of marcfriedmanportfolio.com — prohibited activities, security violations, and consequences of misuse.',
  alternates: { canonical: 'https://www.marcfriedmanportfolio.com/acceptable-use-policy/' },
};

export default function Page() {
  return <AcceptableUsePolicyPage />;
}
