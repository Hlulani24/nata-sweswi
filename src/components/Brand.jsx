import React from "react";

// Pedestrian mark — echoes the walking man in the Nata Sweswi logos.
export function Walker({ size = 28, className = "", color = "currentColor" }) {
  return (
    <svg width={size} height={size * 1.7} viewBox="0 0 24 41" fill={color} className={className} aria-hidden="true">
      <circle cx="12.5" cy="4.2" r="3.6" />
      <path d="M8.6 10.5c1.2-.9 2.9-1.2 4.4-1 1.9.3 3 1.5 3.6 3.2l1.9 5.2 3.1 1.6c.8.4 1.1 1.4.7 2.2s-1.4 1.1-2.2.7l-3.7-1.9c-.4-.2-.7-.5-.9-.9l-.6-1.5-1.3 5.4 3.5 5 1.9 9c.2 1-.4 1.9-1.4 2.1s-1.9-.4-2.1-1.4l-1.8-8.3-3.2-4.1-1.1 3.6-3.4 8.4c-.4.9-1.4 1.4-2.3 1s-1.3-1.4-.9-2.3l3.2-8 1.5-8.1-1.6 1.6-.7 4c-.2.9-1 1.5-1.9 1.4s-1.5-1-1.4-1.9l.9-4.9c.1-.4.3-.8.6-1.1z" />
    </svg>
  );
}

// Red paint drips that hang from the top edge of the section that follows.
const DRIPS = [[3, 34], [10, 18], [18, 52], [27, 24], [36, 14], [44, 40], [53, 22], [61, 56], [70, 16], [78, 34], [86, 46], [95, 20]];
export function Drips({ color = "#E3181E", className = "" }) {
  return (
    <div className={`pointer-events-none absolute inset-x-0 top-0 h-16 ${className}`} aria-hidden="true">
      <div className="h-2 w-full" style={{ background: color }} />
      {DRIPS.map(([x, h], i) => (
        <span key={i} className="absolute top-1 -translate-x-1/2" style={{ left: `${x}%` }}>
          <span className="block w-[7px] rounded-b-full" style={{ height: h, background: color, margin: "0 auto" }} />
          <span className="absolute left-1/2 block h-[15px] w-[11px] -translate-x-1/2 rounded-full" style={{ top: h - 8, background: color }} />
        </span>
      ))}
    </div>
  );
}

// Logo no. 6 (the red drip). `light` = white wordmark for dark backgrounds.
export function Logo({ light = false, className = "h-10", alt = "Nata Sweswi" }) {
  return <img src={light ? "/images/logo-6-light.png" : "/images/logo-6.png"} alt={alt} className={`w-auto select-none ${className}`} draggable="false" />;
}
