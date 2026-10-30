"use client";

import { useState } from "react";
import Image from "next/image";
import { navLinks } from "@/lib/data";

function Logo() {
  return (
    <a href="#home" aria-label="KFK Vistorias & Perícias">
      <Image
        src="/brand/logo.png" unoptimized
        alt="KFK Vistorias & Perícias"
        width={1400}
        height={201}
        priority
        className="h-9 w-auto lg:h-[2.9vw]"
      />
    </a>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="load-rise absolute inset-x-0 top-0 z-30" style={{ ["--d" as string]: "800ms" }}>
      <div className="flex items-center justify-between px-6 py-6 lg:px-[8.33%] lg:py-[2.2vw]">
        <Logo />
        <nav className="hidden gap-[2.1vw] lg:flex">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-[0.8vw] font-semibold uppercase transition hover:text-brand max-[1400px]:text-[11px]">
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
