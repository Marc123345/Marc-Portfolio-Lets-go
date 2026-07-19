"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Linkedin, Calendar, Trophy, ArrowUpRight, Palette, Youtube, Building2, type LucideIcon } from 'lucide-react';
import { useAppStore } from '@/stores/useAppStore';
import { motion, AnimatePresence } from 'framer-motion';
import ConsentBanner from '@/components/ConsentBanner';
import ConstellationMenu from '@/components/ConstellationMenu';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import ResourcePopup from '@/components/ResourcePopup';
import NavDropdown from '@/components/NavDropdown';

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
    meta: 'Inbox · Now',
    preview:
      'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%201%20-%201x1(1).png?updatedAt=1767539579782',
  },
  {
    label: 'Free Audit',
    to: '/free-website-analyzer',
    number: '06',
    meta: 'Free Tool',
    preview:
      'https://ik.imagekit.io/qcvroy8xpd/New%20Folder/Mockup%204%20-%2016x9.png?updatedAt=1767539579710',
  },
  {
    label: 'GEO Audit',
    to: '/free-geo-audit',
    number: '07',
    meta: 'Free · AI Visibility',
    preview:
      'https://ik.imagekit.io/qcvroy8xpd/uoq5Ztg.jpeg',
  },
];

type FooterLink = { label: string; href: string; external?: boolean };
type FooterGroup = { heading: string; links: FooterLink[] };

/* Footer link columns, grouped by meaning:
   1 · Services  |  2 · Work / Industries / Company  |  3 · Tools / Resources / Recognition
   Kept to a balanced 12 / 12 / 13 links so the columns come out roughly the
   same height. */
const FOOTER_COLUMNS: FooterGroup[][] = [
  [
    {
      heading: 'Services',
      links: [
        { label: 'B2B Web Design', href: '/services/b2b-web-design/' },
        { label: 'Web Development', href: '/services/web-development' },
        { label: 'UI/UX Design', href: '/services/design/' },
        { label: 'Design Systems', href: '/services/design-systems/' },
        { label: 'AI Integration', href: '/services/ai-integration' },
        { label: 'Cybersecurity', href: '/services/cybersecurity' },
        { label: 'Startup MVP', href: '/services/startup-mvp' },
        { label: 'SEO & Content Layout', href: '/services/seo-content-layout' },
        { label: 'AEO', href: '/services/aeo' },
        { label: 'GEO', href: '/services/geo' },
        { label: 'Local SEO', href: '/services/local-seo' },
        { label: 'Maintenance & Hosting', href: '/services/maintenance-hosting' },
      ],
    },
  ],
  [
    {
      heading: 'Work',
      links: [
        { label: 'All Projects', href: '/work/' },
        { label: 'Case Studies', href: '/work/case-studies/' },
        { label: 'Binns Media Group', href: '/work/case-studies/binns-media/' },
        { label: 'Untapped Africa', href: '/work/case-studies/untapped-africa/' },
        { label: 'AutoMarginX', href: '/work/case-studies/automarginx/' },
      ],
    },
    {
      heading: 'Industries',
      links: [
        { label: 'Longevity Clinics', href: '/longevity-clinics' },
        { label: 'Biohacking Studios', href: '/biohacking-clinics' },
        { label: 'Dental Clinics', href: '/dental-audit/' },
      ],
    },
    {
      heading: 'Company',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/contact/' },
        { label: 'Press', href: '/press' },
        { label: 'Email Us', href: 'mailto:marcf@marcfriedmanwebdesign.com', external: true },
      ],
    },
  ],
  [
    {
      heading: 'Tools',
      links: [
        { label: 'Website Analyzer', href: '/tools/website-analyzer' },
        { label: 'ROI Calculator', href: '/tools/roi-calculator' },
        { label: 'Project Timeline', href: '/tools/project-timeline' },
        { label: 'Free Website Analyzer', href: '/free-website-analyzer/' },
        { label: 'Free GEO Audit', href: '/free-geo-audit/' },
      ],
    },
    {
      heading: 'Resources',
      links: [
        { label: 'Free Guides & Checklists', href: '/resources' },
        { label: 'Blog', href: '/blog' },
      ],
    },
    {
      heading: 'Recognition',
      links: [
        { label: 'Behance', href: 'https://www.behance.net/marcfriedmanweb', external: true },
        { label: 'Dribbble', href: 'https://dribbble.com/marcf9199/about', external: true },
        { label: 'Clutch Reviews', href: 'https://clutch.co/profile/marc-friedman-design-agency', external: true },
        { label: 'CSS Design Awards', href: 'https://www.cssdesignawards.com/sites/marc-friedman-web-design-agency/49357/', external: true },
        { label: 'Awwwards', href: 'https://www.awwwards.com/marc-friedman/', external: true },
        { label: 'DesignRush', href: 'https://www.designrush.com/agency/profile/marc-friedman-design-agency', external: true },
      ],
    },
  ],
];

