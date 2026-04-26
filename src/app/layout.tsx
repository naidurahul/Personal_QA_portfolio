import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { siteConfig } from "@/data/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-site.vercel.app"),
  title: {
    default: "Rahul Naidu | QA Engineer",
    template: "%s | Rahul Naidu",
  },
  description:
    "Rahul Naidu's portfolio showcasing QA engineering experience, stack, and achievements.",
  openGraph: {
    title: "Rahul Naidu | QA Engineer",
    description:
      "QA portfolio with stack overview, experience timeline, and contact details.",
    type: "website",
    images: [{ url: "/og.svg", width: 1200, height: 630, alt: "Rahul Naidu Portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rahul Naidu | QA Engineer",
    description:
      "QA portfolio with testing experience and modern tooling.",
    images: ["/og.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#01030a] text-slate-100">
        <Navbar />
        <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 py-8 sm:py-12">
          {children}
        </main>
        <footer className="border-t border-slate-800 px-6 py-6 text-center text-sm text-slate-400">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-4">
            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-cyan-400 px-5 py-2.5 text-sm font-medium text-cyan-300 transition hover:bg-cyan-400 hover:text-slate-950"
            >
              View Resume
            </a>
            <p>@2026 Rahul Naidu</p>
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
