"use client";

import { motion } from "framer-motion";
import {
  CommunicationIcon,
  GrossMotorIcon,
  FineMotorIcon,
  ProblemSolvingIcon,
  PersonalSocialIcon
} from "@/components/icons/DomainIcons";
import { SectionHeader } from "@/components/SectionHeader";
import { spring } from "@/lib/utils";

const domains = [
  {
    key: "communication",
    name: "Communication",
    body:
      "Tracking both expressive and receptive language. From early babbles to complex sentence structuring and social understanding.",
    cues: ["Babbling", "Two-word phrases", "Pronoun use", "Story sequencing"],
    Icon: CommunicationIcon,
    tone: "bg-terracotta-400 text-cream-50",
    accent: "bg-cream-50/15 text-cream-50"
  },
  {
    key: "gross-motor",
    name: "Gross Motor",
    body:
      "Evaluating large muscle mechanics, balance, and spatial coordination — from unassisted sitting to running.",
    cues: ["Sitting", "Crawling", "Walking", "Hopping on one foot"],
    Icon: GrossMotorIcon,
    tone: "bg-cream-100 text-ink-900",
    accent: "bg-ink-900/5 text-ink-900"
  },
  {
    key: "fine-motor",
    name: "Fine Motor",
    body:
      "Observing the precision of small muscle movements and hand-eye coordination — critical for future writing and self-care.",
    cues: ["Pincer grasp", "Stacking blocks", "Tripod pencil grip", "Buttoning"],
    Icon: FineMotorIcon,
    tone: "bg-sage-400 text-cream-50",
    accent: "bg-cream-50/15 text-cream-50"
  },
  {
    key: "problem-solving",
    name: "Problem Solving",
    body:
      "Measuring cognitive processing, memory, and early logical reasoning through play-based tasks.",
    cues: ["Object permanence", "Cause & effect", "Sorting", "Simple puzzles"],
    Icon: ProblemSolvingIcon,
    tone: "bg-ink-900 text-cream-50",
    accent: "bg-cream-50/12 text-cream-50"
  },
  {
    key: "personal-social",
    name: "Personal-Social",
    body:
      "Assessing emotional intelligence, behavioral regulation, and the capacity to form secure bonds with caregivers and peers.",
    cues: ["Eye contact", "Co-regulation", "Sharing", "Imaginative play"],
    Icon: PersonalSocialIcon,
    tone: "bg-terracotta-50 text-ink-900",
    accent: "bg-terracotta-100 text-terracotta-500"
  }
];

export function DomainsDetail() {
  return (
    <section id="domains" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Five domains of assessment"
          title={
            <>
              The full picture, by{" "}
              <span className="italic text-terracotta-500">design</span>.
            </>
          }
          subhead="Every Namo screen covers all five ASQ-3 domains — together, longitudinally — so strengths and gaps are visible at every age."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {domains.map((d, i) => {
            const Icon = d.Icon;
            const isDark =
              d.tone.includes("bg-ink-900") ||
              d.tone.includes("bg-terracotta-400") ||
              d.tone.includes("bg-sage-400");
            return (
              <motion.article
                key={d.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ ...spring, delay: i * 0.06 }}
                whileHover={{ y: -4 }}
                className={
                  "relative rounded-[28px] overflow-hidden border border-ink-900/8 shadow-glass p-7 sm:p-8 flex flex-col gap-6 " +
                  d.tone
                }
              >
                <div className="flex items-center justify-between">
                  <span
                    className={"grid h-12 w-12 place-items-center rounded-2xl " + d.accent}
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                  <span
                    className={
                      "text-[11px] uppercase tracking-[0.18em] " +
                      (isDark ? "text-cream-50/80" : "text-ink-500")
                    }
                  >
                    Domain 0{i + 1}
                  </span>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="font-serif text-2xl sm:text-[28px] leading-tight">
                    {d.name}
                  </h3>
                  <p
                    className={
                      "text-[15px] leading-relaxed " +
                      (isDark ? "text-cream-50/85" : "text-ink-600")
                    }
                  >
                    {d.body}
                  </p>
                </div>
                <div className="mt-auto flex flex-wrap gap-2">
                  {d.cues.map((c) => (
                    <span
                      key={c}
                      className={
                        "rounded-full px-2.5 py-1 text-[11px] uppercase tracking-[0.14em] " +
                        (isDark
                          ? "bg-cream-50/12 text-cream-50/90"
                          : "bg-ink-900/5 text-ink-700")
                      }
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
