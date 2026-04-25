import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="relative h-52 w-full border-b border-slate-100 bg-slate-50">
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="space-y-4 p-6">
        <h3 className="text-lg font-semibold text-slate-900">{project.title}</h3>
        <p className="text-sm leading-7 text-slate-600">{project.summary}</p>
        <ul className="space-y-2 text-sm text-slate-700">
          {project.outcomes.map((outcome) => (
            <li key={outcome} className="flex gap-2">
              <span className="mt-1 text-emerald-600">•</span>
              <span>{outcome}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs text-slate-600"
            >
              {tool}
            </span>
          ))}
        </div>
        <div className="flex gap-4 text-sm font-medium">
          {project.liveUrl ? (
            <Link href={project.liveUrl} target="_blank" className="text-slate-900 hover:underline">
              Live Demo
            </Link>
          ) : null}
          {project.repoUrl ? (
            <Link href={project.repoUrl} target="_blank" className="text-slate-600 hover:underline">
              Source
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}
