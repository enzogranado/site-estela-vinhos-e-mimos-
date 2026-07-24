"use client";

import Link from "next/link";
import { Sparkles, MessageCircle, Share2, Globe } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "Início", href: "#inicio" },
    { name: "Sobre", href: "#sobre" },
    { name: "Cestas", href: "#cestas" },
    { name: "Galeria", href: "#galeria" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <footer className="bg-[#1A0408] text-gray-300 pt-16 pb-12 border-t border-[#D4AF37]/30 relative overflow-hidden">
      {/* Background Star particle subtle accents */}
      <div className="absolute top-4 left-1/4 w-1.5 h-1.5 bg-[#D4AF37] rounded-full animate-twinkle" />
      <div className="absolute top-12 right-1/3 w-1 h-1 bg-[#F5E6AD] rounded-full animate-twinkle" style={{ animationDelay: "1s" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-[#D4AF37]/15">
          
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="#inicio" className="flex items-center gap-2 group mb-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#AA8321] p-0.5 flex items-center justify-center shadow-md">
                <div className="w-full h-full bg-[#1A0408] rounded-full flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-[#D4AF37]" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-serif-luxury text-2xl font-bold tracking-wide text-white">
                  STELLAR
                </span>
                <span className="text-[9px] tracking-[0.25em] text-[#D4AF37] uppercase font-medium">
                  Vinhos & Mimos
                </span>
              </div>
            </Link>
            <p className="text-xs text-gray-400 font-light max-w-sm">
              Cestas de presente e café da manhã de alto padrão em Santo André e região. Momentos inesquecíveis entregues com sofisticação.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-[#D4AF37] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Social Media Custom Vector SVG Icons */}
          <div className="flex items-center space-x-4">
            {/* Instagram Vector */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Siga a Stellar no Instagram"
              className="w-10 h-10 rounded-full bg-[#2D070D] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#2D070D] transition-all"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            {/* Facebook Vector */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Curta a Stellar no Facebook"
              className="w-10 h-10 rounded-full bg-[#2D070D] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#2D070D] transition-all"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.592 0 9 1.592 9 4.808V8z"/>
              </svg>
            </a>

            {/* WhatsApp Vector */}
            <a
              href="https://wa.me/5511992432243?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Stellar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Fale conosco no WhatsApp"
              className="w-10 h-10 rounded-full bg-emerald-800 border border-emerald-500/40 flex items-center justify-center text-white hover:bg-emerald-600 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>

        </div>

        {/* Copyright Notice */}
        <div className="pt-8 text-center text-xs text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-4 font-light">
          <p>© {currentYear} Stellar Vinhos e Mimos. Todos os direitos reservados.</p>
          <p className="text-[11px] text-gray-500">
            Avenida Pinhal, 790 - Vila Camilópolis - Santo André – SP
          </p>
        </div>

      </div>
    </footer>
  );
}
