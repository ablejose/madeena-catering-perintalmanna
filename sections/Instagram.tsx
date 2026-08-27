import { Instagram } from "lucide-react";
import Reveal from "@/components/Reveal";
import { site } from "@/config/site";

export default function InstagramCta() {
  return (
    <section
      id="instagram"
      aria-labelledby="instagram-heading"
      className="relative overflow-hidden py-24 md:py-32"
      style={{ background: "linear-gradient(155deg, #4a3826 0%, #2e2318 48%, #201811 100%)" }}
    >
      {/* soft saffron glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(196,137,46,0.30) 0%, rgba(196,137,46,0) 70%)" }}
      />
      {/* thin saffron rule at the top edge */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(196,137,46,0.6), transparent)" }}
      />

      <div className="relative mx-auto max-w-2xl px-6 text-center">
        <Reveal>
          <span className="mx-auto mb-8 grid h-20 w-20 place-items-center rounded-3xl border border-saffron/30 bg-[var(--saffron-soft)] text-saffron shadow-[0_22px_54px_-20px_rgba(196,137,46,0.55)]">
            <Instagram size={38} strokeWidth={1.6} />
          </span>

          <p className="eyebrow text-saffron">Follow our work</p>
          <h2
            id="instagram-heading"
            className="display mt-4 text-ivory"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.6rem)" }}
          >
            See every celebration, in motion
          </h2>
          <p className="mx-auto mt-5 max-w-md font-sans text-base leading-relaxed text-ivory/75">
            Full event films, reels and behind-the-scenes from real weddings and
            functions — all live on our Instagram.
          </p>

          <div className="mt-10 flex justify-center">
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View our videos on Instagram"
              className="inline-flex items-center gap-2.5 rounded-full bg-saffron px-9 py-4 font-sans text-base font-semibold text-espresso transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--saffron-2)] hover:shadow-[0_20px_44px_-16px_rgba(196,137,46,0.8)]"
            >
              <Instagram size={20} />
              View our videos on Instagram
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
