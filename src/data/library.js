// Photos bundled in /public/images that the admin can attach to any product.
const names = [
  "drip-tee-black", "drip-tee-cream", "drip-shorts-white", "drip-bucket-hat",
  "walker-tee-black", "badge-tee-white", "script-hoodie-black", "monogram-hoodie-white",
  "arrive-set-red", "badge-crewneck-white", "zr-sweat-black", "zr-crop-top",
  "walker-tee-full", "monogram-full", "zr-set-full", "arrive-set-full", "crew-group",
  "kids-tee-black", "kids-tee-white", "kids-tee-red", "kids-tee-pink",
  "kids-tee-cream", "kids-tee-navy", "kids-tee-green", "kids-tee-grey",
];
export const IMAGE_LIBRARY = names.map((n) => ({ src: `/images/${n}.jpg`, label: n.replace(/-/g, " ") }));
