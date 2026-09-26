"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import { useLang } from "@/lib/lang";
import { rest } from "@/lib/config";
import BookingForm from "@/components/BookingForm";
import { PageHero, MapBlock, bookingStyles } from "../_ui";

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
      <section className="pb-14">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <BookingForm styles={bookingStyles} />
          </div>
          <div className="space-y-5 lg:col-span-2">
            {cards.map((c, i) => (
              <div key={c.title} className={`flex gap-4 rounded-3xl bg-white p-5 shadow-sm ${i % 2 ? "rotate-1" : "-rotate-1"}`}>
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#4E7C3A]/10 text-[#4E7C3A]">
                  <c.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-bold text-[#4A3A2A]">{c.title}</h3>
                  {c.href ? (
                    <a href={c.href} className="mt-1 block text-sm font-bold text-[#C96F4A] hover:underline">{c.body}</a>
                  ) : (
                    <p className="mt-1 text-sm text-[#8a7660]">{c.body}</p>
                  )}
                  {c.sub && <p className="mt-1 text-xs font-bold text-[#b8a48b]">{c.sub}</p>}
                </div>
              </div>
            ))}
            <div className="rotate-1 rounded-3xl bg-[#C96F4A] p-5 text-white shadow-md">
              <h3 className="font-bold">{t.footer.hours}</h3>
              <ul className="mt-2 space-y-1 text-sm text-white/90">
                {rest.timings[lang].map((tm) => (
                  <li key={tm.days}><span className="font-bold">{tm.days}:</span> {tm.hours}</li>
                ))}
              </ul>
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
