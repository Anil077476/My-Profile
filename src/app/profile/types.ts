export type About = {
  heading: string;
  mainIntroduction: string;
  extendedIntroduction: string;
  techStacks: string[];
};
export type Employment = {
  role: string;
  company: string;
  range: string;
  link: URL;
  notes: string[];
};

export type Experience = {
  heading: string;
  employments: Employment[];
};

export type Contact = {
  email: string;
};

export type Project = {
  name: string;
  imagePath: string;
  description: string;
  techStack: string[];
  git: URL;
  link: URL;
};

export enum ExternalName {
  Git = 'Git',
  LinkedIn = 'LinkedIn',
  Twitter = 'Twitter',
  Instagram = 'Instagram',
}

export type Links = { [key in ExternalName]?: URL };
