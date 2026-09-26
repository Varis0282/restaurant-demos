"use client";

import { useLang } from "@/lib/lang";
import { img } from "@/lib/config";
import { stats } from "@/lib/content";
import { PageHero, SectionHead, Squiggle, CTABand } from "../_ui";

export default function AboutPage() {
  const { t, lang } = useLang();
  const a = t.about;
  return (
    <>
      <PageHero title={a.title} sub={a.sub} />
      <section className="py-10">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2">
          <div className="-rotate-2 rounded-[2rem] bg-white p-3 shadow-2xl">
            <img src={img.about} alt="Zaika kitchen" className="h-80 w-full rounded-[1.6rem] object-cover" />
          </div>
          <div className="space-y-4 text-[#8a7660]">
            <p>{a.story1}</p>
            <p>{a.story2}</p>
            <p className="font-bold text-[#4A3A2A]">{a.story3}</p>
          </div>
        </div>
      </section>
      <section className="py-14">
        <div className="mx-auto max-w-3xl rounded-[2rem] bg-[#4E7C3A] px-8 py-12 text-center text-white shadow-xl">
          <h2 className="text-sm font-bold uppercase tracking-widest text-[#F3E3C3]">{a.missionTitle}</h2>
          <p className="mt-4 text-2xl font-bold leading-snug md:text-3xl">&ldquo;{a.mission}&rdquo;</p>
          <Squiggle className="mx-auto mt-5" />
        </div>
      </section>
      <section className="py-14">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead title={lang === "en" ? "What We Stand For" : "हमारे मूल्य"} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {a.values.map((v, i) => (
              <div key={v.title} className={`rounded-3xl bg-white p-6 shadow-sm ${i % 2 ? "rotate-1" : "-rotate-1"}`}>
                <p className="text-3xl font-bold text-[#C96F4A]">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-2 font-bold text-[#4E7C3A]">{v.title}</h3>
                <p className="mt-2 text-sm text-[#8a7660]">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="pb-14">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-5 px-4 text-center md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.value}>
              <p className="text-4xl font-bold text-[#4E7C3A]">{s.value}</p>
              <p className="mt-1 text-sm font-bold text-[#8a7660]">{s[lang]}</p>
            </div>
          ))}
        </div>
      </section>
      <CTABand />
    </>
  );
}
