"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { useLang, pick } from "@/lib/lang";
import { rest, img } from "@/lib/config";
import { menu, signatures, whyUs } from "@/lib/content";
import Icon from "@/components/Icon";
import { BASE, GRAD, GRAD_TEXT, FadeIn, SectionHead, StatsBand, SignatureCard, ReviewsMarquee, FAQList, MapBlock, CTABand } from "./_ui";

export default function Home() {
  const { t, lang } = useLang();
  return (
    <>
      {/* Hero */}
      <section className="px-4 pb-16 pt-16 md:pt-24">
        <div className="mx-auto max-w-4xl text-center">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-sm text-stone-300 backdrop-blur"
          >
            {t.hero.badge}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-4xl font-bold leading-tight text-white md:text-6xl"
          >
            {t.hero.title} <span className={GRAD_TEXT}>{t.hero.titleAccent}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-stone-400"
          >
            {t.hero.sub}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-9 flex flex-wrap justify-center gap-4"
          >
            <Link href={`${BASE}/contact`} className={`rounded-full ${GRAD} px-8 py-3.5 font-bold text-white shadow-xl shadow-rose-500/30 transition-transform hover:scale-105`}>
              {t.hero.cta1}
            </Link>
            <a href={`tel:${rest.phoneRaw}`} className="flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.05] px-8 py-3.5 font-bold text-white backdrop-blur hover:bg-white/10">
              <Phone className="h-4 w-4" /> {t.hero.cta2}
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="relative mt-14"
          >
            <img src={img.hero} alt="Zaika signature thali" className="mx-auto h-72 w-full max-w-3xl rounded-3xl border border-white/10 object-cover shadow-2xl md:h-96" />
            <div className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-4 rounded-full border border-white/10 bg-[#14141c]/90 px-6 py-2.5 backdrop-blur">
              <span className="text-sm text-stone-300">{t.hero.open}</span>
              <span className="h-2 w-2 animate-pulseSoft rounded-full bg-green-400" />
            </div>
          </motion.div>
        </div>
      </section>

      <StatsBand />

      {/* Signatures */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHead eyebrow="Signature" title={t.sections.signatureTitle} sub={t.sections.signatureSub} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {signatures.map((_, i) => (
              <SignatureCard key={i} i={i} delay={i * 0.06} />
            ))}
          </div>
          <FadeIn className="mt-10 text-center">
            <Link href={`${BASE}/menu`} className="inline-block rounded-full border border-white/20 px-8 py-3 font-semibold text-white transition-colors hover:bg-white/10">
              {t.misc.viewAll} →
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Menu categories */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHead eyebrow="Menu" title={t.sections.menuTitle} sub={t.sections.menuSub} />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {menu.slice(0, 8).map((c, i) => (
              <FadeIn key={c.en.title} delay={i * 0.05}>
                <Link href={`${BASE}/menu`} className="group block rounded-2xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur transition-all hover:-translate-y-1 hover:border-[#FF6B2C]/50">
                  <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${GRAD} text-white`}>
                    <Icon name={c.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-3 font-bold text-white">{c[lang].title}</h3>
                  <p className="mt-1 text-xs text-stone-500">{c.items.length} {lang === "en" ? "dishes" : "व्यंजन"} · ₹{Math.min(...c.items.map((x) => x.price))}+</p>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHead eyebrow={t.misc.experience} title={t.sections.whyTitle} sub={t.sections.whySub} />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((w, i) => {
              const d = pick(w, lang);
              return (
                <FadeIn key={w.icon} delay={i * 0.06}>
                  <div className="h-full rounded-2xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur">
                    <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${GRAD} text-white shadow-lg shadow-rose-500/25`}>
                      <Icon name={w.icon} className="h-6 w-6" />
                    </span>
                    <h3 className="mt-4 font-bold text-white">{d.title}</h3>
                    <p className="mt-2 text-sm text-stone-400">{d.desc}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reviews marquee */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead eyebrow="4.6★" title={t.sections.reviewsTitle} sub={t.sections.reviewsSub} />
        </div>
        <ReviewsMarquee />
      </section>

      {/* Gallery strip */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHead eyebrow="Gallery" title={t.sections.galleryTitle} sub={t.sections.gallerySub} />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {img.gallery.map((g, i) => (
              <FadeIn key={g} delay={i * 0.05}>
                <img src={g} alt={`Zaika gallery ${i + 1}`} className="h-44 w-full rounded-2xl border border-white/10 object-cover md:h-52" />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHead eyebrow="FAQ" title={t.sections.faqTitle} sub={t.sections.faqSub} />
          <FAQList />
        </div>
      </section>

      {/* Visit */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHead eyebrow={rest.city} title={t.sections.visitTitle} sub={t.sections.visitSub} />
          <MapBlock />
        </div>
      </section>

      <CTABand />
    </>
  );
}
