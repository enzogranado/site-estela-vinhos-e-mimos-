"use client";

import Image from "next/image";
import Link from "next/link";
import { Sparkles, MessageCircle, ArrowRight, ShieldCheck, Clock, Award } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-[#0F0507]">
      {/* Subtle Constellation Background Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-radial from-[#D4AF37]/15 via-[#4A0E17]/20 to-transparent rounded-full blur-3xl opacity-70" />
        <div className="absolute top-10 right-10 w-2 h-2 bg-[#D4AF37] rounded-full animate-twinkle" />
        <div className="absolute top-40 left-20 w-1.5 h-1.5 bg-[#F3E5AB] rounded-full animate-twinkle" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-30 right-1/4 w-2 h-2 bg-[#D4AF37] rounded-full animate-twinkle" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/3 left-1/3 w-1 h-1 bg-white rounded-full animate-twinkle" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Top Luxury Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#4A0E17]/80 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-semibold uppercase tracking-widest backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 animate-twinkle" />
              <span>Experiência Premium em Santo André</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Cestas Exclusivas e <br className="hidden sm:block" />
              <span className="text-gold-gradient">Momentos Inesquecíveis</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Transforme datas especiais com cestas de café da manhã, vinhos finos, queijos artesanais e presentes personalizados. Cada detalhe é pensado para transmitir afeto e elegância.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="https://wa.me/5511992432243?text=Ol%C3%A1%2C%20gostaria%20de%20ver%20as%20cestas%20dispon%C3%ADveis%20na%20Stellar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-semibold text-[#2D070D] bg-gradient-to-r from-[#D4AF37] via-[#F5E6AD] to-[#AA8321] hover:brightness-110 shadow-lg hover:shadow-[#D4AF37]/40 transition-all transform hover:-translate-y-1 text-sm uppercase tracking-wider"
              >
                <MessageCircle className="w-5 h-5 text-[#2D070D]" />
                <span>Pedir pelo WhatsApp</span>
              </a>

              <Link
                href="#cestas"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-medium text-white border border-[#D4AF37]/50 hover:bg-[#D4AF37]/10 transition-colors text-sm uppercase tracking-wider"
              >
                <span>Conhecer Cestas</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
              </Link>
            </div>

            {/* Features Row (Zero Emojis - pure Lucide icons) */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#D4AF37]/20 max-w-xl mx-auto lg:mx-0">
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="flex items-center gap-1.5 text-[#D4AF37] mb-1">
                  <Clock className="w-4 h-4" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-white">24 Horas</span>
                </div>
                <span className="text-xs text-gray-400">Atendimento contínuo</span>
              </div>

              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="flex items-center gap-1.5 text-[#D4AF37] mb-1">
                  <Award className="w-4 h-4" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-white">Seleção Gourmet</span>
                </div>
                <span className="text-xs text-gray-400">Itens premium e frescos</span>
              </div>

              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="flex items-center gap-1.5 text-[#D4AF37] mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-white">Pontualidade</span>
                </div>
                <span className="text-xs text-gray-400">Entrega rápida na região</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visual Luxury Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-2 border-[#D4AF37]/40 group">
              <Image
                src="/images/hero_stellar_basket.png"
                alt="Cesta Gourmet de Presente Stellar Vinhos e Mimos"
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              
              {/* Image Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0507] via-transparent to-transparent opacity-60" />

              {/* Floating Badge Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#2D070D]/90 backdrop-blur-md border border-[#D4AF37]/30 shadow-xl flex items-center justify-between">
                <div>
                  <span className="text-xs text-[#D4AF37] font-semibold uppercase tracking-widest block">
                    Cesta Destaque
                  </span>
                  <span className="font-serif-luxury text-lg text-white font-bold block">
                    Stellar Gourmet & Vinho
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-gray-300 block">Personalização</span>
                  <span className="text-xs font-bold text-[#D4AF37]">Exclusiva</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
