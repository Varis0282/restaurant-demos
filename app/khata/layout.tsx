import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import { LangProvider } from "@/lib/lang";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Nav, Footer } from "./_ui";

const serif = DM_Serif_Display({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-display" });
const sans = DM_Sans({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Zaika Veg Family Restaurant — Indore | Khata Demo",
  description: "Pure-veg family restaurant near Vijay Nagar Square, Indore. Thalis, dosas, Indori nashta. Book a table on WhatsApp.",
};

export default function KhataLayout({ children }: { children: React.ReactNode }) {
  return (
    <LangProvider>
      <div className={`${serif.variable} ${sans.variable} bg-white font-[family-name:var(--font-body)] text-[#141414]`}>
        <Nav />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </LangProvider>
  );
}
