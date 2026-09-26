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
      <section className="pb-6">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
            {[...img.gallery, img.food, img.biryani, img.aboutAlt].map((g, i) => (
              <div key={g} className={`rounded-3xl bg-white p-2.5 shadow-md ${i % 2 ? "rotate-1" : "-rotate-1"} transition-transform hover:rotate-0`}>
                <img src={g} alt={`Zaika gallery ${i + 1}`} className={`w-full rounded-2xl object-cover ${i % 4 === 0 ? "h-52 md:h-64" : "h-40 md:h-52"}`} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHead title={t.sections.signatureTitle} sub={t.sections.signatureSub} />
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
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
