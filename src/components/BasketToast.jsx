import React from "react";
import { Check } from "lucide-react";
import { basket, useBasket } from "../lib/basket.js";
import { money } from "./Price.jsx";

// Small confirmation after "Add to basket" so the customer can keep browsing.
export default function BasketToast() {
  const { toast, open, count, total } = useBasket();
  if (!toast || open) return null;
  return (
    <div
      key={toast.id}
      role="status"
      className="fixed inset-x-3 bottom-4 z-[45] mx-auto flex max-w-md items-center gap-3 border-2 border-ink bg-white p-3 pl-4 text-ink shadow-[5px_5px_0_0_#0b0b0b] sm:bottom-6"
    >
      <Check size={18} className="shrink-0" />
      <p className="min-w-0 flex-1 truncate text-sm font-bold">
        {toast.text} · {count} in basket{total > 0 ? ` · ${money(total)}` : ""}
      </p>
      <button onClick={() => basket.open()} className="shrink-0 bg-blood px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-white hover:bg-ink">
        View basket
      </button>
    </div>
  );
}
