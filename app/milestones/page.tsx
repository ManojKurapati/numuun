import type { Metadata } from "next";
import { MilestoneExplorer } from "@/components/MilestoneExplorer";

export const metadata: Metadata = {
  title: "Developmental milestones",
  description:
    "What most kids are doing from 2 months to 5 years — feelings, talking, thinking and moving — plus a play idea for every stage."
};

export default function MilestonesPage() {
  return (
    <section className="relative mx-auto max-w-6xl px-4 sm:px-6 pt-32 sm:pt-40 pb-8">
      <div className="mb-10 flex max-w-2xl flex-col gap-4">
        <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-terracotta-500">
          <span className="h-px w-8 bg-terracotta-300" /> Developmental milestones
        </span>
        <h1 className="font-serif text-balance text-5xl sm:text-6xl leading-[1.03] tracking-tight text-ink-900">
          Every stage is a <span className="italic text-terracotta-500">level-up.</span>
        </h1>
        <p className="text-[17px] leading-relaxed text-ink-600">
          Pick your kid’s age and tick off the wins you’ve spotted. These are
          things most children do by each age — not a race, not a report card.
        </p>
      </div>

      <MilestoneExplorer />

      <div className="mt-10 rounded-[24px] border border-ink-900/10 bg-white/60 p-6 text-[15px] leading-relaxed text-ink-600">
        <p className="font-medium text-ink-900">A friendly heads-up 💛</p>
        <p className="mt-1">
          Kids grow at their own pace, and missing one milestone is usually no
          big deal. But you know your child best — if something feels off, or
          they lose skills they once had, talk to your doctor. Acting early is
          always a power move. Milestones adapted from the CDC’s{" "}
          <a
            href="https://www.cdc.gov/ncbddd/actearly/milestones/index.html"
            target="_blank"
            rel="noreferrer"
            className="text-terracotta-500 underline underline-offset-4"
          >
            Learn the Signs. Act Early.
          </a>
        </p>
      </div>
    </section>
  );
}
