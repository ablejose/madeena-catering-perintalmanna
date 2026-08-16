"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Img } from "@/components/ui/Img";
import { site, waLink, telLink } from "@/config/site";

export default function Hero() {
  const mediaRef = useRef<HTMLDivElement>(null);
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const r = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setReduce(r);
    if (r) return;
    let ctx: any;
    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {
        gsap.to(mediaRef.current, {
          scale: 1.08,
          y: 60,
          ease: "none",
          scrollTrigger: { trigger: "#hero", start: "top top", end: "bottom top", scrub: true },
        });
      });
    })();
    return () => ctx?.revert();
  }, []);

  return (
    <section id="hero" className="relative h-[100svh] w-full overflow-hidden bg-espresso">
      <div
        ref={mediaRef}
        className="absolute inset-0"
        style={{ willChange: "transform", transform: "translateZ(0)", backfaceVisibility: "hidden" }}
      >
        <Img src="/images/hero.webp" alt="An evening event catered and staged by Madeena, lit with warm lights" fallbackSeed="madeena-hero" priority />
      </div>

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 30%, rgba(20,16,12,0.2) 0%, rgba(20,16,12,0.55) 60%, rgba(20,16,12,0.82) 100%), linear-gradient(to top, rgba(20,16,12,0.9) 0%, rgba(20,16,12,0) 45%)",
        }}
      />

      <div className="relative z-10 mx-auto flex h-full max-w-shell flex-col items-center justify-center px-6 text-center">
        <p className="eyebrow text-saffron">Perintalmanna · Malappuram, Kerala</p>
        <h1 className="display-xl mt-5 text-ivory" style={{ fontSize: "clamp(2.3rem, 5.5vw, 4.6rem)" }}>
          Madeena Catering
          <br />
          <span className="italic" style={{ color: "var(--saffron)" }}>
            &amp; Event Management
          </span>
        </h1>
        <p className="body-copy mx-auto mt-6 max-w-xl text-ivory/85">
          Wedding buffets, live counters and complete event setup — cooked fresh, served hot,
          and managed from first call to last plate.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Button href={waLink()} variant="whatsapp" external>
            Enquire on WhatsApp
          </Button>
          <Button href={telLink} variant="outline" className="border-ivory/60 text-ivory hover:bg-ivory/10">
            Call {site.phone}
          </Button>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-6 z-10 flex flex-col items-center gap-2">
        <span className="block h-10 w-px origin-bottom" style={{ background: "var(--saffron)", animation: "scroll-hint 2.2s ease-in-out infinite" }} />
        <span className="eyebrow text-ivory/60">Scroll</span>
      </div>
    </section>
  );
}
