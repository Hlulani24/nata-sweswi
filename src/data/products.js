// Starter catalogue: the owner's real products and prices (ZAR).
// Prices can be changed any time from the admin panel. The site takes quotes, not payments.

const img = (n) => `/images/${n}.jpg`;

export const PRODUCT_CATEGORIES = ["Tees", "Hoodies & Sets", "Headwear & Shorts"];
export const CATEGORIES = ["All", ...PRODUCT_CATEGORIES];

const SIZES_TOP = ["S", "M", "L", "XL", "2XL"];

const RAW = [
  {
    id: "baggy-tee",
    name: "Baggy White T-shirt",
    cat: "Tees",
    featured: true,
    blurb: "Relaxed, baggy-fit white tee with the red-and-black drip logo across the chest.",
    sizes: SIZES_TOP,
    images: [{ src: img("baggy-tee-white"), label: "White", hex: "#FFFFFF" }],
  },
  {
    id: "golf-shirt",
    name: "Golf Shirt",
    cat: "Tees",
    blurb: "Smart white golf shirt with the drip logo embroidered on the chest.",
    sizes: SIZES_TOP,
    images: [{ src: img("golf-shirt-white"), label: "White", hex: "#FFFFFF" }],
  },
  {
    id: "hoodie",
    name: "Hoodie",
    cat: "Hoodies & Sets",
    featured: true,
    blurb: "Heavy black hoodie with the red-and-white drip logo. Warm, soft and made to be seen.",
    sizes: SIZES_TOP,
    images: [{ src: img("hoodie-black"), label: "Black", hex: "#111111" }],
  },
  {
    id: "sweater",
    name: "Sweater",
    cat: "Hoodies & Sets",
    featured: true,
    blurb: "Oversized white crewneck sweater with the full drip logo on the front.",
    sizes: SIZES_TOP,
    images: [{ src: img("sweater-white"), label: "White", hex: "#FFFFFF" }],
  },
  {
    id: "trackpants",
    name: "Trackpants",
    cat: "Hoodies & Sets",
    blurb: "Black trackpants with elasticated cuffs and the drip logo at the hip. Pairs with the hoodie.",
    sizes: SIZES_TOP,
    images: [{ src: img("trackpants-black"), label: "Black", hex: "#111111" }],
  },
  {
    id: "shorts",
    name: "Shorts",
    cat: "Headwear & Shorts",
    blurb: "Black drawstring shorts with the drip logo on the leg.",
    sizes: SIZES_TOP,
    images: [{ src: img("shorts-black"), label: "Black", hex: "#111111" }],
  },
  {
    id: "bucket-hat",
    name: "Bucket Hat",
    cat: "Headwear & Shorts",
    featured: true,
    blurb: "White bucket hat with the red-and-black drip logo on the front.",
    sizes: ["One size"],
    images: [{ src: img("bucket-hat-white"), label: "White", hex: "#FFFFFF" }],
  },
  {
    id: "cap",
    name: "Cap",
    cat: "Headwear & Shorts",
    blurb: "Black cap with the drip logo embroidered in red and white.",
    sizes: ["One size"],
    images: [{ src: img("cap-black"), label: "Black", hex: "#111111" }],
  },
];

// Real prices from the owner (ZAR).
const PRICING = {
  "baggy-tee": [400],
  "golf-shirt": [300],
  hoodie: [450],
  sweater: [450],
  trackpants: [300],
  shorts: [350],
  "bucket-hat": [150],
  cap: [150],
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
  //{ src: img("flyer-brand"), caption: "We walk this journey with you", tall: true },
  { src: img("baggy-tee-white"), caption: "Baggy white tee", tall: true },
  { src: img("hoodie-black"), caption: "Black hoodie", tall: true },
  { src: img("cap-black"), caption: "Cap" },
  { src: img("sweater-white"), caption: "White sweater" },
  { src: img("bucket-hat-white"), caption: "Bucket hat" },
  { src: img("drip-tee-black"), caption: "Drip Logo Tee · black" },
  { src: img("drip-tee-cream"), caption: "Drip Logo Tee · cream" },
  { src: img("badge-crewneck-white"), caption: "Badge crewneck" },
  //{ src: img("arrive-set-full"), caption: "#ArriveInStyle red set" },
 // { src: img("monogram-full"), caption: "NS monogram set", tall: true },
  { src: img("drip-bucket-hat"), caption: "Drip bucket hat" },
  { src: img("flyer-logos"), caption: "All six logos", tall: true },
  { src: img("walker-tee-full"), caption: "Walker tee" },
];

// Built-in categories plus any new ones the owner has typed in the admin panel.
export const categoriesOf = (products = []) => {
  const extra = [...new Set(products.map((p) => p.cat).filter((c) => c && !PRODUCT_CATEGORIES.includes(c)))].sort();
  return [...PRODUCT_CATEGORIES, ...extra];
};
