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

export type { experienceObj, experienceDataT };
