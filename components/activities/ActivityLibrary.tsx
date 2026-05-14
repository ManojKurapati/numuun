"use client";

import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import Image from "next/image";
import { Play, Clock, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";
import { cn, spring } from "@/lib/utils";

const domains = [
  { key: "all", label: "All domains" },
  { key: "communication", label: "Communication" },
  { key: "gross-motor", label: "Gross Motor" },
  { key: "fine-motor", label: "Fine Motor" },
  { key: "problem-solving", label: "Problem Solving" },
  { key: "personal-social", label: "Personal-Social" }
];

type Activity = {
  id: string;
  title: string;
  domain: string;
  ageBand: string;
  duration: string;
  materials: string;
  purpose: string;
  tip: string;
  img: string;
};

const items: Activity[] = [
  {
    id: "fm-stacking-blocks",
    title: "Stacking Blocks · Grip Strength",
    domain: "fine-motor",
    ageBand: "18–30 mo",
    duration: "2 min",
    materials: "Wooden blocks",
    purpose: "Strengthens pincer grasp",
    tip: "Sit at eye level — model the stack before they try.",
    img: "https://images.unsplash.com/photo-1607453998774-d533f65dac99?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "co-mirror-babble",
    title: "Mirror Babble · Sound Pairs",
    domain: "communication",
    ageBand: "6–12 mo",
    duration: "3 min",
    materials: "Just your face",
    purpose: "Builds expressive language",
    tip: "Pause for two seconds after every sound — wait for the echo.",
    img: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "gm-balance-beam",
    title: "Balance Beam · Floor Tape",
    domain: "gross-motor",
    ageBand: "24–48 mo",
    duration: "4 min",
    materials: "Masking tape",
    purpose: "Improves single-leg balance",
    tip: "Start with arms wide — narrow as confidence builds.",
    img: "https://images.unsplash.com/photo-1545226383-37e1eea3a87a?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "ps-shape-sort",
    title: "Shape Sort · Lid Match",
    domain: "problem-solving",
    ageBand: "12–24 mo",
    duration: "3 min",
    materials: "Household lids",
    purpose: "Builds cause-and-effect reasoning",
    tip: "Resist correcting — let them feel the misfit.",
    img: "https://images.unsplash.com/photo-1587019158091-1a103c5dd17f?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "psoc-feelings-cards",
    title: "Feelings Cards · Name the Face",
    domain: "personal-social",
    ageBand: "30–60 mo",
    duration: "5 min",
    materials: "Index cards, marker",
    purpose: "Develops emotional vocabulary",
    tip: "Share one of your own emotions first — model the language.",
    img: "https://images.unsplash.com/photo-1602030638412-bb8dcc0bc8b0?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "fm-bead-thread",
    title: "Bead Threading · String Lace",
    domain: "fine-motor",
    ageBand: "30–48 mo",
    duration: "5 min",
    materials: "Large beads + lace",
    purpose: "Refines bilateral coordination",
    tip: "Anchor the lace with a knot at one end so beads don’t slip off.",
    img: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "co-story-pause",
    title: "Story Pause · Fill the Word",
    domain: "communication",
    ageBand: "24–42 mo",
    duration: "4 min",
    materials: "A familiar picture book",
    purpose: "Builds receptive language",
    tip: "Pause at the noun — wait for them to supply it.",
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "gm-animal-walks",
    title: "Animal Walks · Living Room Safari",
    domain: "gross-motor",
    ageBand: "18–36 mo",
    duration: "3 min",
    materials: "Open floor",
    purpose: "Develops gross-motor planning",
    tip: "Lead with sound effects — they’ll imitate gait more eagerly.",
    img: "https://images.unsplash.com/photo-1597586124394-fbd6ef244026?auto=format&fit=crop&w=1200&q=80"
  }
];

const domainTone: Record<string, string> = {
  communication: "bg-terracotta-50 text-terracotta-600",
  "gross-motor": "bg-sage-50 text-sage-700",
  "fine-motor": "bg-cream-200 text-ink-900",
  "problem-solving": "bg-ink-900 text-cream-50",
  "personal-social": "bg-terracotta-400 text-cream-50"
};

const domainLabel: Record<string, string> = {
  communication: "Communication",
  "gross-motor": "Gross Motor",
  "fine-motor": "Fine Motor",
  "problem-solving": "Problem Solving",
  "personal-social": "Personal-Social"
};

export function ActivityLibrary() {
  const [active, setActive] = useState<string>("all");

  const filtered = useMemo(
    () => (active === "all" ? items : items.filter((a) => a.domain === active)),
    [active]
  );

  return (
    <section id="library" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <LayoutGroup>
          <div className="mb-10 sm:mb-14 flex flex-wrap items-center gap-2">
            {domains.map((d) => {
              const isActive = active === d.key;
              return (
                <button
                  key={d.key}
                  onClick={() => setActive(d.key)}
                  className={cn(
                    "relative rounded-full border border-ink-900/10 px-4 py-2 text-[13px] font-medium transition-colors",
                    isActive
                      ? "text-cream-50"
                      : "text-ink-700 hover:text-ink-900 hover:bg-cream-100"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activity-filter"
                      transition={spring}
                      className="absolute inset-0 -z-0 rounded-full bg-ink-900"
                    />
                  )}
                  <span className="relative z-10">{d.label}</span>
                </button>
              );
            })}
          </div>

          <motion.div layout transition={spring} className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((a, i) => (
                <motion.article
                  key={a.id}
                  layout
                  layoutId={`card-${a.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ ...spring, delay: (i % 6) * 0.04 }}
                  whileHover={{ y: -4 }}
                  className="group relative overflow-hidden rounded-[26px] border border-ink-900/8 bg-cream-50 shadow-glass"
                >
                  <div className="relative aspect-[5/4] overflow-hidden">
                    <Image
                      src={a.img}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink-900/55 via-ink-900/0 to-transparent" />
                    <button
                      aria-label="Play activity"
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 grid h-14 w-14 place-items-center rounded-full bg-cream-50/95 text-terracotta-500 shadow-glow opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Play className="h-5 w-5 translate-x-[2px]" fill="currentColor" />
                    </button>
                    <div className="absolute inset-x-4 bottom-3 flex items-center justify-between gap-2">
                      <span
                        className={cn(
                          "rounded-full px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] font-medium",
                          domainTone[a.domain]
                        )}
                      >
                        {domainLabel[a.domain]}
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-cream-50/95 px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-ink-900">
                        <Clock className="h-3 w-3" /> {a.duration}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] uppercase tracking-[0.16em] text-ink-500">
                        {a.ageBand}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] uppercase tracking-[0.16em] text-sage-700">
                        <Sparkles className="h-3 w-3" /> Clinical purpose
                      </span>
                    </div>
                    <h3 className="font-serif text-xl text-ink-900 leading-tight">
                      {a.title}
                    </h3>
                    <p className="text-[13px] leading-relaxed text-ink-600">
                      <span className="font-medium text-ink-800">Purpose:</span>{" "}
                      {a.purpose}
                    </p>
                    <p className="text-[13px] leading-relaxed text-ink-600">
                      <span className="font-medium text-ink-800">Materials:</span>{" "}
                      {a.materials}
                    </p>
                    <p className="rounded-2xl bg-cream-100/70 px-4 py-3 text-[13px] leading-relaxed text-ink-700">
                      <span className="text-[11px] uppercase tracking-[0.16em] text-terracotta-600 block mb-1">
                        Pro-parent tip
                      </span>
                      {a.tip}
                    </p>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>

        {filtered.length === 0 && (
          <p className="text-center text-ink-500 mt-10">No activities in this domain yet.</p>
        )}
      </div>
    </section>
  );
}
