import type { Metadata } from 'next';
import BlogReactUIBuilder from '@/pages-ported/blog/react-user-interface-builder';

const title = 'React: A User Interface Builder for the Modern Web';
const description =
  'A grounded 2026 guide to React: components, JSX, the virtual DOM, state, props and hooks, unidirectional data flow, React Native, server rendering and Server Components, and how to learn it.';
const url = 'https://www.marcfriedmanportfolio.com/blog/react-user-interface-builder/';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'article' },
  twitter: { card: 'summary_large_image', title, description },
};

export default function Page() {
  return <BlogReactUIBuilder />;
}
