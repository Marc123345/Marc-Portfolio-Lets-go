import type { Metadata } from 'next';
import BlogAiCopilotUx from '@/pages-ported/blog/ai-copilot-ux-transparent-optional';

const title = 'AI Copilots in Web Design: Transparent, Optional and Easy to Ignore';
const description =
  'How to add AI help to a website or product without it taking over: clear labels, sources, easy dismissal and a working non-AI path.';
const url = 'https://www.marcfriedmanportfolio.com/blog/ai-copilot-ux-transparent-optional/';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'article' },
  twitter: { card: 'summary_large_image', title, description },
};

export default function Page() {
  return <BlogAiCopilotUx />;
}
