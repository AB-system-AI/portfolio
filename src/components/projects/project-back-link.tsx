"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useLocale } from "@/components/providers/locale-provider";
import { AnimatedLink } from "@/components/ui/animated-link";
import { cn } from "@/lib/utils";

export function ProjectBackLink() {
  const { ui } = useLocale();

  return (
    <AnimatedLink
      href="/projects"
      className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground"
    >
      <ArrowLeft className="size-4 rtl:rotate-180" />
      {ui.projects.backToAll}
    </AnimatedLink>
  );
}

export function ProjectBackButton({ className }: { className?: string }) {
  const { ui } = useLocale();

  return (
    <Link
      href="/projects"
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/60 px-4 py-2 text-sm font-medium text-muted-foreground backdrop-blur-sm transition-colors hover:text-foreground",
        className
      )}
    >
      <ArrowLeft className="size-4 rtl:rotate-180" />
      {ui.projects.backToAll}
    </Link>
  );
}
