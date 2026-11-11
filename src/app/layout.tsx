import type { Metadata, Viewport } from "next";
import { Baloo_2, Nunito } from "next/font/google";
import { ContactBar } from "@/components/ContactBar";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MetaPixel } from "@/components/MetaPixel";
import { instagramLink, site, whatsappLink } from "@/lib/site";
import "./globals.css";

const baloo = Baloo_2({ subsets: ["latin", "latin-ext"], weight: ["600", "700", "800"], variable: "--font-baloo" });
const nunito = Nunito({ subsets: ["latin", "latin-ext"], weight: ["400", "600", "700"], variable: "--font-nunito" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Mini Bee · Uşaqla birlikdə böyüyən masalar", template: "%s · Mini Bee" },
  description: site.description,
  openGraph: {
    type: "website",
    locale: "az_AZ",
    siteName: site.name,
    images: [{ url: "/images/bulud-set.jpg", width: 1800, height: 1344, alt: "Mini Bee Bulud dəsti" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#fff4dc",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const wa = whatsappLink("Salam! Mini Bee masaları ilə maraqlanıram.");
  const ig = instagramLink();
  return (
    <html lang="az" className={`${baloo.variable} ${nunito.variable}`}>
      <body className="antialiased">
        <Header whatsappHref={wa} />
        <main>{children}</main>
        <Footer instagramHref={ig} birmarketUrl={site.birmarketUrl} />
        <div className="h-20 bg-ink md:hidden" aria-hidden="true" />
        <ContactBar whatsappHref={wa} instagramHref={ig} />
        <MetaPixel pixelId={site.metaPixelId} />
      </body>
    </html>
  );
}
