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
import { ContainerScroll } from "./ContainerScroll";
import { spring } from "@/lib/utils";
import { useDictionary } from "@/lib/i18n/provider";

const domainVisuals = {
  communication: { Icon: CommunicationIcon, value: 86, color: "#C98467" },
  "gross-motor": { Icon: GrossMotorIcon, value: 74, color: "#8BA88E" },
  "fine-motor": { Icon: FineMotorIcon, value: 62, color: "#6F8C73", flag: true },
  "problem-solving": { Icon: ProblemSolvingIcon, value: 81, color: "#3F362A" },
  "personal-social": { Icon: PersonalSocialIcon, value: 89, color: "#B36C50" }
} as const;

function Ring({
  value,
  color,
  size = 64,
  stroke = 5,
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

function DashboardCard() {
  const dict = useDictionary();
  const t = dict.home.productPreview;
  const domainKeys = [
    "communication",
    "gross-motor",
    "fine-motor",
    "problem-solving",
    "personal-social"
  ] as const;

  return (
    <div className="relative h-full w-full p-4 sm:p-6 md:p-8 flex flex-col">
      <div className="flex items-center justify-between mb-5 sm:mb-6">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-2xl bg-sage-50 text-sage-600 font-serif">
            {t.profile.initial}
          </span>
          <div>
            <p className="font-serif text-base sm:text-xl text-ink-900">{t.profile.name}</p>
            <p className="text-[11px] sm:text-[12px] uppercase tracking-[0.16em] text-ink-500">
              {t.profile.lastScreen}
            </p>
          </div>
        </div>
        <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-sage-50 px-3 py-1 text-[11px] font-medium text-sage-700">
          <TrendingUp className="h-3.5 w-3.5" /> {t.profile.trendBadge}
        </span>
      </div>

      <div className="grid grid-cols-5 gap-2 sm:gap-3 flex-1 items-stretch">
        {domainKeys.map((key, i) => {
          const v = domainVisuals[key];
          const Icon = v.Icon;
          const label = t.domainLabels[key as keyof typeof t.domainLabels];
          return (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ ...spring, delay: i * 0.05 }}
              className="relative flex flex-col items-center justify-center gap-1.5 sm:gap-2 rounded-2xl border border-ink-900/8 bg-cream-50 p-2 sm:p-3"
            >
              {"flag" in v && v.flag && (
                <span className="absolute -top-2 right-1 sm:right-2 rounded-full bg-terracotta-400 px-2 py-0.5 text-[9px] sm:text-[10px] uppercase tracking-[0.12em] text-cream-50 shadow-glass">
                  {t.flagBadge}
                </span>
              )}
              <div className="relative grid place-items-center">
                <Ring value={v.value} color={v.color} delay={i * 0.05} />
                <span className="absolute" style={{ color: v.color }}>
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </span>
              </div>
              <p className="text-[9px] sm:text-[11px] uppercase tracking-[0.14em] text-ink-500 text-center leading-tight">
                {label}
              </p>
              <p className="font-serif text-sm sm:text-lg text-ink-900 -mt-0.5">
                {v.value}
                <span className="text-ink-500 text-[10px] sm:text-sm">
                  {t.ringScaleSuffix}
                </span>
              </p>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-5 sm:mt-6 flex items-center justify-between gap-3 rounded-2xl bg-sage-50 px-4 sm:px-5 py-3 sm:py-4">
        <div className="flex items-start gap-3">
          <span className="grid h-8 w-8 sm:h-9 sm:w-9 shrink-0 place-items-center rounded-full bg-cream-50 text-sage-600">
            <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </span>
          <div>
            <p className="font-serif text-sm sm:text-base text-ink-900">
              {t.nextNudge.eyebrow}
            </p>
            <p className="text-[12px] sm:text-[13px] text-ink-600">{t.nextNudge.body}</p>
          </div>
        </div>
        <span className="hidden sm:inline-flex items-center gap-1.5 text-[12px] uppercase tracking-[0.16em] text-sage-700 shrink-0">
          <CalendarDays className="h-3.5 w-3.5" /> {t.nextNudge.date}
        </span>
      </div>
    </div>
  );
}

export function ProductPreview() {
  const dict = useDictionary();
  const t = dict.home.productPreview;

  return (
    <section id="dashboard" className="relative bg-cream-100/30">
      <ContainerScroll
        titleComponent={
          <div className="flex flex-col items-center gap-4 px-4">
            <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-terracotta-500">
              <span className="h-px w-8 bg-terracotta-300" /> {t.eyebrow}
            </span>
            <h2 className="font-serif text-balance text-4xl sm:text-5xl lg:text-[64px] leading-[1.04] tracking-tight text-ink-900 max-w-3xl">
              {t.titlePrefix}{" "}
              <span className="italic text-sage-500">{t.italic}</span>
              {t.titleSuffix}
            </h2>
          </div>
        }
      >
        <DashboardCard />
      </ContainerScroll>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 pb-24 sm:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={spring}
          className="grid gap-6 lg:grid-cols-12 items-start"
        >
          <div className="lg:col-span-7 group relative overflow-hidden rounded-[32px] border border-ink-900/8 shadow-soft">
            <div className="relative aspect-[16/10]">
              <Image
                src="https://images.unsplash.com/photo-1607453998774-d533f65dac99?auto=format&fit=crop&w=1400&q=80"
                alt=""
                fill
                sizes="(min-width: 1024px) 720px, 100vw"
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
                <Play
                  className="relative h-6 w-6 translate-x-[2px]"
                  fill="currentColor"
                />
              </motion.button>

              <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-3">
                <div className="flex flex-col gap-1">
                  <span className="text-[11px] uppercase tracking-[0.18em] text-cream-50/80">
                    {t.video.eyebrow}
                  </span>
                  <p className="font-serif text-2xl text-cream-50 leading-tight">
                    {t.video.title}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-cream-50/95 px-2.5 py-1 text-[11px] font-medium text-ink-900">
                  {t.video.badge}
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-[28px] border border-ink-900/8 bg-cream-50 p-6 sm:p-8 shadow-glass">
            <p className="text-[12px] uppercase tracking-[0.18em] text-ink-500 mb-3">
              {t.video.whyEyebrow}
            </p>
            <p className="text-[15px] leading-relaxed text-ink-700">
              {t.video.whyBody}
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-4 text-[12px] uppercase tracking-[0.14em] text-ink-500">
              {t.video.tags.map((tag) => (
                <span key={tag.label} className="inline-flex items-center gap-1.5">
                  <span
                    className={
                      "h-1.5 w-1.5 rounded-full " +
                      (tag.tone === "terracotta" ? "bg-terracotta-400" : "bg-sage-500")
                    }
                  />
                  {tag.label}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
