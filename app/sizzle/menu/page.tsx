"use client";

import { useLang } from "@/lib/lang";
import { menu } from "@/lib/content";
import Icon from "@/components/Icon";
import { GRAD, FadeIn, PageHero, CTABand } from "../_ui";

export default function MenuPage() {
  const { t, lang } = useLang();
  return (
    <>
      <PageHero title={t.sections.menuTitle} sub={t.sections.menuSub} />
      <section className="px-4 pb-14">
        <div className="mx-auto max-w-4xl space-y-12">
          {menu.map((c, ci) => (
            <FadeIn key={c.en.title} delay={ci * 0.03}>
              <div className="mb-5 flex items-center gap-3">
                <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${GRAD} text-white`}>
                  <Icon name={c.icon} className="h-5 w-5" />
                </span>
                <h2 className="text-2xl font-bold text-white">{c[lang].title}</h2>
                <span className="h-px flex-1 bg-white/10" />
              </div>
              <div className="space-y-3">
                {c.items.map((it) => (
                  <div key={it.name} className={`flex items-start justify-between gap-4 rounded-2xl border px-5 py-3.5 backdrop-blur ${it.special ? "border-[#FF6B2C]/50 bg-white/[0.07]" : "border-white/10 bg-white/[0.04]"}`}>
                    <div>
                      <p className="font-semibold text-white">
                        {lang === "en" ? it.name : it.nameHi}
                        {it.special && (
                          <span className={`ml-2 rounded-full ${GRAD} px-2.5 py-0.5 text-[11px] font-bold text-white`}>
                            {t.misc.special}
                          </span>
                        )}
                      </p>
                      {it.desc && <p className="mt-0.5 text-sm text-stone-500">{lang === "en" ? it.desc : it.descHi}</p>}
                    </div>
                    <p className="whitespace-nowrap font-bold text-[#FF6B2C]">₹{it.price}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          ))}
          <p className="text-center text-sm text-stone-500">{t.misc.priceNote}</p>
        </div>
      </section>
      <CTABand />
    </>
  );
}
