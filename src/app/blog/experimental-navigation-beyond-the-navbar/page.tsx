import type { Metadata } from 'next';
import BlogExperimentalNavigation from '@/pages-ported/blog/experimental-navigation-beyond-the-navbar';

const title = 'Experimental Navigation: Canvases, Folding Pages and Sites Without a Navbar';
const description =
  'Zoomable canvases, folding pages and other alternatives to the top navbar: when they work, where they fail, and how to build one people and search engines can still use.';
const url = 'https://www.marcfriedmanportfolio.com/blog/experimental-navigation-beyond-the-navbar/';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'article' },
  twitter: { card: 'summary_large_image', title, description },
};

export default function Page() {
  return <BlogExperimentalNavigation />;
}
