import NextLink from 'next/link';

type CalloutLink = { href: string; label: string; blurb: string };

/* Crawlable bridge from high-traffic informational pages to the service
   pages and case studies, so readers (and link equity) reach pages that
   convert. Plain anchors only, no client-side navigation. */
export default function ServiceCallout({
  heading,
  lead,
  links,
}: {
  heading: string;
  lead: string;
  links: CalloutLink[];
}) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black border-t border-white/10">
      <div className="max-w-5xl mx-auto">
        <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#A3D1FF] mb-4">Work with Marc</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{heading}</h2>
        <p className="text-white/70 text-lg leading-relaxed max-w-3xl mb-10">{lead}</p>
        <ul className="grid sm:grid-cols-2 gap-px bg-white/10 border border-white/10">
          {links.map((l) => (
            <li key={l.href} className="bg-black">
              <NextLink href={l.href} className="block p-6 h-full group hover:bg-white/[0.03] transition-colors">
                <span className="block text-white text-lg font-semibold mb-2 group-hover:text-[#A3D1FF] transition-colors">
                  {l.label} →
                </span>
                <span className="block text-white/60 text-sm leading-relaxed">{l.blurb}</span>
              </NextLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
