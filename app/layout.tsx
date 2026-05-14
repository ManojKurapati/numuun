import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Namo — Nurturing the Architecture of the Developing Mind",
  description:
    "Namo is a premium early childhood development practice combining evidence-based screening, gentle therapy, and parent partnership for the first 2,000 days.",
  metadataBase: new URL("https://namo.care")
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans bg-cream-50 text-ink-900 antialiased">{children}</body>
    </html>
  );
}
