import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { RevealText } from "@/components/ui/Reveal";
import { localStore } from "@/lib/db";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Curated Collections — Aranya Jewels Jaipur",
  description: "Explore the fine jewellery collections of Aranya Jewels: The Bridal Edit, Temple & Heritage Nakshi, and Everyday Fine Gold.",
};

export default function CollectionsPage() {
  const collections = localStore.getCollections();

  return (
    <div className="min-h-screen bg-ivory text-ink">
      <Header />

      <main className="pt-32 pb-24 lg:pt-40 lg:pb-32">
        {/* Editorial Header */}
        <section className="wrap mb-16 lg:mb-24 text-center max-w-3xl mx-auto">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold mb-3">
            Jaipur Craftsmanship
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light text-emerald mb-6">
            Curated Collections
          </h1>
          <p className="text-base text-ink-70 leading-[1.8]">
            Each collection represents weeks of meticulous hand-sketching, casting, and hand-setting by master karigars in Jaipur. All gold is 22K/18K BIS hallmarked.
          </p>
        </section>

        {/* Collections Grid */}
        <section className="wrap">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {collections.map((col) => (
              <div key={col.id} className="group relative flex flex-col overflow-hidden rounded-lg bg-white/60 border border-ink-12 p-5 transition-all hover:border-gold/50 shadow-sm hover:shadow-md">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded mb-5 bg-stone">
                  <Image
                    src={col.coverImageUrl}
                    alt={col.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-ink/80 backdrop-blur-sm px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-ivory">
                    {col.subtitle || "Curated Edit"}
                  </div>
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h2 className="font-display text-2xl font-normal text-emerald mb-2 group-hover:text-gold transition-colors">
                      {col.name}
                    </h2>
                    <p className="text-xs text-ink-70 leading-relaxed mb-6 line-clamp-3">
                      {col.description}
                    </p>
                  </div>

                  <Link
                    href={`/collections/${col.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-ink group-hover:text-gold transition-colors border-t border-ink-12 pt-4"
                  >
                    Explore Collection
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
