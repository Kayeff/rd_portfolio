"use client";
import { SocialLinkObj } from "@/types/types";
import { motion, useAnimationControls } from "motion/react";

export default function AnimatedLink({ link }: { link: SocialLinkObj }) {
  const controls = useAnimationControls();

  async function handleMouseEnter() {
    await controls.start({
      scaleX: 1,
      transformOrigin: "left",
      transition: { duration: 0.4, ease: "easeInOut" },
    });
  }

  async function handleMouseLeave() {
    await controls.start({
      scaleX: 1,
      transformOrigin: "left",
      transition: { duration: 0.2 },
    });
    await controls.start({
      scaleX: 0,
      transformOrigin: "right",
      transition: { duration: 0.4, ease: "easeInOut" },
    });
  }

  return (
    <span
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="font-medium relative list-none"
    >
      <a href={link.href}>{link.type}</a>

      <motion.span
        initial={{ scaleX: 0, transformOrigin: "left" }}
        animate={controls}
        className="absolute block left-0 bottom-0 h-[1.5px] bg-foreground w-full"
      />
    </span>
  );
}
