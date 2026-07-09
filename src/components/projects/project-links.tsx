import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/components/icons/brand-icons";
import type { Project } from "@/lib/content/types";
import { ExternalLinkButton } from "@/components/ui/external-link-button";

interface ProjectLinksProps {
  project: Project;
  size?: "sm" | "default" | "lg" | "xl";
  className?: string;
}

export function ProjectLinks({
  project,
  size = "sm",
  className,
}: ProjectLinksProps) {
  if (!project.liveDemo && !project.github) return null;

  return (
    <div className={`flex flex-wrap gap-3 ${className ?? ""}`}>
      {project.liveDemo && (
        <ExternalLinkButton
          href={project.liveDemo}
          size={size}
          className="rounded-full"
          ariaLabel={`View live demo for ${project.title} (opens in new tab)`}
        >
          <ExternalLink className="size-3.5" />
          Live Demo
        </ExternalLinkButton>
      )}
      {project.github && (
        <ExternalLinkButton
          href={project.github}
          variant="outline"
          size={size}
          className="rounded-full"
          ariaLabel={`View ${project.title} source code on GitHub (opens in new tab)`}
        >
          <GitHubIcon className="size-3.5" />
          GitHub
        </ExternalLinkButton>
      )}
    </div>
  );
}
