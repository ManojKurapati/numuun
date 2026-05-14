"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import React, { useRef } from "react";
import { cn } from "@/lib/utils";
import { spring } from "@/lib/utils";

const MotionLink = motion(Link);

type Props = {
  children: React.ReactNode;
  href?: string;
  className?: string;
  variant?: "primary" | "ghost";
  icon?: boolean;
};

export function ShinyButton({
  children,
  href = "#contact",
  className,
  variant = "primary",
  icon = true
}: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18 });
  const sy = useSpring(y, { stiffness: 200, damping: 18 });
  const tx = useTransform(sx, (v) => `${v}px`);
  const ty = useTransform(sy, (v) => `${v}px`);

  const handleMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * 0.18);
    y.set(relY * 0.25);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  if (variant === "ghost") {
    return (
      <MotionLink
        ref={ref}
        href={href}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        style={{ x: tx, y: ty }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={spring}
        className={cn(
          "group relative inline-flex items-center gap-2 rounded-full border border-ink-900/15 px-6 py-3 text-sm font-medium tracking-wide text-ink-900",
          "hover:border-ink-900/30 hover:bg-cream-100/60 transition-colors",
          className
        )}
      >
        {children}
        {icon && (
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
        )}
      </MotionLink>
    );
  }

  return (
    <MotionLink
      ref={ref}
      href={href}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: tx, y: ty }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={spring}
      className={cn(
        "group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-medium text-cream-50 shadow-glow",
        "shiny animate-shimmer",
        className
      )}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-full"
        style={{
          background:
            "linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.45) 50%, transparent 70%)",
          backgroundSize: "200% 100%",
          animation: "shimmer 3.5s linear infinite"
        }}
      />
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && (
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        )}
      </span>
    </MotionLink>
  );
}
