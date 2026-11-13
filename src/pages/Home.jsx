import React, { useMemo, useState } from "react";
import { ArrowRight, ArrowUpRight, MessageCircle, Star } from "lucide-react";
import { href } from "../lib/router.js";
import { useProducts } from "../lib/store.js";
import ProductCard from "../components/ProductCard.jsx";
import ProductModal from "../components/ProductModal.jsx";
import Marquee from "../components/Marquee.jsx";
import { Drips, Walker } from "../components/Brand.jsx";
import { LOGOS, waLink } from "../config.js";

const RANGES = [
  { cat: "Tees", img: "/images/drip-tee-cream.jpg", note: "Oversized · heavy cotton", cls: "md:col-span-2 md:row-span-2 aspect-[4/5] md:aspect-auto" },
  { cat: "Hoodies & Sets", img: "/images/arrive-set-red.jpg", note: "Hoodie + jogger sets", cls: "aspect-[4/5]" },
  { cat: "Kids", img: "/images/kids-tee-navy.jpg", note: "Eight colours", cls: "aspect-[4/5]" },
  { cat: "Zeal Rulers", img: "/images/zr-sweat-black.jpg", note: "Rise. Focus. Win.", cls: "aspect-[4/5]" },
  { cat: "Headwear & Shorts", img: "/images/drip-bucket-hat.jpg", note: "Bucket hats · shorts", cls: "aspect-[4/5]" },
];

const STEPS = [
  ["01", "Pick your pieces", "Choose colour, size and quantity. Add as many as you like to your basket."],
  ["02", "Send your request", "Share your name and number — no card, no payment on the site."],
  ["03", "We confirm on WhatsApp", "We confirm stock, sizing and delivery, then you arrive in style."],
];

