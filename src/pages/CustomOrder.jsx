import React, { useState } from "react";
import { CheckCircle2, MessageCircle, Loader2, Phone } from "lucide-react";
import { useProducts } from "../lib/store.js";
import { submitLead } from "../lib/leads.js";
import { PHONES, LOGOS, waLink } from "../config.js";
import { Walker } from "../components/Brand.jsx";

const NEEDS = ["Nata Sweswi logo", "My own logo / crest", "Names & numbers", "Embroidery", "Screen / vinyl print", "Matching set"];

export default function CustomOrder({ params }) {
  const { products } = useProducts();
  // Keep a prefilled item selectable even if it is hidden/renamed in the admin.
  const GARMENTS = [...new Set([...(params.item ? [params.item] : []), ...products.map((p) => p.name)])];
  const [form, setForm] = useState({
    name: "",
    org: "",
    phone: "",
    email: "",
    item: params.item || "",
    qty: "",
    colours: "",
    deadline: "",
    notes: "",
  });
  const [needs, setNeeds] = useState([]);
  const [logo, setLogo] = useState(LOGOS.some((l) => String(l.n) === params.logo) ? Number(params.logo) : 0);
  const logoText = logo ? `Logo no. ${logo} (${LOGOS[logo - 1].name})` : "";
  const [status, setStatus] = useState("idle"); // idle | sending | done
  const [result, setResult] = useState(null);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));
  const toggle = (n) => setNeeds((cur) => (cur.includes(n) ? cur.filter((x) => x !== n) : [...cur, n]));

  const summary = () =>
    [
      "Hi Nata Sweswi, I'd like a custom order quote.",
      "",
      form.org && `Team / school / company: ${form.org}`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      form.email && `Email: ${form.email}`,
      form.item && `Garment: ${form.item}`,
      form.qty && `Quantity: ${form.qty}`,
      form.colours && `Colours: ${form.colours}`,
      logoText && `Logo: ${logoText}`,
      needs.length && `Needs: ${needs.join(", ")}`,
      form.deadline && `Needed by: ${form.deadline}`,
      form.notes && `Notes: ${form.notes}`,
    ]
      .filter(Boolean)
      .join("\n");

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    const row = {
      name: form.name,
      organisation: form.org || null,
      phone: form.phone,
      email: form.email || null,
      garment: form.item || null,
      quantity: form.qty || null,
      colours: form.colours || null,
      needs: needs.join(", ") || null,
      deadline: form.deadline || null,
      notes: [logoText && `Logo: ${logoText}`, form.notes].filter(Boolean).join(" — ") || null,
    };
    const res = await submitLead("custom_orders", row, "VITE_EMAILJS_ORDER_TEMPLATE_ID", {
      name: form.name,
      org: form.org,
      phone: form.phone,
      email: form.email,
      item: form.item,
      qty: form.qty,
      colours: form.colours,
      needs: needs.join(", "),
      deadline: form.deadline,
      notes: [logoText && `Logo: ${logoText}`, form.notes].filter(Boolean).join(" — "),
    });
    setResult(res);
    setStatus("done");
  }

  if (status === "done") {
    const delivered = result?.saved || result?.emailed;
    return (
      <main className="grid min-h-screen place-items-center px-5 pb-20 pt-[110px]">
        <div className="max-w-lg text-center">
          <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-blood text-white">
            <CheckCircle2 size={30} />
          </span>
          <h1 className="mt-8 h-display text-6xl md:text-7xl">
            {delivered ? "Request received." : "One last step."}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-ink/70">
            {delivered
              ? "Thanks — we’ll be in touch shortly with ideas and a quote. For the fastest reply, send the same details on WhatsApp too."
              : "Tap below to send your request on WhatsApp — it’s pre-filled with everything you entered, so the team gets it straight away."}
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={waLink(summary())} target="_blank" rel="noreferrer" className="btn-blood">
              <MessageCircle size={17} /> Send on WhatsApp
            </a>
            <button onClick={() => setStatus("idle")} className="btn-line">
              Edit my request
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-[88px] md:pt-[104px]">
      <section className="mx-auto grid max-w-7xl gap-12 px-5 pb-24 pt-16 md:px-8 md:pt-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="reveal eyebrow text-blood">Custom orders</p>
          <h1 className="reveal mt-4 h-display text-6xl md:text-8xl" data-d="1">
            Make it
            <br />
            <span className="text-blood">yours.</span>
          </h1>
          <p className="reveal mt-6 max-w-md text-base leading-relaxed text-ink/65 md:text-lg" data-d="2">
            For crews, teams, schools, events and one-off ideas. Tell us what you need — the more detail, the
            better the quote. No payment is taken on this site.
          </p>

          <ul className="reveal mt-9 space-y-3 text-sm text-ink/75" data-d="3">
            {[
              "Any piece in the range — or something new",
              "Any of the six official logos, or your own",
              "Mock-up approved by you before production",
              "Bulk quantities and mixed sizes",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-blood" /> {t}
              </li>
            ))}
          </ul>

          <div className="reveal mt-10 border-2 border-ink bg-white p-6" data-d="3">
            <p className="eyebrow text-[0.62rem] text-ink/50">Prefer to talk?</p>
            <div className="mt-4 flex flex-col gap-3 text-sm font-semibold">
              {PHONES.map((p) => (
                <a key={p.tel} href={`tel:${p.tel}`} className="inline-flex items-center gap-2 hover:text-blood">
                  <Phone size={15} className="text-blood" /> {p.display}
                </a>
              ))}
              <a href={waLink("Hi Nata Sweswi, I'd like a custom order quote.")} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-blood">
                <MessageCircle size={15} className="text-blood" /> WhatsApp us
              </a>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="reveal border-2 border-ink bg-white p-6 text-ink shadow-[8px_8px_0_0_#0b0b0b] md:p-10" data-d="1">
          <h2 className="h-display text-4xl">Your request</h2>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <Field label="Your name *">
              <input required value={form.name} onChange={set("name")} className="field-light" autoComplete="name" />
            </Field>
            <Field label="Team / school / company">
              <input value={form.org} onChange={set("org")} className="field-light" autoComplete="organization" />
            </Field>
            <Field label="Phone / WhatsApp *">
              <input required type="tel" value={form.phone} onChange={set("phone")} className="field-light" autoComplete="tel" placeholder="+27…" />
            </Field>
            <Field label="Email">
              <input type="email" value={form.email} onChange={set("email")} className="field-light" autoComplete="email" />
            </Field>
            <Field label="Garment">
              <select value={form.item} onChange={set("item")} className="field-light">
                <option value="">Choose from the range…</option>
                {GARMENTS.map((g) => (
                  <option key={g}>{g}</option>
                ))}
                <option>Something else (describe below)</option>
              </select>
            </Field>
            <Field label="Approx. quantity">
              <input value={form.qty} onChange={set("qty")} className="field-light" placeholder="e.g. 25" inputMode="numeric" />
            </Field>
            <Field label="Colours" className="sm:col-span-2">
              <input value={form.colours} onChange={set("colours")} className="field-light" placeholder="e.g. royal blue with orange & green print" />
            </Field>
          </div>

          <fieldset className="mt-6">
            <legend className="text-xs font-bold uppercase tracking-widest text-ink/50">Which Nata Sweswi logo? <span className="normal-case tracking-normal">(all six available)</span></legend>
            <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-6">
              {LOGOS.map((l) => (
                <button type="button" key={l.n} onClick={() => setLogo(logo === l.n ? 0 : l.n)} aria-pressed={logo === l.n} title={l.name}
                  className={`relative grid aspect-[4/3] place-items-center border-2 bg-white p-1.5 transition ${logo === l.n ? "border-blood shadow-[3px_3px_0_0_#E3181E]" : "border-ink/20 hover:border-ink"}`}>
                  <span className="absolute left-0 top-0 grid h-5 w-5 place-items-center bg-ink text-[0.65rem] font-extrabold text-white">{l.n}</span>
                  <img src={l.img} alt={`Logo ${l.n}: ${l.name}`} className="max-h-full max-w-full object-contain mix-blend-multiply" />
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset className="mt-6">
            <legend className="text-xs font-bold uppercase tracking-widest text-ink/50">What do you need on it?</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {NEEDS.map((n) => {
                const on = needs.includes(n);
                return (
                  <button
                    type="button"
                    key={n}
                    onClick={() => toggle(n)}
                    aria-pressed={on}
                    className={`border-2 px-4 py-2 text-sm font-semibold transition ${
                      on ? "border-ink bg-ink text-white" : "border-ink/20 hover:border-ink"
                    }`}
                  >
                    {n}
                  </button>
                );
              })}
            </div>
          </fieldset>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <Field label="Needed by">
              <input type="date" value={form.deadline} onChange={set("deadline")} className="field-light" />
            </Field>
          </div>

          <Field label="Anything else?" className="mt-5">
            <textarea rows={4} value={form.notes} onChange={set("notes")} className="field-light resize-y" placeholder="Describe your idea, sizes, where you’ll wear it…" />
          </Field>

          <button type="submit" disabled={status === "sending"} className="btn-blood mt-8 w-full disabled:opacity-60">
            {status === "sending" ? (
              <>
                <Loader2 size={17} className="animate-spin" /> Sending…
              </>
            ) : (
              "Request my quote"
            )}
          </button>
          <p className="mt-4 text-center text-xs text-ink/50">
            We’ll only use your details to reply about this request.
          </p>
        </form>
      </section>
    </main>
  );
}

function Field({ label, children, className = "" }) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-ink/50">{label}</span>
      {children}
    </label>
  );
}
