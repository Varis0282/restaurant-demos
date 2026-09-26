"use client";

import Link from "next/link";
import { useState } from "react";
import { Phone, Menu as MenuIcon, X, Star, MapPin, Plus, Minus } from "lucide-react";
import { useLang, pick } from "@/lib/lang";
import { rest, img } from "@/lib/config";
import { faqs, stats, signatures } from "@/lib/content";
import LangToggle from "@/components/LangToggle";
import type { BookingStyles } from "@/components/BookingForm";

export const BASE = "/velvet";
export const GOLD = "#D4B483";
export const SERIF = "font-[family-name:var(--font-display)]";

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#D4B483]">
      <span className="h-px w-8 bg-[#D4B483]/50" /> {children} <span className="h-px w-8 bg-[#D4B483]/50" />
    </p>
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
    <header className="sticky top-0 z-40 border-b border-white/[0.08] bg-[#101014]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href={BASE} className="flex items-center gap-3">
          <span className={`flex h-10 w-10 items-center justify-center border border-[#D4B483]/60 ${SERIF} text-xl italic text-[#D4B483]`}>Z</span>
          <span className="leading-tight">
            <span className={`block ${SERIF} text-xl font-semibold text-[#EDE6D6]`}>{lang === "en" ? rest.name : rest.nameHi}</span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4B483]">{rest.city} · est. {rest.established}</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-[13px] uppercase tracking-[0.15em] text-[#B9B4A6] lg:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="transition-colors hover:text-[#D4B483]">
              {l.label}
            </Link>
          ))}
          <Link href="/" className="text-[11px] normal-case tracking-normal text-white/30 hover:text-white/60">← All demos</Link>
          <LangToggle className="border border-white/20 px-3 py-1 text-xs hover:border-[#D4B483] hover:text-[#D4B483]" />
          <Link href={`${BASE}/contact`} className="border border-[#D4B483] px-5 py-2.5 font-semibold text-[#D4B483] transition-colors hover:bg-[#D4B483] hover:text-[#101014]">
            {t.nav.book}
          </Link>
        </nav>
        <button onClick={() => setOpen(!open)} className="text-[#EDE6D6] lg:hidden" aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-white/[0.08] bg-[#101014] px-4 pb-5 lg:hidden">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block border-b border-white/[0.06] py-3.5 text-sm uppercase tracking-[0.15em] text-[#B9B4A6]">
              {l.label}
            </Link>
          ))}
          <div className="mt-4 flex items-center gap-3">
            <LangToggle className="border border-white/20 px-3 py-1.5 text-xs text-[#B9B4A6]" />
            <Link href={`${BASE}/contact`} onClick={() => setOpen(false)} className="flex-1 border border-[#D4B483] px-5 py-2.5 text-center text-sm font-semibold uppercase tracking-[0.15em] text-[#D4B483]">
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
    <div className="mx-auto mb-14 max-w-2xl text-center">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className={`mt-4 ${SERIF} text-4xl font-semibold text-[#EDE6D6] md:text-5xl`}>{title}</h2>
      {sub && <p className="mt-4 text-[15px] text-[#8E897C]">{sub}</p>}
    </div>
  );
}

export function PageHero({ title, sub }: { title: string; sub?: string }) {
  return (
    <section className="border-b border-white/[0.06] py-20 text-center">
      <Eyebrow>{rest.shortName}</Eyebrow>
      <h1 className={`mt-4 ${SERIF} text-5xl font-semibold text-[#EDE6D6] md:text-6xl`}>{title}</h1>
      {sub && <p className="mx-auto mt-5 max-w-xl px-4 text-[#8E897C]">{sub}</p>}
    </section>
  );
}

export function Stars({ n }: { n: number }) {
  return (
    <div className="flex justify-center gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} className={`h-3.5 w-3.5 ${i <= n ? "fill-[#D4B483] text-[#D4B483]" : "fill-white/10 text-white/10"}`} />
      ))}
    </div>
  );
}

export function StatsBand() {
  const { lang } = useLang();
  return (
    <section className="border-y border-white/[0.06]">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-white/[0.06] md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.value} className="bg-[#101014] px-6 py-10 text-center">
            <p className={`${SERIF} text-4xl font-semibold text-[#D4B483]`}>{s.value}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[#8E897C]">{s[lang]}</p>
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
    <div className="group border border-white/[0.08] transition-colors hover:border-[#D4B483]/40">
      <div className="h-56 overflow-hidden">
        <img src={img.signatures[s.photo]} alt={d.name} className="h-full w-full object-cover grayscale-[35%] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0" />
      </div>
      <div className="p-6 text-center">
        <h3 className={`${SERIF} text-2xl font-semibold text-[#EDE6D6]`}>{d.name}</h3>
        <p className="mt-2 text-sm text-[#8E897C]">{d.desc}</p>
      </div>
    </div>
  );
}

export function FAQList() {
  const { lang } = useLang();
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto max-w-3xl divide-y divide-white/[0.08] border-y border-white/[0.08]">
      {faqs.map((f, i) => {
        const item = pick(f, lang);
        const isOpen = open === i;
        return (
          <div key={i}>
            <button onClick={() => setOpen(isOpen ? null : i)} className="flex w-full items-center justify-between gap-4 py-5 text-left font-medium text-[#EDE6D6]">
              <span className={`${SERIF} text-lg`}>{item.q}</span>
              {isOpen ? <Minus className="h-4 w-4 shrink-0 text-[#D4B483]" /> : <Plus className="h-4 w-4 shrink-0 text-[#D4B483]" />}
            </button>
            {isOpen && <p className="pb-5 text-[15px] leading-relaxed text-[#8E897C]">{item.a}</p>}
          </div>
        );
      })}
    </div>
  );
}

