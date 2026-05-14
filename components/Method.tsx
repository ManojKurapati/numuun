"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Mic, Repeat } from "lucide-react";
import { VoiceWave } from "./VoiceWave";
import { spring } from "@/lib/utils";
import { useDictionary } from "@/lib/i18n/provider";

const icons = [BadgeCheck, Mic, Repeat];
const tones = ["terracotta", "sage", "ink"] as const;

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { ...spring, delay: i * 0.08 }
  })
};

export function Method() {
  const dict = useDictionary();
  const t = dict.home.method;

  return (
    <section id="method" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={spring}
          className="flex flex-col items-start gap-4 max-w-2xl mb-14 sm:mb-20"
        >
          <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-terracotta-500">
            <span className="h-px w-8 bg-terracotta-300" /> {t.eyebrow}
          </span>
          <h2 className="font-serif text-balance text-4xl sm:text-5xl lg:text-[56px] leading-[1.05] tracking-tight text-ink-900">
            {t.titlePrefix}{" "}
            <span className="italic text-sage-500">{t.italic}</span>
            {t.titleSuffix}
          </h2>
          <p className="text-[17px] leading-relaxed text-ink-600">{t.subhead}</p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3">
          {t.pillars.map((p, i) => {
            const Icon = icons[i] ?? BadgeCheck;
            const tone = tones[i] ?? "terracotta";
            const palette =
              tone === "terracotta"
                ? "bg-terracotta-50 text-terracotta-500"
                : tone === "sage"
                ? "bg-sage-50 text-sage-500"
                : "bg-cream-200 text-ink-800";
            return (
              <motion.article
                key={p.title}
                custom={i}
                variants={fade}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-10%" }}
                whileHover={{ y: -6 }}
                transition={spring}
                className="group relative flex flex-col gap-6 rounded-[28px] border border-ink-900/8 bg-cream-50/70 p-7 shadow-glass overflow-hidden"
              >
                <div
                  aria-hidden
                  className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-terracotta-100/0 group-hover:bg-terracotta-100/40 transition-colors duration-700 blur-3xl"
                />
                <div className="flex items-center justify-between">
                  <span className={`grid h-12 w-12 place-items-center rounded-2xl ${palette}`}>
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.18em] text-ink-500">
                    {p.eyebrow}
                  </span>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="font-serif text-[26px] leading-tight text-ink-900">
                    {p.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-ink-600">{p.body}</p>
                </div>

                {tone === "sage" && "quote" in p && p.quote && (
                  <div className="mt-1 flex items-center gap-3 rounded-2xl bg-sage-50 px-4 py-3">
                    <VoiceWave bars={12} height={22} barClassName="bg-sage-500" />
                    <span className="text-[12px] font-medium text-sage-700">
                      {p.quote}
                    </span>
                  </div>
                )}

                <div className="mt-auto flex items-center justify-between pt-2 text-[12px] uppercase tracking-[0.16em] text-ink-500">
                  <span>0{i + 1}</span>
                  <span className="text-right">{p.detail}</span>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
