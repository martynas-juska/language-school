import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin", "latin-ext"], // latin-ext covers ą č ę ė į š ų ū ž
  display: "swap",
});

export const metadata = {
  title: "Kalbų Mokykla",
  description: "Kalbų kursai ir paslaugos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="lt" className={inter.className}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}