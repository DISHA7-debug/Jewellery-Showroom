import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { localStore } from "@/lib/db";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const collection = localStore.getCollectionBySlug(params.slug);
  if (!collection) return { title: "Collection Not Found" };
  return {
    title: `${collection.name} — Aranya Jewels Jaipur`,
    description: collection.description,
  };
}

export default function CollectionDetailPage({ params }: { params: { slug: string } }) {
  const collection = localStore.getCollectionBySlug(params.slug);

  if (!collection) {
    notFound();
  }

  const products = localStore.getProducts(collection.tenantId, collection.id);

  return (
    <div className="min-h-screen bg-ivory text-ink">
      <Header />

      <main className="pt-28 pb-24 lg:pt-36 lg:pb-32">
        {/* Collection Hero Banner */}
        <section className="wrap mb-16 lg:mb-20">
          <div className="relative rounded-2xl overflow-hidden bg-ink text-ivory p-8 sm:p-14 lg:p-20">
            <div className="absolute inset-0 opacity-40 mix-blend-overlay">
              <Image
                src={collection.coverImageUrl}
                alt={collection.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="relative z-10 max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-gold/20 border border-gold/40 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-widest text-gold-soft mb-6">
                <Sparkles className="h-3 w-3" />
                {collection.subtitle || "Curated Edit"}
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light leading-tight mb-6">
                {collection.name}
              </h1>
              <p className="text-base sm:text-lg text-ivoryFade-70 leading-relaxed mb-8">
                {collection.description}
              </p>
              <div className="flex flex-wrap items-center gap-6 text-xs text-gold-soft uppercase tracking-wider font-medium border-t border-ivoryFade-12 pt-6">
                <span>BIS 916 Hallmarked</span>
                <span>·</span>
                <span>{products.length} Masterpiece Pieces</span>
                <span>·</span>
                <span>Jaipur Hand-set</span>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="wrap">
          <div className="mb-10 flex items-center justify-between border-b border-ink-12 pb-4">
            <h2 className="font-display text-2xl text-emerald font-normal">
              Collection Pieces ({products.length})
            </h2>
            <span className="text-xs uppercase tracking-widest text-ink-50">
              Handcrafted in Jaipur
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((product) => (
              <div
                key={product.id}
                className="group flex flex-col rounded-xl bg-white/70 border border-ink-12 p-5 transition-all hover:border-gold/60 shadow-sm"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded bg-stone mb-5">
                  <Image
                    src={product.images[0]?.imageUrl || collection.coverImageUrl}
                    alt={product.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 bg-emerald text-ivory text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded">
                    {product.metalPurity}
                  </div>
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-gold">
                      {product.category}
                    </span>
                    <h3 className="font-display text-xl font-normal text-ink mt-1 mb-2 group-hover:text-emerald transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-xs text-ink-70 line-clamp-2 leading-relaxed mb-4">
                      {product.description}
                    </p>
                  </div>

                  <div className="border-t border-ink-12 pt-4 flex items-center justify-between">
                    <span className="text-xs text-ink-50">
                      {product.grossWeightG}g gross weight
                    </span>
                    <Link
                      href={`/products/${product.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald group-hover:text-gold transition-colors"
                    >
                      View Details
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
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
