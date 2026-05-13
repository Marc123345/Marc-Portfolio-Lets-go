import type { Metadata } from 'next';
import SecureAnnapolisPage from '@/pages-ported/work/case-studies/SecureAnnapolisPage';

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.marcfriedmanportfolio.com/work/case-studies/secure-annapolis/' },
};

export default function Page() {
  return <SecureAnnapolisPage />;
}
