"use client";

import React, { useMemo } from 'react';
import { Quote, Star, Linkedin, User, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const SERIF = "Georgia, 'Times New Roman', serif";

type Review = {
  name: string;
  rating: number;
  content: string;
};

type ClientMeta = {
  role: string;
  image: string;
  linkedin?: string;
};

const reviews: Review[] = [
  {
    name: 'Darren Youngleson',
    rating: 5,
    content:
      'Marc is an absolute winner. No limits to his depth of expertise, unwavering customer service and quality of his product and creativity. Highly recommend working with Marc.',
  },
  {
    name: 'Royi Mazor',
    rating: 5,
    content:
      'Very professional wonderful customer service, thank you Marc for all the work you put in, will definitely be using for future projects!',
  },
  {
    name: 'Omar Turner',
    rating: 5,
    content:
      "Marc was able to execute the vision perfectly! He's big on communication and easy to speak with. Marc dedicates his time to the client, ensuring the client is completely satisfied at each step of the process. I highly recommend Marc's services to anyone who needs a web developer who can execute on a vision and provide a professional finished product!",
  },
  {
    name: 'Bradley Thompson',
    rating: 5,
    content:
      "Marc is an incredible ally. We found him to be highly responsive with quick solutions as he built our landing page. This was a high-stakes project for us that did not lend itself to a template solution. Marc is that rare creative that excels at design AND wordsmithing. He's the real deal, a true professional.",
  },
  {
    name: 'Jayden Youngleson',
    rating: 5,
    content:
      'It has been an absolute pleasure working alongside Marc. His deep knowledge, strong work ethic, and commitment to delivering results have made a significant impact on our team. Marc consistently went above and beyond.',
  },
  {
    name: 'Yaron Peretz',
    rating: 5,
    content:
      'Marc was absolutely phenomenal in building the landing page for my business. His care for client satisfaction is unparalleled. He was timely, and took great attention to learning my business & my brand thoroughly.',
  },
  {
    name: 'Guneet K. Singh',
    rating: 5,
    content:
      "My team and I loved working with Marc!! He took the time to understand our goals with our website and adapt as needed. His professionalism, patience and openness to our feedback at every stage made the entire process a seamless collaboration.",
  },
  {
    name: 'Ezra Rubinson',
    rating: 5,
    content: 'Fantastic work Marc — thank you for building my dream website!!',
  },
  {
    name: 'Elior Daniely',
    rating: 5,
    content:
      'Marc did an amazing job on my website! He was professional, responsive, and delivered a design that exceeded my expectations. Highly recommend!',
  },
  {
    name: 'Benny Even Ari',
    rating: 5,
    content:
      'Marc demonstrated exceptional skill in creating a sophisticated platform that perfectly aligns with our investment and real estate needs.',
  },
  {
    name: 'Hilla Dayan',
    rating: 5,
    content:
      'Working with him was professional, precise, and enjoyable from the very first moment. He built a website that exceeded my expectations and has a great eye for design.',
  },
  {
    name: 'Bar Levy',
    rating: 5,
    content:
      'Marc did a great job studying and elaborating about the various solutions offered nowadays. He initiated and led UX & UI tasks and provided valuable insights during the entire process.',
  },
  {
    name: 'Stallone Sweeney',
    rating: 5,
    content:
      'Loved working with Marc. He listened carefully to my ideas and needs, ensuring that the final website perfectly reflected my vision. His attention to detail is incredible.',
  },
  {
    name: 'Lior Shimon',
    rating: 5,
    content: 'Marc built my dream website — he is great at what he does and a great guy.',
  },
  {
    name: 'Yosi Lugassy',
    rating: 5,
    content:
      'Marc built me the website I dreamed of. He was patient, timely, and professional. Thank you and good luck.',
  },
  {
    name: 'Shalom Landman',
    rating: 5,
    content:
      "Marc designed and created my website, and I couldn't be happier with the result! The site looks absolutely amazing, runs smoothly, and perfectly captures what I was looking for.",
  },
  {
    name: 'Julia Friedman',
    rating: 5,
    content:
      'Marc is super helpful, very knowledgeable and an expert in field. I highly recommend him.',
  },
];

const clientInfo: Record<string, ClientMeta> = {
  'Omar Turner': {
    role: 'CEO, Binns Media Group · New York',
    image: 'https://i.imgur.com/NKjkUC9.jpeg',
    linkedin: 'https://www.linkedin.com/in/omar-turner-92b188130',
  },
  'Gabriel Sher': {
    role: 'CEO, Untapped Africa',
    image: 'https://ik.imagekit.io/qcvroy8xpd/1682479506906.jpeg?updatedAt=1754019693073',
    linkedin: 'https://www.linkedin.com/in/gabriel-sher-3503a4202/',
  },
  'Darren Youngleson': {
    role: 'Serial Entrepreneur',
    image:
      'https://ik.imagekit.io/qcvroy8xpd/4c91361b-27ee-453b-88e0-af3026cac747_1_ro3hez_e_background_removal_f_png_vkfbub.png?updatedAt=1754023286922',
    linkedin: 'https://www.linkedin.com/in/darren-youngleson-27a17310/',
  },
  'Royi Mazor': {
    role: 'Owner, A Secure Annapolis Locksmith',
    image: '',
  },
  'Bradley Thompson': {
    role: 'Marketing Director',
    image: 'https://ik.imagekit.io/qcvroy8xpd/1517778443427%20(1).jpeg?updatedAt=1749336939344',
    linkedin: 'https://www.linkedin.com/in/bradleethompson/',
  },
  'Bar Levy': {
    role: 'Co-Founder & PM at Sumit-AI',
    image: 'https://i.imgur.com/ja6oGvJ.jpg',
    linkedin: 'https://www.linkedin.com/in/bar-levy',
  },
  'Ezra Rubinson': {
    role: 'Digital Marketing Agency Owner · Boston',
    image: 'https://i.imgur.com/rkHCwAv.jpeg',
    linkedin: 'https://www.linkedin.com/in/ezra-rubinson/',
  },
  'Yaron Peretz': {
    role: 'CEO, Tech Startup',
    image: 'https://i.imgur.com/cP2GDPD.jpg',
    linkedin: 'https://www.linkedin.com/in/yaron-peretz-ghostwriter',
  },
  'Stallone Sweeney': {
    role: 'Attorney · Founder of LegalContent',
    image: 'https://ik.imagekit.io/qcvroy8xpd/1689101716225.jpeg?updatedAt=1749337009395',
    linkedin: 'https://www.linkedin.com/in/stallone-sweeney-39301b198/',
  },
  'Lior Shimon': {
    role: 'Algorithm Engineer · AI',
    image: 'https://i.imgur.com/vYZWYcu.jpeg',
    linkedin: 'https://www.linkedin.com/in/liorshimon',
  },
  'Yosi Lugassy': {
    role: 'Restaurant Owner',
    image: '',
  },
  'Elior Daniely': {
    role: 'Real Estate Entrepreneur',
    image: 'https://i.imgur.com/EDJ9b8P.jpeg',
    linkedin: 'https://www.linkedin.com/in/elior-daniely-59b554237',
  },
  'Shalom Landman': {
    role: 'Real Estate Developer · Florida',
    image: 'https://i.imgur.com/N6MTFbh.jpeg',
    linkedin: 'https://www.linkedin.com/in/shalom-landman-74a492220',
  },
  'Julia Friedman': {
    role: 'Holistic Wellness Coach',
    image: 'https://i.imgur.com/wCpW4uW.jpg',
    linkedin: 'https://www.linkedin.com/in/julia-friedman-9b374b53',
  },
  'Hilla Dayan': {
    role: 'Founder of Wellness',
    image: '',
  },
  'Benny Even Ari': {
    role: 'Investment Banker · Real Estate',
    image: 'https://i.imgur.com/s3S0EXG.jpg',
    linkedin: 'https://www.linkedin.com/in/benny-even-ari',
  },
  'Jayden Youngleson': {
    role: 'CEO of Tanj Capital',
    image:
      'https://res.cloudinary.com/dadgglcaq/image/upload/v1749040855/Jayden_1_yovgde.png',
  },
  'Guneet K. Singh': {
    role: 'TV Producer · Binns Media Group',
    image:
      'https://res.cloudinary.com/dadgglcaq/image/upload/v1749337731/1732338426448_1_veqlnh.jpg',
    linkedin: 'https://www.linkedin.com/company/binns-media-group/',
  },
};

const FEATURED_NAME = 'Omar Turner';

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(count)].map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-[#FFD700] text-[#FFD700]" />
      ))}
    </div>
  );
}

