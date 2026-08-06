import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { story, trustFacts } from "@/data/homepage";
import { ShieldCheck, Award, Clock, Users, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Our Heritage & Story — Aranya Jewels Jaipur",
  description: "Hand-crafting fine gold and stone jewellery in Jaipur since 1962. Learn about our three generations of karigars and BIS hallmark commitment.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-ivory text-ink">
      <Header />

      <main className="pt-28 pb-24 lg:pt-36 lg:pb-32">
        {/* Heritage Hero */}
        <section className="wrap max-w-4xl mx-auto text-center mb-16 lg:mb-24">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold mb-3">
            Est. 1962 · Jaipur, Rajasthan
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-emerald mb-6">
            Three Generations of Hand-Set Craft
          </h1>
          <p className="text-base sm:text-lg text-ink-70 leading-[1.8] max-w-2xl mx-auto">
            Founded six streets from where our workshop stands today. We still sketch every design on paper before a single tool touches 22K gold.
          </p>
        </section>

        {/* Narrative & Workbench Image */}
        <section className="wrap grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          <div className="lg:col-span-6 relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg border border-ink-12">
            <Image
              src={story.image.src}
              alt={story.image.alt}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
              The Aranya Philosophy
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-emerald font-normal leading-snug">
              &quot;A piece of jewellery should outlive the person who commissioned it.&quot;
            </h2>
            <p className="text-sm sm:text-base text-ink-70 leading-[1.85]">
              Aranya Jewels was founded in 1962 by Radheshyam Soni, a goldsmith who believed that true luxury lies in permanence. Today, his grandchildren direct the same workshop in Jaipur, maintaining relationships with families who have trusted us for over sixty years.
            </p>
            <p className="text-sm sm:text-base text-ink-70 leading-[1.85]">
              Every gemstone is conflict-free and hand-inspected under high magnification. Every piece undergoes rigorous BIS hallmarking to ensure purity, authenticity, and generational longevity.
            </p>

            <div className="pt-4 border-t border-ink-12 grid grid-cols-3 gap-6">
              {story.stats.map((st) => (
                <div key={st.label}>
                  <p className="font-display text-3xl text-emerald">{st.value}</p>
                  <p className="text-[11px] uppercase tracking-wider text-ink-50 mt-1">{st.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust & Craft Standards */}
        <section className="wrap bg-white/70 rounded-2xl border border-ink-12 p-8 sm:p-14 mb-20">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h3 className="font-display text-2xl text-emerald font-normal">
              Our Purity & Craft Commitments
            </h3>
            <p className="text-xs text-ink-70 mt-2">
              Uncompromising standards guaranteed on every custom order and collection piece.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustFacts.map((fact) => (
              <div key={fact.label} className="p-5 rounded-xl bg-ivory/80 border border-ink-12 text-center space-y-3">
                <ShieldCheck className="mx-auto h-8 w-8 text-gold" />
                <h4 className="font-semibold text-sm text-ink">{fact.label}</h4>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="wrap text-center">
          <Link
            href="/collections"
            className="inline-flex items-center gap-2 rounded-lg bg-emerald px-8 py-4 text-xs font-semibold uppercase tracking-widest text-ivory hover:bg-emerald-deep transition-all shadow-md"
          >
            Explore The Current Edit
            <ArrowRight className="h-4 w-4" />
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
