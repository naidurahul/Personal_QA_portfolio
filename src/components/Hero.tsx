import Link from "next/link";
import { profile, siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section
      id="overview"
      className="rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 p-8 shadow-2xl sm:p-12 lg:p-16"
    >
      <p className="mb-5 inline-flex rounded-full border border-cyan-700/60 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300">
        {profile.availability}
      </p>
      {/* <p className="text-sm font-medium tracking-wide text-cyan-300">Get To Know Me</p> */}
      <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
        {siteConfig.name}
      </h1>
      <h2 className="mt-4 max-w-3xl text-xl font-medium text-slate-200 sm:text-2xl">
        {siteConfig.title}
      </h2>
      {/* <p className="mt-4 text-base font-medium text-cyan-300">{profile.greeting}</p> */}
      <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
        {siteConfig.shortBio}
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href={siteConfig.socialLinks.github}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-slate-100 px-5 py-3 text-sm font-medium text-slate-900 transition hover:bg-white"
        >
          GitHub
        </Link>
        <Link
          href={siteConfig.socialLinks.linkedin}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-slate-600 bg-transparent px-5 py-3 text-sm font-medium text-slate-200 transition hover:border-slate-400 hover:text-white"
        >
          LinkedIn
        </Link>
        <a
          href={`mailto:${siteConfig.email}`}
          className="rounded-full border border-slate-600 px-5 py-3 text-sm font-medium text-slate-200 transition hover:border-slate-400 hover:text-white"
        >
          Email
        </a>
      </div>
      <p className="mt-8 text-xs uppercase tracking-[0.2em] text-slate-500">Scroll for more</p>
    </section>
  );
}
