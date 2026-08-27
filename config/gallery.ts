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
 * Photos shown in the right-to-left auto-scrolling strip.
 * Self-hosted under /public/images (business Google profile + client-supplied event photos).
 */
export const galleryImages: GalleryItem[] = [
  { src: "/images/g1.webp", alt: "Floral wedding stage décor by Madeena" },
  { src: "/images/g2.webp", alt: "Fresh fruit and salad buffet spread" },
  { src: "/images/g6.webp", alt: "Banquet hall set for a reception" },
  { src: "/images/g7.webp", alt: "Cultural performance at a celebration" },
  { src: "/images/madeena-photo-1.webp", alt: "Grand indoor banquet set with gold chairs and chandelier" },
  { src: "/images/madeena-photo-2.webp", alt: "Outdoor evening banquet with floral table styling" },
];

/**
 * OUR WORK — VIDEOS.
 * 4 event clips, each trimmed to an 8-second highlight and web-optimised.
 * Ordered best-quality / lightest-to-render first. Portrait (reel) format.
 * Served from /public/videos with a matching poster in /public/images.
 * (Move to Cloudinary later by swapping these src/poster URLs.)
 */
export const galleryVideos: GalleryVideo[] = [
  { src: "/videos/madeena-video-1.mp4", poster: "/images/madeena-video-1.webp", alt: "Floral wedding stage with copper buffet chafing dishes" },
  { src: "/videos/madeena-video-2.mp4", poster: "/images/madeena-video-2.webp", alt: "Guests dining at a large catered function" },
  { src: "/videos/madeena-video-3.mp4", poster: "/images/madeena-video-3.webp", alt: "Live welcome-drinks counter at an event hall" },
  { src: "/videos/madeena-video-4.mp4", poster: "/images/madeena-video-4.webp", alt: "Banquet hall set with buffet stations and dressed tables" },
];

/** Motion knobs for the Our work section. */
export const gallerySettings = {
  /** Video carousel slide transition (seconds). */
  videoTransitionSeconds: 0.8,
  /** Time for one full loop of the image strip (seconds). Higher = slower. */
  imageScrollSeconds: 30,
} as const;
