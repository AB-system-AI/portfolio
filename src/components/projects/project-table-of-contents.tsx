"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useLocale } from "@/components/providers/locale-provider";
import { PremiumCard } from "@/components/animations/premium-card";

export interface TocItem {
  id: string;
  label: string;
}

interface ProjectTableOfContentsProps {
  items: TocItem[];
}

export function ProjectTableOfContents({ items }: ProjectTableOfContentsProps) {
  const { ui } = useLocale();
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) {
          setActiveId(visible.target.id);
        }
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav aria-label={ui.projects.onThisPage} className="sticky top-28 hidden xl:block">
      <PremiumCard className="p-5" enableTilt={false}>
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {ui.projects.onThisPage}
        </p>
        <ul className="mt-4 space-y-1">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={cn(
                  "block rounded-lg px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  activeId === item.id
                    ? "bg-muted text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </PremiumCard>
    </nav>
  );
}
