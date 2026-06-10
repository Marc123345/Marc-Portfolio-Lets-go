import type { Metadata } from 'next';
import BlogWhatIsEEAT from '@/pages-ported/blog/what-is-eeat';

const title = "What Is E-E-A-T? Experience, Expertise, Authoritativeness & Trustworthiness";
const description =
  "A plain-English guide to Google's E-E-A-T framework: what the four pillars mean, why Trust matters most, how it ties to YMYL, and how to build it into a website.";
const url = 'https://www.marcfriedmanportfolio.com/blog/what-is-eeat/';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'article' },
  twitter: { card: 'summary_large_image', title, description },
};

export default function Page() {
  return <BlogWhatIsEEAT />;
}
