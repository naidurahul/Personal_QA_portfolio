import { FadeIn } from "@/components/FadeIn";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { education, highlights, profile, siteConfig, skillCategories } from "@/data/site";

export default function Home() {
  return (
    <div className="space-y-24">
      <FadeIn>
        <Hero />
      </FadeIn>

      <FadeIn delay={0.08}>
        <Section
          title="About Me"
          description="Testing systems with precision, performance focus, and user-centric quality standards."
        >
          <div className="grid gap-4 sm:grid-cols-3">
            {profile.stats.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 text-center"
              >
                <p className="text-3xl font-semibold text-slate-100">{item.value}</p>
                <p className="mt-1 text-sm text-slate-400">{item.label}</p>
              </div>
            ))}
          </div>
        </Section>
      </FadeIn>

      <FadeIn delay={0.15}>
        <Section
          title="Technology Stack"
          description="Core tools, frameworks, and testing capabilities used in daily QA workflows."
        >
          <div id="stack" className="space-y-4">
            {skillCategories.map((category) => (
              <div
                key={category.name}
                className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
              >
                <h3 className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
                  {category.name}
                </h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1.5 text-sm text-slate-300"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>
      </FadeIn>

      <FadeIn delay={0.2}>
        <Section
          title="Experience"
          description="Professional journey across QA engineering and front-end collaboration."
        >
          <div id="experience" className="space-y-8">
            <ExperienceTimeline />
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <h3 className="text-lg font-semibold text-slate-100">Key Achievements</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {highlights.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <h3 className="text-lg font-semibold text-slate-100">Education</h3>
              <p className="mt-3 text-sm text-slate-300">{education.degree}</p>
              <p className="mt-1 text-sm text-cyan-300">{education.school}</p>
              <p className="mt-1 text-xs uppercase tracking-wide text-slate-400">{education.period}</p>
            </div>
          </div>
        </Section>
      </FadeIn>

      <FadeIn delay={0.28}>
        <Section
          title="Let's Work Together"
          description="Open to QA roles, testing collaboration, and quality consulting opportunities."
        >
          <div id="contact" className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
              <h3 className="text-lg font-semibold text-slate-100">Reach Out Directly</h3>
              <p className="mt-4 text-sm text-slate-300">
                Email: <a href={`mailto:${siteConfig.email}`} className="text-cyan-300 hover:underline">{siteConfig.email}</a>
              </p>
              <p className="mt-2 text-sm text-slate-300">Location: {siteConfig.location}</p>
              <div className="mt-5 flex gap-3">
                <a
                  href={siteConfig.socialLinks.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300 hover:border-slate-500"
                >
                  GitHub
                </a>
                <a
                  href={siteConfig.socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300 hover:border-slate-500"
                >
                  LinkedIn
                </a>
              </div>
            </div>
            <form
              action={`mailto:${siteConfig.email}`}
              method="post"
              encType="text/plain"
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6"
            >
              <h3 className="text-lg font-semibold text-slate-100">Send a Message</h3>
              <div className="mt-4 space-y-4">
                <input
                  required
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-200 outline-none ring-cyan-500/30 focus:ring-2"
                />
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-200 outline-none ring-cyan-500/30 focus:ring-2"
                />
                <textarea
                  required
                  name="message"
                  rows={4}
                  placeholder="Message"
                  className="w-full rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-200 outline-none ring-cyan-500/30 focus:ring-2"
                />
                <button
                  type="submit"
                  className="rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-medium text-slate-950 hover:bg-cyan-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </Section>
      </FadeIn>
    </div>
  );
}
