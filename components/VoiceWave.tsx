"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  bars?: number;
  className?: string;
  barClassName?: string;
  height?: number;
};

export function VoiceWave({
  bars = 16,
  className,
  barClassName,
  height = 28
}: Props) {
  return (
    <div
      className={cn("flex items-center gap-[3px]", className)}
      style={{ height }}
      aria-hidden
    >
      {Array.from({ length: bars }).map((_, i) => {
        const delay = (i % 6) * 0.07;
        const min = 6 + (i % 3) * 2;
        const max = 14 + ((i * 7) % 10) + height / 2;
        return (
          <motion.span
            key={i}
            className={cn(
              "block w-[3px] rounded-full bg-terracotta-400/90",
              barClassName
            )}
            initial={{ height: min }}
            animate={{ height: [min, max, min] }}
            transition={{
              duration: 1.1 + (i % 4) * 0.18,
              repeat: Infinity,
              ease: "easeInOut",
              delay
            }}
          />
        );
      })}
    </div>
  );
}
