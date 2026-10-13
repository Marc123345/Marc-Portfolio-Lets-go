import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const BASE = 'https://www.marcfriedmanportfolio.com';

/**
 * `lastModified` is the date that page's content actually changed, as
 * YYYY-MM-DD.
 *
 * It used to be `new Date()` for every entry, which stamped all 93 URLs with
 * the build time. That tells Google the entire site changed on every deploy,
 * which is false, and the documented consequence is that Google starts
 * ignoring the field altogether. Blog posts now carry their real publish
 * dates, sourced from the same dates shown on the blog index.
 *
 * Entries with no date omit `lastmod` entirely. That is valid, and it is more
 * honest than inventing a date: a missing value is ignored, a wrong one
 * teaches crawlers to distrust the whole file.
 */
type Entry = { path: string; priority: number; lastModified?: string };

const entries: Entry[] = [
  { path: '', priority: 1.0 },
  { path: 'work', priority: 0.9 },
  { path: 'work/case-studies', priority: 0.9 },
  { path: 'services', priority: 0.9 },
  { path: 'services/b2b-web-design', priority: 0.9 },
  { path: 'services/web-development', priority: 0.9 },
  { path: 'services/design', priority: 0.9 },
  { path: 'services/design-systems', priority: 0.9 },
  { path: 'services/startup-mvp', priority: 0.9 },
  { path: 'services/ai-integration', priority: 0.9 },
  { path: 'services/cybersecurity', priority: 0.9 },
  { path: 'services/seo-content-layout', priority: 0.9 },
  { path: 'services/aeo', priority: 0.9 },
  { path: 'services/geo', priority: 0.9 },
  { path: 'services/local-seo', priority: 0.9 },
  { path: 'services/maintenance-hosting', priority: 0.9 },
  { path: 'about', priority: 0.8 },
  { path: 'contact', priority: 0.8 },
  { path: 'press', priority: 0.7 },
  { path: 'blog', priority: 0.8 },
  { path: 'lab', priority: 0.6 },
  { path: 'free-website-analyzer', priority: 0.9 },
  { path: 'free-geo-audit', priority: 0.9 },
  { path: 'resources', priority: 0.8 },
  { path: 'resources/b2b-checklist', priority: 0.7 },
  { path: 'resources/b2b-website-mastery', priority: 0.7 },
  { path: 'tools', priority: 0.8 },
  { path: 'tools/website-analyzer', priority: 0.9 },
  { path: 'tools/roi-calculator', priority: 0.9 },
  { path: 'tools/project-timeline', priority: 0.7 },
  { path: 'longevity-clinics', priority: 0.95 },
  { path: 'biohacking-clinics', priority: 0.95 },
  { path: 'dental-audit', priority: 0.9 },

  // Case studies
  { path: 'work/case-studies/automarginx', priority: 0.8 },
  { path: 'work/case-studies/fleet-management', priority: 0.8 },
  { path: 'work/case-studies/mytube', priority: 0.8 },
  { path: 'work/case-studies/chad-le-clos', priority: 0.8 },
  { path: 'work/case-studies/videoleap', priority: 0.8 },
  { path: 'work/case-studies/friedman-cohen', priority: 0.8 },
  { path: 'work/case-studies/binns-media', priority: 0.8 },
  { path: 'work/case-studies/secure-annapolis', priority: 0.8 },
  { path: 'work/case-studies/untapped-africa', priority: 0.8 },
  { path: 'work/case-studies/ilight', priority: 0.8 },
  { path: 'work/case-studies/paving-leads', priority: 0.8 },
  { path: 'work/case-studies/tar-chip-paving', priority: 0.8 },
  { path: 'work/case-studies/h2h-marketing', priority: 0.8 },
  { path: 'work/case-studies/ask-africa', priority: 0.8 },
  { path: 'work/case-studies/sentinel-ds', priority: 0.8 },

  // Blog posts
  { path: 'blog/anti-design-texture-nostalgia-2026', priority: 0.8, lastModified: '2026-10-14' },
  { path: 'blog/microinteractions-motion-3d-2026', priority: 0.8, lastModified: '2026-10-14' },
  { path: 'blog/bold-typography-earthy-palettes-2026', priority: 0.8, lastModified: '2026-10-14' },
  { path: 'blog/best-nextjs-developers-b2b-service-businesses-2026', priority: 0.8, lastModified: '2026-10-14' },
  { path: 'blog/what-is-eeat', priority: 0.8, lastModified: '2026-10-14' },
  { path: 'blog/empty-isnt-minimal', priority: 0.8, lastModified: '2026-06-08' },
  { path: 'blog/css-eating-javascript-lunch', priority: 0.8, lastModified: '2026-06-02' },
  { path: 'blog/context-driven-design-decisions', priority: 0.8, lastModified: '2026-10-14' },
  { path: 'blog/ai-ready-design-systems', priority: 0.8, lastModified: '2026-10-14' },
  { path: 'blog/ai-native-ux-personalization', priority: 0.8, lastModified: '2026-10-14' },
  { path: 'blog/ai-as-codesigner', priority: 0.8, lastModified: '2026-10-14' },
  { path: 'blog/google-algorithm-update-2026', priority: 0.8, lastModified: '2026-01-22' },
  { path: 'blog/ai-imperfect-aesthetics', priority: 0.8, lastModified: '2026-01-21' },
  { path: 'blog/brutalism-anti-design-web-trends', priority: 0.8, lastModified: '2026-10-14' },
  { path: 'blog/ecommerce-ux-flaws-killing-conversions', priority: 0.8, lastModified: '2026-10-14' },
  { path: 'blog/contrast-balance-ui-design', priority: 0.8, lastModified: '2026-10-14' },
  { path: 'blog/ui-polish-visual-realism', priority: 0.8, lastModified: '2025-10-30' },
  { path: 'blog/getting-the-best-out-of-cloudflare', priority: 0.8, lastModified: '2025-09-16' },
  { path: 'blog/building-data-driven-design-systems', priority: 0.8, lastModified: '2025-04-01' },
  { path: 'blog/conversion-rate-optimization-techniques', priority: 0.8, lastModified: '2026-10-14' },
  { path: 'blog/designing-platforms-for-automotive-dealers', priority: 0.8, lastModified: '2026-10-14' },
  { path: 'blog/future-of-saas-web-design', priority: 0.8, lastModified: '2026-10-14' },
  { path: 'blog/mobile-first-design-principles', priority: 0.8, lastModified: '2025-01-15' },
  { path: 'blog/optimizing-websites-for-ai-crawlers', priority: 0.8, lastModified: '2025-06-11' },
  { path: 'blog/progressive-web-apps', priority: 0.8, lastModified: '2026-10-14' },
  { path: 'blog/ai-personalization-ecommerce', priority: 0.8, lastModified: '2026-10-14' },
  { path: 'blog/paving-contractor-website-design-guide', priority: 0.8, lastModified: '2026-10-14' },
  { path: 'blog/local-seo-for-paving-contractors', priority: 0.8, lastModified: '2025-03-28' },
  { path: 'blog/digital-marketing-asphalt-contractors', priority: 0.8, lastModified: '2026-10-14' },
  { path: 'blog/what-is-geo', priority: 0.8, lastModified: '2026-03-03' },
  { path: 'blog/what-is-aeo', priority: 0.8, lastModified: '2026-03-03' },
  { path: 'blog/minimal-fast-sustainable-ux', priority: 0.8, lastModified: '2026-10-14' },
  { path: 'blog/google-search-console-ai-reports', priority: 0.8, lastModified: '2026-02-19' },
  { path: 'blog/conversational-ui-chat-interfaces', priority: 0.8, lastModified: '2026-10-14' },
  { path: 'blog/neo-brutalism-design-guide', priority: 0.8, lastModified: '2026-10-14' },
  { path: 'blog/react-user-interface-builder', priority: 0.8, lastModified: '2026-07-16' },
  { path: 'blog/how-much-does-a-website-cost-2026', priority: 0.8, lastModified: '2026-07-21' },
  { path: 'blog/how-to-choose-a-website-designer-2026', priority: 0.8, lastModified: '2026-10-14' },
  { path: 'blog/seo-for-construction-companies', priority: 0.8, lastModified: '2026-10-14' },
  { path: 'blog/electronic-accessibility', priority: 0.8, lastModified: '2026-10-14' },
  { path: 'blog/website-not-ada-compliant', priority: 0.8, lastModified: '2026-10-14' },

  // Legal
  { path: 'privacy-policy', priority: 0.5 },
  { path: 'terms-and-conditions', priority: 0.5 },
  { path: 'cookies-policy', priority: 0.5 },
  { path: 'disclaimer', priority: 0.5 },
  { path: 'acceptable-use-policy', priority: 0.5 },
  { path: 'dmca', priority: 0.5 },
  { path: 'accessibility-statement', priority: 0.5 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return entries.map((e) => ({
    url: e.path ? `${BASE}/${e.path}/` : `${BASE}/`,
    ...(e.lastModified ? { lastModified: new Date(e.lastModified) } : {}),
    priority: e.priority,
  }));
}
