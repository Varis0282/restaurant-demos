"use client";

import Link from "next/link";
import { useState } from "react";
import { Phone, Menu as MenuIcon, X, MapPin, ArrowUpRight, Plus, Minus } from "lucide-react";
import { useLang, pick } from "@/lib/lang";
import { rest, img } from "@/lib/config";
import { faqs, stats, signatures } from "@/lib/content";
import LangToggle from "@/components/LangToggle";
import type { BookingStyles } from "@/components/BookingForm";

export const BASE = "/khata";
export const RED = "#D9331A";
export const SERIF = "font-[family-name:var(--font-display)]";

export function Num({ n }: { n: number }) {
  return <span className="text-xs font-semibold tracking-[0.2em] text-[#D9331A]">{String(n).padStart(2, "0")}</span>;
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
    <header className="sticky top-0 z-40 border-b-2 border-[#141414] bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href={BASE} className={`${SERIF} text-2xl`}>
          {rest.shortName}<span className="text-[#D9331A]">.</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium lg:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="underline-offset-4 hover:underline hover:decoration-[#D9331A] hover:decoration-2">
              {l.label}
            </Link>
          ))}
          <Link href="/" className="text-xs text-neutral-400 hover:text-neutral-600">← All demos</Link>
          <LangToggle className="border-2 border-[#141414] px-3 py-1 text-xs font-bold hover:bg-[#141414] hover:text-white" />
          <Link href={`${BASE}/contact#book`} className="bg-[#D9331A] px-5 py-2.5 font-bold text-white hover:bg-[#b52a15]">
            {t.nav.book}
          </Link>
        </nav>
        <button onClick={() => setOpen(!open)} className="lg:hidden" aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <nav className="border-t-2 border-[#141414] bg-white px-4 pb-4 lg:hidden">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block border-b border-neutral-200 py-3 font-medium">
              {l.label}
            </Link>
          ))}
          <div className="mt-3 flex gap-3">
            <LangToggle className="border-2 border-[#141414] px-3 py-1.5 text-xs font-bold" />
            <Link href={`${BASE}/contact#book`} onClick={() => setOpen(false)} className="flex-1 bg-[#D9331A] px-5 py-2.5 text-center font-bold text-white">
              {t.nav.book}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export function SectionHead({ n, title, sub }: { n: number; title: string; sub?: string }) {
  return (
    <div className="mb-12 border-t-2 border-[#141414] pt-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <Num n={n} />
          <h2 className={`mt-2 ${SERIF} text-4xl md:text-5xl`}>{title}</h2>
        </div>
        {sub && <p className="max-w-sm text-sm text-neutral-500">{sub}</p>}
      </div>
    </div>
  );
}

export function PageHero({ kicker, title, sub }: { kicker: string; title: string; sub?: string }) {
  return (
    <section className="border-b-2 border-[#141414]">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#D9331A]">{kicker}</p>
        <h1 className={`mt-3 ${SERIF} text-5xl leading-[1.02] md:text-7xl`}>{title}</h1>
        {sub && <p className="mt-5 max-w-xl text-neutral-500">{sub}</p>}
      </div>
    </section>
  );
}

export function StatsBand() {
  const { lang } = useLang();
  return (
    <section className="border-y-2 border-[#141414]">
      <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-neutral-200 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.value} className="px-6 py-10">
            <p className={`${SERIF} text-4xl md:text-5xl`}>{s.value}</p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.15em] text-neutral-500">{s[lang]}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function SignatureRow({ i, n }: { i: number; n: number }) {
  const { lang } = useLang();
  const s = signatures[i];
  const d = s[lang];
  return (
    <div className="group grid items-center gap-6 border-t border-neutral-200 py-6 md:grid-cols-12">
      <span className="md:col-span-1"><Num n={n} /></span>
      <div className="h-32 overflow-hidden md:col-span-3">
        <img src={img.signatures[s.photo]} alt={d.name} className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0" />
      </div>
      <h3 className={`${SERIF} text-2xl md:col-span-4 md:text-3xl`}>{d.name}</h3>
      <p className="text-sm text-neutral-500 md:col-span-4">{d.desc}</p>
    </div>
  );
}

export function FAQList() {
  const { lang } = useLang();
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto max-w-3xl">
      {faqs.map((f, i) => {
        const item = pick(f, lang);
        const isOpen = open === i;
        return (
          <div key={i} className="border-t border-neutral-200 last:border-b">
            <button onClick={() => setOpen(isOpen ? null : i)} className="flex w-full items-center justify-between gap-4 py-5 text-left">
              <span className="flex items-baseline gap-4">
                <Num n={i + 1} />
                <span className={`${SERIF} text-xl`}>{item.q}</span>
              </span>
              {isOpen ? <Minus className="h-4 w-4 shrink-0 text-[#D9331A]" /> : <Plus className="h-4 w-4 shrink-0 text-[#D9331A]" />}
            </button>
            {isOpen && <p className="pb-6 pl-12 text-[15px] leading-relaxed text-neutral-500">{item.a}</p>}
          </div>
        );
      })}
    </div>
  );
}

