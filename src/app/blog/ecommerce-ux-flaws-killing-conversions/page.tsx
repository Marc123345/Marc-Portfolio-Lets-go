import type { Metadata } from 'next';
import BlogEcommerceUX from '@/pages-ported/blog/ecommerce-ux-flaws-killing-conversions';

const title = '3 UX Flaws That Kill Ecommerce Conversions — Backed by Data';
const description =
  'Three common UX mistakes costing ecommerce sites real revenue, the data behind each one, and concrete fixes that have moved conversion materially.';
const url = 'https://www.marcfriedmanportfolio.com/blog/ecommerce-ux-flaws-killing-conversions/';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'article' },
  twitter: { card: 'summary_large_image', title, description },
};

export default function Page() {
  return <BlogEcommerceUX />;
}
