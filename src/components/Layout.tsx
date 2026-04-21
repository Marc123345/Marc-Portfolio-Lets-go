"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Linkedin, Calendar, Trophy, ArrowUpRight, Palette } from 'lucide-react';
import { useAppStore } from '@/stores/useAppStore';
import { motion, AnimatePresence } from 'framer-motion';
import ConsentBanner from '@/components/ConsentBanner';
import ConstellationMenu from '@/components/ConstellationMenu';
import TechStackStrip from '@/components/TechStackStrip';
import { CALENDLY_LINK } from '@/lib/constants';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

type NavLink = {
  label: string;
  to: string;
  number: string;
  meta: string;
  preview: string;
};

const navLinks: NavLink[] = [
  {
    label: 'Work',
    to: '/work',
    number: '01',
    meta: '14 Case Files',
    preview:
      'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%204%20-%2016x9.png?updatedAt=1767539579710',
  },
  {
    label: 'Services',
    to: '/services',
    number: '02',
    meta: '09 Disciplines',
    preview:
      'https://ik.imagekit.io/qcvroy8xpd/uoq5Ztg.jpeg',
  },
  {
    label: 'Blog',
    to: '/blog',
    number: '03',
    meta: '27 Essays',
    preview:
      'https://ik.imagekit.io/qcvroy8xpd/TTV8Liw.jpg',
  },
  {
    label: 'About',
    to: '/about',
    number: '04',
    meta: 'Profile · Vol. 01',
    preview:
      'https://ik.imagekit.io/qcvroy8xpd/PW8VUKH.png?updatedAt=1759693058055&tr=f-webp',
  },
  {
    label: 'Contact',
    to: '/contact',
    number: '05',
    meta: 'Inbox · Q2 2026',
    preview:
      'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%201%20-%201x1(1).png?updatedAt=1767539579782',
  },
];

