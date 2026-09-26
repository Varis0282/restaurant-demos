"use client";

import { useLang } from "@/lib/lang";
import { menu } from "@/lib/content";
import { SERIF, Num, PageHero, CTABand } from "../_ui";

export default function MenuPage() {
  const { t, lang } = useLang();
  return (
    <>
      <PageHero kicker="Menu" title={t.sections.menuTitle} sub={t.sections.menuSub} />
      <section className="py-14">
        <div className="mx-auto max-w-4xl space-y-14 px-4">
          {menu.map((c, i) => (
            <div key={c.en.title}>
              <div className="mb-6 flex items-baseline gap-4 border-t-2 border-[#141414] pt-5">
                <Num n={i + 1} />
                <h2 className={`${SERIF} text-3xl md:text-4xl`}>{c[lang].title}</h2>
              </div>
              <table className="w-full">
                <tbody>
                  {c.items.map((it) => (
                    <tr key={it.name} className="border-b border-neutral-200 last:border-0">
                      <td className="py-3.5 pr-4">
                        <p className="font-bold">
                          {lang === "en" ? it.name : it.nameHi}
                          {it.special && <span className="ml-2 bg-[#D9331A] px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.15em] text-white">{t.misc.special}</span>}
                        </p>
                        {it.desc && <p className="mt-0.5 text-sm text-neutral-500">{lang === "en" ? it.desc : it.descHi}</p>}
                      </td>
                      <td className={`whitespace-nowrap py-3.5 text-right align-top ${SERIF} text-xl`}>₹{it.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
          <p className="text-center text-xs uppercase tracking-[0.2em] text-neutral-400">{t.misc.priceNote}</p>
        </div>
      </section>
      <CTABand />
    </>
  );
}
