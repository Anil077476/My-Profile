import { About, Employment, Experience, ExternalName, Links, Profile, Project } from './types';

const convertToHtmlLink = (name: string, url: string) => `<a href="${url}">${name}</a>`;

const about: About = {
  heading: 'About me',
  mainIntroduction:
    // prettier-ignore
    'Hello! I\'m Tilak puli, an engineer at core who loves creating stuff that improves life. As a high schooler, I was particularly fascinated by software development after seeing what a single line of code can do at scale (at that time I didn\'t know how much code runs behind it).',
  extendedIntroduction:
    'Fast-forward to career life,and I was fortunate to learn pure programming fundamentals and about my self with help of great mentors in ' +
    convertToHtmlLink('STEP', 'https://www.thoughtworks.com/STEP') +
    'Internship. After Internship, I have worked with multiple clients and helped them reach their goal with User-friendly and highly efficient Web applications.',
  techStacks: ['Javascript', 'React', 'Node.js', 'Java', 'ROR', 'AWS'],
};

const Gojek: Employment = {
  role: 'Application Developer',
  company: 'Gojek',
  range: '2019 May - 2019 Dec',
  notes: [
    "Worked on a system to collect employee's feedback and reviews to calibrate rating and hike.",
    'Wrote previous NodeJs back-end using Ruby on Rails and migrated from MongoDB to PostgresDB for cleaner and stable product.',
    'Worked on all layers of the product development like split stories, building React UI, Backend and setting up application in Kubernetes.',
    'Supported users with queries and travelled to Indonesia to discuss new requirements.',
  ],
  link: new URL('https://www.gojek.io/'),
};

const GS: Employment = {
  role: 'Application Developer',
  company: 'Goldman Sachs',
  range: '2020 Mar - Present',
  notes: [
    'Worked on a dashboard to manage AWS resources in 100+ accounts and regions with authorization, auditability and resilience.',
    'Using this dashboard, We have onBoarded 10,000+ AWS SSM documents from previous gitlab or direct invocations.',
    "Took complete responsibility for UX/UI and built React web application from scratch and also worked on backend to build respective API's.",
  ],
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
  description: 'You are currently looking at it. A site to showcase my skills and experience on internet.',
  imagePath: '/assets/MyProfile.png',
  git: new URL('https://github.com/tilak-puli/My-Profile'),
  link: new URL(window.location.href),
  techStack: ['Angular', 'nodejs'],
};

const GullyScoreboard: Project = {
  name: 'Gully Scoreboard',
  description:
    'Cricket scoring app specifically made for gully matches with flexibility to support our gully rules. It also stats from the records like highest scores, best batsman etc',
  imagePath: '/assets/GullyScoreboard.png',
  git: new URL('https://github.com/tilak-puli/My-Profile'),
  link: new URL('https://play.google.com/store/apps/details?id=com.colossal_dreams.scoreboard'),
  techStack: ['React Native', 'nodejs'],
};
const CashFlow: Project = {
  name: 'CashFlow',
  description:
    'Online version of famous board game ' +
    convertToHtmlLink('CashFlow', 'https://www.richdad.com/products/cashflow-classic') +
    '. My team and I have build this whole game with only JS, HTML and CSS without help of any framework or library to understand the Javascript better and problems with weak data types and no structure.',
  imagePath: '/assets/Cashflow.png',
  git: new URL('https://github.com/STEP-tw/cashflow-punters'),
  link: new URL('https://cashflow-punters.herokuapp.com/'),
  techStack: ['Javascript', 'nodejs', 'HTML', 'CSS'],
};

export const profile: Profile = {
  name: 'Tilak Puli',
  quickIntroduction: 'I solve real life problems with software.',
  subIntroduction:
    "I'm a software engineer specializing in building user friendly and highly efficient web applications.",
  about,
  experience,
  contact: { email: 'tilakpuli15@gmail.com' },
  links,
  projects: [myProfile, GullyScoreboard, CashFlow],
};
