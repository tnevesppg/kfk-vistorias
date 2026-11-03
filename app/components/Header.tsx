"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { navLinks } from "@/lib/data";

function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <a href="/" aria-label="KFK Vistorias & Perícias" onClick={onClick}>
      <Image
        src="/brand/logo.png" unoptimized
        alt="KFK Vistorias & Perícias"
        width={1400}
        height={201}
        priority
        className="h-6 w-auto lg:h-[clamp(1.5rem,1.35vw,2rem)]"
      />
    </a>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  // lock page scroll behind the open menu
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const bar = "block h-0.5 w-7 bg-ink transition-all duration-300";

  return (
    <header className="load-rise fixed inset-x-0 top-0 z-50 lg:absolute lg:z-30" style={{ ["--d" as string]: "800ms" }}>
      {/* mobile bar: transparent at the top, frosted white once the page scrolls */}
      <div
        className={`relative z-10 flex items-center justify-between px-6 transition-all duration-300 lg:px-[8.33%] lg:py-[2.2vw] ${
          scrolled || open ? "bg-white/90 py-3.5 shadow-[0_1px_0_rgba(0,0,0,0.06)] backdrop-blur-md" : "py-6"
        } lg:border-b lg:border-neutral-200 lg:bg-white lg:shadow-none lg:backdrop-blur-none`}
      >
        <Logo onClick={() => setOpen(false)} />
        <nav className="menu-dim hidden gap-[2.1vw] lg:flex">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-[clamp(11px,calc(0.8vw-2px),14px)] uppercase">
              {l.label}
            </a>
          ))}
        </nav>
        <button
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="-mr-2 grid h-11 w-11 place-items-center lg:hidden"
        >
          <span className="relative block h-5 w-7">
            <span className={`${bar} absolute left-0 ${open ? "top-[9px] rotate-45" : "top-0"}`} />
            <span className={`${bar} absolute left-0 top-[9px] ${open ? "opacity-0" : ""}`} />
            <span className={`${bar} absolute left-0 ${open ? "top-[9px] -rotate-45" : "top-[18px]"}`} />
          </span>
        </button>
      </div>

      {/* full-screen mobile menu */}
      <div
        className={`fixed inset-0 z-0 flex flex-col bg-white px-6 pb-8 pt-24 transition-all duration-500 ease-out lg:hidden ${
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-4 opacity-0"
        }`}
        aria-hidden={!open}
      >
        <nav className="flex flex-1 flex-col justify-center gap-1">
          {navLinks.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-baseline gap-4 border-b border-neutral-200 py-5 font-extrabold text-4xl tracking-[-0.04em] transition-all duration-500"
              style={{ transitionDelay: open ? `${150 + i * 70}ms` : "0ms", opacity: open ? 1 : 0, transform: open ? "none" : "translateY(16px)" }}
            >
              <span className="text-sm font-semibold tracking-normal text-sun">0{i + 1}</span>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="mt-8">
          <a href="/#contact" onClick={() => setOpen(false)} className="btn-sun w-full justify-center py-4 text-sm">
            Solicitar Orçamento
          </a>
          <p className="mt-5 text-center text-xs text-neutral-500">Rio de Janeiro, RJ · Seg a Sex, 08:00 - 18:00</p>
        </div>
      </div>
    </header>
  );
}
