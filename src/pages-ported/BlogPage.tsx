"use client";

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import {
  ChapterMarker,
  ServiceMarquee,
  ServiceColophon,
  SERIF,
} from '@/components/ServiceEditorial';

const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: "Marc Friedman's Journal",
  description:
    'Notes on design, development, AI, and the edges in between.',
  url: 'https://www.marcfriedmanportfolio.com/blog',
  author: {
    '@type': 'Person',
    name: 'Marc Friedman',
    jobTitle: 'Full Stack Designer & Developer',
    url: 'https://www.marcfriedmanportfolio.com',
  },
};

type Post = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  categories: string[];
};

const posts: Post[] = [
  {
    id: 'conversational-ui-chat-interfaces',
    title: 'Conversational UI: When Chat Interfaces Help — and When They Hurt — Your UX',
    excerpt:
      'A deep dive into conversational UI design: how chat-style interfaces and AI assistants work, when they genuinely improve user experience, and the critical patterns that make them fail.',
    date: 'April 13, 2026',
    readTime: '17 min read',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=2000&q=80',
    categories: ['UX', 'AI', 'Design'],
  },
  {
    id: 'what-is-geo',
    title: 'What Is GEO? Generative Engine Optimization Explained for Modern Search',
    excerpt:
      'Learn what Generative Engine Optimization (GEO) is, how it differs from SEO and AEO, and how to optimize your content for AI-generated search results.',
    date: 'March 3, 2026',
    readTime: '20 min read',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=2000&q=80',
    categories: ['SEO', 'AI', 'GEO'],
  },
  {
    id: 'what-is-aeo',
    title: 'What Is AEO? Answer Engine Optimization Explained for 2026 and Beyond',
    excerpt:
      'Why optimizing for AI-powered answer engines like ChatGPT, Perplexity, and Google AI Overviews is essential for modern visibility.',
    date: 'March 3, 2026',
    readTime: '18 min read',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=2000&q=80',
    categories: ['SEO', 'AI', 'AEO'],
  },
  {
    id: 'minimal-fast-sustainable-ux',
    title:
      'Minimal, Fast, and Sustainable UX: Designing for Performance, Calm, and the Planet',
    excerpt:
      'How leaner layouts, fewer heavy scripts, and green UX considerations shape calmer, faster, more sustainable experiences.',
    date: 'February 26, 2026',
    readTime: '16 min read',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2000&q=80',
    categories: ['UX', 'Performance', 'Sustainability'],
  },
  {
    id: 'google-search-console-ai-reports',
    title:
      'Stop Guessing in GSC: A Practical Guide to AI-Powered Configuration for SEOs',
    excerpt:
      'Google just added AI-powered configuration to Search Console. Learn to prompt-build reports, diagnose drops, and spot AI search opportunities.',
    date: 'February 19, 2026',
    readTime: '14 min read',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2000&q=80',
    categories: ['SEO', 'Google', 'AI'],
  },
  {
    id: 'context-driven-design-decisions',
    title:
      "Why Context Matters: A Junior Designer's Guide to Making Better Design Decisions",
    excerpt:
      'Why understanding context is the most critical skill for junior UX/UI designers and how to develop contextual thinking.',
    date: 'February 4, 2026',
    readTime: '12 min read',
    image: '/generated-1770282657147-xuhu1.png',
    categories: ['UX', 'Design', 'Education'],
  },
  {
    id: 'ai-ready-design-systems',
    title: 'AI-Ready Design Systems: Building for Human-AI Collaboration',
    excerpt:
      'Structure design tokens, components, and content so AI tools can generate on-brand layouts, copy, and variants reliably.',
    date: 'February 3, 2026',
    readTime: '18 min read',
    image: '/generated-1770282657147-xuhu1.png',
    categories: ['AI', 'Design Systems', 'Development'],
  },
  {
    id: 'ai-native-ux-personalization',
    title: 'AI-Native UX and Personalization: Designing Experiences That Adapt',
    excerpt:
      'The paradigm shift from AI features to AI-native experiences designed around adaptive, personalized intelligence.',
    date: 'January 27, 2026',
    readTime: '18 min read',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=2000&q=80',
    categories: ['AI', 'UX', 'Personalization'],
  },
  {
    id: 'ai-as-codesigner',
    title: 'AI as Co-Designer: Moving Beyond Tools to True Creative Partnership',
    excerpt:
      'AI is evolving from a simple tool into a creative partner. How to collaborate with AI as a co-designer, and what makes that partnership work.',
    date: 'January 22, 2026',
    readTime: '15 min read',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80',
    categories: ['AI', 'Design', 'Collaboration'],
  },
  {
    id: 'google-algorithm-update-2026',
    title: "Google's 2026 Algorithm Update: Essential Strategies to Rank in the AI-First Era",
    excerpt:
      'Comprehensive guide to the latest algorithm update: AI-generated content detection, E-E-A-T, UX metrics, and what to do about them.',
    date: 'January 22, 2026',
    readTime: '18 min read',
    image: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?auto=format&fit=crop&w=2000&q=80',
    categories: ['SEO', 'Google', 'Algorithm'],
  },
  {
    id: 'ai-imperfect-aesthetics',
    title: 'AI + Human Imperfection: The New Aesthetic Revolution',
    excerpt:
      'How designers are layering hand-made, tactile, and deliberately messy aesthetics on AI-generated content to reject generic perfection.',
    date: 'January 21, 2026',
    readTime: '14 min read',
    image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=2000&q=80',
    categories: ['AI', 'Design', 'Trends'],
  },
  {
    id: 'brutalism-anti-design-web-trends',
    title: 'Brutalism & Anti-Design: The Raw, Unpolished Web Design Revolution',
    excerpt:
      'How raw grids, monochrome palettes, and imperfect layouts create authentic, human-centered digital experiences.',
    date: 'December 29, 2025',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=2000&q=80',
    categories: ['Design', 'Trends', 'Brutalism'],
  },
  {
    id: 'ai-personalization-ecommerce',
    title: 'The Rise of AI-Driven Personalization in Ecommerce',
    excerpt:
      'Practical strategies for implementing AI personalization in ecommerce — with real case studies and privacy considerations.',
    date: 'November 5, 2025',
    readTime: '16 min read',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=2000&q=80',
    categories: ['AI', 'Ecommerce', 'Personalization'],
  },
  {
    id: 'ui-polish-visual-realism',
    title: 'UI Polish: Mastering Visual Realism in Modern Interface Design',
    excerpt:
      'The art of UI polish through visual realism, lighting metaphors, and design choices inspired by physical materials.',
    date: 'October 30, 2025',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=2000&q=80',
    categories: ['Design', 'UI/UX'],
  },
  {
    id: 'ecommerce-ux-flaws-killing-conversions',
    title: '3 UX Flaws That Kill eCommerce Conversions — Backed by Data',
    excerpt:
      'Three critical UX mistakes costing eCommerce businesses millions. Data-backed solutions to boost conversions by up to 400%.',
    date: 'October 6, 2025',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=2000&q=80',
    categories: ['eCommerce', 'UX', 'Conversion'],
  },
  {
    id: 'getting-the-best-out-of-cloudflare',
    title: 'Getting the Best Out of Cloudflare for Your Website',
    excerpt:
      'Maximize Cloudflare with advanced optimization, security configurations, and performance enhancements.',
    date: 'September 16, 2025',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80',
    categories: ['Performance', 'CDN', 'Security'],
  },
  {
    id: 'progressive-web-apps',
    title: 'Progressive Web Apps: The Best of Both Worlds',
    excerpt:
      'How PWAs combine the best of websites and native apps to reduce development costs and delight users.',
    date: 'June 15, 2025',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=2000&q=80',
    categories: ['PWA', 'Mobile', 'Development'],
  },
  {
    id: 'optimizing-websites-for-ai-crawlers',
    title: 'Optimizing Your Website for AI Crawlers',
    excerpt:
      'As AI becomes more integrated into search, how to optimize your site for AI crawlers and improve visibility.',
    date: 'June 11, 2025',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=2000&q=80',
    categories: ['SEO', 'AI', 'Technical'],
  },
  {
    id: 'future-of-saas-web-design',
    title: 'The Future of SaaS Web Design: Aesthetics Meets Functionality',
    excerpt:
      'The evolving landscape of SaaS web design and how it’s shaping the future of digital products.',
    date: 'May 15, 2025',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=2000&q=80',
    categories: ['Design', 'SaaS', 'UX'],
  },
  {
    id: 'paving-contractor-website-design-guide',
    title: 'Website Design Guide for Paving Contractors',
    excerpt:
      'Essential website design strategies for paving contractors — showcase work, build trust, convert visitors.',
    date: 'April 15, 2025',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?auto=format&fit=crop&w=2000&q=80',
    categories: ['Web Design', 'Contractors', 'Conversion'],
  },
  {
    id: 'building-data-driven-design-systems',
    title: 'Building Data-Driven Design Systems for Scale',
    excerpt:
      'How to create and maintain scalable design systems that evolve with your product needs.',
    date: 'April 1, 2025',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?auto=format&fit=crop&w=2000&q=80',
    categories: ['Design Systems', 'UX', 'Development'],
  },
  {
    id: 'local-seo-for-paving-contractors',
    title: 'Local SEO for Paving Contractors: Dominate Your Market in 2025',
    excerpt:
      'Master local SEO strategies specifically for paving contractors — rank higher in Google Maps and attract more local customers.',
    date: 'March 28, 2025',
    readTime: '15 min read',
    image: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&w=2000&q=80',
    categories: ['SEO', 'Contractors', 'Local Marketing'],
  },
  {
    id: 'designing-platforms-for-automotive-dealers',
    title: 'From Concept to Profit: Designing Platforms That Empower Automotive Dealers',
    excerpt:
      'The automotive industry is no stranger to disruption — a look at how dealers operate and thrive in the new landscape.',
    date: 'March 30, 2025',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=2000&q=80',
    categories: ['Case Study', 'Automotive', 'UX'],
  },
  {
    id: 'digital-marketing-asphalt-contractors',
    title: 'Digital Marketing Strategy for Asphalt Contractors',
    excerpt:
      'Proven digital marketing strategies for paving and asphalt contractors — attract customers, grow revenue.',
    date: 'February 20, 2025',
    readTime: '14 min read',
    image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=2000&q=80',
    categories: ['Marketing', 'Contractors', 'Lead Generation'],
  },
  {
    id: 'conversion-rate-optimization-techniques',
    title: '7 Proven Conversion Rate Optimization Techniques',
    excerpt:
      'Actionable strategies to boost your website conversion rates and drive business growth.',
    date: 'February 1, 2025',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2000&q=80',
    categories: ['Conversion', 'Marketing', 'UX'],
  },
  {
    id: 'mobile-first-design-principles',
    title: 'Mobile-First Design Principles Every Developer Should Know',
    excerpt:
      'Essential principles of mobile-first design to create responsive, user-friendly websites.',
    date: 'January 15, 2025',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=2000&q=80',
    categories: ['Mobile', 'Design', 'Development'],
  },
  {
    id: 'contrast-balance-ui-design',
    title: 'Contrast & Balance: The Foundation of Accessible UI Design',
    excerpt:
      'Foreground vs background clarity, stroke & surface contrast, and managing contrast across light and dark themes.',
    date: 'December 10, 2024',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=2000&q=80',
    categories: ['Design', 'Accessibility', 'UI/UX'],
  },
];

