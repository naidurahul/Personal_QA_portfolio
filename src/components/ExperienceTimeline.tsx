import { experience } from "@/data/site";

export function ExperienceTimeline() {
  return (
    <ol className="space-y-6">
      {experience.map((item) => (
        <li
          key={`${item.company}-${item.period}`}
          className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6"
        >
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="text-lg font-semibold text-slate-100">{item.role}</h3>
            <p className="text-sm text-slate-400">{item.period}</p>
          </div>
          <p className="mt-1 text-sm font-medium text-cyan-300">
            {item.company} - {item.location}
          </p>
          <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-300">
            {item.achievements.map((achievement) => (
              <li key={achievement}>- {achievement}</li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}
