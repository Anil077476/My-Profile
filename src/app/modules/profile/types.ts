export type Profile = {
  name: string;
  quickIntroduction: string;
  subIntroduction: string;
  about: About;
  experience: Experience;
  contact: Contact;
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
  link: string;
  notes: string[];
};

export type Experience = {
  heading: string;
  employments: Employment[];
};
export type Contact = {
  email: string;
};
