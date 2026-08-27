import Hero from "@/sections/Hero";
import TrustBar from "@/sections/TrustBar";
import Services from "@/sections/Services";
import Gallery from "@/sections/Gallery";
import InstagramCta from "@/sections/Instagram";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <Gallery />
      <Services />
      <About />
      <InstagramCta />
      <Contact />
      <Footer />
    </main>
  );
}
