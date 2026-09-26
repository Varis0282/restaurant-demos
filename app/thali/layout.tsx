import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LangProvider } from "@/lib/lang";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Nav, Footer } from "./_ui";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zaika Veg Family Restaurant — Indore | Thali Demo",
  description: "Pure-veg family restaurant near Vijay Nagar Square, Indore. Thalis, dosas, Indori nashta. Book a table on WhatsApp.",
};

export default function ThaliLayout({ children }: { children: React.ReactNode }) {
  return (
    <LangProvider>
      <div className={`${inter.className} bg-[#FFF9F2] text-[#3D2B26]`}>
        <Nav />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </LangProvider>
  );
}
