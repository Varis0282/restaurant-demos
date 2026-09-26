"use client";

import { useLang } from "@/lib/lang";
import { rest, img } from "@/lib/config";
import { stats } from "@/lib/content";
import { PageHero, SectionHead, CTABand } from "../_ui";

export default function AboutPage() {
  const { t, lang } = useLang();
  const a = t.about;
  return (
    <>
      <PageHero title={a.title} sub={a.sub} />
      <section className="py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2">
          <img src={img.about} alt="Zaika kitchen" className="h-80 w-full rounded-3xl object-cover shadow-xl" />
          <div className="space-y-4 text-[#6B4F45]">
            <p>{a.story1}</p>
            <p>{a.story2}</p>
            <p className="font-semibold text-[#3D2B26]">{a.story3}</p>
          </div>
        </div>
      </section>
      <section className="bg-[#B3202C] py-14 text-center text-white">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-sm font-bold uppercase tracking-widest text-[#E8A020]">{a.missionTitle}</h2>
          <p className="mt-4 text-2xl font-extrabold leading-snug md:text-3xl">&ldquo;{a.mission}&rdquo;</p>
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead title={lang === "en" ? "What We Stand For" : "हमारे मूल्य"} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {a.values.map((v, i) => (
              <div key={v.title} className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm">
                <p className="text-3xl font-extrabold text-[#E8A020]">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-2 font-extrabold text-[#3D2B26]">{v.title}</h3>
                <p className="mt-2 text-sm text-[#7d6357]">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-14">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 text-center md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.value}>
              <p className="text-4xl font-extrabold text-[#B3202C]">{s.value}</p>
              <p className="mt-1 text-sm font-medium text-[#7d6357]">{s[lang]}</p>
            </div>
          ))}
        </div>
      </section>
      <CTABand />
    </>
  );
}
