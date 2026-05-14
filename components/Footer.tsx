"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";
import { ShinyButton } from "./ShinyButton";
import { useDictionary } from "@/lib/i18n/provider";

export function Footer() {
  const dict = useDictionary();
  const t = dict.footer;
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-ink-900/10 bg-cream-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20">
        <div className="mb-12 sm:mb-14 flex flex-col gap-6 rounded-[32px] border border-ink-900/10 bg-cream-100/60 p-7 sm:p-10 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-xl">
            <p className="text-[11px] uppercase tracking-[0.22em] text-terracotta-500 mb-2">
              {t.banner.eyebrow}
            </p>
            <h3 className="font-serif text-2xl sm:text-3xl leading-tight text-ink-900">
              {t.banner.title}
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-600">
              {t.banner.body}
            </p>
          </div>
          <ShinyButton href="/institutions" variant="ghost">
            {t.banner.cta}
          </ShinyButton>
        </div>

        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5 flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-2 w-fit">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-terracotta-400 text-cream-50 shadow-soft">
                <Sparkles className="h-4 w-4" strokeWidth={2.2} />
              </span>
              <span className="font-serif text-2xl tracking-tight text-ink-900">
                {dict.common.brand}
              </span>
            </Link>
            <p className="max-w-sm text-[15px] leading-relaxed text-ink-600">
              {t.tagline}
            </p>
            <p className="text-[12px] uppercase tracking-[0.18em] text-ink-500">
              {t.contact}
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {t.columns.map((c) => (
              <div key={c.title} className="flex flex-col gap-3">
                <p className="text-[12px] uppercase tracking-[0.18em] text-ink-500">
                  {c.title}
                </p>
                <ul className="flex flex-col gap-2">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="text-[15px] text-ink-800 hover:text-terracotta-500 transition-colors"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-ink-900/10 pt-6 text-[12px] uppercase tracking-[0.16em] text-ink-500">
          <p>{t.copyright.replace("{year}", String(year))}</p>
          <div className="flex gap-6">
            <Link href="#privacy" className="hover:text-ink-900 transition-colors">
              {t.legal.privacy}
            </Link>
            <Link href="#ethics" className="hover:text-ink-900 transition-colors">
              {t.legal.ethics}
            </Link>
            <Link href="#accessibility" className="hover:text-ink-900 transition-colors">
              {t.legal.accessibility}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
