"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { spring } from "@/lib/utils";

const partners = [
  "St. Mira Pediatrics",
  "Aravind Vision Care",
  "Indus Childhood Co.",
  "Aanya Therapy Group",
  "Banyan Family Clinic",
  "Veda Audiology",
  "Manoah Speech Lab",
  "Nila Wellness"
];

const certifications = ["DBT-C", "IAP", "ASHA", "AAP", "WHO-ECDI"];

export function Trust() {
  return (
    <section id="trust" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={spring}
          className="flex flex-col items-center gap-4 text-center mb-12 sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-terracotta-600">
            <span className="h-px w-8 bg-terracotta-300" /> Trusted alongside
          </span>
          <h2 className="font-serif text-balance text-4xl sm:text-5xl leading-[1.05] tracking-tight text-ink-900 max-w-2xl">
            A quiet network of <span className="italic text-sage-600">clinicians, schools,</span> and specialists.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ...spring, delay: 0.1 }}
          className="relative overflow-hidden"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-cream-50 to-transparent z-10"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-cream-50 to-transparent z-10"
          />

          <div className="flex w-max animate-marquee gap-12 sm:gap-16">
            {[...partners, ...partners].map((p, i) => (
              <span
                key={`${p}-${i}`}
                className="shrink-0 font-serif text-2xl sm:text-3xl text-ink-700/60 hover:text-ink-900 transition-colors whitespace-nowrap"
              >
                {p}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ ...spring, delay: 0.15 }}
          className="mt-20 grid gap-6 md:grid-cols-5 items-center"
        >
          <div className="md:col-span-3 relative rounded-[28px] border border-ink-900/8 bg-cream-50 p-8 sm:p-10 shadow-glass">
            <Quote className="absolute -top-4 left-8 h-8 w-8 text-terracotta-500" />
            <p className="font-serif text-[22px] sm:text-[26px] leading-snug text-ink-900 text-balance">
              &ldquo;Namo gave us a vocabulary for what we were already feeling.
              Three months in, our daughter is more regulated — and so are we.&rdquo;
            </p>
            <footer className="mt-6 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-sage-100 font-serif text-sage-700">
                R
              </span>
              <div>
                <p className="text-sm font-medium text-ink-900">Riya & Karan</p>
                <p className="text-[12px] uppercase tracking-[0.16em] text-ink-500">
                  Parents · Bengaluru
                </p>
              </div>
            </footer>
          </div>

          <div className="md:col-span-2 flex flex-col gap-3">
            <p className="text-[12px] uppercase tracking-[0.18em] text-ink-500">
              Aligned with
            </p>
            <ul className="flex flex-wrap gap-2">
              {certifications.map((c) => (
                <li
                  key={c}
                  className="rounded-full border border-ink-900/10 bg-cream-50 px-3.5 py-1.5 text-[12px] font-medium tracking-wide text-ink-700"
                >
                  {c}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-[14px] leading-relaxed text-ink-600">
              Clinicians at Namo carry recognised pediatric credentials and
              follow WHO ECDI norms — supervised quarterly by an external
              developmental pediatrician.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
