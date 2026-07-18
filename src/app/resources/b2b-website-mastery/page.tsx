import type { Metadata } from 'next';
import LeadMagnetFormEmbed from '@/components/LeadMagnetFormEmbed';

const FORM_ID = '261968253944066';
const title = 'B2B Website Mastery, Free Guide | Marc Friedman';
const description =
  'Download B2B Website Mastery, a free guide to designing and building B2B websites that generate qualified leads. Enter your email and get the PDF instantly.';
const url = 'https://www.marcfriedmanportfolio.com/resources/b2b-website-mastery/';

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'website' },
  twitter: { card: 'summary_large_image', title, description },
};

const TAKEAWAYS = [
  'The full B2B web design playbook, from strategy to launch',
  'Positioning and messaging that convinces a buying committee',
  'Design and build decisions that turn traffic into pipeline',
  'The SEO, AEO, and performance foundations B2B sites need',
];

export default function B2BWebsiteMasteryResourcePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-6xl px-6 pt-28 pb-20 md:pt-36 md:pb-28">
        <p className="mb-6 font-mono text-xs uppercase tracking-[0.32em] text-[#A3D1FF]">
          Free Resource
        </p>

        <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:items-start">
          {/* LEFT, pitch */}
          <div>
            <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl">
              B2B Website{' '}
              <span className="text-[#A3D1FF]">Mastery</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              A free, practical guide to designing and building B2B websites that actually
              generate qualified leads, not just internal approval. Drop your email and I&apos;ll
              send the guide straight to your inbox.
            </p>

            <ul className="mt-10 space-y-4">
              {TAKEAWAYS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg
                    className="mt-1 h-5 w-5 shrink-0 text-[#A3D1FF]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-white/80">{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-10 text-sm text-white/40">No spam. Unsubscribe anytime.</p>
          </div>

          {/* RIGHT, opt-in form */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
            <h2 className="mb-2 text-xl font-semibold">Get the free guide</h2>
            <p className="mb-6 text-sm text-white/60">
              Enter your details and the download is yours.
            </p>
            <LeadMagnetFormEmbed formId={FORM_ID} title="Get the free B2B Website Mastery guide" pdfUrl="/b2b-website-mastery.pdf" />
          </div>
        </div>
      </section>
    </main>
  );
}
