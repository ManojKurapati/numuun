import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Method } from "@/components/Method";
import { Bento } from "@/components/Bento";
import { Process } from "@/components/Process";
import { ProductPreview } from "@/components/ProductPreview";
import { Trust } from "@/components/Trust";
import { CtaBanner } from "@/components/CtaBanner";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-cream-50">
      <Navigation />
      <Hero />
      <Method />
      <Bento />
      <Process />
      <ProductPreview />
      <Trust />
      <CtaBanner />
      <Footer />
    </main>
  );
}
