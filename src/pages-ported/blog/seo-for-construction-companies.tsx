"use client";

import React from 'react';
import { ArrowLeft, Calendar, Clock, Linkedin, Facebook, Link, ArrowRight } from 'lucide-react';
import MagneticButton from '@/components/MagneticButton';
import TwitterIcon from '@/components/TwitterIcon';
import { useRouter } from 'next/navigation';

export default function ConstructionSEOPage() {
  const router = useRouter();

  const blogPostSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "SEO for Construction Companies: Win More Projects from Google in 2026",
    "description":
      "How construction firms turn a website into a steady source of project leads: local SEO, keyword research, on-page and technical SEO, content, link building, AI answer engines, and how to track results.",
    "image": "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2000&q=80",
    "datePublished": "2026-07-16T10:00:00+00:00",
    "dateModified": "2026-07-16T10:00:00+00:00",
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
      "@id": "https://www.marcfriedmanportfolio.com/blog/seo-for-construction-companies"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostSchema) }}
      />

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
            SEO for Construction Companies: Win More Projects from Google in 2026
          </h1>

          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-white">
              <Calendar className="w-4 h-4" />
              <span>July 16, 2026</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Clock className="w-4 h-4" />
              <span>16 min read</span>
            </div>
          </div>

          <div className="aspect-[21/9] overflow-hidden mb-8">
            <img
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2000&q=80"
              alt="A commercial construction site, the kind of project a well-optimized construction website turns into a search-driven lead"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg prose-invert max-w-none">
            <p>In 2026, most property owners, general contractors, and homeowners start the search for a contractor on Google long before they ask a neighbor for a referral. SEO for construction companies is the practice of turning a construction website into a steady source of project leads, RFPs, bids, and estimate requests, without depending on paid ads or word of mouth alone.</p>
            <p>The US construction industry tops <strong>$3.7 trillion</strong> in market size, and a growing share of buyers now research contractors online before inviting anyone to bid. The phrase &ldquo;SEO for construction companies&rdquo; alone draws roughly <strong>2,400 monthly searches</strong>, and construction-related queries collectively pull around <strong>1.7 million searches a month</strong>. That volume is real project dollars.</p>
            <p>Construction SEO combines local SEO, project proof, technical SEO, and conversion-focused design so your firm shows up when it matters most. Here is what this guide covers:</p>
            <ul>
              <li>What construction SEO actually means, and why it&rsquo;s critical for growth in 2026</li>
              <li>Residential vs. commercial construction SEO differences</li>
              <li>Local SEO, keyword research, and on-page and off-page tactics</li>
              <li>Content strategy, technical SEO, and link building</li>
              <li>How to track results and choose the right SEO partner</li>
            </ul>

            <h2>What is SEO for construction companies?</h2>
            <p>SEO for construction companies means optimizing a construction website so it appears when potential clients search phrases like &ldquo;general contractor near me,&rdquo; &ldquo;commercial builder in Dallas,&rdquo; or &ldquo;kitchen remodeling contractor Boston.&rdquo; The work spans four disciplines that reinforce each other: <strong>technical SEO</strong> (site speed, mobile design, crawlability), <strong>on-page SEO</strong> (service pages, titles, headings), <strong>local signals</strong> (Google Business Profile, reviews, citations), and <strong>off-page SEO</strong> (backlinks from relevant industry sources).</p>
            <p>Take a design-build firm in the Midwest. It might target &ldquo;design-build contractor Chicago&rdquo; for commercial work and &ldquo;industrial warehouse construction Illinois&rdquo; for EPC clients. Each phrase serves a different buyer, and each needs its own optimized page. Construction SEO covers every segment of the industry:</p>
            <ul>
              <li>Residential builders and remodelers</li>
              <li>Commercial construction firms (office, retail, healthcare)</li>
              <li>Specialty contractors (roofing, concrete, HVAC, electrical)</li>
              <li>EPC and infrastructure companies</li>
              <li>Design-build and CM-at-risk firms</li>
            </ul>
            <p>The common thread: if potential customers are searching online for what you build, your site needs to show up in the results.</p>

            <h2>Why SEO is critical for construction businesses in 2026</h2>
            <p>Buyer behavior has shifted for good. Even clients who arrive by referral vet contractors through search before they call. A facilities manager searching &ldquo;tenant improvement contractor Phoenix&rdquo; will review safety records, portfolios, and reviews. A homeowner searching &ldquo;bathroom remodel cost 2026&rdquo; wants pricing content before requesting an estimate. A developer looking for &ldquo;design-build contractor Orlando&rdquo; expects case studies proving commercial experience.</p>
            <p>The numbers back the shift. Benchmark data from regional construction firms shows organic search accounts for <strong>38&ndash;54% of qualified project inquiries</strong> for well-optimized businesses. And the economics are hard to argue with: SEO leads cost <strong>$25&ndash;$45 each</strong> at maturity versus roughly <strong>$90 per lead</strong> for paid home-services ads. Traditional advertising, yard signs, mailers, print, trade shows, is expensive and stops working the moment you stop paying. An optimized website keeps producing inquiries month after month.</p>

            <div className="bg-[#1b1b1b] p-6 border border-white/10 my-8">
              <h4 className="text-white font-semibold mb-2">Page two is invisible</h4>
              <p className="text-gray-300 mb-0">Only <strong>0.63%</strong> of searchers click a second-page result (Backlinko). If your construction business isn&rsquo;t on page one, you&rsquo;re effectively invisible. Realistic timelines: most firms see early movement in <strong>60&ndash;90 days</strong> and meaningful lead growth between <strong>6&ndash;12 months</strong>, depending on competition and existing domain authority.</p>
            </div>

            <h2>How construction SEO works: a quick walkthrough</h2>
            <p>Meet Mike, a remodeling contractor in Denver. A year ago his website was a five-page brochure with no blog, no project photos, and almost no rankings, 3&ndash;4 inbound calls a month from search, everything else from referrals.</p>
            <p>Mike fixed his site structure, built dedicated service pages for &ldquo;basement finishing Denver&rdquo; and &ldquo;whole home remodel Denver,&rdquo; and optimized his Google Business Profile with fresh photos, accurate categories, and service areas. He published six project case studies with before/after photos, cost ranges, and timelines, and asked every client for a Google review. Within nine months his organic traffic more than doubled, inbound inquiries climbed from 3&ndash;4 a month to <strong>15+ in peak season</strong>, and his close rate rose because visitors arriving from search already understood his work and pricing.</p>
            <p>The mechanism is simple: optimize pages with relevant keywords, project proof, and clear calls-to-action → Google ranks them on relevance, authority, trust, and user behavior → more owners find you for high-intent queries → more estimates requested → more signed contracts from leads that already trust your track record.</p>

            <h2>The four types of construction SEO</h2>
            <p>Four core types of SEO work together to drive rankings for a construction firm, each with a distinct role.</p>
            <h3>Local SEO</h3>
            <p>Optimize your Google Business Profile, Bing Places, and Apple Maps listings. Build citations on directories like HomeAdvisor, Angi, Houzz, local chambers, and trade associations, and keep your NAP (name, address, phone) identical across every listing. Local SEO is what puts construction companies into the local results where most project decisions happen.</p>
            <h3>On-page SEO</h3>
            <p>Create a dedicated service page for each offering (&ldquo;concrete contractor,&rdquo; &ldquo;tenant improvements,&rdquo; &ldquo;site work &amp; excavation&rdquo;), build geographic pages like &ldquo;commercial contractor in Raleigh, NC,&rdquo; and optimize title tags, meta descriptions, headings, and image alt text.</p>
            <h3>Off-page SEO</h3>
            <p>Earn backlinks from suppliers, manufacturers, local news, industry blogs, trade associations, and project partners (architects, engineers). Guest posts and PR mentions build your site&rsquo;s authority over time.</p>
            <h3>Technical SEO</h3>
            <p>Improve site speed and mobile performance, ensure HTTPS, use clean URL structures and XML sitemaps, pass Core Web Vitals, and make sure photo-heavy project galleries load fast on any device.</p>

            <h2>Residential vs. commercial construction SEO</h2>
            <p>Residential and commercial construction SEO serve different audiences with different expectations, and getting the distinction right determines whether your effort attracts the right leads.</p>
            <p><strong>Residential SEO</strong> targets homeowners making emotional, design-driven decisions, searching &ldquo;kitchen remodel ideas 2026,&rdquo; &ldquo;home addition contractor Atlanta,&rdquo; or &ldquo;how much does a bathroom renovation cost.&rdquo; Those pages should lead with before/after photography, design inspiration, budget ranges, financing, and warranties. The tone is visual and approachable.</p>
            <p><strong>Commercial SEO</strong> targets developers, facility managers, and procurement teams searching &ldquo;office build-out contractor Houston,&rdquo; &ldquo;design-build warehouse construction,&rdquo; or &ldquo;GMP cleanroom contractor.&rdquo; Those pages emphasize safety records, schedules, delivery models (CM-at-risk, design-build, EPC), and compliance (OSHA, LEED, ISO). The tone is technical and data-rich.</p>
            <p>To serve both: create separate navigation for residential and commercial work, build case studies with metrics relevant to each audience, use the right testimonials (homeowner quotes vs. developer endorsements), target distinct keyword clusters, and adjust the calls-to-action, &ldquo;Schedule a Design Consultation&rdquo; for residential, &ldquo;Request a Pre-Qualification Package&rdquo; for commercial. Lump everything together and you risk confusing both audiences and ranking for neither.</p>

            <h2>Local SEO: winning jobs in your service area</h2>
            <p>Most construction projects are awarded within specific cities, counties, or metros, so local search is where the highest-converting traffic lives. Target local keywords like &ldquo;concrete driveway replacement Columbus,&rdquo; &ldquo;metal building contractor San Antonio,&rdquo; or &ldquo;commercial roofer near me,&rdquo; and build a location-specific landing page for each market you serve.</p>
            <p>Google Business Profile is the foundation. Select accurate categories and service areas, write a keyword-rich description, upload photos of completed projects regularly, post updates about recent milestones, and answer Q&amp;A promptly. Done well, local SEO can lift construction-site traffic by <strong>30% or more</strong>, and firms ranking in the Local Pack (the map 3-pack) capture <strong>40&ndash;55% of mobile clicks</strong> for relevant queries.</p>
            <p>Citations matter too: keep your business name, address, phone, and URL identical across your site footer, directories, and local listings. And reviews drive decisions, positive reviews improve both credibility and local rankings. Ask after every successful project with a follow-up email linking straight to your Google review page, and respond to reviews, positive and negative, to show you value feedback. One NYC construction firm saw calls increase <strong>783% in 60 days</strong> after overhauling its GBP, cleaning up citations, and ramping review acquisition. If local SEO is your focus, our <a href="/services/local-seo/">local SEO service</a> is built around exactly this.</p>

            <h2>Keyword research for construction firms</h2>
            <p>Keyword research is how you discover what clients search when they need construction services. The terms fall into clear categories: <strong>services</strong> (&ldquo;tilt-up concrete contractor,&rdquo; &ldquo;commercial roofing repair&rdquo;), <strong>locations</strong> (&ldquo;in Charlotte NC,&rdquo; &ldquo;near me&rdquo;), <strong>facility types</strong> (&ldquo;school construction,&rdquo; &ldquo;hospital renovation&rdquo;), and <strong>problems</strong> (&ldquo;fix foundation crack,&rdquo; &ldquo;leaking commercial roof repair&rdquo;).</p>
            <p>Long-tail, service-specific keywords attract higher-intent buyers. A broad term like &ldquo;contractor&rdquo; is nearly impossible to rank for, but &ldquo;metal building construction in Tulsa&rdquo; connects you directly with buyers ready to hire. (For reference, &ldquo;Construction SEO&rdquo; itself sees ~1,600 monthly searches at a manageable keyword difficulty of 18.) Use Google Keyword Planner, Search Console, Ahrefs, and SEMrush, plus free signals like Autocomplete and People Also Ask, and study what top-ranking competitors target. Then prioritize by business value: build keyword clusters around your highest-margin work first, custom homes, commercial tenant improvements, industrial construction, with supporting pages for design options, pricing factors, permitting, and case studies.</p>

            <h2>On-page SEO for construction websites</h2>
            <p>On-page SEO is how you structure and write each page so search engines and humans both understand what you do and where you work. The page structure every construction firm needs:</p>
            <ul>
              <li>Homepage with clear positioning, top services, and geographic focus</li>
              <li>Service category pages (new construction, remodeling, design-build, civil work)</li>
              <li>Specific trade pages (roofing, concrete, HVAC, electrical)</li>
              <li>Location/service-area pages for each city or county you serve</li>
              <li>A project portfolio with high-quality case studies</li>
              <li>An about/company page with licenses, safety record, and team bios</li>
              <li>A contact/estimate page with simple forms</li>
            </ul>
            <p>Write title tags and meta descriptions as service + location + one differentiator, for example: &ldquo;Commercial General Contractor in Phoenix, AZ | Office &amp; Industrial Construction, LEED Certified.&rdquo; Use clear H1/H2 headings, and make alt text describe the real project (&ldquo;steel frame erection for 120,000 sq ft warehouse in Dallas&rdquo; rather than &ldquo;construction photo&rdquo;). Build internal links between related services and case studies, and put trust elements, licenses, insurance, safety awards, and associations (AGC, ABC, NAHB), on every page. The same structure-plus-conversion approach drives our <a href="/services/seo-content-layout/">SEO content &amp; layout work</a>.</p>

            <h2>Content strategy: turning expertise into leads</h2>
            <p>Every construction business has deep expertise in permitting, inspections, scheduling, materials, and safety, and that knowledge is exactly what your customers search for. Content types that perform well:</p>
            <ul>
              <li>Project spotlights with cost ranges, timelines, and before/after photos</li>
              <li>Step-by-step guides (&ldquo;How long does a bathroom remodel take in 2026?&rdquo;)</li>
              <li>FAQs on local building codes and permitting</li>
              <li>Checklists (&ldquo;Pre-construction checklist for warehouse fit-outs&rdquo;)</li>
              <li>Comparisons (&ldquo;Design-bid-build vs. design-build for schools&rdquo;)</li>
            </ul>
            <p>Write in your clients&rsquo; language, a homeowner searches &ldquo;fix my sagging floor,&rdquo; not &ldquo;structural floor joist remediation.&rdquo; Use professional project photos, drone footage, timelapse videos, and downloadable guides to lift engagement and dwell time. Plan a calendar around seasonal demand (roofing content in spring, interior remodels in winter), aim for 2&ndash;4 pieces a month tied to a specific service, city, or question, and give every piece a clear call-to-action.</p>

            <h2>Technical SEO and user experience</h2>
            <p>Technical SEO makes sure search engines can crawl and index your site, and that owners don&rsquo;t bounce before they convert. Two facts set the stakes: page speed directly affects rankings (and photo-heavy galleries are especially vulnerable to slow loads), and <strong>60% of searches happen on mobile</strong>, whether a homeowner on the couch or a project manager on the jobsite. Priorities:</p>
            <ul>
              <li>Pass Core Web Vitals (LCP, CLS, INP)</li>
              <li>HTTPS across every page, clean URLs like <code>/services/commercial-roofing/houston/</code></li>
              <li>Submit XML sitemaps and fix crawl errors in Search Console</li>
              <li>Compress and lazy-load gallery images</li>
              <li>Test contact forms and click-to-call buttons regularly</li>
            </ul>
            <p>For UX, organize navigation by service and industry, put a &ldquo;Request a Quote&rdquo; button above the fold on every service page, display phone numbers prominently, and keep estimate forms short (name, email, phone, project type, zip). Diagnose with PageSpeed Insights and Lighthouse, and test on real phones, not just desktop.</p>

            <h2>Link building and online authority</h2>
            <p>Backlinks from relevant sites act as votes of confidence, and they matter most for competitive terms like &ldquo;commercial contractor [city].&rdquo; Off-page SEO for construction doesn&rsquo;t require shady tactics, it requires the same relationships you build on every project:</p>
            <ul>
              <li>Supplier and manufacturer partner pages (concrete, steel, roofing systems)</li>
              <li>Trade association directories (AGC, ABC, NAHB)</li>
              <li>Local chambers and economic development groups</li>
              <li>Architecture and engineering partners&rsquo; portfolio pages</li>
              <li>Local business journals covering project completions</li>
              <li>Sponsor pages for local events, youth sports, or charity builds</li>
            </ul>
            <p>PR-style tactics work: share major wins with local media, write guest articles on building trends, and get quoted on materials costs or code changes. Co-branded case studies are especially effective, when you finish a notable project, publish a joint case study with the architect or developer and link to each other&rsquo;s pages. Avoid black-hat tactics (bought links, spammy directories, link schemes); Google increasingly penalizes them, and the short-term gain isn&rsquo;t worth the long-term risk.</p>

            <h2>Optimizing for AI and answer engines</h2>
            <p>AI features like Google&rsquo;s AI Overviews increasingly pull direct answers from construction websites, and firms with clear, structured content get quoted and get clicks. Format content to be answer-ready: start sections with short, direct definitions, use numbered steps for processes, and add FAQ blocks answering questions like &ldquo;How long does a commercial build-out take?&rdquo;</p>
            <p>Reinforce entity clarity, consistently name your company, list key locations, identify principals and project managers, and highlight certifications (LEED AP, DBE, WBE), and use <strong>schema markup</strong>: LocalBusiness (NAP and service areas), Organization (founding date, logo, social profiles), Service (each construction service), and Review (aggregate ratings). A snippet like &ldquo;A commercial office build-out in Phoenix typically takes 12&ndash;20 weeks from permitting to occupancy; costs range from $45&ndash;$120 per square foot for standard Class A improvements&rdquo; is far more likely to surface in an AI answer. This is the same discipline behind our <a href="/blog/what-is-aeo">answer engine optimization</a> and <a href="/blog/what-is-geo">generative engine optimization</a> playbooks.</p>

            <h2>Tracking results and conversions</h2>
            <p>SEO without measurement is guesswork, and construction leaders need metrics tied to business outcomes, not traffic charts. Track:</p>
            <ul>
              <li>Rankings for priority service + location terms</li>
              <li>Organic impressions and clicks in Search Console</li>
              <li>Traffic to service and case-study pages</li>
              <li>Google Business Profile interactions (calls, clicks, direction requests)</li>
              <li>Form submissions and phone calls (bid and estimate requests)</li>
              <li>Signed contracts traceable to organic leads</li>
            </ul>
            <p>Set up GA4 and Search Console as your baseline, add call tracking with unique numbers on key landing pages, and build a simple dashboard showing organic leads by service, city, and project size. Expect low-difficulty local terms to move in 30&ndash;60 days, moderate service-area pages in 3&ndash;6 months, and highly competitive commercial keywords in 6&ndash;12+ months. Then calculate rough ROI: average project value × gross margin × close rate from organic leads, minus SEO cost. The compounding returns make it one of the most efficient investments a construction firm can make, remember, the gap between page one and page two is the gap between getting calls and getting nothing.</p>

            <h2>Choosing an SEO partner</h2>
            <p>Not every agency understands how construction firms win work, the sales cycle is long, projects are complex, and leads often look like RFP invitations rather than e-commerce checkouts. Look for documented experience with construction or specialty contractors, case studies showing traffic <em>and</em> lead growth (not just rankings), familiarity with bid processes and how estimators qualify leads, capability across local, technical, content, and link building, and reporting tied to leads and revenue.</p>
            <p>Ask to see construction SEO case studies with real conversion data, how they handle local vs. regional vs. national campaigns, how they coordinate with your estimators and project managers, and what the first 90 days look like. Watch for red flags: guaranteed &ldquo;#1 rankings&rdquo; (no one controls the algorithm), vanity metrics with no link to leads, cheap link packages or spun content, and no transparency into monthly work. Start focused, pick one or two high-value services and priority locations, and build a 90-day roadmap around attracting higher-quality leads, not just more traffic.</p>

            <h2>Turn your construction website into a 24/7 project generator</h2>
            <p>For construction companies, SEO isn&rsquo;t about vanity traffic. It&rsquo;s about getting onto more shortlists, earning more walk-throughs, landing more pre-con meetings, and signing more contracts. Every service page, case study, and Google review works around the clock to bring potential clients to your door.</p>
            <p>Don&rsquo;t wait for the perfect plan. Pick one starting point in the next 30 days, complete your Google Business Profile, create two service pages for your highest-margin work, or publish a case study from a recent project. Firms that start now in 2026 will hold a commanding lead over competitors still relying only on referrals, because the ones that show up in search today will own the project pipelines of tomorrow.</p>
          </div>

          {/* Author Section */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="flex items-center gap-4">
              <img
                src="https://ik.imagekit.io/qcvroy8xpd/PW8VUKH.png?updatedAt=1759693058055&tr=f-webp"
                alt="Marc Friedman"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-semibold text-white">Marc Friedman</h3>
                <p className="text-white">Full Stack Designer &amp; Developer</p>
              </div>
            </div>
          </div>

          {/* Share Section */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <h3 className="text-xl font-semibold text-white mb-4">Share this article</h3>
            <div className="flex gap-3">
              <button className="p-3 bg-[#1b1b1b] rounded-full hover:bg-[#1877F2]/20 text-[#1877F2] transition-colors" aria-label="Share on Facebook">
                <Facebook className="w-5 h-5" />
              </button>
              <button className="p-3 bg-[#1b1b1b] rounded-full hover:bg-[#1DA1F2]/20 text-[#1DA1F2] transition-colors" aria-label="Share on X">
                <TwitterIcon className="w-5 h-5" />
              </button>
              <button className="p-3 bg-[#1b1b1b] rounded-full hover:bg-[#0077B5]/20 text-[#0077B5] transition-colors" aria-label="Share on LinkedIn">
                <Linkedin className="w-5 h-5" />
              </button>
              <button className="p-3 bg-[#1b1b1b] rounded-full hover:bg-[#A3D1FF]/20 text-[#A3D1FF] transition-colors" aria-label="Copy link">
                <Link className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-semibold text-white mb-6">Related Articles</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-[#1b1b1b] overflow-hidden border border-white/10 hover:border-[#A3D1FF] transition-all group">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=2000&q=80"
                    alt="Local SEO for Paving Contractors"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-[#A3D1FF] transition-colors">Local SEO for Paving Contractors</h4>
                  <p className="text-white text-sm mb-4">The map-pack, GBP, and citation playbook for winning jobs in a defined service area.</p>
                  <button
                    onClick={() => router.push('/blog/local-seo-for-paving-contractors')}
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
                    src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=2000&q=80"
                    alt="What Is AEO? Answer Engine Optimization Explained"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-[#A3D1FF] transition-colors">What Is AEO?</h4>
                  <p className="text-white text-sm mb-4">Structure content so ChatGPT, Perplexity, and Google AI can extract and cite it.</p>
                  <button
                    onClick={() => router.push('/blog/what-is-aeo')}
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

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#1b1b1b]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Want your construction site on page one?</h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Local SEO, fast build-heavy pages, project-proof content, and schema that AI answers can read, built around your highest-margin services and the markets you actually serve. Let&rsquo;s scope it.
          </p>
          <MagneticButton>
            <button
              onClick={() => router.push('/contact')}
              className="mr_btn mr_btn_primary inline-flex items-center gap-2"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </MagneticButton>
        </div>
      </section>
    </>
  );
}
