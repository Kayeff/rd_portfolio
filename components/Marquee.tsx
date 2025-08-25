"use client";
import { skills } from "@/constants/data";
import { SkillObj } from "@/types/types";
import { motion } from "motion/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Marquee() {
  const [width, setWidth] = useState(0);
  const listRef = useRef<HTMLUListElement>(null);

  const upperMarquee = skills;
  const lowerMarquee = [...skills].reverse();

  useEffect(() => {
    if (listRef.current) setWidth(listRef.current?.offsetWidth / 2);
  }, []);

  return (
    <div className="w-full overflow-hidden flex flex-col gap-2 relative">
      <div className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-background to-transparent z-20" />
      <div className="absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-background to-transparent z-20" />
      <motion.ul
        ref={listRef}
        className="flex gap-2 w-fit"
        initial={{ x: "0%" }}
        whileInView={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 15,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {upperMarquee.map((skill, index) => (
          <MarqueeList key={index} skill={skill} />
        ))}
        {width >= 0 &&
          upperMarquee.map((skill, index) => (
            <MarqueeList key={index} skill={skill} />
          ))}
      </motion.ul>

      <motion.ul
        className="flex gap-2 w-fit"
        initial={{ x: "-50%" }}
        whileInView={{ x: ["-50%", "0%"] }}
        transition={{
          duration: 15,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {width >= 0 &&
          lowerMarquee.map((skill, index) => (
            <MarqueeList key={index} skill={skill} />
          ))}
        {lowerMarquee.map((skill, index) => (
          <MarqueeList skill={skill} key={index} />
        ))}
      </motion.ul>
    </div>
  );
}

function MarqueeList({ skill }: { skill: SkillObj }) {
  return (
    <li className="flex items-center justify-center flex-col border border-foreground/20 gap-2.5 rounded-lg h-[125px] w-[200px]">
      <Image
        src={skill.icon}
        height={50}
        width={50}
        alt={`${skill.title}-icon`}
      />
      <p className="font-medium">{skill.title}</p>
    </li>
  );
}
