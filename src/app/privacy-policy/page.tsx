import type { Metadata } from 'next';
import PrivacyPolicyPage from '@/pages-ported/PrivacyPolicyPage';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How marcfriedmanportfolio.com collects, uses, and protects your personal data, including cookies, analytics, and your rights under GDPR and CCPA.',
  alternates: { canonical: 'https://www.marcfriedmanportfolio.com/privacy-policy/' },
};

export default function Page() {
  return <PrivacyPolicyPage />;
}
