"use client";

import { useLang } from "@/lib/lang";
import { img } from "@/lib/config";
import { stats } from "@/lib/content";
import { SERIF, Num, PageHero, SectionHead, CTABand } from "../_ui";

export default function AboutPage() {
  const { t, lang } = useLang();
  const a = t.about;
  return (
    <>
      <PageHero kicker={a.missionTitle} title={a.title} sub={a.sub} />
      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-2">
          <img src={img.about} alt="Zaika kitchen" className="h-96 w-full object-cover grayscale-[25%]" />
          <div className="space-y-5 leading-relaxed text-neutral-600">
            <p>{a.story1}</p>
            <p>{a.story2}</p>
            <p className={`${SERIF} text-2xl leading-snug text-[#141414]`}>{a.story3}</p>
          </div>
        </div>
      </section>
      <section className="bg-[#141414] py-16 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#D9331A]">{a.missionTitle}</p>
          <p className={`mt-4 max-w-3xl ${SERIF} text-3xl leading-snug md:text-5xl`}>&ldquo;{a.mission}&rdquo;</p>
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead n={1} title={lang === "en" ? "What We Stand For" : "हमारे मूल्य"} />
          <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {a.values.map((v, i) => (
              <div key={v.title}>
                <Num n={i + 1} />
                <h3 className={`mt-3 ${SERIF} text-2xl`}>{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="border-t-2 border-[#141414]">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-neutral-200 px-4 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.value} className="px-6 py-10">
              <p className={`${SERIF} text-4xl`}>{s.value}</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.15em] text-neutral-500">{s[lang]}</p>
            </div>
          ))}
        </div>
      </section>
      <CTABand />
    </>
  );
}
