"use client";
import { socials } from "@/constants/data";
import AnimatedLink from "./AnimatedLink";

export default function Socials() {
  return (
    <ul className="w-full flex items-center justify-between gap-4">
      {socials.map((link) => (
        <AnimatedLink key={link.type} link={link} />
      ))}
    </ul>
  );
}
