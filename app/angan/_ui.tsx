"use client";

import Link from "next/link";
import { useState } from "react";
import { Phone, Soup, Menu as MenuIcon, X, ChevronDown, Star, MapPin, Heart } from "lucide-react";
import { useLang, pick } from "@/lib/lang";
import { rest, img } from "@/lib/config";
import { faqs, stats, signatures } from "@/lib/content";
import LangToggle from "@/components/LangToggle";
import type { BookingStyles } from "@/components/BookingForm";

export const BASE = "/angan";
const GREEN = "#4E7C3A";
const TERRA = "#C96F4A";

export function Squiggle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 12" className={`h-3 w-28 ${className}`} fill="none" aria-hidden>
      <path d="M2 8c10-6 20-6 30 0s20 6 30 0 20-6 30 0 20 6 26 2" stroke={TERRA} strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function Blob({ className }: { className: string }) {
  return <div aria-hidden className={`pointer-events-none absolute -z-0 ${className}`} style={{ borderRadius: "42% 58% 61% 39% / 45% 38% 62% 55%" }} />;
}

export function Nav() {
  const { t, lang } = useLang();
  const [open, setOpen] = useState(false);
  const links = [
    { href: BASE, label: t.nav.home },
    { href: `${BASE}/about`, label: t.nav.about },
    { href: `${BASE}/menu`, label: t.nav.menu },
    { href: `${BASE}/gallery`, label: t.nav.gallery },
    { href: `${BASE}/contact`, label: t.nav.contact },
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-[#F3E3C3] bg-[#FDF6EC]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5">
        <Link href={BASE} className="flex items-center gap-2.5">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#4E7C3A] text-[#FDF6EC] shadow-md rotate-3">
            <Soup className="h-6 w-6" />
          </span>
          <span className="leading-tight">
            <span className="block text-lg font-bold text-[#4E7C3A]">{lang === "en" ? rest.name : rest.nameHi}</span>
            <span className="text-xs font-semibold text-[#C96F4A]">{t.misc.veg} · {rest.city}</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-5 text-[15px] font-bold text-[#7A6A55] lg:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="transition-colors hover:text-[#C96F4A]">
              {l.label}
            </Link>
          ))}
          <Link href="/" className="text-xs font-semibold text-[#b8a48b] hover:text-[#7A6A55]">← All demos</Link>
          <LangToggle className="rounded-full border-2 border-[#4E7C3A]/30 px-3.5 py-1 text-sm font-bold text-[#4E7C3A] hover:bg-[#4E7C3A]/10" />
          <Link href={`${BASE}/contact#book`} className="rounded-full bg-[#C96F4A] px-6 py-2.5 font-bold text-white shadow-lg shadow-orange-800/15 transition-transform hover:scale-105">
            {t.nav.book}
          </Link>
        </nav>
        <button onClick={() => setOpen(!open)} className="lg:hidden" aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-[#F3E3C3] bg-[#FDF6EC] px-4 pb-4 lg:hidden">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block border-b border-[#F3E3C3] py-3 font-bold">
              {l.label}
            </Link>
          ))}
          <div className="mt-3 flex gap-3">
            <LangToggle className="rounded-full border-2 border-[#4E7C3A]/30 px-3.5 py-1 text-sm font-bold text-[#4E7C3A]" />
            <Link href={`${BASE}/contact#book`} onClick={() => setOpen(false)} className="flex-1 rounded-full bg-[#C96F4A] px-5 py-2.5 text-center font-bold text-white">
              {t.nav.book}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export function SectionHead({ eyebrow, title, sub }: { eyebrow?: string; title: string; sub?: string }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      {eyebrow && <p className="mb-1 text-sm font-bold uppercase tracking-widest text-[#C96F4A]">{eyebrow}</p>}
      <h2 className="text-3xl font-bold text-[#4E7C3A] md:text-4xl">{title}</h2>
      <Squiggle className="mx-auto mt-2" />
      {sub && <p className="mt-3 text-[#8a7660]">{sub}</p>}
    </div>
  );
}

export function PageHero({ title, sub }: { title: string; sub?: string }) {
  return (
    <section className="relative overflow-hidden py-16 text-center">
      <Blob className="left-[-80px] top-[-60px] h-64 w-64 bg-[#C96F4A]/15" />
      <Blob className="bottom-[-80px] right-[-60px] h-72 w-72 bg-[#4E7C3A]/15" />
      <div className="relative">
        <h1 className="text-4xl font-bold text-[#4E7C3A] md:text-5xl">{title}</h1>
        <Squiggle className="mx-auto mt-3" />
        {sub && <p className="mx-auto mt-4 max-w-xl px-4 text-[#8a7660]">{sub}</p>}
      </div>
    </section>
  );
}

