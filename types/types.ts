type experienceObj = {
  id: string;
  name: string;
  link: string;
  jobType: {
    time: string;
    site: string;
  };
  designation: string;
  companyLocation: string;
  image: string;
  duration: string;
};

type experienceDataT = experienceObj[];

type prjObject = {
  id: string;
  projectTitle: string;
  description: string;
  projectLink: string;
  projectImage: string;
};

type prjArray = prjObject[];

type SkillObj = { id: string; title: string; icon: string };

export type { experienceObj, experienceDataT, prjArray, prjObject, SkillObj };
