"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { Mic, BarChart3, PlayCircle } from "lucide-react";
import { spring } from "@/lib/utils";
import { useDictionary } from "@/lib/i18n/provider";

const stepIcons = [Mic, BarChart3, PlayCircle];

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const dict = useDictionary();
  const t = dict.home.process;
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 30%"]
  });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 22 });
  const fill = useTransform(progress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="relative py-24 sm:py-32">
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
            <span className="italic text-sage-500">{t.italic1}</span>{" "}
            {t.titleMiddle}{" "}
            <span className="italic text-terracotta-500">{t.italic2}</span>
            {t.titleSuffix}
          </h2>
          <p className="text-[17px] leading-relaxed text-ink-600">{t.subhead}</p>
        </motion.div>

        <div ref={ref} className="relative">
          <div
            aria-hidden
            className="absolute start-[22px] sm:start-[27px] top-2 bottom-2 w-px bg-ink-900/10"
          />
          <motion.div
            aria-hidden
            style={{ height: fill }}
            className="absolute start-[22px] sm:start-[27px] top-2 w-px bg-gradient-to-b from-terracotta-400 via-sage-400 to-ink-900 origin-top"
          />

          <ol className="flex flex-col gap-8 sm:gap-12">
            {t.steps.map((s, i) => {
              const Icon = stepIcons[i] ?? Mic;
              return (
                <motion.li
                  key={s.n}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ ...spring, delay: i * 0.05 }}
                  className="relative ps-16 sm:ps-24"
                >
                  <motion.span
                    initial={{ scale: 0.7, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-20%" }}
                    transition={{ ...spring, delay: i * 0.05 + 0.08 }}
                    className="absolute start-0 top-1 grid h-11 w-11 sm:h-[54px] sm:w-[54px] place-items-center rounded-full bg-cream-50 border border-ink-900/10 shadow-glass text-ink-900"
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.7} />
                  </motion.span>

                  <div className="flex flex-col gap-3 rounded-[26px] border border-ink-900/8 bg-cream-50/70 p-6 sm:p-8 shadow-glass">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-[11px] uppercase tracking-[0.22em] text-terracotta-500">
                        {t.stepLabel} {s.n} · {s.label}
                      </span>
                      <span className="hidden sm:flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-ink-500">
                        {s.chips.map((c, idx) => (
                          <span key={c} className="flex items-center gap-2">
                            {c}
                            {idx < s.chips.length - 1 && (
                              <span className="h-px w-3 bg-ink-900/15" />
                            )}
                          </span>
                        ))}
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl leading-tight text-ink-900 text-balance">
                      {s.title}
                    </h3>
                    <p className="text-[15px] leading-relaxed text-ink-600 max-w-2xl">
                      {s.body}
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
