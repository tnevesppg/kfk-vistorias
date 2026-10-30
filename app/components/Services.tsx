import { services } from "@/lib/data";

export default function Services() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="section-title text-4xl font-bold md:text-5xl">
          Our Services<span className="text-accent">.</span>
        </h2>
        <div className="mt-14 grid gap-12 md:grid-cols-3">
          {services.map((s, i) => (
            <div key={s.title} className="border-t border-neutral-200 pt-6">
              <span className="text-sm font-medium text-accent">
                {String(i + 1).padStart(2, "0")}.
              </span>
              <h3 className="mt-3 text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-sm leading-7 text-neutral-500">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
