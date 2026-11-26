import type { Metadata } from 'next';
import BlogNeoBrutalismGuide from '@/pages-ported/blog/neo-brutalism-design-guide';
import ServiceCallout from '@/components/ServiceCallout';

const title = 'Neo Brutalism in Modern Design: A Complete Guide for Bold, High-Contrast Interfaces';
const seoTitle = 'Neo Brutalism Web Design: Traits, Colors, Fonts & Examples';
const description =
  'A practical guide to neo brutalism in web and UI design: thick borders, hard shadows, loud color palettes, typography, CSS tips, accessibility, and real examples.';
const url = 'https://www.marcfriedmanportfolio.com/blog/neo-brutalism-design-guide/';

export const metadata: Metadata = {
  title: { absolute: seoTitle },
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'article' },
  twitter: { card: 'summary_large_image', title, description },
};

export default function Page() {
  return (
    <>
      <BlogNeoBrutalismGuide />
      <ServiceCallout
        heading={"Want a bold interface that still converts?"}
        lead={"Neo brutalism works when the loud visuals sit on a clear structure. I design and build high-contrast interfaces and design systems for startups and B2B teams."}
        links={[
          { href: "/services/design/", label: "UI/UX design services", blurb: "Interface design with strong hierarchy, from brand to production screens." },
          { href: "/services/design-systems/", label: "Design systems", blurb: "Tokens, components and docs so a bold style stays consistent as you scale." },
          { href: "/services/startup-mvp/", label: "Startup MVP development", blurb: "A designed and working MVP in about 30 days, from $4,999." },
          { href: "/work/case-studies/silicon-atlas/", label: "Case study: Silicon Atlas", blurb: "A dense engineering dashboard designed and built in React." },
        ]}
      />
    </>
  );
}
