"use client";

import Link from "next/link";
import { useState } from "react";
import { Phone, Clock, UtensilsCrossed, Menu as MenuIcon, X, ChevronDown, Star, MapPin, Leaf } from "lucide-react";
import { useLang, pick } from "@/lib/lang";
import { rest, img } from "@/lib/config";
import { faqs, stats, signatures } from "@/lib/content";
import LangToggle from "@/components/LangToggle";
import type { BookingStyles } from "@/components/BookingForm";

export const BASE = "/thali";
const MAROON = "text-[#B3202C]";

export function VegMark() {
  return (
    <span className="inline-flex h-4 w-4 items-center justify-center border-2 border-green-700" aria-label="Pure veg">
      <span className="h-2 w-2 rounded-full bg-green-700" />
    </span>
  );
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
    <header className="sticky top-0 z-40 bg-white shadow-sm">
      <div className="bg-[#B3202C] text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-1.5 text-xs sm:text-[13px]">
          <div className="flex items-center gap-4">
            <a href={`tel:${rest.phoneRaw}`} className="flex items-center gap-1.5 hover:underline">
              <Phone className="h-3.5 w-3.5 text-[#E8A020]" /> {rest.phone}
            </a>
            <span className="hidden items-center gap-1.5 sm:flex">
              <Clock className="h-3.5 w-3.5 text-[#E8A020]" /> {t.hero.open}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/" className="opacity-80 hover:opacity-100">← All demos</Link>
            <LangToggle className="rounded-full bg-white/15 px-3 py-0.5 font-semibold hover:bg-white/25" />
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href={BASE} className="flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#B3202C] text-[#E8A020]">
            <UtensilsCrossed className="h-5 w-5" />
          </span>
          <span className="leading-tight">
            <span className={`block text-lg font-extrabold ${MAROON}`}>{lang === "en" ? rest.name : rest.nameHi}</span>
            <span className="flex items-center gap-1 text-[11px] font-semibold text-green-700"><VegMark /> {t.misc.veg} · {rest.city}</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-5 text-sm font-semibold text-[#6B4F45] lg:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="transition-colors hover:text-[#B3202C]">
              {l.label}
            </Link>
          ))}
          <Link href={`${BASE}/contact`} className="rounded-lg bg-[#B3202C] px-5 py-2.5 text-white shadow-md shadow-red-900/20 transition-all hover:bg-[#8f1a23]">
            {t.nav.book}
          </Link>
        </nav>
        <button onClick={() => setOpen(!open)} className="lg:hidden" aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-orange-100 bg-white px-4 pb-4 lg:hidden">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block border-b border-orange-50 py-3 font-semibold">
              {l.label}
            </Link>
          ))}
          <Link href={`${BASE}/contact`} onClick={() => setOpen(false)} className="mt-3 block rounded-lg bg-[#B3202C] px-5 py-3 text-center font-semibold text-white">
            {t.nav.book}
          </Link>
        </nav>
      )}
    </header>
  );
}

export function SectionHead({ eyebrow, title, sub, light = false }: { eyebrow?: string; title: string; sub?: string; light?: boolean }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      {eyebrow && <p className="mb-2 text-sm font-bold uppercase tracking-widest text-[#E8A020]">{eyebrow}</p>}
      <h2 className={`text-3xl font-extrabold md:text-4xl ${light ? "text-white" : MAROON}`}>{title}</h2>
      {sub && <p className={`mt-3 ${light ? "text-orange-100/80" : "text-[#7d6357]"}`}>{sub}</p>}
    </div>
  );
}

export function PageHero({ title, sub }: { title: string; sub?: string }) {
  return (
    <section className="bg-gradient-to-br from-[#B3202C] to-[#7d1620] py-16 text-center text-white">
      <h1 className="text-4xl font-extrabold md:text-5xl">{title}</h1>
      <div className="mx-auto mt-4 h-1 w-16 rounded bg-[#E8A020]" />
      {sub && <p className="mx-auto mt-4 max-w-xl px-4 text-orange-100/90">{sub}</p>}
    </section>
  );
}

export function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} className={`h-4 w-4 ${i <= n ? "fill-amber-400 text-amber-400" : "fill-stone-200 text-stone-200"}`} />
      ))}
    </div>
  );
}

