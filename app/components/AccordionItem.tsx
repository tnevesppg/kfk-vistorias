"use client";

import { useEffect, useId, useState, type ReactNode } from "react";

type Props = {
  /** items sharing a group close each other (only one open at a time) */
  group: string;
  defaultOpen?: boolean;
  /** question / title, rendered inside the toggle button (phrasing content only) */
  head: ReactNode;
  className?: string;
  btnClassName?: string;
  plusClassName?: string;
  bodyClassName?: string;
  children: ReactNode;
};

/** Accordion row whose answer slides open and closed (grid-rows 0fr/1fr + fade), instead of snapping like <details>. */
export default function AccordionItem({ group, defaultOpen = false, head, className = "", btnClassName = "", plusClassName = "", bodyClassName = "", children }: Props) {
  const [open, setOpen] = useState(defaultOpen);
  const id = useId();

  useEffect(() => {
    const onOpen = (e: Event) => {
      const d = (e as CustomEvent<{ group: string; id: string }>).detail;
      if (d.group === group && d.id !== id) setOpen(false);
    };
    window.addEventListener("accordion-open", onOpen);
    return () => window.removeEventListener("accordion-open", onOpen);
  }, [group, id]);

  const toggle = () => {
    if (!open) window.dispatchEvent(new CustomEvent("accordion-open", { detail: { group, id } }));
    setOpen(!open);
  };

  return (
    <div className={className}>
      <div role="heading" aria-level={3}>
        <button type="button" data-cursor="dot" aria-expanded={open} aria-controls={id} onClick={toggle} className={`flex w-full cursor-pointer items-center justify-between gap-6 text-left ${btnClassName}`}>
          <span>{head}</span>
          <span aria-hidden className={`relative block shrink-0 bg-sun transition-transform duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${open ? "rotate-45" : ""} ${plusClassName}`}>
            <span className="absolute left-1/2 top-1/2 h-[2px] w-[40%] -translate-x-1/2 -translate-y-1/2 bg-ink" />
            <span className="absolute left-1/2 top-1/2 h-[40%] w-[2px] -translate-x-1/2 -translate-y-1/2 bg-ink" />
          </span>
        </button>
      </div>
      <div
        id={id}
        inert={!open}
        className="grid transition-[grid-template-rows,opacity] duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
        style={{ gridTemplateRows: open ? "1fr" : "0fr", opacity: open ? 1 : 0 }}
      >
        <div className="min-h-0 overflow-hidden">
          <div className={bodyClassName}>{children}</div>
        </div>
      </div>
    </div>
  );
}
