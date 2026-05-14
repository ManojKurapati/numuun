import en, { type Dictionary } from "./dictionaries/en";
import ar from "./dictionaries/ar";
import { defaultLocale, type Locale } from "./config";

const dictionaries: Record<Locale, Dictionary> = { en, ar };

export function getDictionary(locale: Locale = defaultLocale): Dictionary {
  return dictionaries[locale];
}

export type { Dictionary };
