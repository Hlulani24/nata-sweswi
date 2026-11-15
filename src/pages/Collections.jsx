import React, { useMemo, useState } from "react";
import { Search, Loader2 } from "lucide-react";
import { useProducts } from "../lib/store.js";
import { categoriesOf } from "../data/products.js";
import { isSpecial } from "../components/Price.jsx";
import ProductCard from "../components/ProductCard.jsx";
import ProductModal from "../components/ProductModal.jsx";
import { href } from "../lib/router.js";
import { PRICE_NOTE, SHOW_PRICES } from "../config.js";

export default function Collections({ params }) {
  const { products, loading } = useProducts();
  const CATEGORIES = ["All", ...categoriesOf(products).filter((c) => products.some((p) => p.cat === c))];
  const hasSpecials = products.some(isSpecial);
  const tabs = hasSpecials ? [...CATEGORIES, "Specials"] : CATEGORIES;
  const cat = tabs.includes(params.cat) ? params.cat : "All";
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(null);

  const list = useMemo(() => {
    const s = q.trim().toLowerCase();
    return products.filter(
      (p) =>
        (cat === "All" || (cat === "Specials" ? isSpecial(p) : p.cat === cat)) &&
        (!s || `${p.name} ${p.cat} ${p.blurb}`.toLowerCase().includes(s))
    );
  }, [products, cat, q]);

  return (
    <main className="pt-[88px] md:pt-[104px]">
      <section className="mx-auto max-w-7xl px-5 pb-24 pt-12 md:px-8 md:pt-16">
        <p className="reveal eyebrow text-blood">The collection</p>
        <h1 className="reveal h-display mt-4 text-7xl md:text-[10rem]" data-d="1">Shop <span className="stroke-text">all</span></h1>

        <div className="sticky top-[84px] z-20 -mx-5 mt-10 border-y-2 border-ink bg-paper/95 px-5 py-3 backdrop-blur md:top-[96px] md:mx-0 md:border-2 md:px-4">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="no-scrollbar flex gap-2 overflow-x-auto" role="tablist" aria-label="Categories">
              {tabs.map((c) => {
                const on = c === cat;
                return (
                  <a key={c} href={href(c === "All" ? "collections" : `collections?cat=${encodeURIComponent(c)}`)} role="tab" aria-selected={on}
                    className={`shrink-0 border-2 px-4 py-2 text-xs font-extrabold uppercase tracking-widest transition ${on ? "border-ink bg-ink text-white" : c === "Specials" ? "border-blood text-blood hover:bg-blood hover:text-white" : "border-ink/25 hover:border-ink"}`}>
                    {c}
                  </a>
                );
              })}
            </div>
            <label className="relative block md:w-64">
              <span className="sr-only">Search products</span>
              <Search size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-ink/40" />
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search tees, hoodies…" className="field-light !py-2.5 pl-10" />
            </label>
          </div>
        </div>

        {loading ? (
          <div className="grid place-items-center py-32 text-ink/50"><Loader2 className="animate-spin" /></div>
        ) : list.length ? (
          <>
            <p className="mt-6 text-xs font-bold uppercase tracking-widest text-ink/45">{list.length} piece{list.length === 1 ? "" : "s"}</p>
            <div className="mt-6 grid grid-cols-2 gap-x-3 gap-y-10 md:grid-cols-3 md:gap-x-6 lg:grid-cols-4">
              {list.map((p, i) => (<ProductCard key={p.id} p={p} i={i} onOpen={setOpen} />))}
            </div>
          </>
        ) : (
          <div className="mt-16 border-2 border-dashed border-ink/30 p-14 text-center">
            <p className="h-display text-4xl">Nothing matches that.</p>
            <p className="mt-2 text-sm text-ink/60">Try another word, or <a href={href("collections")} className="font-bold text-blood underline">see everything</a>.</p>
          </div>
        )}
        {SHOW_PRICES && <p className="mt-14 text-xs text-ink/50">{PRICE_NOTE}</p>}
      </section>
      {open && <ProductModal p={open} onClose={() => setOpen(null)} />}
    </main>
  );
}
