import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const BASE = 'https://marcfriedmanportfolio.com';

type Entry = { path: string; priority: number };

const entries: Entry[] = [
  { path: '', priority: 1.0 },
  { path: 'work', priority: 0.9 },
  { path: 'work/case-studies', priority: 0.9 },
  { path: 'services', priority: 0.9 },
  { path: 'services/web-development', priority: 0.9 },
  { path: 'services/design', priority: 0.9 },
  { path: 'services/design-systems', priority: 0.9 },
  { path: 'services/startup-mvp', priority: 0.9 },
  { path: 'services/saas', priority: 0.9 },
  { path: 'services/mentorship', priority: 0.9 },
  { path: 'services/ai-integration', priority: 0.9 },
  { path: 'services/cybersecurity', priority: 0.9 },
  { path: 'services/fractional-cmo', priority: 0.9 },
  { path: 'services/external-web-department', priority: 0.9 },
  { path: 'services/impact-story-site', priority: 0.9 },
  { path: 'services/premium-web-package', priority: 0.9 },
  { path: 'services/monthly-retainer', priority: 0.9 },
  { path: 'about', priority: 0.8 },
  { path: 'contact', priority: 0.8 },
  { path: 'press', priority: 0.7 },
  { path: 'blog', priority: 0.8 },

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

  // Blog posts
  { path: 'blog/context-driven-design-decisions', priority: 0.8 },
  { path: 'blog/ai-ready-design-systems', priority: 0.8 },
  { path: 'blog/ai-native-ux-personalization', priority: 0.8 },
  { path: 'blog/ai-as-codesigner', priority: 0.8 },
  { path: 'blog/google-algorithm-update-2026', priority: 0.8 },
  { path: 'blog/ai-imperfect-aesthetics', priority: 0.8 },
  { path: 'blog/brutalism-anti-design-web-trends', priority: 0.8 },
  { path: 'blog/ecommerce-ux-flaws-killing-conversions', priority: 0.8 },
  { path: 'blog/contrast-balance-ui-design', priority: 0.8 },
  { path: 'blog/ui-polish-visual-realism', priority: 0.8 },
  { path: 'blog/getting-the-best-out-of-cloudflare', priority: 0.8 },
  { path: 'blog/building-data-driven-design-systems', priority: 0.8 },
  { path: 'blog/conversion-rate-optimization-techniques', priority: 0.8 },
  { path: 'blog/designing-platforms-for-automotive-dealers', priority: 0.8 },
  { path: 'blog/future-of-saas-web-design', priority: 0.8 },
  { path: 'blog/mobile-first-design-principles', priority: 0.8 },
  { path: 'blog/optimizing-websites-for-ai-crawlers', priority: 0.8 },
  { path: 'blog/progressive-web-apps', priority: 0.8 },
  { path: 'blog/ai-personalization-ecommerce', priority: 0.8 },
  { path: 'blog/paving-contractor-website-design-guide', priority: 0.8 },
  { path: 'blog/local-seo-for-paving-contractors', priority: 0.8 },
  { path: 'blog/digital-marketing-asphalt-contractors', priority: 0.8 },
  { path: 'blog/what-is-geo', priority: 0.8 },
  { path: 'blog/what-is-aeo', priority: 0.8 },
  { path: 'blog/minimal-fast-sustainable-ux', priority: 0.8 },
  { path: 'blog/google-search-console-ai-reports', priority: 0.8 },
  { path: 'blog/conversational-ui-chat-interfaces', priority: 0.8 },

  // Legal
  { path: 'privacy-policy', priority: 0.5 },
  { path: 'terms-and-conditions', priority: 0.5 },
  { path: 'cookies-policy', priority: 0.5 },
  { path: 'disclaimer', priority: 0.5 },
  { path: 'acceptable-use-policy', priority: 0.5 },
  { path: 'dmca', priority: 0.5 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return entries.map((e) => ({
    url: e.path ? `${BASE}/${e.path}` : BASE,
    lastModified,
    priority: e.priority,
  }));
}
