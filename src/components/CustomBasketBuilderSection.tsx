"use client";

import { useState } from "react";
import { Sparkles, Check, ShoppingBag, MessageCircle, RefreshCw, ChevronRight, Gift } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface OptionItem {
  id: string;
  name: string;
  price: number;
  category: "base" | "bebida" | "frios" | "doces" | "mimos";
  description?: string;
}

const baseOptions: OptionItem[] = [
  { id: "bau-bordo", name: "Baú Aveludado Bordô & Dourado", price: 90, category: "base", description: "Caixa aveludada de luxo com acabamento dourado" },
  { id: "cesta-palha", name: "Cesta de Palha Fina Trabalhada", price: 60, category: "base", description: "Estilo rústico elegante com fita de seda" },
  { id: "caixa-black", name: "Caixa Rígida Executive Black", price: 80, category: "base", description: "Visual minimalista moderno para presentes corporativos" },
  { id: "bau-madeira", name: "Baú de Madeira Rústico Nobre", price: 110, category: "base", description: "Madeira maciça envernizada de alta durabilidade" },
];

const beverageOptions: OptionItem[] = [
  { id: "vinho-tinto", name: "Vinho Tinto Cabernet Sauvignon Reserva", price: 120, category: "bebida" },
  { id: "vinho-branco", name: "Vinho Branco Chardonnay Importado", price: 110, category: "bebida" },
  { id: "espumante-rose", name: "Espumante Brut Rosé Premium", price: 140, category: "bebida" },
  { id: "suco-uva", name: "Suco Integral de Uva Artesanal", price: 35, category: "bebida" },
  { id: "whisky-12", name: "Whisky 12 Anos Single Malt", price: 220, category: "bebida" },
];

const cheeseColdCutOptions: OptionItem[] = [
  { id: "queijo-brie", name: "Queijo Brie Francês (200g)", price: 45, category: "frios" },
  { id: "queijo-gouda", name: "Queijo Gouda Artesanal (200g)", price: 38, category: "frios" },
  { id: "jamon", name: "Jamón Serrano Fatiado (100g)", price: 55, category: "frios" },
  { id: "salame", name: "Salame Italiano Especial (150g)", price: 32, category: "frios" },
  { id: "gorgonzola", name: "Pastinha de Gorgonzola & Torradas", price: 28, category: "frios" },
];

const sweetsBakeryOptions: OptionItem[] = [
  { id: "croissants", name: "Croissants Folhados na Manteiga (4 un)", price: 30, category: "doces" },
  { id: "trufas", name: "Trufas Belgas Meio Amargo (8 un)", price: 42, category: "doces" },
  { id: "frutas", name: "Morangos & Uvas Frescas Selecionadas", price: 25, category: "doces" },
  { id: "geleia", name: "Geleia de Pimenta & Frutas Vermelhas", price: 28, category: "doces" },
  { id: "mini-bolo", name: "Mini Bolo Festivo Decorado", price: 48, category: "doces" },
];

const mimosOptions: OptionItem[] = [
  { id: "tacas", name: "Par de Taças de Cristal Lapidadas", price: 75, category: "mimos" },
  { id: "buque", name: "Buquê de Mini Rosas Vermelhas", price: 65, category: "mimos" },
  { id: "vela", name: "Vela Aromática de Baunilha & Fava", price: 40, category: "mimos" },
  { id: "cartao", name: "Cartão Caligrafado com Mensagem", price: 0, category: "mimos" },
];

