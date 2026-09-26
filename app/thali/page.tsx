"use client";

import Link from "next/link";
import { Phone, BadgeCheck } from "lucide-react";
import { useLang, pick } from "@/lib/lang";
import { rest, img } from "@/lib/config";
import { menu, signatures, whyUs, reviews } from "@/lib/content";
import Icon from "@/components/Icon";
import { BASE, SectionHead, Stars, StatsBand, SignatureCard, FAQList, MapBlock, CTABand, VegMark } from "./_ui";

export default function Home() {
  const { t, lang } = useLang();
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#FBEFE2] to-[#FFF9F2]">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:py-20">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-green-600/30 bg-green-50 px-4 py-1.5 text-sm font-semibold text-green-700">
              <VegMark /> {t.hero.badge}
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-[#3D2B26] md:text-5xl">
              {t.hero.title} <span className="text-[#B3202C]">{t.hero.titleAccent}</span>
            </h1>
            <p className="mt-5 max-w-lg text-lg text-[#7d6357]">{t.hero.sub}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href={`${BASE}/contact#book`} className="rounded-lg bg-[#B3202C] px-7 py-3.5 font-bold text-white shadow-lg shadow-red-900/20 transition-transform hover:scale-105">
                {t.hero.cta1}
              </Link>
              <a href={`tel:${rest.phoneRaw}`} className="flex items-center gap-2 rounded-lg border-2 border-[#B3202C] px-7 py-3.5 font-bold text-[#B3202C] transition-colors hover:bg-[#B3202C] hover:text-white">
                <Phone className="h-4 w-4" /> {t.hero.cta2}
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
              {whyUs.slice(0, 3).map((w) => (
                <span key={w.icon} className="flex items-center gap-1.5 text-sm font-semibold text-[#6B4F45]">
                  <BadgeCheck className="h-4 w-4 text-[#E8A020]" /> {pick(w, lang).title}
                </span>
              ))}
            </div>
          </div>
          <div className="relative">
            <img src={img.hero} alt="Zaika special thali" className="h-80 w-full rounded-3xl object-cover shadow-2xl md:h-96" />
            <div className="absolute -bottom-5 left-6 flex items-center gap-3 rounded-2xl bg-white px-5 py-3 shadow-xl">
              <p className="text-2xl font-extrabold text-[#B3202C]">4.6</p>
              <div>
                <Stars n={5} />
                <p className="text-xs text-[#7d6357]">2,100+ Google reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StatsBand />

      {/* Signature dishes */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="Zaika" title={t.sections.signatureTitle} sub={t.sections.signatureSub} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {signatures.map((_, i) => (
              <SignatureCard key={i} i={i} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href={`${BASE}/menu`} className="inline-block rounded-lg border-2 border-[#B3202C] px-8 py-3 font-bold text-[#B3202C] transition-colors hover:bg-[#B3202C] hover:text-white">
              {t.misc.viewAll} →
            </Link>
          </div>
        </div>
      </section>

      {/* Menu categories preview */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="Menu" title={t.sections.menuTitle} sub={t.sections.menuSub} />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {menu.slice(0, 8).map((c) => (
              <Link key={c.en.title} href={`${BASE}/menu`} className="group rounded-2xl border border-orange-100 bg-[#FFF9F2] p-6 transition-all hover:-translate-y-1 hover:border-[#E8A020] hover:shadow-lg">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#B3202C]/10 text-[#B3202C]">
                  <Icon name={c.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-extrabold text-[#3D2B26] group-hover:text-[#B3202C]">{c[lang].title}</h3>
                <p className="mt-1 text-sm text-[#7d6357]">{c.items.length} {lang === "en" ? "dishes" : "व्यंजन"} · ₹{Math.min(...c.items.map((i) => i.price))}+</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Indori specials strip */}
      <section className="bg-[#E8A020]/15 py-14">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="Indore" title={t.sections.indoriTitle} sub={t.sections.indoriSub} />
          <div className="flex flex-wrap justify-center gap-4">
            {menu[5].items.map((it) => (
              <div key={it.name} className="flex items-center gap-3 rounded-full border border-[#E8A020]/50 bg-white px-6 py-3 shadow-sm">
                <VegMark />
                <span className="font-bold text-[#3D2B26]">{lang === "en" ? it.name : it.nameHi}</span>
                <span className="font-extrabold text-[#B3202C]">₹{it.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow={t.misc.experience} title={t.sections.whyTitle} sub={t.sections.whySub} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((w) => {
              const d = pick(w, lang);
              return (
                <div key={w.icon} className="rounded-2xl border border-orange-100 bg-white p-6 text-center shadow-sm">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#B3202C]/10 text-[#B3202C]">
                    <Icon name={w.icon} className="h-7 w-7" />
                  </span>
                  <h3 className="mt-4 font-extrabold text-[#3D2B26]">{d.title}</h3>
                  <p className="mt-2 text-sm text-[#7d6357]">{d.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="4.6★" title={t.sections.reviewsTitle} sub={t.sections.reviewsSub} />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((r) => (
              <div key={r.name} className="rounded-2xl border border-orange-100 bg-[#FFF9F2] p-6">
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#B3202C] font-bold text-white">{r.name[0]}</span>
                  <div>
                    <p className="font-bold text-[#3D2B26]">{r.name}</p>
                    <p className="text-xs text-[#7d6357]">{r.area}</p>
                  </div>
                </div>
                <Stars n={r.stars} />
                <p className="mt-3 text-sm leading-relaxed text-[#6B4F45]">&ldquo;{r[lang]}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery strip */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="Gallery" title={t.sections.galleryTitle} sub={t.sections.gallerySub} />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {img.gallery.map((g, i) => (
              <img key={g} src={g} alt={`Zaika gallery ${i + 1}`} className="h-44 w-full rounded-2xl object-cover shadow-sm transition-transform hover:scale-[1.02] md:h-52" />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href={`${BASE}/gallery`} className="font-bold text-[#B3202C] hover:underline">{t.misc.readMore} →</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="FAQ" title={t.sections.faqTitle} sub={t.sections.faqSub} />
          <FAQList />
        </div>
      </section>

      {/* Visit */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow={rest.city} title={t.sections.visitTitle} sub={t.sections.visitSub} />
          <MapBlock />
        </div>
      </section>

      <CTABand />
    </>
  );
}
