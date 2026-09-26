import type { Metadata } from "next";
import { Sora } from "next/font/google";
import { LangProvider } from "@/lib/lang";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Nav, Footer } from "./_ui";

const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zaika Veg Family Restaurant — Indore | Sizzle Demo",
  description: "Pure-veg family restaurant near Vijay Nagar Square, Indore. Thalis, dosas, Indori nashta. Book a table on WhatsApp.",
};

export default function SizzleLayout({ children }: { children: React.ReactNode }) {
  return (
    <LangProvider>
      <div className={`${sora.className} relative min-h-screen overflow-x-clip bg-[#0A0A0F] text-stone-200`}>
        {/* fixed gradient blobs */}
        <div aria-hidden className="pointer-events-none fixed inset-0 -z-0">
          <div className="absolute -left-40 top-[-10%] h-[480px] w-[480px] rounded-full bg-[#FF6B2C]/25 blur-[140px]" />
          <div className="absolute right-[-10%] top-[30%] h-[520px] w-[520px] rounded-full bg-[#FF2E63]/20 blur-[160px]" />
          <div className="absolute bottom-[-15%] left-[25%] h-[420px] w-[420px] rounded-full bg-[#7A1E3A]/30 blur-[140px]" />
        </div>
        <div className="relative z-10">
          <Nav />
          <main>{children}</main>
          <Footer />
        </div>
        <WhatsAppFloat />
      </div>
    </LangProvider>
  );
}