export function MapBlock() {
  const { t, lang } = useLang();
  return (
    <div className="grid gap-px border border-white/[0.08] bg-white/[0.06] lg:grid-cols-5">
      <div className="bg-[#101014] p-8 lg:col-span-2">
        <h3 className={`mb-5 flex items-center gap-2 ${SERIF} text-2xl font-semibold text-[#EDE6D6]`}>
          <MapPin className="h-5 w-5 text-[#D4B483]" /> {lang === "en" ? rest.name : rest.nameHi}
        </h3>
        <p className="mb-5 text-sm leading-relaxed text-[#8E897C]">{lang === "en" ? rest.address : rest.addressHi}</p>
        <div className="mb-6 space-y-1.5 text-sm text-[#8E897C]">
          {rest.timings[lang].map((tm) => (
            <p key={tm.days}><span className="font-semibold text-[#B9B4A6]">{tm.days}:</span> {tm.hours}</p>
          ))}
        </div>
        <a href={rest.mapLink} target="_blank" rel="noopener noreferrer" className="inline-block border border-[#D4B483] px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#D4B483] transition-colors hover:bg-[#D4B483] hover:text-[#101014]">
          {t.misc.getDirections}
        </a>
      </div>
      <div className="lg:col-span-3">
        <iframe src={rest.mapEmbed} className="h-72 w-full grayscale invert-[0.92] lg:h-full" loading="lazy" title="Restaurant location map" />
      </div>
    </div>
  );
}

export function CTABand() {
  const { t } = useLang();
  return (
    <section className="relative overflow-hidden border-t border-white/[0.06] py-24 text-center">
      <img src={img.dark} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#101014]/70 via-transparent to-[#101014]" />
      <div className="relative mx-auto max-w-3xl px-4">
        <Eyebrow>{rest.shortName}</Eyebrow>
        <h2 className={`mt-4 ${SERIF} text-4xl font-semibold text-[#EDE6D6] md:text-5xl`}>{t.sections.ctaTitle}</h2>
        <p className="mt-4 text-[#8E897C]">{t.sections.ctaSub}</p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Link href={`${BASE}/contact`} className="bg-[#D4B483] px-9 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-[#101014] transition-opacity hover:opacity-90">
            {t.hero.cta1}
          </Link>
          <a href={`tel:${rest.phoneRaw}`} className="flex items-center gap-2 border border-white/25 px-9 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-[#EDE6D6] hover:border-[#D4B483] hover:text-[#D4B483]">
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
    <footer className="border-t border-white/[0.08] pt-14">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-12 md:grid-cols-4">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className={`flex h-9 w-9 items-center justify-center border border-[#D4B483]/60 ${SERIF} italic text-[#D4B483]`}>Z</span>
            <span className={`${SERIF} text-lg font-semibold text-[#EDE6D6]`}>{lang === "en" ? rest.name : rest.nameHi}</span>
          </div>
          <p className="text-sm text-[#8E897C]">{t.footer.tagline}</p>
        </div>
        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#D4B483]">{t.footer.quick}</h4>
          <ul className="space-y-2.5 text-sm text-[#8E897C]">
            {links.map((l) => (
              <li key={l.href}><Link href={l.href} className="hover:text-[#D4B483]">{l.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#D4B483]">{t.footer.contact}</h4>
          <ul className="space-y-2.5 text-sm text-[#8E897C]">
            <li>{lang === "en" ? rest.address : rest.addressHi}</li>
            <li><a href={`tel:${rest.phoneRaw}`} className="hover:text-[#D4B483]">{rest.phone}</a></li>
            <li>{rest.email}</li>
            <li>{rest.fssai}</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#D4B483]">{t.footer.hours}</h4>
          <ul className="space-y-2.5 text-sm text-[#8E897C]">
            {rest.timings[lang].map((tm) => (
              <li key={tm.days}><span className="text-[#B9B4A6]">{tm.days}</span><br />{tm.hours}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/[0.06] py-5 text-center text-xs tracking-[0.15em] text-[#5c584e]">
        © {new Date().getFullYear()} {rest.name} · {t.footer.rights}
      </div>
    </footer>
  );
}

export const bookingStyles: BookingStyles = {
  wrap: "space-y-6 border border-white/[0.08] bg-white/[0.02] p-6 sm:p-10",
  label: "mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-[#D4B483]",
  input: "w-full border border-white/15 bg-transparent px-4 py-3 text-[#EDE6D6] outline-none transition-colors placeholder:text-white/25 focus:border-[#D4B483]",
  select: "w-full border border-white/15 bg-[#16161c] px-4 py-3 text-[#EDE6D6] outline-none focus:border-[#D4B483]",
  dayBtn: "border border-white/10 py-2 text-center text-[#8E897C] transition-colors hover:border-[#D4B483]/60",
  dayBtnActive: "border border-[#D4B483] bg-[#D4B483] py-2 text-center text-[#101014]",
  slotBtn: "border border-white/10 px-4 py-2 text-sm text-[#8E897C] transition-colors hover:border-[#D4B483]/60",
  slotBtnActive: "border border-[#D4B483] bg-[#D4B483] px-4 py-2 text-sm font-semibold text-[#101014]",
  groupTitle: "mb-2 mt-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/30",
  submit: "flex w-full items-center justify-center gap-2 bg-[#25D366] px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-90",
  success: "border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-400",
  error: "border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400",
};
