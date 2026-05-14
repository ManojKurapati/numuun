"use client";

import { Languages } from "lucide-react";
import { useDictionary, useLocale, useSetLocale } from "@/lib/i18n/provider";
import { cn } from "@/lib/utils";

export function LocaleSwitcher({ className }: { className?: string }) {
  const locale = useLocale();
  const setLocale = useSetLocale();
  const dict = useDictionary();
  const next = locale === "en" ? "ar" : "en";
  const label = next === "ar" ? dict.common.locale.arabic : dict.common.locale.english;

  return (
    <button
      type="button"
      onClick={() => setLocale(next)}
      aria-label={dict.common.locale.switchTo}
      title={dict.common.locale.switchTo}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-ink-900/10 bg-cream-50/70 px-3 py-1.5 text-[12px] font-medium text-ink-700 hover:text-ink-900 hover:border-ink-900/20 transition-colors",
        className
      )}
    >
      <Languages className="h-3.5 w-3.5" />
      <span>{label}</span>
    </button>
  );
}
