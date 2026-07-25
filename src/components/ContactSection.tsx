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

            {/* Instagram Card */}
            <div className="bg-white rounded-3xl p-6 border border-[#D4AF37]/20 shadow-md flex items-start gap-4 hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center shrink-0 shadow-md">
                <svg className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <div className="flex-1">
                <span className="text-xs text-[#AA8321] uppercase tracking-wider font-bold block mb-1">
                  Instagram Oficial
                </span>
                <a
                  href="https://www.instagram.com/stellarvinhosemimos/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#1F1916] text-lg hover:text-[#dc2743] transition-colors inline-flex items-center gap-2"
                >
                  <span>@stellarvinhosemimos</span>
                </a>
                <p className="text-xs text-gray-500 font-light mt-0.5">
                  Siga-nos para acompanhar novidades, bastidores e produtos
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
