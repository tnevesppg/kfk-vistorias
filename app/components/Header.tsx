"use client";

import { useState } from "react";
import { navLinks } from "@/lib/data";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <a href="#home" className="leading-tight">
          <span className="block font-serif text-xl font-bold tracking-wide">Phlox</span>
          <span className="block text-xs uppercase tracking-[0.25em] text-neutral-500">
            Interior Design
          </span>
        </a>

        <nav className="hidden gap-10 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs font-medium uppercase tracking-widest transition hover:text-accent"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden"
        >
          <span className="block h-0.5 w-6 bg-ink" />
          <span className="mt-1.5 block h-0.5 w-6 bg-ink" />
          <span className="mt-1.5 block h-0.5 w-6 bg-ink" />
        </button>
      </div>

      {open && (
        <nav className="mx-6 flex flex-col gap-4 bg-white p-6 shadow-lg md:hidden">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-xs font-medium uppercase tracking-widest"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
