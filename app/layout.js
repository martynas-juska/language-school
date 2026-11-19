import { Archivo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PointerGlow from "@/components/PointerGlow";
import { MotionProvider } from "@/components/Reveal";

// Same font as RickNest; latin-ext covers ą č ę ė į š ų ū ž. "wdth" lets headings widen (fontStretch).
const archivo = Archivo({
  subsets: ["latin", "latin-ext"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata = {
  title: { default: "Lertman – kalbų kursai ir paslaugos", template: "%s | Lertman" },
  description:
    "Lertman – individualūs ir grupiniai kalbų kursai nuotoliu, vertimai, dokumentų rengimas ir mokymai įmonėms.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="lt" className={archivo.variable}>
      <body className="flex min-h-screen flex-col">
        <MotionProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </MotionProvider>
        <PointerGlow />
      </body>
    </html>
  );
}