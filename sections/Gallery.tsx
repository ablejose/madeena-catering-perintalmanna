"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { Img } from "@/components/ui/Img";
import Lightbox from "@/components/Lightbox";
import { galleryImages, galleryVideos, gallerySettings } from "@/config/gallery";

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const [slide, setSlide] = useState(0);

  const total = galleryVideos.length;
  const go = (dir: number) => setSlide((s) => (s + dir + total) % total);

  // Duplicate the image set so the right-to-left strip loops seamlessly.
  const strip = [...galleryImages, ...galleryImages];

  return (
    <section id="gallery" aria-labelledby="gallery-heading" className="bg-cream py-24 md:py-28">
      <div className="mx-auto max-w-shell px-6">
        <Reveal>
          <p className="eyebrow">Our work</p>
          <h2 id="gallery-heading" className="display mt-4" style={{ fontSize: "clamp(1.9rem, 3.4vw, 3rem)" }}>
            Real events, real spreads
          </h2>
        </Reveal>

        {/* IMAGES — 4 photos auto-scrolling right to left */}
        <Reveal className="mt-12" delay={0.05}>
          <p className="eyebrow mb-4 text-muted">Photos</p>
          <div
            className="marquee-viewport relative overflow-hidden rounded-brand"
            style={{
              maskImage: "linear-gradient(to right, transparent, #000 6%, #000 94%, transparent)",
              WebkitMaskImage: "linear-gradient(to right, transparent, #000 6%, #000 94%, transparent)",
            }}
          >
            <ul
              className="marquee-track flex w-max gap-4"
              style={{ ["--marquee-duration" as any]: `${gallerySettings.imageScrollSeconds}s` }}
            >
              {strip.map((item, i) => (
                <li key={`${item.src}-${i}`} className="shrink-0">
                  <button
                    onClick={() => setActive(i % galleryImages.length)}
                    aria-label={`Open image: ${item.alt}`}
                    className="group relative block overflow-hidden rounded-brand"
                    style={{ width: "clamp(240px, 34vw, 380px)", aspectRatio: "16 / 10" }}
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
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* VIDEOS — 3 clips, one at a time, ~half width, 0.8s slide transition, manual navigation */}
        <Reveal className="mt-14" delay={0.1}>
          <p className="eyebrow mb-4 text-muted">Videos</p>
          <div className="relative mx-auto w-full overflow-hidden rounded-brand bg-espresso md:w-1/2">
            <div
              className="flex"
              style={{
                transform: `translateX(-${slide * 100}%)`,
                transition: `transform ${gallerySettings.videoTransitionSeconds}s cubic-bezier(0.22, 1, 0.36, 1)`,
              }}
            >
              {galleryVideos.map((v, i) => (
                <div key={`${v.src}-${i}`} className="w-full shrink-0" style={{ aspectRatio: "16 / 9" }}>
                  <video
                    className="h-full w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    poster={v.poster}
                    aria-label={v.alt}
                  >
                    <source src={v.src} type="video/mp4" />
                  </video>
                </div>
              ))}
            </div>

            {total > 1 && (
              <>
                <button
                  aria-label="Previous video"
                  onClick={() => go(-1)}
                  className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-ivory/30 bg-ink/40 text-ivory backdrop-blur hover:bg-ink/60 md:left-5"
                >
                  <ChevronLeft size={22} />
                </button>
                <button
                  aria-label="Next video"
                  onClick={() => go(1)}
                  className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-ivory/30 bg-ink/40 text-ivory backdrop-blur hover:bg-ink/60 md:right-5"
                >
                  <ChevronRight size={22} />
                </button>

                <div className="absolute inset-x-0 bottom-4 flex items-center justify-center gap-2">
                  {galleryVideos.map((_, i) => (
                    <button
                      key={i}
                      aria-label={`Go to video ${i + 1}`}
                      aria-current={i === slide}
                      onClick={() => setSlide(i)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        i === slide ? "w-6 bg-saffron" : "w-2 bg-ivory/50 hover:bg-ivory/80"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </Reveal>
      </div>

      <Lightbox items={galleryImages} index={active} onClose={() => setActive(null)} onNav={setActive} />
    </section>
  );
}
