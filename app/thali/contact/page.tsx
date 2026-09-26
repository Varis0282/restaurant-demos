"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import { useLang } from "@/lib/lang";
import { rest } from "@/lib/config";
import BookingForm from "@/components/BookingForm";
import { PageHero, MapBlock, bookingStyles } from "../_ui";

export default function ContactPage() {
  const { t, lang } = useLang();
  return (
    <>
      <PageHero title={t.booking.title} sub={t.booking.sub} />
      <section className="py-14">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div id="book" className="scroll-mt-28"><BookingForm styles={bookingStyles} /></div>
          </div>
          <div className="space-y-4 lg:col-span-2">
            <div className="flex gap-4 rounded-2xl border border-orange-100 bg-white p-5 shadow-sm">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#B3202C]/10 text-[#B3202C]"><MapPin className="h-5 w-5" /></span>
              <div>
                <h3 className="font-bold text-[#3D2B26]">{t.sections.visitTitle}</h3>
                <p className="mt-1 text-sm text-[#7d6357]">{lang === "en" ? rest.address : rest.addressHi}</p>
              </div>
            </div>
            <div className="flex gap-4 rounded-2xl border border-orange-100 bg-white p-5 shadow-sm">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#B3202C]/10 text-[#B3202C]"><Phone className="h-5 w-5" /></span>
              <div>
                <h3 className="font-bold text-[#3D2B26]">{t.hero.cta2}</h3>
                <a href={`tel:${rest.phoneRaw}`} className="mt-1 block text-sm font-semibold text-[#B3202C] hover:underline">{rest.phone}</a>
                <p className="mt-1 text-xs text-[#7d6357]">{t.misc.emergency}</p>
              </div>
            </div>
            <div className="flex gap-4 rounded-2xl border border-orange-100 bg-white p-5 shadow-sm">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#B3202C]/10 text-[#B3202C]"><Mail className="h-5 w-5" /></span>
              <div>
                <h3 className="font-bold text-[#3D2B26]">Email</h3>
                <p className="mt-1 text-sm text-[#7d6357]">{rest.email}</p>
              </div>
            </div>
            <div className="rounded-2xl bg-[#B3202C] p-5 text-white shadow-sm">
              <h3 className="font-bold text-[#E8A020]">{t.footer.hours}</h3>
              <ul className="mt-2 space-y-1 text-sm text-orange-100/90">
                {rest.timings[lang].map((tm) => (
                  <li key={tm.days}><span className="font-semibold text-white">{tm.days}:</span> {tm.hours}</li>
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
