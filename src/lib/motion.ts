export const EASE_PREMIUM = [0.21, 0.47, 0.32, 0.98] as const;

export const springSnappy = {
  type: "spring" as const,
  stiffness: 400,
  damping: 30,
};

export const springSoft = {
  type: "spring" as const,
  stiffness: 260,
  damping: 26,
};

export const springGentle = {
  type: "spring" as const,
  stiffness: 200,
  damping: 28,
};

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_PREMIUM },
  },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};
