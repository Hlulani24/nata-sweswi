# Nata Sweswi Clothing — Website

React + Vite + Tailwind. Enquiry-and-quote site (no payment gateway) — same quote-based engine as our other client sites,
completely different look (black / white / blood-red street style, logo no. 6 as the site logo).

Pages: Home · Shop (filters, search, product viewer) · Lookbook · Custom Orders (with six-logo picker) · Story · Contact · Admin.

## Run it
Needs Node 18+.
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into dist/
```
Works straight away with no setup. Forms open a pre-filled WhatsApp message until Supabase / EmailJS are connected.

## Ordering flow
Customers open a product → choose colour, size, qty → **Add to basket** → basket becomes a **quote request**
(name + phone) saved to Admin → Orders and sendable on WhatsApp. Custom orders let them pick any of the six logos.

## Admin
Open `/#/admin` (footer → "Staff login"). **Demo mode** passcode: `nata-demo` (set `VITE_ADMIN_DEMO_PASSCODE`).
Edits are saved in that browser only until Supabase is connected. Products, prices, specials, photos, orders,
custom orders, enquiries and password are all managed there.

| To change…                    | Where                              |
| ----------------------------- | ---------------------------------- |
| Phone, WhatsApp, socials, logos list | `src/config.js`              |
| Hide all prices               | `SHOW_PRICES = false` in config    |
| Starter products & photos     | `src/data/products.js`, `public/images/` |
| Story copy                    | `src/pages/About.jsx`              |
| Colours / fonts               | `tailwind.config.js`, `src/index.css` |

## Go live (Supabase + EmailJS + Cloudinary + Render)
Use **new** accounts for this client:
1. **Supabase**: run `supabase/schema.sql`; add the owner as a user; `insert into public.admins (email) values ('owner@email.com');`; disable sign-ups; copy URL + anon key.
2. **Cloudinary**: unsigned upload preset named `nata_sweswi_products`.
3. **EmailJS**: service + templates (custom order, contact, optional basket).
4. **Render**: push to a private GitHub repo → New → Blueprint (`render.yaml`) → add the env vars from `.env.example` → deploy.
   Then Admin → Products → **Load starter catalogue** once.

## Please confirm with the client
- **Prices** are dummy demo prices. Replace in Admin.
- **Facebook / Instagram / TikTok URLs** are best guesses from the handles on the flyer (`Nata Sweswi Clothing`, `Nata_Sweswi`, `@Natasweswiclothing`) — verify.
- **WhatsApp 073 611 7441** is taken from the flyer.
- **Story page** copy is written from the brand's slogans only — add the owner's real story, founding year, location.
- **Photos** are cropped from the flyers (some are low-resolution). Replace with original product photography; request vector/PNG logos.
- The kids photos and several mock-ups look AI-generated — confirm the owner is happy to publish them as real product photos.
