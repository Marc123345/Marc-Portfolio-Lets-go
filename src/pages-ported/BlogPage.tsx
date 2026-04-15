"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Calendar, Clock, User, Tag, ChevronDown } from 'lucide-react';
import TextReveal from '@/components/TextReveal';
import SectionHeading from '@/components/SectionHeading';
import MagneticButton from '@/components/MagneticButton';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// Blog schema for SEO
const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Marc Friedman's Blog",
  "description": "Insights and perspectives on design, development, and digital innovation.",
  "url": "https://www.marcfriedmanportfolio.com/blog",
  "author": {
    "@type": "Person",
    "name": "Marc Friedman",
    "jobTitle": "Full Stack Designer & Developer",
    "url": "https://www.marcfriedmanportfolio.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Marc Friedman Design & Development",
    "logo": {
      "@type": "ImageObject",
      "url": "https://marcfriedmanportfolio.com/apple-touch-icon.png"
    }
  }
};

// Blog post data
const blogPosts = [
  {
    id: 'conversational-ui-chat-interfaces',
    title: 'Conversational UI: When Chat Interfaces Help — and When They Hurt — Your UX',
    excerpt: 'A deep dive into conversational UI design: how chat-style interfaces and AI assistants work, when they genuinely improve user experience, and the critical patterns that make them fail.',
    content: 'Full content here...',
    date: 'April 13, 2026',
    readTime: '17 min read',
    author: {
      name: 'Marc Friedman',
      image: 'https://ik.imagekit.io/qcvroy8xpd/PW8VUKH.png?updatedAt=1759693058055&tr=f-webp'
    },
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=2000&q=80',
    categories: ['UX', 'AI', 'Design', 'Conversational UI'],
    featured: true
  },
  {
    id: 'what-is-geo',
    title: 'What Is GEO? Generative Engine Optimization Explained for Modern Search',
    excerpt: 'Learn what Generative Engine Optimization (GEO) is, how it differs from SEO and AEO, and how to optimize your content to appear in AI-generated search results from Google AI Overviews, ChatGPT, Perplexity, and more.',
    content: 'Full content here...',
    date: 'March 3, 2026',
    readTime: '20 min read',
    author: {
      name: 'Marc Friedman',
      image: 'https://ik.imagekit.io/qcvroy8xpd/PW8VUKH.png?updatedAt=1759693058055&tr=f-webp'
    },
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=2000&q=80',
    categories: ['SEO', 'AI', 'GEO', 'Marketing'],
    featured: true
  },
  {
    id: 'what-is-aeo',
    title: 'What Is AEO? Answer Engine Optimization Explained for 2026 and Beyond',
    excerpt: 'Learn what Answer Engine Optimization (AEO) is, how it differs from traditional SEO, and why optimizing for AI-powered answer engines like ChatGPT, Perplexity, and Google AI Overviews is essential for modern visibility.',
    content: 'Full content here...',
    date: 'March 3, 2026',
    readTime: '18 min read',
    author: {
      name: 'Marc Friedman',
      image: 'https://ik.imagekit.io/qcvroy8xpd/PW8VUKH.png?updatedAt=1759693058055&tr=f-webp'
    },
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=2000&q=80',
    categories: ['SEO', 'AI', 'AEO', 'Marketing'],
    featured: true
  },
  {
    id: 'minimal-fast-sustainable-ux',
    title: 'Minimal, Fast, and Sustainable UX: Designing for Performance, Calm, and the Planet',
    excerpt: 'Explore how leaner layouts, fewer heavy scripts, image optimization, and green UX considerations are shaping modern design. Learn to build calmer, faster, more sustainable digital experiences.',
    content: 'Full content here...',
    date: 'February 26, 2026',
    readTime: '16 min read',
    author: {
      name: 'Marc Friedman',
      image: 'https://ik.imagekit.io/qcvroy8xpd/PW8VUKH.png?updatedAt=1759693058055&tr=f-webp'
    },
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2000&q=80',
    categories: ['UX', 'Performance', 'Sustainability', 'Design'],
    featured: true
  },
  {
    id: 'google-search-console-ai-reports',
    title: 'Stop Guessing in GSC: A Practical Guide to AI-Powered Configuration for SEOs',
    excerpt: 'Google just added AI-powered configuration to Search Console. Learn how to use prompts to build reports, diagnose traffic drops faster, and spot AI search opportunities.',
    content: 'Full content here...',
    date: 'February 19, 2026',
    readTime: '14 min read',
    author: {
      name: 'Marc Friedman',
      image: 'https://ik.imagekit.io/qcvroy8xpd/PW8VUKH.png?updatedAt=1759693058055&tr=f-webp'
    },
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2000&q=80',
    categories: ['SEO', 'Google', 'AI', 'Marketing'],
    featured: true
  },
  {
    id: 'context-driven-design-decisions',
    title: 'Why Context Matters: A Junior Designer\'s Guide to Making Better Design Decisions',
    excerpt: 'Learn why understanding context is the most critical skill for junior UX/UI designers and how to develop contextual thinking for better design decisions.',
    content: 'Full content here...',
    date: 'February 4, 2026',
    readTime: '12 min read',
    author: {
      name: 'Marc Friedman',
      image: 'https://ik.imagekit.io/qcvroy8xpd/PW8VUKH.png?updatedAt=1759693058055&tr=f-webp'
    },
    image: '/generated-1770282657147-xuhu1.png',
    categories: ['UX', 'Design', 'Education', 'Best Practices'],
    featured: true
  },
  {
    id: 'ai-ready-design-systems',
    title: 'AI-Ready Design Systems: Building for Human-AI Collaboration',
    excerpt: 'Learn how to structure design tokens, components, and content so AI tools can generate on-brand layouts, copy, and variants reliably. Discover common pitfalls when AI fights your system and how to avoid them.',
    content: 'Full content here...',
    date: 'February 3, 2026',
    readTime: '18 min read',
    author: {
      name: 'Marc Friedman',
      image: 'https://ik.imagekit.io/qcvroy8xpd/PW8VUKH.png?updatedAt=1759693058055&tr=f-webp'
    },
    image: '/generated-1770282657147-xuhu1.png',
    categories: ['AI', 'Design Systems', 'Development', 'Best Practices'],
    featured: true
  },
  {
    id: 'ai-native-ux-personalization',
    title: 'AI-Native UX and Personalization: Designing Experiences That Adapt',
    excerpt: 'Explore the paradigm shift from traditional UX with AI features to AI-native experiences designed from the ground up around adaptive, personalized intelligence. Learn how to design interfaces that predict, adapt, and evolve with users.',
    content: 'Full content here...',
    date: 'January 27, 2026',
    readTime: '18 min read',
    author: {
      name: 'Marc Friedman',
      image: 'https://ik.imagekit.io/qcvroy8xpd/PW8VUKH.png?updatedAt=1759693058055&tr=f-webp'
    },
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=2000&q=80',
    categories: ['AI', 'UX', 'Personalization', 'Innovation'],
    featured: true
  },
  {
    id: 'ai-as-codesigner',
    title: 'AI as Co-Designer: Moving Beyond Tools to True Creative Partnership',
    excerpt: 'Explore how AI is evolving from a simple design tool into a true creative partner. Learn how to collaborate with AI as a co-designer, the key differences from traditional tools, and best practices for human-AI creative partnerships.',
    content: 'Full content here...',
    date: 'January 22, 2026',
    readTime: '15 min read',
    author: {
      name: 'Marc Friedman',
      image: 'https://ik.imagekit.io/qcvroy8xpd/PW8VUKH.png?updatedAt=1759693058055&tr=f-webp'
    },
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80',
    categories: ['AI', 'Design', 'Collaboration', 'Innovation'],
    featured: true
  },
  {
    id: 'google-algorithm-update-2026',
    title: 'Google\'s 2026 Algorithm Update: Essential Strategies to Rank in the AI-First Era',
    excerpt: 'Comprehensive guide to Google\'s latest algorithm update focusing on AI-generated content detection, E-E-A-T signals, user experience metrics, and practical strategies to maintain and improve your search rankings.',
    content: 'Full content here...',
    date: 'January 22, 2026',
    readTime: '18 min read',
    author: {
      name: 'Marc Friedman',
      image: 'https://ik.imagekit.io/qcvroy8xpd/PW8VUKH.png?updatedAt=1759693058055&tr=f-webp'
    },
    image: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?auto=format&fit=crop&w=2000&q=80',
    categories: ['SEO', 'Google', 'Algorithm', 'Marketing'],
    featured: true
  },
  {
    id: 'ai-imperfect-aesthetics',
    title: 'AI + Human Imperfection: The New Aesthetic Revolution',
    excerpt: 'Discover how designers are layering hand-made, tactile, and deliberately messy aesthetics on AI-generated content to create authentic, emotionally resonant experiences that reject generic perfection.',
    content: 'Full content here...',
    date: 'January 21, 2026',
    readTime: '14 min read',
    author: {
      name: 'Marc Friedman',
      image: 'https://ik.imagekit.io/qcvroy8xpd/PW8VUKH.png?updatedAt=1759693058055&tr=f-webp'
    },
    image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=2000&q=80',
    categories: ['AI', 'Design', 'Trends'],
    featured: true
  },
  {
    id: 'brutalism-anti-design-web-trends',
    title: 'Brutalism & Anti-Design: The Raw, Unpolished Web Design Revolution',
    excerpt: 'Explore the rise of brutalist web design and anti-design movements. Learn how raw grids, minimal imagery, monochrome palettes, and imperfect layouts create authentic, human-centered digital experiences.',
    content: 'Full content here...',
    date: 'December 29, 2025',
    readTime: '12 min read',
    author: {
      name: 'Marc Friedman',
      image: 'https://ik.imagekit.io/qcvroy8xpd/PW8VUKH.png?updatedAt=1759693058055&tr=f-webp'
    },
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=2000&q=80',
    categories: ['Design', 'Trends', 'Brutalism'],
    featured: true
  },
  {
    id: 'ai-personalization-ecommerce',
    title: 'The Rise of AI-Driven Personalization in Ecommerce: A Practical Guide for 2025',
    excerpt: 'Explore how AI-powered personalization is transforming ecommerce. Learn practical strategies for implementing personalization, real-world case studies, privacy considerations, and omnichannel best practices.',
    content: 'Full content here...',
    date: 'November 5, 2025',
    readTime: '16 min read',
    author: {
      name: 'Marc Friedman',
      image: 'https://ik.imagekit.io/qcvroy8xpd/PW8VUKH.png?updatedAt=1759693058055&tr=f-webp'
    },
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=2000&q=80',
    categories: ['AI', 'Ecommerce', 'Personalization'],
    featured: true
  },
  {
    id: 'ui-polish-visual-realism',
    title: 'UI Polish: Mastering Visual Realism in Modern Interface Design',
    excerpt: 'Explore the art of UI polish through visual realism, lighting metaphors, and design choices inspired by physical materials. Learn how to create interfaces that feel tangible and modern.',
    content: 'Full content here...',
    date: 'October 30, 2025',
    readTime: '8 min read',
    author: {
      name: 'Marc Friedman',
      image: 'https://ik.imagekit.io/qcvroy8xpd/PW8VUKH.png?updatedAt=1759693058055&tr=f-webp'
    },
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=2000&q=80',
    categories: ['Design', 'UI/UX', 'Polish'],
    featured: true
  },
  {
    id: 'ecommerce-ux-flaws-killing-conversions',
    title: '3 UX Flaws That Kill eCommerce Conversions — Backed by Data',
    excerpt: 'Discover the three critical UX mistakes that are costing eCommerce businesses millions in lost revenue. Learn data-backed solutions to boost conversions by up to 400%.',
    content: 'Full content here...',
    date: 'October 6, 2025',
    readTime: '8 min read',
    author: {
      name: 'Marc Friedman',
      image: 'https://ik.imagekit.io/qcvroy8xpd/PW8VUKH.png?updatedAt=1759693058055&tr=f-webp'
    },
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=2000&q=80',
    categories: ['eCommerce', 'UX', 'Conversion'],
    featured: true
  },
  {
    id: 'getting-the-best-out-of-cloudflare',
    title: 'Getting the Best Out of Cloudflare for Your Website: A Complete Guide',
    excerpt: 'Learn how to maximize Cloudflare\'s potential for your website with advanced optimization techniques, security configurations, and performance enhancements.',
    content: 'Full content here...',
    date: 'September 16, 2025',
    readTime: '12 min read',
    author: {
      name: 'Marc Friedman',
      image: 'https://ik.imagekit.io/qcvroy8xpd/PW8VUKH.png?updatedAt=1759693058055&tr=f-webp'
    },
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80',
    categories: ['Performance', 'CDN', 'Security'],
    featured: true
  },
  {
    id: 'progressive-web-apps',
    title: 'Progressive Web Apps (PWAs): The Best of Both Worlds',
    excerpt: 'Discover how PWAs combine the best features of websites and native apps to provide enhanced user experiences while reducing development costs.',
    content: 'Full content here...',
    date: 'June 15, 2025',
    readTime: '6 min read',
    author: {
      name: 'Marc Friedman',
      image: 'https://ik.imagekit.io/qcvroy8xpd/PW8VUKH.png?updatedAt=1759693058055&tr=f-webp'
    },
    image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=2000&q=80',
    categories: ['PWA', 'Mobile', 'Development'],
    featured: false
  },
  {
    id: 'optimizing-websites-for-ai-crawlers',
    title: 'Optimizing Your Website for AI Crawlers: The Complete Guide',
    excerpt: 'As AI becomes more integrated into search, learn how to optimize your website for AI crawlers to improve visibility.',
    content: 'Full content here...',
    date: 'June 11, 2025',
    readTime: '9 min read',
    author: {
      name: 'Marc Friedman',
      image: 'https://ik.imagekit.io/qcvroy8xpd/PW8VUKH.png?updatedAt=1759693058055&tr=f-webp'
    },
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=2000&q=80',
    categories: ['SEO', 'AI', 'Technical'],
    featured: false
  },
  {
    id: 'future-of-saas-web-design',
    title: 'The Future of SaaS Web Design: Merging Aesthetics with Functionality',
    excerpt: 'Explore the evolving landscape of SaaS web design and how it\'s shaping the future of digital products.',
    content: 'Full content here...',
    date: 'May 15, 2025',
    readTime: '6 min read',
    author: {
      name: 'Marc Friedman',
      image: 'https://ik.imagekit.io/qcvroy8xpd/PW8VUKH.png?updatedAt=1759693058055&tr=f-webp'
    },
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=2000&q=80',
    categories: ['Design', 'SaaS', 'UX'],
    featured: true
  },
  {
    id: 'paving-contractor-website-design-guide',
    title: 'Website Design Guide for Paving Contractors: Converting Visitors to Customers',
    excerpt: 'Learn essential website design strategies specifically for paving contractors. Discover how to showcase your work, build trust, and convert website visitors into paying customers.',
    content: 'Full content here...',
    date: 'April 15, 2025',
    readTime: '12 min read',
    author: {
      name: 'Marc Friedman',
      image: 'https://ik.imagekit.io/qcvroy8xpd/PW8VUKH.png?updatedAt=1759693058055&tr=f-webp'
    },
    image: 'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?auto=format&fit=crop&w=2000&q=80',
    categories: ['Web Design', 'Contractors', 'Conversion'],
    featured: true
  },
  {
    id: 'building-data-driven-design-systems',
    title: 'Building Data-Driven Design Systems for Scale',
    excerpt: 'Learn how to create and maintain scalable design systems that evolve with your product needs.',
    content: 'Full content here...',
    date: 'April 1, 2025',
    readTime: '7 min read',
    author: {
      name: 'Marc Friedman',
      image: 'https://ik.imagekit.io/qcvroy8xpd/PW8VUKH.png?updatedAt=1759693058055&tr=f-webp'
    },
    image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?auto=format&fit=crop&w=2000&q=80',
    categories: ['Design Systems', 'UX', 'Development'],
    featured: true
  },
  {
    id: 'local-seo-for-paving-contractors',
    title: 'Local SEO for Paving Contractors: Dominate Your Market in 2025',
    excerpt: 'Master local search engine optimization strategies specifically for paving contractors. Learn how to rank higher in Google Maps and attract more local customers.',
    content: 'Full content here...',
    date: 'March 28, 2025',
    readTime: '15 min read',
    author: {
      name: 'Marc Friedman',
      image: 'https://ik.imagekit.io/qcvroy8xpd/PW8VUKH.png?updatedAt=1759693058055&tr=f-webp'
    },
    image: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&w=2000&q=80',
    categories: ['SEO', 'Contractors', 'Local Marketing'],
    featured: true
  },
  {
    id: 'designing-platforms-for-automotive-dealers',
    title: 'From Concept to Profit: Designing Platforms That Empower Automotive Dealers',
    excerpt: 'The automotive industry is no stranger to disruption, with rapid advancements in technology reshaping how dealers operate and thrive.',
    content: 'Full content here...',
    date: 'March 30, 2025',
    readTime: '8 min read',
    author: {
      name: 'Marc Friedman',
      image: 'https://ik.imagekit.io/qcvroy8xpd/PW8VUKH.png?updatedAt=1759693058055&tr=f-webp'
    },
    image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=2000&q=80',
    categories: ['Case Study', 'Automotive', 'UX'],
    featured: false
  },
  {
    id: 'digital-marketing-asphalt-contractors',
    title: 'Digital Marketing Strategy for Asphalt Contractors: A Complete Guide',
    excerpt: 'Learn proven digital marketing strategies for paving and asphalt contractors. Discover how to attract more customers, increase revenue, and grow your contracting business online.',
    content: 'Full content here...',
    date: 'February 20, 2025',
    readTime: '14 min read',
    author: {
      name: 'Marc Friedman',
      image: 'https://ik.imagekit.io/qcvroy8xpd/PW8VUKH.png?updatedAt=1759693058055&tr=f-webp'
    },
    image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=2000&q=80',
    categories: ['Marketing', 'Contractors', 'Lead Generation'],
    featured: true
  },
  {
    id: 'conversion-rate-optimization-techniques',
    title: '7 Proven Conversion Rate Optimization Techniques for 2025',
    excerpt: 'Discover actionable strategies to boost your website\'s conversion rates and drive more business growth.',
    content: 'Full content here...',
    date: 'February 1, 2025',
    readTime: '5 min read',
    author: {
      name: 'Marc Friedman',
      image: 'https://ik.imagekit.io/qcvroy8xpd/PW8VUKH.png?updatedAt=1759693058055&tr=f-webp'
    },
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2000&q=80',
    categories: ['Conversion', 'Marketing', 'UX'],
    featured: false
  },
  {
    id: 'mobile-first-design-principles',
    title: 'Mobile-First Design Principles Every Developer Should Know',
    excerpt: 'Learn the essential principles of mobile-first design to create responsive, user-friendly websites.',
    content: 'Full content here...',
    date: 'January 15, 2025',
    readTime: '6 min read',
    author: {
      name: 'Marc Friedman',
      image: 'https://ik.imagekit.io/qcvroy8xpd/PW8VUKH.png?updatedAt=1759693058055&tr=f-webp'
    },
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=2000&q=80',
    categories: ['Mobile', 'Design', 'Development'],
    featured: false
  },
  {
    id: 'contrast-balance-ui-design',
    title: 'Contrast & Balance: The Foundation of Accessible UI Design',
    excerpt: 'Master the art of contrast and balance in UI design. Learn about foreground vs. background clarity, stroke & surface contrast, and managing contrast across light and dark themes.',
    content: 'Full content here...',
    date: 'December 10, 2024',
    readTime: '10 min read',
    author: {
      name: 'Marc Friedman',
      image: 'https://ik.imagekit.io/qcvroy8xpd/PW8VUKH.png?updatedAt=1759693058055&tr=f-webp'
    },
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=2000&q=80',
    categories: ['Design', 'Accessibility', 'UI/UX'],
    featured: true
  }
];

