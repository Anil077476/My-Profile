import { About, Employment, Experience, ExternalName, Links, Profile } from './types';

const about: About = {
  heading: 'About me',
  mainIntroduction:
    // prettier-ignore
    'Hello! I\'m Tilak puli, a software engineer who enjoys building things that makes life better.',
  extendedIntroduction:
    'I develop exceptional websites and web apps that provide responsive and friendly user interfaces with efficient backends.',
  techStacks: ['Javascript', 'React', 'Node.js', 'Java', 'ROR', 'AWS'],
};

const Gojek: Employment = {
  role: 'Application Developer',
  company: 'Gojek',
  range: '2019 May - 2019 Dec',
  notes: ['Some random'],
  link: new URL('https://www.gojek.io/'),
};

const GS: Employment = {
  role: 'Application Developer',
  company: 'Goldman Sachs',
  range: '2020 Mar - Present',
  notes: ['Some random'],
  link: new URL('https://www.goldmansachs.com/'),
};

const experience: Experience = {
  // prettier-ignore
  heading: 'Where I\'ve Worked',
  employments: [GS, Gojek],
};

const links: Links = {
  [ExternalName.Git]: new URL('https://github.com/tilak-puli/My-Profile'),
  [ExternalName.LinkedIn]: new URL('https://www.linkedin.com/in/tilak-puli-a384111a0/'),
};

export const profile: Profile = {
  name: 'Tilak Puli',
  quickIntroduction: 'I build solutions for real life problems.',
  subIntroduction:
    "I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products at Upstatement.",
  about,
  experience,
  contact: { email: 'tilakpuli15@gmail.com' },
  links,
};
