import Link from 'next/link';

const HEADING = { fontFamily: 'var(--font-heading)' } as const;

const RESULTS = [
  {
    n: '01',
    title: 'Custom B2B design, built to convert',
    body:
      'Every decision is grounded in data. 75% of users judge a company’s credibility by its website, and 42% leave sites with poor functionality. Our design and development handles both, building user-friendly sites that convert enterprise buyers, not just impress the boardroom.',
  },
  {
    n: '02',
    title: 'B2B website redesign that fixes underperformers',
    body:
      'A redesign isn’t a new coat of paint. We audit your conversion bottlenecks, restructure the information architecture, and rebuild with conversion-rate optimization, wired into the business systems your data already lives in. A well-designed site can raise lead quantity by up to 400%.',
  },
  {
    n: '03',
    title: 'B2B development in React and Next.js',
    body:
      'We use modern frameworks that deliver superior Core Web Vitals, faster loads, and a stronger SEO foundation. A one-second speed improvement lifts conversions around 7%, the difference between winning and losing the click.',
  },
  {
    n: '04',
    title: 'UX that guides the whole buying committee',
    body:
      'B2B purchases involve multiple stakeholders. Our UX structures every page around the buyer’s journey, simplifying complex information so different roles can navigate it. 68% of B2B leads come through high-converting landing pages; we apply that rigor to every page.',
  },
  {
    n: '05',
    title: 'Brand identity that earns trust',
    body:
      'Credibility isn’t optional in B2B. A professional site builds authority and states your value proposition clearly. We build your brand into every interaction so buyers feel confident before they ever pick up the phone.',
  },
];

const PROCESS = [
  {
    step: 'Step 1',
    title: 'Discovery & Strategy',
    body:
      'Every project starts with a deep dive into your goals, audience, and competitors. We review your current site to find exactly where prospects drop off, define what a qualified lead means for your business, map the buyer journey, and set real targets for traffic, leads, and conversion, before design begins. Agencies that skip this ship sites that look great and just sit there. We do the work.',
  },
  {
    step: 'Step 2',
    title: 'Design & User Experience',
    body:
      'Once strategy is set, we craft conversion-driven designs that speak to your B2B audience. We build wireframes and prototypes that streamline the flow, prioritize your content, and make navigation obvious. 80% of B2B buyers use mobile for work, so responsive web design isn’t up for debate. Trust signals like testimonials and case studies go where they move the needle.',
  },
  {
    step: 'Step 3',
    title: 'Build & Launch',
    body:
      'We build from the ground up in React and Next.js, no templates, no unnecessary plugins, for a site that flies. Launch includes thorough cross-device testing, security verification, page-speed work, and every SEO foundation: schema markup, metadata, URL architecture, and sitemap generation.',
  },
  {
    step: 'Step 4',
    title: 'Optimize & Scale',
    body:
      'Launch doesn’t mean done. We watch traffic, bounce rate, session duration, and conversion rate, then keep tuning with analytics and user-behavior data. Post-launch measurement, testing, and content adjustments make sure your lead generation keeps growing alongside the business.',
  },
];

const APART = [
  {
    title: 'No templates, no WordPress themes',
    body:
      'We build every B2B site from scratch, around each client’s exact sales process. Off-the-shelf themes are technical debt that slows you down and forces your conversion paths into a generic mold. Custom builds give you full control over how users interact, what you say, and how fast it loads. As a specialized development agency and design partner, we handle B2B website design, B2B web development, and B2B website development around your exact sales process.',
  },
  {
    title: 'Tel Aviv-based, global reach',
    body:
      'We serve US and European B2B companies from our studio in Tel Aviv. 50+ projects across three continents means we know how to communicate complex services across markets, time zones, and industries, including for firms in places like San Francisco where agency costs run far higher.',
  },
  {
    title: 'Proven results, not vague promises',
    body:
      'Our clients have earned #1 Google rankings, 300% traffic increases, and 250% engagement lifts. These aren’t hypotheticals, they’re measured outcomes from real projects, tracked and verified.',
  },
  {
    title: 'Strategy over decoration',
    body:
      'We don’t start with fonts and colors. We start with your sales process, your competitive positioning, and your revenue targets. Design follows strategy, not the other way around, and that drives business growth, not just visual polish.',
  },
];

