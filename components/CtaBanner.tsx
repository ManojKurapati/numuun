"use client";

import { motion } from "framer-motion";
import { ShinyButton } from "./ShinyButton";
import { VoiceWave } from "./VoiceWave";
import { spring } from "@/lib/utils";

export function CtaBanner() {
  return (
    <section id="assessment" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={spring}
          className="relative overflow-hidden rounded-[36px] bg-ink-900 px-6 py-14 sm:px-14 sm:py-20 shadow-soft"
        >
          <div
            aria-hidden
            className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-terracotta-400/40 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-sage-400/30 blur-3xl"
          />
          <div className="relative grid gap-8 md:grid-cols-5 items-center">
            <div className="md:col-span-3 flex flex-col gap-5">
              <span className="inline-flex w-fit items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-terracotta-200">
                <span className="h-px w-8 bg-terracotta-300" /> Begin gently
              </span>
              <h2 className="font-serif text-balance text-4xl sm:text-5xl lg:text-[56px] leading-[1.05] tracking-tight text-cream-50">
                Your first assessment takes{" "}
                <span className="italic text-terracotta-200">twelve unhurried minutes</span>.
              </h2>
              <p className="max-w-xl text-[16px] leading-relaxed text-cream-100/80">
                Narrate play as it happens. Namo&rsquo;s voice mode quietly maps
                what it hears against the ASQ-3 framework and hands you a plan —
                with activities you can start the same day.
              </p>
              <div className="flex items-center gap-3 rounded-2xl bg-cream-50/8 border border-cream-50/10 px-4 py-3 w-fit">
                <VoiceWave bars={14} height={22} barClassName="bg-terracotta-200" />
                <span className="text-[12px] uppercase tracking-[0.16em] text-cream-100/75">
                  Voice mode · ambient
                </span>
              </div>
            </div>
            <div className="md:col-span-2 flex flex-col items-start md:items-end gap-4">
              <ShinyButton href="#assessment">Start Your First Assessment</ShinyButton>
              <p className="text-[12px] uppercase tracking-[0.18em] text-cream-100/60">
                or write to hello@namo.care
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
