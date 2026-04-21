import React from 'react';
import Link from 'next/link';

const studies = [
  { slug: 'automarginx', label: 'AutoMarginX' },
  { slug: 'fleet-management', label: 'Fleet Management' },
  { slug: 'mytube', label: 'MyTube' },
  { slug: 'chad-le-clos', label: 'Chad Le Clos' },
  { slug: 'videoleap', label: 'Videoleap' },
  { slug: 'friedman-cohen', label: 'Friedman Cohen' },
  { slug: 'binns-media', label: 'Binns Media Group' },
  { slug: 'secure-annapolis', label: 'Secure Annapolis' },
  { slug: 'untapped-africa', label: 'Untapped Africa' },
  { slug: 'ilight', label: 'iLight' },
  { slug: 'paving-leads', label: 'Paving Leads' },
  { slug: 'tar-chip-paving', label: 'Tar Chip Paving' },
  { slug: 'h2h-marketing', label: 'H2H Marketing' },
  { slug: 'ask-africa', label: 'Ask Africa' },
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-black text-white py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl md:text-6xl mb-6">Case Studies</h1>
        <p className="text-lg text-white/80 mb-12 max-w-2xl">
          A selection of recent client work.
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {studies.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/work/case-studies/${s.slug}`}
                className="block p-6 border border-white/10 hover:border-[#A3D1FF] hover:bg-white/5 transition-all"
              >
                <span className="text-lg font-medium">{s.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
