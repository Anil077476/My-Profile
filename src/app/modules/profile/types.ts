export type Profile = {
  name: string;
  quickIntroduction: string;
  subIntroduction: string;
  about: About;
  experience: Experiences;
  contact: Contact;
};

export type About = {
  heading: string;
  mainIntroduction: string;
  extendedIntroduction: string;
  techStacks: string[];
};
export type Employment = {
  Role: string;
  company: string;
  heading: string;
  clients: clientExp[];
};
export type clientExp = {
  heading: string;
  moreInfo: string[];
};
export type Experiences = {
  heading: string;
  employments: Employment[];
};
export type Contact = {
  email: string;
};
