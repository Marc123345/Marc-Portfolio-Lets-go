import type { Metadata } from 'next';
import BlogGSCAI from '@/pages-ported/blog/google-search-console-ai-reports';

const title = 'Stop Guessing in GSC: AI-Powered Reports for SEOs';
const description =
  'Google Search Console now ships AI reports. Prompts and workflows for faster diagnosis, traffic analysis, and finding the AI-search opportunities you\'re missing.';
const url = 'https://marcfriedmanportfolio.com/blog/google-search-console-ai-reports/';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'article' },
  twitter: { card: 'summary_large_image', title, description },
};

export default function Page() {
  return <BlogGSCAI />;
}
