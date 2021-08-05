import { About, Contact, Experience, Links, Project } from '../profile/types';

export class Profile {
  name: string;
  quickIntroduction: string;
  subIntroduction: string;
  about: About;
  experience: Experience;
  contact: Contact;
  links: Links;
  projects: Project[];
}