const FOOTER_LEGAL: FooterLink[] = [
  { label: 'Privacy', href: '/privacy-policy' },
  { label: 'Terms', href: '/terms-and-conditions' },
  { label: 'Accessibility', href: '/accessibility-statement/' },
  { label: 'Cookies', href: '/cookies-policy' },
  { label: 'Disclaimer', href: '/disclaimer' },
  { label: 'Sitemap', href: '/sitemap.xml', external: true },
];

const FOOTER_SOCIALS: { href: string; label: string; Icon: LucideIcon }[] = [
  { href: 'https://www.linkedin.com/in/portfolio2/', label: 'LinkedIn', Icon: Linkedin },
  { href: 'https://www.linkedin.com/company/105745552/', label: 'LinkedIn, Company page', Icon: Building2 },
  { href: 'https://www.behance.net/marcfriedmanweb', label: 'Behance', Icon: Palette },
  { href: 'https://www.youtube.com/@MarcFriedmanWebDesign', label: 'YouTube', Icon: Youtube },
  { href: 'https://www.awwwards.com/marc-friedman/', label: 'Awwwards', Icon: Trophy },
  { href: '/contact/', label: 'Schedule a call', Icon: Calendar },
];

/* One definition each, so the footer can't drift out of type alignment. */
function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#A3D1FF] mb-4">
      {children}
    </p>
  );
}

function FooterLinkItem({ link }: { link: FooterLink }) {
  const className = 'text-sm text-white/60 hover:text-[#A3D1FF] transition-colors';
  return (
    <li>
      {link.external ? (
        <a
          href={link.href}
          target={link.href.startsWith('mailto:') ? undefined : '_blank'}
          rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
          className={className}
        >
          {link.label}
        </a>
      ) : (
        <Link href={link.href} className={className}>
          {link.label}
        </Link>
      )}
    </li>
  );
}

