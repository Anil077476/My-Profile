import { About, Employment, Experience, ExternalName, Links, Profile, Project } from './types';

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

const myProfile: Project = {
  name: 'My Profile',
  description: 'You are currently looking at it',
  imagePath: '/assets/MyProfile.png',
  git: new URL('https://github.com/tilak-puli/My-Profile'),
  link: new URL(window.location.href),
  techStack: ['Angular', 'nodejs'],
};

const GullyScoreboard: Project = {
  name: 'Gully Scoreboard',
  description: 'Cricket Scoring app.',
  imagePath: '/assets/GullyScoreboard.png',
  git: new URL('https://github.com/tilak-puli/My-Profile'),
  link: new URL('https://play.google.com/store/apps/details?id=com.colossal_dreams.scoreboard'),
  techStack: ['React Native', 'nodejs'],
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
  projects: [myProfile, GullyScoreboard],
};
