import type { Metadata } from 'next';
import BlogBrutalism from '@/pages-ported/blog/brutalism-anti-design-web-trends';
import ServiceCallout from '@/components/ServiceCallout';

const title = 'Brutalist Web Design: Digital Brutalism & Anti-Design Trends';
const description =
  'What digital brutalism is and why designers are dropping polished UI for stark grids, exposed structure, raw type, and deliberate imperfection in web design.';
const url = 'https://www.marcfriedmanportfolio.com/blog/brutalism-anti-design-web-trends/';

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
      <BlogBrutalism />
      <ServiceCallout
        heading={"Thinking about a brutalist redesign?"}
        lead={"Raw grids and exposed structure only work if the site stays fast, usable and easy to scan. Here is how I can help put that into practice."}
        links={[
          { href: "/services/design/", label: "UI/UX design services", blurb: "Distinctive interface design that keeps usability and accessibility intact." },
          { href: "/services/web-development/", label: "Custom web development", blurb: "Hand-built React and Next.js sites with fast Core Web Vitals." },
          { href: "/blog/neo-brutalism-design-guide/", label: "Neo brutalism design guide", blurb: "The practical follow-up: borders, shadows, color and type rules." },
          { href: "/work/", label: "Portfolio", blurb: "50+ shipped projects across the US, Europe and Africa." },
        ]}
      />
    </>
  );
}
