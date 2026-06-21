"use client";

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  X,
  Linkedin,
  Palette,
  Trophy,
  Calendar,
  ArrowUpRight,
  Youtube,
  Building2,
} from 'lucide-react';

type NavItem = {
  label: string;
  to: string;
};

const primary: NavItem[] = [
  { label: 'Work', to: '/work' },
  { label: 'Services', to: '/services' },
  { label: 'Blog', to: '/blog' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

const secondary: NavItem[] = [
  { label: 'Free Audit', to: '/free-website-analyzer' },
  { label: 'GEO Audit', to: '/free-geo-audit' },
  { label: 'Website Analyzer', to: '/tools/website-analyzer' },
  { label: 'ROI Calculator', to: '/tools/roi-calculator' },
  { label: 'AI Crawler Optimization', to: '/tools/ai-crawler-optimization' },
  { label: 'Project Timeline', to: '/tools/project-timeline' },
  { label: 'Resources', to: '/resources' },
];

export default function ConstellationMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  const isActive = (to: string) =>
    pathname === to || (to !== '/' && pathname.startsWith(`${to}/`));

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[55] bg-black flex flex-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          {/* Top bar, close button only */}
          <div className="flex items-center justify-end px-6 pt-6">
            <button
              onClick={onClose}
              className="w-11 h-11 flex items-center justify-center border border-white/20 text-white hover:bg-white hover:text-black transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Primary nav, full-width rows, big tap targets */}
          <nav
            className="flex-1 overflow-y-auto px-6 pt-8 pb-6"
            aria-label="Mobile primary"
          >
            <ul className="border-t border-white/10">
              {primary.map((item, i) => {
                const active = isActive(item.to);
                return (
                  <motion.li
                    key={item.to}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + i * 0.04, duration: 0.3 }}
                    className="border-b border-white/10"
                  >
                    <Link
                      href={item.to}
                      onClick={onClose}
                      aria-current={active ? 'page' : undefined}
                      className={`flex items-center justify-between py-5 transition-colors ${
                        active ? 'text-[#A3D1FF]' : 'text-white hover:text-[#A3D1FF]'
                      }`}
                    >
                      <span
                        className="text-3xl"
                        style={{
                          fontFamily: 'var(--font-heading)',
                          fontWeight: 500,
                          letterSpacing: '-0.01em',
                        }}
                      >
                        {item.label}
                      </span>
                      <ArrowUpRight className="w-5 h-5 opacity-60" />
                    </Link>
                  </motion.li>
                );
              })}
            </ul>

            {/* Secondary, Free Tools */}
            <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/40 mt-10 mb-3">
              Free Tools
            </p>
            <ul>
              {secondary.map((item, i) => {
                const active = isActive(item.to);
                return (
                  <motion.li
                    key={item.to}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.05 + (primary.length + i) * 0.04,
                      duration: 0.3,
                    }}
                  >
                    <Link
                      href={item.to}
                      onClick={onClose}
                      aria-current={active ? 'page' : undefined}
                      className={`flex items-center justify-between py-3 text-base transition-colors ${
                        active
                          ? 'text-[#A3D1FF]'
                          : 'text-white/70 hover:text-[#A3D1FF]'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight className="w-4 h-4 opacity-50" />
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </nav>

          {/* Footer, CTA + availability + socials */}
          <div className="border-t border-white/10 px-6 py-5">
            <Link
              href="/contact/"
              onClick={onClose}
              className="flex items-center justify-center gap-2 bg-white text-black font-medium py-4 hover:bg-[#A3D1FF] transition-colors mb-4"
            >
              Book a Call
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.3em] text-white/60">
                <span className="relative flex w-2 h-2">
                  <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-60" />
                  <span className="relative w-2 h-2 rounded-full bg-green-400" />
                </span>
                Available, Now
              </div>
              <div className="flex gap-2">
                <a
                  href="https://www.linkedin.com/in/portfolio2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center border border-white/20 text-white hover:bg-[#A3D1FF] hover:text-black hover:border-[#A3D1FF] transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://www.linkedin.com/company/105745552/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center border border-white/20 text-white hover:bg-[#A3D1FF] hover:text-black hover:border-[#A3D1FF] transition-colors"
                  aria-label="LinkedIn, Company page"
                >
                  <Building2 className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://www.behance.net/marcfriedmanweb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center border border-white/20 text-white hover:bg-[#A3D1FF] hover:text-black hover:border-[#A3D1FF] transition-colors"
                  aria-label="Behance"
                >
                  <Palette className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://www.youtube.com/@MarcFriedmanWebDesign"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center border border-white/20 text-white hover:bg-[#A3D1FF] hover:text-black hover:border-[#A3D1FF] transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://www.awwwards.com/marc-friedman/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center border border-white/20 text-white hover:bg-[#A3D1FF] hover:text-black hover:border-[#A3D1FF] transition-colors"
                  aria-label="Awwwards"
                >
                  <Trophy className="w-3.5 h-3.5" />
                </a>
                <a
                  href="/contact/"
                  className="w-9 h-9 flex items-center justify-center border border-white/20 text-white hover:bg-[#A3D1FF] hover:text-black hover:border-[#A3D1FF] transition-colors"
                  aria-label="Schedule a call"
                >
                  <Calendar className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
