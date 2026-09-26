"use client";

import { useLang } from "@/lib/lang";
import { menu } from "@/lib/content";
import Icon from "@/components/Icon";
import { PageHero, CTABand } from "../_ui";

export default function MenuPage() {
  const { t, lang } = useLang();
  return (
    <>
      <PageHero title={t.sections.menuTitle} sub={t.sections.menuSub} />
      <section className="pb-14">
        <div className="mx-auto max-w-4xl space-y-10 px-4">
          {menu.map((c, ci) => (
            <div key={c.en.title} className={`rounded-[2rem] bg-white p-6 shadow-md sm:p-8 ${ci % 2 ? "rotate-[0.4deg]" : "-rotate-[0.4deg]"}`}>
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#4E7C3A]/10 text-[#4E7C3A]">
                  <Icon name={c.icon} className="h-6 w-6" />
                </span>
                <h2 className="text-2xl font-bold text-[#4E7C3A]">{c[lang].title}</h2>
              </div>
              <div className="divide-y divide-[#F3E3C3]">
                {c.items.map((it) => (
                  <div key={it.name} className="flex items-start justify-between gap-4 py-3">
                    <div>
                      <p className="font-bold text-[#4A3A2A]">
                        {lang === "en" ? it.name : it.nameHi}
                        {it.special && (
                          <span className="ml-2 rounded-full bg-[#C96F4A]/15 px-2.5 py-0.5 text-[11px] font-bold text-[#C96F4A]">
                            {t.misc.special}
                          </span>
                        )}
                      </p>
                      {it.desc && <p className="mt-0.5 text-sm text-[#8a7660]">{lang === "en" ? it.desc : it.descHi}</p>}
                    </div>
                    <p className="whitespace-nowrap font-bold text-[#4E7C3A]">₹{it.price}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <p className="text-center text-sm font-bold text-[#b8a48b]">{t.misc.priceNote}</p>
        </div>
      </section>
      <CTABand />
    </>
  );
}
