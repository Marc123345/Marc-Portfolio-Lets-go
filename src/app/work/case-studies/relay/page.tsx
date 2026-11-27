import type { Metadata } from 'next';
import RelayPage from '@/pages-ported/work/case-studies/RelayPage';
import study from '@/data/case-studies/relay.json';

export const metadata: Metadata = {
  title: { absolute: 'Relay | Exercise Control UX Case Study | Marc Friedman' },
  description: study.lead,
  alternates: { canonical: 'https://www.marcfriedmanportfolio.com/work/case-studies/relay/' },
  openGraph: { type: 'article', title: 'Relay | Exercise Control UX Case Study', description: study.lead, images: ['/images/case-studies/relay/cover.jpg'] },
};
export default RelayPage;
