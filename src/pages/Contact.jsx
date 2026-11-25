import React, { useState } from "react";
import { Phone, Mail, Instagram, Facebook, MessageCircle, CheckCircle2, Loader2 } from "lucide-react";
import { submitLead } from "../lib/leads.js";
import { PHONES, SOCIALS, waLink } from "../config.js";

const EMAIL = "info@natasweswi.co.za";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [result, setResult] = useState(null);
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const summary = `Hi Nata Sweswi, it's ${form.name}. ${form.message}\n\nMy number: ${form.phone}`;

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    const res = await submitLead("enquiries", form, "VITE_EMAILJS_CONTACT_TEMPLATE_ID", form);
    setResult(res);
    setStatus("done");
  }

  return (
    <main className="pt-[88px] md:pt-[104px]">
      <section className="mx-auto max-w-7xl px-5 pb-24 pt-16 md:px-8 md:pt-24">
        <p className="reveal eyebrow text-blood">Contact</p>
        <h1 className="reveal mt-4 h-display text-7xl md:text-[9rem]" data-d="1">
          Say<br />hello.
        </h1>
        <p className="reveal mt-6 max-w-xl text-base text-ink/65 md:text-lg" data-d="2">
          Based in Johannesburg. Questions, quotes or just want to see more? Reach us any way that suits you.
        </p>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1fr] lg:gap-10">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {PHONES.map((p, i) => (
              <a
                key={p.tel}
                href={`tel:${p.tel}`}
                data-d={i}
                className="reveal group flex items-center gap-5 border-2 border-ink bg-white p-6 transition hover:shadow-[5px_5px_0_0_#0b0b0b]"
              >
                <span className="grid h-14 w-14 shrink-0 place-items-center bg-blood text-white">
                  <Phone size={22} />
                </span>
                <span>
                  <span className="eyebrow block text-[0.6rem] text-ink/45">Call</span>
                  <span className="mt-1 block font-display text-2xl uppercase md:text-3xl">{p.display}</span>
                </span>
              </a>
            ))}
            <a
              href={`mailto:${EMAIL}`}
              className="reveal flex items-center gap-5 border-2 border-ink bg-white p-6 transition hover:shadow-[5px_5px_0_0_#0b0b0b]"
              data-d="1"
            >
              <span className="grid h-14 w-14 shrink-0 place-items-center bg-ink text-white">
                <Mail size={22} />
              </span>
              <span className="min-w-0">
                <span className="eyebrow block text-[0.6rem] text-ink/45">Email</span>
                <span className="mt-1 block break-all font-display text-xl uppercase md:text-2xl">{EMAIL}</span>
              </span>
            </a>
            <a
              href={waLink("Hi Nata Sweswi, I'd like to ask about…")}
              target="_blank"
              rel="noreferrer"
              className="reveal flex items-center gap-5 border-2 border-ink bg-white p-6 transition hover:shadow-[5px_5px_0_0_#25D366]"
              data-d="1"
            >
              <span className="grid h-14 w-14 shrink-0 place-items-center bg-[#25D366] text-ink">
                <MessageCircle size={22} />
              </span>
              <span>
                <span className="eyebrow block text-[0.6rem] text-ink/45">WhatsApp</span>
                <span className="mt-1 block font-display text-2xl uppercase md:text-3xl">Chat with us</span>
              </span>
            </a>
            <a
              href={SOCIALS.instagram.url}
              target="_blank"
              rel="noreferrer"
              className="reveal flex items-center gap-5 border-2 border-ink bg-white p-6 transition hover:shadow-[5px_5px_0_0_#E3181E]"
              data-d="2"
            >
              <span className="grid h-14 w-14 shrink-0 place-items-center bg-ink text-white">
                <Instagram size={22} />
              </span>
              <span>
                <span className="eyebrow block text-[0.6rem] text-ink/45">Instagram</span>
                <span className="mt-1 block font-display text-2xl uppercase md:text-3xl">{SOCIALS.instagram.label}</span>
              </span>
            </a>
            <a
              href={SOCIALS.tiktok.url}
              target="_blank"
              rel="noreferrer"
              className="reveal flex items-center gap-5 border-2 border-ink bg-white p-6 transition hover:shadow-[5px_5px_0_0_#0b0b0b]"
              data-d="2"
            >
              <span className="grid h-14 w-14 shrink-0 place-items-center bg-ink text-white">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.6 3c.3 2.3 1.6 3.7 3.9 3.9v3.1c-1.4.1-2.7-.3-3.9-1.1v6.2c0 3.9-3.2 6-6.3 5.4-2.7-.5-4.6-3-4.1-5.8.5-2.9 3.2-4.7 6.1-4.2v3.2c-1.4-.4-3 .3-3.1 1.9-.2 1.7 1.2 2.9 2.6 2.7 1.1-.1 1.9-1 1.9-2.2V3h2.9z" /></svg>
              </span>
              <span>
                <span className="eyebrow block text-[0.6rem] text-ink/45">TikTok</span>
                <span className="mt-1 block font-display text-2xl uppercase md:text-3xl">{SOCIALS.tiktok.label}</span>
              </span>
            </a>
            <a
              href={SOCIALS.facebook.url}
              target="_blank"
              rel="noreferrer"
              className="reveal flex items-center gap-5 border-2 border-ink bg-white p-6 transition hover:shadow-[5px_5px_0_0_#4C8BF5]"
              data-d="3"
            >
              <span className="grid h-14 w-14 shrink-0 place-items-center bg-[#4C8BF5] text-white">
                <Facebook size={22} />
              </span>
              <span>
                <span className="eyebrow block text-[0.6rem] text-ink/45">Facebook</span>
                <span className="mt-1 block font-display text-2xl uppercase md:text-3xl">{SOCIALS.facebook.label}</span>
              </span>
            </a>
          </div>

          <div className="reveal border-2 border-ink bg-white p-6 text-ink shadow-[8px_8px_0_0_#0b0b0b] md:p-10" data-d="1">
            {status === "done" ? (
              <div className="py-10 text-center">
                <span className="mx-auto grid h-16 w-16 place-items-center bg-ink text-white">
                  <CheckCircle2 size={30} />
                </span>
                <h2 className="mt-6 h-display text-4xl">
                  {result?.saved || result?.emailed ? "Message sent." : "Almost there."}
                </h2>
                <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-ink/65">
                  {result?.saved || result?.emailed
                    ? "Thanks — we’ll get back to you soon. Want a faster reply? Send it on WhatsApp too."
                    : "Send your message on WhatsApp — it’s pre-filled and ready to go."}
                </p>
                <a href={waLink(summary)} target="_blank" rel="noreferrer" className="btn-blood mt-8">
                  <MessageCircle size={17} /> Send on WhatsApp
                </a>
              </div>
            ) : (
              <form onSubmit={onSubmit}>
                <h2 className="h-display text-4xl">Send a message</h2>
                <div className="mt-8 grid gap-5">
                  <label className="block">
                    <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-ink/50">Name *</span>
                    <input required value={form.name} onChange={set("name")} className="field-light" autoComplete="name" />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-ink/50">Phone / WhatsApp *</span>
                    <input required type="tel" value={form.phone} onChange={set("phone")} className="field-light" autoComplete="tel" placeholder="+27…" />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-ink/50">Message *</span>
                    <textarea required rows={5} value={form.message} onChange={set("message")} className="field-light resize-y" />
                  </label>
                </div>
                <button type="submit" disabled={status === "sending"} className="btn-blood mt-8 w-full disabled:opacity-60">
                  {status === "sending" ? (
                    <>
                      <Loader2 size={17} className="animate-spin" /> Sending…
                    </>
                  ) : (
                    "Send message"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
