"use client";

import { useState } from "react";
import { navLinks } from "@/lib/data";

function Logo() {
  return (
    <a href="#home" className="flex items-center gap-3">
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none" stroke="#111" strokeWidth="1.6" aria-hidden>
        {Array.from({ length: 8 }).map((_, i) => (
          <ellipse key={i} cx="26" cy="13" rx="5.5" ry="11" transform={`rotate(${i * 45} 26 26)`} />
        ))}
        <circle cx="26" cy="26" r="4" fill="#111" />
      </svg>
      <span className="leading-tight">
        <span className="block text-lg font-bold">Phlox</span>
        <span className="block text-lg font-light">Interior Design</span>
      </span>
    </a>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="flex items-center justify-between px-6 py-6 lg:px-[8.33%] lg:py-[2.2vw]">
        <Logo />
        <nav className="hidden gap-[2.1vw] lg:flex">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-[0.8vw] font-semibold uppercase transition hover:opacity-60 max-[1400px]:text-[11px]">
              {l.label}
            </a>
          ))}
        </nav>
        <button aria-label="Menu" aria-expanded={open} onClick={() => setOpen((v) => !v)} className="lg:hidden">
          <span className="block h-0.5 w-7 bg-ink" />
          <span className="mt-1.5 block h-0.5 w-7 bg-ink" />
          <span className="mt-1.5 block h-0.5 w-7 bg-ink" />
        </button>
      </div>
      {open && (
        <nav className="mx-6 flex flex-col gap-4 bg-white p-6 shadow-xl lg:hidden">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm font-semibold uppercase">
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
