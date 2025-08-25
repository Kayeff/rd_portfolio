import { downVariant } from "@/animations/variants";
import Heading from "@/components/Heading";
import AnimatedSection from "@/components/AnimatedSection";
import Work from "@/components/Work";
import { experienceData, projects, skills } from "@/constants/data";
import Experience from "@/components/Experience";
import { experienceObj } from "@/types/types";
import Image from "next/image";
import Marquee from "@/components/Marquee";

export default function Home() {
  const para = (
    <>
      Hi, I’m <span className="text-highlight">Ronak</span> — a UI/UX Designer
      turning ideas into clean, user-friendly visuals. Skilled in{" "}
      <span className="text-highlight">Figma</span> and passionate about
      crafting intuitive designs, I’m currently honing my skills as part of a
      creative team at <span className="text-highlight">Corenettech</span>.
    </>
  );

  return (
    <main className="w-full min-h-screen py-20">
      <div className="container">
        <AnimatedSection className="w-full" variant={downVariant}>
          <div className="w-full flex flex-col gap-2.5">
            <Heading
              // text="Good design feels invisible, yet it’s the first thing you notice."
              text="From initial strategy to final outcome."
              className="text-5xl font-medium tracking-tighter"
            />
            <p className="text-2xl tracking-tight overflow-clip">{para}</p>
          </div>

          <div className="flex flex-col gap-5">
            <h1 className="text-xl tracking-tight font-medium">
              Selected Work
            </h1>
            <div className="w-full grid grid-cols-2 gap-2">
              {projects.map((prj, idx) => (
                <Work key={prj.id} prj={prj} />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h1 className="text-xl tracking-tight font-medium">Experience</h1>
            <ul className="w-full flex flex-col gap-5">
              {experienceData.map((item: experienceObj) => (
                <Experience key={item.id} item={item} />
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <h1 className="text-xl tracking-tight font-medium">Skills</h1>
            <Marquee />
          </div>

          <div className="flex flex-col gap-5"></div>
        </AnimatedSection>
      </div>
    </main>
  );
}
