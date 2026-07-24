"use client";

import { useState } from "react";
import Image from "next/image";
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface GalleryImage {
  id: number;
  src: string;
  title: string;
  category: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "/images/hero_stellar_basket.png",
    title: "Cesta Gourmet com Vinho Tinto Reserva",
    category: "Vinhos & Frios",
  },
  {
    id: 2,
    src: "/images/breakfast_basket.png",
    title: "Cesta Especial Café da Manhã Completa",
    category: "Café da Manhã",
  },
  {
    id: 3,
    src: "/images/wine_cheese_basket.png",
    title: "Kit Queijos Nobres & Taças de Cristal",
    category: "Gourmet",
  },
  {
    id: 4,
    src: "/images/romantic_basket.png",
    title: "Cesta Romântica com Rosas & Espumante",
    category: "Romântica",
  },
  {
    id: 5,
    src: "/images/corporate_basket.png",
    title: "Kit Corporativo Executivo Premium",
    category: "Corporativa",
  },
];

export default function GallerySection() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const prevImage = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((selectedImageIndex - 1 + galleryImages.length) % galleryImages.length);
  };

  const nextImage = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((selectedImageIndex + 1) % galleryImages.length);
  };

  return (
    <section id="galeria" className="py-20 lg:py-28 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#4A0E17]/10 text-[#4A0E17] text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Nossa Galeria</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F1916] mb-4">
            Detalhes que Encantam a <span className="text-[#AA8321]">Primeira Vista</span>
          </h2>
          <p className="text-gray-600 text-base font-light">
            Clique em qualquer imagem para expandir no Lightbox e conferir o nível de acabamento das nossas cestas.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => openLightbox(idx)}
              className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 border border-[#D4AF37]/20"
            >
              <Image
                src={img.src}
                alt={img.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D070D]/90 via-[#2D070D]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                <div className="flex justify-end">
                  <div className="w-10 h-10 rounded-full bg-[#D4AF37] text-[#2D070D] flex items-center justify-center shadow-lg">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>

                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#D4AF37] block">
                    {img.category}
                  </span>
                  <h3 className="font-serif-luxury text-lg font-bold text-white">
                    {img.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImageIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-6 right-6 p-3 text-white hover:text-[#D4AF37] transition-colors focus:outline-none z-50 bg-white/10 rounded-full"
                aria-label="Fechar galeria"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Prev Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                className="absolute left-4 sm:left-8 p-3 text-white hover:text-[#D4AF37] transition-colors focus:outline-none z-50 bg-white/10 rounded-full"
                aria-label="Imagem anterior"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>

              {/* Next Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                className="absolute right-4 sm:right-8 p-3 text-white hover:text-[#D4AF37] transition-colors focus:outline-none z-50 bg-white/10 rounded-full"
                aria-label="Próxima imagem"
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              {/* Image Container */}
              <div
                className="relative max-w-4xl w-full h-[75vh] rounded-2xl overflow-hidden border border-[#D4AF37]/40 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={galleryImages[selectedImageIndex].src}
                  alt={galleryImages[selectedImageIndex].title}
                  fill
                  className="object-contain"
                  priority
                />

                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-center justify-between">
                  <div>
                    <span className="text-xs text-[#D4AF37] uppercase tracking-widest font-semibold block">
                      {galleryImages[selectedImageIndex].category}
                    </span>
                    <h3 className="font-serif-luxury text-xl font-bold text-white">
                      {galleryImages[selectedImageIndex].title}
                    </h3>
                  </div>

                  <a
                    href={`https://wa.me/5511992432243?text=Ol%C3%A1%2C%20gostaria%20de%20consultar%20a%20${encodeURIComponent(
                      galleryImages[selectedImageIndex].title
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#AA8321] text-[#2D070D] font-bold text-xs uppercase tracking-wider hover:brightness-110"
                  >
                    <MessageCircle className="w-4 h-4 text-[#2D070D]" />
                    <span>Pedir esta Cesta</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
