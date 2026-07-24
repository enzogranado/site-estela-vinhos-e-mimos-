import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CatalogSection from "@/components/CatalogSection";
import CustomBasketBuilderSection from "@/components/CustomBasketBuilderSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CtaSection from "@/components/CtaSection";
import GallerySection from "@/components/GallerySection";
import OrderFormSection from "@/components/OrderFormSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsapp from "@/components/FloatingWhatsapp";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#FAF8F5] text-[#1F1916]">
      {/* Fixed Sticky Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* About & Luxury Differentials */}
      <AboutSection />

      {/* Ready Baskets Catalog */}
      <CatalogSection />

      {/* Interactive Custom Basket Builder */}
      <CustomBasketBuilderSection />

      {/* Testimonials Carousel with Exact User Quotes */}
      <TestimonialsSection />

      {/* Burgundy CTA Section */}
      <CtaSection />

      {/* Lightbox Photo Gallery */}
      <GallerySection />

      {/* Interactive Order Form with Phone Masking */}
      <OrderFormSection />

      {/* Contact Info & Google Maps Embed */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsapp />
    </main>
  );
}
