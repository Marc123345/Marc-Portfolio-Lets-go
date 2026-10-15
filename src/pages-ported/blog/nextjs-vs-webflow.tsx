"use client";

import React from 'react';
import { ArrowLeft, Calendar, Clock, ArrowRight } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import { useRouter } from 'next/navigation';

export default function NextjsVsWebflowPage() {
  const router = useRouter();

  const blogPostSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Next.js vs Webflow: When a No-Code Site Stops Being Enough",
    "description":
      "An honest comparison of Webflow and Next.js for business websites: what Webflow does well, the signs you've outgrown it, what moving to Next.js costs, and when to stay put.",
    "image": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=2000&q=80",
    "datePublished": "2026-10-15T10:00:00+00:00",
    "dateModified": "2026-10-15T10:00:00+00:00",
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
      "@id": "https://www.marcfriedmanportfolio.com/blog/nextjs-vs-webflow"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is Next.js better than Webflow?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Neither is better in general. Webflow is the better choice for a marketing site that a non-technical team wants to design and edit visually. Next.js is the better choice once the site needs custom logic, deep integrations, logged-in areas or content beyond what Webflow's plans allow."
        }
      },
      {
        "@type": "Question",
        "name": "When should I move from Webflow to Next.js?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "When you keep paying for workarounds: third-party scripts for features Webflow cannot do natively, CMS limits you are hitting, integrations held together with automation tools, or a developer writing custom code inside Webflow anyway. If none of that applies, stay on Webflow."
        }
      },
      {
        "@type": "Question",
        "name": "Can my team still edit a Next.js site?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, if it is paired with a headless CMS such as Sanity, Storyblok or Contentful. Editors change text, images, posts and pages built from existing sections. New section types need a developer."
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
            Next.js vs Webflow: When a No-Code Site Stops Being Enough
          </h1>

          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-white">
              <Calendar className="w-4 h-4" />
              <span>October 15, 2026</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Clock className="w-4 h-4" />
              <span>9 min read</span>
            </div>
          </div>

          <div className="aspect-[21/9] overflow-hidden mb-8">
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=2000&q=80"
              alt="A laptop screen showing colorful source code in a dark code editor."
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg prose-invert max-w-none">

            <p>I build in Next.js, so you might expect this to end with &ldquo;rebuild everything in Next.js&rdquo;. It doesn&rsquo;t. Webflow is a good product, and for plenty of businesses it&rsquo;s the right one. The useful question isn&rsquo;t which tool is better. It&rsquo;s whether your site has started asking for things Webflow wasn&rsquo;t built to do.</p>

            <h2>What Webflow does well</h2>

            <ul>
              <li><strong>Visual control.</strong> A designer or marketer can build and change layouts without writing code, and what they see is what ships.</li>
              <li><strong>Everything in one place.</strong> Hosting, SSL, a CMS for blog-style content, forms and basic SEO settings come with the plan.</li>
              <li><strong>Speed to launch.</strong> A marketing site can go live in weeks, and new landing pages in hours.</li>
              <li><strong>Clean enough output.</strong> Unlike older page builders, a well-built Webflow site can be reasonably fast.</li>
            </ul>

            <p>If your site is a marketing site, your team wants to own the design day to day, and nothing on it needs custom logic, Webflow is hard to beat. I&rsquo;d tell you to stay.</p>

            <h2>Signs you&rsquo;ve outgrown it</h2>

            <p>The pattern I see isn&rsquo;t one dramatic failure. It&rsquo;s a pile of workarounds, each reasonable on its own, that together cost more than doing it properly.</p>

            <h3>1. You&rsquo;re hitting CMS limits</h3>
            <p>Webflow caps the number of CMS items and collections on each plan, and the limits changed again in 2026, so check Webflow&rsquo;s current pricing page rather than trusting any blog post&rsquo;s numbers, including mine. If you have hundreds of locations, a large product catalog, programmatic SEO pages or years of articles, you&rsquo;ll feel those caps. Nested and multi-reference content has its own constraints too.</p>

            <h3>2. Features live in third-party scripts</h3>
            <p>Calculators, gated downloads, quote builders, filtered directories and multi-step forms with branching logic usually end up as embedded widgets from five different vendors. Each adds weight to the page and another login to manage. When the most important features on your site are bolted on rather than built in, the platform is working against you.</p>

            <h3>3. Integrations are held together with automations</h3>
            <p>If form data reaches your CRM through Zapier, gets enriched by another tool and triggers a third, it works until one step silently fails and leads go missing. A Next.js site can write straight to your CRM&rsquo;s API with proper error handling and retries.</p>

            <h3>4. You need logged-in areas or personalization</h3>
            <p>Client portals, partner areas, pricing that changes by account, or content that varies by region or industry are application features. Webflow isn&rsquo;t an application framework, and forcing it into one gets expensive.</p>

            <h3>5. A developer is already writing code inside Webflow</h3>
            <p>If you&rsquo;re paying someone to maintain custom code embeds anyway, you already have the cost of a coded site with the constraints of a no-code one.</p>

            <h3>6. You want to own your stack</h3>
            <p>Webflow can export HTML and CSS, but the CMS, forms and hosting features don&rsquo;t come with it as a working system. Your site depends on staying on Webflow. That&rsquo;s a fine trade for many businesses. It stops being fine when the site is core to how you make money.</p>

            <h2>Side by side</h2>
          </div>

          <div className="bg-[#1b1b1b] p-6 border border-white/10 my-8 overflow-x-auto">
            <table className="w-full text-sm min-w-[560px]">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left text-[#A3D1FF] pb-3 pr-4 font-semibold"></th>
                  <th className="text-left text-gray-300 pb-3 pr-4 font-semibold">Webflow</th>
                  <th className="text-left text-gray-300 pb-3 font-semibold">Next.js + headless CMS</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-white/5">
                  <td className="py-3 pr-4 text-white">Who changes layouts</td>
                  <td className="py-3 pr-4">Your team, visually</td>
                  <td className="py-3">Your team rearranges sections; new sections need a developer</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 pr-4 text-white">Custom logic</td>
                  <td className="py-3 pr-4">Limited; usually third-party embeds</td>
                  <td className="py-3">Anything you can build</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 pr-4 text-white">Integrations</td>
                  <td className="py-3 pr-4">Native apps plus automation tools</td>
                  <td className="py-3">Direct API connections</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 pr-4 text-white">Content volume</td>
                  <td className="py-3 pr-4">Capped by plan</td>
                  <td className="py-3">Set by your CMS, usually far higher</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 pr-4 text-white">Upfront cost</td>
                  <td className="py-3 pr-4">Lower</td>
                  <td className="py-3">Higher</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-white">Lock-in</td>
                  <td className="py-3 pr-4">Tied to the platform</td>
                  <td className="py-3">You own the code; host anywhere</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="prose prose-lg prose-invert max-w-none">

            <h2>What moving costs</h2>

            <p>A rebuild in Next.js costs more upfront than a Webflow site of the same size, because someone writes the code and sets up the CMS your team will edit in. Hosting can be cheaper or similar. The real saving, when there is one, comes from dropping the stack of widget subscriptions and the hours spent babysitting automations. I break down typical budgets in <a href="/blog/how-much-does-a-website-cost-2026">How Much Does a Website Cost in 2026</a>.</p>

            <p>The thing most people worry about is losing the ability to edit. You don&rsquo;t have to. Pair Next.js with a headless CMS and your team still publishes pages, posts and case studies on their own. I explain how that works, and what still needs a developer, in <a href="/blog/headless-cms-explained">Headless CMS Explained</a>.</p>

            <p>If you do move, protect what you&rsquo;ve built: map every existing URL to its new one, set up 301 redirects, and carry over titles, descriptions and structured data. A migration that drops rankings for six months isn&rsquo;t a saving.</p>

            <h2>The middle path</h2>

            <p>You don&rsquo;t always have to choose. A common setup keeps the marketing site on Webflow, where the team is happy, and puts the application parts, like a client portal, quote builder or calculator, on a small Next.js app at a subdomain such as app.yourcompany.com. That&rsquo;s often the cheapest way to get custom functionality without rebuilding everything.</p>

            <h2>A quick test</h2>

            <p>List the five features that matter most to your revenue on the site. If Webflow does all five natively, stay. If two or more depend on third-party scripts, custom code or automations, it&rsquo;s worth getting a quote for the alternative and comparing the real costs, including the hours.</p>

            <h2>Frequently Asked Questions</h2>

            <p><strong>Is Next.js better than Webflow?</strong><br />Not in general. Webflow suits visually edited marketing sites. Next.js suits sites that need custom logic, deep integrations, logged-in areas or more content than Webflow&rsquo;s plans allow.</p>

            <p><strong>When should I move from Webflow to Next.js?</strong><br />When your key features depend on workarounds: third-party widgets, automation chains, CMS limits or custom code inside Webflow.</p>

            <p><strong>Can my team still edit a Next.js site?</strong><br />Yes, with a headless CMS. They can publish pages built from existing sections; new section types need a developer.</p>

          </div>

          {/* CTA + Contact form */}
          <div className="mt-16 pt-10 border-t border-white/10">
            <h2 className="text-3xl font-bold text-white mb-4">Wondering if you&rsquo;ve outgrown Webflow?</h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Send me your site. I&rsquo;ll tell you honestly whether to stay, move, or split the difference, and roughly what each would cost.
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
                    src="https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&w=2000&q=80"
                    alt="Headless CMS Explained"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-[#A3D1FF] transition-colors">Headless CMS Explained</h4>
                  <p className="text-white text-sm mb-4">Can your team still edit the site? What they can and can&rsquo;t change.</p>
                  <button
                    onClick={() => router.push('/blog/headless-cms-explained')}
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
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=2000&q=80"
                    alt="Best Next.js Developers for B2B Service Businesses"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-[#A3D1FF] transition-colors">Best Next.js Developers for B2B</h4>
                  <p className="text-white text-sm mb-4">Who to hire for a Next.js build, ranked by fit.</p>
                  <button
                    onClick={() => router.push('/blog/best-nextjs-developers-b2b-service-businesses-2026')}
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
