import { Instagram } from "lucide-react";
import Reveal from "@/components/Reveal";
import { site } from "@/config/site";

export default function InstagramCta() {
  return (
    <section
      id="instagram"
      aria-labelledby="instagram-heading"
      className="relative overflow-hidden py-14 md:py-16"
      style={{ background: "linear-gradient(160deg, #3a2c20 0%, #241c15 65%)" }}
    >
      {/* warm saffron glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 70% at 50% 0%, rgba(196,137,46,0.16) 0%, rgba(36,28,21,0) 70%)",
        }}
      />

      <Reveal className="relative mx-auto flex max-w-shell flex-col items-center gap-6 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-4">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-saffron/40 bg-[var(--saffron-soft)] text-saffron">
            <Instagram size={22} />
          </span>
          <div>
            <p className="eyebrow text-saffron">On Instagram</p>
            <h2
              id="instagram-heading"
              className="display mt-1 text-ivory"
              style={{ fontSize: "clamp(1.4rem, 2.4vw, 2rem)" }}
            >
              See all our work, in motion
            </h2>
          </div>
        </div>

        <a
          href={site.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View our work on Instagram"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-saffron px-7 py-3 font-sans text-sm font-medium text-espresso transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--saffron-2)] hover:shadow-[0_12px_30px_-14px_rgba(196,137,46,0.7)]"
        >
          <Instagram size={18} />
          View on Instagram
        </a>
      </Reveal>
    </section>
  );
}
