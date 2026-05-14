"use client";

import { motion } from "framer-motion";
import { Sparkles, CircleAlert, AlertOctagon } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { spring } from "@/lib/utils";

const tiers = [
  {
    label: "Normal",
    sub: "Green",
    icon: Sparkles,
    title: "Child is thriving.",
    body:
      "Continue standard monitoring. Namo schedules the next screen and surfaces enrichment activities that match the child’s current zone of proximal development.",
    tone: "bg-sage-400 text-cream-50",
    accent: "bg-cream-50/15 text-cream-50",
    threshold: "≥ cutoff + 1 SD"
  },
  {
    label: "Grey zone",
    sub: "Yellow",
    icon: CircleAlert,
    title: "Potential delay detected.",
    body:
      "The platform immediately deploys targeted intervention activities — short, clinician-authored sessions designed to close the gap before the next screen.",
    tone: "bg-terracotta-400 text-cream-50",
    accent: "bg-cream-50/15 text-cream-50",
    threshold: "Within 1 SD of cutoff"
  },
  {
    label: "Below cutoff",
    sub: "Red",
    icon: AlertOctagon,
    title: "Significant delay identified.",
    body:
      "The system prompts immediate medical referral and surfaces a clinician-ready summary, while keeping the family supported through at-home care routines.",
    tone: "bg-ink-900 text-cream-50",
    accent: "bg-cream-50/12 text-cream-50",
    threshold: "≥ 2 SD below norm"
  }
];

export function ScoringLogic() {
  return (
    <section className="relative py-20 sm:py-28 bg-cream-100/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="The scoring logic · transparent AI"
          title={
            <>
              Every response,{" "}
              <span className="italic text-sage-500">quantified honestly</span>.
            </>
          }
          subhead="A transparent threshold system — no opaque models. Parents and clinicians see exactly which zone a child is in, and exactly what triggers each action."
        />

        <div className="grid gap-4 lg:grid-cols-3">
          {tiers.map((t, i) => {
            const Icon = t.icon;
            return (
              <motion.article
                key={t.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ ...spring, delay: i * 0.07 }}
                whileHover={{ y: -6 }}
                className={
                  "relative rounded-[28px] overflow-hidden border border-ink-900/10 shadow-soft p-7 sm:p-8 flex flex-col gap-5 " +
                  t.tone
                }
              >
                <div className="flex items-center justify-between">
                  <span
                    className={"grid h-12 w-12 place-items-center rounded-2xl " + t.accent}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.18em] text-cream-50/80">
                    {t.threshold}
                  </span>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-cream-50/80">
                    {t.label} · {t.sub}
                  </p>
                  <h3 className="font-serif text-2xl sm:text-[28px] leading-tight">
                    {t.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-cream-50/85">
                    {t.body}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={spring}
          className="mt-10 rounded-[28px] border border-ink-900/8 bg-cream-50 p-7 sm:p-8 shadow-glass"
        >
          <p className="text-[11px] uppercase tracking-[0.22em] text-terracotta-500 mb-2">
            Behind every score
          </p>
          <h3 className="font-serif text-2xl sm:text-3xl text-ink-900 max-w-3xl">
            ASQ-3 norms · age-banded cutoffs · multi-rater reliability.
          </h3>
          <p className="mt-3 text-[15px] leading-relaxed text-ink-600 max-w-2xl">
            Namo’s scoring engine is reviewable. Every flag is paired with the
            specific items, the age band, and the standard deviation it sits
            against — open to your clinical lead’s audit at any time.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
