"use client";

import { useLang } from "@/lib/lang";
import { menu } from "@/lib/content";
import { SERIF, PageHero, CTABand } from "../_ui";

export default function MenuPage() {
  const { t, lang } = useLang();
  return (
    <>
      <PageHero title={t.sections.menuTitle} sub={t.sections.menuSub} />
      <section className="py-16">
        <div className="mx-auto max-w-3xl space-y-16 px-4">
          {menu.map((c, i) => (
            <div key={c.en.title}>
              <div className="mb-7 text-center">
                <p className={`${SERIF} text-lg italic text-[#D4B483]/60`}>{String(i + 1).padStart(2, "0")}</p>
                <h2 className={`${SERIF} text-3xl font-semibold text-[#EDE6D6]`}>{c[lang].title}</h2>
                <span className="mx-auto mt-3 block h-px w-12 bg-[#D4B483]/50" />
              </div>
              <div className="space-y-5">
                {c.items.map((it) => (
                  <div key={it.name}>
                    <div className="flex items-baseline gap-3">
                      <p className={`${SERIF} text-xl font-semibold text-[#EDE6D6]`}>
                        {lang === "en" ? it.name : it.nameHi}
                        {it.special && <span className="ml-2 align-middle text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D4B483]">{t.misc.special}</span>}
                      </p>
                      <span className="flex-1 border-b border-dotted border-white/15" />
                      <p className="font-semibold text-[#D4B483]">₹{it.price}</p>
                    </div>
                    {it.desc && <p className="mt-1 text-sm italic text-[#8E897C]">{lang === "en" ? it.desc : it.descHi}</p>}
                  </div>
                ))}
              </div>
            </div>
          ))}
          <p className="text-center text-xs uppercase tracking-[0.2em] text-[#5c584e]">{t.misc.priceNote}</p>
        </div>
      </section>
      <CTABand />
    </>
  );
}
