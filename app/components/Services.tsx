import Image from "next/image";
import { images, services } from "@/lib/data";
import Parallax from "./Parallax";
import Reveal from "./Reveal";

function Item({ s }: { s: (typeof services)[number] }) {
  return (
    <Reveal>
      <h3 className="text-xl font-bold lg:text-[1.35vw]">
        <span className="font-medium text-brand">{s.n}.</span> {s.title}
      </h3>
      <span className="rule mt-3 w-10" />
      <p className="mt-4 max-w-sm text-[13px] leading-7 text-neutral-600 lg:text-[0.78vw] lg:leading-[1.85]">{s.text}</p>
    </Reveal>
  );
}

export default function Services() {
  return (
    <section className="relative px-6 py-20 lg:px-[8.33%] lg:py-[9vw]">
      <div className="blueprint pointer-events-none absolute right-0 top-[6vw] hidden h-[34vw] w-[26vw] opacity-80 lg:block" />
      <div className="relative grid gap-12 lg:grid-cols-[1fr_1.15fr_1fr] lg:gap-[2.5vw]">
        {/* left column: two staggered items */}
        <div className="flex flex-col gap-12 lg:gap-[5vw]">
          <Parallax speed={0.06} className="space-y-6">
            <Reveal variant="wipe" className="relative aspect-[4/3] lg:aspect-[3/2.6]">
              <Image src={images.serviceA} alt="" fill sizes="25vw" className="object-cover" />
            </Reveal>
            <Item s={services[0]} />
          </Parallax>
          <Parallax speed={0.09} className="space-y-6 lg:-ml-[4vw] lg:mr-[2vw]">
            <Reveal variant="wipe" className="relative aspect-[4/3] lg:aspect-[3/2.3]">
              <Image src={images.serviceB} alt="" fill sizes="30vw" className="object-cover" />
            </Reveal>
            <Item s={services[1]} />
          </Parallax>
        </div>

        {/* center tall image */}
        <Reveal variant="wipe" delay={150} className="relative aspect-[3/4] lg:mt-[3vw] lg:aspect-auto lg:h-[44vw]">
          <Parallax speed={-0.05} className="absolute inset-0">
            <Image src={images.serviceMain} alt="Aparador com espelho" fill sizes="30vw" className="object-cover" />
          </Parallax>
        </Reveal>

        {/* right column */}
        <div className="relative lg:min-h-[40vw]">
          <Reveal className="lg:absolute lg:right-0 lg:top-0">
            <h2 className="heading text-4xl lg:text-[2.3vw] lg:[writing-mode:vertical-rl]">Our Services.</h2>
          </Reveal>
          <div className="mt-8 lg:absolute lg:bottom-[2vw] lg:right-0 lg:mt-0 lg:w-[82%]">
            <Item s={services[2]} />
          </div>
        </div>
      </div>
    </section>
  );
}
