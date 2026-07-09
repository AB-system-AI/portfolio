"use client";

import { useLocale } from "@/components/providers/locale-provider";

export function SkipLink() {
  const { ui } = useLocale();

  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:start-4 focus:z-[200] focus:rounded-lg focus:bg-foreground focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-background focus:outline-none"
    >
      {ui.common.skipToContent}
    </a>
  );
}
