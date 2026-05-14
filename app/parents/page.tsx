import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ParentsFeatures } from "@/components/parents/ParentsFeatures";
import { ProductPreview } from "@/components/ProductPreview";
import { Trust } from "@/components/Trust";
import { CtaBanner } from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "For Parents · Namo",
  description:
    "Expert pediatric guidance, right in your living room. Track milestones, catch delays early, and support your child’s growth through guided play — in Arabic or English."
};

export default function ParentsPage() {
  return (
    <>
      <PageHero sectionKey="parents" />
      <ParentsFeatures />
      <ProductPreview />
      <Trust />
      <CtaBanner />
    </>
  );
}
