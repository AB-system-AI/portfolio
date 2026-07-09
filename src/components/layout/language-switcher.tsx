"use client";

import { Languages } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { LOCALE_LABELS } from "@/lib/i18n/config";
import { useLocale } from "@/components/providers/locale-provider";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale, ui } = useLocale();
  const nextLocale: Locale = locale === "en" ? "ar" : "en";

  return (
    <div className={cn("flex items-center gap-1", className)}>
      <Button
        type="button"
        variant="ghost"
        size="sm"
        onClick={() => setLocale(nextLocale)}
        className="rounded-full px-3 text-xs font-medium"
        aria-label={`${ui.nav.language}: ${LOCALE_LABELS[nextLocale]}`}
      >
        <Languages className="size-3.5" />
        <span>{LOCALE_LABELS[nextLocale]}</span>
      </Button>
    </div>
  );
}
