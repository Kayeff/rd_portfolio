"use client";
import { fadeInVariant } from "@/animations/variants";
import { experienceObj } from "@/types/types";
import { motion } from "motion/react";

type ExperienceT = {
  item: experienceObj;
};

export default function Experience({ item }: ExperienceT) {
  return (
    <motion.li
      variants={fadeInVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      className="w-full grid grid-cols-2 p-2.5 border-b border-foreground/20"
    >
      <div>
        <p className="text-lg font-medium">{item.designation}</p>
        <p className="">{item.duration}</p>
      </div>
      <div className="flex flex-col">
        <a
          href={item.link}
          target="_blank"
          className="font-medium text-xl tracking-tight hover:underline w-max"
        >
          {item.name}
        </a>
        <p>
          {item.companyLocation} - {item.jobType.site}
        </p>
        <p className="tracking-tight">{item.jobType.time}</p>
      </div>
    </motion.li>
  );
}
