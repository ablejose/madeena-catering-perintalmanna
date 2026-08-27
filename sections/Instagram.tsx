import { Instagram } from "lucide-react";
import Reveal from "@/components/Reveal";
import { site } from "@/config/site";

/** Instagram brand gradient, used for the icon badge and CTA button. */
const IG_GRADIENT =
  "linear-gradient(45deg, #FEDA75 0%, #FA7E1E 22%, #D62976 52%, #962FBF 76%, #4F5BD5 100%)";

export default function InstagramCta() {
  return (
    <section
      id="instagram"
      aria-labelledby="instagram-heading"
      className="relative overflow-hidden bg-espresso py-24 md:py-28"
    >
      {/* warm saffron glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 80% at 50% 0%, rgba(196,137,46,0.20) 0%, rgba(36,28,21,0) 70%)",
        }}
      />

      <div className="relative mx-auto max-w-shell px-6 text-center">
        <Reveal>
          <span
            className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-2xl text-white shadow-[0_12px_34px_-12px_rgba(214,41,118,0.6)]"
            style={{ background: IG_GRADIENT }}
          >
            <Instagram size={30} />
          </span>

          <p className="eyebrow text-saffron">On Instagram</p>
          <h2
            id="instagram-heading"
            className="display mt-4 text-ivory"
            style={{ fontSize: "clamp(1.9rem, 3.4vw, 3rem)" }}
          >
            See all our work, in motion
          </h2>
          <p className="body-copy mx-auto mt-4 max-w-xl text-ivory/70">
            Full event videos, reels and behind-the-scenes from real weddings and
            functions — all on our Instagram.
          </p>

          <div className="mt-9 flex justify-center">
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View our videos on Instagram"
              className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 font-sans text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:brightness-105 hover:shadow-[0_16px_38px_-14px_rgba(214,41,118,0.7)]"
              style={{ background: IG_GRADIENT }}
            >
              <Instagram size={18} />
              View all our videos on Instagram
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
