"use client";

import { useEffect, useRef } from "react";

/** Muted looping clip with the old photo as poster, so there is never an empty frame. */
export default function HeroVideo({ alt }: { alt: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // people who asked for less motion keep the still poster
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) ref.current?.pause();
  }, []);

  return (
    <video
      ref={ref}
      className="absolute inset-0 h-full w-full object-cover"
      src="/videos/engenheiro_inspecionando_parede.mp4"
      poster="/photos/hero-principal.jpg"
      aria-label={alt}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
    />
  );
}
