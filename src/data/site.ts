export const siteConfig = {
  name: "Rahul Naidu",
  title: "QA Engineer",
  shortBio:
    "Crafting reliable digital experiences with clean quality processes and thoughtful testing.",
  email: "naidurahul5555@example.com",
  location: "Itahari, Nepal",
  resumeUrl: "/Rahul%20Naidu.pdf",
  socialLinks: {
    github: "https://github.com/naidurahul",
    linkedin: "https://www.linkedin.com/in/rahul-n-9b34411b7/",
  },
  nav: [
    { href: "/#overview", label: "Overview" },
    { href: "/#stack", label: "Stack" },
    { href: "/#experience", label: "Experience" },
    { href: "/#contact", label: "Contact" },
  ],
};

export const profile = {
  // greeting: "Hello, I'm Rahul Naidu",
  about:
    "I lead and execute quality strategies for SaaS and product teams, from end-to-end validation to performance testing under load. I focus on actionable bug reporting, robust coverage, and user-centric quality outcomes.",
  availability: "Available for Collaboration",
  stats: [
    { label: "Years Experience", value: "2+" },
    // { label: "Testing Domains", value: "10+" },
    { label: "Coverage Boost", value: "30%" },
  ],
};

export type SkillCategory = {
  name: string;
  items: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Tools",
    items: ["Playwright","Postman", "JIRA", "JMeter", "Git", "GitHub Actions"],
  },
  {
    name: "Automation",
    items: ["Playwright", "API", "CI/CD"],
  },
  {
    name: "Programming Languages",
    items: ["JavaScript", "Python", "Typescript"],
  },
  {
    name: "Testing Techniques",
    items: [
      "Manual Testing",
      "Automation Testing",
      // "Mobile App Testing",
      "Functional Testing",
      "Regression Testing",
      "Integration Testing",
      "System Testing",
      "User Acceptance Testing",
      "Performance Testing",
      "Security Testing",
      "Smoke Testing",
    ],
  },
  {
    name: "Methodologies",
    items: ["Agile", "Scrum", "Bug Reporting and Tracking", "UAT Validation"],
  },
];

export const experience = [
  {
    company: "G-mana",
    role: "Software QA Engineer II",
    period: "July 2024 - Present",
    achievements: [
      "Performed Automation, manual and performance testing for a SaaS Server side ad-insertion(SSAI) platform",
      "Conduct end-to-end and UI/UX testing across web environments",
      "Validated HLS/DASH streaming workflows and system-level integrations.",
      "Perform load testing with JMeter for high-traffic reliability and performance validation.",
      "Execute API Testing using Postman across multiple integration layers.",
      "Write detailed test cases and perform functional, regression, and integration testing in Agile sprints.",
    ],
    location: "Remote (Israel)",
  },
  {
    company: "Bross Solutions Pvt Ltd",
    role: "SoftwareQA Engineer I",
    period: "June 2023 - April 2024",
    achievements: [
      "Designed and executed manual and automated test cases for web applications.",
      // "Conducted PMS/POS-style system validation and cross-device testing.",
      "Tested core product flows, including user roles, access control, and UI behavior",
      "Collaborated with developers to improve testability and reduce regression issues",
      "Reported clear, reproducible bugs with proper logs, steps, and expected results"
    ],
    location: "Biratnagar, Nepal",
  },
  {
    company: "Bross Solutions Pvt Ltd",
    role: "Front End Development Intern",
    period: "June 2023 - August 2023",
    achievements: [
      "Developed interactive interfaces using ReactJS.",
      "Supported responsive web design for cross-platform compatibility.",
      "Debugged front-end issues and helped improve app performance.",
      "Integrated REST APIs for dynamic data workflows.",
      "Contributed to code reviews and coding standards.",
    ],
    location: "Biratnagar, Nepal",
  },
];

export const highlights = [
  "Reduced bug leakage rate by 20% through stronger test planning and documentation.",
  "Boosted test coverage by 30% with hybrid manual and automated strategies.",
  "Contributed to high-impact integration testing with performance validation.",
];

export const education = {
  degree: "Bachelor of Science in Computer Science and Information Technology (CSIT)",
  school: "Nihareeka College of Management and IT, Biratnagar, Nepal",
  period: "2018 - 2023",
};