const tickerItems = [
  'Available for select projects, Now',
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
    /* Skip hide-on-scroll-down behavior on mobile, with reduced
       motion forced on, the framer 'y: -100' animation would
       snap, making the header appear/disappear abruptly. Always
       keep the header pinned on mobile. */
    const mobileMq = window.matchMedia('(max-width: 768px)');
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (
        !mobileMq.matches &&
        currentScrollY > lastScrollY.current &&
        currentScrollY > 100
      ) {
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

  // Hijack every /contact link sitewide → open Calendly popup.
  // Single CTA goal across the portfolio without rewriting every CTA. Falls
  // through on cmd/ctrl/middle-click (new tab) or if Calendly hasn't loaded.
  // CTA consistency: all "Book a Call" / contact CTAs route to the /contact
  // page (one canonical destination + one tracking surface). The previous
  // global interceptor that hijacked /contact clicks into a Calendly popup
  // was removed deliberately.

  const handleNavigation = (to: string) => {
    router.push(to);
    setMenuOpen(false);
  };

  const previewIndex = hoveredIndex ?? 0;

  // Pure-landing routes opt out of the global nav/footer AND the floating
  // Calendly badge (1:1 attention ratio, the page's own CTA is the single
  // conversion goal).
  const isBareLanding =
    pathname === '/dental-audit' ||
    pathname === '/dental-audit/' ||
    pathname === '/youtube-assets' ||
    pathname === '/youtube-assets/' ||
    pathname === '/rfc' ||
    pathname === '/rfc/' ||
    pathname === '/gramercy' ||
    pathname === '/gramercy/' ||
    pathname === '/thrive' ||
    pathname === '/thrive/' ||
    // The THRIVE deck is served at the root of the thrive.* subdomain via a
    // Cloudflare Worker rewrite, so the client-side path reads as "/" even
    // though the deck HTML is served. Hide all chrome on that host.
    (typeof window !== 'undefined' && window.location.hostname.startsWith('thrive.'));
  if (isBareLanding) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-black">
      <ResourcePopup />
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

            {/* Desktop primary navigation (NN/g #1, visible on larger screens).
                Active state per NN/g #5 (current-location indicator). */}
            <nav
              className={`hidden lg:flex items-center gap-10 z-[70] relative transition-opacity ${
                isMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
              }`}
              aria-label="Primary"
            >
              {[
                { label: 'Work', to: '/work' },
                { label: 'Services', to: '/services' },
                { label: 'Blog', to: '/blog' },
                { label: 'Resources', to: '/resources' },
                { label: 'About', to: '/about' },
              ].map(({ label, to }) => {
                const isActive =
                  pathname === to || (to !== '/' && pathname.startsWith(`${to}/`));
                return (
                  <Link
                    key={to}
                    href={to}
                    aria-current={isActive ? 'page' : undefined}
                    className={`relative text-sm font-medium tracking-wide py-2 transition-colors ${
                      isActive
                        ? 'text-white'
                        : 'text-white/70 hover:text-white'
                    }`}
                  >
                    {label}
                    <span
                      aria-hidden
                      className={`absolute left-0 right-0 -bottom-0.5 h-[2px] bg-[#A3D1FF] origin-left transition-transform duration-300 ${
                        isActive ? 'scale-x-100' : 'scale-x-0'
                      }`}
                    />
                  </Link>
                );
              })}
              <NavDropdown
                label="Tools"
                items={[
                  { label: 'Website Analyzer', href: '/tools/website-analyzer' },
                  { label: 'ROI Calculator', href: '/tools/roi-calculator' },
                  { label: 'Project Timeline', href: '/tools/project-timeline' },
                ]}
              />
            </nav>

            <div className="flex items-center gap-4 sm:gap-6 z-[70] relative">
              <Link
                href="/contact/"
                className={`hidden sm:inline-flex items-center gap-2 bg-white text-black text-xs font-medium tracking-[0.12em] uppercase px-5 py-2.5 hover:bg-[#A3D1FF] transition-colors ${
                  isMenuOpen ? 'opacity-0 pointer-events-none' : ''
                }`}
              >
                <span className="relative flex w-2 h-2">
                  <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-60" />
                  <span className="relative w-2 h-2 rounded-full bg-green-500" />
                </span>
                Book a Call
              </Link>

              {/* Hamburger only on mobile (NN/g #1, desktop has inline nav) */}
              <button
                onClick={() => setMenuOpen(!isMenuOpen)}
                className="lg:hidden group relative flex items-center gap-3 px-4 py-2.5 border border-white/15 hover:border-white/40 transition-colors"
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
          <div className="flex items-center gap-3 mb-8">
            <span className="text-white/40 text-[10px] font-mono tracking-[0.3em] uppercase">
              Colophon
            </span>
            <span className="h-[1px] flex-1 bg-white/10 max-w-[60px]" />
            <span className="text-white/40 text-[10px] font-mono tracking-[0.3em] uppercase">
              Marc Friedman · {new Date().getFullYear()}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr] gap-10 lg:gap-12">
            {/* Brand column */}
            <div>
              <img
                src="/images/marc-friedman-primary.svg"
                alt="Marc Friedman logo"
                className="h-12 sm:h-16 w-auto object-contain mb-4"
                width="80"
                height="32"
              />
              <p
                className="text-white/60 text-base leading-relaxed max-w-xs mb-8"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Full-stack design &amp; development, vision to launch, no handoffs.
              </p>

              <div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.3em] text-white mb-8">
                <span className="relative flex w-2 h-2">
                  <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-60" />
                  <span className="relative w-2 h-2 rounded-full bg-green-400" />
                </span>
                Available, Now
              </div>

              <div className="flex flex-wrap gap-2">
                {FOOTER_SOCIALS.map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('/') ? undefined : '_blank'}
                    rel={href.startsWith('/') ? undefined : 'noopener noreferrer'}
                    className="w-10 h-10 flex items-center justify-center border border-white/15 text-white/70 hover:bg-white hover:text-black hover:border-white transition-colors"
                    aria-label={label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Link columns */}
            {FOOTER_COLUMNS.map((groups, i) => (
              <div key={i} className="space-y-10">
                {groups.map((group) => (
                  <div key={group.heading}>
                    <FooterHeading>{group.heading}</FooterHeading>
                    <ul className="space-y-3">
                      {group.links.map((link) => (
                        <FooterLinkItem key={link.label} link={link} />
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/40">
                © {new Date().getFullYear()} Marc Friedman. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
                {FOOTER_LEGAL.map((link) =>
                  link.external ? (
                    <a
                      key={link.label}
                      href={link.href}
                      className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/40 hover:text-[#A3D1FF] transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/40 hover:text-[#A3D1FF] transition-colors"
                    >
                      {link.label}
                    </Link>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </footer>

      <ConsentBanner />
    </div>
  );
}
