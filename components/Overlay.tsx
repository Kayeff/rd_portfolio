"use client";
import { motion } from "motion/react";

export default function Overlay() {
  return (
    <div className="w-full grid grid-cols-6 absolute top-0 left-0 h-full pointer-events-none">
      {Array.from({ length: 6 }).map((_, item) => (
        <motion.div
          key={item}
          initial={{ y: "0%" }}
          whileInView={{ y: "100%" }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.2 * item,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="bg-foreground w-full will-change-transform"
        />
      ))}
    </div>
  );
}
