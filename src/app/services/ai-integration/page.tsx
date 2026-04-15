import type { Metadata } from 'next';
import AIIntegrationPage from '@/pages-ported/services/AIIntegrationPage';

export const metadata: Metadata = {
  title: { absolute: 'AI Integration Services | OpenAI, Google Cloud AI & AWS | Marc Friedman' },
  description: 'Custom AI integration for websites and apps. Chatbots, recommendation engines, predictive analytics. OpenAI, Google Cloud AI, AWS SageMaker expertise.',
  alternates: { canonical: 'https://marcfriedmanportfolio.com/services/ai-integration/' },
  openGraph: {
    title: 'AI Integration Services | OpenAI, Google Cloud AI & AWS | Marc Friedman',
    description: 'Custom AI integration for websites and apps. Chatbots, recommendation engines, predictive analytics. OpenAI, Google Cloud AI, AWS SageMaker expertise.',
    url: 'https://marcfriedmanportfolio.com/services/ai-integration/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Integration Services | OpenAI, Google Cloud AI & AWS | Marc Friedman',
    description: 'Custom AI integration for websites and apps. Chatbots, recommendation engines, predictive analytics. OpenAI, Google Cloud AI, AWS SageMaker expertise.',
  },
};

export default function Page() {
  return <AIIntegrationPage />;
}
