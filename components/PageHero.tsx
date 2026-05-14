"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { ShinyButton } from "./ShinyButton";
import { spring } from "@/lib/utils";
import { useDictionary } from "@/lib/i18n/provider";

type CTA = { label: string; href: string; variant?: "primary" | "ghost" };

type ExplicitProps = {
  eyebrow: string;
  headline: ReactNode;
  subhead: string;
  primary?: CTA;
  secondary?: CTA;
  align?: "left" | "center";
  meta?: ReactNode;
  sectionKey?: undefined;
};

type SectionKeyedProps = {
  sectionKey: "parents" | "institutions" | "science" | "activities";
  align?: "left" | "center";
};

type Props = ExplicitProps | SectionKeyedProps;

const heroConfigs = {
  parents: {
    italicClass: "italic text-terracotta-500",
    primaryHref: "#assessment",
    secondaryHref: "/activities",
    hasChips: false
  },
  institutions: {
    italicClass: "italic text-sage-500",
    primaryHref: "#partner",
    secondaryHref: "#brief",
    hasChips: true
  },
  science: {
    italicClass: "italic text-terracotta-500",
    primaryHref: "#whitepaper",
    secondaryHref: "#domains",
    hasChips: false
  },
  activities: {
    italicClass: "italic text-terracotta-500",
    primaryHref: "#assessment",
    secondaryHref: "#library",
    hasChips: false
  }
} as const;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: spring }
};

export function PageHero(props: Props) {
  const dict = useDictionary();

  let eyebrow: string;
  let headline: ReactNode;
  let subhead: string;
  let primary: CTA | undefined;
  let secondary: CTA | undefined;
  let meta: ReactNode | undefined;
  const align = props.align ?? "left";

  if ("sectionKey" in props && props.sectionKey) {
    const cfg = heroConfigs[props.sectionKey];
    const t = dict[props.sectionKey].hero;
    eyebrow = t.eyebrow;
    headline = (
      <>
        {t.titlePrefix}{" "}
        <span className={cfg.italicClass}>{t.italic}</span>
        {t.titleSuffix}
      </>
    );
    subhead = t.subhead;
    primary = { label: t.primaryCta, href: cfg.primaryHref };
    secondary = { label: t.secondaryCta, href: cfg.secondaryHref };
    if (cfg.hasChips && "audienceChips" in t) {
      meta = (
        <div className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-ink-500">
          {t.audienceChips.map((c) => (
            <span
              key={c}
              className="rounded-full border border-ink-900/10 bg-cream-100 px-3 py-1.5"
            >
              {c}
            </span>
          ))}
        </div>
      );
    }
  } else {
    const p = props as ExplicitProps;
    eyebrow = p.eyebrow;
    headline = p.headline;
    subhead = p.subhead;
    primary = p.primary;
    secondary = p.secondary;
    meta = p.meta;
  }

  return (
    <section className="relative overflow-hidden pt-32 sm:pt-36 lg:pt-40 pb-12 sm:pb-16">
      <div aria-hidden className="absolute inset-0 grid-lines opacity-70" />
      <div
        aria-hidden
        className="absolute -top-40 -left-32 h-[460px] w-[460px] rounded-full bg-terracotta-200/40 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-40 right-0 h-[460px] w-[460px] rounded-full bg-sage-200/40 blur-3xl"
      />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className={
            align === "center"
              ? "flex flex-col items-center text-center gap-6"
              : "flex flex-col gap-6 max-w-3xl"
          }
        >
          <motion.span
            variants={item}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-terracotta-200 bg-terracotta-50/70 px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-terracotta-600"
          >
            {eyebrow}
          </motion.span>

          <motion.h1
            variants={item}
            className="font-serif text-balance text-5xl leading-[1.04] tracking-tight text-ink-900 sm:text-6xl lg:text-[72px]"
          >
            {headline}
          </motion.h1>

          <motion.p
            variants={item}
            className="max-w-2xl text-[17px] leading-relaxed text-ink-600"
          >
            {subhead}
          </motion.p>

          {(primary || secondary) && (
            <motion.div
              variants={item}
              className="flex flex-wrap items-center gap-3 pt-1"
            >
              {primary && (
                <ShinyButton href={primary.href} variant={primary.variant ?? "primary"}>
                  {primary.label}
                </ShinyButton>
              )}
              {secondary && (
                <ShinyButton href={secondary.href} variant={secondary.variant ?? "ghost"}>
                  {secondary.label}
                </ShinyButton>
              )}
            </motion.div>
          )}

          {meta && (
            <motion.div variants={item} className="pt-4">
              {meta}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
