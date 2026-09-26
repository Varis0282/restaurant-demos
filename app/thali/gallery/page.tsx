"use client";

import { useLang } from "@/lib/lang";
import { img } from "@/lib/config";
import { signatures } from "@/lib/content";
import { PageHero, SectionHead, SignatureCard, CTABand } from "../_ui";

export default function GalleryPage() {
  const { t, lang } = useLang();
  return (
    <>
      <PageHero title={t.sections.galleryTitle} sub={t.sections.gallerySub} />
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {[...img.gallery, img.food, img.biryani, img.aboutAlt].map((g, i) => (
              <img key={g} src={g} alt={`Zaika gallery ${i + 1}`} className={`w-full rounded-2xl object-cover shadow-sm transition-transform hover:scale-[1.02] ${i % 4 === 0 ? "h-56 md:h-72" : "h-44 md:h-56"}`} />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead title={t.sections.signatureTitle} sub={t.sections.signatureSub} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {signatures.map((_, i) => (
              <SignatureCard key={i} i={i} />
            ))}
          </div>
        </div>
      </section>
      <CTABand />
    </>
  );
}
