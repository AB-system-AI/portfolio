"use client";

import { motion } from "framer-motion";
import { useMagnetic } from "@/hooks/use-magnetic";
import { springSoft } from "@/lib/motion";
import { Button, type buttonVariants } from "@/components/ui/button";
import { LinkButton } from "@/components/ui/link-button";
import { cn } from "@/lib/utils";
import type { VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";

type MagneticButtonProps = ComponentProps<typeof Button> &
  VariantProps<typeof buttonVariants> & {
    magnetic?: boolean;
  };

export function MagneticButton({
  className,
  magnetic = true,
  children,
  ...props
}: MagneticButtonProps) {
  const { ref, offset, handleMouseMove, handleMouseLeave, isInteractive } =
    useMagnetic(0.2);

  if (!magnetic || !isInteractive) {
    return (
      <Button className={cn("premium-button", className)} {...props}>
        {children}
      </Button>
    );
  }

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: offset.x, y: offset.y }}
      transition={springSoft}
      className="inline-flex"
    >
      <Button className={cn("premium-button", className)} {...props}>
        {children}
      </Button>
    </motion.div>
  );
}

type MagneticLinkButtonProps = ComponentProps<typeof LinkButton> & {
  magnetic?: boolean;
};

export function MagneticLinkButton({
  className,
  magnetic = true,
  children,
  ...props
}: MagneticLinkButtonProps) {
  const { ref, offset, handleMouseMove, handleMouseLeave, isInteractive } =
    useMagnetic(0.2);

  if (!magnetic || !isInteractive) {
    return (
      <LinkButton className={cn("premium-button", className)} {...props}>
        {children}
      </LinkButton>
    );
  }

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: offset.x, y: offset.y }}
      transition={springSoft}
      className="inline-flex"
    >
      <LinkButton className={cn("premium-button", className)} {...props}>
        {children}
      </LinkButton>
    </motion.div>
  );
}
