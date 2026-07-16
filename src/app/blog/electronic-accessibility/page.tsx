import type { Metadata } from 'next';
import BlogElectronicAccessibility from '@/pages-ported/blog/electronic-accessibility';

const title = 'Electronic Accessibility: Making Digital Content Work for Everyone';
const description =
  'A practical guide to electronic (digital) accessibility: what it is, why it matters legally and commercially, the POUR and WCAG standards, and how to remove barriers across websites, documents, video, email, and social media.';
const url = 'https://www.marcfriedmanportfolio.com/blog/electronic-accessibility/';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'article' },
  twitter: { card: 'summary_large_image', title, description },
};

export default function Page() {
  return <BlogElectronicAccessibility />;
}
