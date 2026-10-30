import Image from "next/image";
import { images } from "@/lib/data";

export default function VideoSection() {
  return (
    <section className="relative isolate overflow-hidden py-32 text-white">
      <Image
        src={images.video}
        alt=""
        fill
        sizes="100vw"
        className="-z-10 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-black/50" />
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="section-title text-4xl font-bold md:text-6xl">Beautiful Interior</h2>
        <p className="mt-6 text-sm leading-7 text-white/80">
          Veja como um projeto ganha forma, do primeiro esboço ao ambiente
          finalizado.
        </p>
        <a
          href="#"
          className="mt-10 inline-flex items-center gap-3 border border-white px-8 py-3 text-xs font-medium uppercase tracking-widest transition hover:bg-white hover:text-ink"
        >
          <span aria-hidden>▶</span> Watch Video
        </a>
      </div>
    </section>
  );
}
