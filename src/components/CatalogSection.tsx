"use client";

import { useState } from "react";
import Image from "next/image";
import { Sparkles, MessageCircle, Star, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface BasketItem {
  id: string;
  name: string;
  category: "cafe" | "vinhos" | "romantica" | "aniversario" | "corporativa";
  categoryLabel: string;
  price: string;
  description: string;
  items: string[];
  image: string;
  highlight?: boolean;
}

const baskets: BasketItem[] = [
  {
    id: "cesta-cafe-estelar",
    name: "Cesta Café da Manhã Estelar",
    category: "cafe",
    categoryLabel: "Café da Manhã",
    price: "R$ 289,00",
    description: "Um despertar inesquecível com pães artesanais, croissants folhados, sucos naturais e frutas frescas.",
    items: [
      "Croissants dourados e pães artesanais",
      "Suco natural de laranja & geleia gourmet",
      "Frutas da estação selecionadas",
      "Café especial e mini bolo festivo",
    ],
    image: "/images/breakfast_basket.png",
    highlight: true,
  },
  {
    id: "cesta-vinhos-queijos",
    name: "Cesta Reserva Vinhos & Queijos",
    category: "vinhos",
    categoryLabel: "Vinhos & Queijos",
    price: "R$ 380,00",
    description: "Seleção refinada de vinho encorpado, queijos nobres, torradinhas e trufas artesanais.",
    items: [
      "Vinho tinto seco reserva selecionado",
      "Queijo gouda & brie artesanal",
      "Geleia de pimenta & nozes",
      "Taças de cristal & bombons finos",
    ],
    image: "/images/wine_cheese_basket.png",
    highlight: true,
  },
  {
    id: "cesta-romantica-amor",
    name: "Cesta Romântica Amor Eterno",
    category: "romantica",
    categoryLabel: "Romântica",
    price: "R$ 450,00",
    description: "Champagne de luxo, buquê de rosas vermelhas e chocolates artesanais em formato de coração.",
    items: [
      "Champagne importado premium",
      "Buquê com 12 rosas selecionadas",
      "Trufas artesanais de cacau puro",
      "Caixa aveludada personalizada",
    ],
    image: "/images/romantic_basket.png",
    highlight: true,
  },
  {
    id: "cesta-aniversario-gold",
    name: "Cesta Celebração Aniversário",
    category: "aniversario",
    categoryLabel: "Aniversário",
    price: "R$ 320,00",
    description: "Kit festivo com mini bolo de aniversário, espumante, macarons e balão decorativo especial.",
    items: [
      "Espumante brut comemorativo",
      "Mini bolo artesanal personalizado",
      "Caixa com 6 macarons franceses",
      "Vela faísca & cartão especial",
    ],
    image: "/images/hero_stellar_basket.png",
  },
  {
    id: "cesta-corporativa-executive",
    name: "Kit Executive Corporativo",
    category: "corporativa",
    categoryLabel: "Corporativa",
    price: "R$ 490,00",
    description: "Presente corporativo de alto impacto com bebida nobre, copos gravados e snacks gourmet.",
    items: [
      "Bebida nobre (Whisky 12 anos ou Vinho)",
      "Copos de cristal lapidados",
      "Amêndoas glacês & chocolates finos",
      "Embalagem rígida preta e dourada",
    ],
    image: "/images/corporate_basket.png",
  },
];

export default function CatalogSection() {
  const [activeFilter, setActiveFilter] = useState<string>("todas");

  const categories = [
    { key: "todas", label: "Todas as Cestas" },
    { key: "cafe", label: "Café da Manhã" },
    { key: "vinhos", label: "Vinhos & Queijos" },
    { key: "romantica", label: "Românticas" },
    { key: "aniversario", label: "Aniversário" },
    { key: "corporativa", label: "Corporativas" },
  ];

  const filteredBaskets =
    activeFilter === "todas"
      ? baskets
      : baskets.filter((b) => b.category === activeFilter);

  return (
    <section id="cestas" className="py-20 lg:py-28 bg-[#F4EFEA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/20 text-[#4A0E17] text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Coleção Exclusiva</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F1916] mb-4">
            Escolha o Presente <span className="text-[#AA8321]">Perfeito</span>
          </h2>
          <p className="text-gray-600 text-base font-light">
            Cestas preparadas sob encomenda com os mais seletos ingredientes de Santo André. Entregas agendadas ou imediatas.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveFilter(cat.key)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeFilter === cat.key
                  ? "bg-[#2D070D] text-[#D4AF37] shadow-lg border border-[#D4AF37]/40 scale-105"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Catalog Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredBaskets.map((basket) => (
              <motion.div
                key={basket.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-3xl overflow-hidden border border-[#D4AF37]/20 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Image Header */}
                <div className="relative h-64 w-full overflow-hidden bg-gray-900">
                  <Image
                    src={basket.image}
                    alt={basket.name}
                    fill
                    className="object-cover group-hover:scale-108 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Category Tag */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#2D070D]/90 text-[#D4AF37] text-[11px] font-semibold uppercase tracking-wider border border-[#D4AF37]/30">
                    {basket.categoryLabel}
                  </span>

                  {basket.highlight && (
                    <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#AA8321] text-[#2D070D] text-[11px] font-bold uppercase tracking-wider shadow-md">
                      Mais Pedida
                    </span>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-serif-luxury text-xl font-bold text-[#1F1916] group-hover:text-[#4A0E17] transition-colors">
                        {basket.name}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm font-light mb-4 leading-relaxed">
                      {basket.description}
                    </p>

                    {/* Included Items */}
                    <div className="space-y-2 pt-2 border-t border-gray-100">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#AA8321]">
                        Itens Inclusos:
                      </span>
                      <ul className="space-y-1.5">
                        {basket.items.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-xs text-gray-700 font-medium">
                            <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Price & Order Action */}
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-2">
                    <div>
                      <span className="text-[10px] text-gray-400 block uppercase font-semibold">Valor</span>
                      <span className="font-serif-luxury text-xl font-extrabold text-[#2D070D]">
                        {basket.price}
                      </span>
                    </div>

                    <a
                      href={`https://wa.me/5511992432243?text=Ol%C3%A1%2C%20gostaria%20de%20encomendar%20a%20${encodeURIComponent(
                        basket.name
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#2D070D] hover:bg-[#4A0E17] text-[#D4AF37] hover:text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-md"
                    >
                      <MessageCircle className="w-4 h-4 text-[#D4AF37]" />
                      <span>Encomendar</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
