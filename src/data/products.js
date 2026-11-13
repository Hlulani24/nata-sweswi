// Starter catalogue built from the brand's own flyers and photos.
// Prices are DUMMY demo prices (ZAR) so the admin panel and specials can be demonstrated.
// Replace them from the admin panel before going live. The site takes quotes, not payments.

const img = (n) => `/images/${n}.jpg`;

export const PRODUCT_CATEGORIES = ["Tees", "Hoodies & Sets", "Kids", "Zeal Rulers", "Headwear & Shorts"];
export const CATEGORIES = ["All", ...PRODUCT_CATEGORIES];

const KIDS = [
  ["black", "Black", "#111111"], ["white", "White", "#FFFFFF"], ["red", "Red", "#D91E18"], ["pink", "Pink", "#F472B6"],
  ["cream", "Cream", "#F5E6BE"], ["navy", "Navy", "#1F2A5C"], ["green", "Green", "#0F6B3A"], ["grey", "Grey", "#9CA3AF"],
];

const RAW = [
  {
    id: "drip-tee-black",
    name: "Drip Logo Tee",
    cat: "Tees",
    featured: true,
    blurb: "Our signature red-drip script on a heavy black tee, in a relaxed oversized fit. Logo no. 6.",
    images: [{ src: img("drip-tee-black"), label: "Black", hex: "#111111" }, { src: img("drip-tee-cream"), label: "Cream", hex: "#EDE6D6" }],
  },
  {
    id: "walker-tee",
    name: "Walker Tee",
    cat: "Tees",
    blurb: "The walking man, front and centre. Clean, bold and unmistakably Nata Sweswi. Logo no. 1.",
    images: [{ src: img("walker-tee-black"), label: "Black", hex: "#111111" }, { src: img("walker-tee-full"), label: "Black · full look", hex: "#111111" }],
  },
  {
    id: "badge-tee",
    name: "Badge Tee",
    cat: "Tees",
    featured: true,
    blurb: "The round #KulekuNyanganyeni badge on a crisp white oversized tee. Logo no. 2.",
    images: [{ src: img("badge-tee-white"), label: "White", hex: "#FFFFFF" }],
  },
  {
    id: "badge-crewneck",
    name: "Badge Crewneck",
    cat: "Hoodies & Sets",
    blurb: "Soft white crewneck with the red-and-black walker badge on the chest.",
    images: [{ src: img("badge-crewneck-white"), label: "White", hex: "#FFFFFF" }],
  },
  {
    id: "script-hoodie",
    name: "Signature Script Hoodie",
    cat: "Hoodies & Sets",
    featured: true,
    blurb: "Heavyweight black hoodie with the fine-line signature script. Matching joggers available. Logo no. 3.",
    images: [{ src: img("script-hoodie-black"), label: "Black", hex: "#111111" }],
  },
  {
    id: "monogram-set",
    name: "NS Monogram Set",
    cat: "Hoodies & Sets",
    blurb: "White hoodie and joggers carrying the NS monogram with the red walker. Logo no. 4.",
    images: [{ src: img("monogram-hoodie-white"), label: "White", hex: "#FFFFFF" }, { src: img("monogram-full"), label: "White · full set", hex: "#FFFFFF" }],
  },
  {
    id: "arrive-set",
    name: "Arrive In Style Set",
    cat: "Hoodies & Sets",
    featured: true,
    blurb: "Statement red hoodie and joggers with the boxed #ArriveInStyle mark. Logo no. 5.",
    images: [{ src: img("arrive-set-red"), label: "Red", hex: "#D91E18" }, { src: img("arrive-set-full"), label: "Red · full set", hex: "#D91E18" }],
  },
  {
    id: "zeal-rulers-set",
    name: "Zeal Rulers Sweat Set",
    cat: "Zeal Rulers",
    featured: true,
    blurb: "Rise. Focus. Win. Black sweat top and joggers with the gold ZR crown mark.",
    images: [{ src: img("zr-sweat-black"), label: "Black & gold", hex: "#111111" }],
  },
  {
    id: "zeal-rulers-training",
    name: "Zeal Rulers Training Set",
    cat: "Zeal Rulers",
    blurb: "Cropped training top and shorts in black with the ZR crown. Built to move.",
    images: [{ src: img("zr-crop-top"), label: "Black & gold", hex: "#111111" }, { src: img("zr-set-full"), label: "Full look", hex: "#111111" }],
  },
  {
    id: "kids-drip-tee",
    name: "Kids Drip Tee",
    cat: "Kids",
    featured: true,
    blurb: "The drip script in miniature. Soft cotton tees for little legends, in eight colours.",
    sizes: ["XS", "S", "M", "L"],
    images: KIDS.map(([k, label, hex]) => ({ src: img(`kids-tee-${k}`), label, hex })),
  },
  {
    id: "drip-bucket-hat",
    name: "Drip Bucket Hat",
    cat: "Headwear & Shorts",
    blurb: "White bucket hat with the red-drip logo embroidered on the front.",
    sizes: ["One size"],
    images: [{ src: img("drip-bucket-hat"), label: "White", hex: "#FFFFFF" }],
  },
  {
    id: "drip-shorts",
    name: "Drip Logo Shorts",
    cat: "Headwear & Shorts",
    blurb: "Easy white shorts with the drip logo on the leg. Pairs with the black tee.",
    images: [{ src: img("drip-shorts-white"), label: "White", hex: "#FFFFFF" }],
  },
];

const PRICING = {
  "drip-tee-black": [280, 240],
  "walker-tee": [250],
  "badge-tee": [250],
  "badge-crewneck": [420],
  "script-hoodie": [520],
  "monogram-set": [850],
  "arrive-set": [850, 780],
  "zeal-rulers-set": [890],
  "zeal-rulers-training": [650],
  "kids-drip-tee": [180],
  "drip-bucket-hat": [150],
  "drip-shorts": [260],
};

export const SEED_PRODUCTS = RAW.map((p, i) => ({
  status: "core",
  featured: false,
  blurb: "",
  sizes: [],
  ...p,
  price: PRICING[p.id]?.[0] ?? null,
  salePrice: PRICING[p.id]?.[1] ?? null,
  visible: true,
  sort: i,
}));

// Lookbook (src, caption, wide = landscape crop).
export const LOOKBOOK = [
  { src: img("flyer-brand"), caption: "We walk this journey with you", tall: true },
  { src: img("drip-tee-black"), caption: "Drip Logo Tee · black" },
  { src: img("drip-tee-cream"), caption: "Drip Logo Tee · cream" },
  { src: img("crew-group"), caption: "The whole crew", wide: true },
  { src: img("badge-crewneck-white"), caption: "Badge crewneck" },
  { src: img("kids-tee-red"), caption: "Kids drip tee · red" },
  { src: img("zr-set-full"), caption: "Zeal Rulers training", tall: true },
  { src: img("arrive-set-full"), caption: "#ArriveInStyle red set" },
  { src: img("kids-tee-navy"), caption: "Kids drip tee · navy" },
  { src: img("monogram-full"), caption: "NS monogram set", tall: true },
  { src: img("drip-bucket-hat"), caption: "Drip bucket hat" },
  { src: img("flyer-logos"), caption: "All six logos", tall: true },
  { src: img("kids-tee-green"), caption: "Kids drip tee · green" },
  { src: img("walker-tee-full"), caption: "Walker tee" },
];
