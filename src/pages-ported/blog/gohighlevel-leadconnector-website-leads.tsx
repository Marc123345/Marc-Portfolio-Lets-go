"use client";

import React from 'react';
import { ArrowLeft, Calendar, Clock, ArrowRight, AlertTriangle } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import { useRouter } from 'next/navigation';

const HERO =
  'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=2000&q=80';

const routes = [
  {
    name: 'GoHighLevel form, embedded',
    how: 'Build the form in GHL and paste its embed code into the site.',
    good: 'Quickest to set up. Contacts, tags and source tracking work out of the box.',
    watch: 'Loads in an iframe, so it is slower and hard to style to match the site.',
  },
  {
    name: 'Your own form → inbound webhook',
    how: 'The site’s form posts to a GHL workflow that starts with an Inbound Webhook trigger.',
    good: 'Form looks and behaves like the rest of the site. Mapping is done in GHL, no code changes.',
    watch: 'Inbound webhooks count as a premium workflow feature on many accounts. Check your plan.',
  },
  {
    name: 'Your own form → API, from the server',
    how: 'The site’s server sends the lead to the GHL API (create or update the contact), then GHL workflows take over.',
    good: 'Most control: no duplicates, clean field mapping, and a backup if GHL is down.',
    watch: 'Needs a developer, and the API token must never be in browser code.',
  },
];

