import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import { LangProvider } from "@/lib/lang";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Nav, Footer } from "./_ui";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zaika Veg Family Restaurant — Indore | Angan Demo",
  description: "Pure-veg family restaurant near Vijay Nagar Square, Indore. Thalis, dosas, Indori nashta. Book a table on WhatsApp.",
};

export default function AnganLayout({ children }: { children: React.ReactNode }) {
  return (
    <LangProvider>
      <div className={`${quicksand.className} bg-[#FDF6EC] font-medium text-[#4A3A2A]`}>
        <Nav />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </LangProvider>
  );
}
