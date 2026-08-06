"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { brand } from "@/data/homepage";
import { PrimaryButton, SecondaryButton } from "@/components/ui/Button";
import { SealMark } from "@/components/ui/SealMark";

/**
 * The only header state change on the page (per Visual Blueprint: no
 * further per-section color-shifting). Transparent over the hero,
 * frosted-translucent once scrolled — a single threshold, not a
 * continuous scroll-linked effect, which keeps this cheap (one class
 * toggle, not a scroll-tied style recalculation every frame).
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-[100] flex items-center justify-between px-6 py-7 transition-[background-color,padding,border-color] duration-500 ease-luxury lg:px-[6vw]",
        scrolled
          ? "border-b border-ink-12 bg-ivory/85 py-[18px] backdrop-blur-md"
          : "border-b border-transparent",
      ].join(" ")}
    >
      <Link href="/" className="flex items-center gap-2.5 font-display text-lg tracking-wide">
        <SealMark trigger="interactive" className="h-5 w-5" />
        {brand.name}
      </Link>

      <nav aria-label="Primary" className="hidden lg:block">
        <ul className="flex gap-10 text-[13px] tracking-wide text-ink-70">
          {([
            ["Collections", "/collections"],
            ["Our Story", "/about"],
            ["Visit Showroom", "/visit"],
            ["Contact", "/contact"],
            ["Owner Portal", "/admin"],
          ] as [string, string][]).map(([label, href]) => (
            <li key={href}>
              <Link
                href={href}
                className="border-b border-transparent pb-1 transition-colors hover:border-ink hover:text-ink"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex items-center gap-3.5">
        <SecondaryButton href="/book" className="hidden sm:inline-flex">
          Book a Visit
        </SecondaryButton>
        <PrimaryButton
          href={`https://wa.me/${brand.whatsappNumber}?text=${brand.waMessage()}`}
          external
          ariaLabel="Enquire on WhatsApp"
        >
          WhatsApp
        </PrimaryButton>
        <Link
          href="/book"
          className="grid h-9 w-9 place-items-center lg:hidden text-ink hover:text-gold"
          aria-label="Book appointment"
        >
          <Menu className="h-5 w-5" aria-hidden="true" />
        </Link>
      </div>
    </header>
  );
}
