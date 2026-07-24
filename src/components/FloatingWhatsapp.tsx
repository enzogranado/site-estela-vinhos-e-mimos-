"use client";

import { MessageCircle } from "lucide-react";

export default function FloatingWhatsapp() {
  return (
    <a
      href="https://wa.me/5511992432243?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20pedido%20pelo%20WhatsApp"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fazer Pedido pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm uppercase tracking-wider shadow-2xl transition-all transform hover:scale-105 group border-2 border-emerald-300/40"
    >
      <div className="relative">
        <MessageCircle className="w-6 h-6 text-white group-hover:rotate-12 transition-transform" />
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-200"></span>
        </span>
      </div>
      <span className="hidden sm:inline font-bold">Atendimento 24h</span>
    </a>
  );
}
