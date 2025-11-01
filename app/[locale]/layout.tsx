import type { Metadata } from "next";
import "./globals.css";
import NavBar from "../[locale]/components/NavBar";
import Footer from "../[locale]/components/Footer";
import FloatingWhatsApp from "@/app/[locale]/components/FloatingWhatsApp";
import { ReactElement } from "react";
import { Provider } from "./provider";
import { getCurrentLocale } from "@/locales/server";
import PageWrapper from "./components/PageWrapper";

export const metadata: Metadata = {
  title: "Acilim Consulting | acilimdanismanlik.com",
  description: "Açılım Danışmanlık Avrupa'da iş için sizlerle beraber.",
  icons: {
    icon: "/favicon.png",
  },
  keywords: [
    // BURAYI DÜZENLERSİN SONRA
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

export default function RootLayout({ children }: { children: ReactElement }) {
  const currentLocale = getCurrentLocale();

  return (
    <html lang="tr">
      <body className="flex flex-col min-h-screen bg-gradient_background">
        <Provider locale={currentLocale}>
          <NavBar />
          <main className="flex-grow">
            <PageWrapper>
              <div className="px-4 md:px-32 mt-16">{children}</div>
            </PageWrapper>
          </main>
          <FloatingWhatsApp />
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
