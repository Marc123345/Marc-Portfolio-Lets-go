"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Linkedin, Calendar, Trophy, ArrowUpRight, Palette } from 'lucide-react';
import { useAppStore } from '@/stores/useAppStore';
import { motion, AnimatePresence } from 'framer-motion';
import ConsentBanner from '@/components/ConsentBanner';
import { CALENDLY_LINK } from '@/lib/constants';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

type NavLink = {
  label: string;
  to: string;
  number: string;
  gradient: string;
  tagline: string;
};

const navLinks: NavLink[] = [
  {
    label: 'Work',
    to: '/work',
    number: '01',
    tagline: 'Selected case studies',
    gradient: 'radial-gradient(120% 120% at 0% 0%, #A3D1FF 0%, #1b1b1b 55%, #000 100%)',
  },
  {
    label: 'Services',
    to: '/services',
    number: '02',
    tagline: 'Design, development, systems',
    gradient: 'radial-gradient(120% 120% at 100% 0%, #FFB800 0%, #1b1b1b 55%, #000 100%)',
  },
  {
    label: 'Blog',
    to: '/blog',
    number: '03',
    tagline: 'Notes on craft & strategy',
    gradient: 'radial-gradient(120% 120% at 50% 100%, #1769FF 0%, #1b1b1b 55%, #000 100%)',
  },
  {
    label: 'About',
    to: '/about',
    number: '04',
    tagline: 'A decade of digital craft',
    gradient: 'radial-gradient(120% 120% at 0% 100%, #C084FC 0%, #1b1b1b 55%, #000 100%)',
  },
  {
    label: 'Contact',
    to: '/contact',
    number: '05',
    tagline: "Let's build something",
    gradient: 'radial-gradient(120% 120% at 100% 100%, #34D399 0%, #1b1b1b 55%, #000 100%)',
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

  const activeGradient =
    hoveredIndex !== null ? navLinks[hoveredIndex].gradient : navLinks[0].gradient;

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
                className={`hidden sm:inline-flex items-center gap-2 text-sm font-medium tracking-wide uppercase transition-colors ${
                  isMenuOpen ? 'text-white/0 pointer-events-none' : 'text-white/80 hover:text-white'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
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

      {/* Full-Viewport Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[55] overflow-hidden"
            initial={{ clipPath: 'circle(0% at calc(100% - 5rem) 2.5rem)' }}
            animate={{ clipPath: 'circle(160% at calc(100% - 5rem) 2.5rem)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 5rem) 2.5rem)' }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          >
            {/* Animated gradient background */}
            <motion.div
              className="absolute inset-0 transition-[background] duration-700 ease-out"
              style={{ background: activeGradient }}
            />
            {/* Grain overlay */}
            <div
              className="absolute inset-0 opacity-[0.08] mix-blend-overlay pointer-events-none"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.5'/></svg>\")",
              }}
            />
            {/* Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(0,0,0,0.55)_100%)] pointer-events-none" />

            <div className="relative h-full flex flex-col">
              {/* Main content area */}
              <div className="flex-1 flex items-center pt-[4.236rem] overflow-y-auto">
                <div className="container-custom w-full grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center py-8">
                  {/* Nav list */}
                  <nav aria-label="Primary">
                    <ul className="space-y-1 sm:space-y-2">
                      {navLinks.map((link, idx) => {
                        const isActive = pathname === link.to || pathname.startsWith(link.to + '/');
                        return (
                          <li key={link.label}>
                            <div className="overflow-hidden">
                              <motion.div
                                initial={{ y: '100%' }}
                                animate={{ y: 0 }}
                                exit={{ y: '100%' }}
                                transition={{
                                  duration: 0.7,
                                  delay: 0.3 + idx * 0.07,
                                  ease: [0.22, 1, 0.36, 1],
                                }}
                              >
                                <Link
                                  href={link.to}
                                  onMouseEnter={() => setHoveredIndex(idx)}
                                  onFocus={() => setHoveredIndex(idx)}
                                  onClick={() => setMenuOpen(false)}
                                  className="group flex items-baseline gap-4 sm:gap-6 py-2 sm:py-3 border-b border-white/10 hover:border-white/30 transition-colors"
                                >
                                  <span className="text-xs sm:text-sm font-mono text-white/40 group-hover:text-white/80 transition-colors shrink-0 w-8">
                                    {link.number}
                                  </span>
                                  <span
                                    className="relative font-bold leading-[0.95] tracking-tight text-white"
                                    style={{
                                      fontSize: 'clamp(2.75rem, 9vw, 7.5rem)',
                                      fontFamily: "'Inter', sans-serif",
                                      letterSpacing: '-0.03em',
                                    }}
                                  >
                                    <span className="inline-block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-3">
                                      {link.label}
                                    </span>
                                    {isActive && (
                                      <span className="ml-3 inline-block w-2 h-2 rounded-full bg-white align-middle" />
                                    )}
                                  </span>
                                  <span className="ml-auto opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
                                    <ArrowUpRight className="w-6 h-6 sm:w-8 sm:h-8 text-white" strokeWidth={1.5} />
                                  </span>
                                </Link>
                              </motion.div>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </nav>

                  {/* Right preview panel */}
                  <motion.div
                    className="hidden lg:flex flex-col justify-between h-full min-h-[420px] pl-8 border-l border-white/10"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 40 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    <div>
                      <p className="text-xs font-medium tracking-[0.3em] uppercase text-white/50 mb-6">
                        Currently viewing
                      </p>
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={hoveredIndex ?? 'default'}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.25 }}
                        >
                          <h3 className="text-5xl xl:text-6xl font-bold text-white leading-[1] tracking-tight mb-4">
                            {hoveredIndex !== null
                              ? navLinks[hoveredIndex].label
                              : 'Explore'}
                          </h3>
                          <p className="text-lg text-white/70 max-w-sm leading-relaxed">
                            {hoveredIndex !== null
                              ? navLinks[hoveredIndex].tagline
                              : 'Hover a link to preview.'}
                          </p>
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    <div className="flex items-center gap-4 mt-8">
                      <div className="flex items-center gap-2 text-xs font-medium tracking-[0.15em] uppercase text-white/70">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        Available for work
                      </div>
                    </div>

                    <div>
                      <p className="text-xs font-medium tracking-[0.3em] uppercase text-white/50 mb-4">
                        Elsewhere
                      </p>
                      <div className="flex flex-wrap gap-3">
                        <a
                          href="https://www.linkedin.com/in/portfolio2/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-11 h-11 flex items-center justify-center rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-colors"
                          aria-label="LinkedIn"
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                        <a
                          href="https://www.behance.net/marcfriedmanweb"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-11 h-11 flex items-center justify-center rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-colors"
                          aria-label="Behance"
                        >
                          <Palette className="w-4 h-4" />
                        </a>
                        <a
                          href="https://www.awwwards.com/marc-friedman/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-11 h-11 flex items-center justify-center rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-colors"
                          aria-label="Awwwards"
                        >
                          <Trophy className="w-4 h-4" />
                        </a>
                        <a
                          href={CALENDLY_LINK}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-11 h-11 flex items-center justify-center rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-colors"
                          aria-label="Schedule a call"
                        >
                          <Calendar className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Mobile socials + ticker */}
              <div className="lg:hidden border-t border-white/10 bg-black/20 backdrop-blur-sm">
                <div className="container-custom py-5 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-[10px] font-medium tracking-[0.15em] uppercase text-white/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    Available
                  </div>
                  <div className="flex gap-2">
                    <a href="https://www.linkedin.com/in/portfolio2/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-9 h-9 flex items-center justify-center rounded-full border border-white/20 text-white">
                      <Linkedin className="w-3.5 h-3.5" />
                    </a>
                    <a href="https://www.behance.net/marcfriedmanweb" target="_blank" rel="noopener noreferrer" aria-label="Behance" className="w-9 h-9 flex items-center justify-center rounded-full border border-white/20 text-white">
                      <Palette className="w-3.5 h-3.5" />
                    </a>
                    <a href="https://www.awwwards.com/marc-friedman/" target="_blank" rel="noopener noreferrer" aria-label="Awwwards" className="w-9 h-9 flex items-center justify-center rounded-full border border-white/20 text-white">
                      <Trophy className="w-3.5 h-3.5" />
                    </a>
                    <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer" aria-label="Schedule" className="w-9 h-9 flex items-center justify-center rounded-full border border-white/20 text-white">
                      <Calendar className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Marquee ticker */}
              <div className="relative border-t border-white/10 bg-black/30 backdrop-blur-sm overflow-hidden py-4">
                <div className="flex gap-12 whitespace-nowrap animate-[ticker_40s_linear_infinite] [&>span]:shrink-0">
                  {[...tickerItems, ...tickerItems, ...tickerItems].map((t, i) => (
                    <span key={i} className="text-sm font-medium tracking-wide text-white/70 flex items-center gap-12">
                      {t}
                      <span className="w-1.5 h-1.5 rounded-full bg-white/30" aria-hidden />
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="relative pt-[4.236rem]">{children}</main>

      {/* Footer */}
      <footer className="bg-[#1b1b1b] border-t border-white/10">
        <div className="container-custom section-spacing-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 lg:gap-12">
            <div>
              <div className="mb-6">
                <img
                  src="/images/marc-friedman-primary.svg"
                  alt="Marc Friedman logo - Full Stack Designer & Developer"
                  className="h-12 sm:h-16 w-auto object-contain mb-4 pt-2"
                  width="80"
                  height="32"
                />
                <p className="text-white text-sm leading-relaxed max-w-xs">
                  Full-stack design and development solutions that transform your vision into exceptional digital experiences.
                </p>
              </div>

              <div className="flex gap-3">
                <a href="https://www.linkedin.com/in/portfolio2/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#2d3035] rounded-lg flex items-center justify-center text-white hover:text-[#0077B5] hover:bg-[#0077B5]/10 transition-all group" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
                <a href="https://www.behance.net/marcfriedmanweb" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#2d3035] rounded-lg flex items-center justify-center text-white hover:text-[#1769FF] hover:bg-[#1769FF]/10 transition-all group" aria-label="Behance">
                  <Palette className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
                <a href={CALENDLY_LINK} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#2d3035] rounded-lg flex items-center justify-center text-white hover:text-[#00A2FF] hover:bg-[#00A2FF]/10 transition-all group" aria-label="Schedule a Call">
                  <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
                <a href="https://www.awwwards.com/marc-friedman/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#2d3035] rounded-lg flex items-center justify-center text-white hover:text-[#FFB800] hover:bg-[#FFB800]/10 transition-all group" aria-label="Awwwards">
                  <Trophy className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-6 text-lg">Services</h3>
              <ul className="space-y-2">
                <li><Link href="/services/web-development" className="text-white hover:text-white transition-colors">Web Development</Link></li>
                <li><Link href="/services/design" className="text-white hover:text-white transition-colors">UI/UX Design</Link></li>
                <li><Link href="/services/design-systems" className="text-white hover:text-white transition-colors">Design Systems</Link></li>
                <li><Link href="/services/ai-integration" className="text-white hover:text-white transition-colors">AI Integration</Link></li>
                <li><Link href="/services/cybersecurity" className="text-white hover:text-white transition-colors">Cybersecurity</Link></li>
                <li><Link href="/services/startup-mvp" className="text-white hover:text-white transition-colors">Startup MVP</Link></li>
                <li><Link href="/services/external-web-department" className="text-white hover:text-white transition-colors">External Web Department</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-6 text-lg">Work</h3>
              <ul className="space-y-2">
                <li><Link href="/work" className="text-white hover:text-white transition-colors">All Projects</Link></li>
                <li><Link href="/work/case-studies/binns-media" className="text-white hover:text-white transition-colors">Binns Media Group</Link></li>
                <li><Link href="/work/case-studies/untapped-africa" className="text-white hover:text-white transition-colors">Untapped Africa</Link></li>
                <li><Link href="/work/case-studies/automarginx" className="text-white hover:text-white transition-colors">AutoMarginX</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-6 text-lg">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="/blog" className="text-white hover:text-white transition-colors">Blog</Link></li>
                <li><a href="https://www.behance.net/marcfriedmanweb" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white transition-colors">Behance</a></li>
                <li><a href="https://dribbble.com/marcf9199/about" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white transition-colors">Dribbble</a></li>
                <li><a href="https://clutch.co/profile/marc-friedman-design-agency" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white transition-colors">Clutch Reviews</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-6 text-lg">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-white hover:text-white transition-colors">About</Link></li>
                <li><Link href="/contact" className="text-white hover:text-white transition-colors">Contact</Link></li>
                <li><a href="mailto:marcf@marcfriedmanwebdesign.com" className="text-white hover:text-white transition-colors">Email Us</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 text-center text-white">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <p className="text-sm">© {new Date().getFullYear()} Marc Friedman. All rights reserved.</p>
                <div className="flex items-center gap-2 text-xs">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span>Available for new projects</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 text-sm">
                <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
                <Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms</Link>
                <a href="/accessibility-statement.html" className="hover:text-white transition-colors">Accessibility</a>
                <Link href="/cookies-policy" className="hover:text-white transition-colors">Cookies</Link>
                <Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
                <a href="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <ConsentBanner />
    </div>
  );
}
