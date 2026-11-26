import type { Metadata } from 'next';
import AIIntegrationPage from '@/pages-ported/services/AIIntegrationPage';
import { AI_FAQS, faqSchema } from '@/content/serviceFaqs';

const title = 'AI Integration Services | OpenAI, Claude & RAG Development';
const description =
  'AI integration services for websites and apps: OpenAI and Claude integration, RAG on your own data, AI chatbots and agents, with evals and guardrails for production.';
const url = 'https://www.marcfriedmanportfolio.com/services/ai-integration/';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'website' },
  twitter: { card: 'summary_large_image', title, description },
};

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'AI Integration Services',
      serviceType: 'AI and LLM integration',
      url,
      description,
      areaServed: [
        { '@type': 'Country', name: 'United States' },
        { '@type': 'Place', name: 'Europe' },
      ],
      provider: {
        '@type': 'Organization',
        name: 'Marc Friedman Web Design',
        url: 'https://www.marcfriedmanportfolio.com',
        founder: { '@type': 'Person', name: 'Marc Friedman' },
      },
    },
    faqSchema(AI_FAQS),
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <AIIntegrationPage />
    </>
  );
}
