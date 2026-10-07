"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Sparkles } from "lucide-react";
import { SubscribeForm } from "./SubscribeForm";
import { spring, softSpring } from "@/lib/utils";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.09, delayChildren: 0.1 } }
};

const item = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: spring }
};

const chips = [
  { text: "First steps", emoji: "👣", className: "-left-3 sm:-left-8 top-10", delay: 0.5 },
  { text: "Said “banana”", emoji: "🍌", className: "-right-2 sm:-right-6 top-1/3", delay: 0.7 },
  { text: "Stacked 3 blocks", emoji: "🧱", className: "left-6 bottom-8", delay: 0.9 }
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-24">
      <div aria-hidden className="absolute inset-0 grid-lines opacity-70" />
      <div aria-hidden className="absolute -top-40 -left-32 h-[520px] w-[520px] rounded-full bg-sun-200/50 blur-3xl" />
      <div aria-hidden className="absolute -bottom-40 right-0 h-[520px] w-[520px] rounded-full bg-terracotta-200/40 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:gap-14 lg:grid-cols-12">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="lg:col-span-6 flex flex-col gap-7"
          >
            <motion.span
              variants={item}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-terracotta-200 bg-terracotta-50/70 px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-terracotta-600"
            >
              <Sparkles className="h-3.5 w-3.5" /> For parents who are crushing it
            </motion.span>

            <motion.h1
              variants={item}
              className="font-serif text-balance text-5xl leading-[1.02] tracking-tight text-ink-900 sm:text-6xl lg:text-[76px]"
            >
              Raising a tiny human is the{" "}
              <span className="relative inline-block italic text-terracotta-500">
                coolest
                <svg aria-hidden viewBox="0 0 200 12" className="absolute -bottom-2 left-0 w-full text-sun-400">
                  <path d="M2 9 C 50 2, 150 2, 198 8" stroke="currentColor" strokeWidth="5" fill="none" strokeLinecap="round" />
                </svg>
              </span>{" "}
              job there is.
            </motion.h1>

            <motion.p variants={item} className="max-w-xl text-[17px] leading-relaxed text-ink-600">
              Every babble, wobble and “why?” is your kid’s brain building
              itself — and you’re the architect. We break down developmental
              milestones from birth to five, so you know what’s coming and
              get to celebrate every win.
            </motion.p>

            <motion.div variants={item} className="flex flex-col gap-3">
              <SubscribeForm />
              <p className="pl-5 text-[13px] text-ink-500">
                Free milestone notes in your inbox. Or{" "}
                <Link href="/milestones" className="font-medium text-terracotta-500 underline underline-offset-4 hover:text-terracotta-600">
                  explore milestones now →
                </Link>
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ ...softSpring, delay: 0.25 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[28px] shadow-soft rotate-1">
              <Image
                src="https://images.unsplash.com/photo-1581952976147-5a2d15560349?auto=format&fit=crop&w=1400&q=80"
                alt="A parent and toddler laughing together"
                fill
                priority
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover"
              />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink-900/30 via-transparent to-transparent" />
            </div>

            {chips.map((c) => (
              <motion.div
                key={c.text}
                initial={{ opacity: 0, scale: 0.8, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ ...spring, delay: c.delay }}
                whileHover={{ scale: 1.06, rotate: -2 }}
                className={`absolute ${c.className} flex items-center gap-2.5 rounded-full glass-strong px-4 py-2.5 shadow-glass`}
              >
                <span className="text-lg">{c.emoji}</span>
                <span className="text-sm font-medium text-ink-900">{c.text}</span>
                <span className="rounded-full bg-sage-500 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-cream-50">
                  Win
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
