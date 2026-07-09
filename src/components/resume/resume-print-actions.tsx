"use client";

import { Button } from "@/components/ui/button";

export function ResumePrintActions() {
  return (
    <div className="resume-toolbar mx-auto mb-8 flex max-w-[210mm] flex-wrap items-center justify-between gap-4 px-4 print:hidden sm:px-0">
      <div>
        <p className="text-sm font-medium">ATS-friendly resume</p>
        <p className="text-xs text-muted-foreground">
          Optimized for printing and PDF export. Use Print → Save as PDF.
        </p>
      </div>
      <Button
        type="button"
        onClick={() => window.print()}
        className="rounded-full px-6"
      >
        Print / Save PDF
      </Button>
    </div>
  );
}