export function MapBlock() {
  const { t, lang } = useLang();
  return (
    <div className="grid border-2 border-[#141414] lg:grid-cols-5">
      <div className="border-b-2 border-[#141414] p-8 lg:col-span-2 lg:border-b-0 lg:border-r-2">
        <h3 className={`mb-4 flex items-center gap-2 ${SERIF} text-2xl`}>
          <MapPin className="h-5 w-5 text-[#D9331A]" /> {lang === "en" ? rest.name : rest.nameHi}
        </h3>
        <p className="mb-4 text-sm leading-relaxed text-neutral-500">{lang === "en" ? rest.address : rest.addressHi}</p>
        <div className="mb-6 space-y-1.5 text-sm text-neutral-500">
          {rest.timings[lang].map((tm) => (
            <p key={tm.days}><span className="font-bold text-[#141414]">{tm.days}:</span> {tm.hours}</p>
          ))}
        </div>
        <a href={rest.mapLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-bold underline decoration-[#D9331A] decoration-2 underline-offset-4 hover:text-[#D9331A]">
          {t.misc.getDirections} <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
      <div className="lg:col-span-3">
        <iframe src={rest.mapEmbed} className="h-72 w-full grayscale lg:h-full" loading="lazy" title="Restaurant location map" />
      </div>
    </div>
  );
}

export function CTABand() {
  const { t } = useLang();
  return (
    <section className="bg-[#141414] py-20 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#D9331A]">Zaika</p>
        <h2 className={`mt-3 max-w-2xl ${SERIF} text-4xl leading-tight md:text-6xl`}>{t.sections.ctaTitle}</h2>
        <p className="mt-4 max-w-xl text-neutral-400">{t.sections.ctaSub}</p>
        <div className="mt-9 flex flex-wrap gap-4">
          <Link href={`${BASE}/contact#book`} className="bg-[#D9331A] px-8 py-3.5 font-bold text-white hover:bg-[#b52a15]">
            {t.hero.cta1}
          </Link>
          <a href={`tel:${rest.phoneRaw}`} className="flex items-center gap-2 border-2 border-white px-8 py-3.5 font-bold hover:bg-white hover:text-[#141414]">
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
    <footer className="border-t-2 border-[#141414] pt-12">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-10 md:grid-cols-4">
        <div>
          <p className={`${SERIF} text-3xl`}>{rest.shortName}<span className="text-[#D9331A]">.</span></p>
          <p className="mt-3 text-sm text-neutral-500">{t.footer.tagline}</p>
        </div>
        <div>
          <h4 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-neutral-400">{t.footer.quick}</h4>
          <ul className="space-y-2 text-sm font-medium">
            {links.map((l) => (
              <li key={l.href}><Link href={l.href} className="underline-offset-4 hover:underline hover:decoration-[#D9331A] hover:decoration-2">{l.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-neutral-400">{t.footer.contact}</h4>
          <ul className="space-y-2 text-sm text-neutral-600">
            <li>{lang === "en" ? rest.address : rest.addressHi}</li>
            <li><a href={`tel:${rest.phoneRaw}`} className="font-bold text-[#141414] hover:text-[#D9331A]">{rest.phone}</a></li>
            <li>{rest.email}</li>
            <li>{rest.fssai}</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-neutral-400">{t.footer.hours}</h4>
          <ul className="space-y-2 text-sm text-neutral-600">
            {rest.timings[lang].map((tm) => (
              <li key={tm.days}><span className="font-bold text-[#141414]">{tm.days}</span><br />{tm.hours}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-neutral-200 py-5 text-center text-xs text-neutral-400">
        © {new Date().getFullYear()} {rest.name}. {t.footer.rights}
      </div>
    </footer>
  );
}

export const bookingStyles: BookingStyles = {
  wrap: "space-y-6 border-2 border-[#141414] p-6 sm:p-10",
  label: "mb-2 block text-xs font-bold uppercase tracking-[0.2em]",
  input: "w-full border-0 border-b-2 border-neutral-300 bg-transparent px-0 py-2.5 outline-none transition-colors placeholder:text-neutral-300 focus:border-[#D9331A]",
  select: "w-full border-0 border-b-2 border-neutral-300 bg-transparent px-0 py-2.5 outline-none focus:border-[#D9331A]",
  dayBtn: "border border-neutral-300 py-2 text-center text-neutral-500 transition-colors hover:border-[#141414]",
  dayBtnActive: "border border-[#141414] bg-[#141414] py-2 text-center text-white",
  slotBtn: "border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-600 transition-colors hover:border-[#141414]",
  slotBtnActive: "border border-[#D9331A] bg-[#D9331A] px-4 py-2 text-sm font-bold text-white",
  groupTitle: "mb-2 mt-1 text-[10px] font-bold uppercase tracking-[0.25em] text-neutral-400",
  submit: "flex w-full items-center justify-center gap-2 bg-[#25D366] px-6 py-4 font-bold text-white hover:opacity-90",
  success: "border-2 border-green-600 bg-green-50 px-4 py-3 text-sm font-bold text-green-700",
  error: "border-2 border-[#D9331A] bg-red-50 px-4 py-3 text-sm font-bold text-[#D9331A]",
};
