"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { Phone, Flame, Menu as MenuIcon, X, ChevronDown, Star, MapPin } from "lucide-react";
import { useLang, pick } from "@/lib/lang";
import { rest, img } from "@/lib/config";
import { faqs, stats, signatures, reviews } from "@/lib/content";
import LangToggle from "@/components/LangToggle";
import type { BookingStyles } from "@/components/BookingForm";

export const BASE = "/sizzle";
export const GRAD = "bg-gradient-to-r from-[#FF6B2C] to-[#FF2E63]";
export const GRAD_TEXT = "bg-gradient-to-r from-[#FF6B2C] via-[#FF4A4A] to-[#FF2E63] bg-clip-text text-transparent";

export function FadeIn({ children, delay = 0, y = 24, className }: { children: React.ReactNode; delay?: number; y?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Counter({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const num = parseFloat(value.replace(/[^\d.]/g, "")) || 0;
  const suffix = value.replace(/[\d.,]+/, "");
  useEffect(() => {
    if (!inView || !ref.current) return;
    const controls = animate(0, num, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = (num % 1 ? v.toFixed(1) : Math.round(v).toLocaleString()) + suffix;
      },
    });
    return () => controls.stop();
  }, [inView, num, suffix]);
  return <span ref={ref} className={className}>0{suffix}</span>;
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
    <header className="sticky top-4 z-40 px-4">
      <div className="mx-auto flex max-w-5xl items-center justify-between rounded-full border border-white/10 bg-white/[0.06] px-5 py-2.5 shadow-2xl backdrop-blur-xl">
        <Link href={BASE} className="flex items-center gap-2">
          <span className={`flex h-8 w-8 items-center justify-center rounded-full ${GRAD} text-white`}>
            <Flame className="h-4 w-4" />
          </span>
          <span className="font-bold text-white">{rest.shortName}</span>
        </Link>
        <nav className="hidden items-center gap-5 text-sm font-medium text-stone-300 lg:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="transition-colors hover:text-white">
              {l.label}
            </Link>
          ))}
          <Link href="/" className="text-xs text-stone-500 hover:text-stone-300">← All demos</Link>
          <LangToggle className="rounded-full border border-white/15 px-3 py-1 text-xs font-semibold text-stone-300 hover:bg-white/10" />
          <Link href={`${BASE}/contact`} className={`rounded-full ${GRAD} px-5 py-2 font-semibold text-white shadow-lg shadow-rose-500/30 transition-transform hover:scale-105`}>
            {t.nav.book}
          </Link>
        </nav>
        <button onClick={() => setOpen(!open)} className="text-white lg:hidden" aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <nav className="mx-auto mt-2 max-w-5xl rounded-2xl border border-white/10 bg-[#14141c]/95 p-4 backdrop-blur-xl lg:hidden">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block border-b border-white/5 py-3 font-medium text-stone-200">
              {l.label}
            </Link>
          ))}
          <div className="mt-3 flex items-center gap-3">
            <LangToggle className="rounded-full border border-white/15 px-3 py-1 text-xs font-semibold text-stone-300" />
            <Link href={`${BASE}/contact`} onClick={() => setOpen(false)} className={`flex-1 rounded-full ${GRAD} px-5 py-2.5 text-center font-semibold text-white`}>
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
    <FadeIn className="mx-auto mb-12 max-w-2xl text-center">
      {eyebrow && <p className={`mb-2 text-sm font-bold uppercase tracking-[0.2em] ${GRAD_TEXT}`}>{eyebrow}</p>}
      <h2 className="text-3xl font-bold text-white md:text-4xl">{title}</h2>
      {sub && <p className="mt-3 text-stone-400">{sub}</p>}
    </FadeIn>
  );
}

export function PageHero({ title, sub }: { title: string; sub?: string }) {
  return (
    <section className="px-4 pb-10 pt-16 text-center">
      <FadeIn>
        <h1 className={`text-4xl font-bold md:text-5xl ${GRAD_TEXT}`}>{title}</h1>
        {sub && <p className="mx-auto mt-4 max-w-xl text-stone-400">{sub}</p>}
      </FadeIn>
    </section>
  );
}

export function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} className={`h-4 w-4 ${i <= n ? "fill-amber-400 text-amber-400" : "fill-stone-700 text-stone-700"}`} />
      ))}
    </div>
  );
}

