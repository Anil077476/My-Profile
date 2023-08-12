import { About, Employment, Experience, ExternalName, Links, Project } from './types';
import { Profile } from '../models/profile';

const convertToHtmlLink = (name: string, url: string) => `<a href="${url}">${name}</a>`;

const about: About = {
  heading: 'About me',
  mainIntroduction:
    // prettier-ignore
    'Hello! I\'m Tilak puli, an engineer at core who loves creating stuff that improves life. As a student, I was particularly fascinated by software development after seeing what a single line of code can do at scale (at that time I didn\'t know how much code runs behind it).',
  extendedIntroduction:
    'Fast-forward to career life,and I was fortunate to learn programming fundamentals, teamwork and methodologies like Agile, TDD with the help of great mentors in ' +
    convertToHtmlLink('STEP', 'https://www.thoughtworks.com/STEP') +
    ' Internship. During Internship, along with programming concepts mentors immensely focused on teamwork, soft skills and personal growth. After Internship, I have worked with multiple MNC clients in finance and transportation domain and helped them reach their goal with User-friendly and highly efficient Web applications.',
  techStacks: ['Javascript', 'React', 'Node.js', 'React Native', 'Java', 'ROR', 'AWS'],
};

const Gojek: Employment = {
  role: 'Software Engineer',
  company: 'Gojek',
  range: '2019 May - 2019 Dec',
  notes: [
    'Developed a system to collect employee feedback and reviews to calibrate ratings and hikes',
    'Rewrote Node.js backend using Ruby on Rails and migrated from MongoDB to PostgresDB for a cleaner and more stable product',
    'Contributed to all aspects ofthe productincluding creating user stories, building React UI, developing backend features, and running applications in Kubernetes',
    'Traveled to Indonesia to discuss new requirements and provided user supportfor queries ',
    'Improved the Testing coverage from 40% to 90%+ for existing and new backend and frontend repositories'
  ],
  link: new URL('https://www.gojek.io/'),
};

const GS: Employment = {
  role: 'Software Engineer',
  company: 'Goldman Sachs',
  range: '2020 Mar - 2022 May',
  notes: [
    'Designed and Developed a dashboard to manage AWS resources with a maker-checker fl ow using AWS APIs, SSM documents, and Lambdas on multiple regions and 300+ accounts',
    'Lead UX/UI design and development of React application from scratch',
    'Actively collected feedback from users and team to improve usability',
    'Worked on Spring Boot backend to invoke AWS APIs and helped new team members onboard to team and getting up to speed',
    'Worked on Analytics dashboard which shows realtime visualization of millions oftransactions and accounts',
    'Helped existing team to improve UX design and speed of analytics web application',
    'Also worked with backend developers to improve API performance and better ways pre-compute and cache the data'
  ],
  link: new URL('https://www.goldmansachs.com/'),
};

const Mosip: Employment = {
  role: 'Senior Software Engineer',
  company: 'Mosip',
  range: '2022 Sep - Present',
  notes: [
    'Designed and Developed a React Native module using Kotlin to handle BLE communication between Android and Apple devices for an open-source mobile app foridentity management, MOSIP',
    'Focused on the Android BLE layer and achieved a signifi cant improvementin transfer speed,reducing transfertime from 40 seconds to approximately 1 second for150KB of data',
    'Contributed to the development of a mobile app that enables identity managementfor millions of people across different countries and organizations',
    'Trained and mentored junior developers and engineers, teaching skills in Clean Code and React Native to improve overallteam performance.'
  ],
  link: new URL('https://mosip.io/'),
};

const experience: Experience = {
  // prettier-ignore
  heading: 'Where I\'ve Worked',
  employments: [Mosip, GS, Gojek],
};

const links: Links = {
  [ExternalName.Git]: new URL('https://github.com/tilak-puli/My-Profile'),
  [ExternalName.LinkedIn]: new URL('https://www.linkedin.com/in/tilak-puli-a384111a0/'),
  [ExternalName.Instagram]: new URL('https://www.instagram.com/tilakpuli/?hl=en'),
};

const myProfile: Project = {
  name: 'My Profile',
  description: 'You are currently looking at it. Website to showcase my skills and experience on the internet.',
  imagePath: './assets/MyProfile.png',
  git: new URL('https://github.com/tilak-puli/My-Profile'),
  link: new URL(window.location.href),
  techStack: ['Angular', 'nodejs'],
};

const GullyScoreboard: Project = {
  name: 'Gully Scoreboard',
  description:
    'Cricket scoring app specially made for our gully matches with flexibility to support gully rules. It also show stats from records like highest scores, best batsman etc.',
  imagePath: './assets/GullyScoreboard.png',
  git: new URL('https://github.com/tilak-puli/scoreboard'),
  link: new URL('https://play.google.com/store/apps/details?id=com.colossal_dreams.scoreboard'),
  techStack: ['React Native', 'nodejs'],
};

const CashFlow: Project = {
  name: 'CashFlow',
  description:
    'Online version of famous board game ' +
    convertToHtmlLink('CashFlow', 'https://www.richdad.com/products/cashflow-classic') +
    '. My team and I have build this game with only JS, HTML and CSS without help of any framework or library to understand the Javascript better and problems with weak data types and no project structure.',
  imagePath: './assets/Cashflow.png',
  git: new URL('https://github.com/STEP-tw/cashflow-punters'),
  link: new URL('https://cashflow-punters.herokuapp.com/'),
  techStack: ['Javascript', 'nodejs', 'HTML', 'CSS'],
};

export const profile: Profile = {
  name: 'Tilak Puli',
  quickIntroduction: 'I create web/mobile experiences.',
  subIntroduction:
    "I'm a software engineer specializing in building user friendly and highly efficient web and mobile applications.",
  about,
  experience,
  contact: { email: 'tilakpuli15@gmail.com' },
  links,
  projects: [myProfile, GullyScoreboard, CashFlow],
};
