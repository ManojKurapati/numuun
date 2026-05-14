import type { Metadata } from "next";
import { Playfair_Display, Inter, Amiri, IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { DictionaryProvider } from "@/lib/i18n/provider";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"]
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const amiri = Amiri({
  subsets: ["arabic"],
  variable: "--font-amiri",
  display: "swap",
  weight: ["400", "700"]
});

const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-plex-arabic",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "Namo — Nurturing the Architecture of the Developing Mind",
  description:
    "Namo is a clinical-grade early childhood development platform for the Gulf — ASQ-3 screening, voice-first assessments, and closed-loop interventions for children aged 0–6.",
  metadataBase: new URL("https://namo.ae")
};

const earlyLocaleScript = `
(function(){try{var l=localStorage.getItem("namo-locale");if(l==="ar"){var d=document.documentElement;d.lang="ar-AE";d.dir="rtl";}}catch(e){}})();
`.trim();

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${playfair.variable} ${inter.variable} ${amiri.variable} ${plexArabic.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: earlyLocaleScript }} />
      </head>
      <body className="font-sans bg-cream-50 text-ink-900 antialiased">
        <DictionaryProvider>
          <Navigation />
          <main className="relative min-h-screen overflow-x-hidden bg-cream-50">
            {children}
          </main>
          <Footer />
        </DictionaryProvider>
      </body>
    </html>
  );
}
