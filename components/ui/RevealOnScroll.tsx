"use client";

import { motion, type Variants } from "framer-motion";

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: "fade-up" | "fade-down" | "fade" | "slide-left";
  amount?: number;
}

const VARIANTS: Record<string, Variants> = {
  "fade-up": {
    hidden: { opacity: 0, y: 60, filter: "blur(4px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  },
  "fade-down": {
    hidden: { opacity: 0, y: -40, filter: "blur(4px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  },
  "fade": {
    hidden: { opacity: 0, filter: "blur(6px)" },
    visible: { opacity: 1, filter: "blur(0px)" },
  },
  "slide-left": {
    hidden: { opacity: 0, x: 60, filter: "blur(4px)" },
    visible: { opacity: 1, x: 0, filter: "blur(0px)" },
  },
};

export function RevealOnScroll({
  children,
  className,
  delay = 0,
  variant = "fade-up",
  amount = 0.15,
}: RevealOnScrollProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={VARIANTS[variant]}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.76, 0, 0.24, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

/* Versão para múltiplos filhos com stagger automático */
interface RevealGroupProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  amount?: number;
}

const GROUP_CONTAINER: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0, delayChildren: 0 } },
};

export function RevealGroup({
  children,
  className,
  stagger = 0.12,
  delay = 0,
  amount = 0.15,
}: RevealGroupProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/* Item filho para usar dentro de RevealGroup */
export function RevealItem({
  children,
  className,
  variant = "fade-up",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "fade-up" | "fade-down" | "fade" | "slide-left";
}) {
  return (
    <motion.div
      className={className}
      variants={VARIANTS[variant]}
      transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
    >
      {children}
    </motion.div>
  );
}
