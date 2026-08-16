"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import { Img } from "@/components/ui/Img";
import Lightbox from "@/components/Lightbox";
import { gallery } from "@/config/gallery";

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="gallery" aria-labelledby="gallery-heading" className="bg-cream py-24 md:py-28">
      <div className="mx-auto max-w-shell px-6">
        <Reveal>
          <p className="eyebrow">Our work</p>
          <h2 id="gallery-heading" className="display mt-4" style={{ fontSize: "clamp(1.9rem, 3.4vw, 3rem)" }}>
            Real events, real spreads
          </h2>
        </Reveal>

        <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {gallery.map((item, i) => (
            <button
              key={item.src}
              onClick={() => setActive(i)}
              className="group relative block w-full overflow-hidden rounded-brand"
              aria-label={`Open image: ${item.alt}`}
              style={{ aspectRatio: item.wide ? "16 / 10" : "3 / 4" }}
            >
              <Img
                src={item.src}
                alt={item.alt}
                fallbackSeed={item.src}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
              />
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="pointer-events-none absolute inset-x-0 bottom-0 p-4 text-left font-sans text-sm text-ivory opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {item.alt}
              </span>
            </button>
          ))}
        </div>
      </div>

      <Lightbox items={gallery} index={active} onClose={() => setActive(null)} onNav={setActive} />
    </section>
  );
}
