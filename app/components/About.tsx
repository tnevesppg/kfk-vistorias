import Image from "next/image";
import { images } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="bg-neutral-50 py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 md:grid-cols-2">
        <div className="relative aspect-[4/3]">
          <Image
            src={images.about}
            alt="Ambiente com sofá bege e arte na parede"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="section-title text-4xl font-bold md:text-5xl">
            About Us<span className="text-accent">.</span>
          </h2>
          <p className="mt-6 text-sm leading-7 text-neutral-500">
            Somos um estúdio dedicado a transformar espaços em lugares com
            identidade. Cada projeto começa ouvindo você e termina com detalhes
            que fazem diferença no dia a dia.
          </p>
          <p className="mt-4 text-sm leading-7 text-neutral-500">
            Trabalhamos do conceito à execução, com curadoria de materiais,
            mobiliário e iluminação, sempre respeitando prazo e orçamento.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-block bg-ink px-8 py-3 text-xs font-medium uppercase tracking-widest text-white transition hover:bg-accent"
          >
            Read More
          </a>
        </div>
      </div>
    </section>
  );
}
