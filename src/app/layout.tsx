import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppProviders } from "@/providers/AppProviders";
import Layout from "@/components/Layout";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://marcfriedmanportfolio.com"),
  title: {
    default: "Marc Friedman — Web Designer Tel Aviv",
    template: "%s | Marc Friedman",
  },
  description:
    "Professional web designer in Tel Aviv creating high-performance React/Next.js websites for agencies, ecommerce, and B2B companies.",
  openGraph: {
    title: "Marc Friedman — Web Designer Tel Aviv",
    description:
      "Professional web designer in Tel Aviv creating high-performance React/Next.js websites for agencies, ecommerce, and B2B companies.",
    url: "https://marcfriedmanportfolio.com",
    siteName: "Marc Friedman",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Marc Friedman — Web Designer Tel Aviv",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marc Friedman — Web Designer Tel Aviv",
    description:
      "Professional web designer in Tel Aviv creating high-performance React/Next.js websites for agencies, ecommerce, and B2B companies.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="min-h-screen bg-black text-white antialiased">
        <AppProviders>
          <Layout>{children}</Layout>
        </AppProviders>
      </body>
    </html>
  );
}
