import Image from "next/image";
import { posts } from "@/lib/data";

export default function Blog() {
  return (
    <section id="blog" className="bg-neutral-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6">
          <h2 className="section-title text-4xl font-bold md:text-5xl">
            Recent Blog<span className="text-accent">.</span>
          </h2>
          <a href="#blog" className="text-xs font-medium uppercase tracking-widest hover:text-accent">
            View Blog
          </a>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {posts.map((p) => (
            <article key={p.title} className="group">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={p.src}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <p className="mt-5 text-xs uppercase tracking-widest text-neutral-400">
                {p.date} · by moderator
              </p>
              <h3 className="mt-2 text-lg font-semibold leading-snug group-hover:text-accent">
                {p.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
