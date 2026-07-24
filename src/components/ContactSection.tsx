"use client";

import { MapPin, Phone, MessageCircle, Clock, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section id="contato" className="py-20 lg:py-28 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#4A0E17]/10 text-[#4A0E17] text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Localização e Atendimento</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F1916] mb-4">
            Estamos Prontos para <span className="text-[#AA8321]">Atender Você</span>
          </h2>
          <p className="text-gray-600 text-base font-light">
            Entre em contato diretamente com nossa equipe ou venha conhecer nosso atendimento exclusivo em Santo André.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Details Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address Card */}
            <div className="bg-white rounded-3xl p-6 border border-[#D4AF37]/20 shadow-md flex items-start gap-4 hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#4A0E17] flex items-center justify-center shrink-0 shadow-md">
                <MapPin className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <div>
                <span className="text-xs text-[#AA8321] uppercase tracking-wider font-bold block mb-1">
                  Endereço
                </span>
                <p className="font-bold text-[#1F1916] text-base leading-snug">
                  Avenida Pinhal, 790
                </p>
                <p className="text-sm text-gray-600 font-medium">
                  Vila Camilópolis
                </p>
                <p className="text-sm text-gray-600 font-medium">
                  Santo André – SP
                </p>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-white rounded-3xl p-6 border border-[#D4AF37]/20 shadow-md flex items-start gap-4 hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#4A0E17] flex items-center justify-center shrink-0 shadow-md">
                <Phone className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <div>
                <span className="text-xs text-[#AA8321] uppercase tracking-wider font-bold block mb-1">
                  Telefone Fixo / Central
                </span>
                <a
                  href="tel:11992432243"
                  className="font-bold text-[#1F1916] text-lg hover:text-[#4A0E17] transition-colors block"
                >
                  (11) 99243-2243
                </a>
                <span className="text-xs text-gray-500 font-light">
                  Ligação direta para atendimento
                </span>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-white rounded-3xl p-6 border border-[#D4AF37]/20 shadow-md flex items-start gap-4 hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-2xl bg-emerald-700 flex items-center justify-center shrink-0 shadow-md">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <span className="text-xs text-emerald-800 uppercase tracking-wider font-bold block mb-1">
                  WhatsApp Oficial
                </span>
                <a
                  href="https://wa.me/5511992432243?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20as%20cestas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#1F1916] text-lg hover:text-emerald-700 transition-colors inline-flex items-center gap-2"
                >
                  <span>(11) 99243-2243</span>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                    Online
                  </span>
                </a>
                <p className="text-xs text-gray-500 font-light mt-0.5">
                  Clique para iniciar conversa instantânea
                </p>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-white rounded-3xl p-6 border border-[#D4AF37]/20 shadow-md flex items-start gap-4 hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#2D070D] flex items-center justify-center shrink-0 shadow-md">
                <Clock className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <div>
                <span className="text-xs text-[#AA8321] uppercase tracking-wider font-bold block mb-1">
                  Horário de Funcionamento
                </span>
                <p className="font-bold text-[#1F1916] text-base">
                  Atendimento 24 horas
                </p>
                <p className="text-xs text-gray-500 font-light">
                  Entregas programadas e urgentes 7 dias por semana
                </p>
              </div>
            </div>

          </div>

          {/* Google Maps Embed */}
          <div className="lg:col-span-7 h-[460px] rounded-3xl overflow-hidden shadow-2xl border-2 border-[#D4AF37]/30 bg-gray-100">
            <iframe
              title="Localização Stellar Vinhos e Mimos em Santo André"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.074712521743!2d-46.52623352375685!3d-23.637508470513904!2m3!1f0!1f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce42d99d3e528b%3A0xc3f6db0a64efdb80!2sAv.%20Pinhal%2C%20790%20-%20Vila%20Camil%C3%B3polis%2C%20Santo%20Andr%C3%A9%20-%20SP%2C%2009210-240!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full filter saturate-[1.1]"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
