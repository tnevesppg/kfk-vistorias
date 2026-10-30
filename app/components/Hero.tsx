import Image from "next/image";
import { images } from "@/lib/data";
import { u } from "@/lib/u";
import Parallax from "./Parallax";
import Reveal from "./Reveal";

const brands = [
  { a: "GOLDEN", b: "sub" },
  { a: "SWEETY", b: "C A F E T E R I A" },
  { a: "FASTLANE", b: "S P O R T S W E A R" },
  { a: "MIGHTY", b: "FURNITURES" },
  { a: "JR", b: "JACK ROLLER" },
];

function Socials() {
  const items = ["IG", "in", "f", "tw"];
  return (
    <div className="flex gap-[2vw] text-xs font-bold">
      {items.map((s) => (
        <a key={s} href="#" aria-label={s} className="hover:opacity-60">
          {s}
        </a>
      ))}
    </div>
  );
}

function Brands() {
  return (
    <div className="grid grid-cols-2 gap-8 sm:grid-cols-5">
      {brands.map((b) => (
        <div key={b.a} className="text-center leading-none">
          <p className="text-[clamp(1.1rem,1.9vw,2.1rem)] font-extrabold tracking-tight">{b.a}</p>
          <p className="mt-1 text-[clamp(0.45rem,0.55vw,0.7rem)] tracking-[0.3em] text-neutral-500">
            {b.b === "sub" ? "" : b.b}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative">
      {/* desktop: absolute collage mirrored from the demo (1920 design grid) */}
      <div className="relative hidden lg:block" style={{ height: u(1140) }}>
        <Parallax speed={0.12} className="absolute" style={{ left: u(160), top: u(136), width: u(160), height: u(564) }}>
          <Image src={images.heroPlant} alt="Planta suspensa" fill sizes="10vw" priority className="object-cover" />
        </Parallax>

        <Parallax speed={-0.06} className="absolute" style={{ left: u(1152), top: u(136), width: u(736), height: u(564) }}>
          <Image src={images.heroMain} alt="Sala clara e minimalista" fill sizes="40vw" priority className="object-cover" />
        </Parallax>

        <span className="absolute h-px bg-ink" style={{ left: u(480), top: u(136), width: u(53) }} />
        <span className="absolute h-px bg-ink" style={{ left: u(1095), top: u(647), width: u(53) }} />

        <Parallax mode="scrollX" speed={0.28} className="absolute z-10 whitespace-nowrap" style={{ left: u(485), top: u(285) }}>
          <h1
            className="font-extrabold"
            style={{ fontSize: u(150), lineHeight: 1.1, letterSpacing: "-0.055em" }}
          >
            Interior Design
          </h1>
        </Parallax>

        <Reveal className="absolute" style={{ left: u(490), top: u(470), width: u(450) }}>
          <p className="text-neutral-700" style={{ fontSize: u(18), lineHeight: 1.65 }}>
            There are many variations of passages of lorem ipsum available majority view project alteration some form by injected humour, or randomised .
          </p>
        </Reveal>

        <Parallax speed={0.08} className="absolute" style={{ left: u(800), top: u(700), width: u(320), height: u(275) }}>
          <Image src={images.heroSmall} alt="Ambiente com planta" fill sizes="20vw" className="object-cover" />
        </Parallax>

        <Reveal className="absolute" style={{ left: u(1265), top: u(740), width: u(430) }}>
          <h2 className="font-extrabold" style={{ fontSize: u(64), letterSpacing: "-0.05em", lineHeight: 1 }}>
            look
          </h2>
          <p className="text-neutral-700" style={{ marginTop: u(40), fontSize: u(18), lineHeight: 1.65 }}>
            There Are Many Variations Of Passages Of Lorem Ipsum Available Majority <a href="#portfolio" className="font-semibold underline">View Project</a> Alteration Some Form By Injected Humour Or.
          </p>
        </Reveal>

        <div className="absolute" style={{ left: u(190), top: u(960) }}>
          <Socials />
        </div>

        <div className="absolute" style={{ left: u(160), top: u(990), width: u(1600) }}>
          <Brands />
        </div>
      </div>

      {/* mobile / tablet */}
      <div className="px-6 pb-16 pt-32 lg:hidden">
        <h1 className="text-[clamp(3rem,13vw,6rem)] font-extrabold leading-[0.95] tracking-[-0.05em]">Interior Design</h1>
        <p className="mt-6 text-neutral-700">
          There are many variations of passages of lorem ipsum available majority view project alteration some form by injected humour.
        </p>
        <div className="relative mt-10 aspect-[4/3]">
          <Image src={images.heroMain} alt="Sala clara e minimalista" fill sizes="100vw" priority className="object-cover" />
        </div>
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="relative aspect-[3/4]">
            <Image src={images.heroPlant} alt="" fill sizes="50vw" className="object-cover" />
          </div>
          <div className="relative aspect-[3/4]">
            <Image src={images.heroSmall} alt="" fill sizes="50vw" className="object-cover" />
          </div>
        </div>
        <div className="mt-14">
          <Brands />
        </div>
      </div>
    </section>
  );
}