export default function Home() {
  const { products } = useProducts();
  const [open, setOpen] = useState(null);
  const fans = useMemo(() => {
    const f = products.filter((p) => p.featured);
    return (f.length >= 4 ? f : products).slice(0, 8);
  }, [products]);

  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden pt-[88px] md:pt-[104px]">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-20 pt-10 md:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:pb-28 lg:pt-14">
          <div>
            <p className="reveal eyebrow inline-flex items-center gap-2 border-2 border-ink bg-white px-3 py-1.5">
              <Walker size={9} color="#E3181E" /> Nata Sweswi Clothing
            </p>
            <h1 className="reveal h-display mt-6 text-[5.2rem] sm:text-[7rem] lg:text-[9.2rem]" data-d="1">
              Arrive
              <br />
              in <span className="relative inline-block text-blood">style<svg className="absolute -bottom-3 left-0 h-4 w-full" viewBox="0 0 200 16" preserveAspectRatio="none" aria-hidden="true"><path d="M2 8c30-6 60 4 100-1s70-3 96 0" stroke="#0b0b0b" strokeWidth="5" fill="none" strokeLinecap="round" /></svg></span>.
            </h1>
            <p className="reveal mt-9 max-w-md text-lg leading-relaxed text-ink/70" data-d="2">
              Tees, hoodies, matching sets and kids wear made to be seen. We walk this journey with you — <strong className="text-ink">guaranteed awesomeness.</strong>
            </p>
            <div className="reveal mt-9 flex flex-wrap gap-3" data-d="3">
              <a href={href("collections")} className="btn-blood">Shop the range <ArrowRight size={17} /></a>
              <a href={waLink("Hi Nata Sweswi, I'd like to order.")} target="_blank" rel="noreferrer" className="btn-line"><MessageCircle size={17} /> WhatsApp us</a>
            </div>
            <ul className="reveal mt-12 flex flex-wrap gap-x-10 gap-y-4 border-t-2 border-ink pt-6" data-d="3">
              {[["6", "official logos"], ["8", "kids colours"], ["1:1", "WhatsApp quotes"]].map(([n, l]) => (
                <li key={l} className="flex items-baseline gap-2"><span className="font-display text-4xl leading-none">{n}</span><span className="eyebrow text-[0.65rem] text-ink/50">{l}</span></li>
              ))}
            </ul>
          </div>

          <div className="reveal relative mx-auto w-full max-w-[520px] pb-10 pr-6 lg:mx-0" data-d="1">
            <div className="absolute -right-2 top-10 h-[86%] w-[86%] bg-blood" aria-hidden="true" />
            <div className="relative aspect-[4/5] overflow-hidden border-2 border-ink bg-smoke shadow-[8px_8px_0_0_#0b0b0b]">
              <img src="/images/drip-tee-black.jpg" alt="Model in the black Nata Sweswi drip logo tee, white shorts and bucket hat" className="h-full w-full object-cover object-top" fetchpriority="high" />
            </div>
            <div className="absolute -bottom-2 -left-4 w-[42%] -rotate-3 border-2 border-ink bg-smoke shadow-[5px_5px_0_0_#0b0b0b] sm:-left-8">
              <img src="/images/drip-tee-cream.jpg" alt="Cream oversized drip logo tee" className="aspect-[4/5] w-full object-cover object-top" loading="lazy" />
            </div>
            <div className="absolute -right-1 top-2 grid h-28 w-28 place-items-center sm:h-32 sm:w-32">
              <svg viewBox="0 0 120 120" className="spin-slow absolute inset-0" aria-hidden="true">
                <defs><path id="c" d="M60 60m-46 0a46 46 0 1 1 92 0a46 46 0 1 1 -92 0" /></defs>
                <circle cx="60" cy="60" r="58" fill="#0b0b0b" />
                <text fill="#fff" fontSize="11.5" fontWeight="800" letterSpacing="3.2"><textPath href="#c">ALL 6 LOGOS · ALL AVAILABLE ·</textPath></text>
              </svg>
              <Walker size={22} color="#E3181E" className="relative" />
            </div>
          </div>
        </div>
      </section>

      <Marquee />

      {/* WALK STATEMENT */}
      <section className="relative overflow-hidden bg-ink pb-24 pt-36 text-white">
        <Drips />
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="reveal eyebrow text-blood">The idea</p>
          <h2 className="reveal h-display mt-5 text-[3.4rem] sm:text-7xl lg:text-[8.5rem]" data-d="1">
            We walk this<br /><span className="stroke-text-light">journey</span> <span className="text-blood">with you.</span>
          </h2>
          <p className="reveal mt-8 max-w-xl text-lg leading-relaxed text-white/65" data-d="2">
            Every step counts, so every piece is made to carry you there. Wear the walker. Wear the drip. Wear the crew. Show up like you mean it — <span className="font-marker text-white">#KulekuNyanganyeni</span>
          </p>
        </div>
        <div className="relative mx-auto mt-16 h-14 max-w-none overflow-hidden" aria-hidden="true">
          <div className="absolute inset-x-0 bottom-1 border-t-2 border-dashed border-white/25" />
          <div className="walker text-white"><Walker size={26} /></div>
        </div>
      </section>

      {/* RANGES */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="reveal eyebrow text-blood">Shop by range</p>
            <h2 className="reveal h-display mt-4 text-6xl md:text-8xl" data-d="1">Pick your<br />lane</h2>
          </div>
          <a href={href("collections")} className="reveal btn-line" data-d="2">View everything <ArrowUpRight size={16} /></a>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
          {RANGES.map((r, i) => (
            <a key={r.cat} href={href(`collections?cat=${encodeURIComponent(r.cat)}`)} data-d={i % 3} className={`reveal group relative overflow-hidden border-2 border-ink bg-smoke ${r.cls}`}>
              <img src={r.img} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover object-top transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4 text-white md:p-6">
                <p className="eyebrow text-[0.6rem] text-white/70">{r.note}</p>
                <h3 className={`h-display mt-1 ${i === 0 ? "text-4xl md:text-6xl" : "text-3xl md:text-4xl"}`}>{r.cat}</h3>
                <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest transition group-hover:gap-3 group-hover:text-blood">Shop <ArrowRight size={14} /></span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* FAN FAVOURITES */}
      <section className="border-y-2 border-ink bg-white py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="reveal eyebrow inline-flex items-center gap-2 text-blood"><Star size={13} fill="currentColor" /> Fan favourites</p>
              <h2 className="reveal h-display mt-4 text-6xl md:text-8xl" data-d="1">On heavy<br />rotation</h2>
            </div>
            <a href={href("collections")} className="reveal btn-ink" data-d="2">Shop all <ArrowRight size={16} /></a>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-x-3 gap-y-10 md:grid-cols-3 md:gap-x-6 lg:grid-cols-4">
            {fans.map((p, i) => (<ProductCard key={p.id} p={p} i={i} onOpen={setOpen} />))}
          </div>
        </div>
      </section>

      {/* SIX LOGOS */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="reveal eyebrow text-blood">The marks</p>
            <h2 className="reveal h-display mt-4 text-6xl md:text-8xl" data-d="1">Six logos.<br />One <span className="text-blood">crew.</span></h2>
            <p className="reveal mt-6 max-w-sm text-base leading-relaxed text-ink/70" data-d="2">
              Every official Nata Sweswi logo is available on every piece. Choose the one that sounds like you — or mix them across a whole team.
            </p>
            <a href={href("custom")} className="reveal btn-blood mt-8" data-d="3">Order with your logo <ArrowRight size={16} /></a>
          </div>
          <div className="grid grid-cols-2 gap-3 md:gap-5">
            {LOGOS.map((l, i) => (
              <a key={l.n} href={href(`custom?logo=${l.n}`)} data-d={i % 2 ? 1 : undefined} className="reveal group relative block overflow-hidden border-2 border-ink bg-white transition hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#E3181E]">
                <span className="absolute left-3 top-3 z-10 grid h-8 w-8 place-items-center bg-ink font-display text-lg text-white">{l.n}</span>
                <div className="grid aspect-[4/3] place-items-center p-5">
                  <img src={l.img} alt={`Logo ${l.n}: ${l.name}`} loading="lazy" className="max-h-full max-w-full object-contain mix-blend-multiply" />
                </div>
                <p className="flex items-center justify-between border-t-2 border-ink px-4 py-3 text-xs font-extrabold uppercase tracking-widest">{l.name} <ArrowUpRight size={14} className="transition group-hover:text-blood" /></p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ZEAL RULERS */}
      <section className="relative overflow-hidden bg-ink pb-24 pt-32 text-white">
        <Drips color="#D9A441" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-2">
          <div className="reveal relative mx-auto w-full max-w-md lg:order-2">
            <div className="absolute -left-4 -top-4 h-full w-full border-2 border-gold" aria-hidden="true" />
            <img src="/images/zr-set-full.jpg" alt="Zeal Rulers black and gold set" loading="lazy" className="relative aspect-[4/5] w-full object-cover object-top" />
          </div>
          <div>
            <p className="reveal eyebrow text-gold">A Nata Sweswi brand</p>
            <h2 className="reveal h-display mt-4 text-7xl md:text-[8.5rem]" data-d="1"><span className="text-gold">Zeal</span><br />Rulers</h2>
            <p className="reveal mt-4 font-marker text-2xl text-white/80" data-d="2">Rise. Focus. Win.</p>
            <p className="reveal mt-6 max-w-md text-base leading-relaxed text-white/65" data-d="2">
              Black-and-gold performance wear with the ZR crown. Sweat sets, training tops and shorts for people who put in the work.
            </p>
            <a href={href("collections?cat=Zeal%20Rulers")} className="reveal mt-9 inline-flex items-center justify-center gap-2 bg-gold px-6 py-3.5 text-sm font-extrabold uppercase tracking-wider text-ink transition hover:bg-white" data-d="3">
              Shop Zeal Rulers <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* KIDS */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="reveal eyebrow text-blood">Kids range</p>
            <h2 className="reveal h-display mt-4 text-6xl md:text-8xl" data-d="1">Little legends,<br />big drip</h2>
          </div>
          <a href={href("collections?cat=Kids")} className="reveal btn-line" data-d="2">Shop kids <ArrowUpRight size={16} /></a>
        </div>
        <div className="no-scrollbar mt-12 flex snap-x gap-3 overflow-x-auto pb-2 md:grid md:grid-cols-4 md:gap-5 md:overflow-visible lg:grid-cols-8 lg:gap-3">
          {["black", "white", "red", "pink", "cream", "navy", "green", "grey"].map((c, i) => (
            <a key={c} href={href("collections?cat=Kids")} className="reveal relative w-[44%] shrink-0 snap-start overflow-hidden border-2 border-ink bg-smoke sm:w-[30%] md:w-auto" data-d={i % 4 ? i % 4 : undefined}>
              <img src={`/images/kids-tee-${c}.jpg`} alt={`Kids drip tee in ${c}`} loading="lazy" className="aspect-[1/2] w-full object-cover object-top" />
            </a>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="border-y-2 border-ink bg-white py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="reveal eyebrow text-blood">How ordering works</p>
          <h2 className="reveal h-display mt-4 text-6xl md:text-8xl" data-d="1">Three steps.<br />Zero stress.</h2>
          <ol className="mt-14 grid gap-5 md:grid-cols-3">
            {STEPS.map(([n, t, d], i) => (
              <li key={n} data-d={i + 1} className="reveal border-2 border-ink p-7 transition hover:bg-ink hover:text-white">
                <span className="font-display text-6xl text-blood">{n}</span>
                <h3 className="mt-5 font-display text-3xl uppercase">{t}</h3>
                <p className="mt-3 text-sm leading-relaxed opacity-70">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-blood py-24 text-white md:py-32">
        <div className="absolute -right-10 bottom-0 opacity-15" aria-hidden="true"><Walker size={340} /></div>
        <div className="relative mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="reveal h-display text-[3.6rem] sm:text-8xl md:text-[10rem]">Ready to<br />arrive?</h2>
          <div className="reveal mt-10 flex flex-wrap gap-3" data-d="1">
            <a href={waLink("Hi Nata Sweswi, I'd like to order.")} target="_blank" rel="noreferrer" className="btn bg-white text-ink hover:bg-ink hover:text-white"><MessageCircle size={17} /> Chat on WhatsApp</a>
            <a href={href("custom")} className="btn-line-light">Request a custom quote <ArrowUpRight size={16} /></a>
          </div>
        </div>
      </section>

      {open && <ProductModal p={open} onClose={() => setOpen(null)} />}
    </main>
  );
}
