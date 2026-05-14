"use client";

import { motion } from "framer-motion";
import { Hourglass, Brain, Activity } from "lucide-react";
import { spring } from "@/lib/utils";
import { useDictionary } from "@/lib/i18n/provider";

const icons = [Brain, Activity, Hourglass];

export function Problem() {
  const dict = useDictionary();
  const t = dict.home.problem;

  return (
    <section className="relative py-24 sm:py-32 bg-cream-100/50">
      <div aria-hidden className="absolute inset-0 grid-lines opacity-40" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={spring}
            className="lg:col-span-6 flex flex-col gap-5"
          >
            <span className="inline-flex w-fit items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-terracotta-500">
              <span className="h-px w-8 bg-terracotta-300" /> {t.eyebrow}
            </span>
            <h2 className="font-serif text-balance text-4xl sm:text-5xl lg:text-[60px] leading-[1.04] tracking-tight text-ink-900">
              {t.titlePrefix}{" "}
              <span className="italic text-sage-500">{t.italic}</span>{" "}
              {t.titleSuffix}
            </h2>
            <p className="text-[17px] leading-relaxed text-ink-600 max-w-xl">
              {t.body}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ ...spring, delay: 0.1 }}
            className="lg:col-span-6 flex flex-col gap-3"
          >
            {t.stats.map((s, i) => {
              const Icon = icons[i] ?? Brain;
              return (
                <motion.div
                  key={s.k}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ ...spring, delay: 0.12 + i * 0.07 }}
                  className="group relative flex items-center gap-5 rounded-[24px] border border-ink-900/8 bg-cream-50 p-5 sm:p-6 shadow-glass overflow-hidden"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-terracotta-50 text-terracotta-500">
                    <Icon className="h-5 w-5" strokeWidth={1.7} />
                  </span>
                  <div className="flex-1">
                    <p className="font-serif text-3xl sm:text-4xl text-ink-900 leading-none">
                      {s.k}
                    </p>
                    <p className="mt-1.5 text-[14px] leading-relaxed text-ink-600">
                      {s.v}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
