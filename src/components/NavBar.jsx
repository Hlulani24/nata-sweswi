import React, { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight, ShoppingBag } from "lucide-react";
import { basket, useBasket } from "../lib/basket.js";
import { href } from "../lib/router.js";
import { Logo } from "./Brand.jsx";

const LINKS = [
  ["collections", "Shop"],
  ["lookbook", "Lookbook"],
  ["custom", "Custom"],
  ["about", "Story"],
  ["contact", "Contact"],
  ["admin", "Staff Login"],
];

export default function NavBar({ path }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { count } = useBasket();

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 30);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  const bag = (
    <button
      onClick={() => basket.open()}
      aria-label={`Open basket, ${count} items`}
      className="relative grid h-11 w-11 place-items-center border-2 border-ink bg-paper transition hover:bg-ink hover:text-white"
    >
      <ShoppingBag size={18} />
      {count > 0 && (
        <span className="absolute -right-2 -top-2 grid h-5 min-w-[1.25rem] place-items-center bg-blood px-1 text-[0.65rem] font-extrabold text-white">{count}</span>
      )}
    </button>
  );

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-40 px-3 pt-3 md:px-6 md:pt-4">
        <header
          className={`mx-auto flex h-[64px] max-w-7xl items-center justify-between gap-4 border-2 border-ink bg-paper/95 px-4 backdrop-blur transition-shadow md:px-6 ${
            scrolled ? "shadow-[5px_5px_0_0_#0b0b0b]" : ""
          }`}
        >
          <a href={href()} aria-label="Nata Sweswi home" className="shrink-0">
            <Logo className="h-9 md:h-10" />
          </a>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
            {LINKS.map(([to, label]) => (
              <a
                key={to}
                href={href(to)}
                className={`relative px-4 py-2 text-[0.8rem] font-extrabold uppercase tracking-widest transition hover:text-blood ${path === to ? "text-blood" : ""}`}
              >
                {label}
                {path === to && <span className="absolute inset-x-4 -bottom-0.5 h-[3px] bg-blood" />}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {bag}
            <a href={href("custom")} className="btn-ink hidden !py-3 md:inline-flex">
              Get a quote <ArrowUpRight size={15} />
            </a>
            <button
              className="grid h-11 w-11 place-items-center border-2 border-ink md:hidden"
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </header>
      </div>

      {open && (
        <div className="fixed inset-0 z-30 flex flex-col overflow-y-auto bg-ink px-6 pb-10 pt-28 text-white md:hidden">
          <nav className="flex flex-col" aria-label="Mobile">
            {LINKS.map(([to, label], i) => (
              <a key={to} href={href(to)} className={`flex items-baseline gap-4 border-b border-white/15 py-4 font-display text-5xl uppercase ${path === to ? "text-blood" : ""}`}>
                <span className="font-sans text-xs font-bold text-white/40">0{i + 1}</span> {label}
              </a>
            ))}
          </nav>
          <a href={href("custom")} className="btn-blood mt-8 w-full">
            Get a quote <ArrowUpRight size={16} />
          </a>
          <p className="mt-auto pt-10 font-marker text-lg text-white/60">#ArriveInStyle</p>
        </div>
      )}
    </>
  );
}
