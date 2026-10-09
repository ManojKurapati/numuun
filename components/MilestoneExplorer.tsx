"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check, Lightbulb, PartyPopper } from "lucide-react";
import { useEffect, useState } from "react";
import { cn, spring } from "@/lib/utils";
import { domains, stages, type DomainKey } from "@/lib/milestones";

const STORAGE_KEY = "numuun-wins";

export function MilestoneExplorer() {
  const [active, setActive] = useState(stages[0].id);
  const [wins, setWins] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const fromHash = window.location.hash.slice(1);
    if (stages.some((s) => s.id === fromHash)) setActive(fromHash);
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setWins(JSON.parse(saved));
    } catch {}
  }, []);

  useEffect(() => {
    // Keep the selected age pill in view on narrow screens without scrolling the page.
    const tab = document.getElementById(`tab-${active}`);
    const strip = tab?.closest(".overflow-x-auto");
    if (tab && strip) {
      strip.scrollTo({
        left: tab.offsetLeft - strip.clientWidth / 2 + tab.clientWidth / 2,
        behavior: "smooth"
      });
    }
  }, [active]);

  function choose(id: string) {
    setActive(id);
    history.replaceState(null, "", `#${id}`);
  }

  function toggle(key: string) {
    setWins((prev) => {
      const next = { ...prev, [key]: !prev[key] };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {}
      return next;
    });
  }

  const stage = stages.find((s) => s.id === active)!;
  const keys = (Object.keys(domains) as DomainKey[]).flatMap((d) =>
    stage.milestones[d].map((_, i) => `${stage.id}:${d}:${i}`)
  );
  const done = keys.filter((k) => wins[k]).length;

  return (
    <div className="flex flex-col gap-8">
      <div className="relative -mx-4 overflow-x-auto px-4 pb-2 [scrollbar-width:none] [mask-image:linear-gradient(to_right,black_85%,transparent)] sm:mx-0 sm:px-0 xl:[mask-image:none]">
        <div role="tablist" aria-label="Child's age" className="flex w-max gap-2">
          {stages.map((s) => (
            <button
              key={s.id}
              id={`tab-${s.id}`}
              role="tab"
              aria-selected={s.id === active}
              onClick={() => choose(s.id)}
              className={cn(
                "relative rounded-full px-4 py-2.5 text-sm font-medium transition-colors",
                s.id === active ? "text-cream-50" : "text-ink-700 hover:text-ink-900 bg-cream-100"
              )}
            >
              {s.id === active && (
                <motion.span
                  layoutId="age-pill"
                  transition={spring}
                  className="absolute inset-0 rounded-full bg-ink-900"
                />
              )}
              <span className="relative z-10 whitespace-nowrap">{s.age}</span>
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={stage.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={spring}
          className="flex flex-col gap-6"
        >
          <div className="flex flex-col gap-5 rounded-[28px] bg-terracotta-400 p-6 sm:p-10 text-cream-50 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex flex-col gap-2">
              <p className="text-[12px] uppercase tracking-[0.2em] text-cream-100">
                Around {stage.age}
              </p>
              <h2 className="font-serif text-4xl sm:text-5xl tracking-tight">
                {stage.nickname}
              </h2>
              <p className="max-w-lg text-[17px] leading-relaxed text-cream-100">
                {stage.vibe}
              </p>
            </div>
            <div className="flex items-center gap-3 rounded-2xl bg-cream-50/15 px-4 py-3">
              <PartyPopper className={cn("h-6 w-6", done > 0 && "animate-wiggle")} />
              <div>
                <p className="font-serif text-2xl leading-none">
                  {done}/{keys.length}
                </p>
                <p className="text-[12px] uppercase tracking-[0.14em] text-cream-100">
                  wins spotted
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {(Object.keys(domains) as DomainKey[]).map((d) => (
              <div
                key={d}
                className="flex flex-col gap-4 rounded-[24px] border border-ink-900/10 bg-white/70 p-6"
              >
                <div className="flex items-center gap-3">
                  <span className={cn("grid h-10 w-10 place-items-center rounded-full text-lg", domains[d].tint)}>
                    {domains[d].emoji}
                  </span>
                  <h3 className="font-serif text-xl text-ink-900">{domains[d].label}</h3>
                </div>
                <ul className="flex flex-col gap-2">
                  {stage.milestones[d].map((m, i) => {
                    const key = `${stage.id}:${d}:${i}`;
                    const checked = !!wins[key];
                    return (
                      <li key={key}>
                        <button
                          onClick={() => toggle(key)}
                          aria-pressed={checked}
                          className={cn(
                            "flex w-full items-start gap-3 rounded-xl px-3 py-2 text-left text-[15px] leading-snug transition-colors",
                            checked ? "bg-sage-50 text-sage-700" : "text-ink-700 hover:bg-cream-100"
                          )}
                        >
                          <span
                            className={cn(
                              "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md border transition-colors",
                              checked ? "border-sage-500 bg-sage-500 text-cream-50" : "border-ink-900/20"
                            )}
                          >
                            {checked && <Check className="h-3.5 w-3.5" strokeWidth={3} />}
                          </span>
                          {m}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex items-start gap-4 rounded-[24px] bg-sun-100 p-6">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-sun-300 text-ink-900">
              <Lightbulb className="h-5 w-5" />
            </span>
            <div>
              <p className="text-[12px] uppercase tracking-[0.18em] text-ink-600">Try this today</p>
              <p className="mt-1 text-[16px] leading-relaxed text-ink-800">{stage.play}</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
