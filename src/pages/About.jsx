import React from "react";
import { ArrowRight } from "lucide-react";
import { href } from "../lib/router.js";
import { Drips, Walker } from "../components/Brand.jsx";
import { BRAND } from "../config.js";

const VALUES = [
  ["Custom-made", "Clothing made around what you need: corporate uniforms, school uniforms, casual apparel or PPE (Personal Protective Equipment)."],
  ["Stylish, durable, comfortable", "High-quality pieces that make our clients look and feel their best, from the first wear to the hundredth wash."],
  ["Branding that lasts", "Vehicle branding, banners, corporate gifts, backdrops, custom designed gazebos and event branding for businesses."],
];

const COLLECTIONS = [
  ["Essentials Collection", "Tees, hoodies, sweaters"],
  ["Streetwear Collection", "Oversized fits, graphic designs, puffer jackets"],
  ["Sports & Active Collection", "Tracksuits, training gear, gym wear"],
  ["Accessories", "Caps, bags, socks, beanies"],
];

export default function About() {
  return (
    <main className="pt-[88px] md:pt-[104px]">
      <section className="mx-auto max-w-7xl px-5 pb-24 pt-12 md:px-8 md:pt-16">
        <p className="reveal eyebrow text-blood">Our story · Who we are</p>
        <h1 className="reveal h-display mt-4 text-7xl md:text-[10rem]" data-d="1">
          Walk it.<br /><span className="text-blood">Wear it.</span>
        </h1>
        <div className="mt-14 grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="reveal space-y-6 text-lg leading-relaxed text-ink/75">
            <p className="text-2xl font-bold leading-snug text-ink md:text-3xl">
              We pride ourselves in offering custom-made clothing that is not only stylish but also durable and comfortable, ensuring that our clients look and feel their best.
            </p>
            <p>
              Whether you need corporate uniforms, school uniforms, casual apparel, or PPE (Personal Protective Equipment), we provide high-quality
              products tailored to meet your specific needs.
            </p>
            <p>
              In addition to our clothing manufacturing services, we offer a full range of branding solutions that help businesses elevate their
              visibility and create lasting impressions. From vehicle branding, banners, corporate gifts, and backdrops to custom designed gazebos and
              event branding.
            </p>
            <p className="font-marker text-2xl text-blood">“{BRAND.tagline}”</p>
          </div>
          <div className="reveal relative mx-auto w-full max-w-md" data-d="1">
            <div className="absolute -right-3 -top-3 h-full w-full bg-blood" aria-hidden="true" />
            <img src="/images/crew-group.jpg" alt="The Nata Sweswi crew in tees, hoodies and sets" className="relative w-full border-2 border-ink object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="border-y-2 border-ink bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="reveal eyebrow text-blood">Our in-house clothing brand</p>
          <h2 className="reveal h-display mt-4 text-5xl md:text-7xl" data-d="1">Not only creators for other brands.<br /><span className="text-blood">A brand ourselves.</span></h2>
          <p className="reveal mt-6 max-w-2xl text-base leading-relaxed text-ink/70 md:text-lg" data-d="2">
            The collection features everyday essentials and bold statement pieces designed for comfort, durability and style.
          </p>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {COLLECTIONS.map(([t, d], i) => (
              <div key={t} data-d={i % 4 || undefined} className="reveal border-2 border-ink p-6 transition hover:shadow-[5px_5px_0_0_#E3181E]">
                <span className="font-display text-5xl text-blood">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 font-display text-2xl uppercase leading-tight md:text-3xl">{t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/65">{d}</p>
              </div>
            ))}
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
