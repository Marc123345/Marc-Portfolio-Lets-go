"use client";

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

type Item = { label: string; href: string; external?: boolean };

export default function NavDropdown({ label, items }: { label: string; items: Item[] }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    const onDocClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('click', onDocClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('click', onDocClick);
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  const openNow = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const closeSoon = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <div ref={ref} className="relative" onMouseEnter={openNow} onMouseLeave={closeSoon}>
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={`inline-flex items-center gap-1 text-sm font-medium tracking-wide py-2 transition-colors ${
          open ? 'text-white' : 'text-white/70 hover:text-white'
        }`}
      >
        {label}
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          aria-hidden
        />
      </button>

      {open && (
        // pt-3 bridges the gap so the dropdown stays open as the cursor travels into it
        <div role="menu" aria-label={label} className="absolute left-0 top-full pt-3 z-[80]">
          <div className="min-w-[230px] bg-[#0c0f16] border border-white/10 shadow-2xl shadow-black/50 p-2">
            {items.map((it) =>
              it.external ? (
                <a
                  key={it.href}
                  href={it.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  role="menuitem"
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2.5 text-sm text-white/75 hover:text-[#A3D1FF] hover:bg-white/5 transition-colors"
                >
                  {it.label}
                </a>
              ) : (
                <Link
                  key={it.href}
                  href={it.href}
                  role="menuitem"
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2.5 text-sm text-white/75 hover:text-[#A3D1FF] hover:bg-white/5 transition-colors"
                >
                  {it.label}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
}
