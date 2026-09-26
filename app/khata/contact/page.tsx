"use client";

import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { useLang } from "@/lib/lang";
import { rest } from "@/lib/config";
import BookingForm from "@/components/BookingForm";
import { SERIF, PageHero, MapBlock, bookingStyles } from "../_ui";

export default function ContactPage() {
  const { t, lang } = useLang();
  const cards = [
    { icon: MapPin, title: t.sections.visitTitle, body: lang === "en" ? rest.address : rest.addressHi },
    { icon: Phone, title: t.hero.cta2, body: rest.phone, href: `tel:${rest.phoneRaw}`, sub: t.misc.emergency },
    { icon: Mail, title: "Email", body: rest.email },
  ];
  return (
    <>
      <PageHero kicker={t.nav.contact} title={t.booking.title} sub={t.booking.sub} />
      <section className="py-14">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <BookingForm styles={bookingStyles} />
          </div>
          <div className="lg:col-span-2">
            <div className="border-2 border-[#141414]">
              {cards.map((c, i) => (
                <div key={c.title} className={`flex gap-5 p-6 ${i > 0 ? "border-t border-neutral-200" : ""}`}>
                  <c.icon className="mt-1 h-5 w-5 shrink-0 text-[#D9331A]" />
                  <div>
                    <h3 className={`${SERIF} text-xl`}>{c.title}</h3>
                    {c.href ? (
                      <a href={c.href} className="mt-1 inline-flex items-center gap-1 text-sm font-bold underline decoration-[#D9331A] decoration-2 underline-offset-4 hover:text-[#D9331A]">
                        {c.body} <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    ) : (
                      <p className="mt-1 text-sm text-neutral-500">{c.body}</p>
                    )}
                    {c.sub && <p className="mt-1 text-xs uppercase tracking-[0.15em] text-neutral-400">{c.sub}</p>}
                  </div>
                </div>
              ))}
              <div className="border-t border-neutral-200 bg-[#141414] p-6 text-white">
                <h3 className={`${SERIF} text-xl text-[#D9331A]`}>{t.footer.hours}</h3>
                <ul className="mt-3 space-y-1.5 text-sm text-neutral-300">
                  {rest.timings[lang].map((tm) => (
                    <li key={tm.days}><span className="font-bold text-white">{tm.days}:</span> {tm.hours}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-16">
        <div className="mx-auto max-w-6xl px-4">
          <MapBlock />
        </div>
      </section>
    </>
  );
}
