"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X, Phone } from "lucide-react";
import { site, navLinks, telLink, waLink } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export default function Header() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        solid
          ? "border-b border-sand/70 bg-[rgba(247,241,231,0.88)] backdrop-blur-[16px]"
          : "border-b border-espresso/30 bg-[rgba(36,28,21,0.92)] backdrop-blur-[10px]"
      )}
    >
      <div className="mx-auto flex max-w-shell items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" className="flex flex-col leading-none" aria-label={`${site.fullName} home`}>
          <span className={cn("font-display text-2xl tracking-wide transition-colors", solid ? "text-espresso" : "text-ivory")}>
            Madeena
          </span>
          <span className={cn("mt-0.5 font-sans text-[0.6rem] uppercase tracking-[0.24em] transition-colors", solid ? "text-saffron-2" : "text-ivory/70")}>
            Catering &amp; Events
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn("link-underline font-sans text-sm transition-colors", solid ? "text-ink hover:text-espresso" : "text-ivory/90 hover:text-ivory")}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={telLink}
            aria-label="Call us"
            className={cn(
              "grid h-10 w-10 place-items-center rounded-full border transition-colors",
              solid ? "border-sand text-espresso hover:bg-[var(--saffron-soft)]" : "border-ivory/40 text-ivory hover:bg-ivory/10"
            )}
          >
            <Phone size={16} />
          </a>
          <Button href={waLink()} variant="primary" external>
            Enquire now
          </Button>
        </div>

        <button
          className={cn("grid h-10 w-10 place-items-center rounded-full transition-colors lg:hidden", solid ? "text-espresso" : "text-ivory")}
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <Menu size={22} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div className="fixed inset-0 z-[60] lg:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div
              className="absolute inset-0 flex flex-col bg-espresso px-6 pb-8 pt-5 text-ivory"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.5 }}
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-2xl">Madeena</span>
                <button aria-label="Close menu" onClick={() => setOpen(false)} className="grid h-10 w-10 place-items-center rounded-full text-ivory">
                  <X size={22} />
                </button>
              </div>
              <nav className="mt-10 flex flex-col gap-1" aria-label="Mobile">
                {navLinks.map((l, i) => (
                  <motion.div key={l.href} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 + i * 0.08 }}>
                    <Link href={l.href} onClick={() => setOpen(false)} className="block border-b border-ivory/10 py-4 font-display text-3xl">
                      {l.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="mt-auto flex flex-col gap-3">
                <Button href={waLink()} variant="whatsapp" external>
                  Chat on WhatsApp
                </Button>
                <Button href={telLink} variant="outline" className="border-ivory/50 text-ivory">
                  Call {site.phone}
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
