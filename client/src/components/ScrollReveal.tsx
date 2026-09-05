/* Mehansh Platform style: calm, once-only scroll-reveal. Fades + slides up 16px on first viewport entry. No re-trigger. */
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1];

interface ScrollRevealProps {
  children: ReactNode;
  /** Extra delay in seconds (for stagger orchestration). */
  delay?: number;
  /** Custom className on the wrapper div. */
  className?: string;
  /** Override the slide distance in px (default 16). */
  offset?: number;
  /** Optional ID for anchor linking. */
  id?: string;
  /** Optional aria-label for accessibility. */
  "aria-label"?: string;
}

export default function ScrollReveal({
  children,
  delay = 0,
  className,
  offset = 24,
  id,
  "aria-label": ariaLabel,
}: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <motion.div
        id={id}
        aria-label={ariaLabel}
        className={className}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        viewport={{ once: false, margin: "-10%" }}
        transition={{ duration: 0.4, delay }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      id={id}
      aria-label={ariaLabel}
      className={className}
      initial={{ opacity: 0, y: offset }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: offset }}
      viewport={{ once: false, margin: "-10%" }}
      transition={{ duration: 0.5, ease: EASE_OUT, delay }}
    >
      {children}
    </motion.div>
  );
}
