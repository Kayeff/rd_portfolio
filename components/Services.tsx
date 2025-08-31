"use client";
import { services } from "@/constants/data";
import { twMerge } from "tailwind-merge";

export default function Services() {
  return (
    <ul className="w-full grid grid-cols-10 gap-2.5">
      {services.map((service) => (
        <li
          key={service.title}
          className={twMerge(
            "w-full rounded-xl p-5 flex flex-col gap-2 border border-foreground/20 group",
            service.className
          )}
        >
          <p className="w-full flex items-center justify-between group-hover:text-highlight duration-300">
            <span className="text-3xl tracking-tighter">{service.title}</span>
            <span className="group-hover:rotate-90 duration-300">
              <service.icon />
            </span>
          </p>
          <p className="text-foreground/70 tracking-tight">{service.para}</p>
        </li>
      ))}
    </ul>
  );
}
