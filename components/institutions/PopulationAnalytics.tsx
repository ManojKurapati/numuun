"use client";

import { motion } from "framer-motion";
import { Globe2, TrendingUp, Layers } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { spring } from "@/lib/utils";

const regions = [
  { name: "Abu Dhabi", value: 86, flagged: 3 },
  { name: "Dubai", value: 82, flagged: 4 },
  { name: "Sharjah", value: 74, flagged: 6 },
  { name: "Ajman", value: 69, flagged: 7 },
  { name: "Ras Al Khaimah", value: 64, flagged: 9 },
  { name: "Fujairah", value: 58, flagged: 11 }
];

const trendBars = [38, 52, 61, 58, 72, 80, 76, 84, 91];

export function PopulationAnalytics() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Population-level analytics"
          title={
            <>
              Macro signals,{" "}
              <span className="italic text-sage-500">measured monthly</span>.
            </>
          }
          subhead="An intelligent admin dashboard surfacing emirate-wise analytics, domain-specific delay trends, and clinical impact conversions at scale."
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
                <span className="grid h-10 w-10 place-items-center rounded-2xl bg-sage-50 text-sage-600">
                  <Globe2 className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-serif text-lg text-ink-900">
                    Emirate-wise screening coverage
                  </p>
                  <p className="text-[12px] uppercase tracking-[0.16em] text-ink-500">
                    Q2 · 42,890 children
                  </p>
                </div>
              </div>
              <span className="hidden sm:inline-flex rounded-full bg-sage-50 px-3 py-1 text-[11px] font-medium text-sage-700">
                +12% MoM
              </span>
            </div>

            <ul className="flex flex-col gap-3.5">
              {regions.map((r, i) => (
                <motion.li
                  key={r.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ ...spring, delay: i * 0.05 }}
                  className="grid items-center gap-3 sm:gap-4 grid-cols-[1fr_auto] sm:grid-cols-[180px_1fr_auto]"
                >
                  <p className="text-[13px] text-ink-700">{r.name}</p>
                  <div className="hidden sm:block relative h-2.5 rounded-full bg-ink-900/8 overflow-hidden">
                    <motion.span
                      initial={{ width: 0 }}
                      whileInView={{ width: `${r.value}%` }}
                      viewport={{ once: true, margin: "-10%" }}
                      transition={{ ...spring, delay: 0.1 + i * 0.05 }}
                      className="block h-full bg-gradient-to-r from-sage-400 to-terracotta-300"
                    />
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="font-serif text-base text-ink-900 w-8 text-right">
                      {r.value}%
                    </span>
                    <span className="rounded-full bg-terracotta-50 px-2 py-0.5 text-[10px] uppercase tracking-[0.12em] text-terracotta-600">
                      {r.flagged}% flagged
                    </span>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ ...spring, delay: 0.08 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div className="rounded-[28px] border border-ink-900/8 bg-cream-50 shadow-glass p-6">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-2xl bg-terracotta-50 text-terracotta-500">
                    <TrendingUp className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-serif text-base text-ink-900">
                      Fine-motor flags · 90-day trend
                    </p>
                    <p className="text-[11px] uppercase tracking-[0.16em] text-ink-500">
                      Across 7 emirates
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-end gap-1.5 h-28">
                {trendBars.map((b, i) => (
                  <motion.span
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${b}%` }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ ...spring, delay: 0.08 + i * 0.04 }}
                    className="flex-1 rounded-t bg-gradient-to-t from-terracotta-200 to-terracotta-400"
                  />
                ))}
              </div>
              <p className="mt-3 text-[12px] uppercase tracking-[0.16em] text-ink-500">
                Wk 1 — Wk 13
              </p>
            </div>

            <div className="rounded-[28px] border border-ink-900/8 bg-ink-900 text-cream-50 shadow-soft p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="grid h-10 w-10 place-items-center rounded-2xl bg-cream-50/10 text-cream-50">
                  <Layers className="h-4 w-4" />
                </span>
                <p className="font-serif text-base">Clinical impact</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-serif text-3xl">3,412</p>
                  <p className="text-[11px] uppercase tracking-[0.16em] text-cream-50/70 mt-1">
                    Closed-loop activities this month
                  </p>
                </div>
                <div>
                  <p className="font-serif text-3xl">82%</p>
                  <p className="text-[11px] uppercase tracking-[0.16em] text-cream-50/70 mt-1">
                    Grey-zone resolved within 8 weeks
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
