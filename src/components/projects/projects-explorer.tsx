"use client";

import { useMemo, useState } from "react";
import type { ProjectCategory } from "@/lib/content/types";
import {
  formatProjectCategory,
  sortProjects,
  type ProjectSortOption,
} from "@/lib/content/project-utils";
import { ProjectCard } from "@/components/projects/project-card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useLocale } from "@/components/providers/locale-provider";
import { cn } from "@/lib/utils";

const CATEGORIES: Array<ProjectCategory | "all"> = [
  "all",
  "web-app",
  "saas",
  "e-commerce",
  "open-source",
  "design",
  "other",
];

interface ProjectsExplorerProps {
  showFeatured?: boolean;
  showPinned?: boolean;
}

export function ProjectsExplorer({
  showFeatured = true,
  showPinned = true,
}: ProjectsExplorerProps) {
  const { projects, locale, ui } = useLocale();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<ProjectCategory | "all">("all");
  const [sort, setSort] = useState<ProjectSortOption>("newest");

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    const items = projects.filter((project) => {
      const matchesCategory =
        category === "all" ? true : project.category === category;
      const matchesQuery =
        normalized.length === 0 ||
        [
          project.title,
          project.shortDescription,
          project.technologies.join(" "),
          formatProjectCategory(project.category, locale),
        ]
          .join(" ")
          .toLowerCase()
          .includes(normalized);

      const hideFromMainGrid =
        !query &&
        category === "all" &&
        project.isClientProject;

      return matchesCategory && matchesQuery && !hideFromMainGrid;
    });

    return sortProjects(items, sort);
  }, [category, locale, projects, query, sort]);

  const featured = projects.filter(
    (project) => project.featured && !project.pinned
  );
  const pinned = projects
    .filter((project) => project.pinned)
    .sort(
      (a, b) =>
        (a.featuredOrder ?? Number.MAX_SAFE_INTEGER) -
        (b.featuredOrder ?? Number.MAX_SAFE_INTEGER)
    );
  const mainProjects =
    category === "all" && !query
      ? filtered.filter((project) => !project.pinned && !project.featured)
      : filtered;

  return (
    <div className="space-y-16">
      <div className="glass-card rounded-2xl p-4 sm:p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={ui.projects.searchPlaceholder}
            aria-label={ui.projects.searchPlaceholder}
            className="h-11 rounded-full bg-background/60 lg:max-w-md"
          />
          <label className="flex items-center gap-2 text-sm text-muted-foreground">
            {ui.projects.sort}
            <select
              value={sort}
              onChange={(event) => setSort(event.target.value as ProjectSortOption)}
              className="h-10 rounded-full border border-border bg-background px-4 text-sm text-foreground outline-none"
              aria-label={ui.projects.sort}
            >
              <option value="newest">{ui.projects.sortNewest}</option>
              <option value="oldest">{ui.projects.sortOldest}</option>
              <option value="title">{ui.projects.sortTitle}</option>
            </select>
          </label>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {CATEGORIES.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={cn(
                "rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
                category === item
                  ? "border-foreground bg-foreground text-background"
                  : "border-border bg-background/50 text-muted-foreground hover:text-foreground"
              )}
            >
              {item === "all" ? ui.projects.all : formatProjectCategory(item, locale)}
            </button>
          ))}
        </div>
      </div>

      {showPinned && pinned.length > 0 && (
        <section>
          <div className="mb-6 flex items-center gap-2">
            <h2 className="text-sm font-semibold uppercase tracking-wider">
              {ui.projects.pinned}
            </h2>
            <Badge variant="secondary" className="rounded-full text-[10px]">
              {pinned.length}
            </Badge>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {pinned.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </section>
      )}

      {showFeatured && featured.length > 0 && category === "all" && !query && (
        <section>
          <div className="mb-6 flex items-center gap-2">
            <h2 className="text-sm font-semibold uppercase tracking-wider">
              {ui.projects.featured}
            </h2>
            <Badge variant="secondary" className="rounded-full text-[10px]">
              {featured.length}
            </Badge>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {featured.map((project, index) => (
              <ProjectCard key={`featured-${project.slug}`} project={project} index={index} />
            ))}
          </div>
        </section>
      )}

      <section>
        <div className="mb-6 flex items-center justify-between gap-4">
          <h2 className="text-sm font-semibold uppercase tracking-wider">
            {query || category !== "all" ? ui.projects.resultsHeading : ui.projects.moreProjects}
          </h2>
          <span className="text-xs text-muted-foreground">
            {mainProjects.length}{" "}
            {mainProjects.length === 1 ? ui.projects.projectCount : ui.projects.projectsCount}
          </span>
        </div>
        {mainProjects.length === 0 ? (
          <div className="glass-card rounded-2xl px-8 py-16 text-center text-sm text-muted-foreground">
            {ui.projects.noResults}
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2">
            {mainProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
