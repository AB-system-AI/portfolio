"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

interface AnimatedLinkProps extends ComponentProps<typeof Link> {
  underline?: boolean;
}

export function AnimatedLink({
  className,
  children,
  underline = true,
  ...props
}: AnimatedLinkProps) {
  return (
    <Link
      className={cn(
        "group/link relative inline-flex items-center transition-colors hover:text-foreground",
        className
      )}
      {...props}
    >
      {children}
      {underline && (
        <span
          className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-300 ease-out group-hover/link:scale-x-100"
          aria-hidden="true"
        />
      )}
    </Link>
  );
}
