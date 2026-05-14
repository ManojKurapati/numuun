"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Play, Sparkles, TrendingUp, CalendarDays } from "lucide-react";
import {
  CommunicationIcon,
  GrossMotorIcon,
  FineMotorIcon,
  ProblemSolvingIcon,
  PersonalSocialIcon
} from "./icons/DomainIcons";
import { spring } from "@/lib/utils";

const domains = [
  {
    key: "communication",
    label: "Communication",
    value: 86,
    Icon: CommunicationIcon,
    color: "#C98467"
  },
  {
    key: "gross-motor",
    label: "Gross Motor",
    value: 74,
    Icon: GrossMotorIcon,
    color: "#8BA88E"
  },
  {
    key: "fine-motor",
    label: "Fine Motor",
    value: 62,
    Icon: FineMotorIcon,
    color: "#6F8C73",
    flag: true
  },
  {
    key: "problem-solving",
    label: "Problem Solving",
    value: 81,
    Icon: ProblemSolvingIcon,
    color: "#3F362A"
  },
  {
    key: "personal-social",
    label: "Personal-Social",
    value: 89,
    Icon: PersonalSocialIcon,
    color: "#B36C50"
  }
];

function Ring({
  value,
  color,
  size = 84,
  stroke = 6,
  delay = 0
}: {
  value: number;
  color: string;
  size?: number;
  stroke?: number;
  delay?: number;
}) {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const target = circumference * (1 - value / 100);

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="rgba(63, 54, 42, 0.10)"
        strokeWidth={stroke}
      />
      <motion.circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={circumference}
        initial={{ strokeDashoffset: circumference }}
        whileInView={{ strokeDashoffset: target }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ ...spring, delay }}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
    </svg>
  );
}

export function ProductPreview() {
  return (
    <section id="dashboard" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={spring}
          className="flex flex-col items-start gap-4 max-w-2xl mb-12 sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-terracotta-500">
            <span className="h-px w-8 bg-terracotta-300" /> Inside Namo
          </span>
          <h2 className="font-serif text-balance text-4xl sm:text-5xl lg:text-[56px] leading-[1.05] tracking-tight text-ink-900">
            A dashboard that{" "}
            <span className="italic text-sage-500">already knows what to do next</span>.
          </h2>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={spring}
            className="lg:col-span-7 relative overflow-hidden rounded-[32px] border border-ink-900/8 bg-cream-50 shadow-soft p-6 sm:p-8"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-sage-50 text-sage-600 font-serif">
                  A
                </span>
                <div>
                  <p className="font-serif text-xl text-ink-900">Aanya, 34 months</p>
                  <p className="text-[12px] uppercase tracking-[0.16em] text-ink-500">
                    Last screen · 4 days ago
                  </p>
                </div>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-sage-50 px-3 py-1 text-[11px] font-medium text-sage-700">
                <TrendingUp className="h-3.5 w-3.5" /> +6 this month
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 sm:gap-3">
              {domains.map((d, i) => {
                const Icon = d.Icon;
                return (
                  <motion.div
                    key={d.key}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ ...spring, delay: i * 0.06 }}
                    className="relative flex flex-col items-center gap-2.5 rounded-2xl border border-ink-900/8 bg-cream-50 p-3 sm:p-4 text-center"
                  >
                    {d.flag && (
                      <span className="absolute -top-2 right-2 rounded-full bg-terracotta-400 px-2 py-0.5 text-[10px] uppercase tracking-[0.12em] text-cream-50 shadow-glass">
                        Watch
                      </span>
                    )}
                    <div className="relative grid place-items-center">
                      <Ring value={d.value} color={d.color} delay={i * 0.06} />
                      <span
                        className="absolute"
                        style={{ color: d.color }}
                      >
                        <Icon className="h-5 w-5" />
                      </span>
                    </div>
                    <p className="text-[11px] uppercase tracking-[0.14em] text-ink-500">
                      {d.label}
                    </p>
                    <p className="font-serif text-lg text-ink-900 -mt-1">
                      {d.value}
                      <span className="text-ink-500 text-sm">/100</span>
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl bg-sage-50 px-5 py-4">
              <div className="flex items-start gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-cream-50 text-sage-600">
                  <Sparkles className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-serif text-base text-ink-900">
                    Next nudge · Fine Motor
                  </p>
                  <p className="text-[13px] text-ink-600">
                    A 3-minute pincer-grip activity, scheduled for Tuesday.
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 text-[12px] uppercase tracking-[0.16em] text-sage-700">
                <CalendarDays className="h-3.5 w-3.5" /> 24 May
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ ...spring, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div className="group relative overflow-hidden rounded-[32px] border border-ink-900/8 shadow-soft">
              <div className="relative aspect-[5/4]">
                <Image
                  src="https://images.unsplash.com/photo-1607453998774-d533f65dac99?auto=format&fit=crop&w=1200&q=80"
                  alt="A child stacking colourful wooden blocks"
                  fill
                  sizes="(min-width: 1024px) 480px, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-ink-900/10 to-transparent" />

                <motion.button
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.96 }}
                  transition={spring}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 grid h-16 w-16 place-items-center rounded-full bg-cream-50/95 text-terracotta-500 shadow-glow"
                  aria-label="Play activity preview"
                >
                  <span
                    className="absolute inset-0 rounded-full bg-cream-50/40 animate-ping"
                    style={{ animationDuration: "2.8s" }}
                  />
                  <Play className="relative h-6 w-6 translate-x-[2px]" fill="currentColor" />
                </motion.button>

                <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-3">
                  <div className="flex flex-col gap-1">
                    <span className="text-[11px] uppercase tracking-[0.18em] text-cream-50/80">
                      Closed-loop intervention
                    </span>
                    <p className="font-serif text-2xl text-cream-50 leading-tight">
                      Fine Motor · Stacking Blocks
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-cream-50/95 px-2.5 py-1 text-[11px] font-medium text-ink-900">
                    2 min
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-ink-900/8 bg-cream-50 p-6 shadow-glass">
              <p className="text-[12px] uppercase tracking-[0.18em] text-ink-500 mb-3">
                Why this activity
              </p>
              <p className="text-[15px] leading-relaxed text-ink-700">
                Aanya&rsquo;s last screen showed emerging pincer-grip but
                inconsistent block stacking above three. This activity rebuilds
                that exact skill — gently, with you, in two minutes.
              </p>
              <div className="mt-4 flex items-center gap-4 text-[12px] uppercase tracking-[0.14em] text-ink-500">
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-terracotta-400" />
                  Clinician-authored
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-sage-500" />
                  Repeat 3×
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
