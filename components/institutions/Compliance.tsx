"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Lock, Users, Database } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { spring } from "@/lib/utils";

const features = [
  {
    icon: Lock,
    title: "End-to-end encryption",
    body: "Child data encrypted at rest and in transit, with hardware-backed keys per tenant."
  },
  {
    icon: ShieldCheck,
    title: "DHA · MOHAP · NABIDH",
    body: "Reviewed annually; aligned with HIPAA, ISO 27001, and UAE Data Protection Law (PDPL)."
  },
  {
    icon: Users,
    title: "Role-based access",
    body: "Granular controls for program managers, clinicians, social workers, and parents."
  },
  {
    icon: Database,
    title: "Sovereign deployment",
    body: "Single-tenant UAE residency on G42 / Etisalat cloud, with audit-log exports."
  }
];

export function Compliance() {
  return (
    <section id="partner" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Privacy & compliance first"
          title={
            <>
              Built for the{" "}
              <span className="italic text-sage-500">strictest postures</span>.
            </>
          }
          subhead="Namo runs on a modular, secure infrastructure designed for ministries and large organizations across the Gulf — aligned with DHA, MOHAP, and NABIDH requirements."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.article
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ ...spring, delay: i * 0.06 }}
                whileHover={{ y: -4 }}
                className="group relative flex items-start gap-5 rounded-[28px] border border-ink-900/8 bg-cream-50/70 p-7 shadow-glass overflow-hidden"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-sage-50 text-sage-600">
                  <Icon className="h-5 w-5" strokeWidth={1.8} />
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="font-serif text-xl text-ink-900">{f.title}</h3>
                  <p className="text-[15px] leading-relaxed text-ink-600">
                    {f.body}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={spring}
          className="mt-10 grid gap-6 rounded-[32px] bg-ink-900 text-cream-50 p-7 sm:p-10 shadow-soft md:grid-cols-3 items-center"
        >
          <div className="md:col-span-2">
            <p className="text-[11px] uppercase tracking-[0.22em] text-terracotta-200 mb-2">
              Bring Namo to your population
            </p>
            <h3 className="font-serif text-3xl sm:text-[40px] leading-[1.05] text-cream-50">
              Pilot a cohort of 500 children in eight weeks.
            </h3>
            <p className="mt-3 text-[15px] text-cream-100/80 max-w-xl">
              We configure Namo to your privacy posture, regional language mix
              (Arabic, English, plus Hindi/Urdu for expatriate populations),
              and clinical workflow — and report against your KPIs every fortnight.
            </p>
          </div>
          <div className="md:justify-self-end flex flex-col gap-3">
            <a
              href="#contact"
              className="rounded-full bg-cream-50 px-6 py-3 text-sm font-medium text-ink-900 text-center hover:bg-cream-100 transition-colors"
            >
              Talk to our team
            </a>
            <p className="text-[12px] uppercase tracking-[0.16em] text-cream-100/60 text-center">
              partner@namo.ae
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
