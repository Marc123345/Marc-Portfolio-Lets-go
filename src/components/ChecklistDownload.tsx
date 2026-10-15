"use client";

import { EditorialSection } from '@/components/ServiceEditorial';
import LeadMagnetFormEmbed from '@/components/LeadMagnetFormEmbed';
import { CHECKLISTS } from '@/data/checklists';

/**
 * Gated checklist download for a service page: cover and chapter list on the
 * left, the Jotform opt-in on the right. The PDF downloads when the form is
 * submitted (see LeadMagnetFormEmbed).
 */
export default function ChecklistDownload({
  which,
  chapter = 'Free',
  bg = 'bg-[#0a0a0a]',
}: {
  which: keyof typeof CHECKLISTS;
  chapter?: string;
  bg?: string;
}) {
  const c = CHECKLISTS[which];

  return (
    <EditorialSection
      chapter={chapter}
      label="Checklist · 2026 edition"
      title={`${c.title}`}
      italicTitle={`${c.titleAccent}.`}
      lead={`${c.excerpt} It's the same list I work through on client sites. Free, as a PDF.`}
      bg={bg}
    >
      <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-start">
        <div className="grid grid-cols-[minmax(0,140px)_1fr] sm:grid-cols-[minmax(0,180px)_1fr] gap-6 sm:gap-8 items-start">
          <div className="relative aspect-[3/4] overflow-hidden bg-[#1b1b1b]">
            <img
              src={c.cover}
              alt={c.coverAlt}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 mb-4">
              {c.checks} checks · {c.chapters.length} chapters
            </p>
            <ol className="space-y-3">
              {c.chapters.map((title, i) => (
                <li key={title} className="flex items-baseline gap-4 border-b border-white/10 pb-3">
                  <span className="font-mono text-xs text-[#A3D1FF]">{String(i + 1).padStart(2, '0')}</span>
                  <span className="text-white/80">{title}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="border border-white/10 bg-white/[0.02] p-6 md:p-8">
          <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 mb-2">
            Get the free checklist
          </p>
          <p className="text-white/60 text-sm mb-6">
            Enter your details and the PDF downloads straight away.
          </p>
          <LeadMagnetFormEmbed
            formId={c.formId}
            title={`Get the free ${c.title.replace(/^The /, '')} ${c.titleAccent}`}
            pdfUrl={c.pdf}
          />
        </div>
      </div>
    </EditorialSection>
  );
}
