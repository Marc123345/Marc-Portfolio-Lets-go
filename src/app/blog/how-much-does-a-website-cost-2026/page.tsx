import type { Metadata } from 'next';
import BlogWebsiteCost2026 from '@/pages-ported/blog/how-much-does-a-website-cost-2026';

const title = 'How Much Does a Website Cost in 2026?';
const description =
  'A practical 2026 guide to website costs for small business owners: typical price ranges, what drives them, DIY vs professional, platforms, design, mobile, content, ecommerce, and ongoing costs.';
const url = 'https://www.marcfriedmanportfolio.com/blog/how-much-does-a-website-cost-2026/';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'article' },
  twitter: { card: 'summary_large_image', title, description },
};

export default function Page() {
  return <BlogWebsiteCost2026 />;
}
