import { Star } from "lucide-react";
import { site } from "@/config/site";

export default function TrustBar() {
  const items = [
    `${site.rating.toFixed(1)}\u2605 on Google`,
    `${site.reviews} reviews`,
    "Open 24 hours",
    "Delivery available",
    "Perintalmanna, Kerala",
  ];
  return (
    <section aria-label="Trust signals" className="border-b border-sand bg-espresso py-4">
      <div className="mx-auto flex max-w-shell flex-wrap items-center justify-center gap-x-8 gap-y-2 px-6">
        {items.map((t, i) => (
          <span key={i} className="flex items-center gap-2 font-sans text-sm text-ivory/85">
            {i === 0 && <Star size={14} className="fill-saffron text-saffron" />}
            {t}
          </span>
        ))}
      </div>
    </section>
  );
}
