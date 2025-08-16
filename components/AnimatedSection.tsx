"use client";
import { motion } from "motion/react";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type AnimatedSectionProps = {
  hasHeading?: boolean;
  className?: string;
  variant: any;
  children: ReactNode;
};

export default function AnimatedSection({
  className,
  variant,
  children,
}: AnimatedSectionProps) {
  return (
    <motion.div
      variants={variant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
      className={twMerge("w-full flex flex-col gap-40", className)}
    >
      {children}
    </motion.div>
  );
}
