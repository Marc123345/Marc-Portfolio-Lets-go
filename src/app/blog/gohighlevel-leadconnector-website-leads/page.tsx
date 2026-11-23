import type { Metadata } from 'next';
import BlogGoHighLevelLeadConnector from '@/pages-ported/blog/gohighlevel-leadconnector-website-leads';

const title = 'Sending Website Leads to GoHighLevel and LeadConnector';
const description =
  'How to connect website forms to GoHighLevel (LeadConnector): three ways in, what to send with each lead, the first five minutes of follow-up, and mistakes that lose leads.';
const url = 'https://www.marcfriedmanportfolio.com/blog/gohighlevel-leadconnector-website-leads/';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'article' },
  twitter: { card: 'summary_large_image', title, description },
};

export default function Page() {
  return <BlogGoHighLevelLeadConnector />;
}
