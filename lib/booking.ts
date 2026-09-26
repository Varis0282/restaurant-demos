import { rest } from "./config";

export const SLOTS = {
  morning: ["12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM", "03:00 PM"],
  evening: ["07:00 PM", "07:30 PM", "08:00 PM", "08:30 PM", "09:00 PM", "09:30 PM", "10:00 PM"],
};

const DAY_NAMES = { en: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], hi: ["रवि", "सोम", "मंगल", "बुध", "गुरु", "शुक्र", "शनि"] };
const MONTH_NAMES = { en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], hi: ["जन", "फर", "मार्च", "अप्रै", "मई", "जून", "जुला", "अग", "सितं", "अक्टू", "नवं", "दिसं"] };

export type BookableDay = { iso: string; day: string; dayHi: string; date: number; month: string; monthHi: string; isSunday: boolean };

/** Next 7 bookable days starting today (restaurant is open all days) */
export function getNextDays(count = 7): BookableDay[] {
  const days: BookableDay[] = [];
  const now = new Date();
  for (let i = 0; i < count; i++) {
    const d = new Date(now);
    d.setDate(now.getDate() + i);
    days.push({
      iso: d.toISOString().slice(0, 10),
      day: DAY_NAMES.en[d.getDay()],
      dayHi: DAY_NAMES.hi[d.getDay()],
      date: d.getDate(),
      month: MONTH_NAMES.en[d.getMonth()],
      monthHi: MONTH_NAMES.hi[d.getMonth()],
      isSunday: d.getDay() === 0,
    });
  }
  return days;
}

export type BookingDetails = { name: string; phone: string; guests: string; day?: BookableDay; slot: string; note: string };

/** Build a wa.me deep link with a pre-filled table-booking request.
 *  Keep emoji to single code points (see FFFD gotcha in memory). */
export function whatsAppLink(b: BookingDetails): string {
  const CURRY = "🍛";
  const lines = [
    `${CURRY} *Table Booking — ${rest.name}*`,
    ``,
    `*Name:* ${b.name}`,
    `*Phone:* ${b.phone}`,
    `*Guests:* ${b.guests}`,
    b.day ? `*Date:* ${b.day.day}, ${b.day.date} ${b.day.month}` : "",
    b.slot ? `*Time:* ${b.slot}` : "",
    b.note ? `*Occasion:* ${b.note}` : "",
    ``,
    `Please confirm my table. Thank you!`,
  ].filter((l, i) => l !== "" || i === 1 || i === 8);
  return `https://wa.me/${rest.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
}

/** Quick chat link (floating WhatsApp button) */
export function whatsAppChatLink(): string {
  return `https://wa.me/${rest.whatsapp}?text=${encodeURIComponent(`Hello ${rest.name}, I would like to book a table.`)}`;
}
