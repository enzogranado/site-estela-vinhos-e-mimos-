"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Sparkles, MessageCircle, Calendar, MapPin, User, Phone, FileText, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const formSchema = z.object({
  name: z.string().min(3, "Digite seu nome completo"),
  phone: z.string().min(14, "Digite um telefone válido (11) 99999-9999"),
  basketType: z.string().min(1, "Selecione uma opção de cesta"),
  deliveryDate: z.string().min(1, "Selecione a data de entrega"),
  address: z.string().min(5, "Informe o endereço de entrega em Santo André / Região"),
  cardMessage: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function OrderFormSection() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      basketType: "Cesta Café da Manhã Estelar",
    },
  });

  // Phone Mask helper (XX) XXXXX-XXXX
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 11) value = value.slice(0, 11);

    if (value.length > 6) {
      value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
    } else if (value.length > 2) {
      value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    } else if (value.length > 0) {
      value = `(${value}`;
    }

    setValue("phone", value, { shouldValidate: true });
  };

  const onSubmit = (data: FormValues) => {
    const text = `*NOVO PEDIDO - STELLAR VINHOS E MIMOS*
---------------------------------------
*Cliente:* ${data.name}
*Telefone:* ${data.phone}
*Cesta Escolhida:* ${data.basketType}
*Data Desejada:* ${data.deliveryDate}
*Endereço de Entrega:* ${data.address}
*Mensagem para o Cartão:* ${data.cardMessage || "Sem mensagem especial"}`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/5511992432243?text=${encodedText}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="pedido" className="py-20 lg:py-28 bg-[#F4EFEA] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#4A0E17]/10 text-[#4A0E17] text-xs font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Faça seu Pedido</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#1F1916] mb-3">
            Monte seu Pedido ou <span className="text-[#AA8321]">Cesta Personalizada</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base font-light">
            Preencha os dados abaixo para enviar o resumo diretamente ao nosso WhatsApp com atendimento instantâneo.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#D4AF37]/30 shadow-2xl relative">
          
          {submitted && (
            <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-emerald-600 shrink-0" />
              <span>
                Pedido encaminhado com sucesso! O WhatsApp abriu automaticamente com suas especificações.
              </span>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                  Seu Nome Completo
                </label>
                <div className="relative">
                  <User className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    {...register("name")}
                    type="text"
                    placeholder="Ex: Maria Silva"
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none text-sm"
                  />
                </div>
                {errors.name && (
                  <span className="text-xs text-red-500 mt-1 block">{errors.name.message}</span>
                )}
              </div>

              {/* Phone with Mask */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                  WhatsApp / Telefone
                </label>
                <div className="relative">
                  <Phone className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    {...register("phone")}
                    onChange={handlePhoneChange}
                    type="text"
                    placeholder="(11) 99243-2243"
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none text-sm"
                  />
                </div>
                {errors.phone && (
                  <span className="text-xs text-red-500 mt-1 block">{errors.phone.message}</span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Basket Type */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                  Escolha a Cesta
                </label>
                <select
                  {...register("basketType")}
                  className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none text-sm bg-white"
                >
                  <option value="Cesta Café da Manhã Estelar">Cesta Café da Manhã Estelar</option>
                  <option value="Cesta Reserva Vinhos & Queijos">Cesta Reserva Vinhos & Queijos</option>
                  <option value="Cesta Romântica Amor Eterno">Cesta Romântica Amor Eterno</option>
                  <option value="Cesta Celebração Aniversário">Cesta Celebração Aniversário</option>
                  <option value="Kit Executive Corporativo">Kit Executive Corporativo</option>
                  <option value="Cesta 100% Personalizada">Cesta 100% Personalizada (Sob medida)</option>
                </select>
                {errors.basketType && (
                  <span className="text-xs text-red-500 mt-1 block">{errors.basketType.message}</span>
                )}
              </div>

              {/* Delivery Date */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                  Data Desejada da Entrega
                </label>
                <div className="relative">
                  <Calendar className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    {...register("deliveryDate")}
                    type="date"
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none text-sm"
                  />
                </div>
                {errors.deliveryDate && (
                  <span className="text-xs text-red-500 mt-1 block">{errors.deliveryDate.message}</span>
                )}
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                Endereço Completo para Entrega em Santo André / Região
              </label>
              <div className="relative">
                <MapPin className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  {...register("address")}
                  type="text"
                  placeholder="Ex: Avenida Pinhal, 790 - Vila Camilópolis, Santo André"
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none text-sm"
                />
              </div>
              {errors.address && (
                <span className="text-xs text-red-500 mt-1 block">{errors.address.message}</span>
              )}
            </div>

            {/* Card Message */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                Mensagem para o Cartão de Acompanhamento (Opcional)
              </label>
              <div className="relative">
                <FileText className="w-5 h-5 text-gray-400 absolute left-4 top-4" />
                <textarea
                  {...register("cardMessage")}
                  rows={3}
                  placeholder="Escreva a mensagem carinhosa que irá impressa no cartão da cesta..."
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none text-sm"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 rounded-full font-bold text-[#2D070D] bg-gradient-to-r from-[#D4AF37] via-[#F5E6AD] to-[#AA8321] hover:brightness-110 shadow-xl text-sm uppercase tracking-wider transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-3"
            >
              <MessageCircle className="w-5 h-5 text-[#2D070D]" />
              <span>Enviar Pedido via WhatsApp</span>
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}
