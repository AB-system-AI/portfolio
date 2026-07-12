"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useCardTilt } from "@/hooks/use-card-tilt";
import { springSoft } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import type { ReactNode } from "react";

interface PremiumCardProps {
  children: ReactNode;
  className?: string;
  enableTilt?: boolean;
  enableGlow?: boolean;
  enableLift?: boolean;
  tiltIntensity?: number;
  onClick?: () => void;
}

function PremiumCardComponent({
  children,
  className,
  enableTilt = true,
  enableGlow = true,
  enableLift = true,
  tiltIntensity = 6,
  onClick,
}: PremiumCardProps) {
  const prefersReducedMotion = useReducedMotion();
  const { ref, tilt, handleMouseMove, handleMouseLeave, isInteractive } =
    useCardTilt(tiltIntensity);

  const baseClass = cn(
    "premium-card glass-card rounded-2xl transition-[border-color,box-shadow,transform] duration-300",
    enableGlow && "premium-card-glow",
    className
  );

  const liftHover = enableLift && !prefersReducedMotion
    ? { y: -10, transition: springSoft }
    : undefined;

  if (!isInteractive || !enableTilt || prefersReducedMotion) {
    return (
      <motion.div
        onClick={onClick}
        whileHover={liftHover}
        className={baseClass}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={liftHover}
      style={{
        rotateX: tilt.rotateX,
        rotateY: tilt.rotateY,
        transformPerspective: 1200,
      }}
      transition={springSoft}
      className={cn("premium-card group/card relative rounded-2xl", baseClass)}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover/card:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${tilt.spotlightX}% ${tilt.spotlightY}%, oklch(1 0 0 / 0.06), transparent 40%)`,
        }}
        aria-hidden="true"
      />
      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );
}

export const PremiumCard = memo(PremiumCardComponent);
