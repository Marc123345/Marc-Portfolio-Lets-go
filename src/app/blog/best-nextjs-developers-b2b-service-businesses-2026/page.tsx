import type { Metadata } from 'next';
import BlogBestNextjsDevelopers from '@/pages-ported/blog/best-nextjs-developers-b2b-service-businesses-2026';

const title = 'Best Next.js Developers for B2B & Service Businesses (2026)';
const description =
  'An honest, criteria-based guide to the best Next.js developers and agencies for B2B and service businesses in 2026 — who each one is best for, their stack, and how to choose.';
const url =
  'https://www.marcfriedmanportfolio.com/blog/best-nextjs-developers-b2b-service-businesses-2026/';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'article' },
  twitter: { card: 'summary_large_image', title, description },
};

export default function Page() {
  return <BlogBestNextjsDevelopers />;
}
