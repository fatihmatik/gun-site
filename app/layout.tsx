import type { Metadata } from "next";
import "./globals.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp ";

export const metadata: Metadata = {
  title: "Oversea Education",
  description: "Oversea Education Avrupa'da Eğitim için sizlerle beraber.",
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
        <div className="px-4 md:px-32">{children}</div>
        <FloatingWhatsApp />
        <Footer />
      </body>
    </html>
  );
}
