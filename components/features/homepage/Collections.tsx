import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { collections } from "@/data/homepage";
import { RevealText, RevealStagger } from "@/components/ui/Reveal";
import { aspectRatio, hoverScale } from "@/lib/tokens/sizing";

const SIZE_CLASSES: Record<(typeof collections)[number]["size"], string> = {
  large: `lg:col-span-5 ${aspectRatio.portraitProduct}`,
  small: `lg:col-span-3 ${aspectRatio.editorialTall} lg:self-end`,
  medium: `lg:col-span-4 ${aspectRatio.portraitProduct}`,
};

/**
 * The only section (with Final CTA) using the inverted dark palette —
 * a deliberate "room change" so gold/stone photography reads as more
 * luminous by contrast (Visual Blueprint §4). Grid is intentionally
 * asymmetric, mimicking a curated gallery wall rather than a uniform
 * product grid — this is the boundary that keeps the platform from
 * reading as an ecommerce marketplace.
 */
export function Collections() {
  return (
    <section
      id="collections"
      aria-labelledby="collections-heading"
      className="bg-ink py-section-y-sm text-ivory lg:py-section-y"
    >
      <div className="wrap">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-10 lg:mb-[72px]">
          <div>
            <RevealText weight="light">
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-gold-soft">
                Collections
              </p>
            </RevealText>
            <RevealText weight="heavy">
              <h2
                id="collections-heading"
                className="max-w-[14ch] text-[clamp(2rem,4vw,3.25rem)] font-light"
              >
                Curated by occasion, not category.
              </h2>
            </RevealText>
          </div>
          <RevealText>
            <p className="max-w-[34ch] text-[15px] leading-[1.7] text-ivoryFade-70">
              Each collection is assembled around a moment — a wedding, a
              festival, an everyday ritual — the way we would guide you
              through it in person.
            </p>
          </RevealText>
        </div>

        <RevealStagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-12" staggerMs={80}>
          {collections.map((c) => (
            <Link
              key={c.slug}
              href={`/collections/${c.slug}`}
              className={`group relative overflow-hidden rounded-sm ${SIZE_CLASSES[c.size]}`}
              aria-label={`View the ${c.name} collection, ${c.count}`}
            >
              <Image
                src={c.image.src}
                alt={c.image.alt}
                fill
                sizes="(min-width: 1024px) 33vw, 90vw"
                className={`object-cover transition-transform duration-[1100ms] ease-luxury ${hoverScale.photography}`}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/0 to-transparent transition-opacity duration-[1100ms] ease-luxury group-hover:from-ink/70" />
              <span
                className="absolute right-6 top-6 grid h-9 w-9 place-items-center rounded-full border border-ivoryFade-50 text-ivory transition-[background-color,border-color,color] duration-500 ease-luxury group-hover:border-gold group-hover:bg-gold group-hover:text-ink"
                aria-hidden="true"
              >
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-500 ease-luxury group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
              <div className="absolute inset-x-0 bottom-0 p-7">
                <p className="mb-2 text-[11px] uppercase tracking-wide text-gold-soft">
                  {c.count}
                </p>
                <h3 className="font-display text-2xl font-normal">{c.name}</h3>
              </div>
            </Link>
          ))}
        </RevealStagger>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-5">
          <p className="max-w-[38ch] text-sm text-ivoryFade-70">
            Prices are shared on enquiry — every piece is priced against the
            day&apos;s gold rate and its exact craftsmanship.
          </p>
          <Link
            href="/collections"
            className="inline-flex items-center gap-2.5 border-b border-ivoryFade-50 pb-1.5 text-[13px] uppercase tracking-wide text-ivory"
          >
            View all collections
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
