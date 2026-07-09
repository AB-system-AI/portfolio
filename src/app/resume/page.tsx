import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/data";
import { ResumeDocument } from "@/components/resume/resume-document";
import { ResumePrintActions } from "@/components/resume/resume-print-actions";

export const metadata: Metadata = createPageMetadata(
  "Resume",
  `${siteConfig.name} — ATS-friendly resume for ${siteConfig.title}.`,
  "/resume"
);

export default function ResumePage() {
  return (
    <div className="resume-page bg-neutral-100 py-24 dark:bg-neutral-950 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ResumePrintActions />
        <ResumeDocument />
      </div>
    </div>
  );
}
