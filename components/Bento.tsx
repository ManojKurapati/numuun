"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  CommunicationIcon,
  GrossMotorIcon,
  FineMotorIcon,
  ProblemSolvingIcon,
  PersonalSocialIcon
} from "./icons/DomainIcons";
import { cn, spring } from "@/lib/utils";
import { useDictionary } from "@/lib/i18n/provider";

const visuals = {
  communication: {
    Icon: CommunicationIcon,
    span: "md:col-span-3 md:row-span-2",
    tone: "bg-terracotta-400 text-cream-50",
    iconBg: "bg-cream-50/15 text-cream-50",
    captionTone: "text-cream-50/85",
    metaTone: "text-cream-50/80",
    feature: true
  },
  "gross-motor": {
    Icon: GrossMotorIcon,
    span: "md:col-span-2",
    tone: "bg-sage-400 text-cream-50",
    iconBg: "bg-cream-50/15 text-cream-50",
    captionTone: "text-cream-50/85",
    metaTone: "text-cream-50/80",
    feature: false
  },
  "fine-motor": {
    Icon: FineMotorIcon,
    span: "md:col-span-2",
    tone: "bg-cream-100 text-ink-900",
    iconBg: "bg-ink-900/5 text-ink-900",
    captionTone: "text-ink-600",
    metaTone: "text-ink-500",
    feature: false
  },
  "problem-solving": {
    Icon: ProblemSolvingIcon,
    span: "md:col-span-2",
    tone: "bg-ink-900 text-cream-50",
    iconBg: "bg-cream-50/12 text-cream-50",
    captionTone: "text-cream-50/85",
    metaTone: "text-cream-50/70",
    feature: false
  },
  "personal-social": {
    Icon: PersonalSocialIcon,
    span: "md:col-span-3",
    tone: "bg-terracotta-50 text-ink-900",
    iconBg: "bg-terracotta-100 text-terracotta-500",
    captionTone: "text-ink-600",
    metaTone: "text-ink-500",
    feature: false
  }
} as const;

const variants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { ...spring, delay: i * 0.06 }
  })
};

export function Bento() {
  const dict = useDictionary();
  const t = dict.home.bento;

  return (
    <section id="milestones" className="relative py-24 sm:py-32 bg-cream-100/60">
      <div aria-hidden className="absolute inset-0 grid-lines opacity-50" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={spring}
            className="max-w-2xl flex flex-col gap-3"
          >
            <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-terracotta-500">
              <span className="h-px w-8 bg-terracotta-300" /> {t.eyebrow}
            </span>
            <h2 className="font-serif text-balance text-4xl sm:text-5xl lg:text-[56px] leading-[1.05] tracking-tight text-ink-900">
              {t.titlePrefix}{" "}
              <span className="italic text-terracotta-500">{t.italic}</span>
              {t.titleSuffix}
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ ...spring, delay: 0.12 }}
            className="max-w-md text-[15px] leading-relaxed text-ink-600"
          >
            {t.subhead}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 auto-rows-[minmax(180px,auto)] gap-4">
          {t.domains.map((d, i) => {
            const v = visuals[d.key as keyof typeof visuals];
            const Icon = v.Icon;
            return (
              <motion.article
                key={d.key}
                custom={i}
                variants={variants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-10%" }}
                whileHover={{ y: -4, scale: 1.005 }}
                transition={spring}
                className={cn(
                  "relative overflow-hidden rounded-[26px] p-6 sm:p-7 shadow-glass border border-ink-900/8 flex flex-col justify-between",
                  v.tone,
                  v.span
                )}
              >
                {v.feature && (
                  <Image
                    src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1400&q=80"
                    alt=""
                    fill
                    sizes="(min-width: 768px) 720px, 100vw"
                    className="object-cover opacity-20 mix-blend-multiply"
                  />
                )}
                <div className="relative flex items-center justify-between">
                  <span className={cn("grid h-12 w-12 place-items-center rounded-2xl", v.iconBg)}>
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className={cn("text-[11px] uppercase tracking-[0.18em]", v.metaTone)}>
                    {d.age}
                  </span>
                </div>

                <div className="relative mt-6 flex flex-col gap-2">
                  <h3
                    className={cn(
                      "font-serif leading-tight",
                      v.feature ? "text-4xl sm:text-5xl" : "text-2xl sm:text-[26px]"
                    )}
                  >
                    {d.title}
                  </h3>
                  <p className={cn("text-[14px] leading-relaxed max-w-sm", v.captionTone)}>
                    {d.body}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={spring}
          className="mt-10 flex items-center justify-center gap-3 text-[12px] uppercase tracking-[0.18em] text-ink-500 text-center"
        >
          <span className="h-px w-10 bg-terracotta-300" />
          <span>{t.footer}</span>
          <span className="h-px w-10 bg-terracotta-300" />
        </motion.div>
      </div>
    </section>
  );
}
