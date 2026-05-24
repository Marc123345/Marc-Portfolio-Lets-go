import type { Metadata } from 'next';
import CookiesPolicyPage from '@/pages-ported/CookiesPolicyPage';

export const metadata: Metadata = {
  title: 'Cookies Policy',
  description:
    'Which cookies marcfriedmanportfolio.com uses, why we use them, and how you can manage your preferences through the consent banner.',
  alternates: { canonical: 'https://www.marcfriedmanportfolio.com/cookies-policy/' },
};

export default function Page() {
  return <CookiesPolicyPage />;
}
