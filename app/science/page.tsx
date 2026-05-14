import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { DomainsDetail } from "@/components/science/DomainsDetail";
import { ScoringLogic } from "@/components/science/ScoringLogic";
import { Trust } from "@/components/Trust";
import { CtaBanner } from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "The Science · Namo",
  description:
    "Namo is built on the globally recognized ASQ-3 framework, digitized for continuous monitoring across the Gulf — in Arabic and English."
};

export default function SciencePage() {
  return (
    <>
      <PageHero sectionKey="science" />
      <DomainsDetail />
      <ScoringLogic />
      <Trust />
      <CtaBanner />
    </>
  );
}
