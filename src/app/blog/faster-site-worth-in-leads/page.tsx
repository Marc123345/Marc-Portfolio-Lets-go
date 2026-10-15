import type { Metadata } from 'next';
import BlogFasterSiteWorthInLeads from '@/pages-ported/blog/faster-site-worth-in-leads';

const title = 'What a 1-Second Faster Site Is Worth in Leads';
const description =
  'Put a dollar figure on site speed: what the research supports, a worked B2B example with three scenarios, and how to run your own numbers.';
const url = 'https://www.marcfriedmanportfolio.com/blog/faster-site-worth-in-leads/';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'article' },
  twitter: { card: 'summary_large_image', title, description },
};

export default function Page() {
  return <BlogFasterSiteWorthInLeads />;
}
