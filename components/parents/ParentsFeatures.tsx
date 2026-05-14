"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mic, BarChart3, PlayCircle, Quote } from "lucide-react";
import { VoiceWave } from "@/components/VoiceWave";
import { spring } from "@/lib/utils";

const features = [
  {
    eyebrow: "Voice-first assessments · NLP-powered",
    title: "“Look at me, don’t look at a screen.”",
    body:
      "Answer milestone questions using natural speech while you’re actively playing with your child. Namo’s NLP accurately categorizes your responses — without you tapping a single button.",
    icon: Mic,
    visual: "voice"
  },
  {
    eyebrow: "The progress dashboard",
    title: "A clear picture, with zero medical jargon.",
    body:
      "Intuitive, colour-coded zones for each developmental domain. You always know where your child excels, where they need support, and what to do next.",
    icon: BarChart3,
    visual: "dashboard"
  },
  {
    eyebrow: "The activity library",
    title: "Grey-zone flagged? You receive a masterclass.",
    body:
      "If an assessment flags a “grey zone,” you immediately receive step-by-step video activities. For fine motor delays, you’ll get a 2-minute masterclass on “Stacking Blocks for Grip Strength.”",
    icon: PlayCircle,
    visual: "activity"
  }
];

export function ParentsFeatures() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 flex flex-col gap-20 sm:gap-28">
        {features.map((f, i) => {
          const Icon = f.icon;
          const reverse = i % 2 === 1;
          return (
            <motion.article
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={spring}
              className="grid items-center gap-10 lg:gap-14 lg:grid-cols-12"
            >
              <div
                className={
                  "flex flex-col gap-5 lg:col-span-5 " +
                  (reverse ? "lg:order-2" : "")
                }
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-terracotta-50 text-terracotta-500">
                    <Icon className="h-5 w-5" strokeWidth={1.7} />
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.18em] text-terracotta-500">
                    {f.eyebrow}
                  </span>
                </div>
                <h3 className="font-serif text-balance text-3xl sm:text-4xl lg:text-[44px] leading-[1.06] tracking-tight text-ink-900">
                  {f.title}
                </h3>
                <p className="text-[16px] leading-relaxed text-ink-600 max-w-lg">
                  {f.body}
                </p>
              </div>

              <div className={"lg:col-span-7 " + (reverse ? "lg:order-1" : "")}>
                {f.visual === "voice" && <VoiceVisual />}
                {f.visual === "dashboard" && <DashboardVisual />}
                {f.visual === "activity" && <ActivityVisual />}
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

function VoiceVisual() {
  return (
    <div className="relative overflow-hidden rounded-[32px] border border-ink-900/8 bg-cream-100/70 p-7 sm:p-10 shadow-soft min-h-[360px] flex flex-col justify-between gap-6">
      <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-ink-500">
        <span className="h-2 w-2 rounded-full bg-terracotta-400 animate-pulse" />
        Voice mode · listening
      </div>
      <div className="flex flex-col gap-4">
        <p className="font-serif text-2xl sm:text-3xl text-ink-900 leading-tight max-w-md">
          “Maryam just stacked four blocks before they tumbled.”
        </p>
        <VoiceWave bars={28} height={48} />
        <div className="flex flex-wrap items-center gap-2 mt-2">
          {[
            "Fine Motor",
            "Stacking",
            "4+ blocks",
            "Logged"
          ].map((c, i) => (
            <motion.span
              key={c}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ ...spring, delay: 0.1 + i * 0.07 }}
              className="rounded-full bg-cream-50 border border-ink-900/8 px-3 py-1 text-[12px] font-medium text-ink-700"
            >
              {c}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
}

function DashboardVisual() {
  const zones = [
    { name: "Communication", value: 86, tone: "bg-sage-400", label: "Thriving" },
    { name: "Gross Motor", value: 74, tone: "bg-sage-300", label: "On track" },
    { name: "Fine Motor", value: 62, tone: "bg-terracotta-300", label: "Watch" },
    { name: "Problem Solving", value: 81, tone: "bg-sage-400", label: "Thriving" },
    { name: "Personal-Social", value: 89, tone: "bg-sage-400", label: "Thriving" }
  ];
  return (
    <div className="relative overflow-hidden rounded-[32px] border border-ink-900/8 bg-cream-50 p-7 sm:p-9 shadow-soft">
      <div className="flex items-center justify-between mb-6">
        <p className="font-serif text-xl text-ink-900">This week’s picture</p>
        <span className="text-[11px] uppercase tracking-[0.16em] text-ink-500">
          Week 14 · 34 months
        </span>
      </div>
      <div className="flex flex-col gap-3.5">
        {zones.map((z, i) => (
          <motion.div
            key={z.name}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ ...spring, delay: i * 0.06 }}
            className="flex items-center gap-4"
          >
            <p className="w-32 sm:w-40 text-[13px] text-ink-700">{z.name}</p>
            <div className="relative flex-1 h-2.5 rounded-full bg-ink-900/8 overflow-hidden">
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: `${z.value}%` }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ ...spring, delay: 0.1 + i * 0.06 }}
                className={`block h-full ${z.tone}`}
              />
            </div>
            <span className="w-20 text-right text-[11px] uppercase tracking-[0.16em] text-ink-500">
              {z.label}
            </span>
          </motion.div>
        ))}
      </div>
      <div className="mt-6 grid grid-cols-3 gap-2 text-[11px] uppercase tracking-[0.16em]">
        <span className="rounded-full bg-sage-50 px-3 py-1.5 text-center text-sage-700">
          Normal
        </span>
        <span className="rounded-full bg-terracotta-50 px-3 py-1.5 text-center text-terracotta-600">
          Grey zone
        </span>
        <span className="rounded-full bg-ink-900 px-3 py-1.5 text-center text-cream-50">
          Below cutoff
        </span>
      </div>
    </div>
  );
}

