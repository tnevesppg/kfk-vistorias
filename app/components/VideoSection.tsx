import Image from "next/image";
import { images } from "@/lib/data";
import Parallax from "./Parallax";
import Reveal from "./Reveal";

export default function VideoSection() {
  return (
    <section className="px-6 py-16 lg:px-[8.33%] lg:py-[6vw]">
      <div className="relative h-[420px] overflow-hidden lg:h-[32vw]">
        <Parallax speed={0.08} className="absolute inset-x-0 -inset-y-[6%]">
          <Image src={images.video} alt="Banheiro com revestimento em pedra" fill sizes="85vw" className="object-cover" />
        </Parallax>
      </div>
      <Reveal className="relative z-10 -mt-24 ml-auto bg-white p-8 lg:-mt-[24vw] lg:mr-[6vw] lg:w-[25vw] lg:px-[2.8vw] lg:py-[3vw]">
        <h2 className="heading text-4xl lg:text-[2.3vw]">Beautiful Interior</h2>
        <span className="mt-5 block h-px w-12 bg-ink" />
        <p className="mt-6 text-[13px] leading-7 text-neutral-600 lg:text-[0.78vw] lg:leading-[1.85]">
          There are many variations of passages of Lorem Ipsum available majority have suffered alteration some form by injected humour, or randomised .
        </p>
        <a href="#" className="btn-dark mt-8 w-full !justify-start !px-5 !py-3.5">
          <span className="grid h-6 w-6 place-items-center rounded-full bg-white text-[8px] text-ink">▶</span>
          Watch Video
        </a>
      </Reveal>
    </section>
  );
}
