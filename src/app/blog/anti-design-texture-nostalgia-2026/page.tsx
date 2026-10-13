import type { Metadata } from 'next';
import BlogAntiDesignTextureNostalgia from '@/pages-ported/blog/anti-design-texture-nostalgia-2026';

const title = 'Anti-Design, Texture and Nostalgia in 2026 Web Design';
const description =
  'Why expressive web design is pushing back against clean templates: anti-design, grain and paper textures, warm nostalgia and custom cursors, plus where they belong and where they don\'t.';
const url = 'https://www.marcfriedmanportfolio.com/blog/anti-design-texture-nostalgia-2026/';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'article' },
  twitter: { card: 'summary_large_image', title, description },
};

export default function Page() {
  return <BlogAntiDesignTextureNostalgia />;
}
