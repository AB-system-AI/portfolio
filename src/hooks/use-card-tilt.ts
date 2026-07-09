"use client";

import { useCallback, useRef, useState } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface TiltState {
  rotateX: number;
  rotateY: number;
  spotlightX: number;
  spotlightY: number;
}

const INITIAL: TiltState = {
  rotateX: 0,
  rotateY: 0,
  spotlightX: 50,
  spotlightY: 50,
};

export function useCardTilt(intensity = 8) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [tilt, setTilt] = useState<TiltState>(INITIAL);

  const handleMouseMove = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (prefersReducedMotion || !ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      setTilt({
        rotateX: ((y - centerY) / centerY) * -intensity,
        rotateY: ((x - centerX) / centerX) * intensity,
        spotlightX: (x / rect.width) * 100,
        spotlightY: (y / rect.height) * 100,
      });
    },
    [intensity, prefersReducedMotion]
  );

  const handleMouseLeave = useCallback(() => {
    setTilt(INITIAL);
  }, []);

  return {
    ref,
    tilt,
    handleMouseMove,
    handleMouseLeave,
    isInteractive: !prefersReducedMotion,
  };
}
