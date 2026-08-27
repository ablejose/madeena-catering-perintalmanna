export interface GalleryItem {
  src: string;
  alt: string;
  wide?: boolean;
}

export interface GalleryVideo {
  src: string;
  poster?: string;
  alt: string;
}

/**
 * OUR WORK — IMAGES.
 * 4 photos shown in the right-to-left auto-scrolling strip.
 * Self-hosted photos from the business's Google profile (committed under /public/images).
 */
export const galleryImages: GalleryItem[] = [
  { src: "/images/g1.webp", alt: "Floral wedding stage décor by Madeena" },
  { src: "/images/g2.webp", alt: "Fresh fruit and salad buffet spread" },
  { src: "/images/g6.webp", alt: "Banquet hall set for a reception" },
  { src: "/images/g7.webp", alt: "Cultural performance at a celebration" },
];

/**
 * OUR WORK — VIDEOS.
 * 3 showcase clips shown in the video carousel.
 * TODO: replace each `src` (and optional `poster`) with the real videos when provided.
 * For now every slot defaults to the existing hero video (/hero.mp4).
 */
export const galleryVideos: GalleryVideo[] = [
  { src: "/hero.mp4", poster: "/images/hero-poster.webp", alt: "Madeena event highlight 1" },
  { src: "/hero.mp4", poster: "/images/hero-poster.webp", alt: "Madeena event highlight 2" },
  { src: "/hero.mp4", poster: "/images/hero-poster.webp", alt: "Madeena event highlight 3" },
];

/** Motion knobs for the Our work section. */
export const gallerySettings = {
  /** Video carousel slide transition (seconds). */
  videoTransitionSeconds: 0.8,
  /** Time for one full loop of the image strip (seconds). Higher = slower. */
  imageScrollSeconds: 26,
} as const;
