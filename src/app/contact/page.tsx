import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { Section } from "@/components/Section";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch for frontend roles and collaboration.",
};

export default function ContactPage() {
  return (
    <FadeIn>
      <Section
        title="Contact"
        description="I respond quickly to opportunities related to frontend engineering and product-focused teams."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-slate-900">Contact Details</h3>
            <dl className="mt-4 space-y-2 text-sm text-slate-600">
              <div>
                <dt className="font-medium text-slate-800">Email</dt>
                <dd>
                  <a className="hover:underline" href={`mailto:${siteConfig.email}`}>
                    {siteConfig.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-medium text-slate-800">LinkedIn</dt>
                <dd>
                  <a href={siteConfig.socialLinks.linkedin} target="_blank" rel="noreferrer" className="hover:underline">
                    {siteConfig.socialLinks.linkedin}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-medium text-slate-800">GitHub</dt>
                <dd>
                  <a href={siteConfig.socialLinks.github} target="_blank" rel="noreferrer" className="hover:underline">
                    {siteConfig.socialLinks.github}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
          <form
            action={`mailto:${siteConfig.email}`}
            method="post"
            encType="text/plain"
            className="rounded-2xl border border-slate-200 bg-white p-6"
          >
            <h3 className="text-lg font-semibold text-slate-900">Quick Message</h3>
            <div className="mt-4 space-y-4">
              <label className="block text-sm">
                <span className="mb-1 block text-slate-700">Name</span>
                <input
                  required
                  type="text"
                  name="name"
                  className="w-full rounded-xl border border-slate-300 px-3 py-2 outline-none ring-slate-300 transition focus:ring-2"
                />
              </label>
              <label className="block text-sm">
                <span className="mb-1 block text-slate-700">Email</span>
                <input
                  required
                  type="email"
                  name="email"
                  className="w-full rounded-xl border border-slate-300 px-3 py-2 outline-none ring-slate-300 transition focus:ring-2"
                />
              </label>
              <label className="block text-sm">
                <span className="mb-1 block text-slate-700">Message</span>
                <textarea
                  required
                  name="message"
                  rows={5}
                  className="w-full rounded-xl border border-slate-300 px-3 py-2 outline-none ring-slate-300 transition focus:ring-2"
                />
              </label>
              <button
                type="submit"
                className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </Section>
    </FadeIn>
  );
}
