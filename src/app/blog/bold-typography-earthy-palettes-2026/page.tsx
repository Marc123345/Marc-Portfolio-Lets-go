import type { Metadata } from 'next';
import BlogBoldTypographyEarthyPalettes from '@/pages-ported/blog/bold-typography-earthy-palettes-2026';

const title = 'Bold Typography and Earthy Palettes in 2026 Web Design';
const description =
  'Oversized type and earth-toned palettes are the common thread in 2026 web design. How to set display type that scales, build a clay, stone and sage palette that passes contrast, and pick a distinctive font.';
const url = 'https://www.marcfriedmanportfolio.com/blog/bold-typography-earthy-palettes-2026/';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'article' },
  twitter: { card: 'summary_large_image', title, description },
};

export default function Page() {
  return <BlogBoldTypographyEarthyPalettes />;
}
