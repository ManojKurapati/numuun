"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode
} from "react";
import type { Dictionary } from "./dictionaries/en";
import en from "./dictionaries/en";
import ar from "./dictionaries/ar";
import { type Locale, localeDir, localeHtmlLang } from "./config";

const LOCALE_STORAGE_KEY = "namo-locale";
const dictionaries: Record<Locale, Dictionary> = { en, ar };

type Ctx = {
  dict: Dictionary;
  locale: Locale;
  setLocale: (next: Locale) => void;
};

const DictionaryContext = createContext<Ctx | null>(null);

export function DictionaryProvider({ children }: { children: ReactNode }) {
  // Always start with "en" on first render to match the SSG'd HTML;
  // localStorage is consulted only after hydration to avoid mismatch.
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY);
      if (stored === "ar" || stored === "en") {
        setLocaleState(stored);
      }
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.lang = localeHtmlLang[locale];
    document.documentElement.dir = localeDir[locale];
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  const value = useMemo<Ctx>(
    () => ({ dict: dictionaries[locale], locale, setLocale }),
    [locale, setLocale]
  );

  return (
    <DictionaryContext.Provider value={value}>
      {children}
    </DictionaryContext.Provider>
  );
}

function useCtx() {
  const ctx = useContext(DictionaryContext);
  if (!ctx) throw new Error("Dictionary context missing");
  return ctx;
}

export function useDictionary() {
  return useCtx().dict;
}

export function useLocale() {
  return useCtx().locale;
}

export function useSetLocale() {
  return useCtx().setLocale;
}

export function useIsRtl() {
  return useCtx().locale === "ar";
}
