import { experienceDataT } from "@/types/types";
import { Blend, Citrus, Frame, Image } from "lucide-react";

const experienceData: experienceDataT = [
  {
    id: "company2",
    name: "Corenet Tech",
    link: "https://corenettechltd.com/",
    jobType: {
      time: "Full Time",
      site: "On-site",
    },
    designation: "UI/UX Designer",
    companyLocation: "Surat, India",
    image: "/images/company2.jpeg",
    duration: "2024-Present",
  },
  {
    id: "company1",
    name: "Way To Code Technologies LLP",
    link: "https://www.waytocode.in/",
    jobType: {
      time: "Full Time",
      site: "On-site",
    },
    designation: "UI/UX Designer",
    companyLocation: "India",
    image: "/images/company1.jpeg",
    duration: "2023-2024",
  },
];

const projects = [
  {
    id: "project1",
    projectTitle: "Project 1",
    description: "",
    projectLink: "",
    projectImage: "/images/background.avif",
  },
  {
    id: "project2",
    projectTitle: "Project 2",
    description: "",
    projectLink: "",
    projectImage: "/images/work.avif",
  },
  {
    id: "project3",
    projectTitle: "Project 3",
    description: "",
    projectLink: "",
    projectImage: "/images/background.jpg",
  },
];

const skills = [
  { id: "skill1", title: "HTML", icon: "/html.svg" },
  { id: "skill2", title: "CSS", icon: "/css.svg" },
  { id: "skill3", title: "JavaScript", icon: "/javascript.svg" },
  { id: "skill4", title: "Python", icon: "/python.svg" },
  { id: "skill5", title: "Adobe XD", icon: "/adobeXD.svg" },
  { id: "skill6", title: "Illustrator", icon: "/illustrator.svg" },
  { id: "skill7", title: "Photoshop", icon: "/photoshop.svg" },
  { id: "skill8", title: "Wordpress", icon: "/wordpress.svg" },
  { id: "skill9", title: "Figma", icon: "/figma.svg" },
];

const socials = [
  { type: "Gmail", icon: "/gmail.svg", href: "" },
  { type: "Instagram", icon: "/instagram.svg", href: "" },
  { type: "Linked In", icon: "/linkedin.svg", href: "" },
  { type: "Facebook", icon: "/facebook.svg", href: "" },
];

const services = [
  {
    title: "UX & Interface design",
    className: "col-span-6",
    icon: Frame,
    para: "Every element is thoughtfully crafted to improve usability, accessibility, and overall user satisfaction.",
  },
  {
    title: "Creative Design & Strategy",
    className: "col-span-4",
    icon: Blend,
    para: "Great design starts with strategy. I help brands shape their digital identity through creative concepts, design thinking, and user-focused strategies that align with business goals.",
  },
  {
    title: "Image Editing",
    className: "col-span-4",
    icon: Image,
    para: "From refining visuals to creating eye-catching assets, I provide professional image editing that enhances product appeal and ensures consistency across digital platforms.",
  },
  {
    title: "Graphics",
    className: "col-span-6",
    icon: Citrus,
    para: "Visual storytelling is key in digital products. I create engaging graphics, icons, and illustrations that elevate user interfaces and strengthen brand presence.",
  },
];

export { experienceData, projects, skills, socials, services };
