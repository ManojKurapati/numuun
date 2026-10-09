"use client";

import Script from "next/script";
import { motion } from "framer-motion";
import { spring } from "@/lib/utils";

const TYPEFORM_ID = "01M4DHK4WSYSTS0WMNAWZASQXQ";

declare global {
  interface Window {
    tf?: { load?: () => void };
  }
}

export function Survey() {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 pb-20 sm:pb-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -10% 0px" }}
        transition={spring}
        className="relative overflow-hidden rounded-[32px] border border-ink-900/10 bg-sun-50 p-5 sm:p-10"
      >
        <div aria-hidden className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sun-200/60 blur-3xl" />
        <div className="relative mb-8 flex max-w-2xl flex-col gap-3">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-sun-200 px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-ink-800">
            ✨ 2-minute survey
          </span>
          <h2 className="font-serif text-balance text-[34px] sm:text-5xl leading-[1.05] tracking-tight text-ink-900">
            Help us build what you would <span className="italic text-terracotta-500">love.</span>
          </h2>
          <p className="text-[17px] leading-relaxed text-ink-600">
            You’re the expert here. Tell us what would make parenting easier,
            more fun, or a little less confusing — and we’ll build it.
          </p>
        </div>
        <div
          data-tf-live={TYPEFORM_ID}
          className="relative min-h-[560px] sm:min-h-[520px] overflow-hidden rounded-[20px] bg-white"
        />
      </motion.div>
      <Script
        src="https://embed.typeform.com/next/embed.js"
        strategy="afterInteractive"
        onReady={() => window.tf?.load?.()}
      />
    </section>
  );
}