function ActivityVisual() {
  const items = [
    {
      title: "Stacking Blocks · Grip Strength",
      meta: "Fine Motor · 2 min",
      img: "https://images.unsplash.com/photo-1607453998774-d533f65dac99?auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Mirror Babble · Sound Pairs",
      meta: "Communication · 3 min",
      img: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Balance Beam · Floor Tape",
      meta: "Gross Motor · 4 min",
      img: "https://images.unsplash.com/photo-1545226383-37e1eea3a87a?auto=format&fit=crop&w=1000&q=80"
    }
  ];
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {items.map((a, i) => (
        <motion.figure
          key={a.title}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ ...spring, delay: i * 0.07 }}
          whileHover={{ y: -4 }}
          className="group relative overflow-hidden rounded-[24px] border border-ink-900/8 shadow-glass bg-cream-50"
        >
          <div className="relative aspect-[4/5]">
            <Image
              src={a.img}
              alt=""
              fill
              sizes="(min-width: 768px) 240px, 60vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-ink-900/10 to-transparent" />
            <span className="absolute top-3 right-3 grid h-9 w-9 place-items-center rounded-full bg-cream-50/95 text-terracotta-500">
              <PlayCircle className="h-4 w-4" />
            </span>
            <figcaption className="absolute inset-x-4 bottom-3 flex flex-col gap-1 text-cream-50">
              <span className="text-[10px] uppercase tracking-[0.18em] text-cream-50/80">
                {a.meta}
              </span>
              <p className="font-serif text-base leading-tight">{a.title}</p>
            </figcaption>
          </div>
        </motion.figure>
      ))}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ ...spring, delay: 0.3 }}
        className="sm:col-span-3 relative overflow-hidden rounded-[20px] border border-ink-900/8 bg-cream-100 p-5 flex items-start gap-3"
      >
        <Quote className="h-5 w-5 text-terracotta-500 mt-0.5" />
        <p className="text-[14px] leading-relaxed text-ink-700">
          “The activities feel like play — but our paediatrician noticed the
          difference in six weeks.”
          <span className="ml-2 text-[12px] uppercase tracking-[0.14em] text-ink-500">
            — Layla & Omar, Dubai
          </span>
        </p>
      </motion.div>
    </div>
  );
}
