/**
 * Every portfolio project / case study. Feeds /work, /work/case-studies and the
 * "next project" cards, so titles, images and tags never drift between them.
 */
export type Project = {
  title: string;
  category: string;
  blurb: string;
  image: string;
  showFullCover?: boolean;
  liveUrl?: string;
  caseStudyUrl: string;
  stats: { value: string; label: string }[];
  tags: string[];
};

export const PROJECTS: Project[] = [
  {
    title: 'Binns Media Group',
    category: 'Media Platform',
    blurb:
      'Streaming-grade platform for authentic voices, Netflix-style UX on a lean production tech stack.',
    image:
      'https://ik.imagekit.io/qcvroy8xpd/Mockup%204%20-%2016x9.png?updatedAt=1767538713061',
    liveUrl: 'https://www.binnsmediagroup.com',
    caseStudyUrl: '/work/case-studies/binns-media/',
    stats: [
      { value: '98', label: 'Lighthouse' },
      { value: '4x', label: 'Engagement' },
      { value: '18mo', label: 'On Retainer' },
    ],
    tags: ['React 18', 'TypeScript', 'Postgres', 'GSAP'],
  },
  {
    title: 'Tracefold',
    showFullCover: true,
    category: 'Cybersecurity UI Kit',
    blurb: 'A Figma design system for tracing identity alerts, reviewing evidence and approving a response across desktop and mobile.',
    image: '/images/case-studies/tracefold/cover.webp',
    liveUrl: 'https://marcdesigns25.gumroad.com/l/tracefold',
    caseStudyUrl: '/work/case-studies/tracefold/',
    stats: [
      { value: '22', label: 'Desktop screens' },
      { value: '14', label: 'Mobile screens' },
      { value: '67', label: 'Components' },
    ],
    tags: ['Figma', 'Product Design', 'Security Operations'],
  },
  {
    title: 'Untapped Africa',
    category: 'Impact / Storytelling',
    blurb:
      'A mission-first platform that helps bring clean water to 500,000+ people across 8 African countries.',
    image:
      '/images/case-studies/untapped-africa.jpg',
    liveUrl: 'https://untappedafrica.co.za',
    caseStudyUrl: '/work/case-studies/untapped-africa/',
    stats: [
      { value: '500k+', label: 'People Served' },
      { value: '08', label: 'Countries' },
      { value: '250%', label: 'Engagement ↑' },
    ],
    tags: ['Next.js', 'TypeScript', 'Postgres', 'Mapbox GL'],
  },
  {
    title: 'H2H Marketing',
    category: 'Agency Brand',
    blurb:
      'Bold brand-first digital presence for a social marketing agency connecting brands with real audiences.',
    image: 'https://ik.imagekit.io/qcvroy8xpd/H2H-Social-Homepage-Image-Only.jpg',
    liveUrl: 'https://www.h2hsocialmarketing.com/',
    caseStudyUrl: '/work/case-studies/h2h-marketing/',
    stats: [
      { value: '100%', label: 'Custom Build' },
      { value: '<2s', label: 'Load' },
      { value: 'AA', label: 'A11y' },
    ],
    tags: ['React', 'Tailwind', 'Framer Motion'],
  },
  {
    title: 'Paving Leads',
    category: 'SEO / Lead Gen',
    blurb:
      'Failing Core Web Vitals → 98 Lighthouse. Organic leads doubled in the first month after launch.',
    image:
      '/images/case-studies/paving-leads.jpg',
    liveUrl: 'https://pavinglead.com/',
    caseStudyUrl: '/work/case-studies/paving-leads/',
    stats: [
      { value: '#1', label: 'Google' },
      { value: '300%', label: 'Traffic ↑' },
      { value: '2x', label: 'Leads' },
    ],
    tags: ['Next.js', 'SEO', 'Lead Gen'],
  },
  {
    title: 'AutoMarginX',
    category: 'SaaS · Analytics',
    blurb:
      'Real-time dealer analytics platform. Dealerships saw 35% faster decisions and higher margins.',
    image: 'https://ik.imagekit.io/qcvroy8xpd/1732717492455.jpeg',
    caseStudyUrl: '/work/case-studies/automarginx/',
    stats: [
      { value: '35%', label: 'Faster Decisions' },
      { value: 'Live', label: 'Telemetry' },
      { value: 'RBAC', label: 'Auth' },
    ],
    tags: ['React', 'Node.js', 'PostgreSQL'],
  },
  {
    title: 'iLight Care',
    category: 'AI · Healthcare',
    blurb:
      'Brand, website, MVP platform, and pitch deck. Founder went from vision to investor-ready in 6 weeks.',
    image:
      '/images/case-studies/ilight.jpg',
    liveUrl: 'https://www.ilight.care',
    caseStudyUrl: '/work/case-studies/ilight/',
    stats: [
      { value: '6wk', label: 'Vision → MVP' },
      { value: 'LLM', label: 'Grounded' },
      { value: 'Deck', label: 'Included' },
    ],
    tags: ['React', 'Node.js', 'AI/ML'],
  },
  {
    title: 'Ask Africa',
    category: 'Research · Consultancy',
    blurb:
      "Commanding digital presence for one of Africa's leading research and consultancy firms.",
    image: 'https://ik.imagekit.io/qcvroy8xpd/Ask-Africa-Homepage-Image-Only.jpg',
    liveUrl: 'https://askafrica.co.za/',
    caseStudyUrl: '/work/case-studies/ask-africa/',
    stats: [
      { value: '100%', label: 'Custom Build' },
      { value: 'Pan', label: 'African Reach' },
      { value: 'Ent.', label: 'Ready' },
    ],
    tags: ['React', 'Tailwind', 'Vite'],
  },
  {
    title: 'Friedman & Cohen',
    category: 'B2B · Procurement',
    blurb:
      'Century-old retail legacy re-engineered for the digital procurement age. Real-time data, wholesale ops, role-based access.',
    image:
      '/images/case-studies/friedman-cohen.jpg',
    liveUrl: 'https://b2b.fandc.co.za',
    caseStudyUrl: '/work/case-studies/friedman-cohen/',
    stats: [
      { value: '100+', label: 'Years Legacy' },
      { value: '4.4', label: 'Google' },
      { value: 'B2B', label: 'Platform' },
    ],
    tags: ['React', 'Node.js', 'PostgreSQL'],
  },
  {
    title: 'A Secure Annapolis',
    category: 'Local · Emergency Service',
    blurb:
      'Hyper-local lead generation engine. Emergency locksmith traffic turned into immediate phone calls.',
    image:
      '/images/case-studies/secure-annapolis.jpg',
    liveUrl: 'https://www.asecureannapolislocksmith.com',
    caseStudyUrl: '/work/case-studies/secure-annapolis/',
    stats: [
      { value: '+150%', label: 'Leads' },
      { value: 'Top 3', label: 'Local Map' },
      { value: '85%', label: 'Mobile Conv.' },
    ],
    tags: ['React', 'Local SEO', 'Node.js'],
  },
  {
    title: 'Chad Le Clos Swimming',
    category: 'Athlete · Bookings',
    blurb:
      "Olympic champion's swimming clinics platform with booking, athlete management, and clinic scheduling.",
    image: '/images/clients/ApfYPlH.webp',
    liveUrl: 'https://chadleclosswimming.com',
    caseStudyUrl: '/work/case-studies/chad-le-clos/',
    stats: [
      { value: 'OLY', label: 'Champion' },
      { value: 'Book', label: 'System' },
      { value: '<2s', label: 'Load' },
    ],
    tags: ['Next.js', 'Tailwind', 'Booking'],
  },
  {
    title: 'Fleet Management',
    category: 'SaaS · Logistics',
    blurb:
      'Enterprise fleet platform with real-time tracking, predictive maintenance, and intelligent route optimization.',
    image: '/images/clients/EwgHAuK.webp',
    caseStudyUrl: '/work/case-studies/fleet-management/',
    stats: [
      { value: '500+', label: 'Vehicles' },
      { value: '35%', label: 'Cost ↓' },
      { value: '95%', label: 'Satisfaction' },
    ],
    tags: ['React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'MyTube',
    category: 'AI · Metadata',
    blurb:
      'Video metadata management system for media and manufacturing. AI-powered insights and workflow automation.',
    image: '/images/clients/QNHXpzT.webp',
    caseStudyUrl: '/work/case-studies/mytube/',
    stats: [
      { value: 'AI', label: 'Powered' },
      { value: 'Fast', label: 'Metadata' },
      { value: 'Team', label: 'Tooling' },
    ],
    tags: ['React', 'Node.js', 'AI/ML'],
  },
  {
    title: 'Videoleap',
    category: 'Mobile · AI',
    blurb:
      'AI-powered video editing platform, redesigned onboarding, editor, and template marketplace flows.',
    image: '/images/clients/SubVB9A.jpeg',
    caseStudyUrl: '/work/case-studies/videoleap/',
    stats: [
      { value: '↑', label: 'Template Use' },
      { value: '↑', label: 'Retention' },
      { value: 'Mobile', label: 'First' },
    ],
    tags: ['React', 'AI/ML', 'AWS'],
  },
  {
    title: 'Sentinel DS',
    category: 'Open Source · Design System',
    blurb:
      'Cybersecurity design system for SOC analysts. Severity scale, dual themes, 15+ components, drop-in React, ~1,000 LOC.',
    image: 'https://ik.imagekit.io/qcvroy8xpd/image%201%20(10).png',
    liveUrl: 'https://github.com/Marc123345/Cyber-Security-Design-System',
    caseStudyUrl: '/work/case-studies/sentinel-ds/',
    stats: [
      { value: '15+', label: 'Components' },
      { value: 'AA', label: 'A11y' },
      { value: 'OSS', label: 'License' },
    ],
    tags: ['React', 'CSS Vars', 'Open Source'],
  },
  {
    title: 'Silicon Atlas',
    category: 'Product UX · Engineering',
    blurb:
      'Dark, data-dense dashboard kit for lab and telemetry tools. Five React workspaces, a Figma file and a design system on one token set.',
    image: '/images/case-studies/silicon-atlas/run-comparison.jpg',
    caseStudyUrl: '/work/case-studies/silicon-atlas/',
    stats: [
      { value: '5', label: 'Workspaces' },
      { value: 'React 19', label: 'Source' },
      { value: '1', label: 'Token Set' },
    ],
    tags: ['React 19', 'Figma', 'Design Tokens'],
  },
];