export function StatsBand() {
  const { lang } = useLang();
  return (
    <section className="px-4 py-14">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((s, i) => (
          <FadeIn key={s.value} delay={i * 0.08}>
            <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-6 text-center backdrop-blur">
              <Counter value={s.value} className={`text-3xl font-bold md:text-4xl ${GRAD_TEXT}`} />
              <p className="mt-2 text-sm text-stone-400">{s[lang]}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

export function SignatureCard({ i, delay = 0 }: { i: number; delay?: number }) {
  const { lang } = useLang();
  const s = signatures[i];
  const d = s[lang];
  return (
    <FadeIn delay={delay}>
      <motion.div whileHover={{ y: -6 }} className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] backdrop-blur">
        <div className="h-44 overflow-hidden">
          <img src={img.signatures[s.photo]} alt={d.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        </div>
        <div className="p-5">
          <h3 className="font-bold text-white">{d.name}</h3>
          <p className="mt-1 text-sm text-stone-400">{d.desc}</p>
        </div>
      </motion.div>
    </FadeIn>
  );
}

export function ReviewsMarquee() {
  const { lang } = useLang();
  const row = [...reviews, ...reviews];
  return (
    <div className="group relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#0A0A0F] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#0A0A0F] to-transparent" />
      <div className="flex w-max animate-marquee gap-5 group-hover:[animation-play-state:paused]">
        {row.map((r, i) => (
          <div key={i} className="w-80 shrink-0 rounded-2xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur">
            <div className="mb-2 flex items-center gap-3">
              <span className={`flex h-9 w-9 items-center justify-center rounded-full ${GRAD} text-sm font-bold text-white`}>{r.name[0]}</span>
              <div>
                <p className="text-sm font-bold text-white">{r.name}</p>
                <p className="text-xs text-stone-500">{r.area}</p>
              </div>
            </div>
            <Stars n={r.stars} />
            <p className="mt-2 text-sm leading-relaxed text-stone-400">&ldquo;{r[lang]}&rdquo;</p>
          </div>
        ))}
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
          <FadeIn key={i} delay={i * 0.04}>
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur">
              <button onClick={() => setOpen(isOpen ? null : i)} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-white">
                {item.q}
                <ChevronDown className={`h-5 w-5 shrink-0 text-[#FF6B2C] transition-transform ${isOpen ? "rotate-180" : ""}`} />
              </button>
              {isOpen && <p className="border-t border-white/5 px-5 py-4 text-stone-400">{item.a}</p>}
            </div>
          </FadeIn>
        );
      })}
    </div>
  );
}

export function MapBlock() {
  const { t, lang } = useLang();
  return (
    <div className="grid gap-6 lg:grid-cols-5">
      <FadeIn className="lg:col-span-2">
        <div className="h-full rounded-3xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur">
          <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-white">
            <MapPin className="h-5 w-5 text-[#FF2E63]" /> {lang === "en" ? rest.name : rest.nameHi}
          </h3>
          <p className="mb-4 text-sm text-stone-400">{lang === "en" ? rest.address : rest.addressHi}</p>
          <div className="mb-5 space-y-1 text-sm text-stone-400">
            {rest.timings[lang].map((tm) => (
              <p key={tm.days}><span className="font-semibold text-stone-200">{tm.days}:</span> {tm.hours}</p>
            ))}
          </div>
          <a href={rest.mapLink} target="_blank" rel="noopener noreferrer" className={`inline-block rounded-full ${GRAD} px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-rose-500/25`}>
            {t.misc.getDirections} →
          </a>
        </div>
      </FadeIn>
      <FadeIn delay={0.1} className="lg:col-span-3">
        <div className="overflow-hidden rounded-3xl border border-white/10">
          <iframe src={rest.mapEmbed} className="h-72 w-full brightness-[0.85] contrast-[1.05] lg:h-full" style={{ filter: "invert(0.9) hue-rotate(180deg)" }} loading="lazy" title="Restaurant location map" />
        </div>
      </FadeIn>
    </div>
  );
}

