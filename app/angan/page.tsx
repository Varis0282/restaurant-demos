"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { useLang, pick } from "@/lib/lang";
import { rest, img } from "@/lib/config";
import { menu, signatures, whyUs, reviews } from "@/lib/content";
import Icon from "@/components/Icon";
import { BASE, Blob, Squiggle, SectionHead, Stars, StatsBand, SignatureCard, FAQList, MapBlock, CTABand } from "./_ui";

export default function Home() {
  const { t, lang } = useLang();
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <Blob className="left-[-120px] top-[-40px] h-96 w-96 bg-[#C96F4A]/15" />
        <Blob className="right-[-100px] top-[35%] h-80 w-80 bg-[#4E7C3A]/15" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-14 md:grid-cols-2 md:py-20">
          <div>
            <span className="inline-block rounded-full bg-[#4E7C3A]/10 px-5 py-1.5 text-sm font-bold text-[#4E7C3A]">
              {t.hero.badge}
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-tight text-[#4A3A2A] md:text-5xl">
              {t.hero.title}
              <br />
              <span className="text-[#C96F4A]">{t.hero.titleAccent}</span>
            </h1>
            <Squiggle className="mt-3" />
            <p className="mt-5 max-w-lg text-lg text-[#8a7660]">{t.hero.sub}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href={`${BASE}/contact`} className="rounded-full bg-[#C96F4A] px-8 py-3.5 font-bold text-white shadow-xl shadow-orange-800/15 transition-transform hover:scale-105">
                {t.hero.cta1}
              </Link>
              <a href={`tel:${rest.phoneRaw}`} className="flex items-center gap-2 rounded-full border-2 border-[#4E7C3A] px-8 py-3.5 font-bold text-[#4E7C3A] transition-colors hover:bg-[#4E7C3A] hover:text-white">
                <Phone className="h-4 w-4" /> {t.hero.cta2}
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="rotate-2 rounded-[2rem] bg-white p-3 shadow-2xl">
              <img src={img.hero} alt="Zaika thali" className="h-72 w-full rounded-[1.6rem] object-cover md:h-96" />
            </div>
            <div className="absolute -bottom-5 -left-3 -rotate-3 rounded-2xl bg-white px-5 py-3 shadow-xl">
              <div className="flex items-center gap-2">
                <p className="text-2xl font-bold text-[#C96F4A]">4.6</p>
                <div>
                  <Stars n={5} />
                  <p className="text-xs font-bold text-[#8a7660]">2,100+ reviews</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 right-4 rotate-6 rounded-2xl bg-[#4E7C3A] px-4 py-2 text-sm font-bold text-white shadow-lg">
              {t.hero.open}
            </div>
          </div>
        </div>
      </section>

      <StatsBand />

      {/* Signatures */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="Zaika" title={t.sections.signatureTitle} sub={t.sections.signatureSub} />
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {signatures.map((_, i) => (
              <SignatureCard key={i} i={i} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href={`${BASE}/menu`} className="inline-block rounded-full border-2 border-[#C96F4A] px-8 py-3 font-bold text-[#C96F4A] transition-colors hover:bg-[#C96F4A] hover:text-white">
              {t.misc.viewAll} →
            </Link>
          </div>
        </div>
      </section>

      {/* Menu categories */}
      <section className="relative overflow-hidden py-16">
        <Blob className="right-[-100px] top-[10%] h-72 w-72 bg-[#E8A020]/10" />
        <div className="relative mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="Menu" title={t.sections.menuTitle} sub={t.sections.menuSub} />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {menu.slice(0, 8).map((c, i) => (
              <Link key={c.en.title} href={`${BASE}/menu`} className={`group rounded-3xl bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg ${i % 2 ? "rotate-1 hover:rotate-0" : "-rotate-1 hover:rotate-0"}`}>
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#4E7C3A]/10 text-[#4E7C3A]">
                  <Icon name={c.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-bold text-[#4A3A2A] group-hover:text-[#C96F4A]">{c[lang].title}</h3>
                <p className="mt-1 text-sm text-[#8a7660]">{c.items.length} {lang === "en" ? "dishes" : "व्यंजन"} · ₹{Math.min(...c.items.map((x) => x.price))}+</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Indori strip */}
      <section className="bg-[#F3E8D3] py-14">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="Indore" title={t.sections.indoriTitle} sub={t.sections.indoriSub} />
          <div className="flex flex-wrap justify-center gap-4">
            {menu[5].items.map((it, i) => (
              <div key={it.name} className={`rounded-full bg-white px-6 py-3 font-bold shadow-sm ${i % 2 ? "rotate-1" : "-rotate-1"}`}>
                <span className="text-[#4A3A2A]">{lang === "en" ? it.name : it.nameHi}</span>
                <span className="ml-2 text-[#C96F4A]">₹{it.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow={t.misc.experience} title={t.sections.whyTitle} sub={t.sections.whySub} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((w, i) => {
              const d = pick(w, lang);
              return (
                <div key={w.icon} className={`rounded-3xl bg-white p-6 text-center shadow-sm ${i % 2 ? "rotate-1" : "-rotate-1"}`}>
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C96F4A]/10 text-[#C96F4A]">
                    <Icon name={w.icon} className="h-7 w-7" />
                  </span>
                  <h3 className="mt-4 font-bold text-[#4E7C3A]">{d.title}</h3>
                  <p className="mt-2 text-sm text-[#8a7660]">{d.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-[#E4EDD8]/60 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="4.6★" title={t.sections.reviewsTitle} sub={t.sections.reviewsSub} />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((r, i) => (
              <div key={r.name} className={`rounded-3xl bg-white p-6 shadow-sm ${i % 3 === 1 ? "md:translate-y-4" : ""}`}>
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#4E7C3A] font-bold text-white">{r.name[0]}</span>
                  <div>
                    <p className="font-bold text-[#4A3A2A]">{r.name}</p>
                    <p className="text-xs font-bold text-[#b8a48b]">{r.area}</p>
                  </div>
                </div>
                <Stars n={r.stars} />
                <p className="mt-3 text-sm leading-relaxed text-[#8a7660]">&ldquo;{r[lang]}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="Gallery" title={t.sections.galleryTitle} sub={t.sections.gallerySub} />
          <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
            {img.gallery.map((g, i) => (
              <div key={g} className={`rounded-3xl bg-white p-2.5 shadow-md ${i % 2 ? "rotate-1" : "-rotate-1"} transition-transform hover:rotate-0`}>
                <img src={g} alt={`Zaika gallery ${i + 1}`} className="h-40 w-full rounded-2xl object-cover md:h-48" />
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href={`${BASE}/gallery`} className="font-bold text-[#C96F4A] hover:underline">{t.misc.readMore} →</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="FAQ" title={t.sections.faqTitle} sub={t.sections.faqSub} />
          <FAQList />
        </div>
      </section>

      {/* Visit */}
      <section className="pb-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow={rest.city} title={t.sections.visitTitle} sub={t.sections.visitSub} />
          <MapBlock />
        </div>
      </section>

      <CTABand />
    </>
  );
}
