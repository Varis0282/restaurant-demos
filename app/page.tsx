import { Sora } from "next/font/google";
import Link from "next/link";

const sora = Sora({ subsets: ["latin"] });

const themes = [
  {
    href: "/thali",
    name: "Thali",
    style: "Classic Family",
    desc: "Deep maroon, turmeric gold and a layout every family trusts — the classic veg restaurant done right.",
    swatches: ["#B3202C", "#E8A020", "#FFF9F2", "#3D2B26"],
    nav: "#ffffff",
    hero: "linear-gradient(135deg,#FBEFE2,#FFF9F2)",
    accent: "#B3202C",
    text: "#3D2B26",
  },
  {
    href: "/sizzle",
    name: "Sizzle",
    style: "Modern Animated",
    desc: "Hot orange-pink gradients, glass cards and scroll animations — food-app energy for a young crowd.",
    swatches: ["#FF6B2C", "#FF2E63", "#1B0E14", "#0A0A0F"],
    nav: "rgba(255,255,255,0.08)",
    hero: "linear-gradient(135deg,#7A1E3A,#3A1027,#0A0A0F)",
    accent: "#FF6B2C",
    text: "#ffffff",
  },
  {
    href: "/angan",
    name: "Angan",
    style: "Warm & Homely",
    desc: "Cream, leaf green and terracotta — the aangan-style warmth of a family kitchen.",
    swatches: ["#4E7C3A", "#C96F4A", "#FDF6EC", "#F3E3C3"],
    nav: "#FDF6EC",
    hero: "linear-gradient(135deg,#F7EBD6,#FDF6EC)",
    accent: "#C96F4A",
    text: "#4A3A2A",
  },
  {
    href: "/velvet",
    name: "Velvet",
    style: "Fine-Dining Dark",
    desc: "Near-black, champagne gold and serif elegance — the candle-lit fine-dining night look.",
    swatches: ["#D4B483", "#6E1E2B", "#101014", "#2A2A31"],
    nav: "#101014",
    hero: "linear-gradient(135deg,#1B1B22,#101014)",
    accent: "#D4B483",
    text: "#EDE6D6",
  },
  {
    href: "/khata",
    name: "Khata",
    style: "Minimal Editorial",
    desc: "White space, big menu-card typography and one chilli-red accent — calm, modern, unforgettable.",
    swatches: ["#D9331A", "#141414", "#ffffff", "#F4EFE8"],
    nav: "#ffffff",
    hero: "#ffffff",
    accent: "#D9331A",
    text: "#141414",
  },
];

const features = [
  "WhatsApp table booking",
  "Hindi / English toggle",
  "Full menu with prices",
  "Indori specials section",
  "Signature dishes showcase",
  "Google Maps",
  "Party & birthday enquiries",
  "Mobile-first & fast",
];

function MiniPreview({ t }: { t: (typeof themes)[number] }) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 shadow-2xl">
      <div className="flex items-center gap-1.5 bg-[#1a1d26] px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 h-4 flex-1 rounded bg-white/10" />
      </div>
      <div style={{ background: t.hero }} className="p-4">
        <div style={{ background: t.nav }} className="mb-4 flex items-center justify-between rounded-md px-3 py-2 backdrop-blur">
          <span style={{ background: t.accent }} className="h-2.5 w-12 rounded-full" />
          <span className="flex gap-1.5">
            {[0, 1, 2].map((i) => (
              <span key={i} style={{ background: t.text, opacity: 0.35 }} className="h-1.5 w-6 rounded-full" />
            ))}
          </span>
        </div>
        <div className="flex items-center gap-4 pb-2">
          <div className="flex-1">
            <div style={{ background: t.text }} className="mb-2 h-3 w-4/5 rounded-full opacity-90" />
            <div style={{ background: t.text }} className="mb-3 h-3 w-3/5 rounded-full opacity-50" />
            <div style={{ background: t.accent }} className="h-5 w-24 rounded-full" />
          </div>
          <div style={{ background: t.accent, opacity: 0.25 }} className="h-16 w-20 rounded-lg" />
        </div>
      </div>
    </div>
  );
}

export default function Showcase() {
  return (
    <div className={`${sora.className} min-h-screen bg-[#0c0a09] text-white`}>
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-orange-400">
          Live Demo Showcase
        </p>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
          One restaurant.{" "}
          <span className="bg-gradient-to-r from-orange-400 via-rose-400 to-amber-300 bg-clip-text text-transparent">
            Five completely different websites.
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-stone-400">
          Every demo below is a complete, working website for the same restaurant — same menu, same
          features. You simply pick the design you love, we put your name on it.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {features.map((f) => (
            <span key={f} className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-stone-300">
              {f}
            </span>
          ))}
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {themes.map((t, i) => (
            <Link
              key={t.href}
              href={t.href}
              className={`group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.06] ${
                i === 4 ? "md:col-span-2 md:max-w-[calc(50%-12px)]" : ""
              }`}
            >
              <MiniPreview t={t} />
              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <h2 className="text-2xl font-bold">{t.name}</h2>
                    <span className="rounded-full bg-white/10 px-3 py-0.5 text-xs text-stone-300">{t.style}</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-stone-400">{t.desc}</p>
                </div>
                <div className="flex shrink-0 gap-1.5 pt-2">
                  {t.swatches.map((c) => (
                    <span key={c} style={{ background: c }} className="h-4 w-4 rounded-full ring-1 ring-white/20" />
                  ))}
                </div>
              </div>
              <p className="mt-4 text-sm font-semibold text-orange-400 transition-transform duration-300 group-hover:translate-x-1">
                View demo →
              </p>
            </Link>
          ))}
        </div>

        <footer className="mt-20 border-t border-white/10 pt-8 text-center text-sm text-stone-500">
          Built with Next.js · Hindi + English · WhatsApp table booking · Ready in 7 days for your restaurant
        </footer>
      </div>
    </div>
  );
}
