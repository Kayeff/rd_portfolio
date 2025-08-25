import { prjObject } from "@/types/types";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";

interface WorkProps {
  prj: prjObject;
}

export default function Work({ prj }: WorkProps) {
  return (
    <div className="rounded-3xl border border-foreground/5 relative h-[50vh] overflow-clip group hover:border-foreground duration-500">
      <Image
        src={prj.projectImage}
        height={1560}
        width={1170}
        alt={`${prj.projectTitle}-image`}
        className="w-full h-full object-top object-cover rounded-2xl opacity-85"
        loading="lazy"
      />
      <div className="group-hover:bottom-0 -bottom-20 w-full h-20 bg-foreground absolute left-0 duration-500 flex items-center justify-between p-5 will-change-transform">
        <p className="text-background font-medium text-2xl tracking-tighter">
          {prj.projectTitle}
        </p>
        <a
          href="/"
          className="size-10 items-center justify-center bg-background text-foreground rounded-md flex border border-foreground/10"
        >
          <MoveUpRight />
        </a>
      </div>
    </div>
  );
}
