"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import { useLang } from "@/lib/lang";
import { rest } from "@/lib/config";
import BookingForm from "@/components/BookingForm";
import { GRAD, FadeIn, PageHero, MapBlock, bookingStyles } from "../_ui";

export default function ContactPage() {
  const { t, lang } = useLang();
  return (
    <>
      <PageHero title={t.booking.title} sub={t.booking.sub} />
      <section className="px-4 pb-14">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-5">
          <FadeIn className="lg:col-span-3">
            <div id="book" className="scroll-mt-28"><BookingForm styles={bookingStyles} /></div>
          </FadeIn>
          <div className="space-y-4 lg:col-span-2">
            {[
              { icon: MapPin, title: t.sections.visitTitle, body: lang === "en" ? rest.address : rest.addressHi },
              { icon: Phone, title: t.hero.cta2, body: rest.phone, href: `tel:${rest.phoneRaw}`, sub: t.misc.emergency },
              { icon: Mail, title: "Email", body: rest.email },
            ].map((c, i) => (
              <FadeIn key={c.title} delay={i * 0.07}>
                <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur">
                  <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${GRAD} text-white`}>
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-bold text-white">{c.title}</h3>
                    {c.href ? (
                      <a href={c.href} className="mt-1 block text-sm font-semibold text-[#FF6B2C] hover:underline">{c.body}</a>
                    ) : (
                      <p className="mt-1 text-sm text-stone-400">{c.body}</p>
                    )}
                    {c.sub && <p className="mt-1 text-xs text-stone-500">{c.sub}</p>}
                  </div>
                </div>
              </FadeIn>
            ))}
            <FadeIn delay={0.2}>
              <div className={`rounded-2xl ${GRAD} p-5 text-white`}>
                <h3 className="font-bold">{t.footer.hours}</h3>
                <ul className="mt-2 space-y-1 text-sm text-white/85">
                  {rest.timings[lang].map((tm) => (
                    <li key={tm.days}><span className="font-semibold text-white">{tm.days}:</span> {tm.hours}</li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      <section className="px-4 pb-16">
        <div className="mx-auto max-w-6xl">
          <MapBlock />
        </div>
      </section>
    </>
  );
}
