import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://stellarvinhos.com.br"),
  title: "Stellar Vinhos e Mimos | Cestas de Presente e Café da Manhã em Santo André",
  description:
    "A Stellar Vinhos e Mimos cria cestas de café da manhã, presentes personalizados, vinhos, chocolates e kits exclusivos para aniversários, datas especiais e empresas. Entregamos em Santo André e região.",
  keywords: [
    "Cesta de café da manhã",
    "Cesta de presente",
    "Cesta personalizada",
    "Presentes em Santo André",
    "Vinhos para presente",
    "Cesta romântica",
    "Cesta de aniversário",
    "Chocolates para presente",
    "Cestas gourmet",
    "Presentes corporativos",
    "Flores e presentes",
    "Entrega de cestas",
    "Café da manhã surpresa",
  ],
  authors: [{ name: "Stellar Vinhos e Mimos" }],
  openGraph: {
    title: "Stellar Vinhos e Mimos | Cestas de Presente e Café da Manhã em Santo André",
    description:
      "A Stellar Vinhos e Mimos cria cestas de café da manhã, presentes personalizados, vinhos, chocolates e kits exclusivos para aniversários, datas especiais e empresas. Entregamos em Santo André e região.",
    url: "https://stellarvinhos.com.br",
    siteName: "Stellar Vinhos e Mimos",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/hero_stellar_basket.png",
        width: 1200,
        height: 630,
        alt: "Stellar Vinhos e Mimos - Cestas Gourmet Luxo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stellar Vinhos e Mimos | Cestas de Presente em Santo André",
    description:
      "Cestas de presente e café da manhã personalizadas com atendimento 24 horas em Santo André.",
    images: ["/images/hero_stellar_basket.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${playfair.variable} ${jakarta.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#FAF8F5] text-[#1F1916] selection:bg-[#D4AF37] selection:text-white">
        {children}
      </body>
    </html>
  );
}
