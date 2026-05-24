import type { Metadata } from 'next';
import MyTubePage from '@/pages-ported/work/case-studies/MyTubePage';

const title = 'MyTube Case Study | AI-Assisted Video Metadata | Marc Friedman';
const description =
  'Video metadata management with AI-assisted tagging and automated workflows. Faster processing and consolidated analytics for media teams.';
const url = 'https://www.marcfriedmanportfolio.com/work/case-studies/mytube/';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'website' },
  twitter: { card: 'summary_large_image', title, description },
};

export default function Page() {
  return <MyTubePage />;
}
