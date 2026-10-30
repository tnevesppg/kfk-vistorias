import Image from "next/image";
import { posts } from "@/lib/data";
import Parallax from "./Parallax";
import Reveal from "./Reveal";

export default function Blog() {
  return (
    <section id="blog" className="px-6 pb-20 pt-4 lg:px-[8.33%] lg:pb-[8vw] lg:pt-[2vw]">
      <Reveal className="flex items-center justify-between gap-6">
        <h2 className="heading text-4xl lg:text-[2.1vw]">Recent Blog</h2>
        <a href="#blog" className="btn-dark">View Blog</a>
      </Reveal>
      <div className="mt-10 grid gap-10 lg:mt-[3vw] lg:grid-cols-3 lg:gap-0">
        {posts.map((p, i) => (
          <article key={p.title} className="group relative">
            <Reveal variant="wipe" delay={i * 120} className="relative aspect-[4/3] lg:aspect-auto lg:h-[22vw]">
              <Parallax speed={i === 1 ? -0.04 : 0.04} className="absolute inset-0">
                <Image src={p.src} alt="" fill sizes="(min-width:1024px) 33vw, 100vw" className="object-cover" />
              </Parallax>
            </Reveal>
            <Reveal className="relative z-10 -mt-10 ml-6 bg-white p-5 lg:-mt-[3vw] lg:ml-[3.5vw] lg:mr-[-2vw] lg:p-[1.6vw]" delay={i * 100}>
              <p className="text-[10px] text-neutral-500 lg:text-[0.6vw]">{p.date} &nbsp;by moderator</p>
              <h3 className="mt-2 text-sm font-bold leading-snug transition-colors group-hover:text-brand lg:text-[0.9vw]">{p.title}</h3>
            </Reveal>
          </article>
        ))}
      </div>
    </section>
  );
}
