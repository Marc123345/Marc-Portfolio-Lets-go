import type { Metadata } from 'next';
import BlogGoogleAlgo2026 from '@/pages-ported/blog/google-algorithm-update-2026';
import ServiceCallout from '@/components/ServiceCallout';

const title = 'Google Algorithm Update 2026: What Changed and What to Fix';
const description =
  'A plain breakdown of the 2026 Google algorithm updates: AI content signals, E-E-A-T, the ranking shifts most sites missed, and what to audit on your own pages.';
const url = 'https://www.marcfriedmanportfolio.com/blog/google-algorithm-update-2026/';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'article' },
  twitter: { card: 'summary_large_image', title, description },
};

export default function Page() {
  return (
    <>
      <BlogGoogleAlgo2026 />
      <ServiceCallout
        heading={"Lost rankings after the update?"}
        lead={"Most recoveries come from the same few fixes: clearer page structure, stronger proof of expertise and content that answers the query directly. I can audit and fix it."}
        links={[
          { href: "/tools/website-analyzer/", label: "Free website analyzer", blurb: "Run an instant SEO, speed and Core Web Vitals check on your site." },
          { href: "/services/seo-content-layout/", label: "SEO content and site structure", blurb: "Page structure and internal linking that search engines can read." },
          { href: "/services/aeo/", label: "Answer engine optimization", blurb: "Structured data and content built to be quoted by AI search." },
          { href: "/services/geo/", label: "Generative engine optimization", blurb: "Get cited in ChatGPT, Perplexity and Google AI answers." },
        ]}
      />
    </>
  );
}