export default function GoHighLevelLeadConnectorPage() {
  const router = useRouter();

  const blogPostSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Sending Website Leads to GoHighLevel and LeadConnector",
    "description":
      "How I connect website forms to GoHighLevel (LeadConnector): the three ways to get leads in, what to send with each lead, the first five minutes of follow-up, and the mistakes that lose leads.",
    "image": HERO,
    "datePublished": "2026-11-17T11:00:00+00:00",
    "dateModified": "2026-11-17T11:00:00+00:00",
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
      "@id": "https://www.marcfriedmanportfolio.com/blog/gohighlevel-leadconnector-website-leads"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is LeadConnector the same as GoHighLevel?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, for practical purposes. LeadConnector is the name GoHighLevel uses on its mobile app and on much of its messaging and phone system, so business owners whose agency runs GoHighLevel often only ever see the LeadConnector name. It is the same account, contacts and conversations."
        }
      },
      {
        "@type": "Question",
        "name": "Do I have to use GoHighLevel's own forms on my website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Your website can keep its own forms and send each submission to GoHighLevel, either to a workflow with an inbound webhook trigger or through the GoHighLevel API from the website's server. Both create the contact in GoHighLevel and can start the same follow-up workflows as a native form."
        }
      },
      {
        "@type": "Question",
        "name": "Why are my GoHighLevel text messages not being delivered?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In the US, the most common reason is that A2P 10DLC registration for the business's phone number is incomplete or was rejected. Carriers filter or block texts from unregistered numbers. Check the registration status in the phone system settings before relying on text follow-up."
        }
      },
      {
        "@type": "Question",
        "name": "How fast should a business respond to a website lead?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "As fast as possible, ideally within minutes. A widely cited Harvard Business Review study found firms that contacted leads within an hour were nearly seven times as likely to qualify them as firms that waited even one hour longer. An automatic text or email can go out in seconds while a person follows up by phone."
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
            Sending Website Leads to GoHighLevel and LeadConnector
          </h1>

          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-white">
              <Calendar className="w-4 h-4" />
              <span>November 17, 2026</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Clock className="w-4 h-4" />
              <span>9 min read</span>
            </div>
          </div>

          <div className="overflow-hidden mb-8">
            <img
              src={HERO}
              alt="Someone at a laptop replying to messages while holding a phone with a chat open."
              className="block w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg prose-invert max-w-none">

            <p>A lot of the contractors and service businesses I build sites for run their sales on GoHighLevel. Some of them don&rsquo;t know it by that name. They know it as LeadConnector, the app on their phone that buzzes when a lead comes in. Either way, the website&rsquo;s job doesn&rsquo;t end when someone presses Submit. If that lead lands in an inbox nobody checks until Thursday, the form may as well not exist.</p>

            <p>This is how I connect a website to GoHighLevel so every lead arrives complete, gets a reply in seconds, and doesn&rsquo;t get lost. It&rsquo;s written for owners and marketers, with enough detail for whoever builds your site.</p>

            <h2>GoHighLevel, LeadConnector: same thing</h2>

            <p>GoHighLevel (GHL) is a CRM and marketing platform used mostly by agencies, who set up an account (a &ldquo;sub-account&rdquo;) for each client. LeadConnector is the name GHL uses on its mobile app and on a lot of its phone, text and email system. So if your agency set you up on GHL, the app you download is called LeadConnector, and the texts and emails may mention it too.</p>

            <p>It&rsquo;s one account underneath. Contacts, conversations, pipelines and automations all live in the same place whichever name you know it by.</p>

            <h2>Three ways to get website leads into GoHighLevel</h2>

            <p>There are really only three routes, and which one is right depends on how much the form&rsquo;s look and speed matter to you, and whether you have a developer.</p>
          </div>

          <div className="my-8 border-y border-white/10">
            {routes.map((r, i) => (
              <div key={r.name} className="grid md:grid-cols-[48px_1fr] gap-3 md:gap-6 py-7 border-b border-white/10 last:border-b-0">
                <div className="font-mono text-sm text-[#A3D1FF] pt-1">{String(i + 1).padStart(2, '0')}</div>
                <div>
                  <h3 className="text-xl text-white font-semibold mb-2">{r.name}</h3>
                  <p className="text-white/80 mb-3">{r.how}</p>
                  <p className="text-sm text-white/70 mb-1"><span className="text-[#A3D1FF]">Good:</span> {r.good}</p>
                  <p className="text-sm text-white/70"><span className="text-[#A3D1FF]">Watch:</span> {r.watch}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="prose prose-lg prose-invert max-w-none">

            <p>On the sites I build, I almost always use the third route. The form is part of the site, so it loads instantly and looks right on a phone. When someone submits, the site&rsquo;s server does three things: it creates or updates the contact in GoHighLevel through the API, it adds a tag that starts the right workflow, and it emails a copy of the lead to the business as a backup. If GoHighLevel is slow or down for a minute, the lead still reaches someone.</p>

            <p>The &ldquo;creates or updates&rdquo; part matters. GoHighLevel&rsquo;s API can upsert a contact, matching on email or phone. Without that, the person who fills in your form twice, or who already called last month, turns into two or three contacts, and your team ends up texting them from different threads.</p>

            <h2>What to send with every lead</h2>

            <p>A name and a phone number is a lead. A name, number and the context below is a lead your team can actually close. I send all of this into GHL as contact fields or tags:</p>

            <ul>
              <li><strong>The service they asked about</strong>, from a dropdown rather than free text, so you can filter and route on it.</li>
              <li><strong>The page they were on</strong> when they submitted. &ldquo;Commercial sealcoating&rdquo; and &ldquo;driveway repair&rdquo; are very different calls.</li>
              <li><strong>Where they came from</strong>: the UTM tags from ads (source, medium, campaign) and the first page they landed on. GHL captures some of this automatically on its own forms. On your own form, the site has to save it and pass it along, or your ad reporting goes blind.</li>
              <li><strong>Their area</strong> (ZIP or town), if you cover more than one territory or have more than one crew.</li>
              <li><strong>A clear lead source</strong>, like &ldquo;Website form&rdquo; or &ldquo;Website quote form&rdquo;, so it&rsquo;s obvious in the CRM how they found you.</li>
            </ul>

            <h2>The first five minutes</h2>

            <p>This is where GoHighLevel earns its keep. A workflow starts the moment the contact arrives (triggered by the tag, the form, or the webhook), and mine usually does this:</p>

            <ol>
              <li><strong>Text the lead within seconds.</strong> Short and human: &ldquo;Hi Sam, thanks for reaching out about your driveway. This is Mike from Example Paving. When&rsquo;s a good time for a quick call?&rdquo; A reply to that text lands in the same conversation in the LeadConnector app.</li>
              <li><strong>Alert the owner or the on-call person</strong> by text and app notification, with the service, area and phone number in the message so they can call straight away.</li>
              <li><strong>Create an opportunity</strong> in the pipeline at &ldquo;New lead&rdquo;, so nothing exists only as a text thread.</li>
              <li><strong>Follow up if nobody answers.</strong> A second text the next morning and an email a day later, which stops as soon as the lead replies or the opportunity moves stage.</li>
            </ol>

            <p>Speed matters more than polish here. A widely cited <a href="https://hbr.org/2011/03/the-short-life-of-online-sales-leads" target="_blank" rel="noopener noreferrer">Harvard Business Review study</a> found firms that contacted leads within an hour were nearly seven times as likely to qualify them as firms that waited even an hour longer. Most small businesses don&rsquo;t answer for hours. An automatic text closes most of that gap without anyone lifting a finger.</p>

            <p>If the business takes calls from the site too, turn on <strong>missed-call text-back</strong>. When a call goes unanswered, GHL texts the caller back automatically. For trades where the owner is on a roof or a job site all day, it rescues a surprising number of leads.</p>
          </div>

          <div className="ui-card p-6 my-8">
            <h4 className="text-white font-semibold mb-2 flex items-center">
              <AlertTriangle className="w-5 h-5 text-[#A3D1FF] mr-2" />
              US businesses: register for texting first
            </h4>
            <p className="text-white/80">
              Before any of the texting above will work reliably in the US, the business phone number needs <strong>A2P 10DLC registration</strong>, done inside GHL&rsquo;s phone settings. Unregistered numbers get their texts filtered or blocked by the carriers, often without any error you&rsquo;d notice. Registration can take days to approve, so start it before the site launches.
            </p>
          </div>

          <div className="prose prose-lg prose-invert max-w-none">

            <h2>Mistakes I see that lose leads</h2>

            <ul>
              <li><strong>The API key is in the website&rsquo;s browser code.</strong> Anyone can open the page source, copy it and read or change every contact in the account. The call to GHL has to happen on the server.</li>
              <li><strong>No backup.</strong> If the connection to GHL breaks (an expired token, a renamed field), leads quietly vanish. A backup email to the business means you find out the same day, not at the end of the month.</li>
              <li><strong>Duplicate contacts</strong> from creating a new contact on every submission instead of updating the existing one.</li>
              <li><strong>Ad tracking dropped</strong> between the landing page and the form, so every lead shows as &ldquo;direct&rdquo; and nobody can tell which campaign is working.</li>
              <li><strong>Alerts going to one inbox</strong> that one person checks. Send them to the phone of whoever actually calls people back.</li>
              <li><strong>Nobody tested it end to end.</strong> &ldquo;The form works&rdquo; isn&rsquo;t the same as &ldquo;the lead got a text, the owner got an alert and the opportunity showed up in the pipeline&rdquo;.</li>
            </ul>

            <h2>A test I run before every launch</h2>

            <p>Before a site goes live, I submit the form from my own phone, on mobile data, from an ad-style link with UTM tags on it. Then I check, in this order:</p>

            <ol>
              <li>The contact appears in GHL with every field filled in, including source and campaign.</li>
              <li>I get the welcome text, and replying to it shows up in the LeadConnector conversation.</li>
              <li>The business gets its alert, with enough detail to call me back without opening anything.</li>
              <li>The opportunity sits at the first pipeline stage.</li>
              <li>The backup email arrived.</li>
              <li>Submitting a second time updates the same contact instead of creating a new one.</li>
            </ol>

            <p>Then I delete the test contact. It takes ten minutes, and it has caught a broken step on more launches than I&rsquo;d like to admit.</p>

            <h2>Frequently Asked Questions</h2>

            <p><strong>Is LeadConnector the same as GoHighLevel?</strong><br />Yes. LeadConnector is the name GoHighLevel uses on its app and much of its messaging. Same account, same contacts.</p>

            <p><strong>Do I have to use GoHighLevel&rsquo;s own forms on my website?</strong><br />No. Your own forms can send leads to GHL through an inbound webhook or the API, and start the same workflows.</p>

            <p><strong>Why aren&rsquo;t my GoHighLevel texts being delivered?</strong><br />In the US, usually because A2P 10DLC registration is missing or was rejected. Check it in the phone settings.</p>

            <p><strong>How fast should a business respond to a website lead?</strong><br />Within minutes if you can. An automatic text buys you time while someone calls.</p>

          </div>

          {/* CTA + Contact form */}
          <div className="mt-16 pt-10 border-t border-white/10">
            <h2 className="text-3xl font-bold text-white mb-4">Want your site wired into GoHighLevel properly?</h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl">
              Send me your site and tell me how leads reach you today. I&rsquo;ll tell you where they&rsquo;re getting lost, and what it would take to get every one into GoHighLevel with a reply in seconds.
            </p>
            <ContactForm />
          </div>

          {/* Related Articles */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <h3 className="text-2xl font-semibold text-white mb-6">Related Articles</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-[#1b1b1b] overflow-hidden border border-white/10 hover:border-[#A3D1FF] transition-all group">
                <div className="overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2000&q=80"
                    alt="What a 1-Second Faster Site Is Worth in Leads"
                    className="block w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-[#A3D1FF] transition-colors">What a 1-Second Faster Site Is Worth in Leads</h4>
                  <p className="text-white text-sm mb-4">Putting a dollar figure on site speed.</p>
                  <button
                    onClick={() => router.push('/blog/faster-site-worth-in-leads')}
                    className="text-[#A3D1FF] text-sm flex items-center gap-1 hover:underline"
                  >
                    Read Article
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>

              <div className="bg-[#1b1b1b] overflow-hidden border border-white/10 hover:border-[#A3D1FF] transition-all group">
                <div className="overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=2000&q=80"
                    alt="Digital Marketing Strategy for Asphalt Contractors"
                    className="block w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-[#A3D1FF] transition-colors">Digital Marketing Strategy for Asphalt Contractors</h4>
                  <p className="text-white text-sm mb-4">Getting more local jobs from your website.</p>
                  <button
                    onClick={() => router.push('/blog/digital-marketing-asphalt-contractors')}
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
