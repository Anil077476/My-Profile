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
  techStacks: ['Javascript', 'React', 'Node.js', 'React Native', 'Java', 'ROR', 'AWS']
};

const Gojek: Employment = {
  role: 'Software Engineer',
  company: 'Gojek',
  range: '2019 May - 2019 Dec',
  notes: [
    'Designed and Developed a React Native module to handle BLE communication between Android and IOS devices for an open-source identity management mobile application.',
    'Focused on the Android BLE layer using Kotlin and achieved a significant improvement in transfer speed, reducing transfer time from 40 seconds to approximately 1 second for 150KB of data ',
    'Contributed to the development of a React Native mobile app that enables identity management for 20+ millions of users across different countries and organizations',
    'Trained and mentored junior developers, teaching skills in Clean Code and React Native to improve overall team performance.'
  ],
  link: new URL('https://www.gojek.io/')
};

const GS1: Employment = {
  role: 'Software Engineer',
  company: 'Goldman Sachs - Control Plane',
  range: '2020 Mar - 2020 Dec',
  notes: [
    'Designed and Developed a web dashboard to manage 300+ AWS accounts in multiple regions with a maker-checker flow',
    'Used AWS APIs, SSM documents, and Lambdas to perform customisable complex operations in AWS',
    'Lead UX/UI design and development of React application from scratch using Redux, Jest, React testing library, Ant Design system and axios.',
    'Worked on Spring Boot backend to invoke complex AWS APIs and respond back to UI with response that is paginated and structured',
    'Helped new team members onboard to team and getting up to speed and handle maintenance.'
  ],
  link: new URL('https://www.goldmansachs.com/')
};

const GS2: Employment = {
  role: 'Software Engineer',
  company: 'Goldman Sachs - Analytics',
  range: '2020 Mar - 2022 May',
  notes: [
    'Worked on existing Analytics dashboard which shows real time visualization of 300 thousands of transactions and 2000+ accounts',
    'Helped existing team to improve UX design using design systems, pagination and restructuring pages using React, Redux, High Charts and Material UI.',
    'Also worked on increasing speed of analytics API’s which perform real time computations on 300K+ transactions and accounts. Reduced the response time from over a minute ot less than 10 secs with help of pre-compute and cache the data',
    'Worked on credit team’s Spring boot micro services which are crucial part in the system',
    'Worked on User facing Web application to create screens for analytics in a Mono repo React application'
  ],
  link: new URL('https://www.goldmansachs.com/')
};

const Mosip: Employment = {
  role: 'Senior Software Engineer',
  company: 'Mosip',
  range: '2022 Sep - Present',
  notes: [
    'Developed a web application to collect employee feedback and reviews to calibrate ratings and hikes',
    'Rewrote Node.js backend using Ruby on Rails and migrated from MongoDB to PostgresDB for a cleaner and more stable product',
    'Worked on existing Express JS backend to add new features in parallel to new ROR backend',
    'Contributed to all aspects of the product including creating user stories, building React UI, developing backend features, and running applications in Kubernetes',
    'Traveled to Indonesia to discuss new requirements and provided user support for queries',
    'Improved the Testing coverage from 40% to 90%+ for existing and new backend and frontend repositories'
  ],
  link: new URL('https://mosip.io/')
};

const experience: Experience = {
  // prettier-ignore
  heading: 'Where I\'ve Worked',
  employments: [Mosip, GS2, GS1, Gojek]
};

const links: Links = {
  [ExternalName.Git]: new URL('https://github.com/tilak-puli/My-Profile'),
  [ExternalName.LinkedIn]: new URL('https://www.linkedin.com/in/tilak-puli-a384111a0/'),
  [ExternalName.Instagram]: new URL('https://www.instagram.com/tilakpuli/?hl=en')
};

const myProfile: Project = {
  name: 'My Profile',
  description: 'You are currently looking at it. Website to showcase my skills and experience on the internet.',
  imagePath: './assets/MyProfile.png',
  git: new URL('https://github.com/tilak-puli/My-Profile'),
  link: new URL(window.location.href),
  techStack: ['Angular', 'nodejs']
};

const GullyScoreboard: Project = {
  name: 'Gully Scoreboard',
  description:
    'Cricket scoring app specially made for our gully matches with flexibility to support gully rules. It also show stats from records like highest scores, best batsman etc.',
  imagePath: './assets/GullyScoreboard.png',
  git: new URL('https://github.com/tilak-puli/scoreboard'),
  link: new URL('https://play.google.com/store/apps/details?id=com.colossal_dreams.scoreboard'),
  techStack: ['React Native', 'nodejs']
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
  techStack: ['Javascript', 'nodejs', 'HTML', 'CSS']
};

export const profile: Profile = {
  name: 'Tilak Puli',
  quickIntroduction: 'I create web/mobile experiences.',
  subIntroduction:
    'I\'m a software engineer specializing in building user friendly and highly efficient web and mobile applications.',
  about,
  experience,
  contact: { email: 'tilakpuli15@gmail.com' },
  links,
  projects: [myProfile, GullyScoreboard, CashFlow]
};
