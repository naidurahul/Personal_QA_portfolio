"use client";

import Link from "next/link";
import { siteConfig } from "@/data/site";

export function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-900 bg-[#02050f]/90 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-center px-6 py-4">
        <ul className="flex items-center gap-1 rounded-full border border-slate-800/80 bg-slate-900/60 p-1">
          {siteConfig.nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="rounded-full px-4 py-2 text-sm text-slate-300 transition hover:bg-slate-800 hover:text-slate-100"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
