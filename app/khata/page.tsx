"use client";

import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";
import { useLang, pick } from "@/lib/lang";
import { rest, img } from "@/lib/config";
import { menu, signatures, whyUs, reviews } from "@/lib/content";
import { BASE, SERIF, Num, SectionHead, StatsBand, SignatureRow, FAQList, MapBlock, CTABand } from "./_ui";

export default function Home() {
  const { t, lang } = useLang();
  return (
    <>
      {/* Hero */}
      <section className="border-b-2 border-[#141414]">
        <div className="mx-auto max-w-6xl px-4 pb-14 pt-16 md:pt-24">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#D9331A]">{t.hero.badge}</p>
          <h1 className={`mt-5 ${SERIF} text-5xl leading-[1.0] md:text-8xl`}>
            {t.hero.title}
            <br />
            <em className="text-[#D9331A]">{t.hero.titleAccent}</em>
          </h1>
          <div className="mt-8 h-px w-full bg-neutral-200" />
          <div className="mt-6 grid items-start gap-8 md:grid-cols-2">
            <p className="max-w-md text-neutral-500">{t.hero.sub}</p>
            <div className="flex flex-wrap gap-4 md:justify-end">
              <Link href={`${BASE}/contact#book`} className="bg-[#D9331A] px-8 py-3.5 font-bold text-white hover:bg-[#b52a15]">
                {t.hero.cta1}
              </Link>
              <a href={`tel:${rest.phoneRaw}`} className="flex items-center gap-2 border-2 border-[#141414] px-8 py-3.5 font-bold hover:bg-[#141414] hover:text-white">
                <Phone className="h-4 w-4" /> {t.hero.cta2}
              </a>
            </div>
          </div>
          <img src={img.hero} alt="Zaika thali" className="mt-12 h-72 w-full object-cover grayscale-[25%] md:h-[26rem]" />
          <p className="mt-3 text-xs uppercase tracking-[0.2em] text-neutral-400">{t.hero.open} · {rest.address}</p>
        </div>
      </section>

      <StatsBand />

      {/* Signatures */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead n={1} title={t.sections.signatureTitle} sub={t.sections.signatureSub} />
          <div>
            {signatures.map((_, i) => (
              <SignatureRow key={i} i={i} n={i + 1} />
            ))}
          </div>
          <div className="mt-8">
            <Link href={`${BASE}/menu`} className="inline-flex items-center gap-1 font-bold underline decoration-[#D9331A] decoration-2 underline-offset-4 hover:text-[#D9331A]">
              {t.misc.viewAll} <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Menu preview */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead n={2} title={t.sections.menuTitle} sub={t.sections.menuSub} />
          <div>
            {menu.map((c, i) => (
              <Link key={c.en.title} href={`${BASE}/menu`} className="group grid items-center gap-2 border-t border-neutral-200 py-5 last:border-b md:grid-cols-12">
                <span className="md:col-span-1"><Num n={i + 1} /></span>
                <h3 className={`${SERIF} text-2xl group-hover:text-[#D9331A] md:col-span-6 md:text-3xl`}>{c[lang].title}</h3>
                <p className="text-sm text-neutral-500 md:col-span-4">
                  {c.items.length} {lang === "en" ? "dishes" : "व्यंजन"} · ₹{Math.min(...c.items.map((x) => x.price))}+
                </p>
                <ArrowUpRight className="hidden h-5 w-5 justify-self-end text-neutral-300 transition-all group-hover:translate-x-1 group-hover:text-[#D9331A] md:col-span-1 md:block" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead n={3} title={t.sections.whyTitle} sub={t.sections.whySub} />
          <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((w, i) => {
              const d = pick(w, lang);
              return (
                <div key={w.icon}>
                  <Num n={i + 1} />
                  <h3 className={`mt-3 ${SERIF} text-2xl`}>{d.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-500">{d.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead n={4} title={t.sections.reviewsTitle} sub={t.sections.reviewsSub} />
          <div className="grid gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((r) => (
              <figure key={r.name} className="border-l-2 border-[#D9331A] pl-5">
                <blockquote className="text-[15px] leading-relaxed text-neutral-600">&ldquo;{r[lang]}&rdquo;</blockquote>
                <figcaption className="mt-3">
                  <p className="font-bold">{r.name}</p>
                  <p className="text-xs uppercase tracking-[0.15em] text-neutral-400">{r.area} · {"★".repeat(r.stars)}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead n={5} title={t.sections.galleryTitle} sub={t.sections.gallerySub} />
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
            {img.gallery.map((g, i) => (
              <img key={g} src={g} alt={`Zaika gallery ${i + 1}`} className="h-44 w-full object-cover grayscale transition-all duration-500 hover:grayscale-0 md:h-56" />
            ))}
          </div>
          <div className="mt-8">
            <Link href={`${BASE}/gallery`} className="inline-flex items-center gap-1 font-bold underline decoration-[#D9331A] decoration-2 underline-offset-4 hover:text-[#D9331A]">
              {t.misc.readMore} <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead n={6} title={t.sections.faqTitle} sub={t.sections.faqSub} />
          <FAQList />
        </div>
      </section>

      {/* Visit */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead n={7} title={t.sections.visitTitle} sub={t.sections.visitSub} />
          <MapBlock />
        </div>
      </section>

      <CTABand />
    </>
  );
}
