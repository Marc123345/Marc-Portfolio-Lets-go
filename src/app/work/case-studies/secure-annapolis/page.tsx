import type { Metadata } from 'next';
import SecureAnnapolisPage from '@/pages-ported/work/case-studies/SecureAnnapolisPage';

const title = 'A Secure Annapolis Case Study | Locksmith Mobile Conversion | Marc Friedman';
const description =
  'Hyper-local emergency locksmith site built for mobile conversion. Top-3 Google Maps ranking, 85% mobile conversion rate, instant trust signals.';
const url = 'https://marcfriedmanportfolio.com/work/case-studies/secure-annapolis/';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'website' },
  twitter: { card: 'summary_large_image', title, description },
};

export default function Page() {
  return <SecureAnnapolisPage />;
}