const RESULT_TILES = [
  { value: '#1', label: 'Google rankings for competitive, revenue-driving keywords' },
  { value: '300%', label: 'Organic traffic growth through technical SEO and content' },
  { value: '250%', label: 'Engagement lift, longer sessions and lower bounce rates' },
  { value: '50+', label: 'Projects delivered across three continents' },
];

const INDUSTRIES = [
  {
    title: 'Dental practices & DSOs',
    body:
      'Complex services, multiple locations, and patients who research for weeks before booking an appointment. We build sites that drive appointment volume and support lead nurturing through the whole patient decision.',
  },
  {
    title: 'Industrial & manufacturing',
    body:
      'Technical products, long sales cycles, and buyers who want spec sheets, case studies, and proof of concept before they contact sales. We make that complexity work for you instead of against you.',
  },
  {
    title: 'Roofing & commercial services',
    body:
      'High-value work where local visibility and credibility decide who gets the call. Our approach is simple: get these businesses dominating their markets online.',
  },
  {
    title: 'Media & publishing',
    body:
      'Content-heavy environments that demand performance at scale. Our Next.js architecture handles high-volume pages without giving up speed or engagement.',
  },
  {
    title: 'Home & property services',
    body:
      'Competitive local markets where a well-designed site is the difference between 50 leads a month and struggling to get 5.',
  },
];

const NEXTJS = [
  {
    title: 'Custom conversion paths',
    body:
      'Templates force your buyer journey into a pre-built layout. Custom development builds the path around your specific B2B sales process, from first visit through to the contact form, with navigation different user types can actually follow.',
  },
  {
    title: 'Advanced SEO & AI search',
    body:
      'Next.js has built-in server-side rendering, static generation, automatic sitemaps, and granular metadata control. That clean, semantic structure is also what wins in answer engine optimization and generative engine optimization, the AI-powered search paradigms. Our B2B web development and B2B website development services make that optimization cleaner than any template-based alternative.',
  },
  {
    title: 'Scalable architecture',
    body:
      'As you grow, more pages, more traffic, more languages, template sites pile up technical debt. Next.js with modular components and serverless functions scales without getting worse.',
  },
  {
    title: 'Enhanced security',
    body:
      'Security verification and bot protection are far simpler on a custom Next.js architecture than on WordPress, where plugin vulnerabilities create an ever-expanding attack surface. The result is verified and enterprise-level reliable.',
  },
];

const FAQS = [
  {
    q: 'What does a B2B web design project cost?',
    a: 'B2B web design typically runs $3k to $6k per month depending on scope, complexity, and ongoing optimization, whether you’re hiring a web design agency, a web development company, or a B2B website design company. We scope every engagement around your revenue targets rather than billing hours. The right agency delivers ROI, not hours: a one-second speed improvement can lift conversions ~7%, and a well-structured site can raise lead quantity by up to 400%. Weighed against those returns, a properly designed B2B site justifies the investment.',
  },
  {
    q: 'How long does a B2B website redesign take?',
    a: 'Most projects run six to 12 weeks from discovery to launch, though it varies with site complexity, how much content needs migrating, and any new integrations. Smaller, clearly scoped sites go faster; larger builds with custom functionality or multiple languages take longer. We set realistic expectations during discovery and keep you in the loop at every step.',
  },
  {
    q: 'What happens after our B2B website goes live?',
    a: 'Launch is the start, not the finish. We keep optimizing performance, monitoring results, and squeezing out more conversions using detailed analytics and user-behavior data. You handle the core business while we handle the iterative improvements that drive better results.',
  },
  {
    q: 'Do you only work with large B2B companies?',
    a: 'No. We work with everyone from growing service businesses to established manufacturers. What our best clients share is treating the website as a lead-generation tool, not a brochure. When choosing an agency, look past size and years, at industry specialisms, real client testimonials, and whether the team communicates clearly enough for smooth collaboration.',
  },
];

