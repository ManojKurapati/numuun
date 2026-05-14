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

const domains = [
  {
    key: "communication",
    title: "Communication",
    body: "Monitoring language acquisition and social understanding.",
    age: "Domain 01",
    Icon: CommunicationIcon,
    span: "md:col-span-3 md:row-span-2",
    tone: "bg-terracotta-400 text-cream-50",
    iconBg: "bg-cream-50/15 text-cream-50",
    captionTone: "text-cream-50/85",
    metaTone: "text-cream-50/80",
    feature: true
  },
  {
    key: "gross-motor",
    title: "Gross Motor",
    body: "Tracking physical coordination, balance, and large-muscle growth.",
    age: "Domain 02",
    Icon: GrossMotorIcon,
    span: "md:col-span-2",
    tone: "bg-sage-400 text-cream-50",
    iconBg: "bg-cream-50/15 text-cream-50",
    captionTone: "text-cream-50/85",
    metaTone: "text-cream-50/80"
  },
  {
    key: "fine-motor",
    title: "Fine Motor",
    body: "Observing the precision of hand-eye coordination and small movements.",
    age: "Domain 03",
    Icon: FineMotorIcon,
    span: "md:col-span-2",
    tone: "bg-cream-100 text-ink-900",
    iconBg: "bg-ink-900/5 text-ink-900",
    captionTone: "text-ink-600",
    metaTone: "text-ink-500"
  },
  {
    key: "problem-solving",
    title: "Problem Solving",
    body: "Measuring cognitive processing and early logical reasoning.",
    age: "Domain 04",
    Icon: ProblemSolvingIcon,
    span: "md:col-span-2",
    tone: "bg-ink-900 text-cream-50",
    iconBg: "bg-cream-50/12 text-cream-50",
    captionTone: "text-cream-50/85",
    metaTone: "text-cream-50/70"
  },
  {
    key: "personal-social",
    title: "Personal-Social",
    body: "Assessing emotional intelligence and social-behavioural bonds.",
    age: "Domain 05",
    Icon: PersonalSocialIcon,
    span: "md:col-span-3",
    tone: "bg-terracotta-50 text-ink-900",
    iconBg: "bg-terracotta-100 text-terracotta-500",
    captionTone: "text-ink-600",
    metaTone: "text-ink-500"
  }
];

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
              <span className="h-px w-8 bg-terracotta-300" /> Five ASQ-3 domains
            </span>
            <h2 className="font-serif text-balance text-4xl sm:text-5xl lg:text-[56px] leading-[1.05] tracking-tight text-ink-900">
              A full picture of growth,{" "}
              <span className="italic text-terracotta-500">domain by domain</span>.
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ ...spring, delay: 0.12 }}
            className="max-w-md text-[15px] leading-relaxed text-ink-600"
          >
            ASQ-3 is the only validated screen that crosses every channel of
            early development. Namo tracks all five — together, longitudinally —
            from first sounds to first day of school.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 auto-rows-[minmax(180px,auto)] gap-4">
          {domains.map((d, i) => {
            const Icon = d.Icon;
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
                  d.tone,
                  d.span
                )}
              >
                {d.feature && (
                  <Image
                    src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1400&q=80"
                    alt=""
                    fill
                    sizes="(min-width: 768px) 720px, 100vw"
                    className="object-cover opacity-20 mix-blend-multiply"
                  />
                )}
                <div className="relative flex items-center justify-between">
                  <span
                    className={cn(
                      "grid h-12 w-12 place-items-center rounded-2xl",
                      d.iconBg
                    )}
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                  <span
                    className={cn(
                      "text-[11px] uppercase tracking-[0.18em]",
                      d.metaTone
                    )}
                  >
                    {d.age}
                  </span>
                </div>

                <div className="relative mt-6 flex flex-col gap-2">
                  <h3
                    className={cn(
                      "font-serif leading-tight",
                      d.feature ? "text-4xl sm:text-5xl" : "text-2xl sm:text-[26px]"
                    )}
                  >
                    {d.title}
                  </h3>
                  <p
                    className={cn(
                      "text-[14px] leading-relaxed max-w-sm",
                      d.captionTone
                    )}
                  >
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
          className="mt-10 flex items-center justify-center gap-3 text-[12px] uppercase tracking-[0.18em] text-ink-500"
        >
          <span className="h-px w-10 bg-terracotta-300" />
          <span>One child. Five domains. Six years of guided growth.</span>
          <span className="h-px w-10 bg-terracotta-300" />
        </motion.div>
      </div>
    </section>
  );
}
