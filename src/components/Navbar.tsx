"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Sparkles, Menu, X, Phone, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#inicio" },
    { name: "Sobre", href: "#sobre" },
    { name: "Cestas", href: "#cestas" },
    { name: "Monte a Sua", href: "#personalizada" },
    { name: "Galeria", href: "#galeria" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#2D070D]/95 backdrop-blur-md shadow-lg border-b border-[#D4AF37]/20 py-3"
          : "bg-gradient-to-b from-[#2D070D]/90 via-[#2D070D]/50 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="#inicio" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#AA8321] p-0.5 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#2D070D] rounded-full flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-[#D4AF37] animate-twinkle" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-serif-luxury text-xl sm:text-2xl font-bold tracking-wide text-white group-hover:text-[#D4AF37] transition-colors">
              STELLAR
            </span>
            <span className="text-[10px] tracking-[0.25em] text-[#D4AF37] uppercase font-medium">
              Vinhos & Mimos
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-200 hover:text-[#D4AF37] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#D4AF37] hover:after:w-full after:transition-all"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Direct Contact Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://wa.me/5511992432243?text=Ol%C3%A1%2C%20gostaria%20de%20consultar%20as%20cestas%20dispon%C3%ADveis"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider text-[#2D070D] bg-gradient-to-r from-[#D4AF37] via-[#F5E6AD] to-[#AA8321] hover:brightness-110 shadow-md hover:shadow-[#D4AF37]/30 transition-all transform hover:-translate-y-0.5"
          >
            <MessageCircle className="w-4 h-4 text-[#2D070D]" />
            <span>Fazer Pedido</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Abrir menu de navegação"
          className="md:hidden p-2 rounded-lg text-[#D4AF37] hover:bg-[#D4AF37]/10 focus:outline-none"
        >
          {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#2D070D] border-b border-[#D4AF37]/30 px-4 pt-3 pb-6 shadow-2xl"
          >
            <div className="flex flex-col space-y-4 pt-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-gray-200 hover:text-[#D4AF37] transition-colors py-2 border-b border-[#D4AF37]/10"
                >
                  {link.name}
                </Link>
              ))}

              <a
                href="https://wa.me/5511992432243?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20pedido"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 w-full flex items-center justify-center gap-2 py-3 rounded-full font-semibold text-[#2D070D] bg-gradient-to-r from-[#D4AF37] via-[#F5E6AD] to-[#AA8321] text-sm uppercase tracking-wider shadow-lg"
              >
                <MessageCircle className="w-5 h-5 text-[#2D070D]" />
                <span>Pedir pelo WhatsApp</span>
              </a>

              <div className="pt-2 text-center text-xs text-[#D4AF37]/80 flex items-center justify-center gap-1">
                <Phone className="w-3.5 h-3.5" />
                <span>(11) 99243-2243 | Santo André - SP</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
