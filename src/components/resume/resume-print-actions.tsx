"use client";

import { Button } from "@/components/ui/button";
import { useLocale } from "@/components/providers/locale-provider";

export function ResumePrintActions() {
  const { ui } = useLocale();

  return (
    <div className="resume-toolbar mx-auto mb-8 flex max-w-[210mm] flex-wrap items-center justify-between gap-4 px-4 print:hidden sm:px-0">
      <div>
        <p className="text-sm font-medium">{ui.resume.atsFriendly}</p>
        <p className="text-xs text-muted-foreground">{ui.resume.printHint}</p>
      </div>
      <Button
        type="button"
        onClick={() => window.print()}
        className="rounded-full px-6"
      >
        {ui.resume.printPdf}
      </Button>
    </div>
  );
}
