import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { getLocale } from "@/lib/i18n/get-locale";
import { getSiteConfig } from "@/lib/i18n/localized-content";
import { getUi } from "@/lib/i18n/ui";
import { ResumeDocument } from "@/components/resume/resume-document";
import { ResumePrintActions } from "@/components/resume/resume-print-actions";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const siteConfig = getSiteConfig(locale);
  const ui = getUi(locale);

  return createPageMetadata(
    ui.metadata.resumeTitle,
    `${siteConfig.name} — ${ui.resume.pageDescription}`,
    "/resume"
  );
}

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
