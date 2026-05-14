"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { ShieldCheck, Stars, Mic } from "lucide-react";
import { ShinyButton } from "./ShinyButton";
import { VoiceWave } from "./VoiceWave";
import { spring, softSpring } from "@/lib/utils";
import { useDictionary } from "@/lib/i18n/provider";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: spring
  }
};

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const dict = useDictionary();
  const t = dict.home.hero;
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-24"
    >
      <div aria-hidden className="absolute inset-0 grid-lines opacity-70" />
      <div
        aria-hidden
        className="absolute -top-40 -left-32 h-[520px] w-[520px] rounded-full bg-terracotta-200/40 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-40 right-0 h-[520px] w-[520px] rounded-full bg-sage-200/40 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:gap-14 lg:grid-cols-12">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            style={{ y: textY }}
            className="lg:col-span-6 flex flex-col gap-7"
          >
            <motion.div variants={item} className="flex items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-terracotta-200 bg-terracotta-50/70 px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-terracotta-600">
                <Stars className="h-3.5 w-3.5" /> {t.eyebrow}
              </span>
            </motion.div>

            <motion.h1
              variants={container}
              className="font-serif text-balance text-5xl leading-[1.02] tracking-tight text-ink-900 sm:text-6xl lg:text-[78px]"
            >
              {t.headlineWords.map((w, i) => (
                <motion.span
                  key={`${w}-${i}`}
                  variants={item}
                  className="inline-block mr-[0.22em]"
                >
                  {w === t.italicWord ? (
                    <span className="italic text-terracotta-500">{w}</span>
                  ) : (
                    w
                  )}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              variants={item}
              className="max-w-xl text-[17px] leading-relaxed text-ink-600"
            >
              {t.subhead}
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap items-center gap-3">
              <ShinyButton href="#assessment">{t.primaryCta}</ShinyButton>
              <ShinyButton href="/institutions" variant="ghost">
                {t.secondaryCta}
              </ShinyButton>
            </motion.div>

            <motion.dl
              variants={item}
              className="mt-2 grid grid-cols-3 gap-6 border-t border-ink-900/10 pt-6 max-w-lg"
            >
              {t.stats.map((s) => (
                <div key={s.v}>
                  <dt className="font-serif text-2xl text-ink-900">{s.k}</dt>
                  <dd className="text-[12px] uppercase tracking-[0.14em] text-ink-500">
                    {s.v}
                  </dd>
                </div>
              ))}
            </motion.dl>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ ...softSpring, delay: 0.25 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[28px] shadow-soft">
              <motion.div style={{ y: imgY, scale: imgScale }} className="absolute inset-0">
                <Image
                  src="https://images.unsplash.com/photo-1581952976147-5a2d15560349?auto=format&fit=crop&w=1400&q=80"
                  alt={t.imageAlt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className="object-cover"
                />
              </motion.div>
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-ink-900/35 via-transparent to-transparent"
              />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...spring, delay: 0.55 }}
                className="absolute left-4 right-4 bottom-4 sm:left-5 sm:right-5 sm:bottom-5 flex items-center justify-between gap-3 rounded-2xl glass-strong px-4 py-3 shadow-glass"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-sage-100 text-sage-600">
                    <ShieldCheck className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-[12px] uppercase tracking-[0.14em] text-ink-500">
                      {t.floatingCard.eyebrow}
                    </p>
                    <p className="font-serif text-base text-ink-900">
                      {t.floatingCard.title}
                    </p>
                  </div>
                </div>
                <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-terracotta-400 px-3 py-1 text-[11px] font-medium text-cream-50">
                  {t.floatingCard.badge}
                </span>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: -20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ ...spring, delay: 0.45 }}
              className="absolute -left-4 sm:-left-10 top-10 sm:top-14 flex items-center gap-3 rounded-2xl glass-strong px-4 py-3 shadow-glass"
            >
              <span className="grid h-9 w-9 place-items-center rounded-full bg-terracotta-100 text-terracotta-500">
                <Mic className="h-4 w-4" />
              </span>
              <div className="flex flex-col gap-1.5">
                <p className="text-[11px] uppercase tracking-[0.14em] text-ink-500">
                  {t.voiceChip.eyebrow}
                </p>
                <VoiceWave bars={14} height={20} />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
