import React, { useEffect, useState } from "react";
import { X, ArrowRight } from "lucide-react";
import { LOOKBOOK } from "../data/products.js";
import { href } from "../lib/router.js";

export default function Lookbook() {
  const [i, setI] = useState(null);
  useEffect(() => {
    if (i === null) return;
    const on = (e) => {
      if (e.key === "Escape") setI(null);
      if (e.key === "ArrowRight") setI((n) => (n + 1) % LOOKBOOK.length);
      if (e.key === "ArrowLeft") setI((n) => (n - 1 + LOOKBOOK.length) % LOOKBOOK.length);
    };
    window.addEventListener("keydown", on);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", on); document.body.style.overflow = ""; };
  }, [i]);

  return (
    <main className="pt-[88px] md:pt-[104px]">
      <section className="mx-auto max-w-7xl px-5 pb-24 pt-12 md:px-8 md:pt-16">
        <p className="reveal eyebrow text-blood">Lookbook</p>
        <h1 className="reveal h-display mt-4 text-7xl md:text-[10rem]" data-d="1">Seen <span className="text-blood">on</span><br />the street</h1>
        <p className="reveal mt-6 max-w-lg text-lg text-ink/65" data-d="2">The crew, the colours and the logos — straight from the Nata Sweswi family.</p>

        <div className="mt-14 columns-2 gap-3 md:columns-3 md:gap-5">
          {LOOKBOOK.map((s, n) => (
            <button key={s.src} onClick={() => setI(n)} className="reveal group relative mb-3 block w-full break-inside-avoid overflow-hidden border-2 border-ink bg-smoke text-left md:mb-5" aria-label={`Open: ${s.caption}`}>
              <img src={s.src} alt={s.caption} loading="lazy" className="w-full transition duration-700 group-hover:scale-[1.03]" />
              <span className="absolute inset-x-0 bottom-0 translate-y-full bg-ink px-4 py-3 text-xs font-extrabold uppercase tracking-widest text-white transition duration-300 group-hover:translate-y-0">{s.caption}</span>
            </button>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-6 border-2 border-ink bg-ink p-8 text-white md:p-12">
          <p className="h-display text-4xl md:text-6xl">Like what you see?</p>
          <a href={href("collections")} className="btn-blood">Shop the range <ArrowRight size={16} /></a>
        </div>
      </section>

      {i !== null && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-ink/95 p-4" onClick={() => setI(null)} role="dialog" aria-modal="true" aria-label="Photo viewer">
          <button onClick={() => setI(null)} aria-label="Close" className="absolute right-4 top-4 grid h-12 w-12 place-items-center border-2 border-white text-white hover:bg-white hover:text-ink"><X size={20} /></button>
          <figure className="max-h-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
            <img src={LOOKBOOK[i].src} alt={LOOKBOOK[i].caption} className="max-h-[80dvh] w-auto max-w-full border-2 border-white object-contain" />
            <figcaption className="mt-3 flex items-center justify-between text-sm font-bold uppercase tracking-widest text-white">
              <span>{LOOKBOOK[i].caption}</span>
              <span className="flex gap-2">
                <button onClick={() => setI((n) => (n - 1 + LOOKBOOK.length) % LOOKBOOK.length)} className="border-2 border-white px-3 py-1 hover:bg-white hover:text-ink">Prev</button>
                <button onClick={() => setI((n) => (n + 1) % LOOKBOOK.length)} className="border-2 border-white px-3 py-1 hover:bg-white hover:text-ink">Next</button>
              </span>
            </figcaption>
          </figure>
        </div>
      )}
    </main>
  );
}
