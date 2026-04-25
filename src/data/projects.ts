export type Project = {
  slug: string;
  title: string;
  summary: string;
  outcomes: string[];
  tech: string[];
  image: string;
  repoUrl?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "candidate-tracker",
    title: "Candidate Pipeline Tracker",
    summary:
      "Built a recruiter-friendly dashboard to track applicants across interview stages with clear bottleneck insights.",
    outcomes: [
      "Cut candidate status lookup time by 40%",
      "Reduced manual spreadsheet updates by 8 hours/week",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL"],
    image: "/images/projects/candidate-tracker.svg",
    repoUrl: "https://github.com/yourname/candidate-tracker",
    liveUrl: "https://candidate-tracker-demo.vercel.app",
  },
  {
    slug: "support-analytics",
    title: "Support Analytics Workspace",
    summary:
      "Created a metrics portal that surfaces ticket trends, SLA risk, and team performance in a single UI.",
    outcomes: [
      "Improved SLA compliance from 89% to 96%",
      "Enabled weekly reporting in under 10 minutes",
    ],
    tech: ["React", "Next.js", "Chart.js", "Node.js"],
    image: "/images/projects/support-analytics.svg",
    repoUrl: "https://github.com/yourname/support-analytics",
    liveUrl: "https://support-analytics-demo.vercel.app",
  },
  {
    slug: "workflow-automations",
    title: "Workflow Automation Hub",
    summary:
      "Designed a no-code automation interface for internal operations teams to build event-driven workflows.",
    outcomes: [
      "Saved 120+ ops hours per quarter",
      "Reduced human error in recurring tasks by 55%",
    ],
    tech: ["TypeScript", "Next.js", "Prisma", "Supabase"],
    image: "/images/projects/workflow-automations.svg",
    repoUrl: "https://github.com/yourname/workflow-automations",
    liveUrl: "https://workflow-automations-demo.vercel.app",
  },
];
