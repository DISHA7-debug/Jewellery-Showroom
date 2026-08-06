import Image from "next/image";
import { hero, brand } from "@/data/homepage";
import { PrimaryButton, SecondaryButton } from "@/components/ui/Button";
import { HeroEntrance } from "@/components/features/homepage/HeroEntrance";

/**
 * Server-rendered hero: image, headline, and copy ship as static HTML for
 * SEO/LCP. The entrance choreography (split-line wipe, staggered fade-ins,
 * parallax) is delegated to a thin client wrapper (HeroEntrance) that only
 * adds motion classes/timelines — it never owns or re-renders this content.
 */
export function Hero() {
  return (
    <section
      aria-label="Introduction"
      className="relative flex h-[100svh] min-h-[640px] flex-col justify-end overflow-hidden"
    >
      <div className="absolute inset-0 z-0" data-hero-media>
        <Image
          src={hero.image.src}
          alt={hero.image.alt}
          fill
          priority
          sizes="100vw"
          className="scale-[1.12] object-cover brightness-[0.86] saturate-[0.96]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/15 via-ink/10 to-ink/75" />
      </div>

      <HeroEntrance>
        <div className="wrap relative z-[2] w-full pb-20 text-ivory md:pb-[88px]">
          <div
            data-hero-eyebrow
            className="mb-5 flex items-center gap-3.5 text-[11px] uppercase tracking-[0.22em] text-gold-soft"
          >
            <span className="inline-block h-px w-10 bg-gold-soft" aria-hidden="true" />
            {hero.eyebrow}
          </div>

          <h1 className="max-w-[16ch] text-[clamp(2.75rem,7.4vw,6.75rem)] font-light">
            {hero.headlineLines.map((line) => (
              <span key={line} className="block overflow-hidden">
                <span data-hero-line className="block">
                  {line}
                </span>
              </span>
            ))}
          </h1>

          <p
            data-hero-sub
            className="mt-6 max-w-[44ch] text-base leading-[1.7] text-ivoryFade-70"
          >
            {hero.sub}
          </p>

          <div data-hero-actions className="mt-10 flex flex-wrap gap-4">
            <SecondaryButton
              href="#collections"
              className="border-ivoryFade-50 text-ivory hover:bg-ivory hover:text-ink"
            >
              View Collections
            </SecondaryButton>
            <PrimaryButton
              href="#appointment"
              ariaLabel="Book an appointment"
            >
              Book an Appointment
            </PrimaryButton>
          </div>
        </div>
      </HeroEntrance>

      <div
        aria-hidden="true"
        className="absolute bottom-8 right-6 z-[2] hidden items-center gap-2.5 text-[11px] uppercase tracking-[0.14em] text-ivoryFade-50 sm:flex lg:right-[6vw]"
      >
        Scroll
        <span className="relative h-10 w-px overflow-hidden bg-ivoryFade-50">
          <span className="absolute -top-10 h-full w-full animate-[scrollLine_2.6s_cubic-bezier(0.22,1,0.36,1)_infinite] bg-ivory" />
        </span>
      </div>
    </section>
  );
}
