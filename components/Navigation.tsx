"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn, spring } from "@/lib/utils";
import { ShinyButton } from "./ShinyButton";
import { Logo } from "./Logo";

const links = [
  { label: "Home", href: "/" },
  { label: "Milestones", href: "/milestones" },
  { label: "Blog", href: "/blog" }
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ...spring, delay: 0.1 }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:pt-6"
    >
      <nav
        className={cn(
          "flex w-full max-w-6xl items-center justify-between rounded-full px-4 py-2.5 sm:px-6 sm:py-3 transition-all duration-500",
          scrolled ? "glass-strong shadow-glass" : "glass"
        )}
      >
        <Logo />

        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => {
            const active =
              l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    active ? "text-ink-900" : "text-ink-700 hover:text-ink-900"
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      transition={spring}
                      className="absolute inset-0 -z-0 rounded-full bg-cream-200/60"
                    />
                  )}
                  <span className="relative z-10">{l.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:block">
          <ShinyButton href="#subscribe" className="px-5 py-2.5 text-[13px]">
            Join the club
          </ShinyButton>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden grid h-9 w-9 place-items-center rounded-full border border-ink-900/10 text-ink-900"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={spring}
            className="absolute inset-x-4 top-[72px] md:hidden rounded-3xl glass-strong shadow-soft p-4"
          >
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="block rounded-2xl px-4 py-3 text-sm font-medium text-ink-800 hover:bg-cream-100"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <ShinyButton
                  href="#subscribe"
                  className="w-full justify-center"
                >
                  Join the club
                </ShinyButton>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
