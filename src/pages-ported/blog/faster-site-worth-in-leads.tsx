"use client";

import React from 'react';
import { ArrowLeft, Calendar, Clock, ArrowRight, Calculator } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import { useRouter } from 'next/navigation';

const scenarios = [
  { lift: '+5%', label: 'Cautious', rate: '2.1%', leads: '63', clients: '12.6', monthly: '+$3,000', yearly: '+$36,000' },
  { lift: '+10%', label: 'Middle', rate: '2.2%', leads: '66', clients: '13.2', monthly: '+$6,000', yearly: '+$72,000' },
  { lift: '+20%', label: 'Optimistic', rate: '2.4%', leads: '72', clients: '14.4', monthly: '+$12,000', yearly: '+$144,000' },
];

export default function FasterSiteWorthInLeadsPage() {
  const router = useRouter();

  const blogPostSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "What a 1-Second Faster Site Is Worth in Leads",
    "description":
      "A step-by-step walkthrough for putting a dollar figure on site speed: what the research supports, a worked B2B example with cautious, middle and optimistic scenarios, and how to run your own numbers in the ROI calculator.",
    "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2000&q=80",
    "datePublished": "2026-10-15T11:00:00+00:00",
    "dateModified": "2026-10-15T11:00:00+00:00",
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
      "@id": "https://www.marcfriedmanportfolio.com/blog/faster-site-worth-in-leads"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does a faster website increase conversions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "There is no single figure that applies to every site. Deloitte's study for Google found a 0.1-second mobile speed improvement raised retail conversions by 8.4% and cut bounce rates on lead generation pages by 8.3%. For planning, model a range, for example 5%, 10% and 20% more leads for a one-second improvement, and check it against your own analytics after launch."
        }
      },
      {
        "@type": "Question",
        "name": "How do I calculate what site speed is worth to my business?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Multiply monthly visitors by your conversion rate to get leads, then by your close rate and average deal value to get revenue. Apply a percentage lift to the conversion rate for the faster site and compare the two revenue figures. The difference, against the cost of the speed work, tells you whether it pays back."
        }
      },
      {
        "@type": "Question",
        "name": "Does speed matter if my site already loads in under two seconds?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Much less. The biggest gains come from slow sites getting faster. Going from five seconds to four matters far more to visitors than going from 1.5 seconds to 0.5."
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
            What a 1-Second Faster Site Is Worth in Leads
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
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2000&q=80"
              alt="An analytics dashboard on a dark screen showing user counts, bar charts and line graphs for the last seven days."
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg prose-invert max-w-none">

            <p>&ldquo;Faster is better&rdquo; is easy to agree with and hard to budget for. When I quote speed work, the useful question isn&rsquo;t whether it helps. It&rsquo;s whether it helps <em>enough</em> to be worth the invoice. This post walks through how I answer that, with a worked example you can redo with your own numbers.</p>

            <h2>What the research actually supports</h2>

            <p>You&rsquo;ll see one statistic quoted everywhere, usually something like &ldquo;every second of delay costs 7% of conversions&rdquo;. It gets repeated so often that its original source is hard to pin down. Here&rsquo;s what better-documented studies say:</p>

            <ul>
              <li><strong>Deloitte, commissioned by Google</strong>, studied 30 million mobile sessions across 37 brands. A 0.1-second improvement raised retail conversions by 8.4% and cut bounce rates on lead generation pages by 8.3% (<a href="https://web.dev/case-studies/milliseconds-make-millions" target="_blank" rel="noopener noreferrer">Milliseconds Make Millions</a>).</li>
              <li><strong>Google&rsquo;s own mobile research</strong> found the probability of a bounce rises by 32% as load time goes from one second to three (<a href="https://www.thinkwithgoogle.com/marketing-strategies/app-and-mobile/page-load-time-statistics/" target="_blank" rel="noopener noreferrer">Think with Google</a>).</li>
              <li><strong>Portent</strong> analyzed around 100 million page views on B2B and B2C sites and found conversion rates were highest on pages that loaded in about a second, falling as load time rose (<a href="https://www.portent.com/blog/analytics/research-site-speed-hurting-everyone.htm" target="_blank" rel="noopener noreferrer">Portent</a>).</li>
            </ul>

            <p>None of these tell you what one second is worth on <em>your</em> site. Your audience, your offer and how slow you are today all change the answer. So instead of borrowing one number, I model a range.</p>

            <h2>Step 1: Write down your funnel</h2>

            <p>You need four numbers, all of which you probably already have in analytics or your CRM. Here&rsquo;s a made-up but typical B2B service business:</p>

            <ul>
              <li><strong>Monthly visitors:</strong> 3,000</li>
              <li><strong>Visitor-to-lead conversion rate:</strong> 2% (60 leads a month)</li>
              <li><strong>Lead-to-client close rate:</strong> 20% (12 new clients a month)</li>
              <li><strong>Average deal value:</strong> $5,000</li>
            </ul>

            <p>That gives a baseline of 12 &times; $5,000 = <strong>$60,000 a month</strong> in revenue that starts on the website.</p>

            <h2>Step 2: Model three scenarios</h2>

            <p>Now assume the site gets one second faster, and that it increases the conversion rate by a cautious 5%, a middling 10% or an optimistic 20%. These are relative lifts, so 2% becomes 2.1%, 2.2% or 2.4%. Everything else stays the same.</p>
          </div>

          <div className="bg-[#1b1b1b] p-6 border border-white/10 my-8 overflow-x-auto">
            <table className="w-full text-sm min-w-[600px]">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left text-[#A3D1FF] pb-3 pr-4 font-semibold">Scenario</th>
                  <th className="text-left text-gray-300 pb-3 pr-4 font-semibold">Conv. rate</th>
                  <th className="text-left text-gray-300 pb-3 pr-4 font-semibold">Leads / mo</th>
                  <th className="text-left text-gray-300 pb-3 pr-4 font-semibold">Clients / mo</th>
                  <th className="text-left text-gray-300 pb-3 pr-4 font-semibold">Revenue / mo</th>
                  <th className="text-left text-gray-300 pb-3 font-semibold">Per year</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-white/5">
                  <td className="py-3 pr-4 text-white">Today</td>
                  <td className="py-3 pr-4">2.0%</td>
                  <td className="py-3 pr-4">60</td>
                  <td className="py-3 pr-4">12</td>
                  <td className="py-3 pr-4">$60,000</td>
                  <td className="py-3">&ndash;</td>
                </tr>
                {scenarios.map((s, i) => (
                  <tr key={s.label} className={i < scenarios.length - 1 ? 'border-b border-white/5' : ''}>
                    <td className="py-3 pr-4 text-white">{s.label} ({s.lift})</td>
                    <td className="py-3 pr-4">{s.rate}</td>
                    <td className="py-3 pr-4">{s.leads}</td>
                    <td className="py-3 pr-4">{s.clients}</td>
                    <td className="py-3 pr-4 text-[#A3D1FF]">{s.monthly}</td>
                    <td className="py-3">{s.yearly}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="prose prose-lg prose-invert max-w-none">

            <p>Even the cautious case is three extra leads and $36,000 a year. It looks small per month, but it compounds because the visitors were already arriving. You paid to get them there, through ads, SEO or referrals, and a slow page was letting some of them leave.</p>

            <h2>Step 3: Compare it with the cost</h2>

            <p>Divide the cost of the speed work by the monthly gain to get a payback period. If the work costs $4,000, the cautious scenario pays it back in about 1.3 months, and the middle scenario in under a month. If it costs $40,000, the cautious case takes more than a year to pay back (about 13 months), so I&rsquo;d want good reason to believe the middle case, which pays back in under seven, before committing.</p>

            <p>That&rsquo;s the whole method. Its value isn&rsquo;t precision. It turns a vague &ldquo;speed matters&rdquo; into a decision you can defend to whoever signs the cheque.</p>

            <h2>When the maths says don&rsquo;t bother</h2>

            <ul>
              <li><strong>You&rsquo;re already fast.</strong> Going from 1.5 seconds to 0.5 won&rsquo;t move much. The big gains are slow sites getting reasonable. Going from five seconds to four matters far more.</li>
              <li><strong>Traffic is tiny.</strong> A 10% lift on 200 visitors a month is a rounding error. Fix traffic first.</li>
              <li><strong>The problem is the message.</strong> A fast page that doesn&rsquo;t explain what you do still won&rsquo;t convert. Speed amplifies a good page; it doesn&rsquo;t rescue a bad one.</li>
            </ul>

            <p>One extra benefit the model ignores: if you run Google Ads, landing page experience feeds into Quality Score, so a faster landing page can lower what you pay per click as well as converting more of those clicks.</p>

            <h2>Step 4: Run your own numbers</h2>

            <p>First, find out where you stand. Run your homepage and your main landing page through my <a href="/free-website-analyzer">free website analyzer</a> or Google&rsquo;s PageSpeed Insights, and check the Core Web Vitals report in Search Console for what real visitors experience.</p>

            <div className="bg-[#1b1b1b] p-6 border border-white/10 my-8 not-prose">
              <h4 className="text-white font-semibold mb-2 flex items-center">
                <Calculator className="w-5 h-5 text-[#A3D1FF] mr-2" />
                Using the ROI calculator
              </h4>
              <p className="text-gray-300 mb-3">My <a href="/tools/roi-calculator" className="text-[#A3D1FF] hover:underline">website ROI calculator</a> takes four inputs: monthly visitors, conversion rate, average value per conversion and project cost. For a lead-generation site, enter the value of a <em>lead</em> rather than a deal: close rate &times; deal value. In the example above that&rsquo;s 20% &times; $5,000 = $1,000.</p>
              <p className="text-gray-300">One thing to know: the calculator models a full redesign, and it assumes the conversion rate improves 2.5 times, based on my client results. That covers messaging, structure and calls to action as well as speed. If you&rsquo;re only buying speed work, use the cautious-to-optimistic range above instead.</p>
            </div>

            <p>Then measure. After the speed work ships, compare conversion rate for the four weeks before and after, on the same pages, and ideally the same traffic sources. That&rsquo;s your real number, and next time you won&rsquo;t need to borrow anyone else&rsquo;s.</p>

            <h2>Frequently Asked Questions</h2>

            <p><strong>How much does a faster website increase conversions?</strong><br />It depends on the site. Deloitte found a 0.1-second mobile improvement lifted retail conversions 8.4% and cut lead-gen bounce rates 8.3%. Plan with a range, and measure after launch.</p>

            <p><strong>How do I calculate what site speed is worth?</strong><br />Visitors &times; conversion rate &times; close rate &times; deal value, before and after a modeled lift. Compare the difference with the cost of the work.</p>

            <p><strong>Does speed matter if my site already loads in under two seconds?</strong><br />Much less. The biggest gains come when slow sites become reasonable.</p>

          </div>

          {/* CTA + Contact form */}
          <div className="mt-16 pt-10 border-t border-white/10">
            <h2 className="text-3xl font-bold text-white mb-4">Want this worked out for your site?</h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Send me your URL and rough numbers. I&rsquo;ll measure your current speed and tell you which scenario is realistic, and whether the work is worth paying for.
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
                  <p className="text-white text-sm mb-4">When a no-code site stops being enough.</p>
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
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2000&q=80"
                    alt="Minimal, Fast, Sustainable UX"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-[#A3D1FF] transition-colors">Minimal, Fast, Sustainable UX</h4>
                  <p className="text-white text-sm mb-4">Designing for performance from the first wireframe.</p>
                  <button
                    onClick={() => router.push('/blog/minimal-fast-sustainable-ux')}
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
