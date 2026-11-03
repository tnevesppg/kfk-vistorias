import Image from "next/image";
import { images, services } from "@/lib/data";
import Reveal from "./Reveal";

// each title breaks in two: the first line in the regular face, the second in the italic serif
const rows = [
  { s: services[0], line1: "Inspeção", line2: "Predial", src: images.serviceA, alt: "Engenheiro inspecionando a fachada de um edifício" },
  { s: services[1], line1: "Vistorias", line2: "Técnicas", src: images.serviceB, alt: "Engenheiro e cliente vistoriando um apartamento" },
  { s: services[2], line1: "Avaliação e", line2: "Perícia", src: images.serviceMain, alt: "Perito medindo umidade em parede" },
];

function ArrowBox() {
  return (
    <svg aria-hidden viewBox="0 0 70 70" fill="none" stroke="currentColor" strokeWidth="1" className="h-11 w-11 shrink-0 lg:h-[3.6vw] lg:w-[3.6vw]">
      <path d="M0 0.5H69.5V70M5 66L69.5 0.5" />
    </svg>
  );
}

export default function ServiceList() {
  return (
    <ul className="border-t border-neutral-200">
      {rows.map(({ s, line1, line2, src, alt }) => (
        <li key={s.n} className="border-b border-neutral-200">
          <Reveal>
            <a
              href={s.href}
              aria-label={s.title}
              data-cursor="dot"
              className="svc-row group grid grid-cols-[auto_1fr_auto] items-center gap-x-5 gap-y-5 px-6 py-8 transition-colors duration-300 ease-in-out hover:text-white focus-visible:text-white lg:grid-cols-[6vw_20vw_1fr_22vw_8vw] lg:gap-x-[2vw] lg:px-[4.2vw] lg:py-[2.4vw]"
            >
              <span className="self-start text-lg lg:self-center lg:text-[length:max(1.15vw,20.7px)]">{s.n}.</span>
              <div className="relative col-span-3 row-start-2 aspect-[2/1] overflow-hidden lg:col-span-1 lg:row-start-auto lg:aspect-[300/156]">
                <Image src={src} alt={alt} fill sizes="(min-width:1024px) 20vw, 90vw" className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110" />
              </div>
              <h2 className="col-start-2 row-start-1 text-[2.1rem] leading-[1.04] tracking-[-0.03em] lg:col-start-auto lg:row-start-auto lg:text-[3vw]">
                {line1}
                <br />
                <span className="accent">{line2}</span>
              </h2>
              <p className="col-span-2 text-[15px] leading-[1.7] text-neutral-600 transition-colors duration-300 ease-in-out group-hover:text-white/75 lg:col-span-1 lg:text-[length:max(0.95vw,17.1px)]">
                {s.text}
              </p>
              <span className="col-start-3 row-start-1 justify-self-end lg:col-start-auto lg:row-start-auto">
                <ArrowBox />
              </span>
            </a>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}
