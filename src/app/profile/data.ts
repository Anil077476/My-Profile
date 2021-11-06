import { About, Employment, Experience, ExternalName, Links, Project } from './types';
import { Profile } from '../models/profile';

const convertToHtmlLink = (name: string, url: string) => `<a href="${url}">${name}</a>`;

const about: About = {
  heading: 'About me',
  mainIntroduction:
    // prettier-ignore
    'Hello! I\'m Tilak puli, an engineer at core who loves creating stuff that improves life. As a high schooler, I was particularly fascinated by software development after seeing what a single line of code can do at scale (at that time I didn\'t know how much code runs behind it).',
  extendedIntroduction:
    'Fast-forward to career life,and I was fortunate to learn programming fundamentals, teamwork and methodologies like Agile, TDD with the help of great mentors in ' +
    convertToHtmlLink('STEP', 'https://www.thoughtworks.com/STEP') +
    ' Internship. During Internship, along with programming concepts mentors immensely focused on teamwork, soft skills and personal growth. After Internship, I have worked with multiple MNC clients in finance and transportation domain and helped them reach their goal with User-friendly and highly efficient Web applications.',
  techStacks: ['Javascript', 'React', 'Node.js', 'Java', 'ROR', 'AWS'],
};

const Gojek: Employment = {
  role: 'Application Developer',
  company: 'Gojek',
  range: '2019 May - 2019 Dec',
  notes: [
    'Worked on a system to collect employee feedbacks and reviews to calibrate rating and hikes.',
    'Rewrote previous NodeJs back-end using Ruby on Rails and migrated from MongoDB to PostgresDB for cleaner and structured data storage and stable product.',
    'Worked on all layers of the product development like splitting stories from business requirements, building React UI, Backend and setting up application in GCP Kubernetes.',
    'Travelled to Indonesia to discuss about new requirements with product owners and other PM’s and supported users with queries.',
  ],
  link: new URL('https://www.gojek.io/'),
};

const GS: Employment = {
  role: 'Application Developer',
  company: 'Goldman Sachs',
  range: '2020 Mar - Present',
  notes: [
    'Worked on a dashboard to manage AWS resources in 100+ accounts and multiple regions with proper authorization, traceability and resilience.',
    'Took complete responsibility for UX/UI and built React web application from scratch using libraries like Redux, Styled components. Followed TDD to write tests for 90%+ of the code using React testing library',
    'Actively collected feedback from users and team to improve usability',
    'Worked on RESTful Spring boot web service to invoke AWS APIs and store requests and responses in PostgresDB',
    'Helped new Joiners onboard to the team and getting to pace. Also helped other teams move 10000+ SSM documents from existing GitLab based invocations to new dashboard.',
    'Moved to Analytics team to build new UI components and improve performance and UX of existing components.',
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
  git: new URL('https://github.com/tilak-puli/My-Profile'),
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
  quickIntroduction: 'I solve real life problems with software.',
  subIntroduction:
    "I'm a software engineer specializing in building user friendly and highly efficient web applications.",
  about,
  experience,
  contact: { email: 'tilakpuli15@gmail.com' },
  links,
  projects: [myProfile, GullyScoreboard, CashFlow],
};
