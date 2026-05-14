import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { PopulationAnalytics } from "@/components/institutions/PopulationAnalytics";
import { RiskTriage } from "@/components/institutions/RiskTriage";
import { Compliance } from "@/components/institutions/Compliance";
import { Trust } from "@/components/Trust";

export const metadata: Metadata = {
  title: "For Institutions · Namo",
  description:
    "Scalable early childhood monitoring for the Gulf. Deploy clinical-grade developmental screening with DHA/MOHAP-compliant infrastructure."
};

export default function InstitutionsPage() {
  return (
    <>
      <PageHero sectionKey="institutions" />
      <PopulationAnalytics />
      <RiskTriage />
      <Compliance />
      <Trust />
    </>
  );
}
