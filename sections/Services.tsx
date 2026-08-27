import { UtensilsCrossed, PartyPopper, Truck, type LucideIcon } from "lucide-react";
import Reveal from "@/components/Reveal";
import { services } from "@/config/services";

const icons: Record<string, LucideIcon> = { UtensilsCrossed, PartyPopper, Truck };

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-shell px-6">
        <Reveal>
          <p className="eyebrow">What we do</p>
          <h2 id="services-heading" className="display mt-4" style={{ fontSize: "clamp(1.9rem, 3.4vw, 3rem)" }}>
            Catering &amp; complete event management
          </h2>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = icons[s.icon] ?? UtensilsCrossed;
            return (
              <Reveal key={s.id} delay={i * 0.1}>
                <div className="flex h-full flex-col rounded-brand border border-sand bg-cream p-6 transition-all duration-300 hover:-translate-y-1 hover:border-saffron hover:shadow-[0_20px_44px_-24px_rgba(122,46,42,0.35)]">
                  <div className="mb-5 grid h-12 w-12 place-items-center rounded-full bg-[var(--saffron-soft)] text-saffron-2">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-display text-xl text-espresso">{s.title}</h3>
                  <p className="body-copy mt-2">{s.blurb}</p>
                  <ul className="mt-4 space-y-2">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 font-sans text-sm text-ink/80">
                        <span className="mt-1 text-saffron">◆</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
