import { Profile } from '../app/models/profile';
import { About, Employment, Experience, ExternalName, Links, Project } from '../app/profile/types';

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
  techStacks: [
    'Javascript',
    'Typescript',
    'React',
    'Node.js',
    'NestJs',
    'AWS',
    'Java',
    'Kotlin',
    'Spring Boot',
    'MongoDB',
    'PostgresDB',
    'React Native',
    'CrewAI',
    'LangChain',
    'Google Gemini',
  ],
};

const Travelopia: Employment = {
  role: 'Senior Product Engineer',
  company: 'Travelopia',
  range: '2023 Dec - Present',
  notes: [
    'Developed a secure payment portal enabling multiple payment sources like Card and ACH',
    'Built itinerary creation portal integrating third-party services like Amadeus and iVector for hotels, flights and other services',
    'Led development of user-facing travel proposals to present trips clearly and improve conversion',
    'Implemented features like Google Maps integration and LLM-powered itinerary recommendations and explanations',
    'Introduced vibe coding practices and onboarded the team to the AI-powered Cursor editor to improve speed and quality',
    'Tech Stack Used: React, NestJs and AWS',
  ],
  link: new URL('https://www.travelopia.com/'),
};

const Gojek: Employment = {
  role: 'Software Consultant',
  company: 'Thoughtworks - Gojek',
  range: '2019 May - 2019 Dec',
  notes: [
    'Developed an employee feedback and reviews web application, optimizing ratings and hikes',
    'Migrated Node.js backend to Ruby on Rails, improving stability and moving data from MongoDB to PostgresDB',
    'Expanded Express.js backend and introduced a parallel Ruby on Rails backend',
    'Managed end-to-end product development: user stories, React UI, backend features, and Kubernetes deployment',
    'Traveled to Indonesia for requirements discussions and user support',
    'Improved testing coverage from 40% to 90%+ across backend and frontend repositories',
    'Tech Stack Used: React, NodeJs, Express, Ruby on Rails, MongoDB, GCP',
  ],
  link: new URL('https://www.gojek.io/'),
};

const GS1: Employment = {
  role: 'Software Engineer',
  company: 'Thoughtworks - Goldman Sachs - Control Plane',
  range: '2020 Mar - 2020 Dec',
  notes: [
    'Designed and Developed a web dashboard to manage 300+ AWS accounts in multiple regions with a maker-checker flow',
    'Used AWS APIs, SSM documents, and Lambdas to perform customisable complex operations in AWS',
    'Lead UX/UI design and development of React application from scratch using Redux, Jest, React testing library, Ant Design system and axios.',
    'Worked on Spring Boot backend to invoke complex AWS APIs and respond back to UI with response that is paginated and structured',
    'Helped new team members onboard to team and getting up to speed and handle maintenance.',
  ],
  link: new URL('https://www.goldmansachs.com/'),
};

const GS2: Employment = {
  role: 'Software Engineer',
  company: 'Thoughtworks - Goldman Sachs - Analytics',
  range: '2021 Jan - 2022 May',
  notes: [
    'Worked on existing Analytics dashboard which shows real time visualization of 300 thousands of transactions and 2000+ accounts',
    'Helped existing team to improve UX design using design systems, pagination and restructuring pages using React, Redux, High Charts and Material UI.',
    'Also worked on increasing speed of analytics API’s which perform real time computations on 300K+ transactions and accounts. Reduced the response time from over a minute to less than 10 seconds with help of pre-compute and cache the data',
    'Helped team improve Postgres database design to improve efficiency and processing time',
    'Worked on credit team’s Spring boot micro services which are crucial part in the system',
    'Worked on User facing Web application to create screens for analytics in a Mono repo React application',
  ],
  link: new URL('https://www.goldmansachs.com/'),
};

