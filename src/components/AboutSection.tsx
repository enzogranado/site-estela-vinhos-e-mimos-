"use client";

import { Sparkles, Heart, Star, Gift, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutSection() {
  const differentials = [
    {
      icon: Gift,
      title: "Apresentação Impecável",
      description:
        "Cestas finalizadas com laços de seda, flores selecionadas e embalagens de alto padrão visual.",
    },
    {
      icon: Sparkles,
      title: "Produtos Selecionados",
      description:
        "Vinhos renomados, frios artesanais fresquíssimos, chocolates finos e pães especiais.",
    },
    {
      icon: Heart,
      title: "Personalização Completa",
      description:
        "Adicione cartões com mensagens personalizadas, itens à sua escolha e kits sob medida.",
    },
    {
      icon: Star,
      title: "Atendimento 24 Horas",
      description:
        "Prontidão a qualquer hora do dia ou da noite para atender seus pedidos com agilidade.",
    },
  ];

  return (
    <section id="sobre" className="py-20 lg:py-28 bg-[#FAF8F5] relative overflow-hidden">
      {/* Decorative Subtle Star Pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-radial from-[#D4AF37]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-radial from-[#4A0E17]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#4A0E17]/10 text-[#4A0E17] text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Nossa Essência</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F1916] mb-4">
            Arte em Presentear com <span className="text-[#AA8321]">Sofisticação</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg font-light leading-relaxed">
            A Stellar Vinhos e Mimos nasceu para transformar sentimentos em presentes inesquecíveis. Em Santo André e região, entregamos muito mais do que cestas: entregamos momentos inesquecíveis.
          </p>
        </div>

        {/* Grid of Differentials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentials.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-[#D4AF37]/20 shadow-sm hover:shadow-xl hover:border-[#D4AF37] transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#4A0E17] to-[#2D070D] flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
                    <IconComponent className="w-7 h-7 text-[#D4AF37]" />
                  </div>
                  <h3 className="font-serif-luxury text-xl font-bold text-[#1F1916] mb-3 group-hover:text-[#4A0E17] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-semibold text-[#AA8321]">
                  <CheckCircle className="w-4 h-4 text-[#D4AF37]" />
                  <span>Padrão Stellar</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Highlight Banner */}
        <div className="mt-16 bg-gradient-to-r from-[#2D070D] via-[#4A0E17] to-[#2D070D] rounded-3xl p-8 lg:p-12 text-white shadow-2xl relative overflow-hidden border border-[#D4AF37]/30">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Sparkles className="w-48 h-48 text-[#D4AF37]" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3 text-center lg:text-left">
              <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                Santo André & Região ABC
              </span>
              <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold">
                Deseja montar uma cesta 100% personalizada?
              </h3>
              <p className="text-gray-300 text-sm sm:text-base font-light max-w-2xl">
                Escolha os vinhos, chocolates, pães e mimos favoritos da pessoa presenteada. Nossa equipe cria a combinação ideal com atendimento dedicado.
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <a
                href="#personalizada"
                className="inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-full font-semibold text-[#2D070D] bg-gradient-to-r from-[#D4AF37] via-[#F5E6AD] to-[#AA8321] hover:brightness-110 shadow-lg text-xs sm:text-sm uppercase tracking-wider transition-all transform hover:scale-105"
              >
                <Sparkles className="w-4 h-4 text-[#2D070D]" />
                <span>Montar Cesta Agora</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
