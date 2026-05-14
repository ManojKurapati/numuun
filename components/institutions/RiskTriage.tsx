"use client";

import { motion } from "framer-motion";
import { AlertTriangle, UserRound, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { spring } from "@/lib/utils";

const cases = [
  {
    id: "NM-04891",
    name: "Child · 22 mo",
    region: "Sharjah",
    flags: ["Fine motor", "Problem solving"],
    severity: "high"
  },
  {
    id: "NM-04902",
    name: "Child · 36 mo",
    region: "Dubai",
    flags: ["Communication"],
    severity: "medium"
  },
  {
    id: "NM-04915",
    name: "Child · 14 mo",
    region: "Ras Al Khaimah",
    flags: ["Gross motor", "Fine motor", "Personal-social"],
    severity: "high"
  },
  {
    id: "NM-04928",
    name: "Child · 41 mo",
    region: "Abu Dhabi",
    flags: ["Personal-social"],
    severity: "low"
  }
];

const severityTone: Record<string, string> = {
  high: "bg-ink-900 text-cream-50",
  medium: "bg-terracotta-400 text-cream-50",
  low: "bg-sage-400 text-cream-50"
};

export function RiskTriage() {
  return (
    <section className="relative py-20 sm:py-28 bg-cream-100/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Automated risk triage"
          title={
            <>
              The system flags{" "}
              <span className="italic text-terracotta-500">who needs you first</span>.
            </>
          }
          subhead="Multi-domain delays and stalled progress are surfaced automatically — so pediatricians and social workers prioritize the children who need immediate intervention."
        />

        <div className="grid gap-6 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={spring}
            className="lg:col-span-7 rounded-[32px] border border-ink-900/8 bg-cream-50 shadow-soft p-6 sm:p-8"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-2xl bg-terracotta-50 text-terracotta-500">
                  <AlertTriangle className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-serif text-lg text-ink-900">
                    Today’s triage queue
                  </p>
                  <p className="text-[12px] uppercase tracking-[0.16em] text-ink-500">
                    4 of 27 require review
                  </p>
                </div>
              </div>
              <span className="hidden sm:inline-flex rounded-full bg-cream-200 px-3 py-1 text-[11px] font-medium text-ink-700">
                Sorted by severity
              </span>
            </div>

            <ul className="flex flex-col divide-y divide-ink-900/8">
              {cases.map((c, i) => (
                <motion.li
                  key={c.id}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ ...spring, delay: i * 0.05 }}
                  className="grid items-center gap-3 py-4 grid-cols-[auto_1fr_auto] sm:grid-cols-[auto_1fr_2fr_auto]"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-cream-100 text-ink-700">
                    <UserRound className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-[14px] font-medium text-ink-900">
                      {c.name}
                    </p>
                    <p className="text-[11px] uppercase tracking-[0.14em] text-ink-500">
                      {c.id} · {c.region}
                    </p>
                  </div>
                  <div className="hidden sm:flex flex-wrap items-center gap-1.5">
                    {c.flags.map((f) => (
                      <span
                        key={f}
                        className="rounded-full bg-cream-100 px-2.5 py-1 text-[11px] uppercase tracking-[0.12em] text-ink-700"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                  <span
                    className={
                      "rounded-full px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] font-medium " +
                      severityTone[c.severity]
                    }
                  >
                    {c.severity}
                  </span>
                </motion.li>
              ))}
            </ul>

            <div className="mt-6 flex items-center justify-between rounded-2xl bg-cream-100 px-5 py-3 text-[13px] text-ink-700">
              <span>View 23 more in the triage queue</span>
              <ArrowRight className="h-4 w-4" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ ...spring, delay: 0.08 }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            {[
              {
                k: "<48h",
                v: "median referral turnaround once Namo flags a high-severity case"
              },
              {
                k: "12,800",
                v: "automated nudges delivered to caregivers this quarter"
              },
              {
                k: "ICD-aligned",
                v: "every flag carries a clinician-reviewable rationale"
              }
            ].map((s, i) => (
              <motion.div
                key={s.k}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ ...spring, delay: 0.1 + i * 0.06 }}
                className="rounded-[24px] border border-ink-900/8 bg-cream-50 p-6 shadow-glass"
              >
                <p className="font-serif text-3xl sm:text-4xl text-ink-900">
                  {s.k}
                </p>
                <p className="mt-1 text-[14px] leading-relaxed text-ink-600">
                  {s.v}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
