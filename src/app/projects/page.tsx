import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { ProjectCard } from "@/components/ProjectCard";
import { Section } from "@/components/Section";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Case studies and portfolio projects with measurable business outcomes.",
};

export default function ProjectsPage() {
  return (
    <FadeIn>
      <Section
        title="Projects"
        description="Case studies that highlight technical decisions, user value, and concrete outcomes."
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>
    </FadeIn>
  );
}
