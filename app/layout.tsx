import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

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
      <body className="flex flex-col min-h-screen bg-background">
        <NavBar />
        <div className="px-32">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
