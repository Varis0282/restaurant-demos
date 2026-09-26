"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/lib/lang";
import { guestsOptions } from "@/lib/content";
import { getNextDays, whatsAppLink, SLOTS, BookableDay } from "@/lib/booking";
import { Sun, Moon } from "lucide-react";

export type BookingStyles = {
  wrap: string;
  label: string;
  input: string;
  select: string;
  dayBtn: string;
  dayBtnActive: string;
  slotBtn: string;
  slotBtnActive: string;
  groupTitle: string;
  submit: string;
  success: string;
  error: string;
};

export default function BookingForm({ styles }: { styles: BookingStyles }) {
  const { lang, t } = useLang();
  const b = t.booking;

  // Days are computed client-side only, to keep SSR output stable
  const [days, setDays] = useState<BookableDay[]>([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [guests, setGuests] = useState(guestsOptions[0].en);
  const [dayIso, setDayIso] = useState("");
  const [slot, setSlot] = useState("");
  const [note, setNote] = useState("");
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    const d = getNextDays(7);
    setDays(d);
    setDayIso(d[0].iso);
  }, []);

  const day = days.find((d) => d.iso === dayIso);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const digits = phone.replace(/\D/g, "");
    if (!name.trim()) {
      setError(lang === "en" ? "Please enter your name." : "कृपया अपना नाम लिखें।");
      return;
    }
    if (digits.length < 10 || digits.length > 12) {
      setError(lang === "en" ? "Please enter a valid 10-digit mobile number." : "कृपया सही 10 अंकों का मोबाइल नंबर लिखें।");
      return;
    }
    if (!slot) {
      setError(lang === "en" ? "Please select a time." : "कृपया समय चुनें।");
      return;
    }
    setError("");
    window.open(
      whatsAppLink({ name: name.trim(), phone: phone.trim(), guests, day, slot, note: note.trim() }),
      "_blank"
    );
    setDone(true);
  }

  return (
    <form onSubmit={submit} className={styles.wrap} noValidate>
      <div>
        <label className={styles.label}>{b.name} *</label>
        <input className={styles.input} value={name} onChange={(e) => setName(e.target.value)} placeholder={b.namePh} type="text" name="name" />
      </div>

      <div>
        <label className={styles.label}>{b.phone} *</label>
        <input className={styles.input} value={phone} onChange={(e) => setPhone(e.target.value)} placeholder={b.phonePh} type="tel" name="phone" />
      </div>

      <div>
        <label className={styles.label}>{b.guests}</label>
        <select className={styles.select} value={guests} onChange={(e) => setGuests(e.target.value)}>
          {guestsOptions.map((g) => (
            <option key={g.en} value={g.en}>
              {g[lang]}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className={styles.label}>{b.date}</label>
        <div className="grid grid-cols-7 gap-1.5 sm:gap-2">
          {days.map((d) => (
            <button key={d.iso} type="button" onClick={() => setDayIso(d.iso)} className={d.iso === dayIso ? styles.dayBtnActive : styles.dayBtn}>
              <span className="block text-[10px] uppercase opacity-70">{lang === "en" ? d.day : d.dayHi}</span>
              <span className="block text-base font-bold leading-tight">{d.date}</span>
              <span className="block text-[10px] opacity-70">{lang === "en" ? d.month : d.monthHi}</span>
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className={styles.label}>{b.slot}</label>
        <p className={`${styles.groupTitle} flex items-center gap-1.5`}><Sun className="h-3.5 w-3.5" /> {b.morning}</p>
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {SLOTS.morning.map((s) => (
            <button key={s} type="button" onClick={() => setSlot(s)} className={s === slot ? styles.slotBtnActive : styles.slotBtn}>
              {s}
            </button>
          ))}
        </div>
        <p className={`${styles.groupTitle} mt-3 flex items-center gap-1.5`}><Moon className="h-3.5 w-3.5" /> {b.evening}</p>
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {SLOTS.evening.map((s) => (
            <button key={s} type="button" onClick={() => setSlot(s)} className={s === slot ? styles.slotBtnActive : styles.slotBtn}>
              {s}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className={styles.label}>{b.note}</label>
        <textarea className={styles.input} value={note} onChange={(e) => setNote(e.target.value)} placeholder={b.notePh} rows={3} />
      </div>

      {error && <p className={styles.error}>{error}</p>}
      {done && <p className={styles.success}>{b.success}</p>}

      <button type="submit" className={styles.submit}>
        <svg viewBox="0 0 32 32" className="h-5 w-5 fill-current" aria-hidden>
          <path d="M16 .8C7.6.8.8 7.6.8 16c0 2.7.7 5.3 2 7.6L.8 31.2l7.8-2c2.2 1.2 4.7 1.9 7.4 1.9 8.4 0 15.2-6.8 15.2-15.2S24.4.8 16 .8zm7.1 18.9c-.4-.2-2.3-1.1-2.6-1.3-.4-.1-.6-.2-.9.2-.3.4-1 1.3-1.3 1.5-.2.3-.5.3-.9.1-.4-.2-1.6-.6-3.1-1.9-1.1-1-1.9-2.3-2.1-2.6-.2-.4 0-.6.2-.8l.6-.7c.2-.2.3-.4.4-.6.1-.3 0-.5 0-.7-.1-.2-.9-2.1-1.2-2.9-.3-.8-.6-.7-.9-.7h-.8c-.3 0-.7.1-1 .5-.4.4-1.4 1.3-1.4 3.2s1.4 3.7 1.6 4c.2.3 2.8 4.2 6.7 5.9.9.4 1.7.6 2.2.8.9.3 1.8.3 2.5.2.8-.1 2.3-.9 2.6-1.8.3-.9.3-1.7.2-1.8-.1-.2-.4-.3-.8-.5z" />
        </svg>
        {b.submit}
      </button>
    </form>
  );
}
