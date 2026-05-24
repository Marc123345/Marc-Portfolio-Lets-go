import type { Metadata } from 'next';
import TermsAndConditionsPage from '@/pages-ported/TermsAndConditionsPage';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description:
    'The terms governing your use of marcfriedmanportfolio.com, including service scope, intellectual property, liability, and engagement details.',
  alternates: { canonical: 'https://www.marcfriedmanportfolio.com/terms-and-conditions/' },
};

export default function Page() {
  return <TermsAndConditionsPage />;
}
