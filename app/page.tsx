import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Process } from "@/components/Process";
import { Method } from "@/components/Method";
import { Bento } from "@/components/Bento";
import { ProductPreview } from "@/components/ProductPreview";
import { Trust } from "@/components/Trust";
import { CtaBanner } from "@/components/CtaBanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <Process />
      <Method />
      <Bento />
      <ProductPreview />
      <Trust />
      <CtaBanner />
    </>
  );
}
