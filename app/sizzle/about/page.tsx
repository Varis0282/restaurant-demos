"use client";

import { useLang } from "@/lib/lang";
import { img } from "@/lib/config";
import { stats } from "@/lib/content";
import { GRAD_TEXT, FadeIn, PageHero, SectionHead, Counter, CTABand } from "../_ui";

export default function AboutPage() {
  const { t, lang } = useLang();
  const a = t.about;
  return (
    <>
      <PageHero title={a.title} sub={a.sub} />
      <section className="px-4 py-10">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
          <FadeIn>
            <img src={img.about} alt="Zaika kitchen" className="h-80 w-full rounded-3xl border border-white/10 object-cover shadow-2xl" />
          </FadeIn>
          <FadeIn delay={0.1} className="space-y-4 text-stone-400">
            <p>{a.story1}</p>
            <p>{a.story2}</p>
            <p className="font-semibold text-white">{a.story3}</p>
          </FadeIn>
        </div>
      </section>
      <section className="px-4 py-14">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <h2 className={`text-sm font-bold uppercase tracking-[0.2em] ${GRAD_TEXT}`}>{a.missionTitle}</h2>
          <p className="mt-4 text-2xl font-bold leading-snug text-white md:text-3xl">&ldquo;{a.mission}&rdquo;</p>
        </FadeIn>
      </section>
      <section className="px-4 py-14">
        <div className="mx-auto max-w-6xl">
          <SectionHead title={lang === "en" ? "What We Stand For" : "हमारे मूल्य"} />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {a.values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur">
                  <p className={`text-3xl font-bold ${GRAD_TEXT}`}>{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-2 font-bold text-white">{v.title}</h3>
                  <p className="mt-2 text-sm text-stone-400">{v.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      <section className="px-4 py-14">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((s, i) => (
            <FadeIn key={s.value} delay={i * 0.06}>
              <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-6 text-center backdrop-blur">
                <Counter value={s.value} className={`text-3xl font-bold ${GRAD_TEXT}`} />
                <p className="mt-2 text-sm text-stone-400">{s[lang]}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
      <CTABand />
    </>
  );
}