export function CTABand() {
  const { t } = useLang();
  return (
    <section className="px-4 py-16">
      <FadeIn className="mx-auto max-w-5xl">
        <div className={`relative overflow-hidden rounded-3xl ${GRAD} p-10 text-center md:p-14`}>
          <h2 className="text-3xl font-bold text-white md:text-4xl">{t.sections.ctaTitle}</h2>
          <p className="mt-3 text-white/85">{t.sections.ctaSub}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href={`${BASE}/contact`} className="rounded-full bg-white px-8 py-3.5 font-bold text-[#FF2E63] shadow-xl transition-transform hover:scale-105">
              {t.hero.cta1}
            </Link>
            <a href={`tel:${rest.phoneRaw}`} className="flex items-center gap-2 rounded-full border-2 border-white/70 px-8 py-3.5 font-bold text-white hover:bg-white/10">
              <Phone className="h-4 w-4" /> {t.hero.cta2}
            </a>
          </div>
        </div>
      </FadeIn>
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
    <footer className="border-t border-white/10 bg-black/40 pt-14 backdrop-blur">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-10 md:grid-cols-4">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <span className={`flex h-9 w-9 items-center justify-center rounded-full ${GRAD} text-white`}><Flame className="h-5 w-5" /></span>
            <span className="font-bold text-white">{lang === "en" ? rest.name : rest.nameHi}</span>
          </div>
          <p className="text-sm text-stone-500">{t.footer.tagline}</p>
        </div>
        <div>
          <h4 className="mb-3 font-bold text-white">{t.footer.quick}</h4>
          <ul className="space-y-2 text-sm text-stone-400">
            {links.map((l) => (
              <li key={l.href}><Link href={l.href} className="hover:text-[#FF6B2C]">{l.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-bold text-white">{t.footer.contact}</h4>
          <ul className="space-y-2 text-sm text-stone-400">
            <li>{lang === "en" ? rest.address : rest.addressHi}</li>
            <li><a href={`tel:${rest.phoneRaw}`} className="hover:text-[#FF6B2C]">{rest.phone}</a></li>
            <li>{rest.email}</li>
            <li>{rest.fssai}</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-bold text-white">{t.footer.hours}</h4>
          <ul className="space-y-2 text-sm text-stone-400">
            {rest.timings[lang].map((tm) => (
              <li key={tm.days}><span className="font-semibold text-stone-200">{tm.days}</span><br />{tm.hours}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5 py-5 text-center text-xs text-stone-600">
        © {new Date().getFullYear()} {rest.name}. {t.footer.rights}
      </div>
    </footer>
  );
}

export const bookingStyles: BookingStyles = {
  wrap: "space-y-5 rounded-3xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur sm:p-8",
  label: "mb-1.5 block text-sm font-semibold text-stone-200",
  input: "w-full rounded-xl border border-white/15 bg-white/[0.06] px-4 py-2.5 text-white outline-none transition-colors placeholder:text-stone-500 focus:border-[#FF6B2C] focus:ring-2 focus:ring-[#FF6B2C]/30",
  select: "w-full rounded-xl border border-white/15 bg-[#14141c] px-4 py-2.5 text-white outline-none focus:border-[#FF6B2C] focus:ring-2 focus:ring-[#FF6B2C]/30",
  dayBtn: "rounded-xl border border-white/10 bg-white/[0.04] py-2 text-center text-stone-400 transition-colors hover:border-[#FF6B2C]/60",
  dayBtnActive: "rounded-xl border border-transparent bg-gradient-to-b from-[#FF6B2C] to-[#FF2E63] py-2 text-center text-white shadow-lg shadow-rose-500/25",
  slotBtn: "rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-stone-300 transition-colors hover:border-[#FF6B2C]/60",
  slotBtnActive: "rounded-full border border-transparent bg-gradient-to-r from-[#FF6B2C] to-[#FF2E63] px-4 py-2 text-sm font-semibold text-white",
  groupTitle: "mb-2 mt-1 text-xs font-bold uppercase tracking-wider text-stone-500",
  submit: "flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 font-bold text-white shadow-lg shadow-green-500/25 transition-transform hover:scale-[1.02]",
  success: "rounded-xl bg-green-500/15 px-4 py-3 text-sm font-semibold text-green-400",
  error: "rounded-xl bg-red-500/15 px-4 py-3 text-sm font-semibold text-red-400",
};
