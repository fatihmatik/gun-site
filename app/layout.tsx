import type { Metadata } from "next";
import "./globals.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const metadata: Metadata = {
  title: "Oversea Education | overseaeducation.com",
  description: "Oversea Education Avrupa'da Eğitim için sizlerle beraber.",
  icons: {
    icon: "/favicon.png",
  },
  keywords: [
    "Avrupa Egitim",
    "Avrupa Staj",
    "Avrupa Calisma",
    "Avrupa Universiteler",
    "İtalya Staj",
    "İtalya Lisans",
    "İtalya Yüksek Lisans",
    "Yurtdisinda is staj",
    "Yurtdisinda okuma calisma",
    "oversea education",
    "avrupa staj danismanlik",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className="flex flex-col min-h-screen bg-gradient_background">
        <NavBar />
        <div className="px-4 md:px-32 mt-16">{children}</div>
        <FloatingWhatsApp />
        <Footer />
      </body>
    </html>
  );
}
