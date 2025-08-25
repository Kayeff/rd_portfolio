import { experienceDataT } from "@/types/types";

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

export { experienceData, projects, skills };
