import type { Metadata } from 'next';
import TracefoldPage from '@/pages-ported/work/case-studies/TracefoldPage';

const title = 'Tracefold | Cybersecurity UI Kit for Figma | Marc Friedman';
const description = 'Designing evidence review, response approval and mobile handoffs for a security operations team. Explore the Tracefold case study and editable Figma kit.';
const url = 'https://www.marcfriedmanportfolio.com/work/case-studies/tracefold/';
const image = 'https://www.marcfriedmanportfolio.com/images/case-studies/tracefold/cover.webp';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'website', images: [image] },
  twitter: { card: 'summary_large_image', title, description, images: [image] },
};

export default TracefoldPage;
