import Image from "next/image";
import { images } from "@/lib/data";
import Parallax from "./Parallax";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="relative px-6 py-16 lg:px-[8.33%] lg:py-0">
      {/* image strip */}
      <div className="relative grid h-[260px] grid-cols-[1fr_2.2fr_1fr] gap-4 lg:h-[27vw] lg:gap-0">
        <Reveal variant="wipe" className="relative">
          <Parallax speed={0.05} className="absolute inset-0">
            <Image src={images.aboutA} alt="" fill sizes="20vw" className="object-cover" />
          </Parallax>
        </Reveal>
        <Reveal variant="wipe" delay={120} className="relative">
          <Image src={images.aboutB} alt="Cozinha com backsplash" fill sizes="50vw" className="object-cover" />
        </Reveal>
        <Reveal variant="wipe" delay={240} className="relative">
          <Parallax speed={-0.05} className="absolute inset-0">
            <Image src={images.aboutC} alt="" fill sizes="20vw" className="object-cover" />
          </Parallax>
        </Reveal>
      </div>

      <Reveal className="relative z-10 mx-auto -mt-16 bg-white p-8 lg:-mt-[5vw] lg:w-[62.5%] lg:px-[4.2vw] lg:py-[4vw]">
        <h2 className="heading text-4xl lg:text-[3.1vw]">About Us <span className="text-sun">.</span></h2>
        <span className="rule mt-6 w-14 lg:w-[3.6vw]" />
        <p className="mt-8 text-[13px] leading-7 text-neutral-600 lg:text-[0.8vw] lg:leading-[1.9]">
          There are many variations of passages of Lorem Ipsum available majority have suffered alteration some form by injected humour, or randomised . words which don&apos;t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn&apos;t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary .
        </p>
        <p className="mt-4 text-[13px] leading-7 text-neutral-600 lg:text-[0.8vw] lg:leading-[1.9]">
          There are many variations of passages of Lorem Ipsum available majority have suffered alteration some form by injected humour, or randomised . words which don&apos;t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn&apos;t anything embarrassing hidden in the middle of text.
        </p>
        <a href="#portfolio" className="btn-dark mt-8">Read More</a>
      </Reveal>
    </section>
  );
}