const tickerItems = [
  'Available for select projects — Q2 2026',
  'Awwwards recognised',
  'Design · Development · Systems',
  'marcf@marcfriedmanwebdesign.com',
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const { isMenuOpen, setMenuOpen } = useAppStore();
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const lastScrollY = useRef(0);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }
      setIsScrolled(currentScrollY > 20);
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setHoveredIndex(null);
  }, [pathname, setMenuOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [setMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const handleNavigation = (to: string) => {
    router.push(to);
    setMenuOpen(false);
  };

  const previewIndex = hoveredIndex ?? 0;

  return (
    <div className="min-h-screen bg-black">
      {/* Top Bar */}
      <motion.header
        ref={headerRef}
        className={`fixed w-full z-[60] transition-all duration-500 ${
          isMenuOpen
            ? 'bg-transparent'
            : isScrolled
            ? 'bg-black/60 backdrop-blur-xl border-b border-white/5'
            : 'bg-transparent'
        }`}
        animate={{ y: isMenuOpen || isHeaderVisible ? 0 : -100 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-[4.236rem]">
            <button
              onClick={() => handleNavigation('/')}
              className="site-logo block z-[70] relative"
              aria-label="Marc Friedman - Home"
            >
              <img
                src="/images/marc-friedman-primary.svg"
                alt="Marc Friedman"
                className="h-12 sm:h-16 md:h-20 w-auto object-contain pt-2"
                loading="eager"
                width="80"
                height="32"
              />
            </button>

            <div className="flex items-center gap-4 sm:gap-6 z-[70] relative">
              <Link
                href="/contact"
                className={`hidden sm:inline-flex items-center gap-2 text-[11px] font-mono tracking-[0.15em] uppercase transition-colors ${
                  isMenuOpen ? 'text-white/0 pointer-events-none' : 'text-white/70 hover:text-[#A3D1FF]'
                }`}
              >
                <span className="relative flex w-2 h-2">
                  <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-60" />
                  <span className="relative w-2 h-2 rounded-full bg-green-400" />
                </span>
                Let&apos;s Talk
              </Link>

              <button
                onClick={() => setMenuOpen(!isMenuOpen)}
                className="group relative flex items-center gap-3 px-4 py-2.5 border border-white/15 hover:border-white/40 transition-colors"
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMenuOpen}
              >
                <span className="relative w-5 h-[14px] flex flex-col justify-between">
                  <motion.span
                    className="block h-[1.5px] w-full bg-white origin-center"
                    animate={
                      isMenuOpen
                        ? { rotate: 45, y: 6 }
                        : { rotate: 0, y: 0 }
                    }
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  />
                  <motion.span
                    className="block h-[1.5px] w-full bg-white origin-center"
                    animate={
                      isMenuOpen
                        ? { rotate: -45, y: -6 }
                        : { rotate: 0, y: 0 }
                    }
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  />
                </span>
                <span className="text-xs font-medium tracking-[0.15em] uppercase text-white">
                  {isMenuOpen ? 'Close' : 'Menu'}
                </span>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Constellation Menu Overlay */}
      <ConstellationMenu open={isMenuOpen} onClose={() => setMenuOpen(false)} />

      {/* Main Content */}
      <main className="relative pt-[4.236rem]">{children}</main>

      {/* Footer */}
      <footer className="relative bg-[#0a0a0a] border-t border-white/10 overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute bottom-0 left-1/4 w-[800px] h-[400px] bg-[#A3D1FF]/6 rounded-full blur-[160px] pointer-events-none" />
        {/* Grain overlay */}
        <div
          className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.5'/></svg>\")",
          }}
        />
        {/* Corner frame guides */}
        <div className="absolute inset-0 pointer-events-none hidden md:block">
          {['top-8 left-8', 'top-8 right-8', 'bottom-8 left-8', 'bottom-8 right-8'].map(
            (pos, i) => (
              <div key={i} className={`absolute ${pos} w-4 h-4`}>
                <div className="absolute inset-0 border-l border-t border-white/15" />
              </div>
            ),
          )}
        </div>

        <div className="container-custom relative py-16 md:py-24">
          {/* Chapter marker */}
          <div className="flex items-center gap-4 mb-14">
            <span className="text-white/40 text-[10px] font-mono tracking-[0.3em] uppercase">
              Colophon
            </span>
            <span className="h-[1px] flex-1 bg-white/10 max-w-[60px]" />
            <span className="text-white/40 text-[10px] font-mono tracking-[0.3em] uppercase">
              Marc Friedman · {new Date().getFullYear()}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr_1fr_1fr] gap-12 lg:gap-16">
            {/* Brand column */}
            <div>
              <img
                src="/images/marc-friedman-primary.svg"
                alt="Marc Friedman logo"
                className="h-12 sm:h-16 w-auto object-contain mb-6 pt-2"
                width="80"
                height="32"
              />
              <p
                className="text-white/60 text-base leading-relaxed max-w-xs mb-8"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                Full-stack design &amp; development — vision to launch, no handoffs.
              </p>

              <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.25em] text-white mb-5">
                <span className="relative flex w-2 h-2">
                  <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-60" />
                  <span className="relative w-2 h-2 rounded-full bg-green-400" />
                </span>
                Available — Q2 2026
              </div>

              <div className="flex flex-wrap gap-3">
                <a href="https://www.linkedin.com/in/portfolio2/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center border border-white/20 text-white hover:bg-white hover:text-black transition-colors" aria-label="LinkedIn">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="https://www.behance.net/marcfriedmanweb" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center border border-white/20 text-white hover:bg-white hover:text-black transition-colors" aria-label="Behance">
                  <Palette className="w-4 h-4" />
                </a>
                <a href="https://www.awwwards.com/marc-friedman/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center border border-white/20 text-white hover:bg-white hover:text-black transition-colors" aria-label="Awwwards">
                  <Trophy className="w-4 h-4" />
                </a>
                <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center border border-white/20 text-white hover:bg-white hover:text-black transition-colors" aria-label="Schedule a call">
                  <Calendar className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Services column */}
            <div>
              <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#A3D1FF] mb-6">
                — Services
              </p>
              <ul className="space-y-2.5">
                <li><Link href="/services/web-development" className="text-sm text-white/60 hover:text-[#A3D1FF] transition-colors">Web Development</Link></li>
                <li><Link href="/services/design" className="text-sm text-white/60 hover:text-[#A3D1FF] transition-colors">UI/UX Design</Link></li>
                <li><Link href="/services/design-systems" className="text-sm text-white/60 hover:text-[#A3D1FF] transition-colors">Design Systems</Link></li>
                <li><Link href="/services/ai-integration" className="text-sm text-white/60 hover:text-[#A3D1FF] transition-colors">AI Integration</Link></li>
                <li><Link href="/services/cybersecurity" className="text-sm text-white/60 hover:text-[#A3D1FF] transition-colors">Cybersecurity</Link></li>
                <li><Link href="/services/startup-mvp" className="text-sm text-white/60 hover:text-[#A3D1FF] transition-colors">Startup MVP</Link></li>
                <li><Link href="/services/seo-content-layout" className="text-sm text-white/60 hover:text-[#A3D1FF] transition-colors">SEO &amp; Content Layout</Link></li>
                <li><Link href="/services/aeo" className="text-sm text-white/60 hover:text-[#A3D1FF] transition-colors">AEO</Link></li>
                <li><Link href="/services/geo" className="text-sm text-white/60 hover:text-[#A3D1FF] transition-colors">GEO</Link></li>
                <li><Link href="/services/local-seo" className="text-sm text-white/60 hover:text-[#A3D1FF] transition-colors">Local SEO</Link></li>
                <li><Link href="/services/maintenance-hosting" className="text-sm text-white/60 hover:text-[#A3D1FF] transition-colors">Maintenance &amp; Hosting</Link></li>
              </ul>
            </div>

            {/* Work + Resources column */}
            <div className="space-y-10">
              <div>
                <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#A3D1FF] mb-6">
                  — Work
                </p>
                <ul className="space-y-2.5">
                  <li><Link href="/work" className="text-sm text-white/60 hover:text-[#A3D1FF] transition-colors">All Projects</Link></li>
                  <li><Link href="/work/case-studies/binns-media" className="text-sm text-white/60 hover:text-[#A3D1FF] transition-colors">Binns Media Group</Link></li>
                  <li><Link href="/work/case-studies/untapped-africa" className="text-sm text-white/60 hover:text-[#A3D1FF] transition-colors">Untapped Africa</Link></li>
                  <li><Link href="/work/case-studies/automarginx" className="text-sm text-white/60 hover:text-[#A3D1FF] transition-colors">AutoMarginX</Link></li>
                </ul>
              </div>
              <div>
                <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#A3D1FF] mb-6">
                  — Resources
                </p>
                <ul className="space-y-2.5">
                  <li><Link href="/blog" className="text-sm text-white/60 hover:text-[#A3D1FF] transition-colors">Blog</Link></li>
                  <li><a href="https://www.behance.net/marcfriedmanweb" target="_blank" rel="noopener noreferrer" className="text-sm text-white/60 hover:text-[#A3D1FF] transition-colors">Behance</a></li>
                  <li><a href="https://dribbble.com/marcf9199/about" target="_blank" rel="noopener noreferrer" className="text-sm text-white/60 hover:text-[#A3D1FF] transition-colors">Dribbble</a></li>
                  <li><a href="https://clutch.co/profile/marc-friedman-design-agency" target="_blank" rel="noopener noreferrer" className="text-sm text-white/60 hover:text-[#A3D1FF] transition-colors">Clutch Reviews</a></li>
                </ul>
              </div>
            </div>

            {/* Company column */}
            <div>
              <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#A3D1FF] mb-6">
                — Company
              </p>
              <ul className="space-y-2.5">
                <li><Link href="/about" className="text-sm text-white/60 hover:text-[#A3D1FF] transition-colors">About</Link></li>
                <li><Link href="/contact" className="text-sm text-white/60 hover:text-[#A3D1FF] transition-colors">Contact</Link></li>
                <li><Link href="/press" className="text-sm text-white/60 hover:text-[#A3D1FF] transition-colors">Press</Link></li>
                <li><a href="mailto:marcf@marcfriedmanwebdesign.com" className="text-sm text-white/60 hover:text-[#A3D1FF] transition-colors">Email Us</a></li>
              </ul>
            </div>
          </div>

          {/* Tech stack strip */}
          <div className="mt-14 pt-8 border-t border-white/10">
            <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/30 mb-2 text-center">
              Built with
            </p>
            <TechStackStrip />
          </div>

          {/* Bottom bar */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/40">
                © {new Date().getFullYear()} Marc Friedman. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                <Link href="/privacy-policy" className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40 hover:text-[#A3D1FF] transition-colors">Privacy</Link>
                <Link href="/terms-and-conditions" className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40 hover:text-[#A3D1FF] transition-colors">Terms</Link>
                <a href="/accessibility-statement.html" className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40 hover:text-[#A3D1FF] transition-colors">Accessibility</a>
                <Link href="/cookies-policy" className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40 hover:text-[#A3D1FF] transition-colors">Cookies</Link>
                <Link href="/disclaimer" className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40 hover:text-[#A3D1FF] transition-colors">Disclaimer</Link>
                <a href="/sitemap.xml" className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40 hover:text-[#A3D1FF] transition-colors">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <ConsentBanner />
    </div>
  );
}
