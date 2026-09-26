"use client";

import { useLang } from "@/lib/lang";

export default function LangToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLang();
  return (
    <button
      onClick={() => setLang(lang === "en" ? "hi" : "en")}
      className={className}
      aria-label="Switch language"
    >
      {lang === "en" ? "हिंदी" : "English"}
    </button>
  );
}
