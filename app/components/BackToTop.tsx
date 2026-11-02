"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const on = () => setShow(window.scrollY > 200);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <a
      href="#home"
      aria-label="Voltar ao topo"
      tabIndex={show ? 0 : -1}
      className={`fixed bottom-6 right-6 z-40 grid h-11 w-11 place-items-center rounded-[3px] bg-sun text-ink shadow-lg transition-all duration-500 hover:bg-brand hover:text-white lg:bottom-[2vw] lg:right-[2vw] lg:h-[3vw] lg:w-[3vw] ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5 lg:h-[1.3vw] lg:w-[1.3vw]" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </a>
  );
}
