import type { Metadata } from 'next';
import ResourcesPage from './ResourcesPage';

const title = 'Free B2B Website Resources, Guides & Checklists | Marc Friedman';
const description =
  'Free B2B website resources, B2B Website Mastery, the B2B Website Checklist, and the Landing Page Lead Magnet. Pick a guide, enter your email, and get the PDF delivered instantly.';
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
