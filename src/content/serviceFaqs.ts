/* Single source for service-page FAQs. The visible FAQ section and the
   FAQPage JSON-LD both read from here, so they can never drift apart. */

export type FAQ = { q: string; a: string };

export const MVP_FAQS: FAQ[] = [
  {
    q: 'How much does MVP development cost?',
    a: 'Pricing is fixed up front. A two-week Validation Sprint (brand, marketing site, clickable prototype, waitlist and analytics) starts at $4,999. A full production MVP built in about 30 days starts at $14,999. MVP + Fundraise, which adds a pitch deck, financial model and investor demo polish, starts at $24,999. There is no hourly billing, so scope changes are agreed before they cost you anything.',
  },
  {
    q: 'How long does it take to build an MVP?',
    a: 'A Validation Sprint takes two weeks. A full MVP follows a four-week plan: one week of strategy, one week of design, two weeks of build, then a launch week with 30 days of hypercare. The timeline holds because the scope is cut down to the one hypothesis the product has to prove.',
  },
  {
    q: 'What is the difference between an MVP and a prototype?',
    a: 'A prototype shows how a product would work. It is clickable, but nothing behind it is real. An MVP is a working product with real accounts, real data and real payments, small enough to ship fast and real enough that users can pay for it. Use a prototype to test demand and an MVP to test whether people keep using it.',
  },
  {
    q: 'What tech stack do you use for MVPs?',
    a: 'Most MVPs are built in React with a Node backend and a PostgreSQL database, with auth, payments and an admin panel included. It is hosted, monitored and wired to analytics from day one, so the MVP can grow into the real product instead of being thrown away.',
  },
  {
    q: 'What happens after the MVP launches?',
    a: 'Every full MVP includes 30 days of hypercare. I watch the metrics, fix anything that breaks and help onboard your first users. After that you can keep iterating with me or hand the codebase to your own team.',
  },
  {
    q: 'Why hire a solo MVP developer instead of an MVP development company?',
    a: 'With a larger MVP development agency, your project is usually handed between a salesperson, a designer and a dev team. Here one person scopes, designs and builds it, so nothing gets lost in handoffs and decisions take hours, not weeks. I co-founded a SaaS company that went through the AWS startup accelerator, so the advice comes from having been the founder too.',
  },
];

export const AI_FAQS: FAQ[] = [
  {
    q: 'What do AI integration services include?',
    a: 'Four things, scoped to your product: OpenAI or other LLM integration with retrieval (RAG) grounded in your own data, workflow automation that takes over repetitive work, AI chatbots and agents that take real actions with human checkpoints, and the prompt versioning and evaluation setup that keeps the feature reliable as models change.',
  },
  {
    q: 'Which AI models and platforms do you work with?',
    a: 'OpenAI, Anthropic Claude, Google Gemini and open-source models you can run yourself. The model is chosen per task, based on accuracy, cost, speed and data-privacy requirements, and the integration is built so you can switch models later without rewriting the feature.',
  },
  {
    q: 'What is RAG and do I need it?',
    a: 'Retrieval-augmented generation (RAG) lets the model look up answers in your documents, database or help center before it responds, and cite where each answer came from. You need it whenever the AI has to answer from your company knowledge rather than general knowledge, for example in support bots, internal search or document Q&A.',
  },
  {
    q: 'How do you stop AI features from making things up?',
    a: 'By grounding answers in your data, requiring citations, adding guardrails that block out-of-scope requests, and running automated evaluations against a test set before every release. For high-stakes output, a person reviews and approves it before it reaches a customer.',
  },
  {
    q: 'Can you add AI to an existing website or app?',
    a: 'Yes, most projects are integrations into an existing product rather than new builds. The work starts with one task and one success metric, proves it with a small prototype, then hardens it with monitoring, cost tracking and evaluations before it goes to production.',
  },
];

export const B2B_EXTRA_FAQS: FAQ[] = [
  {
    q: 'Do you design websites for manufacturing and industrial companies?',
    a: 'Yes. Manufacturing and industrial website design is one of our core areas. These buyers research specs, certifications and capabilities long before they call, so the site is structured around product and capability pages, downloadable spec sheets and RFQ forms that reach the right person. For one manufacturer this lifted web traffic by 1,400% and produced 120+ leads in 90 days.',
  },
  {
    q: 'How is B2B website design different from a regular business website?',
    a: 'B2B buyers are usually a committee with a long sales cycle, so the website has to serve engineers, procurement and executives at different stages. That means clear positioning above the fold, proof such as case studies and certifications, content for each stage of research, and lead capture that feeds your CRM rather than a generic contact form.',
  },
];

export function faqSchema(items: FAQ[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}
