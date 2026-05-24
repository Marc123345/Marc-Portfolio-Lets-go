import type { Metadata } from 'next';
import BlogConversationalUI from '@/pages-ported/blog/conversational-ui-chat-interfaces';

const title = 'Conversational UI Design: When Chat Interfaces Help or Hurt UX';
const description =
  'Conversational UI design done right: when chat interfaces and conversational UI patterns improve UX, the failure modes to avoid, and a framework for deciding if your product needs a conversational interface at all.';
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