export default function B2BWebDesignPage() {
  return (
    <main className="bg-black text-white">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-white/10 px-6 pt-32 pb-20 lg:px-12 lg:pt-40 lg:pb-28">
        <div
          className="pointer-events-none absolute -top-40 right-0 h-[520px] w-[520px] rounded-full opacity-25 blur-[120px]"
          style={{ background: 'radial-gradient(circle, #A3D1FF 0%, transparent 70%)' }}
        />
        <div className="relative mx-auto max-w-5xl">
          <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.35em] text-[#A3D1FF]">
            B2B Web Design Agency
          </p>
          <h1
            className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
            style={HEADING}
          >
            A B2B web design agency that actually{' '}
            <span className="text-[#A3D1FF]">drives pipeline.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70">
            A good-looking site with a slideshow of gleaming equipment is worthless if it
            generates no leads. We build custom React and Next.js sites for B2B companies in
            the US and Europe that turn traffic into qualified pipeline, not just kind comments
            from the boardroom.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact/"
              className="mr_btn mr_btn_primary inline-flex items-center gap-2"
            >
              Book a free strategy call
            </Link>
            <Link
              href="/work/"
              className="inline-flex items-center gap-2 border border-white/20 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-[#A3D1FF] hover:text-[#A3D1FF]"
            >
              See the work
            </Link>
          </div>

          <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 sm:grid-cols-4">
            {[
              { v: '2.4–3.5%', l: 'Avg B2B site conversion. Most do worse.' },
              { v: '50+', l: 'Projects across 3 continents' },
              { v: '#1', l: 'Google rankings delivered' },
              { v: '<2s', l: 'Load times, built in' },
            ].map((s) => (
              <div key={s.l} className="bg-black p-5">
                <dt className="text-2xl font-semibold text-white sm:text-3xl" style={HEADING}>
                  {s.v}
                </dt>
                <dd className="mt-1 text-[13px] leading-snug text-white/55">{s.l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Positioning ──────────────────────────────────────── */}
      <section className="px-6 py-20 lg:px-12">
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[1fr_1.4fr]">
          <h2 className="text-2xl font-semibold leading-snug sm:text-3xl" style={HEADING}>
            Results, not just aesthetics.
          </h2>
          <div className="space-y-5 text-white/70 leading-relaxed">
            <p>
              Marc Friedman Design Agency is a professional web design company for B2B
              businesses. Too many B2B companies have a website that wins internal approval but
              fails to attract real clients or move buyers through the sales process. When no
              one converts, the lost revenue adds up at every stage of the funnel.
            </p>
            <p>
              Based in Tel Aviv and working across three continents, this B2B web design agency,
              and B2B creative agency, combines strategic design, UX for complex B2B buying
              journeys, brand integration, and technical depth. From B2B website design through
              full redesign, we build sites that turn traffic into pipeline.
            </p>
            <p className="text-white">
              No templates, no WordPress themes, no page builders. Every site is a custom build
              in React and Next.js, designed around your conversion goals and your buyers, so
              your team can focus on the day job while we handle design and development.
            </p>
          </div>
        </div>
      </section>

      {/* ── Why our services get results ─────────────────────── */}
      <section className="border-t border-white/10 bg-[#0a0a0a] px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.3em] text-white/40">
            Why it works
          </p>
          <h2 className="mb-12 max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl" style={HEADING}>
            What sets our B2B web design services apart
          </h2>
          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2">
            {RESULTS.map((r) => (
              <div key={r.n} className="flex flex-col bg-black p-8">
                <span className="mb-4 font-mono text-sm text-[#A3D1FF]">{r.n}</span>
                <h3 className="mb-3 text-xl text-white" style={HEADING}>
                  {r.title}
                </h3>
                <p className="text-white/65 leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────────── */}
      <section className="px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.3em] text-white/40">
            The process
          </p>
          <h2 className="mb-12 text-3xl font-semibold sm:text-4xl" style={HEADING}>
            How our B2B web design process works
          </h2>
          <ol className="relative space-y-10 border-l border-white/15 pl-8">
            {PROCESS.map((p) => (
              <li key={p.step} className="relative">
                <span className="absolute -left-[41px] flex h-5 w-5 items-center justify-center rounded-full border border-[#A3D1FF] bg-black">
                  <span className="h-2 w-2 rounded-full bg-[#A3D1FF]" />
                </span>
                <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#A3D1FF]">
                  {p.step}
                </p>
                <h3 className="mt-1 mb-2 text-xl text-white" style={HEADING}>
                  {p.title}
                </h3>
                <p className="max-w-3xl text-white/65 leading-relaxed">{p.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── What sets us apart ───────────────────────────────── */}
      <section className="border-t border-white/10 bg-[#0a0a0a] px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-4 text-3xl font-semibold sm:text-4xl" style={HEADING}>
            What sets our B2B web design agency apart
          </h2>
          <p className="mb-12 max-w-2xl text-white/60">
            Most agencies focus on making things look good. We focus on making the phone ring.
            If others sell complexity, we sell clarity and an outcome-focused B2B approach.
          </p>
          <div className="grid gap-8 sm:grid-cols-2">
            {APART.map((a) => (
              <div key={a.title} className="border-l-2 border-[#A3D1FF]/40 pl-6">
                <h3 className="mb-3 text-xl text-white" style={HEADING}>
                  {a.title}
                </h3>
                <p className="text-white/65 leading-relaxed">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Proven results ───────────────────────────────────── */}
      <section className="px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-3 text-3xl font-semibold sm:text-4xl" style={HEADING}>
            Proven results that say it all
          </h2>
          <p className="mb-12 max-w-2xl text-white/60">
            Results speak louder than promises. Here is what our B2B web design services have
            delivered.
          </p>
          <div className="grid grid-cols-2 gap-px overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-4">
            {RESULT_TILES.map((t) => (
              <div key={t.value} className="bg-black p-8">
                <div className="text-4xl font-semibold text-[#A3D1FF]" style={HEADING}>
                  {t.value}
                </div>
                <p className="mt-3 text-sm leading-snug text-white/60">{t.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 border border-[#A3D1FF]/20 bg-[#0d1218] p-8">
            <p className="text-white/75 leading-relaxed">
              Industry benchmarks tell the same story as our own client data. B2B manufacturers
              that invest in a proper redesign see dramatic gains: one company saw a{' '}
              <strong className="text-white">1,400% jump in web traffic and 120+ leads in 90 days</strong>{' '}
              where it previously earned about one lead a month; another saw a{' '}
              <strong className="text-white">105% increase in organic traffic and a 47% drop in bounce rate</strong>{' '}
              within 90 days of relaunch. A well-made website moves the engagement number, and
              when engagement goes up, so does the pipeline.
            </p>
          </div>
        </div>
      </section>

      {/* ── Industries ───────────────────────────────────────── */}
      <section className="border-t border-white/10 bg-[#0a0a0a] px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-4 text-3xl font-semibold sm:text-4xl" style={HEADING}>
            B2B industries we serve
          </h2>
          <p className="mb-12 max-w-2xl text-white/60">
            Our B2B web design business pairs web design with related digital marketing
            services wherever it supports performance. A specialized B2B website design agency
            drives higher-quality leads because it understands the purchasing dynamics,
            terminology, and trust signals of each vertical, which strengthens the marketing
            services outcomes in each one.
          </p>
          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((it) => (
              <div key={it.title} className="bg-black p-8">
                <h3 className="mb-3 text-lg text-white" style={HEADING}>
                  {it.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/60">{it.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why custom Next.js ───────────────────────────────── */}
      <section className="px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-4 text-3xl font-semibold sm:text-4xl" style={HEADING}>
            Why custom Next.js beats templates for B2B lead generation
          </h2>
          <p className="mb-10 max-w-2xl text-white/60">
            Template sites can’t compete with custom development for B2B conversion. Here is why
            React and Next.js is the foundation, and why it matters to your bottom line.
          </p>

          {/* Core Web Vitals comparison */}
          <div className="mb-12 overflow-x-auto">
            <table className="w-full min-w-[480px] border-collapse text-left text-sm">
              <caption className="mb-3 text-left text-white/50">
                2026 performance benchmarks, Core Web Vitals
              </caption>
              <thead>
                <tr className="border-b border-white/15 text-white/50">
                  <th className="py-3 pr-4 font-medium">Metric</th>
                  <th className="py-3 pr-4 font-medium text-[#A3D1FF]">Next.js</th>
                  <th className="py-3 font-medium">WordPress</th>
                </tr>
              </thead>
              <tbody className="text-white/80">
                {[
                  ['Largest Contentful Paint (LCP)', '~0.9s', '~2.8s'],
                  ['Interaction to Next Paint (INP)', '~120ms', '~320ms'],
                  ['Cumulative Layout Shift (CLS)', '~0.02', '~0.12'],
                ].map((row) => (
                  <tr key={row[0]} className="border-b border-white/10">
                    <td className="py-3 pr-4">{row[0]}</td>
                    <td className="py-3 pr-4 font-semibold text-[#A3D1FF]">{row[1]}</td>
                    <td className="py-3 text-white/55">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-3 text-sm text-white/50">
              Those aren’t marginal differences. They feed directly into how Google evaluates
              and ranks your site, and our Next.js architecture delivers secure, scalable, fast,
              and mobile-friendly without the plugin bloat.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {NEXTJS.map((n) => (
              <div key={n.title}>
                <h3 className="mb-2 text-lg text-white" style={HEADING}>
                  {n.title}
                </h3>
                <p className="text-white/60 leading-relaxed">{n.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="border-t border-white/10 bg-[#0a0a0a] px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-10 text-3xl font-semibold sm:text-4xl" style={HEADING}>
            Frequently asked questions
          </h2>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {FAQS.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-lg text-white marker:content-none [&::-webkit-details-marker]:hidden">
                  <span style={HEADING}>{f.q}</span>
                  <span className="text-[#A3D1FF] transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-white/65 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Closing CTA ──────────────────────────────────────── */}
      <section className="relative overflow-hidden border-t border-white/10 px-6 py-24 lg:px-12">
        <div
          className="pointer-events-none absolute -bottom-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full opacity-20 blur-[120px]"
          style={{ background: 'radial-gradient(circle, #A3D1FF 0%, transparent 70%)' }}
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl" style={HEADING}>
            Turn your B2B website into your best salesperson
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
            Your website should be your number one sales tool. If it isn’t generating leads, the
            problem usually isn’t your market, it’s your website. As your design partner and web
            development partner, we deliver custom B2B web design that boosts credibility,
            establishes your brand authority, and clarifies your value proposition. Book a call
            and we’ll audit your current site, find the biggest opportunities to lift
            conversions, and give you a clear plan, no strings, no upselling.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/contact/" className="mr_btn mr_btn_primary inline-flex items-center gap-2">
              Book your free audit
            </Link>
            <Link
              href="/work/case-studies/"
              className="inline-flex items-center gap-2 border border-white/20 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-[#A3D1FF] hover:text-[#A3D1FF]"
            >
              Read the case studies
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
