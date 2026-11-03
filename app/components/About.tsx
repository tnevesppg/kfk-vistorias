import Image from "next/image";
import { images } from "@/lib/data";
import Parallax from "./Parallax";
import Reveal from "./Reveal";

const problems = [
  { a: "Infiltração", b: "A mancha que volta" },
  { a: "Trincas", b: "Crescem sem aviso" },
  { a: "Laudo contestado", b: "Sem prova, sem defesa" },
];

function Problem({ a, b }: { a: string; b: string }) {
  return (
    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-transparent p-5 text-center lg:p-[1.6vw]">
      <p className="text-xl font-extrabold uppercase leading-tight text-white lg:text-[1.35vw]">{a}</p>
      <p className="mt-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-sun lg:mt-[0.4vw] lg:text-[0.6vw]">{b}</p>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative px-6 pb-14 pt-6 lg:px-[8.33%] lg:py-0">
      {/* image strip */}
      <div className="relative -mx-6 flex snap-x snap-mandatory gap-3 overflow-x-auto px-6 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:mx-0 lg:grid lg:h-[27vw] lg:grid-cols-[1fr_2.2fr_1fr] lg:gap-0 lg:overflow-visible lg:px-0 lg:pb-0">
        <Reveal variant="wipe" className="max-lg:h-[26rem] max-lg:w-[min(76vw,22rem)] max-lg:shrink-0 max-lg:snap-center photo relative">
          <Parallax speed={0.05} className="absolute inset-0">
            <Image src={images.aboutA} alt="" fill sizes="20vw" className="object-cover" />
          </Parallax>
          <Problem {...problems[0]} />
        </Reveal>
        <Reveal variant="wipe" delay={120} className="max-lg:h-[26rem] max-lg:w-[min(76vw,22rem)] max-lg:shrink-0 max-lg:snap-center photo relative">
          <Image src={images.aboutB} alt="Parede com trinca diagonal" fill sizes="50vw" className="object-cover" />
          <Problem {...problems[1]} />
        </Reveal>
        <Reveal variant="wipe" delay={240} className="max-lg:h-[26rem] max-lg:w-[min(76vw,22rem)] max-lg:shrink-0 max-lg:snap-center photo relative">
          <Parallax speed={-0.05} className="absolute inset-0">
            <Image src={images.aboutC} alt="" fill sizes="20vw" className="object-cover" />
          </Parallax>
          <Problem {...problems[2]} />
        </Reveal>
      </div>

      <p aria-hidden className="mt-3 text-center text-[11px] font-semibold uppercase tracking-[0.25em] text-neutral-400 lg:hidden">Deslize →</p>

      <Reveal className="relative z-10 mx-auto mt-6 bg-white p-0 md:max-w-2xl lg:max-w-none lg:-mt-[5vw] lg:w-[62.5%] lg:px-[4.2vw] lg:py-[4vw]">
        <h2 className="heading text-4xl lg:text-[3.1vw]">Você se identifica com algum <span className="accent">desses problemas?</span></h2>
        <span className="rule mt-6 w-14 lg:w-[3.6vw]" />
        <p className="mt-8 text-xl font-semibold leading-snug text-ink lg:text-[1.35vw]">
          Esperar custa mais: quanto mais o problema espera, mais caro fica resolver.
        </p>
        <p className="mt-5 text-[15px] leading-[1.75] text-neutral-600 lg:text-[0.9vw] lg:leading-[1.85]">
          Uma infiltração ignorada vira laje comprometida. Uma vistoria mal feita vira disputa na justiça. Uma fachada esquecida vira risco para quem passa embaixo.
        </p>
        <p className="mt-4 text-[15px] leading-[1.75] text-neutral-600 lg:text-[0.9vw] lg:leading-[1.85]">
          Na KFK Vistorias, o laudo é assinado por engenheiro habilitado, com ART/RRT, fotos e conclusões claras: você sabe o que tem, quanto é grave e o que fazer primeiro. Atendemos síndicos, administradoras, proprietários, construtoras e advogados no Rio de Janeiro.
        </p>
        <a href="#contact" className="btn-dark mt-8 max-lg:w-full max-lg:justify-center max-lg:py-4">Solicitar Orçamento</a>
      </Reveal>
    </section>
  );
}
