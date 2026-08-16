export interface GalleryItem {
  src: string;
  alt: string;
  wide?: boolean;
}

/**
 * Self-hosted photos from the business's Google profile (committed under /public/images).
 */
export const gallery: GalleryItem[] = [
  { src: "/images/g1.webp", alt: "Floral wedding stage décor by Madeena" },
  { src: "/images/g2.webp", alt: "Fresh fruit and salad buffet spread", wide: true },
  { src: "/images/g3.webp", alt: "Welcome drinks served for guests", wide: true },
  { src: "/images/g4.webp", alt: "Traditional tea and spice counter" },
  { src: "/images/g5.webp", alt: "Live juice counter served by uniformed staff" },
  { src: "/images/g6.webp", alt: "Banquet hall set for a reception", wide: true },
  { src: "/images/g7.webp", alt: "Cultural performance at a celebration", wide: true },
  { src: "/images/g8.webp", alt: "Event management for an inauguration" },
];
