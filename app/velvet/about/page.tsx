"use client";

import { useLang } from "@/lib/lang";
import { img } from "@/lib/config";
import { stats } from "@/lib/content";
import { SERIF, Eyebrow, PageHero, SectionHead, CTABand } from "../_ui";

export default function AboutPage() {
  const { t, lang } = useLang();
  const a = t.about;
  return (
    <>
      <PageHero title={a.title} sub={a.sub} />
      <section className="py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2">
          <div className="border border-white/[0.08] p-2">
            <img src={img.about} alt="Zaika kitchen" className="h-80 w-full object-cover grayscale-[30%]" />
          </div>
          <div className="space-y-5 text-[15px] leading-relaxed text-[#8E897C]">
            <p>{a.story1}</p>
            <p>{a.story2}</p>
            <p className={`${SERIF} text-xl italic text-[#EDE6D6]`}>{a.story3}</p>
          </div>
        </div>
      </section>
      <section className="border-y border-white/[0.06] py-20 text-center">
        <div className="mx-auto max-w-3xl px-4">
          <Eyebrow>{a.missionTitle}</Eyebrow>
          <p className={`mt-6 ${SERIF} text-3xl font-semibold italic leading-snug text-[#EDE6D6] md:text-4xl`}>&ldquo;{a.mission}&rdquo;</p>
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead title={lang === "en" ? "What We Stand For" : "हमारे मूल्य"} />
          <div className="grid gap-px border border-white/[0.08] bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-4">
            {a.values.map((v, i) => (
              <div key={v.title} className="bg-[#101014] p-8">
                <p className={`${SERIF} text-2xl italic text-[#D4B483]/60`}>{String(i + 1).padStart(2, "0")}</p>
                <h3 className={`mt-3 ${SERIF} text-xl font-semibold text-[#EDE6D6]`}>{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#8E897C]">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="border-t border-white/[0.06]">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-white/[0.06] md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.value} className="bg-[#101014] px-6 py-10 text-center">
              <p className={`${SERIF} text-4xl font-semibold text-[#D4B483]`}>{s.value}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[#8E897C]">{s[lang]}</p>
            </div>
          ))}
        </div>
      </section>
      <CTABand />
    </>
  );
}
