// Photos bundled in /public/images that the admin can attach to any product.
const names = [
  "baggy-tee-white", "golf-shirt-white", "hoodie-black", "sweater-white",
  "trackpants-black", "shorts-black", "bucket-hat-white", "cap-black",
  "drip-tee-black", "drip-tee-cream", "drip-shorts-white", "drip-bucket-hat",
  "walker-tee-black", "badge-tee-white", "script-hoodie-black", "monogram-hoodie-white",
  "arrive-set-red", "badge-crewneck-white",
  "walker-tee-full", "monogram-full", "arrive-set-full", "crew-group",
];
export const IMAGE_LIBRARY = names.map((n) => ({ src: `/images/${n}.jpg`, label: n.replace(/-/g, " ") }));
