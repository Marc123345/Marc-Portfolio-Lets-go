"use client";

import React from 'react';
import { ArrowLeft, Calendar, Clock, ArrowRight, Info } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import { useRouter } from 'next/navigation';

export default function MachineExperiencePage() {
  const router = useRouter();

  const blogPostSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Machine Experience (MX): Why Lighter Front Ends Work Better for People and Crawlers",
    "description":
      "Machine Experience means designing for the software that reads your site as well as the people who visit it. Why that pushes front ends toward plain HTML, CSS-first interaction, fast loading and accessibility, and what to change first.",
    "image": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=80",
    "datePublished": "2026-10-29T09:00:00+00:00",
    "dateModified": "2026-10-29T09:00:00+00:00",
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
      "@id": "https://www.marcfriedmanportfolio.com/blog/machine-experience-mx-lightweight-frontends"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Machine Experience (MX)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Machine Experience is the idea that a website has two audiences: people, and the software that reads pages on their behalf, such as search crawlers, AI assistants, screen readers, translation tools and browser agents. MX means making the site easy for that software to fetch, parse and understand."
        }
      },
      {
        "@type": "Question",
        "name": "Do AI crawlers run JavaScript?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Mostly not. An analysis of crawler traffic published by Vercel and MERJ in December 2024 found that the crawlers from OpenAI and Anthropic downloaded JavaScript files but did not execute them. Googlebot does render JavaScript. Content that only appears after client-side rendering is at risk of being invisible to AI tools."
        }
      },
      {
        "@type": "Question",
        "name": "Is accessibility part of Machine Experience?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Screen readers are machines reading your page, and they depend on the same things crawlers and AI agents do: real headings, labelled controls, meaningful link text and content that exists in the HTML. Work done for accessibility usually improves how other software reads the site too."
        }
      },
      {
        "@type": "Question",
        "name": "Does a lightweight front end mean a plain-looking website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Modern CSS handles animation, transitions, layout changes, popovers and dialogs that used to need JavaScript libraries. The visual result can be just as rich. What changes is that the content and core interactions work before, or without, a large script bundle."
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
            Machine Experience (MX): Why Lighter Front Ends Work Better for People and Crawlers
          </h1>

          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-white">
              <Calendar className="w-4 h-4" />
              <span>October 29, 2026</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Clock className="w-4 h-4" />
              <span>9 min read</span>
            </div>
          </div>

          <div className="aspect-[21/9] overflow-hidden mb-8">
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=80"
              alt="Close-up of a green and black circuit board with chips and capacitors."
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg prose-invert max-w-none">

            <p>We spend a lot of time on user experience, and rightly so. But a growing share of the &ldquo;visitors&rdquo; reading your website aren&rsquo;t people. They&rsquo;re search crawlers, AI assistants answering a question about your industry, screen readers, translation tools and, more and more, browser agents filling in forms for someone.</p>

            <p>Machine Experience, or MX, is the name some designers and developers now use for designing with that second audience in mind. It sounds new, but most of it is old advice that finally has a commercial reason behind it: send real HTML, keep JavaScript for the things that need it, load fast and follow accessibility standards.</p>

            <h2>Who the machines are</h2>

            <ul>
              <li><strong>Search crawlers.</strong> Googlebot and Bingbot index your pages for search results.</li>
              <li><strong>AI crawlers and assistants.</strong> GPTBot, ClaudeBot, PerplexityBot and others fetch pages to train models or to answer a user&rsquo;s question in real time.</li>
              <li><strong>Assistive technology.</strong> Screen readers, voice control and switch devices read the structure of the page to present it another way.</li>
              <li><strong>Browser agents.</strong> Tools that click, scroll and type on a person&rsquo;s behalf to book, compare or buy.</li>
              <li><strong>Everyday utilities.</strong> Reader mode, translation, link previews in Slack and WhatsApp, and password managers all parse your markup.</li>
            </ul>

            <p>They differ a lot in sophistication, but they share one thing: they do best with content that is already in the HTML and clearly labelled.</p>

            <h2>Why heavy JavaScript is a problem for them</h2>

            <p>A lot of modern sites ship an almost empty HTML file and build the page in the browser with JavaScript. A person on a fast laptop barely notices. Machines notice a great deal.</p>

            <p>Google does render JavaScript, though rendering can lag behind crawling. Many AI crawlers don&rsquo;t render it at all. When Vercel and MERJ analysed crawler traffic in late 2024, they found that OpenAI&rsquo;s and Anthropic&rsquo;s crawlers fetched JavaScript files but didn&rsquo;t execute them. If your product descriptions, prices or case studies only appear after a script runs, those crawlers see a blank page, and an AI assistant asked about your services has nothing of yours to quote. I cover the crawler side in more detail in <a href="/blog/optimizing-websites-for-ai-crawlers">optimizing websites for AI crawlers</a>.</p>

            <p>Browser agents and screen readers have a related problem. A <code>&lt;div&gt;</code> with a click handler looks like a button to a sighted person and like plain text to everything else. A real <code>&lt;button&gt;</code> announces itself, takes focus and responds to Enter and Space with no extra code.</p>

            <h2>CSS now covers much of what JavaScript used to do</h2>

            <p>The good news is that leaner front ends don&rsquo;t have to look plainer. Over the last few years browsers have added CSS and HTML features that replace whole libraries:</p>

            <ul>
              <li><strong>Popovers and dialogs.</strong> The <code>popover</code> attribute and the <code>&lt;dialog&gt;</code> element handle menus, tooltips and modals, including focus and the Escape key.</li>
              <li><strong><code>:has()</code>.</strong> Style a parent based on its children, such as highlighting a form section when a field inside it is invalid, with no script.</li>
              <li><strong>Container queries.</strong> Components adapt to the space they sit in, not just the screen width.</li>
              <li><strong>Scroll-driven animations.</strong> Progress bars, reveals and parallax tied to scroll position, running off the main thread.</li>
              <li><strong>View transitions.</strong> Smooth animated changes between states, and between pages in browsers that support it.</li>
              <li><strong><code>&lt;details&gt;</code> and <code>&lt;summary&gt;</code>.</strong> Accordions and FAQs that work with no JavaScript at all.</li>
            </ul>

            <p>Support for the newer ones still varies, so check Baseline or caniuse before relying on them, and treat the effect as an extra rather than a requirement. I went through this shift in more depth in <a href="/blog/css-eating-javascript-lunch">CSS is eating JavaScript&rsquo;s lunch</a>.</p>

            <div className="bg-[#1b1b1b] p-6 border border-white/10 my-8 not-prose">
              <h4 className="text-white font-semibold mb-2 flex items-center">
                <Info className="w-5 h-5 text-[#A3D1FF] mr-2" />
                The view-source test
              </h4>
              <p className="text-gray-300">Open your most important page, right-click and choose &ldquo;View page source&rdquo; (not Inspect). Search for a sentence from the main content and for your price or phone number. If they aren&rsquo;t in the source, a large share of machines can&rsquo;t see them either.</p>
            </div>

            <h2>Speed is a machine metric too</h2>

            <p>Fast pages help people convert. They also help machines. Crawlers work to a budget, and slow, heavy pages get fetched less often. Agents time out. Screen readers on low-end phones stutter when the main thread is busy running scripts.</p>

            <p>Google&rsquo;s Core Web Vitals are a sensible yardstick for both audiences:</p>

            <ul>
              <li><strong>Largest Contentful Paint (LCP)</strong> under 2.5 seconds: the main content shows up quickly.</li>
              <li><strong>Interaction to Next Paint (INP)</strong> under 200 milliseconds: the page responds promptly when tapped or clicked. Heavy JavaScript is the usual reason this fails.</li>
              <li><strong>Cumulative Layout Shift (CLS)</strong> under 0.1: things don&rsquo;t jump around as the page loads.</li>
            </ul>

            <p>If you want a dollar figure on what better speed is worth, I walk through one in <a href="/blog/faster-site-worth-in-leads">what a 1-second faster site is worth in leads</a>.</p>

            <h2>Accessibility is where MX and UX meet</h2>

            <p>Accessibility compliance is the part of MX with legal weight. The European Accessibility Act has applied to many consumer-facing digital services in the EU since June 2025, and website accessibility lawsuits remain common in the US. The practical standard behind both is WCAG.</p>

            <p>The useful thing is that WCAG work and MX work overlap almost completely. Proper heading order, labelled form fields, descriptive link text, alt text, real buttons and visible focus all help a screen reader user, and they all help a crawler or an agent understand what the page is and what it can do. You fix it once and both audiences benefit. My <a href="/blog/electronic-accessibility">guide to electronic accessibility</a> covers the basics.</p>

            <h2>A practical MX checklist</h2>

            <ul>
              <li>Render content on the server (static generation or server rendering), so it&rsquo;s in the HTML on first load.</li>
              <li>Use semantic elements: <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;article&gt;</code>, headings in order, real buttons and links.</li>
              <li>Give every important page its own URL and link to it with a normal <code>&lt;a href&gt;</code>.</li>
              <li>Add structured data (schema.org) for your organisation, products, articles and FAQs.</li>
              <li>Reach for CSS and HTML before adding a JavaScript library for menus, modals, accordions and animation.</li>
              <li>Audit your third-party scripts. Chat widgets, tag managers and heatmaps are often the heaviest things on the page.</li>
              <li>Check <code>robots.txt</code> and decide on purpose which AI crawlers you allow.</li>
              <li>Test with a keyboard, a screen reader and JavaScript switched off, at least once per release.</li>
            </ul>

            <h2>What this means for a redesign</h2>

            <p>You don&rsquo;t need to throw out React or Next.js to get this right. This portfolio runs on Next.js. What matters is where the work happens. Pages are generated as HTML ahead of time, interactive pieces load only where they&rsquo;re used, and the visual polish comes mostly from CSS. A visitor gets a fast, rich page, and a crawler or screen reader gets clean, complete content.</p>

            <p>If a proposal for your new site leads with a long list of animation libraries, ask how the content looks with scripts turned off. It&rsquo;s a quick way to find out whether the build was planned with both audiences in mind.</p>

            <h2>Frequently Asked Questions</h2>

            <p><strong>What is Machine Experience (MX)?</strong><br />Designing a site so that software reading it, such as crawlers, AI assistants, screen readers and browser agents, can fetch, parse and understand it as easily as people can.</p>

            <p><strong>Do AI crawlers run JavaScript?</strong><br />Mostly not. Content that only appears after client-side rendering may be invisible to them. Googlebot does render JavaScript.</p>

            <p><strong>Is accessibility part of MX?</strong><br />Yes. Screen readers rely on the same structure that crawlers and agents do, so accessibility work improves both.</p>

            <p><strong>Does a lightweight front end look plain?</strong><br />No. Modern CSS handles most animation and interaction, so the design can stay rich while the page stays light.</p>

          </div>

          {/* CTA + Contact form */}
          <div className="mt-16 pt-10 border-t border-white/10">
            <h2 className="text-3xl font-bold text-white mb-4">Is your site readable by machines?</h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Send me the URL. I&rsquo;ll check what crawlers and screen readers actually see, how heavy the JavaScript is, and what to fix first.
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
                    src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=2000&q=80"
                    alt="Optimizing websites for AI crawlers"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-[#A3D1FF] transition-colors">Optimizing Websites for AI Crawlers</h4>
                  <p className="text-white text-sm mb-4">What AI crawlers fetch, what they skip, and how to make your content quotable.</p>
                  <button
                    onClick={() => router.push('/blog/optimizing-websites-for-ai-crawlers')}
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
                    src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=2000&q=80"
                    alt="AI copilots in web design"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-[#A3D1FF] transition-colors">AI Copilots in Web Design</h4>
                  <p className="text-white text-sm mb-4">Building AI help that is transparent, optional and easy to ignore.</p>
                  <button
                    onClick={() => router.push('/blog/ai-copilot-ux-transparent-optional')}
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
