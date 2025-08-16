"use client";
import { motion } from "motion/react";

function splitText(text: string, variants: any) {
  return text.split("").map((letter, index) =>
    letter === " " ? (
      <span key={index}>&nbsp;</span>
    ) : (
      <motion.span
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{
          duration: 1,
          delay: 0.01 * index,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        key={index}
        className="inline-block"
      >
        {letter}
      </motion.span>
    )
  );
}

export { splitText };
