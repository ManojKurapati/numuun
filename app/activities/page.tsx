import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ActivityLibrary } from "@/components/activities/ActivityLibrary";
import { CtaBanner } from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Activity Library · Namo",
  description:
    "A curated library of expert-led interventions, available in Arabic and English."
};

export default function ActivitiesPage() {
  return (
    <>
      <PageHero sectionKey="activities" />
      <ActivityLibrary />
      <CtaBanner />
    </>
  );
}
