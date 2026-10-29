import type { Metadata } from 'next';
import BlogMachineExperience from '@/pages-ported/blog/machine-experience-mx-lightweight-frontends';

const title = 'Machine Experience (MX): Why Lighter Front Ends Work Better for People and Crawlers';
const description =
  'Designing for the software that reads your site as well as the people who visit it: server-rendered HTML, CSS before JavaScript, fast loading and accessibility.';
const url = 'https://www.marcfriedmanportfolio.com/blog/machine-experience-mx-lightweight-frontends/';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'article' },
  twitter: { card: 'summary_large_image', title, description },
};

export default function Page() {
  return <BlogMachineExperience />;
}
