"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { useLang, pick } from "@/lib/lang";
import { rest, img } from "@/lib/config";
import { menu, signatures, whyUs, reviews } from "@/lib/content";
import Icon from "@/components/Icon";
import { BASE, SERIF, Eyebrow, SectionHead, Stars, StatsBand, SignatureCard, FAQList, MapBlock, CTABand } from "./_ui";

export default function Home() {
  const { t, lang } = useLang();
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/[0.06]">
        <img src={img.dark} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#101014]/40 via-[#101014]/70 to-[#101014]" />
        <div className="relative mx-auto max-w-4xl px-4 py-24 text-center md:py-36">
          <Eyebrow>{t.hero.badge}</Eyebrow>
          <h1 className={`mt-6 ${SERIF} text-5xl font-semibold leading-[1.05] text-[#EDE6D6] md:text-7xl`}>
            {t.hero.title}
            <br />
            <span className="italic text-[#D4B483]">{t.hero.titleAccent}</span>
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-[15px] leading-relaxed text-[#B9B4A6]">{t.hero.sub}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href={`${BASE}/contact`} className="bg-[#D4B483] px-9 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-[#101014] transition-opacity hover:opacity-90">
              {t.hero.cta1}
            </Link>
            <a href={`tel:${rest.phoneRaw}`} className="flex items-center gap-2 border border-white/25 px-9 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-[#EDE6D6] hover:border-[#D4B483] hover:text-[#D4B483]">
              <Phone className="h-4 w-4" /> {t.hero.cta2}
            </a>
          </div>
          <p className="mt-10 text-xs uppercase tracking-[0.3em] text-[#8E897C]">{t.hero.open}</p>
        </div>
      </section>

      <StatsBand />

      {/* Signatures */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="Signature" title={t.sections.signatureTitle} sub={t.sections.signatureSub} />
          <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-3">
            {signatures.map((_, i) => (
              <SignatureCard key={i} i={i} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href={`${BASE}/menu`} className="inline-block border border-[#D4B483] px-9 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#D4B483] transition-colors hover:bg-[#D4B483] hover:text-[#101014]">
              {t.misc.viewAll}
            </Link>
          </div>
        </div>
      </section>

      {/* Menu preview — numbered rows */}
      <section className="border-t border-white/[0.06] py-20">
        <div className="mx-auto max-w-4xl px-4">
          <SectionHead eyebrow="La Carte" title={t.sections.menuTitle} sub={t.sections.menuSub} />
          <div className="divide-y divide-white/[0.06] border-y border-white/[0.06]">
            {menu.map((c, i) => (
              <Link key={c.en.title} href={`${BASE}/menu`} className="group flex items-center justify-between gap-6 py-6 transition-colors hover:bg-white/[0.02]">
                <div className="flex items-center gap-6">
                  <span className={`${SERIF} text-xl italic text-[#D4B483]/60`}>{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className={`${SERIF} text-2xl font-semibold text-[#EDE6D6] group-hover:text-[#D4B483]`}>{c[lang].title}</h3>
                    <p className="mt-0.5 text-xs uppercase tracking-[0.2em] text-[#8E897C]">{c.items.length} {lang === "en" ? "dishes" : "व्यंजन"} · ₹{Math.min(...c.items.map((x) => x.price))}+</p>
                  </div>
                </div>
                <Icon name={c.icon} className="h-5 w-5 text-[#D4B483]/50 transition-transform group-hover:translate-x-1 group-hover:text-[#D4B483]" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="border-t border-white/[0.06] py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow={t.misc.experience} title={t.sections.whyTitle} sub={t.sections.whySub} />
          <div className="grid gap-px border border-white/[0.08] bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((w) => {
              const d = pick(w, lang);
              return (
                <div key={w.icon} className="bg-[#101014] p-8">
                  <Icon name={w.icon} className="h-6 w-6 text-[#D4B483]" />
                  <h3 className={`mt-5 ${SERIF} text-xl font-semibold text-[#EDE6D6]`}>{d.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#8E897C]">{d.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="border-t border-white/[0.06] py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="4.6" title={t.sections.reviewsTitle} sub={t.sections.reviewsSub} />
          <div className="grid gap-px border border-white/[0.08] bg-white/[0.06] md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((r) => (
              <div key={r.name} className="bg-[#101014] p-8 text-center">
                <Stars n={r.stars} />
                <p className={`mt-4 ${SERIF} text-lg italic leading-relaxed text-[#B9B4A6]`}>&ldquo;{r[lang]}&rdquo;</p>
                <p className="mt-5 text-sm font-semibold text-[#EDE6D6]">{r.name}</p>
                <p className="mt-0.5 text-xs uppercase tracking-[0.2em] text-[#5c584e]">{r.area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery strip */}
      <section className="border-t border-white/[0.06] py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="Gallery" title={t.sections.galleryTitle} sub={t.sections.gallerySub} />
          <div className="grid grid-cols-2 gap-px md:grid-cols-3">
            {img.gallery.map((g, i) => (
              <div key={g} className="group h-48 overflow-hidden md:h-60">
                <img src={g} alt={`Zaika gallery ${i + 1}`} className="h-full w-full object-cover grayscale-[40%] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0" />
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href={`${BASE}/gallery`} className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4B483] hover:underline">{t.misc.readMore} →</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-white/[0.06] py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="FAQ" title={t.sections.faqTitle} sub={t.sections.faqSub} />
          <FAQList />
        </div>
      </section>

      {/* Visit */}
      <section className="border-t border-white/[0.06] py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow={rest.city} title={t.sections.visitTitle} sub={t.sections.visitSub} />
          <MapBlock />
        </div>
      </section>

      <CTABand />
    </>
  );
}
