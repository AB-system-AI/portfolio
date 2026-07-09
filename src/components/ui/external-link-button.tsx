import type { ReactNode } from "react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { VariantProps } from "class-variance-authority";

interface ExternalLinkButtonProps
  extends VariantProps<typeof buttonVariants> {
  href: string;
  children: ReactNode;
  className?: string;
  ariaLabel: string;
}

export function ExternalLinkButton({
  href,
  children,
  className,
  variant,
  size,
  ariaLabel,
}: ExternalLinkButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={cn(buttonVariants({ variant, size, className }))}
    >
      {children}
    </a>
  );
}
