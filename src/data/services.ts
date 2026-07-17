import type { ArcCard } from '@/components/ArcSlider';

/**
 * The one service list. Feeds the /services arc, the home arc section, and the
 * per-service navigator, so the set and its copy can never drift between them.
 */
export const SERVICES: ArcCard[] = [
  {
    id: 'b2b-web-design',
    title: 'B2B Web Design',
    category: 'B2B',
    blurb:
      'A B2B web design agency building React & Next.js sites that generate qualified leads and drive pipeline.',
    href: '/services/b2b-web-design/',
    bullets: ['Lead-gen focused', 'Custom React + Next.js', '50+ across 3 continents'],
  },
  {
    id: 'web-development',
    title: 'Web Development',
    category: 'Build',
    blurb:
      'Custom-coded React sites that load in under 2 seconds, rank on Google, and convert.',
    href: '/services/web-development/',
    bullets: ['React + Next.js', 'CMS + integrations', '4–12 week builds'],
  },
  {
    id: 'design',
    title: 'UI/UX Design',
    category: 'Design',
    blurb:
      'Interfaces grounded in research, built to move the number that actually matters.',
    href: '/services/design/',
    bullets: ['Research → wireframe → ship', 'Conversion-focused', 'A11y AA'],
  },
  {
    id: 'design-systems',
    title: 'Design Systems',
    category: 'Systems',
    blurb:
      'Tokens, components, documentation. The opinionated rules that keep a product consistent.',
    href: '/services/design-systems/',
    bullets: ['Audit → tokens → ship', 'Storybook + docs', 'OSS-friendly'],
  },
  {
    id: 'startup-mvp',
    title: 'Startup MVP',
    category: 'Launch',
    blurb:
      'Ship the product that proves your thesis, fast. Built to raise, win first users, or kill an idea.',
    href: '/services/startup-mvp/',
    bullets: ['30-day launches', 'Investor-ready', 'Founder-built'],
  },
  {
    id: 'ai-integration',
    title: 'AI Integration',
    category: 'AI',
    blurb:
      'Real AI in real products, not demos. Measurable outcomes, production-ready architecture.',
    href: '/services/ai-integration/',
    bullets: ['LLM + RAG + agents', 'Evals + guardrails', 'Anthropic / OpenAI'],
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity UX',
    category: 'Security',
    blurb:
      'Security baked into the product, not bolted on after a breach. SOC dashboards, auth, access control.',
    href: '/services/cybersecurity/',
    bullets: ['OWASP-aware', 'SOC-grade UX', 'Pen-test friendly'],
  },
  {
    id: 'seo-content-layout',
    title: 'SEO Content & Layout',
    category: 'SEO',
    blurb:
      "Pages structured for search engines AND humans, content that ranks because it answers, layouts that convert.",
    href: '/services/seo-content-layout/',
    bullets: ['On-page SEO', 'Conversion layouts', 'Schema.org'],
  },
  {
    id: 'aeo',
    title: 'AEO',
    category: 'Answer Engines',
    blurb:
      'Get cited by ChatGPT, Perplexity, Claude, and Google AI Overviews. Structured content AI engines can extract.',
    href: '/services/aeo/',
    bullets: ['ChatGPT + Perplexity', 'Schema-first', 'Citation tracking'],
  },
  {
    id: 'geo',
    title: 'GEO',
    category: 'Generative Search',
    blurb:
      'Show up inside AI-generated answers across LLMs. The new SEO playbook for an AI-first search era.',
    href: '/services/geo/',
    bullets: ['LLM-first content', 'Brand-as-entity', 'Cross-engine tracking'],
  },
  {
    id: 'local-seo',
    title: 'Local SEO',
    category: 'Local',
    blurb:
      'Dominate Google Maps, win the Local 3-Pack, turn your Google Business Profile into your best landing page.',
    href: '/services/local-seo/',
    bullets: ['GBP optimisation', 'Local 3-Pack', 'NAP + reviews'],
  },
  {
    id: 'maintenance-hosting',
    title: 'Maintenance & Hosting',
    category: 'Care',
    blurb:
      'Your site kept fast, secure, and online, by the same person who built it. Cloudflare-grade hosting handled.',
    href: '/services/maintenance-hosting/',
    bullets: ['Same-day fixes', 'Cloudflare hosting', 'Monthly perf report'],
  },
];
