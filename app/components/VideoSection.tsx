import { images } from "@/lib/data";
import Parallax from "./Parallax";
import Reveal from "./Reveal";
import HeroVideo from "./HeroVideo";

export default function VideoSection() {
  return (
    <section className="px-6 py-12 lg:px-[8.33%] lg:py-[6vw]">
      <Reveal variant="wipe" className="photo relative h-[420px] overflow-hidden lg:h-[32vw]">
        <Parallax speed={0.08} className="absolute inset-x-0 -inset-y-[6%]">
          <HeroVideo alt="Engenheiros vistoriando o terraço de um edifício" src="/videos/laudo_que_protege.mp4" poster={images.video} />
        </Parallax>
      </Reveal>
      <Reveal className="relative z-10 mt-8 paper p-0 md:mx-auto md:max-w-2xl lg:ml-auto lg:mr-[6vw] lg:max-w-none lg:-mt-[24vw] lg:w-[25vw] lg:px-[2.8vw] lg:py-[3vw]">
        <h2 className="heading text-[2.6rem] leading-[1.02] lg:text-[2.3vw]">Laudo que protege</h2>
        <span className="rule mt-5 w-12" />
        <p className="mt-6 text-[15px] leading-[1.7] text-neutral-600 lg:text-[0.88vw] lg:leading-[1.8]">
          Do contato ao laudo em quatro etapas claras: briefing, proposta, vistoria técnica e entrega do documento assinado por engenheiro.
        </p>
        <a href="#" className="btn-dark mt-8 w-full !justify-start !px-5 !py-3.5">
          <span className="grid h-6 w-6 place-items-center bg-sun text-[8px] text-ink">▶</span>
          Como Funciona
        </a>
      </Reveal>
    </section>
  );
}
