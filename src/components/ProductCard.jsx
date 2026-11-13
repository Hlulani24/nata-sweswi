import React from "react";
import { Plus } from "lucide-react";
import Price, { isSpecial } from "./Price.jsx";

export default function ProductCard({ p, onOpen, i = 0 }) {
  const a = p.images[0];
  const b = p.images[1];
  const swatches = p.images.filter((x) => x.hex).slice(0, 6);
  const special = isSpecial(p);
  return (
    <button
      onClick={() => onOpen(p)}
      className="reveal group block w-full text-left"
      data-d={i % 4 === 1 ? 1 : i % 4 === 2 ? 2 : i % 4 === 3 ? 3 : undefined}
      aria-label={`View ${p.name}`}
    >
      <div className="relative aspect-[4/5] overflow-hidden border-2 border-ink bg-smoke transition group-hover:shadow-[6px_6px_0_0_#0b0b0b] group-hover:-translate-x-0.5 group-hover:-translate-y-0.5">
        {a && <img src={a.src} alt={`${p.name} — ${a.label || ""}`} loading="lazy" className={`absolute inset-0 h-full w-full object-cover object-top transition duration-500 ${b ? "group-hover:opacity-0" : "group-hover:scale-105"}`} />}
        {b && <img src={b.src} alt="" loading="lazy" aria-hidden="true" className="absolute inset-0 h-full w-full scale-105 object-cover object-top opacity-0 transition duration-500 group-hover:scale-100 group-hover:opacity-100" />}
        <div className="absolute left-3 top-3 flex flex-col items-start gap-1.5">
          {special && <span className="bg-blood px-2.5 py-1 text-[0.65rem] font-extrabold uppercase tracking-widest text-white">Special</span>}
          {p.featured && !special && <span className="bg-ink px-2.5 py-1 text-[0.65rem] font-extrabold uppercase tracking-widest text-white">Fan fave</span>}
        </div>
        <span className="absolute inset-x-0 bottom-0 flex translate-y-full items-center justify-between bg-ink px-4 py-3 text-xs font-extrabold uppercase tracking-widest text-white transition duration-300 group-hover:translate-y-0">
          Quick view <Plus size={16} />
        </span>
      </div>
      <div className="mt-3 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="eyebrow text-[0.62rem] text-ink/45">{p.cat}</p>
          <h3 className="mt-1 font-display text-2xl uppercase leading-none">{p.name}</h3>
          {swatches.length > 1 && (
            <span className="mt-2.5 flex items-center gap-1.5" aria-label={`${p.images.length} colours`}>
              {swatches.map((s) => (<span key={s.src} title={s.label} className="h-3.5 w-3.5 rounded-full border border-ink/40" style={{ background: s.hex }} />))}
              {p.images.length > 6 && <span className="text-[0.65rem] font-bold text-ink/50">+{p.images.length - 6}</span>}
            </span>
          )}
        </div>
        <Price p={p} className="shrink-0" />
      </div>
    </button>
  );
}
