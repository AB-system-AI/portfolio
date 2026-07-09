"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useCardTilt } from "@/hooks/use-card-tilt";
import { springSoft } from "@/lib/motion";
import type { ReactNode } from "react";

interface PremiumCardProps {
  children: ReactNode;
  className?: string;
  enableTilt?: boolean;
  enableGlow?: boolean;
  tiltIntensity?: number;
  onClick?: () => void;
}

export function PremiumCard({
  children,
  className,
  enableTilt = true,
  enableGlow = true,
  tiltIntensity = 6,
  onClick,
}: PremiumCardProps) {
  const { ref, tilt, handleMouseMove, handleMouseLeave, isInteractive } =
    useCardTilt(tiltIntensity);

  if (!isInteractive || !enableTilt) {
    return (
      <div
        onClick={onClick}
        className={cn(
          "premium-card glass-card rounded-2xl transition-[border-color,box-shadow] duration-500",
          className
        )}
      >
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: tilt.rotateX,
        rotateY: tilt.rotateY,
        transformPerspective: 1200,
      }}
      transition={springSoft}
      className={cn(
        "premium-card group/card relative rounded-2xl transition-[box-shadow] duration-500",
        enableGlow && "premium-card-glow",
        className
      )}
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
