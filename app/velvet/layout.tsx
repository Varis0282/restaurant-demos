import type { Metadata } from "next";
import { Cormorant_Garamond, Work_Sans } from "next/font/google";
import { LangProvider } from "@/lib/lang";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Nav, Footer } from "./_ui";

const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600", "700"], style: ["normal", "italic"], variable: "--font-display" });
const work = Work_Sans({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Zaika Veg Family Restaurant — Indore | Velvet Demo",
  description: "Pure-veg fine dining near Vijay Nagar Square, Indore. Thalis, dosas, Indori nashta. Reserve a table on WhatsApp.",
};

export default function VelvetLayout({ children }: { children: React.ReactNode }) {
  return (
    <LangProvider>
      <div className={`${cormorant.variable} ${work.variable} bg-[#101014] font-[family-name:var(--font-body)] text-[#B9B4A6]`}>
        <Nav />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </LangProvider>
  );
}