export function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} className={`h-4 w-4 ${i <= n ? "fill-[#E8A020] text-[#E8A020]" : "fill-[#EADFC9] text-[#EADFC9]"}`} />
      ))}
    </div>
  );
}

const TILE_BG = ["bg-[#F3E8D3]", "bg-[#E4EDD8]", "bg-[#F7E3D6]", "bg-[#EAE3F0]"];

export function StatsBand() {
  const { lang } = useLang();
  return (
    <section className="py-12">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-5 px-4 md:grid-cols-4">
        {stats.map((s, i) => (
          <div key={s.value} className={`rounded-3xl ${TILE_BG[i % 4]} p-6 text-center shadow-sm ${i % 2 ? "rotate-1" : "-rotate-1"}`}>
            <p className="text-3xl font-bold text-[#4E7C3A] md:text-4xl">{s.value}</p>
            <p className="mt-1 text-sm font-bold text-[#8a7660]">{s[lang]}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function SignatureCard({ i }: { i: number }) {
  const { lang } = useLang();
  const s = signatures[i];
  const d = s[lang];
  return (
    <div className={`group rounded-3xl bg-white p-3 shadow-md transition-transform hover:-translate-y-1.5 ${i % 2 ? "rotate-1" : "-rotate-1"} hover:rotate-0`}>
      <div className="h-44 overflow-hidden rounded-2xl">
        <img src={img.signatures[s.photo]} alt={d.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="p-4">
        <h3 className="flex items-center gap-1.5 font-bold text-[#4E7C3A]">
          <Heart className="h-4 w-4 fill-[#C96F4A] text-[#C96F4A]" /> {d.name}
        </h3>
        <p className="mt-1 text-sm text-[#8a7660]">{d.desc}</p>
      </div>
    </div>
  );
}

export function FAQList() {
  const { lang } = useLang();
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto max-w-3xl space-y-3">
      {faqs.map((f, i) => {
        const item = pick(f, lang);
        const isOpen = open === i;
        return (
          <div key={i} className="overflow-hidden rounded-3xl bg-white shadow-sm">
            <button onClick={() => setOpen(isOpen ? null : i)} className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left font-bold text-[#4A3A2A]">
              {item.q}
              <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#4E7C3A]/10 text-[#4E7C3A] transition-transform ${isOpen ? "rotate-180" : ""}`}>
                <ChevronDown className="h-4 w-4" />
              </span>
            </button>
            {isOpen && <p className="border-t border-[#F3E3C3] px-6 py-4 text-[#8a7660]">{item.a}</p>}
          </div>
        );
      })}
    </div>
  );
}

export function MapBlock() {
  const { t, lang } = useLang();
  return (
    <div className="grid gap-8 lg:grid-cols-5">
      <div className="lg:col-span-2">
        <div className="rounded-3xl bg-white p-7 shadow-md">
          <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-[#4E7C3A]">
            <MapPin className="h-5 w-5 text-[#C96F4A]" /> {lang === "en" ? rest.name : rest.nameHi}
          </h3>
          <p className="mb-4 text-[#8a7660]">{lang === "en" ? rest.address : rest.addressHi}</p>
          <div className="mb-5 space-y-1 text-sm text-[#8a7660]">
            {rest.timings[lang].map((tm) => (
              <p key={tm.days}><span className="font-bold text-[#4A3A2A]">{tm.days}:</span> {tm.hours}</p>
            ))}
          </div>
          <a href={rest.mapLink} target="_blank" rel="noopener noreferrer" className="inline-block rounded-full bg-[#4E7C3A] px-6 py-2.5 text-sm font-bold text-white hover:bg-[#3d622d]">
            {t.misc.getDirections} →
          </a>
        </div>
      </div>
      <div className="overflow-hidden rounded-3xl shadow-md lg:col-span-3">
        <iframe src={rest.mapEmbed} className="h-72 w-full lg:h-full" loading="lazy" title="Restaurant location map" />
      </div>
    </div>
  );
}

export function CTABand() {
  const { t } = useLang();
  return (
    <section className="relative overflow-hidden bg-[#4E7C3A] py-16">
      <Blob className="left-[-60px] top-[-80px] h-64 w-64 bg-white/10" />
      <Blob className="bottom-[-90px] right-[-40px] h-72 w-72 bg-[#C96F4A]/30" />
      <div className="relative mx-auto max-w-4xl px-4 text-center text-white">
        <h2 className="text-3xl font-bold md:text-4xl">{t.sections.ctaTitle}</h2>
        <p className="mt-3 text-[#DDEBCF]">{t.sections.ctaSub}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href={`${BASE}/contact#book`} className="rounded-full bg-[#C96F4A] px-8 py-3.5 font-bold text-white shadow-xl transition-transform hover:scale-105">
            {t.hero.cta1}
          </Link>
          <a href={`tel:${rest.phoneRaw}`} className="flex items-center gap-2 rounded-full border-2 border-white/70 px-8 py-3.5 font-bold text-white hover:bg-white/10">
            <Phone className="h-4 w-4" /> {t.hero.cta2}
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const { t, lang } = useLang();
  const links = [
    { href: BASE, label: t.nav.home },
    { href: `${BASE}/about`, label: t.nav.about },
    { href: `${BASE}/menu`, label: t.nav.menu },
    { href: `${BASE}/gallery`, label: t.nav.gallery },
    { href: `${BASE}/contact`, label: t.nav.contact },
  ];
  return (
    <footer className="bg-[#3E3226] pt-14 text-[#D9C9B2]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-10 md:grid-cols-4">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <span className="flex h-10 w-10 rotate-3 items-center justify-center rounded-2xl bg-[#C96F4A] text-white"><Soup className="h-5 w-5" /></span>
            <span className="font-bold text-white">{lang === "en" ? rest.name : rest.nameHi}</span>
          </div>
          <p className="text-sm opacity-80">{t.footer.tagline}</p>
        </div>
        <div>
          <h4 className="mb-3 font-bold text-white">{t.footer.quick}</h4>
          <ul className="space-y-2 text-sm">
            {links.map((l) => (
              <li key={l.href}><Link href={l.href} className="hover:text-[#C96F4A]">{l.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-bold text-white">{t.footer.contact}</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li>{lang === "en" ? rest.address : rest.addressHi}</li>
            <li><a href={`tel:${rest.phoneRaw}`} className="hover:text-[#C96F4A]">{rest.phone}</a></li>
            <li>{rest.email}</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-bold text-white">{t.footer.hours}</h4>
          <ul className="space-y-2 text-sm opacity-80">
            {rest.timings[lang].map((tm) => (
              <li key={tm.days}><span className="font-bold text-[#F3E3C3]">{tm.days}</span><br />{tm.hours}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs opacity-60">
        © {new Date().getFullYear()} {rest.name}. {t.footer.rights}
      </div>
    </footer>
  );
}

export const bookingStyles: BookingStyles = {
  wrap: "space-y-5 rounded-3xl bg-white p-6 shadow-md sm:p-8",
  label: "mb-1.5 block text-sm font-bold text-[#4E7C3A]",
  input: "w-full rounded-2xl border-2 border-[#EADFC9] bg-[#FDF6EC]/50 px-4 py-2.5 text-[#4A3A2A] outline-none transition-colors placeholder:text-[#c4b39a] focus:border-[#C96F4A]",
  select: "w-full rounded-2xl border-2 border-[#EADFC9] bg-white px-4 py-2.5 text-[#4A3A2A] outline-none focus:border-[#C96F4A]",
  dayBtn: "rounded-2xl border-2 border-[#EADFC9] bg-white py-2 text-center text-[#8a7660] transition-colors hover:border-[#C96F4A]/60",
  dayBtnActive: "rounded-2xl border-2 border-[#4E7C3A] bg-[#4E7C3A] py-2 text-center text-white shadow-md",
  slotBtn: "rounded-full border-2 border-[#EADFC9] bg-white px-4 py-2 text-sm font-bold text-[#8a7660] transition-colors hover:border-[#C96F4A]/60",
  slotBtnActive: "rounded-full border-2 border-[#C96F4A] bg-[#C96F4A] px-4 py-2 text-sm font-bold text-white",
  groupTitle: "mb-2 mt-1 text-xs font-bold uppercase tracking-wider text-[#b8a48b]",
  submit: "flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 font-bold text-white shadow-lg shadow-green-600/20 transition-transform hover:scale-[1.02]",
  success: "rounded-2xl bg-green-50 px-4 py-3 text-sm font-bold text-green-700",
  error: "rounded-2xl bg-red-50 px-4 py-3 text-sm font-bold text-red-600",
};
