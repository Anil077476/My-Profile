import { About, Employment, Experiences, Profile } from './types';

const about: About = {
  heading: 'About me',
  mainIntroduction:
    // prettier-ignore
    'Hello! I\'m Tilak puli, a software engineer who enjoys building things that makes life better.',
  extendedIntroduction:
    ' I develop exceptional websites and web apps that provide responsive and friendly user interfaces with efficient backends.',
  techStacks: ['javascript', 'react'],
};

const TwEmployment: Employment = {
  Role: 'Application Developer',
  company: 'ThoughtWorks',
  heading: 'Internship and client experience',
  clients: [],
};

const experience: Experiences = {
  // prettier-ignore
  heading: 'Where I\'ve Worked',
  employments: [TwEmployment],
};

export const profile: Profile = {
  name: 'Tilak Puli',
  quickIntroduction: 'Passionate Engineer who builds things for fun.',
  about,
  experience,
  contact: { email: 'tilakpuli15@gmail.com' },
};
