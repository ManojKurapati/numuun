"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn, spring } from "@/lib/utils";

type Props = {
  eyebrow: string;
  title: ReactNode;
  subhead?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  subhead,
  align = "left",
  className
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={spring}
      className={cn(
        "flex flex-col gap-4 max-w-2xl mb-12 sm:mb-16",
        align === "center" && "items-center text-center mx-auto",
        className
      )}
    >
      <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-terracotta-500">
        <span className="h-px w-8 bg-terracotta-300" /> {eyebrow}
      </span>
      <h2 className="font-serif text-balance text-4xl sm:text-5xl lg:text-[56px] leading-[1.05] tracking-tight text-ink-900">
        {title}
      </h2>
      {subhead && (
        <p className="text-[17px] leading-relaxed text-ink-600">{subhead}</p>
      )}
    </motion.div>
  );
}
