/*
 * Which case files are examples of which service.
 * A project can sit under several services. Only list a project where its
 * case study shows that kind of work.
 */
export type WorkService = {
  key: string;
  label: string;
  href: string;
  blurb: string;
  projects: string[]; // project titles, as in WorkPage
};

export const WORK_SERVICES: WorkService[] = [
  {
    key: 'seo',
    label: 'SEO & Local SEO',
    href: '/services/local-seo/',
    blurb: 'Sites built to rank and make the phone ring: fast pages, clean structure, local search.',
    projects: ['Paving Leads', 'A Secure Annapolis'],
  },
  {
    key: 'design-systems',
    label: 'Design Systems',
    href: '/services/design-systems/',
    blurb: 'Tokens, components and rules that keep a product consistent as the team grows.',
    projects: ['Sentinel DS', 'AutoMarginX', 'Fleet Management', 'MyTube'],
  },
  {
    key: 'mvp',
    label: 'Startup MVP',
    href: '/services/startup-mvp/',
    blurb: 'Brand, product and pitch deck for founders who need a working first version.',
    projects: ['iLight Care'],
  },
  {
    key: 'ai',
    label: 'AI Integration',
    href: '/services/ai-integration/',
    blurb: 'AI features people actually use: pricing recommendations, tagging, editing tools.',
    projects: ['iLight Care', 'MyTube', 'Videoleap', 'AutoMarginX'],
  },
  {
    key: 'b2b',
    label: 'B2B Web Design',
    href: '/services/b2b-web-design/',
    blurb: 'Websites for companies that sell to other companies.',
    projects: ['Friedman & Cohen', 'Ask Africa', 'H2H Marketing'],
  },
  {
    key: 'web',
    label: 'Websites & Brands',
    href: '/services/web-development/',
    blurb: 'Custom-coded marketing sites with the brand built in.',
    projects: ['Binns Media Group', 'Untapped Africa', 'Chad Le Clos Swimming', 'Tar & Chip Paving', 'H2H Marketing'],
  },
  {
    key: 'product',
    label: 'Product UX',
    href: '/services/design/',
    blurb: 'Dashboards and app flows for people who use the product every day.',
    projects: ['AutoMarginX', 'Fleet Management', 'Videoleap', 'MyTube'],
  },
  {
    key: 'security',
    label: 'Cybersecurity UX',
    href: '/services/cybersecurity/',
    blurb: 'Interfaces for security teams working under pressure.',
    projects: ['Sentinel DS'],
  },
];