// Helper function to parse dates
const parseDate = (dateString: string) => {
  const [month, day, year] = dateString.split(' ');
  const monthIndex = [
    'January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December'
  ].indexOf(month);
  return new Date(parseInt(year), monthIndex, parseInt(day.replace(',', '')));
};

// Sort blog posts by date (newest first)
const sortedBlogPosts = [...blogPosts].sort((a, b) => {
  const dateA = parseDate(a.date);
  const dateB = parseDate(b.date);
  return dateB.getTime() - dateA.getTime();
});

// All unique categories
const allCategories = Object.values(
  blogPosts.flatMap(post => post.categories).reduce((acc, category) => {
    const id = category.toLowerCase().replace(/\s+/g, '-');
    if (!acc[id]) acc[id] = { id, label: category };
    return acc;
  }, {} as Record<string, { id: string; label: string }>)
);

// Blog post card component
function BlogPostCard({ post }: { post: typeof blogPosts[0] }) {
  const router = useRouter();
  
  return (
    <motion.article 
      className="bg-[#1b1b1b] rounded-xl overflow-hidden border border-white/10 hover:border-[#A3D1FF] transition-all group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="aspect-[16/9] overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {post.categories.slice(0, 2).map((category, index) => (
            <span 
              key={index} 
              className="px-2 py-1 bg-[#A3D1FF]/10 text-[#A3D1FF] rounded-full text-xs"
            >
              {category}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#A3D1FF] transition-colors">
          {post.title}
        </h3>
        <p className="text-white mb-4 text-sm line-clamp-2">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-white">
            <Calendar className="w-4 h-4" />
            {post.date}
            <span className="mx-1">•</span>
            <Clock className="w-4 h-4" />
            {post.readTime}
          </div>
          <button 
            onClick={() => router.push(`/blog/${post.id}`)}
            className="text-[#A3D1FF] text-sm flex items-center gap-1 hover:underline"
          >
            Read More
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </motion.article>
  );
}

// Featured blog post component
function FeaturedBlogPost({ post }: { post: typeof blogPosts[0] }) {
  const router = useRouter();
  
  return (
    <motion.article 
      className="bg-[#1b1b1b] rounded-xl overflow-hidden border border-white/10 hover:border-[#A3D1FF] transition-all group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="grid md:grid-cols-2 gap-6">
        <div className="aspect-[4/3] md:aspect-auto md:h-full overflow-hidden">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-6 md:p-8 flex flex-col justify-center">
          <div className="flex flex-wrap gap-2 mb-3">
            {post.categories.map((category, index) => (
              <span 
                key={index} 
                className="px-2 py-1 bg-[#A3D1FF]/10 text-[#A3D1FF] rounded-full text-xs"
              >
                {category}
              </span>
            ))}
          </div>
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#A3D1FF] transition-colors">
            {post.title}
          </h3>
          <p className="text-white mb-4">
            {post.excerpt}
          </p>
          <div className="flex items-center gap-3 mb-4">
            <img 
              src={post.author.image} 
              alt={post.author.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="text-white font-medium">{post.author.name}</p>
              <div className="flex items-center gap-2 text-xs text-white">
                <Calendar className="w-3 h-3" />
                {post.date}
                <span className="mx-1">•</span>
                <Clock className="w-3 h-3" />
                {post.readTime}
              </div>
            </div>
          </div>
          <button 
            onClick={() => router.push(`/blog/${post.id}`)}
            className="mt-auto inline-flex items-center text-[#A3D1FF] hover:underline"
          >
            Read Full Article
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.article>
  );
}

export default function BlogPage() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(sortedBlogPosts);
  const [showCategories, setShowCategories] = useState(false);
  
  // Filter posts based on category and search query
  useEffect(() => {
    let filtered = sortedBlogPosts;
    
    // Filter by category
    if (activeCategory !== 'all') {
      filtered = filtered.filter(post => 
        post.categories.some(cat => 
          cat.toLowerCase().replace(/\s+/g, '-') === activeCategory
        )
      );
    }
    
    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(query) || 
        post.excerpt.toLowerCase().includes(query) ||
        post.categories.some(cat => cat.toLowerCase().includes(query))
      );
    }
    
    setFilteredPosts(filtered);
  }, [activeCategory, searchQuery]);
  
  // Featured posts
  const featuredPosts = sortedBlogPosts.filter(post => post.featured);

  return (
    <>
      

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <TextReveal>
            <h1 className="font-heading text-[clamp(2.2rem,4vw,3rem)] font-semibold tracking-[-0.01em] text-white leading-[1.15] mb-4">
              Blog
            </h1>
            <h2 className="font-body text-xl sm:text-2xl text-[#A3D1FF] mb-6">
              Design & Development Insights
            </h2>
            <p className="font-body text-xl leading-[1.7] text-white max-w-3xl">
              Insights and perspectives on design, development, and digital innovation to help you <strong className="text-white">stay ahead in the digital landscape</strong>.
            </p>
          </TextReveal>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-[#1b1b1b]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            {/* Categories - Desktop */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                  activeCategory === 'all'
                    ? 'bg-[#A3D1FF] text-black'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10'
                }`}
              >
                All Topics
              </button>
              {allCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                    activeCategory === category.id
                      ? 'bg-[#A3D1FF] text-black'
                      : 'bg-white/5 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
            
            {/* Categories - Mobile */}
            <div className="md:hidden w-full">
              <button
                onClick={() => setShowCategories(!showCategories)}
                className="w-full flex items-center justify-between px-4 py-2 bg-[#2d3035] border border-white/10 rounded-lg text-white"
              >
                <span>{activeCategory === 'all' ? 'All Topics' : allCategories.find(c => c.id === activeCategory)?.label || 'All Topics'}</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${showCategories ? 'rotate-180' : ''}`} />
              </button>
              
              {showCategories && (
                <div className="mt-2 bg-[#2d3035] border border-white/10 rounded-lg overflow-hidden">
                  <button
                    onClick={() => {
                      setActiveCategory('all');
                      setShowCategories(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm ${
                      activeCategory === 'all'
                        ? 'bg-[#A3D1FF] text-black'
                        : 'text-gray-300 hover:bg-white/5'
                    }`}
                  >
                    All Topics
                  </button>
                  {allCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => {
                        setActiveCategory(category.id);
                        setShowCategories(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm ${
                        activeCategory === category.id
                          ? 'bg-[#A3D1FF] text-black'
                          : 'text-gray-300 hover:bg-white/5'
                      }`}
                    >
                      {category.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      {featuredPosts.length > 0 && activeCategory === 'all' && !searchQuery && (
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6">Featured Blog Articles</h2>
            <div className="space-y-8">
              {featuredPosts.map((post, index) => (
                <FeaturedBlogPost key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">
            {searchQuery 
              ? `Search Results for "${searchQuery}"` 
              : activeCategory !== 'all' 
                ? `${allCategories.find(c => c.id === activeCategory)?.label || ''} Articles` 
                : featuredPosts.length > 0 ? 'All Articles' : 'Latest Articles'}
          </h2>
          
          {filteredPosts.length === 0 ? (
            <div className="bg-[#1b1b1b] p-8 rounded-xl border border-white/10 text-center">
              <h3 className="text-xl font-semibold text-white mb-2">No articles found</h3>
              <p className="text-white mb-4">Try adjusting your filter criteria.</p>
              <button
                onClick={() => {
                  setActiveCategory('all');
                  setSearchQuery('');
                }}
                className="mr_btn mr_btn_primary"
              >
                <span>View All Articles</span>
              </button>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts
                .filter(post => !post.featured || activeCategory !== 'all' || searchQuery)
                .map((post) => (
                  <BlogPostCard key={post.id} post={post} />
                ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1b1b1b]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Stay Updated with Industry Insights</h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-white mb-6">
              Subscribe to our newsletter for the latest articles, tips, and insights on design, development, and digital innovation.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-2 bg-[#2d3035] border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#A3D1FF] focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="mr_btn mr_btn_primary whitespace-nowrap"
              >
                <span>Subscribe</span>
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-3">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Digital Presence?</h2>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
              Let's create a digital solution that delivers <strong className="text-white">measurable results</strong> for your business.
            </p>
            <MagneticButton>
              <button onClick={() => router.push('/contact')} className="mr_btn mr_btn_primary">
                <span>Start Your Project</span>
              </button>
            </MagneticButton>
            
            {/* Related Resources */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <h3 className="text-xl font-semibold text-white mb-6">Helpful Resources</h3>
              <div className="grid md:grid-cols-4 gap-4">
                <Link 
                  href="/tools/website-analyzer" 
                  className="p-4 bg-[#1b1b1b] rounded-lg border border-white/10 hover:border-[#A3D1FF] transition-colors group"
                  title="Analyze your website for free"
                >
                  <h4 className="text-white font-medium group-hover:text-[#A3D1FF] transition-colors">Website Analyzer</h4>
                  <p className="text-white text-sm mt-1">Free analysis tool</p>
                </Link>
                <Link 
                  href="/tools/roi-calculator" 
                  className="p-4 bg-[#1b1b1b] rounded-lg border border-white/10 hover:border-[#A3D1FF] transition-colors group"
                  title="Calculate your website ROI"
                >
                  <h4 className="text-white font-medium group-hover:text-[#A3D1FF] transition-colors">ROI Calculator</h4>
                  <p className="text-white text-sm mt-1">Investment calculator</p>
                </Link>
                <Link 
                  href="/work" 
                  className="p-4 bg-[#1b1b1b] rounded-lg border border-white/10 hover:border-[#A3D1FF] transition-colors group"
                  title="View our portfolio"
                >
                  <h4 className="text-white font-medium group-hover:text-[#A3D1FF] transition-colors">Portfolio</h4>
                  <p className="text-white text-sm mt-1">Case studies</p>
                </Link>
                <Link 
                  href="/services" 
                  className="p-4 bg-[#1b1b1b] rounded-lg border border-white/10 hover:border-[#A3D1FF] transition-colors group"
                  title="Explore our services"
                >
                  <h4 className="text-white font-medium group-hover:text-[#A3D1FF] transition-colors">Services</h4>
                  <p className="text-white text-sm mt-1">What we offer</p>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}