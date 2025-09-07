import { Profile } from '../app/models/profile';
import { About, Employment, Experience, ExternalName, Links, Project } from '../app/profile/types';

const convertToHtmlLink = (name: string, url: string) => `<a href="${url}">${name}</a>`;

const about: About = {
  heading: 'About me',
  mainIntroduction:
    // prettier-ignore
    "Hello! I'm Anil Kumble, a results-driven Full Stack Developer with 5+ years building scalable, secure applications across Java/Spring Boot and modern frontends (Angular/React). I enjoy designing clean architectures and shipping maintainable software that moves business metrics.",
  extendedIntroduction:
    'I specialize in cloud-native development on AWS and Azure, RESTful API design, and end-to-end delivery with CI/CD. My experience spans microservices, messaging, relational and NoSQL databases, and front-end performance. I follow Agile practices, emphasize test automation, and build software with security-by-design (JWT, RBAC).',
  techStacks: [
    'Java',
    'Spring',
    'Spring Boot',
    'Hibernate',
    'Angular',
    'React',
    'Node.js',
    'JavaScript',
    'TypeScript',
    'Bootstrap',
    'SQL',
    'MySQL',
    'PostgreSQL',
    'Oracle',
    'MongoDB',
    'Cassandra',
    'AWS',
    'Azure',
    'Jenkins',
    'Docker',
    'Kubernetes',
    'Git',
    'Azure DevOps',
    'GitHub Actions',
    'JUnit',
    'Mockito',
    'TestNG',
    'Cucumber',
    'Kafka',
  ],
};

const Urpan: Employment = {
  role: 'Full Stack Developer',
  company: 'Urpan Technologies, Inc',
  range: '2019 Jan - 2022 Jul',
  notes: [
    'Designed and deployed Java Spring Boot microservices for high-volume data processing, reducing latency by 30%',
    'Built responsive UIs with Angular and React, improving user engagement by 25%',
    'Optimized SQL queries and implemented MongoDB collections, improving query performance by 35%',
    'Built and automated CI/CD pipelines with Jenkins and Docker, reducing deployment time by 40%',
    'Integrated JWT-based authentication and role-based access control to enhance application security',
    'Contributed across Agile ceremonies, architecture design discussions, code reviews, and sprint planning',
  ],
  link: new URL('https://www.linkedin.com/company/urpan-technologies/'),
};

const Fission: Employment = {
  role: 'Associate Full Stack Developer (Intern)',
  company: 'Fission Infotech Pvt Ltd',
  range: '2018 Jun - 2018 Dec',
  notes: [
    'Developed Spring Boot REST APIs with CRUD operations, authentication, and authorization',
    'Built and integrated front-end components in Angular and React with RESTful services',
    'Wrote integration tests for Hibernate data layers to improve data reliability',
    'Automated builds with Jenkins and deployed containerized apps on Kubernetes clusters',
    'Implemented scalable deployments using AWS (EC2, S3, RDS)',
  ],
  link: new URL('https://www.fissioninfotech.com/'),
};

// (Previous employment entries omitted for brevity)

const experience: Experience = {
  // prettier-ignore
  heading: "Where I've Worked",
  employments: [Urpan, Fission],
};

const links: Links = {
  [ExternalName.Git]: new URL('https://github.com/'),
  [ExternalName.LinkedIn]: new URL('https://www.linkedin.com/'),
};

// Projects

const DriverDrowsiness: Project = {
  name: 'Driver Drowsiness Detection',
  description: 'Real-time driver fatigue detection using Python and OpenCV to enhance road safety.',
  imagePath: './assets/og.png',
  git: new URL('https://github.com/'),
  link: new URL('https://github.com/'),
  techStack: ['Python', 'OpenCV'],
};

const AgroMart: Project = {
  name: 'AgroMart',
  description: 'Platform enabling farmers to set prices, predict crops, and bypass middlemen.',
  imagePath: './assets/og.png',
  git: new URL('https://github.com/'),
  link: new URL('https://github.com/'),
  techStack: ['Java', 'Spring Boot', 'Angular'],
};

const StudentManagement: Project = {
  name: 'Student Management System',
  description: 'Java-based GUI application for managing student records and fees.',
  imagePath: './assets/og.png',
  git: new URL('https://github.com/'),
  link: new URL('https://github.com/'),
  techStack: ['Java', 'Swing/JavaFX', 'SQL'],
};

// --

export const profile: Profile = {
  name: 'Anil Kumble',
  quickIntroduction: 'Full Stack Developer — Java, Spring Boot, Angular, React',
  subIntroduction:
    'Results-driven developer with 5+ years building scalable apps and APIs. Cloud-native on AWS/Azure, CI/CD, secure coding, and database optimization. Passionate about maintainable, high-impact software.',
  about,
  experience,
  contact: { email: 'bethapudianilkumble@gmail.com' },
  links,
  projects: [DriverDrowsiness, AgroMart, StudentManagement],
};