const allCategories = [
  'All',
  ...Array.from(new Set(posts.flatMap((p) => p.categories))),
];

export default function BlogPage() {
  const [filter, setFilter] = useState<string>('All');

  const visible = useMemo(
    () =>
      filter === 'All' ? posts : posts.filter((p) => p.categories.includes(filter)),
    [filter],
  );

  const hero = visible[0];
  const secondary = visible.slice(1, 5);
  const archive = visible.slice(5);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      {/* ===================== MASTHEAD ===================== */}
      <section className="relative bg-black overflow-hidden pt-28 pb-16 px-6 lg:px-12">
        <div
          className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.5'/></svg>\")",
          }}
        />
        <div className="absolute top-1/3 left-[-10%] w-[700px] h-[700px] bg-[#A3D1FF]/8 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative">
          <ChapterMarker number="Journal · Vol. 01" label="Notes · 2024–26" />

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs font-mono uppercase tracking-[0.35em] text-[#A3D1FF] mb-6"
          >
            — {posts.length} essays on craft
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-white leading-[0.9] tracking-[-0.04em] mb-8 max-w-5xl"
            style={{
              fontFamily: SERIF,
              fontSize: 'clamp(3rem, 10vw, 9rem)',
              fontWeight: 400,
            }}
          >
            Field <em className="italic text-[#A3D1FF]">notes.</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-xl md:text-2xl text-white/70 max-w-2xl leading-snug"
          >
            Essays on design, development, AI, and the edges in between. Written while
            shipping.
          </motion.p>
        </div>
      </section>

      <ServiceMarquee
        phrases={[
          'Design · Systems',
          'AI · GEO · AEO',
          'SEO · Performance',
          'UX Writing',
          'Product Craft',
          'Written while shipping',
        ]}
      />

      {/* ===================== FILTER BAR ===================== */}
      <section className="sticky top-0 z-30 bg-black/90 backdrop-blur-md border-y border-white/10 py-4 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap scrollbar-hide">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 mr-2 shrink-0">
              — Filter
            </span>
            {allCategories.map((cat) => {
              const isActive = cat === filter;
              return (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-3 py-1.5 text-[11px] font-mono uppercase tracking-[0.2em] border transition-all shrink-0 ${
                    isActive
                      ? 'bg-white text-black border-white'
                      : 'text-white/60 border-white/15 hover:border-white/40 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================== FEATURED HERO SPREAD ===================== */}
      {hero && (
        <section className="relative bg-black py-20 md:py-28 px-6 lg:px-12 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <ChapterMarker number="01" label="On the cover" />

            <AnimatePresence mode="wait">
              <motion.article
                key={hero.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link href={`/blog/${hero.id}`} className="group block">
                  <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-16 items-center">
                    {/* Image */}
                    <div className="relative aspect-[16/11] overflow-hidden bg-[#1b1b1b]">
                      <img
                        src={hero.image}
                        alt={hero.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-[1000ms]"
                      />
                      <div className="absolute top-5 left-5 flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.3em] text-white/85">
                        <span className="w-6 h-[1px] bg-[#A3D1FF]" />
                        Latest
                      </div>
                      <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-[10px] font-mono uppercase tracking-[0.3em] text-white/70">
                        <span>{hero.categories[0]}</span>
                        <span>{hero.readTime}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-[0.35em] text-[#A3D1FF] mb-4">
                        {hero.date} — {hero.readTime}
                      </p>
                      <h2
                        className="text-white leading-[1.0] tracking-[-0.02em] mb-6 group-hover:text-[#A3D1FF] transition-colors duration-500"
                        style={{
                          fontFamily: SERIF,
                          fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                          fontWeight: 500,
                        }}
                      >
                        {hero.title}
                      </h2>
                      <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-xl">
                        {hero.excerpt}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-8">
                        {hero.categories.map((c) => (
                          <span
                            key={c}
                            className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-[0.2em] border border-white/15 text-white/60"
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                      <div className="inline-flex items-center gap-2 text-white font-medium border-b border-white/30 group-hover:border-[#A3D1FF] group-hover:text-[#A3D1FF] transition-colors pb-1">
                        Read the essay
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            </AnimatePresence>
          </div>
        </section>
      )}

      {/* ===================== SECONDARY FEATURED ===================== */}
      {secondary.length > 0 && (
        <section className="relative bg-[#0a0a0a] py-24 md:py-28 px-6 lg:px-12 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <ChapterMarker number="02" label="Also featured" />
            <div className="grid md:grid-cols-2 gap-8 md:gap-10 pt-6">
              {secondary.map((p, i) => (
                <motion.article
                  key={p.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.7, delay: i * 0.08 }}
                >
                  <Link href={`/blog/${p.id}`} className="group block">
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#1b1b1b] mb-6">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-[900ms]"
                        loading="lazy"
                      />
                      <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-[10px] font-mono uppercase tracking-[0.3em] text-white/80">
                        <span>{p.categories[0]}</span>
                        <span>{p.readTime}</span>
                      </div>
                    </div>
                    <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 mb-3">
                      {p.date}
                    </p>
                    <h3
                      className="text-white leading-[1.1] tracking-tight group-hover:text-[#A3D1FF] transition-colors duration-500 mb-3"
                      style={{
                        fontFamily: SERIF,
                        fontSize: 'clamp(1.5rem, 2.5vw, 2.15rem)',
                        fontWeight: 500,
                      }}
                    >
                      {p.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed text-sm">{p.excerpt}</p>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===================== ARCHIVE LIST ===================== */}
      {archive.length > 0 && (
        <section className="relative bg-black py-24 md:py-32 px-6 lg:px-12 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <ChapterMarker number="03" label="From the archive" />
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9 }}
              className="text-white leading-[0.95] tracking-[-0.03em] mb-12 max-w-4xl"
              style={{
                fontFamily: SERIF,
                fontSize: 'clamp(2.25rem, 5vw, 4rem)',
                fontWeight: 400,
              }}
            >
              Everything <em className="italic text-[#A3D1FF]">else</em>.
            </motion.h2>

            <div className="border-t border-white/10">
              {archive.map((p, i) => (
                <motion.article
                  key={p.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, delay: Math.min(i * 0.03, 0.3) }}
                  className="border-b border-white/10 group"
                >
                  <Link
                    href={`/blog/${p.id}`}
                    className="grid md:grid-cols-[80px_1fr_180px_160px_24px] gap-4 md:gap-8 items-center py-5 md:py-6"
                  >
                    <span
                      className="text-[#A3D1FF]/60 font-mono text-xs tracking-[0.2em] hidden md:block"
                      style={{ fontVariantNumeric: 'tabular-nums' }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3
                      className="text-white leading-[1.15] tracking-tight group-hover:text-[#A3D1FF] transition-colors duration-300"
                      style={{
                        fontFamily: SERIF,
                        fontSize: 'clamp(1.25rem, 2vw, 1.6rem)',
                        fontWeight: 500,
                      }}
                    >
                      {p.title}
                    </h3>
                    <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/50 hidden md:block">
                      {p.categories[0]}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/50 hidden md:block">
                      {p.date} · {p.readTime}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all hidden md:block" />
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      <ServiceColophon
        headline="Want these in"
        italicHeadline="your inbox?"
        lead="Occasional essays on what I'm building and what I'm learning. No newsletter spam — just the actual notes. Drop a line and I'll keep you in the loop."
      />
    </>
  );
}
