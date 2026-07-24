"use client";

import { Sparkles, MessageCircle, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CtaSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-bordo-gradient text-white overflow-hidden border-y border-[#D4AF37]/30">
      {/* Starry Constellation Background Graphics */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-2 h-2 bg-[#D4AF37] rounded-full animate-twinkle" />
        <div className="absolute bottom-10 right-20 w-2 h-2 bg-[#F5E6AD] rounded-full animate-twinkle" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 right-10 w-1.5 h-1.5 bg-white rounded-full animate-twinkle" style={{ animationDelay: "0.8s" }} />
        <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-[#D4AF37] rounded-full animate-twinkle" style={{ animationDelay: "2.2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-radial from-[#D4AF37]/15 via-transparent to-transparent rounded-full blur-3xl opacity-60" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        {/* Top Emblem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/50 text-[#D4AF37] text-xs font-semibold uppercase tracking-widest"
        >
          <Sparkles className="w-4 h-4 animate-twinkle" />
          <span>Stellar Vinhos e Mimos</span>
        </motion.div>

        {/* Exact User Requested Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white max-w-4xl mx-auto"
        >
          Surpreenda quem você ama com um presente <span className="text-gold-gradient">inesquecível.</span>
        </motion.h2>

        {/* Exact User Requested Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-xl text-gray-200 font-light max-w-3xl mx-auto leading-relaxed"
        >
          Escolha uma de nossas cestas ou monte uma personalizada. Estamos prontos para tornar cada momento ainda mais especial.
        </motion.p>

        {/* Exact User Requested Button Text & Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-4 flex justify-center"
        >
          <a
            href="https://wa.me/5511992432243?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20pedido%20pelo%20WhatsApp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full font-bold text-[#2D070D] bg-gradient-to-r from-[#D4AF37] via-[#F5E6AD] to-[#AA8321] hover:brightness-110 shadow-2xl hover:shadow-[#D4AF37]/50 transition-all transform hover:-translate-y-1 text-sm sm:text-base uppercase tracking-wider group"
          >
            <MessageCircle className="w-6 h-6 text-[#2D070D] group-hover:scale-110 transition-transform" />
            <span>Fazer Pedido pelo WhatsApp</span>
            <ArrowUpRight className="w-5 h-5 text-[#2D070D]" />
          </a>
        </motion.div>

        {/* Subtext info */}
        <p className="text-xs text-[#D4AF37]/80 tracking-wide pt-2 font-medium">
          Atendimento 24 Horas em Santo André – SP | Resposta Rápida
        </p>

      </div>
    </section>
  );
}
