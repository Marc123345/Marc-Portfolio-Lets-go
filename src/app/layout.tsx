import type { Metadata } from "next";
import { Oswald, Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { AppProviders } from "@/providers/AppProviders";
import Layout from "@/components/Layout";
import SiteLoader from "@/components/SiteLoader";

const GA_MEASUREMENT_ID = "G-CV8EEZJLCW";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.marcfriedmanportfolio.com"),
  title: {
    default: "Marc Friedman — Custom Web Design for B2B & Service Businesses",
    template: "%s | Marc Friedman",
  },
  description:
    "Custom React & Next.js websites for B2B and service businesses. 98/100 PageSpeed, sub-2-second loads, 50+ projects shipped. Book a free strategy call.",
  openGraph: {
    title: "Marc Friedman — Custom Web Design for B2B & Service Businesses",
    description:
      "Custom React & Next.js websites for B2B and service businesses. 98/100 PageSpeed, sub-2-second loads, 50+ projects shipped. Book a free strategy call.",
    url: "https://www.marcfriedmanportfolio.com",
    siteName: "Marc Friedman",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Marc Friedman — Custom Web Design for B2B & Service Businesses",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marc Friedman — Custom Web Design for B2B & Service Businesses",
    description:
      "Custom React & Next.js websites for B2B and service businesses. 98/100 PageSpeed, sub-2-second loads, 50+ projects shipped. Book a free strategy call.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: { url: '/apple-touch-icon.png', sizes: '180x180' },
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oswald.variable} ${poppins.variable}`}>
      <head>
        {/* Pre-warm Jotform connection so embedded forms start
           handshaking before the iframe is even rendered. Speeds
           up form first paint by 150–400ms on mobile. */}
        <link rel="preconnect" href="https://form.jotform.com" />
        <link rel="preconnect" href="https://cdn.jotfor.ms" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.jotform.com" />
        <link rel="dns-prefetch" href="https://form.jotform.com" />
        <link rel="dns-prefetch" href="https://cdn.jotfor.ms" />
        <link rel="dns-prefetch" href="https://www.jotform.com" />
      </head>
      <body className="min-h-screen bg-black text-white antialiased">
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}');`}
        </Script>
        <Script
          src="https://plausible.io/js/pa-cJaHKLdcf_juKwU38ajEk.js"
          strategy="afterInteractive"
        />
        <Script id="plausible-init" strategy="afterInteractive">
          {`window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};
plausible.init()`}
        </Script>
        <SiteLoader />
        <AppProviders>
          <Layout>{children}</Layout>
        </AppProviders>
      </body>
    </html>
  );
}
