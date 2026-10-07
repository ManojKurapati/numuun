import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SubscribeBand } from "@/components/SubscribeBand";
import { site } from "@/lib/site";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"]
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s · ${site.name}`
  },
  description: site.description,
  metadataBase: new URL(site.url)
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans bg-cream-50 text-ink-900 antialiased">
        <Navigation />
        <main className="relative min-h-screen overflow-x-hidden bg-cream-50">
          {children}
          <SubscribeBand />
        </main>
        <Footer />
      </body>
    </html>
  );
}
