export type Profile = {
  name: string;
  quickIntroduction: string;
  subIntroduction: string;
  about: About;
  experience: Experience;
  contact: Contact;
  links: Links;
};

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

export enum ExternalName {
  Git = 'Git',
  LinkedIn = 'LinkedIn',
  Twitter = 'Twitter',
  Instagram = 'Instagram',
}

export type Links = { [key in ExternalName]?: URL };
