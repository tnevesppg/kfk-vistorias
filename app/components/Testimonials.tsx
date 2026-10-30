import { testimonials } from "@/lib/data";
import Reveal from "./Reveal";

export default function Testimonials() {
  return (
    <section className="relative px-6 py-20 lg:px-[8.33%] lg:py-[9vw]">
      <div className="blueprint pointer-events-none absolute right-0 top-[3vw] hidden h-[30vw] w-[26vw] opacity-80 lg:block" />
      <div className="relative grid gap-12 lg:grid-cols-[1fr_1fr_1fr_0.45fr] lg:gap-[3vw]">
        {testimonials.map((t, i) => (
          <Reveal key={i} delay={i * 120}>
            <span className="heading block text-[5rem] leading-none text-neutral-300 lg:text-[5vw]">“</span>
            <p className="mt-4 text-[13px] leading-7 text-neutral-600 lg:text-[0.78vw] lg:leading-[1.85]">{t.quote}</p>
            <div className="mt-8 flex items-center gap-4">
              <span className="h-px w-8 bg-ink" />
              <div>
                <p className="text-sm font-bold lg:text-[0.85vw]">{t.name}</p>
                <p className="text-xs text-neutral-500 lg:text-[0.65vw]">{t.city}</p>
              </div>
            </div>
          </Reveal>
        ))}
        <h2 className="heading text-4xl lg:text-[2.3vw] lg:[writing-mode:vertical-rl]">Customer Says .</h2>
      </div>
    </section>
  );
}
