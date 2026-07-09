"use client";

import { useLocale } from "@/components/providers/locale-provider";

export default function Loading() {
  const { ui } = useLocale();

  return (
    <div className="flex min-h-[60vh] items-center justify-center" role="status" aria-label={ui.common.loading}>
      <div className="flex flex-col items-center gap-4">
        <div className="size-8 animate-spin rounded-full border-2 border-muted border-t-foreground" />
        <p className="text-sm text-muted-foreground">{ui.common.loading}</p>
      </div>
    </div>
  );
}
