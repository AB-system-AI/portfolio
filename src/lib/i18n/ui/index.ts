import type { Locale } from "../config";
import { uiAr } from "./ar";
import { uiEn, type UiDictionary } from "./en";

export function getUi(locale: Locale): UiDictionary {
  return locale === "ar" ? uiAr : uiEn;
}

export type { UiDictionary };
