import React from "react";
import { ArrowRight } from "lucide-react";
import { href } from "../lib/router.js";
import { Drips, Walker } from "../components/Brand.jsx";

const VALUES = [
  ["Guaranteed awesomeness", "Every piece leaves us checked, folded and ready to be worn loud. If it carries our name, it has to earn it."],
  ["We walk with you", "From the first tee to the full crew order, we stay with you the whole way — a real person on WhatsApp, not a ticket number."],
  ["Arrive in style", "Clothes are how you walk into a room before you say a word. We make sure that first impression is a good one."],
];

export default function About() {
  return (
    <main className="pt-[88px] md:pt-[104px]">
      <section className="mx-auto max-w-7xl px-5 pb-24 pt-12 md:px-8 md:pt-16">
        <p className="reveal eyebrow text-blood">Our story</p>
        <h1 className="reveal h-display mt-4 text-7xl md:text-[10rem]" data-d="1">
          Walk it.<br /><span className="text-blood">Wear it.</span>
        </h1>
        <div className="mt-14 grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="reveal space-y-6 text-lg leading-relaxed text-ink/75">
            <p className="text-2xl font-bold leading-snug text-ink md:text-3xl">
              Nata Sweswi is streetwear with a pulse — a walking man, a splash of red and a promise to stay beside you.
            </p>
            <p>
              The name and the mark say it all: life is a walk, and the best walks are shared. That is why our logo is a man mid-stride, and why our
              tagline is <em>“We walk this journey with you.”</em>
            </p>
            <p>
              We make tees, hoodies, matching sets, kids wear and custom orders for people who care how they show up. Six official logos, endless
              colours, and the same promise on every piece: <strong className="text-ink">guaranteed awesomeness.</strong>
            </p>
            <p>
              Our sister brand, <strong className="text-ink">Zeal Rulers</strong>, takes that energy into training and sportswear — Rise. Focus. Win.
            </p>
          </div>
          <div className="reveal relative mx-auto w-full max-w-md" data-d="1">
            <div className="absolute -right-3 -top-3 h-full w-full bg-blood" aria-hidden="true" />
            <img src="/images/crew-group.jpg" alt="The Nata Sweswi crew in tees, hoodies and sets" className="relative w-full border-2 border-ink object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="relative bg-ink pb-24 pt-32 text-white">
        <Drips />
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="reveal eyebrow text-blood">What we stand for</p>
          <div className="mt-10 grid gap-px bg-white/15 md:grid-cols-3">
            {VALUES.map(([t, d], i) => (
              <div key={t} data-d={i + 1} className="reveal bg-ink p-8 md:p-10">
                <Walker size={18} color="#E3181E" />
                <h3 className="h-display mt-6 text-4xl">{t}</h3>
                <p className="mt-4 text-sm leading-relaxed text-white/60">{d}</p>
              </div>
            ))}
          </div>
          <div className="reveal mt-20 flex flex-wrap items-center justify-between gap-6">
            <p className="font-marker text-3xl text-white/85 md:text-5xl">#KulekuNyanganyeni</p>
            <a href={href("collections")} className="btn-blood">Shop the range <ArrowRight size={16} /></a>
          </div>
        </div>
      </section>
    </main>
  );
}
