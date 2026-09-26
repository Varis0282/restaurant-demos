"use client";

import { useLang } from "@/lib/lang";
import { img } from "@/lib/config";
import { signatures } from "@/lib/content";
import { FadeIn, PageHero, SectionHead, SignatureCard, CTABand } from "../_ui";

export default function GalleryPage() {
  const { t } = useLang();
  return (
    <>
      <PageHero title={t.sections.galleryTitle} sub={t.sections.gallerySub} />
      <section className="px-4 pb-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {[...img.gallery, img.food, img.biryani, img.aboutAlt].map((g, i) => (
              <FadeIn key={g} delay={i * 0.04}>
                <img src={g} alt={`Zaika gallery ${i + 1}`} className={`w-full rounded-2xl border border-white/10 object-cover ${i % 4 === 0 ? "h-56 md:h-72" : "h-44 md:h-56"}`} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHead title={t.sections.signatureTitle} sub={t.sections.signatureSub} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {signatures.map((_, i) => (
              <SignatureCard key={i} i={i} delay={i * 0.05} />
            ))}
          </div>
        </div>
      </section>
      <CTABand />
    </>
  );
}
