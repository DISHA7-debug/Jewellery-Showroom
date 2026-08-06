import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { WhatsAppFloat } from "@/components/shared/WhatsAppFloat";
import { Hero } from "@/components/features/homepage/Hero";
import { TrustStrip } from "@/components/features/homepage/TrustStrip";
import { Story } from "@/components/features/homepage/Story";
import { Collections } from "@/components/features/homepage/Collections";
import { Craftsmanship } from "@/components/features/homepage/Craftsmanship";
import { Testimonial } from "@/components/features/homepage/Testimonial";
import { Visit } from "@/components/features/homepage/Visit";
import { FinalCta } from "@/components/features/homepage/FinalCta";
import { brand, branches } from "@/data/homepage";

/**
 * The homepage is a pure composition of independent section components —
 * no section owns another's layout or state. This is what lets an agency
 * reorder, remove, or A/B a single section without touching the rest,
 * per the Functional Architecture's Module 6/7 requirements.
 *
 * Heading hierarchy check (logical, per accessibility requirement):
 * h1 (Hero) → h2 (Story, Collections, Craftsmanship, Testimonial [sr-only],
 * Visit, Final CTA) — no level is skipped, no section introduces an h3
 * above an h2 it doesn't belong to.
 */
export default function HomePage() {
  return (
    <>
      {/* JSON-LD structured data for local business SEO — jewellers rely
          on local search discovery; this is a direct SEO requirement,
          not decoration. */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "JewelryStore",
            name: brand.name,
            description:
              "A family jewellery house in Jaipur, hand-crafting fine gold and stone jewellery since 1962.",
            foundingDate: "1962",
            location: branches.map((b) => ({
              "@type": "Place",
              name: b.name,
              address: b.address,
            })),
          }),
        }}
      />

      <Header />

      <main id="top">
        <Hero />
        <TrustStrip />
        <Story />
        <Collections />
        <Craftsmanship />
        <Testimonial />
        <Visit />
        <FinalCta />
      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
