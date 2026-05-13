import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppProviders } from "@/providers/AppProviders";
import Layout from "@/components/Layout";
import SiteLoader from "@/components/SiteLoader";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

const GA_MEASUREMENT_ID = "G-X9V20XWRG8";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.marcfriedmanportfolio.com"),
  title: {
    default: "Marc Friedman — Freelance Website Designer",
    template: "%s | Marc Friedman",
  },
  description:
    "Freelance website designer and Google website designer building high-performance React/Next.js websites for agencies, ecommerce, and B2B companies.",
  openGraph: {
    title: "Marc Friedman — Freelance Website Designer",
    description:
      "Freelance website designer and Google website designer building high-performance React/Next.js websites for agencies, ecommerce, and B2B companies.",
    url: "https://www.marcfriedmanportfolio.com",
    siteName: "Marc Friedman",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Marc Friedman — Freelance Website Designer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marc Friedman — Freelance Website Designer",
    description:
      "Freelance website designer and Google website designer building high-performance React/Next.js websites for agencies, ecommerce, and B2B companies.",
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
      <head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}');`,
          }}
        />
        <script async src="https://plausible.io/js/pa-cJaHKLdcf_juKwU38ajEk.js" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};
plausible.init()`,
          }}
        />
      </head>
      <body className="min-h-screen bg-black text-white antialiased">
        <SmoothScrollProvider />
        <SiteLoader />
        <AppProviders>
          <Layout>{children}</Layout>
        </AppProviders>
      </body>
    </html>
  );
}