export default function CustomBasketBuilderSection() {
  const [selectedBase, setSelectedBase] = useState<OptionItem>(baseOptions[0]);
  const [selectedItems, setSelectedItems] = useState<OptionItem[]>([]);

  const toggleItem = (item: OptionItem) => {
    if (selectedItems.some((i) => i.id === item.id)) {
      setSelectedItems(selectedItems.filter((i) => i.id !== item.id));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const isSelected = (itemId: string) => selectedItems.some((i) => i.id === itemId);

  const calculateTotal = () => {
    const itemsTotal = selectedItems.reduce((acc, curr) => acc + curr.price, 0);
    return selectedBase.price + itemsTotal;
  };

  const handleReset = () => {
    setSelectedBase(baseOptions[0]);
    setSelectedItems([]);
  };

  const generateWhatsappUrl = () => {
    const itemList = selectedItems.map((i) => `- ${i.name} (R$ ${i.price},00)`).join("\n");

    const text = `*SOLICITAÇÃO DE ORÇAMENTO DE CESTA PERSONALIZADA*
---------------------------------------------
*Embalagem Base:* ${selectedBase.name} (R$ ${selectedBase.price},00)

*Itens Selecionados:*
${selectedItems.length > 0 ? itemList : "- Nenhum item adicional selecionado"}

---------------------------------------------
*Orçamento Estimado:* R$ ${calculateTotal()},00
---------------------------------------------
Gostaria de verificar a disponibilidade para entrega em Santo André / Região.`;

    return `https://wa.me/5511992432243?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="personalizada" className="py-20 lg:py-28 bg-[#0F0507] text-white relative overflow-hidden border-y border-[#D4AF37]/20">
      {/* Constellation Glow Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-radial from-[#4A0E17]/30 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#4A0E17] border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 animate-twinkle" />
            <span>Monte Sua Cesta Sob Medida</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Monte um Presente <span className="text-gold-gradient">100% Personalizado</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base font-light">
            Selecione a embalagem base e adicione os itens preferidos. O orçamento é atualizado em tempo real para você enviar ao nosso WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Selection Options (8 cols) */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Step 1: Base Packaging */}
            <div className="bg-[#1A080C] p-6 sm:p-8 rounded-3xl border border-[#D4AF37]/30 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-8 rounded-full bg-[#D4AF37] text-[#2D070D] font-bold flex items-center justify-center text-sm">
                  1
                </span>
                <h3 className="font-serif-luxury text-xl font-bold text-white">
                  Escolha a Embalagem Base
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {baseOptions.map((base) => (
                  <button
                    key={base.id}
                    onClick={() => setSelectedBase(base)}
                    className={`p-4 rounded-2xl text-left border transition-all relative ${
                      selectedBase.id === base.id
                        ? "bg-[#4A0E17] border-[#D4AF37] shadow-lg shadow-[#D4AF37]/20 scale-[1.02]"
                        : "bg-[#270B10]/60 border-[#D4AF37]/20 hover:border-[#D4AF37]/50"
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <span className="font-bold text-sm text-white block mb-1">
                        {base.name}
                      </span>
                      <span className="text-xs font-bold text-[#D4AF37] bg-[#2D070D] px-2.5 py-1 rounded-full border border-[#D4AF37]/30">
                        R$ {base.price},00
                      </span>
                    </div>
                    {base.description && (
                      <p className="text-xs text-gray-300 font-light mt-1">
                        {base.description}
                      </p>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Vinhos & Bebidas */}
            <div className="bg-[#1A080C] p-6 sm:p-8 rounded-3xl border border-[#D4AF37]/30 shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#D4AF37] text-[#2D070D] font-bold flex items-center justify-center text-sm">
                    2
                  </span>
                  <h3 className="font-serif-luxury text-xl font-bold text-white">
                    Vinhos & Bebidas Finas
                  </h3>
                </div>
                <span className="text-xs text-gray-400">Selecione quantas desejar</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {beverageOptions.map((bev) => {
                  const checked = isSelected(bev.id);
                  return (
                    <button
                      key={bev.id}
                      onClick={() => toggleItem(bev)}
                      className={`p-4 rounded-2xl text-left border transition-all flex items-center justify-between ${
                        checked
                          ? "bg-[#4A0E17] border-[#D4AF37] text-white"
                          : "bg-[#270B10]/60 border-[#D4AF37]/20 text-gray-300 hover:border-[#D4AF37]/40"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded-md border flex items-center justify-center ${
                            checked ? "bg-[#D4AF37] border-[#D4AF37]" : "border-gray-500"
                          }`}
                        >
                          {checked && <Check className="w-3.5 h-3.5 text-[#2D070D]" />}
                        </div>
                        <span className="text-xs sm:text-sm font-medium">{bev.name}</span>
                      </div>
                      <span className="text-xs font-bold text-[#D4AF37] shrink-0">
                        + R$ {bev.price}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Frios & Queijos Nobres */}
            <div className="bg-[#1A080C] p-6 sm:p-8 rounded-3xl border border-[#D4AF37]/30 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-8 rounded-full bg-[#D4AF37] text-[#2D070D] font-bold flex items-center justify-center text-sm">
                  3
                </span>
                <h3 className="font-serif-luxury text-xl font-bold text-white">
                  Queijos Nobres & Frios Selecionados
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {cheeseColdCutOptions.map((c) => {
                  const checked = isSelected(c.id);
                  return (
                    <button
                      key={c.id}
                      onClick={() => toggleItem(c)}
                      className={`p-4 rounded-2xl text-left border transition-all flex items-center justify-between ${
                        checked
                          ? "bg-[#4A0E17] border-[#D4AF37] text-white"
                          : "bg-[#270B10]/60 border-[#D4AF37]/20 text-gray-300 hover:border-[#D4AF37]/40"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded-md border flex items-center justify-center ${
                            checked ? "bg-[#D4AF37] border-[#D4AF37]" : "border-gray-500"
                          }`}
                        >
                          {checked && <Check className="w-3.5 h-3.5 text-[#2D070D]" />}
                        </div>
                        <span className="text-xs sm:text-sm font-medium">{c.name}</span>
                      </div>
                      <span className="text-xs font-bold text-[#D4AF37] shrink-0">
                        + R$ {c.price}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Doces, Pães & Frutas */}
            <div className="bg-[#1A080C] p-6 sm:p-8 rounded-3xl border border-[#D4AF37]/30 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-8 rounded-full bg-[#D4AF37] text-[#2D070D] font-bold flex items-center justify-center text-sm">
                  4
                </span>
                <h3 className="font-serif-luxury text-xl font-bold text-white">
                  Pães, Trufas & Frutas Frescas
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {sweetsBakeryOptions.map((s) => {
                  const checked = isSelected(s.id);
                  return (
                    <button
                      key={s.id}
                      onClick={() => toggleItem(s)}
                      className={`p-4 rounded-2xl text-left border transition-all flex items-center justify-between ${
                        checked
                          ? "bg-[#4A0E17] border-[#D4AF37] text-white"
                          : "bg-[#270B10]/60 border-[#D4AF37]/20 text-gray-300 hover:border-[#D4AF37]/40"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded-md border flex items-center justify-center ${
                            checked ? "bg-[#D4AF37] border-[#D4AF37]" : "border-gray-500"
                          }`}
                        >
                          {checked && <Check className="w-3.5 h-3.5 text-[#2D070D]" />}
                        </div>
                        <span className="text-xs sm:text-sm font-medium">{s.name}</span>
                      </div>
                      <span className="text-xs font-bold text-[#D4AF37] shrink-0">
                        + R$ {s.price}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 5: Mimos & Cartão */}
            <div className="bg-[#1A080C] p-6 sm:p-8 rounded-3xl border border-[#D4AF37]/30 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-8 rounded-full bg-[#D4AF37] text-[#2D070D] font-bold flex items-center justify-center text-sm">
                  5
                </span>
                <h3 className="font-serif-luxury text-xl font-bold text-white">
                  Mimos Especiais & Taças
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {mimosOptions.map((m) => {
                  const checked = isSelected(m.id);
                  return (
                    <button
                      key={m.id}
                      onClick={() => toggleItem(m)}
                      className={`p-4 rounded-2xl text-left border transition-all flex items-center justify-between ${
                        checked
                          ? "bg-[#4A0E17] border-[#D4AF37] text-white"
                          : "bg-[#270B10]/60 border-[#D4AF37]/20 text-gray-300 hover:border-[#D4AF37]/40"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded-md border flex items-center justify-center ${
                            checked ? "bg-[#D4AF37] border-[#D4AF37]" : "border-gray-500"
                          }`}
                        >
                          {checked && <Check className="w-3.5 h-3.5 text-[#2D070D]" />}
                        </div>
                        <span className="text-xs sm:text-sm font-medium">{m.name}</span>
                      </div>
                      <span className="text-xs font-bold text-[#D4AF37] shrink-0">
                        {m.price > 0 ? `+ R$ ${m.price}` : "Cortesia"}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Real-Time Calculator & Summary Sidebar (4 cols sticky) */}
          <div className="lg:col-span-4 sticky top-28 space-y-6">
            <div className="bg-gradient-to-b from-[#2D070D] via-[#3D0C11] to-[#1A0408] rounded-3xl p-6 sm:p-8 border-2 border-[#D4AF37]/40 shadow-2xl space-y-6">
              
              <div className="flex items-center justify-between border-b border-[#D4AF37]/20 pb-4">
                <div className="flex items-center gap-2 text-[#D4AF37]">
                  <ShoppingBag className="w-5 h-5" />
                  <h3 className="font-serif-luxury text-lg font-bold text-white uppercase tracking-wider">
                    Seu Orçamento
                  </h3>
                </div>

                <button
                  onClick={handleReset}
                  className="text-xs text-gray-400 hover:text-[#D4AF37] transition-colors flex items-center gap-1"
                  title="Limpar seleção"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Limpar</span>
                </button>
              </div>

              {/* Selected Base Breakdown */}
              <div className="space-y-3 text-xs">
                <div className="flex justify-between text-gray-300 font-medium">
                  <span>Embalagem: {selectedBase.name}</span>
                  <span className="text-[#D4AF37] font-bold">R$ {selectedBase.price},00</span>
                </div>

                {/* Selected Items List */}
                <div className="border-t border-gray-800 pt-3">
                  <span className="text-gray-400 font-semibold block mb-2 uppercase text-[10px] tracking-wider">
                    Itens Adicionados ({selectedItems.length}):
                  </span>
                  {selectedItems.length === 0 ? (
                    <span className="text-gray-500 italic block">Nenhum item adicional selecionado ainda.</span>
                  ) : (
                    <ul className="space-y-2 max-h-48 overflow-y-auto pr-1">
                      {selectedItems.map((item) => (
                        <li key={item.id} className="flex justify-between items-center text-gray-200">
                          <span className="truncate pr-2 font-light">{item.name}</span>
                          <span className="text-[#D4AF37] font-semibold shrink-0">
                            {item.price > 0 ? `R$ ${item.price}` : "Grátis"}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              {/* Total Price Display */}
              <div className="pt-4 border-t border-[#D4AF37]/30 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest block">
                    Valor Estimado
                  </span>
                  <span className="font-serif-luxury text-3xl font-extrabold text-white">
                    R$ {calculateTotal()},00
                  </span>
                </div>

                <span className="text-[10px] text-[#D4AF37] font-semibold uppercase bg-[#4A0E17] px-3 py-1 rounded-full border border-[#D4AF37]/30">
                  Preço Prévio
                </span>
              </div>

              {/* Submit via WhatsApp Button */}
              <a
                href={generateWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-full font-bold text-[#2D070D] bg-gradient-to-r from-[#D4AF37] via-[#F5E6AD] to-[#AA8321] hover:brightness-110 shadow-xl text-xs sm:text-sm uppercase tracking-wider transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
              >
                <MessageCircle className="w-5 h-5 text-[#2D070D] group-hover:scale-110 transition-transform" />
                <span>Solicitar Orçamento no WhatsApp</span>
              </a>

              <p className="text-[11px] text-gray-400 text-center font-light leading-snug">
                Nossos atendentes confirmam o pedido e combinam o horário de entrega em Santo André e região.
              </p>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