const Mosip: Employment = {
  role: 'Senior Software Engineer',
  company: 'Thoughtworks - Mosip',
  range: '2022 Sep - 2023 Dec',
  notes: [
    'Developed a high-performance React Native module for BLE communication in an identity management app',
    'Optimized Android BLE layer using Kotlin, reducing transfer time from 40 seconds to ~1 second for 150KB',
    'Contributed to a React Native app used by 20M+ users for secure identity management',
    'Designed and developed open-source React Native SDKs for mobile security, including API design, docs and testing',
    'Mentored junior developers in Clean Code principles and React Native best practices',
    'Tech Stack Used: React Native, Kotlin, Android, Bluetooth Low Energy',
  ],
  link: new URL('https://mosip.io/'),
};

const experience: Experience = {
  // prettier-ignore
  heading: 'Where I\'ve Worked',
  employments: [Travelopia, Mosip, GS2, GS1, Gojek],
};

const links: Links = {
  [ExternalName.Git]: new URL('https://github.com/tilak-puli/My-Profile'),
  [ExternalName.LinkedIn]: new URL('https://www.linkedin.com/in/tilak-puli-a384111a0/'),
  [ExternalName.Instagram]: new URL('https://www.instagram.com/tilakpuli/?hl=en'),
};

const myProfile: Project = {
  name: 'My Profile',
  description: 'You are currently looking at it. Website to showcase my skills and experience on the internet.',
  imagePath: './assets/pet-projects/MyProfile.png',
  git: new URL('https://github.com/tilak-puli/My-Profile'),
  link: new URL('https://tilakpuli.site'),
  techStack: ['Angular', 'nodejs'],
};

const CricRecords: Project = {
  name: 'Cricket Records',
  description: 'Website to view records and stats of cricket matches.',
  imagePath: './assets/pet-projects/CricRecords.png',
  git: new URL('https://github.com/tilak-puli/step-cric-records'),
  link: new URL('https://step-cric-records.vercel.app/'),
  techStack: ['NextJs', 'Vercel', 'Chakra UI'],
};

const GullyScoreboard: Project = {
  name: 'Gully Scoreboard',
  description:
    'Cricket scoring app specially made for our gully matches with flexibility to support gully rules. It also show stats from records like highest scores, best batsman etc.',
  imagePath: './assets/pet-projects/GullyScoreboard.png',
  git: new URL('https://github.com/tilak-puli/scoreboard'),
  link: new URL('https://play.google.com/store/apps/details?id=com.colossal_dreams.scoreboard'),
  techStack: ['React Native', 'nodejs'],
};

const Finly: Project = {
  name: 'Finly – AI Expense Tracker',
  description:
    'Android AI expense tracker with chat interface for natural-language logging and queries like “How much did I spend on groceries this month?” Integrated LangChain + Google Gemini to parse free‑text into structured transactions and answer analytical queries.',
  imagePath: './assets/pet-projects/finly.webp',
  git: new URL('https://github.com/tilak-puli/finly'),
  link: new URL('https://play.google.com/store/apps/details?id=com.finly.ai'),
  techStack: [
    'Flutter',
    'Node.js',
    'Firebase Functions',
    'Firestore',
    'Firebase Auth',
    'Express',
    'LangChain',
    'Google Gemini',
  ],
};

const Trackee: Project = {
  name: 'Trackee - AI-Powered Financial Analysis Platform',
  description:
    'Sequential AI agent system using CrewAI with Google Gemini LLM. Four specialized agents (P&L, Balance Sheet, Cash Flow, Integration) build on each other’s analysis. Multi-source data integration from NSE APIs, web scraping, and transcripts with confidence scoring.',
  imagePath: './assets/pet-projects/trackee.png',
  git: new URL('https://github.com/tilak-puli/trackee'),
  link: new URL('https://tilakpuli.site/trackee'),
  techStack: ['CrewAI', 'Google Gemini', 'Python', 'FastAPI', 'Pydantic', 'Web Scraping'],
};

export const profile: Profile = {
  name: 'Tilak Puli',
  quickIntroduction: 'I build digital experiences.',
  subIntroduction:
    "I'm a software engineer specialised in building user friendly and highly efficient web and mobile applications.",
  about,
  experience,
  contact: { email: 'tilakpuli15@gmail.com' },
  links,
  projects: [myProfile, CricRecords, GullyScoreboard, Finly, Trackee],
};
