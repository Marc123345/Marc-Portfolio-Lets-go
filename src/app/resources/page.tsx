import type { Metadata } from 'next';
import ResourcesPage from './ResourcesPage';

const title = 'Free SEO, GEO, AEO & B2B Website Checklists | Marc Friedman';
const description =
  'Free 2026 SEO, GEO, AEO and B2B website checklists, plus B2B Website Mastery and the Landing Page guide. Enter your details and the PDF downloads instantly.';
const url = 'https://www.marcfriedmanportfolio.com/resources/';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'website' },
  twitter: { card: 'summary_large_image', title, description },
};

export default function Page() {
  return <ResourcesPage />;
}
