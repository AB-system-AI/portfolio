import { FolderOpen } from "lucide-react";

interface ProjectsEmptyStateProps {
  message?: string;
}

export function ProjectsEmptyState({
  message = "Projects will appear here once content is added to src/lib/content/projects.ts.",
}: ProjectsEmptyStateProps) {
  return (
    <div className="glass-card flex flex-col items-center justify-center rounded-2xl px-8 py-20 text-center">
      <div className="flex size-14 items-center justify-center rounded-2xl border border-border/50 bg-muted/50">
        <FolderOpen className="size-6 text-muted-foreground" aria-hidden="true" />
      </div>
      <h3 className="font-heading mt-6 text-xl font-semibold tracking-tight">
        No projects yet
      </h3>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
        {message}
      </p>
    </div>
  );
}
