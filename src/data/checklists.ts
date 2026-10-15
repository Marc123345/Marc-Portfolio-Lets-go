/**
 * The 2026 field-guide checklists, gated behind a Jotform each. Shared by the
 * Resources library, the service-page download sections and the post-submit
 * thank-you page, so a title, form or file only has to change here.
 *
 * PDFs and covers live in /public. Covers are page 1 of each PDF.
 */
export type Checklist = {
  slug: string;
  /** Jotform opt-in form. LeadMagnetFormEmbed downloads `pdf` on submit. */
  formId: string;
  title: string;
  titleAccent: string;
  checks: number;
  excerpt: string;
  /** Chapter titles, in order, as printed in the PDF. */
  chapters: string[];
  pdf: string;
  cover: string;
  coverAlt: string;
};

export const CHECKLISTS: Record<'seo' | 'geo' | 'aeo' | 'b2b', Checklist> = {
  seo: {
    slug: 'seo-checklist-2026',
    formId: '262872881116059',
    title: 'The SEO',
    titleAccent: 'Checklist',
    checks: 48,
    excerpt:
      '48 checks to get your site crawled, indexed, ranked and clicked on Google, on the same foundations Google says its AI Overviews and AI Mode rely on.',
    chapters: ['Crawl & index', 'Speed & experience', 'On-page', 'Content', 'Structured data', 'Authority', 'Measurement'],
    pdf: '/seo-checklist-2026.pdf',
    cover: '/images/resources/seo-checklist-2026-cover.webp',
    coverAlt: 'Cover of The SEO Checklist, 2026 edition',
  },
  geo: {
    slug: 'geo-checklist-2026',
    formId: '262873152034050',
    title: 'The GEO',
    titleAccent: 'Checklist',
    checks: 33,
    excerpt:
      '33 checks to get your brand named and recommended when buyers ask ChatGPT, Perplexity, Gemini, Claude or Copilot who to hire.',
    chapters: ['Brand as entity', 'Third-party mentions', 'Citable content', 'Category ownership', 'Prompt tracking', 'Technical base'],
    pdf: '/geo-checklist-2026.pdf',
    cover: '/images/resources/geo-checklist-2026-cover.webp',
    coverAlt: 'Cover of The GEO Checklist, 2026 edition',
  },
  aeo: {
    slug: 'aeo-checklist-2026',
    formId: '262872817522059',
    title: 'The AEO',
    titleAccent: 'Checklist',
    checks: 36,
    excerpt:
      "36 checks to get your pages picked as the answer in ChatGPT search, Perplexity, Claude, Copilot and Google's AI Overviews.",
    chapters: ['Access', 'Answer-first writing', 'Trust signals', 'Structured data', 'Formats engines quote', 'Measurement'],
    pdf: '/aeo-checklist-2026.pdf',
    cover: '/images/resources/aeo-checklist-2026-cover.webp',
    coverAlt: 'Cover of The AEO Checklist, 2026 edition',
  },
  b2b: {
    slug: 'b2b-checklist',
    formId: '261967965285073',
    title: 'The B2B Website',
    titleAccent: 'Checklist',
    checks: 47,
    excerpt:
      "47 checks for a B2B site that answers buyers' questions before the first call and turns the right visitors into qualified pipeline.",
    chapters: ['Positioning', 'Structure', 'Proof', 'Conversion', 'Content', 'Performance', 'Findability'],
    pdf: '/b2b-checklist.pdf',
    cover: '/images/resources/b2b-checklist-2026-cover.webp',
    coverAlt: 'Cover of The B2B Website Checklist, 2026 edition',
  },
};
