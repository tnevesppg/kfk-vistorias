import Image from "next/image";
import { images } from "@/lib/data";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 pb-20 md:grid-cols-2 md:pb-28">
        <div className="relative z-10 md:-mr-24">
          <h1 className="section-title text-6xl font-bold leading-none tracking-tight md:text-8xl">
            Interior
            <br />
            Design
          </h1>
          <p className="mt-8 max-w-md text-sm leading-7 text-neutral-500">
            Criamos ambientes elegantes e funcionais, com luz, materiais e
            proporções pensados para a sua rotina.
          </p>
          <a
            href="#portfolio"
            className="mt-8 inline-block border border-ink px-8 py-3 text-xs font-medium uppercase tracking-widest transition hover:bg-ink hover:text-white"
          >
            Ver portfólio
          </a>
        </div>
        <div className="relative aspect-[4/5] w-full md:aspect-[4/4.5]">
          <Image
            src={images.hero}
            alt="Sala de estar clara e minimalista"
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
