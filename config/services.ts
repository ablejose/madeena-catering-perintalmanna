export interface Service {
  id: string;
  title: string;
  blurb: string;
  bullets: string[];
  icon: string; // lucide-react icon name
}

export const services: Service[] = [
  {
    id: "wedding-catering",
    title: "Wedding Catering",
    blurb:
      "Full buffet spreads for weddings, nikah and receptions — cooked fresh and served hot at any scale.",
    bullets: ["Wedding & reception buffets", "Traditional & multi-cuisine menus", "Trained serving crew"],
    icon: "UtensilsCrossed",
  },
  {
    id: "event-management",
    title: "Event Management",
    blurb:
      "Complete event setup — stage and floral décor, lighting, seating and on-day coordination.",
    bullets: ["Stage & floral décor", "Lighting & seating", "On-day coordination"],
    icon: "PartyPopper",
  },
  {
    id: "live-counters",
    title: "Live Counters & Beverages",
    blurb:
      "Welcome drinks, fresh juice bars and live serving counters that keep guests looked after.",
    bullets: ["Welcome drinks & juice bars", "Live serving counters", "Uniformed hospitality staff"],
    icon: "GlassWater",
  },
  {
    id: "bulk-catering",
    title: "Function & Bulk Catering",
    blurb:
      "Large-volume cooking for functions and gatherings, with delivery available across the area.",
    bullets: ["High-volume preparation", "Functions & house events", "Delivery available"],
    icon: "Truck",
  },
];
