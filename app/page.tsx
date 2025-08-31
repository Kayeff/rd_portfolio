import { downVariant } from "@/animations/variants";
import Heading from "@/components/Heading";
import AnimatedSection from "@/components/AnimatedSection";
import Work from "@/components/Work";
import { experienceData, projects, services } from "@/constants/data";
import Experience from "@/components/Experience";
import { experienceObj } from "@/types/types";
import Marquee from "@/components/Marquee";
import Socials from "@/components/Socials";
import Services from "@/components/Services";

export default function Home() {
  const para = (
    <>
      Hi, I’m Ronak — a UI/UX Designer turning ideas into clean, user-friendly
      visuals. Skilled in <span className="text-highlight">Figma</span> and
      passionate about crafting intuitive designs, I’m currently honing my
      skills as part of a creative team at{" "}
      <span className="text-highlight">Corenettech</span>.
    </>
  );

  return (
    <main className="w-full min-h-screen">
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
            <h1 className="text-xl tracking-tight font-medium">
              Services offered
            </h1>
            <Services />
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

          <div className="flex flex-col gap-5">
            <h1 className="text-xl tracking-tight font-medium">About me</h1>
            <div className="w-full flex flex-col gap-4">
              <p className="tracking-tight text-2xl text-foreground">
                I am a passionate UI/UX Designer based in Surat with over 2
                years of professional experience crafting user-friendly and
                visually appealing digital experiences. My expertise lies in
                understanding user needs and translating them into intuitive
                interfaces that balance functionality with aesthetics. I have
                worked on diverse projects ranging from websites to mobile
                applications, ensuring seamless user journeys and engaging
                visual design.
              </p>
              <p className="tracking-tight text-2xl text-foreground indent-40">
                Skilled in industry-standard design tools such as Figma, Adobe
                XD, Illustrator, and Photoshop, I specialize in creating
                wireframes, prototypes, and high-fidelity designs that align
                with brand identity and business goals. With a strong eye for
                detail, color, and typography, I focus on delivering designs
                that not only look great but also enhance usability. My approach
                combines creativity with problem-solving, ensuring every design
                decision improves the overall user experience.
              </p>
            </div>
            <Socials />
          </div>
        </AnimatedSection>
      </div>
    </main>
  );
}
