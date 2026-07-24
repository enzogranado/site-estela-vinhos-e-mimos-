"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Star, Quote, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface Testimonial {
  id: number;
  text: string;
  author: string;
  location: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "Entrega pontual, cesta impecável e exatamente como nas fotos.",
    author: "Mariana S.",
    location: "Vila Camilópolis, Santo André",
    rating: 5,
  },
  {
    id: 2,
    text: "Tudo muito fresco, atendimento excelente e apresentação maravilhosa.",
    author: "Carlos E. Oliveira",
    location: "Bairro Jardim, Santo André",
    rating: 5,
  },
  {
    id: 3,
    text: "Superou todas as minhas expectativas! Os vinhos e frios vieram perfeitos para a nossa comemoração.",
    author: "Fernanda & Ricardo",
    location: "Santo André - SP",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-20 lg:py-28 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#4A0E17]/10 text-[#4A0E17] text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Depoimentos Reais</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#1F1916]">
            O que Nossos Clientes <span className="text-[#AA8321]">Dizem</span>
          </h2>
        </div>

        {/* Embla Carousel Container */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((t) => (
                <div
                  key={t.id}
                  className="flex-[0_0_100%] min-w-0 px-4 py-2"
                >
                  <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#D4AF37]/30 shadow-xl max-w-3xl mx-auto text-center relative">
                    <Quote className="w-12 h-12 text-[#D4AF37]/20 absolute top-6 left-6" />

                    {/* 5 Lucide Star Icons - Strict NO EMOJI */}
                    <div className="flex items-center justify-center gap-1 mb-6 text-[#D4AF37]">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-[#D4AF37] stroke-[#D4AF37]" />
                      ))}
                    </div>

                    {/* Exact User Requested Review Text */}
                    <p className="font-serif-luxury text-xl sm:text-2xl text-[#1F1916] font-medium leading-relaxed mb-6">
                      &ldquo;{t.text}&rdquo;
                    </p>

                    <div>
                      <span className="font-bold text-base text-[#4A0E17] block">
                        {t.author}
                      </span>
                      <span className="text-xs text-gray-500 font-light">
                        {t.location}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={scrollPrev}
              aria-label="Depoimento anterior"
              className="p-3 rounded-full bg-white border border-[#D4AF37]/40 text-[#4A0E17] hover:bg-[#2D070D] hover:text-[#D4AF37] transition-all shadow-md"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Indicator Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => emblaApi && emblaApi.scrollTo(idx)}
                  aria-label={`Ir para depoimento ${idx + 1}`}
                  className={`w-3 h-3 rounded-full transition-all ${
                    selectedIndex === idx
                      ? "bg-[#2D070D] w-8"
                      : "bg-[#D4AF37]/40 hover:bg-[#D4AF37]"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={scrollNext}
              aria-label="Próximo depoimento"
              className="p-3 rounded-full bg-white border border-[#D4AF37]/40 text-[#4A0E17] hover:bg-[#2D070D] hover:text-[#D4AF37] transition-all shadow-md"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
