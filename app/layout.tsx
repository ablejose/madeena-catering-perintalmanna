import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import { site } from "@/config/site";
import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/Header";
import WhatsAppFab from "@/components/WhatsAppFab";
import Loader from "@/components/Loader";

const fraunces = Fraunces({ subsets: ["latin"], display: "swap", variable: "--font-fraunces" });
const manrope = Manrope({ subsets: ["latin"], display: "swap", variable: "--font-manrope" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Madeena Catering & Event Management — Perintalmanna, Kerala",
  description:
    "Madeena Catering & Event Management, Perintalmanna — wedding catering, buffets and complete event management across Malappuram. Rated 5.0 on Google. Open 24 hours. Call +91 94951 63651.",
  keywords: [
    "catering Perintalmanna",
    "wedding catering Malappuram",
    "event management Perintalmanna",
    "wedding buffet Kerala",
    "Madeena Catering",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.fullName,
    title: "Madeena Catering & Event Management — Perintalmanna",
    description:
      "Wedding catering, buffets and complete event management across Malappuram. Rated 5.0 on Google.",
    images: [{ url: "/images/hero-poster.webp", width: 1200, height: 630, alt: site.fullName }],
  },
  alternates: { canonical: site.url },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Caterer"],
  name: site.fullName,
  image: `${site.url}/images/hero-poster.webp`,
  url: site.url,
  telephone: site.phone,
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Opposite Panchayath Office, Thelakkad",
    addressLocality: "Perintalmanna",
    addressRegion: "Kerala",
    postalCode: "679325",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 11.019036, longitude: 76.279299 },
  areaServed: site.serviceAreas.map((a) => ({ "@type": "City", name: a })),
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "20" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <Loader />
        <SmoothScroll>
          <Header />
          {children}
          <WhatsAppFab />
        </SmoothScroll>
      </body>
    </html>
  );
}
