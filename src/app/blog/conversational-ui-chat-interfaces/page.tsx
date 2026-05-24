import type { Metadata } from 'next';
import BlogConversationalUI from '@/pages-ported/blog/conversational-ui-chat-interfaces';

const title = 'Conversational UI: When Chat Interfaces Help — and Hurt — Your UX';
const description =
  'When chat interfaces actually improve UX, the failure patterns to avoid, and a framework for deciding whether the chat box belongs on your product at all.';
const url = 'https://www.marcfriedmanportfolio.com/blog/conversational-ui-chat-interfaces/';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'article' },
  twitter: { card: 'summary_large_image', title, description },
};

export default function Page() {
  return <BlogConversationalUI />;
}
