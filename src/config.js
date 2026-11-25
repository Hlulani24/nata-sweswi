// Single place to edit brand details. Everything on the site reads from here.

export const BRAND = {
  name: "Nata Sweswi Clothing",
  short: "Nata Sweswi",
  tagline: "We walk this journey with you.",
  promise: "Guaranteed awesomeness.",
  tags: ["#ArriveInStyle", "#KulekuNyanganyeni"],
};

// From the brand flyers.
export const PHONES = [{ display: "079 018 9854", tel: "+27790189854" }];

// WhatsApp number in international format, no "+".
export const WHATSAPP_NUMBER = "27790189854";

export const SOCIALS = {
  whatsapp: { label: "073 611 7441" },
  facebook: { label: "Nata Sweswi Clothing", url: "https://www.facebook.com/search/top?q=Nata%20Sweswi%20Clothing" },
  tiktok: { label: "@Natasweswiclothing", url: "https://www.tiktok.com/@natasweswiclothing" },
  instagram: { label: "Nata_Sweswi", url: "https://www.instagram.com/nata_sweswi/" },
};

// The six official logos (cards cut from the brand flyer). Customers can pick one on custom orders.
export const LOGOS = [
  { n: 1, name: "The Walker", img: "/images/logo-card-1.jpg" },
  { n: 2, name: "The Badge", img: "/images/logo-card-2.jpg" },
  { n: 3, name: "Signature Script", img: "/images/logo-card-3.jpg" },
  { n: 4, name: "NS Monogram", img: "/images/logo-card-4.jpg" },
  { n: 5, name: "Arrive In Style", img: "/images/logo-card-5.jpg" },
  { n: 6, name: "The Drip", img: "/images/logo-card-6.jpg" },
];

// Show prices on the public site. Prices are managed in the admin panel.
export const SHOW_PRICES = true;
export const SHOW_CONCEPT_TAGS = false;
export const PRICE_NOTE = "Prices are per item and indicative. Bulk, team and custom orders are quoted individually.";

export function waLink(text = "") {
  const q = text ? `?text=${encodeURIComponent(text)}` : "";
  return `https://wa.me/${WHATSAPP_NUMBER}${q}`;
}
