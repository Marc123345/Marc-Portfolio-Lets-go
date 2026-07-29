import type { Metadata } from 'next';
import BlogChooseWebsiteDesigner2026 from '@/pages-ported/blog/how-to-choose-a-website-designer-2026';

const title = 'How to Choose a Website Designer for Your Business Website in 2026';
const description =
  'A practical guide to hiring a web designer: set goals first, audit your current site, compare DIY vs freelancer vs solo specialist vs agency, read portfolios properly, ask better questions, budget realistically, and settle ownership before you sign.';
const url = 'https://www.marcfriedmanportfolio.com/blog/how-to-choose-a-website-designer-2026/';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'article' },
  twitter: { card: 'summary_large_image', title, description },
};

export default function Page() {
  return <BlogChooseWebsiteDesigner2026 />;
}
