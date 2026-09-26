"use client";

import { useLang } from "@/lib/lang";
import { img } from "@/lib/config";
import { signatures } from "@/lib/content";
import { PageHero, SectionHead, SignatureRow, CTABand } from "../_ui";

export default function GalleryPage() {
  const { t } = useLang();
  return (
    <>
      <PageHero kicker="Gallery" title={t.sections.galleryTitle} sub={t.sections.gallerySub} />
      <section className="py-14">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
            {[...img.gallery, img.food, img.biryani, img.aboutAlt].map((g, i) => (
              <img key={g} src={g} alt={`Zaika gallery ${i + 1}`} className={`w-full object-cover grayscale transition-all duration-500 hover:grayscale-0 ${i % 4 === 0 ? "h-56 md:h-72" : "h-44 md:h-56"}`} />
            ))}
          </div>
        </div>
      </section>
      <section className="py-14">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead n={1} title={t.sections.signatureTitle} sub={t.sections.signatureSub} />
          {signatures.map((_, i) => (
            <SignatureRow key={i} i={i} n={i + 1} />
          ))}
        </div>
      </section>
      <CTABand />
    </>
  );
}
