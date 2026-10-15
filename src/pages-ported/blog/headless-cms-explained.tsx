"use client";

import React from 'react';
import { ArrowLeft, Calendar, Clock, ArrowRight, Info } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import { useRouter } from 'next/navigation';

export default function HeadlessCmsExplainedPage() {
  const router = useRouter();

  const blogPostSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Headless CMS Explained: Can My Team Still Edit the Site?",
    "description":
      "A plain-English guide to headless CMS for business owners: what it is, what your marketing team can and can't edit, how previews and publishing work, and when a headless setup is overkill.",
    "image": "https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&w=2000&q=80",
    "datePublished": "2026-10-15T09:00:00+00:00",
    "dateModified": "2026-10-15T09:00:00+00:00",
    "author": {
      "@type": "Person",
      "name": "Marc Friedman",
      "url": "https://www.marcfriedmanportfolio.com/about"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Marc Friedman Design & Development",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.marcfriedmanportfolio.com/apple-touch-icon.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.marcfriedmanportfolio.com/blog/headless-cms-explained"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a headless CMS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A headless CMS is a content editing system that stores your text, images and page content but does not decide how the website looks. The website is a separate piece of code that asks the CMS for content and displays it. The 'head' that was removed is the front end."
        }
      },
      {
        "@type": "Question",
        "name": "Can my marketing team edit a headless website without a developer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, for anything the developer has modeled as content: text, images, blog posts, case studies, team members, FAQs and pages built from pre-designed sections. What they usually cannot do alone is invent a new layout or component that does not exist yet. That still needs a developer."
        }
      },
      {
        "@type": "Question",
        "name": "Can editors preview changes before publishing on a headless CMS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "They can if it is set up. Next.js has a draft mode that renders unpublished content, and CMSs like Sanity and Storyblok offer visual editing where the editor sees the real page while typing. Without that setup, editors work in forms and only see the result after publishing, which is the most common complaint about headless sites."
        }
      },
      {
        "@type": "Question",
        "name": "Is a headless CMS worth it for a small business website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Not always. A five-page site that changes twice a year does not need one. It starts paying off when several people publish regularly, the same content feeds more than one place, or the site needs to be faster and more custom than a template builder allows."
        }
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => router.push('/blog')}
            className="flex items-center gap-2 text-[#A3D1FF] hover:underline mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </button>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Headless CMS Explained: Can My Team Still Edit the Site?
          </h1>

          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-white">
              <Calendar className="w-4 h-4" />
              <span>October 15, 2026</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Clock className="w-4 h-4" />
              <span>8 min read</span>
            </div>
          </div>

          <div className="aspect-[21/9] overflow-hidden mb-8">
            <img
              src="https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&w=2000&q=80"
              alt="A laptop on a wooden desk showing a product page for a yellow sofa, next to a phone and a coffee cup."
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg prose-invert max-w-none">

            <p>When I recommend a headless setup to a client, the first question is almost never about speed or SEO. It&rsquo;s this: &ldquo;If we go headless, can my team still change the website, or do we have to email you every time?&rdquo;</p>

            <p>Short answer: yes, your team can still edit it, and often more comfortably than before. The longer answer depends on how the site is set up, and that&rsquo;s worth understanding before you sign off on the architecture.</p>

            <h2>What &ldquo;headless&rdquo; actually means</h2>

            <p>A traditional CMS like WordPress does two jobs. It stores your content, and it also decides how that content looks, through a theme. The content and the design live in the same system.</p>

            <p>A headless CMS only does the first job. It&rsquo;s a place to write and organize content: pages, blog posts, case studies, team bios, FAQs. The website itself is a separate piece of code, often built with <a href="/blog/react-user-interface-builder">React</a> and Next.js, that asks the CMS for content and displays it. The &ldquo;head&rdquo; that got cut off is the front end.</p>

            <p>Popular options include Sanity, Contentful, Storyblok and Payload. They differ in price and in how editing feels, but they all work on that same split.</p>

            <h2>Why anyone would split them up</h2>

            <ul>
              <li><strong>Speed.</strong> The front end can be built for performance without a theme&rsquo;s plugins and leftover code dragging it down.</li>
              <li><strong>Freedom.</strong> The design isn&rsquo;t limited to what a theme or page builder allows.</li>
              <li><strong>Reuse.</strong> The same content can feed the website, a mobile app, a partner portal or a sales deck generator.</li>
              <li><strong>Security.</strong> There&rsquo;s no public WordPress login page and no stack of plugins to keep patched.</li>
            </ul>

            <p>None of that matters if the people who run your marketing can&rsquo;t use it. So here&rsquo;s the honest picture.</p>

            <h2>What your team can edit on their own</h2>

            <p>Anything the developer has set up as content. In a well-built headless site, that covers most of what a marketing team touches week to week:</p>

            <ul>
              <li>Headlines, body copy, buttons and calls to action</li>
              <li>Images and their alt text</li>
              <li>Blog posts, case studies, news and job listings</li>
              <li>Team members, testimonials, logos and FAQs</li>
              <li>SEO titles, meta descriptions and social share images</li>
              <li>New landing pages built from a library of existing sections</li>
            </ul>

            <p>That last one is the important bit. A good headless build gives editors a set of blocks, such as hero, feature grid, testimonial strip, pricing table and FAQ, and lets them stack those blocks to make a new page. Your team can launch a campaign page on a Tuesday afternoon without anyone writing code.</p>

            <h2>What still needs a developer</h2>

            <p>Your team can rearrange what exists. They can&rsquo;t invent something new. If the marketing lead wants a section type that has never been built, like an interactive comparison tool or a new kind of carousel, that&rsquo;s a development job.</p>

            <p>In practice that&rsquo;s healthy. It stops a site turning into fifty slightly different hero sections, which is what tends to happen with unlimited page builders. But it does mean you should plan the block library carefully at the start, around the pages your team actually makes.</p>

            <div className="bg-[#1b1b1b] p-6 border border-white/10 my-8 not-prose">
              <h4 className="text-white font-semibold mb-2 flex items-center">
                <Info className="w-5 h-5 text-[#A3D1FF] mr-2" />
                The question to ask before you build
              </h4>
              <p className="text-gray-300">&ldquo;What pages will we create in the next twelve months that don&rsquo;t exist yet?&rdquo; The answers become the block library. If the list is &ldquo;campaign landing pages, case studies and webinar pages&rdquo;, those three templates and their sections get designed first, so nobody needs a developer to publish them later.</p>
            </div>

            <h2>Previews: the part that makes or breaks it</h2>

            <p>The most common complaint about headless sites is editing blind. The editor fills in fields in a form, hits publish, then opens the website to see whether it looks right. That&rsquo;s a real problem, and it&rsquo;s a setup problem, not something you have to accept.</p>

            <p>Next.js has a draft mode that renders unpublished content, so editors can click &ldquo;preview&rdquo; and see the real page before it goes live. Some CMSs go further. Storyblok&rsquo;s visual editor and Sanity&rsquo;s presentation view show the actual page next to the editing panel and update as you type. If a developer proposes headless without previews, push back.</p>

            <h2>How publishing works</h2>

            <p>When an editor hits publish, the CMS tells the website that something changed, and the site rebuilds the affected pages. On a well-configured Next.js site that takes seconds. On a badly configured one it can mean waiting for a full rebuild, or worse, the change not showing until someone redeploys. Ask how long a typo fix takes to appear live. The answer should be &ldquo;seconds to a minute&rdquo;.</p>

            <h2>When headless is overkill</h2>

            <p>I&rsquo;d steer you away from it if:</p>

            <ul>
              <li>The site is a handful of pages that change a couple of times a year.</li>
              <li>Only one person ever edits it.</li>
              <li>The budget doesn&rsquo;t stretch to building a proper block library and previews. A half-built headless setup is worse than a good template.</li>
            </ul>

            <p>My own portfolio is a fair example. I&rsquo;m the only person who edits it, so the content lives in the code and I change it directly. Adding a CMS would be ceremony for an audience of one. For a client with a marketing team of three publishing every week, the answer is different.</p>

            <p>If you&rsquo;re weighing headless against a visual builder like Webflow, I compare the two directly in <a href="/blog/nextjs-vs-webflow">Next.js vs Webflow: when a no-code site stops being enough</a>.</p>

            <h2>What to ask before you agree to a headless build</h2>

            <ul>
              <li>Which CMS, and why that one for our team?</li>
              <li>Can we see the editing screen before we commit?</li>
              <li>Will editors get a live preview, and is it visual or a separate preview link?</li>
              <li>Which page types and sections can we build ourselves on day one?</li>
              <li>How long does a published change take to appear?</li>
              <li>What does the CMS cost per seat as the team grows?</li>
              <li>Who owns the CMS account and the content if we part ways? (It should be you.)</li>
            </ul>

            <h2>Frequently Asked Questions</h2>

            <p><strong>What is a headless CMS?</strong><br />A content system that stores your text, images and page content but doesn&rsquo;t control how the site looks. The website is separate code that fetches the content and displays it.</p>

            <p><strong>Can my marketing team edit a headless site without a developer?</strong><br />Yes, for anything set up as content, including new pages built from existing sections. Brand-new section types still need a developer.</p>

            <p><strong>Can editors preview changes before publishing?</strong><br />If it&rsquo;s set up properly, yes, through draft mode or a visual editor. Ask for it explicitly.</p>

            <p><strong>Is a headless CMS worth it for a small business?</strong><br />Only when several people publish regularly or the site needs to go beyond what a template builder allows. A small, rarely changed site doesn&rsquo;t need one.</p>

          </div>

          {/* CTA + Contact form */}
          <div className="mt-16 pt-10 border-t border-white/10">
            <h2 className="text-3xl font-bold text-white mb-4">Not sure your team needs headless?</h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Tell me who edits your site and how often. I&rsquo;ll tell you whether headless is worth it, or whether a simpler setup would serve you better.
            </p>
            <ContactForm />
          </div>

          {/* Related Articles */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-semibold text-white mb-6">Related Articles</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-[#1b1b1b] overflow-hidden border border-white/10 hover:border-[#A3D1FF] transition-all group">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=2000&q=80"
                    alt="Next.js vs Webflow"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-[#A3D1FF] transition-colors">Next.js vs Webflow</h4>
                  <p className="text-white text-sm mb-4">When a no-code site stops being enough, and when it doesn&rsquo;t.</p>
                  <button
                    onClick={() => router.push('/blog/nextjs-vs-webflow')}
                    className="text-[#A3D1FF] text-sm flex items-center gap-1 hover:underline"
                  >
                    Read Article
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>

              <div className="bg-[#1b1b1b] overflow-hidden border border-white/10 hover:border-[#A3D1FF] transition-all group">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2000&q=80"
                    alt="What a 1-Second Faster Site Is Worth in Leads"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-[#A3D1FF] transition-colors">What a 1-Second Faster Site Is Worth</h4>
                  <p className="text-white text-sm mb-4">A worked example you can redo with your own numbers.</p>
                  <button
                    onClick={() => router.push('/blog/faster-site-worth-in-leads')}
                    className="text-[#A3D1FF] text-sm flex items-center gap-1 hover:underline"
                  >
                    Read Article
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
