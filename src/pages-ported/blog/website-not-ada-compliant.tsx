"use client";

import React from 'react';
import { ArrowLeft, Calendar, Clock, Linkedin, Facebook, Link, ArrowRight } from 'lucide-react';
import MagneticButton from '@/components/MagneticButton';
import TwitterIcon from '@/components/TwitterIcon';
import ContactForm from '@/components/ContactForm';
import { useRouter } from 'next/navigation';

export default function WebsiteNotADACompliantPage() {
  const router = useRouter();

  const blogPostSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Website Not ADA Compliant: Risks, Requirements, and How to Fix It",
    "description":
      "When the ADA applies to your website, the WCAG 2.1/2.2 AA standard courts and the DOJ use, the accessibility failures that trigger lawsuits and demand letters, and a practical roadmap to fix them.",
    "image": "https://images.surferseo.art/90ac6ac9-d569-42bd-b37a-5b198351ceaa.png",
    "datePublished": "2026-07-16T09:00:00+00:00",
    "dateModified": "2026-07-16T09:00:00+00:00",
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
      "@id": "https://www.marcfriedmanportfolio.com/blog/website-not-ada-compliant"
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
            Website Not ADA Compliant: Risks, Requirements, and How to Fix It
          </h1>

          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-white">
              <Calendar className="w-4 h-4" />
              <span>July 16, 2026</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Clock className="w-4 h-4" />
              <span>14 min read</span>
            </div>
          </div>

          <div className="aspect-[21/9] overflow-hidden mb-8">
            <img
              src="https://images.surferseo.art/90ac6ac9-d569-42bd-b37a-5b198351ceaa.png"
              alt="A person using screen-magnification software to read a website, one of the assistive technologies an inaccessible site can lock out"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg prose-invert max-w-none">
            <p>A website that is not ADA compliant puts up barriers that stop people with disabilities from using it: missing alt text on images, keyboard traps that lock users out of the navigation, contrast so low the text is unreadable. These are not cosmetic details. They are the digital version of a storefront with a staircase and no ramp, and they can breach the Americans with Disabilities Act the same way.</p>
            <p>The scale is large. About one in four US adults has a disability that affects how they use the web, and roughly 1.3 billion people worldwide have disabilities that call for accessible digital services. More than 4,600 ADA website lawsuits were filed in 2025, and 2026 is on track to be higher. An inaccessible site is both a legal exposure and a wall between you and a real slice of your audience.</p>
            <p>This guide covers when the ADA applies to your site and which titles matter, the failures that trigger lawsuits, how demand letters actually work, and a practical roadmap for fixing the problems and reducing your exposure.</p>

            <h2>When does the ADA apply to websites and apps?</h2>
            <p>Two parts of the Act reach websites directly. <strong>Title II</strong> covers state and local governments and requires their digital services to be accessible. <strong>Title III</strong> bars discrimination by public-facing businesses and covers &ldquo;places of public accommodation,&rdquo; a category courts and the Department of Justice have repeatedly extended to websites, web apps, and mobile apps.</p>
            <p>The 1990 ADA text predates the modern web and never names it, but the DOJ and federal agencies read online services as part of the covered activities. Enforcement actions now consistently point to <a href="https://www.ada.gov/resources/2024-03-08-web-rule/">WCAG 2.1 Level AA</a> as the yardstick for whether web content measures up. In practice:</p>
            <ul>
              <li>Ecommerce shops, retailers, restaurants, hospitals, banks, and universities are usually places of public accommodation under Title III.</li>
              <li>State and local government portals for permits, taxes, and licensing fall under Title II.</li>
              <li>If the ADA applies to your physical location, it almost certainly applies to your website too, a restaurant&rsquo;s online ordering has to be as usable as its front counter.</li>
              <li>Federal agencies carry separate obligations under the Rehabilitation Act, but the practical bar is similar.</li>
            </ul>
            <p>The law here keeps moving, so any business open to the public should treat accessibility as a standing obligation rather than a one-off task.</p>

            <h2>Title II deadlines for state and local governments</h2>
            <p>The DOJ&rsquo;s Title II final rule formally adopts WCAG 2.1 Level AA as the standard for state and local government websites and mobile apps, turning what was implied into an explicit requirement.</p>
            <ul>
              <li>Governments serving populations of <strong>50,000 or more</strong> must comply by <strong>April 26, 2027</strong>.</li>
              <li>Smaller entities and special district governments have until <strong>April 26, 2028</strong>.</li>
              <li>Scope covers public-facing sites, public-used staff portals, and apps for paying taxes, renewing licenses, and reporting issues.</li>
            </ul>
            <p>After those dates, a non-compliant site at a city, county, or school district can invite <a href="https://www.ada.gov/resources/web-rule-first-steps/">DOJ enforcement</a>, private complaints, and consent decrees, and documented failure past the deadline leaves little to defend. Public entities should fix the highest-impact services first: emergency and police/fire information, benefits applications and online forms, council-meeting recordings with synchronized captions, and PDFs that work by keyboard and screen reader. Narrow exceptions exist for genuinely archived, unchanged legacy documents, but anything in active use or recently updated has to meet the standard.</p>

            <h2>Do private business websites have to comply?</h2>
            <p>In most jurisdictions, yes, private businesses serving the public are expected to meet ADA standards, and courts in New York, California, and Florida have been especially aggressive, treating websites as extensions of physical locations or as public accommodations in their own right.</p>
            <p>The landmark case is <a href="https://en.wikipedia.org/wiki/Robles_v._Domino%27s_Pizza">Robles v. Domino&rsquo;s Pizza</a> (Ninth Circuit, 2019). Guillermo Robles, who is blind, alleged that Domino&rsquo;s website and app were unusable with a screen reader and blocked him from ordering. The court confirmed ADA coverage for websites under Title III, and Domino&rsquo;s settled in 2022, committing to WCAG conformance and internal accessibility training.</p>

            <div className="bg-[#1b1b1b] p-6 border border-white/10 my-8">
              <h4 className="text-white font-semibold mb-2">What this means for your business</h4>
              <p className="text-gray-300 mb-0">Small businesses are not exempt, single-location restaurants, salons, and local shops get demand letters regularly. There is no one-time &ldquo;ADA website certificate&rdquo;; compliance means ongoing conformance to a recognized standard like WCAG 2.1 or 2.2 AA. The obligation holds regardless of your size or whether you have a storefront, and liability does not depend on intent.</p>
            </div>

            <h2>What makes a website &ldquo;not compliant&rdquo;? The common barriers</h2>
            <p>An inaccessible site stops people with disabilities from perceiving, operating, or understanding content through assistive technology like screen readers, refreshable Braille displays, or voice control. WCAG sorts the failures into four principles, Perceivable, Operable, Understandable, Robust.</p>
            <p><strong>Perceivable</strong> failures are the most common. Images need text alternatives, yet missing alt text showed up in about 89% of complaint cases in 2025. Contrast has to clear a minimum, and poor contrast was cited in roughly 68% of cases. Video needs captions and audio needs transcripts, including synchronized captions for pre-recorded media.</p>
            <p><strong>Operable</strong> failures include menus and form fields that a keyboard alone can&rsquo;t work, keyboard traps that strand users inside a widget, and auto-rotating carousels with no pause control. Keyboard failures appeared in about 61% of cases, and keyboard access is essential for people with motor or cognitive disabilities.</p>

            <div className="aspect-[21/9] overflow-hidden my-8">
              <img
                src="https://images.surferseo.art/1a7e5bb3-38cc-4552-a069-4037632e388e.png"
                alt="Navigating a site by keyboard, with a visible focus indicator highlighting the active menu item"
                className="w-full h-full object-cover"
              />
            </div>

            <p><strong>Understandable</strong> failures cover inconsistent navigation, unclear form errors, session timeouts with no warning, and instructions that lean only on color or shape (&ldquo;click the green button&rdquo;), which shuts out people who can&rsquo;t perceive color. Text that won&rsquo;t resize and reflow is another frequent gap.</p>
            <p><strong>Robust</strong> failures come from broken HTML structure, misused ARIA attributes, and components with no programmatically determinable name or role. These confuse screen readers and break assistive-tech compatibility, and they do as much damage as the visible problems. Concrete examples: a checkout button with no accessible label, a PDF menu a screen reader can&rsquo;t read, a CAPTCHA with no accessible alternative, or a call-to-action with too little contrast, any one of which can block an entire transaction.</p>

            <h2>Lawsuit and demand-letter risk</h2>
            <p>ADA website lawsuits climbed from roughly 800 filings in 2018 to <a href="https://www.accessitool.com/blog/ada-website-lawsuit-statistics-2026-5114-cases-rising">over 5,100 in federal court in 2025</a>, with 2026 projections in the 7,000&ndash;8,500 range, and thousands more unfiled demand letters circulate every year. The pattern is consistent: plaintiff firms scan sites with automated checkers, and when they find WCAG failures they send a letter citing specific criteria (1.1.1 for text alternatives, 2.1.1 for keyboard access), referencing Title III, and asking for remediation plus fees and damages.</p>
            <ul>
              <li>Settlements for small and mid-sized businesses typically run <strong>$5,000 to $50,000+</strong>, on top of remediation costs.</li>
              <li>Higher-risk targets: ecommerce, restaurants, hotels, healthcare portals, education platforms, and any site with logins or complex forms.</li>
              <li>Filings tend to reference the same cluster of WCAG criteria, which makes the exposure predictable.</li>
              <li>&ldquo;Accessibility overlay&rdquo; widgets have themselves drawn lawsuits, because they rarely fix the underlying code.</li>
              <li>Cases concentrate in New York, California, and Florida, but no state is immune.</li>
            </ul>
            <p>A site that conforms to WCAG 2.1 AA holds a strong legal position; one that ignores accessibility is an easy target.</p>

            <h2>The standard: WCAG 2.1 and 2.2</h2>
            <p>The Web Content Accessibility Guidelines, from the World Wide Web Consortium (W3C), are the de facto technical benchmark for ADA website compliance, and the reference in nearly every settlement and DOJ action. WCAG has three conformance levels:</p>
            <ul>
              <li><strong>Level A</strong>, the most fundamental, blocking issues such as alt text and keyboard access. Miss these and you create major barriers.</li>
              <li><strong>Level AA</strong>, the standard for ADA compliance: color contrast (at least 4.5:1 for normal text), visible focus, form labeling, and error handling.</li>
              <li><strong>Level AAA</strong>, advanced criteria that the law rarely mandates.</li>
            </ul>
            <p>Most settlements and DOJ agreements cite WCAG 2.1 AA. Newer contracts and some plaintiffs are starting to reference <a href="https://www.w3.org/TR/WCAG22/">WCAG 2.2</a>, published in October 2023, which adds criteria for <a href="https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/">focus appearance, dragging movements, target size, and accessible authentication</a>. And compliance is not just passing an automated scan: tools catch roughly 25% of accessibility issues, and the rest need manual testing and real user feedback.</p>

            <h2>How to check whether your site complies</h2>
            <p>Use a layered workflow, automated tools, manual testing, and testing with people who have disabilities.</p>
            <p><strong>Automated scanning</strong> is the fast first pass. Axe, WAVE, and Lighthouse flag machine-detectable problems, missing alt attributes, low contrast, empty links, broken heading order. Treat them like a spell-checker for accessibility: useful, nowhere near complete.</p>
            <p><strong>Manual testing</strong> is where you catch what automation can&rsquo;t, whether alt text is actually meaningful, whether a widget traps focus, whether an error message makes sense:</p>
            <ul>
              <li>Navigate the whole site with the keyboard only (Tab, Shift+Tab, Enter, Space, arrows) to check focus order and hunt for traps.</li>
              <li>Test with a screen reader, NVDA or JAWS on Windows, VoiceOver on macOS/iOS, to confirm menus, forms, dialogs, and errors are announced correctly.</li>
              <li>Confirm every interactive element is reachable and operable without a mouse.</li>
            </ul>
            <p><strong>User testing</strong> with people who have visual, motor, and cognitive disabilities surfaces real-world gaps that neither tools nor developers will predict. For complex or high-risk sites, online banking, healthcare, education, bring in accessibility experts for a professional audit mapped to WCAG 2.1 or 2.2 AA. Document what you find, prioritize by severity, fix, and retest.</p>

            <div className="aspect-[21/9] overflow-hidden my-8">
              <img
                src="https://images.surferseo.art/b0abe2d5-d928-4657-b98a-b00cbf7e640b.png"
                alt="A developer reviewing automated accessibility audit results on screen"
                className="w-full h-full object-cover"
              />
            </div>

            <h2>Fixing it: a practical remediation roadmap</h2>
            <p>Making a site accessible is a phased process, not a single project, and a lot of the work improves usability for everyone, so it pays off beyond compliance.</p>
            <ul>
              <li><strong>Phase 1, triage.</strong> Use the audit to find the high-severity barriers blocking core tasks, logging in, checking out, booking, submitting a contact form, and fix those first. A checkout that can&rsquo;t be completed by keyboard outranks a blog image with no description.</li>
              <li><strong>Phase 2, structural fixes.</strong> Correct the semantic HTML so headings, lists, landmarks, and form labels are coded properly. Make menus, modals, carousels, and custom widgets keyboard-operable. Raise contrast and add visible focus states across the design system.</li>
              <li><strong>Phase 3, content and media.</strong> Add accurate alt text to meaningful images and mark decorative ones as such. Caption video and add audio descriptions where needed. Replace vague link text like &ldquo;click here&rdquo; with something descriptive, and check every form field for proper labels and accessible error messages.</li>
              <li><strong>Phase 4, ongoing governance.</strong> Write internal accessibility guidelines for editors, designers, and developers, and require an accessibility review on every redesign, plugin change, or new feature. It&rsquo;s a maintenance commitment, not a finish line.</li>
            </ul>
            <p>One caution: an &ldquo;accessibility overlay&rdquo; widget on its own is not enough. Courts have repeatedly found overlays don&rsquo;t resolve the underlying code and structure. The real fix lives in the code and content.</p>

            <h2>Reducing lawsuit risk: policy, documentation, statements</h2>
            <p>No policy guarantees immunity, but documented good-faith effort meaningfully lowers your risk and strengthens a defense.</p>
            <p><strong>Adopt an internal accessibility policy</strong> that commits to WCAG 2.1 AA now with a plan to move to 2.2 AA, assigns responsibility to specific teams (product, IT, content), and requires an accessibility review before any launch.</p>
            <p><strong>Publish an accessibility statement</strong> that describes your goals and current status, names the standard you&rsquo;re working toward, and gives a clear contact, email and/or phone, for people to report problems or ask for help. A statement with no real evaluation behind it is weak evidence; paired with documented audits, completed fixes, and ongoing monitoring, it shows genuine commitment.</p>
            <p><strong>Keep records.</strong> Hold onto audit reports, remediation plans, training materials, and the dates of major improvements. If a demand letter or investigation ever arrives, that trail shows continuous progress instead of neglect.</p>

            <h2>For small businesses: costs, credits, and steps</h2>
            <p>The fear of a surprise demand letter is real, and small businesses get sued for inaccessible sites just like large ones, but the path to compliance doesn&rsquo;t have to be expensive. A site under 50 pages can often reach WCAG 2.1 AA by focusing on templates, navigation, forms, and media rather than editing page by page:</p>
            <ul>
              <li>Fix keyboard and screen-reader barriers on navigation and the checkout or booking flow.</li>
              <li>Ensure sufficient contrast and visible focus indicators across the theme.</li>
              <li>Add alt text, form labels, and accessible error messages.</li>
              <li>Choose accessible themes and plugins from the start, and require accessibility from vendors.</li>
            </ul>

            <div className="bg-[#1b1b1b] p-6 border border-white/10 my-8">
              <h4 className="text-white font-semibold mb-2">Financial help exists</h4>
              <p className="text-gray-300 mb-0">The Disabled Access Credit (IRS Form 8826) lets eligible small businesses, those under $1 million in revenue or with 30 or fewer full-time employees, claim up to $5,000 per tax year for accessibility improvements. It can offset audit costs, developer time, or accessible-plugin licenses. Building on an accessible foundation is always cheaper than retrofitting, so ask whether a theme or tool has been tested against WCAG before you buy.</p>
            </div>

            <h2>Turning a non-compliant site into an accessible asset</h2>
            <p>An inaccessible website blocks millions of users, raises your lawsuit risk, and erodes trust. The path forward is straightforward: work out whether Title II or Title III applies to you, evaluate the site against WCAG 2.1 AA with both automated and manual testing, fix the high-impact barriers first, then put ongoing governance in place.</p>
            <p>The payoff runs past legal protection. Accessibility improvements strengthen SEO through cleaner semantic structure, alt text, and heading hierarchy; they help on mobile and for people with temporary impairments, a broken arm, bright sun, a noisy room; and they widen your audience. With Title II deadlines landing in 2027 and 2028 and lawsuit counts still climbing, waiting for a demand letter is the most expensive option. Run a scan this week, document what you find, and start an accessibility statement backed by real remediation, because equal access is both the law and the way you build something that works for everyone.</p>
          </div>

{/* Contact form */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-semibold text-white mb-6">Start your project</h3>
            <ContactForm />
          </div>

          <div className="mt-12 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-semibold text-white mb-6">Related Articles</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-[#1b1b1b] overflow-hidden border border-white/10 hover:border-[#A3D1FF] transition-all group">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src="https://images.surferseo.art/cb035972-4d77-4a5c-aa7d-abe70c2165fd.png"
                    alt="Electronic Accessibility: Making Digital Content Work for Everyone"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-[#A3D1FF] transition-colors">Electronic Accessibility: Making Digital Content Work for Everyone</h4>
                  <p className="text-white text-sm mb-4">The POUR and WCAG foundations, and how to remove barriers across every content type you publish.</p>
                  <button
                    onClick={() => router.push('/blog/electronic-accessibility')}
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
                    src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=2000&q=80"
                    alt="What Is E-E-A-T? Experience, Expertise, Authoritativeness & Trustworthiness"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-[#A3D1FF] transition-colors">What Is E-E-A-T?</h4>
                  <p className="text-white text-sm mb-4">Technical trust, accessible markup, and secure pages are part of how Google judges credibility.</p>
                  <button
                    onClick={() => router.push('/blog/what-is-eeat')}
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
          <h2 className="text-3xl font-bold text-white mb-4">Worried your site is a demand letter waiting to happen?</h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            An audit mapped to WCAG 2.1/2.2 AA, real code-level fixes across navigation, forms, and checkout, and an accessibility statement backed by actual remediation. Let&rsquo;s get you compliant.
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
