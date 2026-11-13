import React from "react";
import { Walker } from "./Brand.jsx";

const WORDS = ["Guaranteed awesomeness", "#ArriveInStyle", "We walk this journey with you", "#KulekuNyanganyeni", "Zeal Rulers · Rise. Focus. Win."];

// Red "caution tape" ticker, slightly tilted.
export default function Marquee({ tilt = true }) {
  const row = WORDS.flatMap((w) => [w, null]);
  const track = [...row, ...row];
  return (
    <div className="relative z-10 overflow-hidden py-3" aria-hidden="true"><div className={`marquee overflow-hidden border-y-2 border-ink bg-blood py-3 text-white ${tilt ? "-rotate-1 scale-[1.03]" : ""}`}>
      <div className="marquee-track items-center">
        {[0, 1].map((k) => (
          <div key={k} className="flex shrink-0 items-center gap-6 pr-6">
            {track.map((w, i) =>
              w ? (
                <span key={i} className="whitespace-nowrap font-display text-xl uppercase tracking-wider md:text-2xl">{w}</span>
              ) : (
                <Walker key={i} size={14} />
              )
            )}
          </div>
        ))}
      </div>
    </div></div>
  );
}
