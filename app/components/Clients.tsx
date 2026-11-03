import Image from "next/image";
import Reveal from "./Reveal";

// k = logo width in design units, tuned so every mark carries about the same visual weight
const clients = [
  { name: "Caixa", src: "/photos/clientes/caixa-preto.png", ratio: 900 / 205, k: 8.5 },
  { name: "Banco do Brasil", src: "/photos/clientes/bb-preto.png", ratio: 7.142857, k: 13 },
  { name: "Poder Judiciário do Estado do Rio de Janeiro", src: "/photos/clientes/pjerj-preto.png", ratio: 900 / 250, k: 9.5 },
  { name: "Poupex", src: "/photos/clientes/poupex-preto.png", ratio: 900 / 240, k: 7.5 },
  { name: "Saint Martin", src: "/photos/clientes/resstmartin-preto.png", ratio: 900 / 333, k: 7 },
  { name: "UNIRIO", src: "/photos/clientes/unirio-preto.png", ratio: 900 / 288, k: 8.5 },
];

export default function Clients() {
  return (
    <section aria-label="Clientes atendidos" className="px-6 py-14 lg:px-[8.33%] lg:py-[5.5vw]">
      <ul className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-x-9 gap-y-8 [--u:8.5px] md:gap-x-14 lg:max-w-none lg:flex-nowrap lg:justify-between lg:gap-x-0 lg:[--u:1vw]">
        {clients.map((c, i) => (
          <li key={c.name}>
            <Reveal delay={i * 80}>
              <Image
                src={c.src}
                alt={c.name}
                width={900}
                height={Math.round(900 / c.ratio)}
                unoptimized
                style={{ width: `calc(var(--u) * ${c.k})`, height: "auto" }}
              />
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
