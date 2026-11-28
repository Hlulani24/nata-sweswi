import React from "react";
import { Instagram, Facebook, MessageCircle, Phone } from "lucide-react";
import { href } from "../lib/router.js";
import { Logo, Walker } from "./Brand.jsx";
import { PHONES, SOCIALS, BRAND, waLink } from "../config.js";

const TikTok = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M16.6 3c.3 2.3 1.6 3.7 3.9 3.9v3.1c-1.4.1-2.7-.3-3.9-1.1v6.2c0 3.9-3.2 6-6.3 5.4-2.7-.5-4.6-3-4.1-5.8.5-2.9 3.2-4.7 6.1-4.2v3.2c-1.4-.4-3 .3-3.1 1.9-.2 1.7 1.2 2.9 2.6 2.7 1.1-.1 1.9-1 1.9-2.2V3h2.9z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="relative mt-24 bg-ink text-white">
            <div className="mx-auto max-w-7xl px-5 pb-10 pt-24 md:px-8">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Logo light className="h-14" />
            <p className="mt-6 max-w-xs font-marker text-xl leading-snug text-white/80">We walk this journey with you.</p>
            <p className="mt-3 text-sm text-white/50">Guaranteed awesomeness.</p>
          </div>
          <nav aria-label="Footer">
            <p className="eyebrow text-blood">Explore</p>
            <ul className="mt-5 space-y-3 text-sm font-semibold text-white/80">
              {[["collections", "Shop all"], ["lookbook", "Lookbook"], ["custom", "Custom orders"], ["about", "Our story"], ["contact", "Contact"]].map(([to, l]) => (
                <li key={to}><a href={href(to)} className="hover:text-blood">{l}</a></li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="eyebrow text-blood">Talk to us</p>
            <ul className="mt-5 space-y-3 text-sm font-semibold text-white/80">
              <li><a href={waLink("Hi Nata Sweswi!")} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-blood"><MessageCircle size={16} /> WhatsApp</a></li>
              {PHONES.map((p) => (<li key={p.tel}><a href={`tel:${p.tel}`} className="inline-flex items-center gap-2 hover:text-blood"><Phone size={16} /> {p.display}</a></li>))}
            </ul>
          </div>
          <div>
            <p className="eyebrow text-blood">Follow</p>
            <ul className="mt-5 space-y-3 text-sm font-semibold text-white/80">
              <li><a href={SOCIALS.instagram.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-blood"><Instagram size={16} /> {SOCIALS.instagram.label}</a></li>
              <li><a href={SOCIALS.tiktok.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-blood"><TikTok size={16} /> {SOCIALS.tiktok.label}</a></li>
              <li><a href={SOCIALS.facebook.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-blood"><Facebook size={16} /> {SOCIALS.facebook.label}</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/15 pt-6">
          {BRAND.tags.map((t) => (<span key={t} className="font-marker text-lg text-white/70">{t}</span>))}
        </div>
        <div className="mt-6 flex flex-col gap-3 text-xs text-white/45 md:flex-row md:items-center md:justify-between">
          <p className="inline-flex items-center gap-2"><Walker size={9} /> © {new Date().getFullYear()} Nata Sweswi Clothing.</p>
          <a href={href("admin")} className="hover:text-white">Staff login</a>
        </div>
      </div>
    </footer>
  );
}