export function StatsBand() {
  const { lang } = useLang();
  return (
    <section className="bg-[#B3202C] py-12">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 text-center md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.value}>
            <p className="text-4xl font-extrabold text-[#E8A020]">{s.value}</p>
            <p className="mt-1 text-sm font-medium text-orange-100/90">{s[lang]}</p>
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
    <div className="group overflow-hidden rounded-2xl border border-orange-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-44 overflow-hidden">
        <img src={img.signatures[s.photo]} alt={d.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <span className="absolute left-3 top-3 rounded-full bg-white/95 p-1 shadow"><VegMark /></span>
      </div>
      <div className="p-5">
        <h3 className={`font-extrabold ${MAROON}`}>{d.name}</h3>
        <p className="mt-1 text-sm text-[#7d6357]">{d.desc}</p>
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
          <div key={i} className="overflow-hidden rounded-xl border border-orange-100 bg-white">
            <button onClick={() => setOpen(isOpen ? null : i)} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold">
              {item.q}
              <ChevronDown className={`h-5 w-5 shrink-0 text-[#E8A020] transition-transform ${isOpen ? "rotate-180" : ""}`} />
            </button>
            {isOpen && <p className="border-t border-orange-50 px-5 py-4 text-[#7d6357]">{item.a}</p>}
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
        <div className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm">
          <h3 className={`mb-4 flex items-center gap-2 text-lg font-bold ${MAROON}`}>
            <MapPin className="h-5 w-5 text-[#E8A020]" /> {lang === "en" ? rest.name : rest.nameHi}
          </h3>
          <p className="mb-4 text-[#7d6357]">{lang === "en" ? rest.address : rest.addressHi}</p>
          <div className="mb-4 space-y-1 text-sm text-[#7d6357]">
            {rest.timings[lang].map((tm) => (
              <p key={tm.days}><span className="font-semibold text-[#3D2B26]">{tm.days}:</span> {tm.hours}</p>
            ))}
          </div>
          <p className="mb-4 flex items-center gap-1.5 text-xs font-semibold text-green-700"><Leaf className="h-3.5 w-3.5" /> {rest.fssai}</p>
          <a href={rest.mapLink} target="_blank" rel="noopener noreferrer" className="inline-block rounded-lg bg-[#B3202C] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#8f1a23]">
            {t.misc.getDirections} →
          </a>
        </div>
      </div>
      <div className="overflow-hidden rounded-2xl border border-orange-100 shadow-sm lg:col-span-3">
        <iframe src={rest.mapEmbed} className="h-72 w-full lg:h-full" loading="lazy" title="Restaurant location map" />
      </div>
    </div>
  );
}

export function CTABand() {
  const { t } = useLang();
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#B3202C] to-[#7d1620] py-16">
      <div className="mx-auto max-w-4xl px-4 text-center text-white">
        <h2 className="text-3xl font-extrabold md:text-4xl">{t.sections.ctaTitle}</h2>
        <p className="mt-3 text-orange-100/90">{t.sections.ctaSub}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href={`${BASE}/contact`} className="rounded-lg bg-[#E8A020] px-8 py-3.5 font-bold text-[#3D2B26] shadow-lg transition-transform hover:scale-105">
            {t.hero.cta1}
          </Link>
          <a href={`tel:${rest.phoneRaw}`} className="flex items-center gap-2 rounded-lg border-2 border-white/60 px-8 py-3.5 font-bold text-white transition-colors hover:bg-white/10">
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
    <footer className="bg-[#3D2B26] pt-14 text-orange-100/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-10 md:grid-cols-4">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E8A020] text-[#3D2B26]"><UtensilsCrossed className="h-5 w-5" /></span>
            <span className="font-extrabold text-white">{lang === "en" ? rest.name : rest.nameHi}</span>
          </div>
          <p className="text-sm opacity-80">{t.footer.tagline}</p>
        </div>
        <div>
          <h4 className="mb-3 font-bold text-white">{t.footer.quick}</h4>
          <ul className="space-y-2 text-sm">
            {links.map((l) => (
              <li key={l.href}><Link href={l.href} className="hover:text-[#E8A020]">{l.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-bold text-white">{t.footer.contact}</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li>{lang === "en" ? rest.address : rest.addressHi}</li>
            <li><a href={`tel:${rest.phoneRaw}`} className="hover:text-[#E8A020]">{rest.phone}</a></li>
            <li>{rest.email}</li>
            <li>{rest.fssai}</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-bold text-white">{t.footer.hours}</h4>
          <ul className="space-y-2 text-sm opacity-80">
            {rest.timings[lang].map((tm) => (
              <li key={tm.days}><span className="font-semibold text-orange-100">{tm.days}</span><br />{tm.hours}</li>
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
  wrap: "space-y-5 rounded-2xl border border-orange-100 bg-white p-6 shadow-sm sm:p-8",
  label: "mb-1.5 block text-sm font-bold text-[#B3202C]",
  input: "w-full rounded-lg border border-orange-200 px-4 py-2.5 text-[#3D2B26] outline-none transition-colors placeholder:text-stone-400 focus:border-[#E8A020] focus:ring-2 focus:ring-amber-200",
  select: "w-full rounded-lg border border-orange-200 bg-white px-4 py-2.5 text-[#3D2B26] outline-none focus:border-[#E8A020] focus:ring-2 focus:ring-amber-200",
  dayBtn: "rounded-lg border border-orange-100 bg-white py-2 text-center text-[#7d6357] transition-colors hover:border-[#E8A020]",
  dayBtnActive: "rounded-lg border border-[#B3202C] bg-[#B3202C] py-2 text-center text-white shadow-md shadow-red-900/20",
  slotBtn: "rounded-lg border border-orange-100 bg-white px-4 py-2 text-sm font-semibold text-[#7d6357] transition-colors hover:border-[#E8A020]",
  slotBtnActive: "rounded-lg border border-[#E8A020] bg-[#E8A020] px-4 py-2 text-sm font-semibold text-[#3D2B26]",
  groupTitle: "mb-2 mt-1 text-xs font-bold uppercase tracking-wider text-stone-400",
  submit: "flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] px-6 py-3.5 font-bold text-white shadow-lg shadow-green-500/25 transition-transform hover:scale-[1.02]",
  success: "rounded-lg bg-green-50 px-4 py-3 text-sm font-semibold text-green-700",
  error: "rounded-lg bg-red-50 px-4 py-3 text-sm font-semibold text-red-600",
};
