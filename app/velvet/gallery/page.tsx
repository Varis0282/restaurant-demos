"use client";

import { useLang } from "@/lib/lang";
import { img } from "@/lib/config";
import { signatures } from "@/lib/content";
import { PageHero, SectionHead, SignatureCard, CTABand } from "../_ui";

export default function GalleryPage() {
  const { t } = useLang();
  return (
    <>
      <PageHero title={t.sections.galleryTitle} sub={t.sections.gallerySub} />
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-2 gap-px md:grid-cols-3">
            {[...img.gallery, img.food, img.biryani, img.aboutAlt].map((g, i) => (
              <div key={g} className={`group overflow-hidden ${i % 4 === 0 ? "h-60 md:h-80" : "h-48 md:h-64"}`}>
                <img src={g} alt={`Zaika gallery ${i + 1}`} className="h-full w-full object-cover grayscale-[40%] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0" />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="border-t border-white/[0.06] py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead title={t.sections.signatureTitle} sub={t.sections.signatureSub} />
          <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-3">
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
