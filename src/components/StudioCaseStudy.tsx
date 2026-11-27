import Link from 'next/link';

export type StudioStudy = {
  title: string;
  slug: string;
  discipline: string;
  lead: string;
  role: string;
  scope: string;
  cover: string;
  coverAlt: string;
  purchase?: string;
  chapters: { title: string; paragraphs: string[]; image?: string; caption?: string }[];
  next: { slug: string; title: string };
};

export default function StudioCaseStudy({ study }: { study: StudioStudy }) {
  const asset = (file: string) => `/images/case-studies/${study.slug}/${file}`;
  const buy = study.purchase && <a className="ui-btn ui-btn-primary" href={study.purchase}>Buy {study.title} on Gumroad ↗</a>;
  return <main className="bg-black text-white px-5 md:px-10 pb-20">
    <article className="max-w-6xl mx-auto">
      <header className="pt-32 md:pt-40 pb-10">
        <Link href="/work/case-studies/" className="text-[#A3D1FF]">← Case studies</Link>
        <p className="mt-10 font-mono text-sm text-white/65">{study.discipline} · Independent studio project</p>
        <h1 className="mt-4 text-5xl md:text-8xl leading-none tracking-tight">{study.title}</h1>
        <p className="mt-6 max-w-3xl text-xl md:text-3xl leading-snug">{study.lead}</p>
        {buy && <div className="mt-6">{buy}</div>}
      </header>
      <figure><img src={asset(study.cover)} alt={study.coverAlt} className="block h-auto w-full" fetchPriority="high" /></figure>
      <dl className="grid gap-5 sm:grid-cols-2 py-8 border-b border-white/20">
        <div><dt className="text-sm text-white/60">My role</dt><dd>{study.role}</dd></div>
        <div><dt className="text-sm text-white/60">Project scope</dt><dd>{study.scope}</dd></div>
      </dl>
      <nav aria-label="Case study chapters" className="py-6 flex gap-x-6 gap-y-2 flex-wrap">{study.chapters.map((c,i)=><a className="text-sm text-[#A3D1FF] underline underline-offset-4" href={`#chapter-${i+1}`} key={c.title}>{c.title}</a>)}</nav>
      {study.chapters.map((c,i)=><section key={c.title} id={`chapter-${i+1}`} className="scroll-mt-28 border-t border-white/15 pt-10 pb-12 md:pt-16 md:pb-16">
        <div className="grid md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] gap-5 md:gap-12">
          <h2 className="text-2xl md:text-4xl leading-tight">{c.title}</h2>
          <div className="max-w-[70ch] space-y-5 text-lg leading-relaxed text-white/80">{c.paragraphs.map(p=><p key={p}>{p}</p>)}</div>
        </div>
        {c.image && <figure className="mt-8"><a href={asset(c.image)} aria-label={`Open full-size image: ${c.caption}`}><img loading="lazy" decoding="async" className="block w-full h-auto" src={asset(c.image)} alt={c.caption || c.title}/></a><figcaption className="mt-3 max-w-3xl text-sm leading-relaxed text-white/70">{c.caption}</figcaption></figure>}
      </section>)}
      <footer className="border-t border-white/20 pt-8 flex flex-wrap items-center justify-between gap-5">{buy}<Link className="text-[#A3D1FF] underline" href={`/work/case-studies/${study.next.slug}/`}>Read the {study.next.title} case study →</Link></footer>
    </article>
  </main>;
}
