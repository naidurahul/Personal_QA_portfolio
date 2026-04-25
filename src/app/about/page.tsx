import type { Metadata } from "next";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { FadeIn } from "@/components/FadeIn";
import { Section } from "@/components/Section";
import { profile, siteConfig, skillCategories } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: "Background, skillset, and experience timeline.",
};

export default function AboutPage() {
  return (
    <div className="space-y-12">
      <FadeIn>
        <Section title="About Me">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-8">
            <p className="text-base leading-8 text-slate-300">{profile.about}</p>
            <p className="mt-4 text-base leading-8 text-slate-400">
              Portfolio focus: quality engineering, reliable releases, and measurable testing impact.
            </p>
            <p className="mt-4 text-sm text-cyan-300">Location: {siteConfig.location}</p>
          </div>
        </Section>
      </FadeIn>

      <FadeIn delay={0.08}>
        <Section title="Skills">
          <ul className="flex flex-wrap gap-2">
            {skillCategories.flatMap((group) => group.items).map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1.5 text-sm text-slate-300"
              >
                {skill}
              </li>
            ))}
          </ul>
        </Section>
      </FadeIn>

      <FadeIn delay={0.15}>
        <Section title="Experience">
          <ExperienceTimeline />
        </Section>
      </FadeIn>
    </div>
  );
}
