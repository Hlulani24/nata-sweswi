import React from "react";
import { MessageCircle } from "lucide-react";
import { waLink } from "../config.js";

export default function WhatsAppFloat() {
  return (
    <a
      href={waLink("Hi Nata Sweswi, I'd like to ask about your clothing.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-30 grid h-14 w-14 place-items-center border-2 border-ink bg-[#25D366] text-ink shadow-[4px_4px_0_0_#0b0b0b] transition hover:-translate-y-0.5"
    >
      <MessageCircle size={26} />
    </a>
  );
}
