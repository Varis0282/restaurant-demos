"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { ui, Lang } from "./content";

type LangCtx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (typeof ui)["en"];
};

const Ctx = createContext<LangCtx | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  return <Ctx.Provider value={{ lang, setLang, t: ui[lang] }}>{children}</Ctx.Provider>;
}

export function useLang() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useLang must be used inside LangProvider");
  return ctx;
}

/** Pick the current language's variant from a bilingual record like { en: {...}, hi: {...} } */
export function pick<T>(item: { en: T; hi: T }, lang: Lang): T {
  return item[lang];
}
