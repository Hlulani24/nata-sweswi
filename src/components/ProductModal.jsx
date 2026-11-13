import React, { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { X, MessageCircle, ShoppingBag, Minus, Plus, ArrowUpRight } from "lucide-react";
import { href } from "../lib/router.js";
import Price, { isSpecial, money } from "./Price.jsx";
import { sizesFor } from "../data/sizes.js";
import { basket } from "../lib/basket.js";
import { SHOW_PRICES, waLink } from "../config.js";

export default function ProductModal({ p, onClose }) {
  const [i, setI] = useState(0);
  const [size, setSize] = useState("");
  const [qty, setQty] = useState(1);
  const [warn, setWarn] = useState(false);
  const cur = p.images[i] || p.images[0];
  const sizes = useMemo(() => sizesFor(p), [p]);

  useEffect(() => {
    setI(0); setQty(1); setWarn(false);
    setSize(sizesFor(p).length === 1 ? sizesFor(p)[0] : "");
  }, [p.id]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = prev; };
  }, [onClose]);

  const shown = isSpecial(p) ? p.salePrice : p.price;
  const priced = SHOW_PRICES && shown != null;
  const colour = cur?.label || "Standard";
  const msg =
    `Hi Nata Sweswi, I'm interested in the ${p.name} (${colour})` +
    (size ? `, size ${size}` : "") + (qty > 1 ? `, qty ${qty}` : "") +
    (priced ? ` listed at ${money(shown)}` : "") + ". Is it available?";

  function add() {
    if (!size) { setWarn(true); return; }
    basket.add({ id: p.id, name: p.name, image: cur?.src, colour, hex: cur?.hex || null, size, qty, price: priced ? Number(shown) : null });
    onClose();
  }

  return createPortal(
    <div className="fixed inset-0 z-50 flex justify-end bg-ink/70 backdrop-blur-sm" onClick={onClose} role="dialog" aria-modal="true" aria-label={p.name}>
      <div className="sheet-in relative flex h-full w-full flex-col overflow-y-auto bg-paper md:max-w-[980px] md:flex-row md:overflow-hidden" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} aria-label="Close" className="absolute right-3 top-3 z-10 grid h-11 w-11 place-items-center border-2 border-ink bg-paper hover:bg-ink hover:text-white">
          <X size={18} />
        </button>

        {/* Gallery */}
        <div className="shrink-0 bg-smoke md:flex md:w-[52%] md:flex-col">
          <div className="relative aspect-[4/5] w-full overflow-hidden md:aspect-auto md:min-h-0 md:flex-1">
            {cur && <img key={cur.src} src={cur.src} alt={`${p.name} — ${colour}`} className="absolute inset-0 h-full w-full object-cover object-top" />}
          </div>
          {p.images.length > 1 && (
            <div className="flex gap-2 overflow-x-auto border-t-2 border-ink bg-paper p-3 no-scrollbar">
              {p.images.map((im, n) => (
                <button key={im.src} onClick={() => setI(n)} aria-label={`Show ${im.label}`} aria-pressed={n === i}
                  className={`h-16 w-14 shrink-0 overflow-hidden border-2 transition ${n === i ? "border-blood" : "border-ink/20 opacity-70 hover:opacity-100"}`}>
                  <img src={im.src} alt="" className="h-full w-full object-cover object-top" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Details */}
        <div className="flex flex-1 flex-col p-6 pt-8 md:overflow-y-auto md:p-9">
          <p className="eyebrow text-blood">{p.cat}</p>
          <h2 className="h-display mt-3 text-5xl md:text-6xl">{p.name}</h2>
          <div className="mt-4"><Price p={p} large /></div>
          {p.blurb && <p className="mt-5 text-[0.95rem] leading-relaxed text-ink/70">{p.blurb}</p>}

          {p.images.length > 1 && (
            <div className="mt-7">
              <p className="eyebrow text-[0.65rem] text-ink/50">Colour · <span className="text-ink">{colour}</span></p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.images.map((im, n) => (
                  <button key={im.src} onClick={() => setI(n)} title={im.label} aria-label={im.label} aria-pressed={n === i}
                    className={`h-9 w-9 rounded-full border-2 transition ${n === i ? "border-blood ring-2 ring-blood/30 ring-offset-2 ring-offset-paper" : "border-ink/30"}`}
                    style={{ background: im.hex || "#ccc" }} />
                ))}
              </div>
            </div>
          )}

          <div className="mt-7">
            <p className={`eyebrow text-[0.65rem] ${warn ? "text-blood" : "text-ink/50"}`}>{warn ? "Pick a size to continue" : "Size"}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {sizes.map((s) => (
                <button key={s} onClick={() => { setSize(s); setWarn(false); }} aria-pressed={size === s}
                  className={`min-w-[3.2rem] border-2 px-4 py-2.5 text-sm font-extrabold transition ${size === s ? "border-ink bg-ink text-white" : warn ? "border-blood" : "border-ink/25 hover:border-ink"}`}>
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-7 flex items-center gap-4">
            <div className="flex items-center border-2 border-ink">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Less" className="grid h-12 w-11 place-items-center hover:bg-ink hover:text-white"><Minus size={15} /></button>
              <span className="w-10 text-center font-extrabold" aria-live="polite">{qty}</span>
              <button onClick={() => setQty((q) => Math.min(999, q + 1))} aria-label="More" className="grid h-12 w-11 place-items-center hover:bg-ink hover:text-white"><Plus size={15} /></button>
            </div>
            <button onClick={add} className="btn-blood h-12 flex-1"><ShoppingBag size={17} /> Add to basket</button>
          </div>

          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            <a href={waLink(msg)} target="_blank" rel="noreferrer" className="btn-line !py-3"><MessageCircle size={16} /> Ask on WhatsApp</a>
            <a href={href(`custom?item=${encodeURIComponent(p.name)}`)} onClick={onClose} className="btn-line !py-3">Customise this <ArrowUpRight size={16} /></a>
          </div>
          <p className="mt-5 text-xs leading-relaxed text-ink/45">No payment on this site — your basket becomes a quote request and we confirm stock, sizing and delivery with you.</p>
        </div>
      </div>
    </div>,
    document.body
  );
}
