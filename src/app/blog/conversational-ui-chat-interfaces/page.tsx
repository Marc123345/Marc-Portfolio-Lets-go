import type { Metadata } from 'next';
import BlogConversationalUI from '@/pages-ported/blog/conversational-ui-chat-interfaces';

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.marcfriedmanportfolio.com/blog/conversational-ui-chat-interfaces/' },
};

export default function Page() {
  return <BlogConversationalUI />;
}
