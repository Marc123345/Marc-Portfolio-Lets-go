import type { Metadata } from 'next';
import BlogPage from '@/pages-ported/BlogPage';

export const metadata: Metadata = {
  title: { absolute: 'Web Design & Development Blog | SEO, React & UX Tips | Marc Friedman' },
  description: 'Expert insights on web design, React development, SEO strategy, and UX best practices. Actionable tips from a full-stack developer with 50+ projects.',
  alternates: { canonical: 'https://marcfriedmanportfolio.com/blog/' },
  openGraph: {
    title: 'Web Design & Development Blog | SEO, React & UX Tips | Marc Friedman',
    description: 'Expert insights on web design, React development, SEO strategy, and UX best practices. Actionable tips from a full-stack developer with 50+ projects.',
    url: 'https://marcfriedmanportfolio.com/blog/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Design & Development Blog | SEO, React & UX Tips | Marc Friedman',
    description: 'Expert insights on web design, React development, SEO strategy, and UX best practices. Actionable tips from a full-stack developer with 50+ projects.',
  },
};

export default function Page() {
  return <BlogPage />;
}