function MarqueeCard({ review }: { review: Review }) {
  const client = clientInfo[review.name] ?? { role: 'Client', image: '' };
  return (
    <div className="w-[340px] sm:w-[380px] shrink-0 bg-[#111418] border border-white/10 p-6 hover:border-[#A3D1FF]/60 hover:bg-[#14181d] transition-all group">
      <div className="flex items-start justify-between mb-4">
        <Stars />
        <Quote className="w-5 h-5 text-[#A3D1FF]/40 -scale-x-100 group-hover:text-[#A3D1FF] transition-colors" />
      </div>
      <p className="text-white/85 text-[15px] leading-relaxed mb-6 line-clamp-4">
        {review.content}
      </p>
      <div className="flex items-center justify-between pt-4 border-t border-white/5">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-white/5 flex-shrink-0 ring-1 ring-white/10">
            {client.image ? (
              <img
                src={client.image}
                alt={review.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-white/40">
                <User className="w-5 h-5" />
              </div>
            )}
          </div>
          <div className="min-w-0">
            <div className="text-white text-sm font-semibold truncate">{review.name}</div>
            <div className="text-[#A3D1FF]/80 text-[11px] truncate">{client.role}</div>
          </div>
        </div>
        {client.linkedin && (
          <a
            href={client.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${review.name} on LinkedIn`}
            className="p-2 rounded-full hover:bg-[#0077B5]/10 text-white/50 hover:text-[#0077B5] transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );
}

function MarqueeRow({
  items,
  direction = 'left',
  speed = 60,
}: {
  items: Review[];
  direction?: 'left' | 'right';
  speed?: number;
}) {
  const loopId = useMemo(
    () => `testimonial-${direction}-${Math.random().toString(36).slice(2, 8)}`,
    [direction],
  );

  return (
    <div className="relative overflow-hidden testimonial-marquee-mask">
      <style>{`
        @keyframes ${loopId} {
          from { transform: translateX(${direction === 'left' ? '0' : '-50%'}); }
          to { transform: translateX(${direction === 'left' ? '-50%' : '0'}); }
        }
        .${loopId} {
          animation: ${loopId} ${speed}s linear infinite;
          will-change: transform;
        }
        .${loopId}:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .${loopId} { animation: none; }
        }
      `}</style>
      <div className={`${loopId} flex gap-5 py-2`} style={{ width: 'max-content' }}>
        {[...items, ...items].map((r, i) => (
          <MarqueeCard key={`${r.name}-${i}`} review={r} />
        ))}
      </div>
    </div>
  );
}

export default function TrustedBy() {
  const featured = reviews.find((r) => r.name === FEATURED_NAME)!;
  const featuredClient = clientInfo[featured.name];
  const rest = reviews.filter((r) => r.name !== FEATURED_NAME);
  const half = Math.ceil(rest.length / 2);
  const rowA = rest.slice(0, half);
  const rowB = rest.slice(half);

  return (
    <section className="relative py-20 md:py-28 bg-black overflow-hidden">
      {/* Ambient gradient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#A3D1FF]/5 rounded-full blur-[120px]" />
      </div>

      <style>{`
        .testimonial-marquee-mask {
          mask-image: linear-gradient(
            to right,
            transparent 0,
            black 80px,
            black calc(100% - 80px),
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0,
            black 80px,
            black calc(100% - 80px),
            transparent 100%
          );
        }
        @keyframes scroll-logos-tb {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .logo-scroll-tb {
          animation: scroll-logos-tb 40s linear infinite;
          display: flex;
          width: max-content;
        }
        .logo-scroll-tb:hover { animation-play-state: paused; }
      `}</style>

      {/* Logo Marquee */}
      <div className="relative w-full py-6 mb-16 overflow-hidden testimonial-marquee-mask">
        <div className="flex items-center gap-12 lg:gap-16 logo-scroll-tb">
          {[
            { src: 'https://i.imgur.com/uliFOja.png', alt: 'Binns Media Group', invert: true },
            { src: 'https://ik.imagekit.io/qcvroy8xpd/GOLD%20TEXT%20LOGO%20NO%20GLOW%20EFFECT%20ADDED%201.png?updatedAt=1748753342858', alt: 'Untapped Africa' },
            { src: 'https://ik.imagekit.io/qcvroy8xpd/downloads/diqalz8giyxk0bjucqwv.png?updatedAt=1754396322363', alt: 'Diamonds by CS', invert: true },
            { src: 'https://ik.imagekit.io/qcvroy8xpd/image%201%20(5).png?updatedAt=1763319654171', alt: 'H2H Marketing', invert: true },
            { src: 'https://ik.imagekit.io/qcvroy8xpd/logo%20(1).svg?updatedAt=1763381682176', alt: 'Chad LeClos', invert: true },
            { src: 'https://ik.imagekit.io/qcvroy8xpd/image%201%20(7).png', alt: 'Secure Annapolis', invert: true },
            { src: 'https://ik.imagekit.io/qcvroy8xpd/9uafCUp%201%20(1).png?updatedAt=1755247790037', alt: 'Auto Margin', invert: true },
            { src: 'https://ik.imagekit.io/qcvroy8xpd/White%20logo%20-%20no%20background.svg?updatedAt=1749030562412', alt: 'iLight' },
          ]
            .concat([
              { src: 'https://i.imgur.com/uliFOja.png', alt: 'Binns Media Group', invert: true },
              { src: 'https://ik.imagekit.io/qcvroy8xpd/GOLD%20TEXT%20LOGO%20NO%20GLOW%20EFFECT%20ADDED%201.png?updatedAt=1748753342858', alt: 'Untapped Africa' },
              { src: 'https://ik.imagekit.io/qcvroy8xpd/downloads/diqalz8giyxk0bjucqwv.png?updatedAt=1754396322363', alt: 'Diamonds by CS', invert: true },
              { src: 'https://ik.imagekit.io/qcvroy8xpd/image%201%20(5).png?updatedAt=1763319654171', alt: 'H2H Marketing', invert: true },
              { src: 'https://ik.imagekit.io/qcvroy8xpd/logo%20(1).svg?updatedAt=1763381682176', alt: 'Chad LeClos', invert: true },
              { src: 'https://ik.imagekit.io/qcvroy8xpd/image%201%20(7).png', alt: 'Secure Annapolis', invert: true },
              { src: 'https://ik.imagekit.io/qcvroy8xpd/9uafCUp%201%20(1).png?updatedAt=1755247790037', alt: 'Auto Margin', invert: true },
              { src: 'https://ik.imagekit.io/qcvroy8xpd/White%20logo%20-%20no%20background.svg?updatedAt=1749030562412', alt: 'iLight' },
            ])
            .map((logo, i) => (
              <div
                key={i}
                className="transition-all duration-300 hover:scale-110 flex-shrink-0"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className={`h-10 md:h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity ${
                    logo.invert ? 'filter brightness-0 invert' : ''
                  }`}
                />
              </div>
            ))}
        </div>
      </div>

      {/* Section Heading */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Chapter marker */}
        <div className="flex items-center gap-4 mb-10">
          <span className="text-white/50 text-xs font-mono tracking-[0.3em] uppercase">
            Chapter · Proof
          </span>
          <span className="h-[1px] flex-1 bg-white/15 max-w-[60px]" />
          <span className="text-white/50 text-xs font-mono tracking-[0.3em] uppercase">
            Testimonials · 25 verified
          </span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9 }}
          className="text-white leading-[0.95] tracking-[-0.03em] mb-16 max-w-5xl"
          style={{
            fontFamily: SERIF,
            fontSize: 'clamp(2.75rem, 7vw, 6.5rem)',
            fontWeight: 400,
          }}
        >
          Don&apos;t take my word{' '}
          <em className="italic text-[#A3D1FF]">for it.</em>
        </motion.h2>

        {/* Featured spotlight */}
        <motion.div
          className="relative grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Portrait card */}
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-tr from-[#A3D1FF]/10 via-transparent to-[#A3D1FF]/5 blur-3xl" />
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0 overflow-hidden border border-white/10">
              {featuredClient?.image ? (
                <img
                  src={featuredClient.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-[#1b1b1b] flex items-center justify-center">
                  <User className="w-24 h-24 text-white/20" />
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              {/* Corner film marks */}
              <div className="absolute top-4 left-4 w-4 h-4 border-l border-t border-white/30" />
              <div className="absolute top-4 right-4 w-4 h-4 border-r border-t border-white/30" />
              <div className="absolute bottom-4 left-4 w-4 h-4 border-l border-b border-white/30" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-r border-b border-white/30" />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <Stars />
                <div className="mt-3">
                  <div
                    className="text-white leading-none"
                    style={{
                      fontFamily: SERIF,
                      fontSize: 'clamp(1.25rem, 1.8vw, 1.5rem)',
                      fontWeight: 500,
                    }}
                  >
                    {featured.name}
                  </div>
                  <div className="text-[#A3D1FF]/80 text-xs mt-1 font-mono uppercase tracking-[0.2em]">
                    {featuredClient?.role}
                  </div>
                </div>
                {featuredClient?.linkedin && (
                  <a
                    href={featuredClient.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white text-[10px] font-mono uppercase tracking-[0.2em] backdrop-blur-sm transition-colors"
                  >
                    <Linkedin className="w-3 h-3" /> Verify on LinkedIn
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Pull quote */}
          <div className="relative">
            <Quote
              className="absolute -top-4 -left-2 w-20 h-20 text-[#A3D1FF]/15 -scale-x-100"
              aria-hidden
            />
            <blockquote
              className="relative text-white/95 leading-[1.2]"
              style={{
                fontFamily: SERIF,
                fontSize: 'clamp(1.75rem, 3.2vw, 2.75rem)',
                fontWeight: 400,
                fontStyle: 'italic',
                letterSpacing: '-0.01em',
              }}
            >
              &ldquo;Marc was able to execute the vision perfectly. He dedicates his time
              to the client, ensuring the client is completely satisfied at each step of
              the process.&rdquo;
            </blockquote>
            <div className="mt-8 flex flex-wrap items-center gap-4 text-xs text-white/50 font-mono uppercase tracking-[0.25em]">
              <span>Case study</span>
              <span className="w-1 h-1 rounded-full bg-white/30" />
              <Link
                href="/work/case-studies/binns-media"
                className="text-white hover:text-[#A3D1FF] transition-colors flex items-center gap-1"
              >
                Binns Media Group <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Aggregate stats strip */}
        <div className="mb-14 py-8 border-y border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
          {[
            { value: '5.0', label: 'Google Rating' },
            { value: '4.8', label: 'Clutch Rating' },
            { value: '25', label: 'Verified Reviews' },
            { value: '50+', label: 'Projects Shipped' },
          ].map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <div
                className="text-white leading-none mb-2"
                style={{
                  fontFamily: SERIF,
                  fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                  fontWeight: 500,
                  fontVariantNumeric: 'tabular-nums',
                }}
              >
                {s.value}
              </div>
              <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/50">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Infinite marquee rows */}
      <div className="space-y-5">
        <MarqueeRow items={rowA} direction="left" speed={80} />
        <MarqueeRow items={rowB} direction="right" speed={90} />
      </div>

      {/* Bottom CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 text-center">
        <p className="text-white/70 mb-5 text-lg">Ready to add your story to the list?</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="mr_btn mr_btn_primary">
            <span>Start Your Project</span>
          </Link>
          <Link href="/work" className="mr_btn mr_btn_outline">
            <span>View My Work</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
