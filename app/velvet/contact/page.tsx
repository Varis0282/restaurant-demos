"use client";

import { Phone, Mail, MapPin } from "lucide-react";
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
      <PageHero title={t.booking.title} sub={t.booking.sub} />
      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <BookingForm styles={bookingStyles} />
          </div>
          <div className="lg:col-span-2">
            <div className="divide-y divide-white/[0.08] border border-white/[0.08]">
              {cards.map((c) => (
                <div key={c.title} className="flex gap-5 p-6">
                  <c.icon className="mt-1 h-5 w-5 shrink-0 text-[#D4B483]" />
                  <div>
                    <h3 className={`${SERIF} text-xl font-semibold text-[#EDE6D6]`}>{c.title}</h3>
                    {c.href ? (
                      <a href={c.href} className="mt-1 block text-sm text-[#D4B483] hover:underline">{c.body}</a>
                    ) : (
                      <p className="mt-1 text-sm text-[#8E897C]">{c.body}</p>
                    )}
                    {c.sub && <p className="mt-1 text-xs uppercase tracking-[0.15em] text-[#5c584e]">{c.sub}</p>}
                  </div>
                </div>
              ))}
              <div className="p-6">
                <h3 className={`${SERIF} text-xl font-semibold text-[#D4B483]`}>{t.footer.hours}</h3>
                <ul className="mt-3 space-y-1.5 text-sm text-[#8E897C]">
                  {rest.timings[lang].map((tm) => (
                    <li key={tm.days}><span className="text-[#B9B4A6]">{tm.days}:</span> {tm.hours}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-4">
          <MapBlock />
        </div>
      </section>
    </>
  );
}
