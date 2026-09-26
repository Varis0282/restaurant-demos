"use client";

import { useLang } from "@/lib/lang";
import { menu } from "@/lib/content";
import Icon from "@/components/Icon";
import { PageHero, VegMark, CTABand } from "../_ui";

export default function MenuPage() {
  const { t, lang } = useLang();
  return (
    <>
      <PageHero title={t.sections.menuTitle} sub={t.sections.menuSub} />
      <section className="py-14 md:py-18">
        <div className="mx-auto max-w-4xl space-y-12 px-4">
          {menu.map((c) => (
            <div key={c.en.title} id={c.en.title.toLowerCase().replace(/[^a-z]+/g, "-")}>
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#B3202C]/10 text-[#B3202C]">
                  <Icon name={c.icon} className="h-6 w-6" />
                </span>
                <h2 className="text-2xl font-extrabold text-[#B3202C]">{c[lang].title}</h2>
                <span className="h-px flex-1 bg-orange-200" />
              </div>
              <div className="space-y-3">
                {c.items.map((it) => (
                  <div key={it.name} className={`flex items-start justify-between gap-4 rounded-xl border bg-white px-5 py-3.5 ${it.special ? "border-[#E8A020] shadow-sm" : "border-orange-100"}`}>
                    <div className="flex items-start gap-3">
                      <span className="mt-1"><VegMark /></span>
                      <div>
                        <p className="font-bold text-[#3D2B26]">
                          {lang === "en" ? it.name : it.nameHi}
                          {it.special && (
                            <span className="ml-2 rounded-full bg-[#E8A020]/20 px-2.5 py-0.5 text-[11px] font-bold text-[#8a5b00]">
                              {t.misc.special}
                            </span>
                          )}
                        </p>
                        {it.desc && <p className="mt-0.5 text-sm text-[#7d6357]">{lang === "en" ? it.desc : it.descHi}</p>}
                      </div>
                    </div>
                    <p className="whitespace-nowrap font-extrabold text-[#B3202C]">₹{it.price}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <p className="text-center text-sm text-[#7d6357]">{t.misc.priceNote}</p>
        </div>
      </section>
      <CTABand />
    </>
  );
}
