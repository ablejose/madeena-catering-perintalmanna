import { Phone, MessageCircle, MapPin, Clock, Navigation } from "lucide-react";
import Reveal from "@/components/Reveal";
import { Button } from "@/components/ui/Button";
import { site, waLink, telLink } from "@/config/site";

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-cream py-24 md:py-28">
      <div className="mx-auto grid max-w-shell grid-cols-1 gap-12 px-6 lg:grid-cols-2">
        <Reveal>
          <div>
            <p className="eyebrow">Enquire</p>
            <h2 id="contact-heading" className="display mt-4" style={{ fontSize: "clamp(1.9rem, 3.4vw, 3rem)" }}>
              Let’s plan your event.
            </h2>
            <p className="body-copy mt-4 max-w-md">
              Tell us your date and guest count on WhatsApp or by phone — we’ll get straight back
              with a menu and a clear quote.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button href={waLink()} variant="whatsapp" external>
                <MessageCircle size={18} /> WhatsApp us
              </Button>
              <Button href={telLink} variant="primary">
                <Phone size={16} /> {site.phone}
              </Button>
            </div>

            <ul className="mt-8 space-y-4">
              <li className="flex items-start gap-3 font-sans text-sm text-ink/85">
                <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[var(--saffron-soft)] text-saffron-2"><MapPin size={16} /></span>
                {site.address}
              </li>
              <li className="flex items-center gap-3 font-sans text-sm text-ink/85">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[var(--saffron-soft)] text-saffron-2"><Clock size={16} /></span>
                {site.hours}
              </li>
              <li>
                <a href={site.mapsLink} target="_blank" rel="noopener noreferrer" className="link-underline inline-flex items-center gap-2 font-sans text-sm font-medium text-espresso">
                  <Navigation size={15} /> Get directions on Google Maps
                </a>
              </li>
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="overflow-hidden rounded-brand border border-sand">
            <iframe
              title="Madeena Catering location"
              src={site.mapEmbed}
              width="100%"
              height="420"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0, display: "block" }}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
