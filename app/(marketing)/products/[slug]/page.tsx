"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { EnquiryModal } from "@/components/shared/EnquiryModal";
import { localStore } from "@/lib/db";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { ArrowLeft, MessageSquare, Calendar, ShieldCheck, Gem, Award, CheckCircle2 } from "lucide-react";

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = localStore.getProductBySlug(params.slug);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  if (!product) {
    notFound();
  }

  const images = product.images.length > 0 ? product.images : [
    { id: "img-def", productId: product.id, imageUrl: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1800&auto=format&fit=crop", altText: product.title, isHero: true, displayOrder: 1 }
  ];

  const currentImage = images[activeImageIndex] || images[0] || {
    id: "img-def",
    productId: product.id,
    imageUrl: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1800&auto=format&fit=crop",
    altText: product.title,
    isHero: true,
    displayOrder: 1
  };

  const handleWhatsApp = () => {
    const url = buildWhatsAppUrl({
      type: "product",
      title: product.title,
      codeOrSlug: product.slug,
    });
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-ivory text-ink">
      <Header />

      <main className="pt-28 pb-24 lg:pt-36 lg:pb-32">
        <div className="wrap mb-8">
          <Link
            href="/collections"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-ink-50 hover:text-emerald transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Collections
          </Link>
        </div>

        <div className="wrap grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Image Gallery */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-stone border border-ink-12 shadow-sm">
              <Image
                src={currentImage.imageUrl}
                alt={currentImage.altText || product.title}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-emerald text-ivory text-[11px] font-semibold uppercase tracking-widest px-3 py-1 rounded shadow">
                {product.availability === "IN_STOCK" ? "Available in Showroom" : "Made to Order"}
              </div>
            </div>

            {/* Thumbnail Selection */}
            {images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {images.map((img, idx) => (
                  <button
                    key={img.id}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative h-20 w-20 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                      idx === activeImageIndex ? "border-gold scale-95" : "border-ink-12 opacity-70 hover:opacity-100"
                    }`}
                  >
                    <Image src={img.imageUrl} alt={img.altText || ""} fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Product Info & Specifications */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">
                {product.category} · BIS Hallmarked
              </span>
              <h1 className="font-display text-3xl sm:text-4xl text-emerald font-normal mt-2 mb-4 leading-tight">
                {product.title}
              </h1>
              <p className="text-sm text-ink-70 leading-[1.8] mb-8">
                {product.description}
              </p>

              {/* CTAs */}
              <div className="space-y-3 mb-10">
                <button
                  onClick={handleWhatsApp}
                  className="w-full inline-flex items-center justify-center gap-2.5 rounded-lg bg-emerald px-6 py-4 text-xs uppercase tracking-widest text-ivory hover:bg-emerald-deep transition-all shadow-md font-semibold"
                >
                  <MessageSquare className="h-4 w-4" />
                  Enquire via WhatsApp
                </button>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setIsEnquiryOpen(true)}
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-ink-12 bg-white/60 px-4 py-3 text-xs uppercase tracking-wider text-ink hover:border-gold transition-colors font-medium"
                  >
                    Web Enquiry
                  </button>
                  <Link
                    href={`/book?product=${encodeURIComponent(product.title)}`}
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-gold/40 bg-gold/10 px-4 py-3 text-xs uppercase tracking-wider text-ink hover:bg-gold/20 transition-colors font-medium"
                  >
                    <Calendar className="h-3.5 w-3.5 text-gold" />
                    Book Viewing
                  </Link>
                </div>
              </div>

              {/* Technical Specifications Table */}
              <div className="rounded-xl border border-ink-12 bg-white/60 p-6 space-y-4">
                <h3 className="font-display text-lg text-emerald border-b border-ink-12 pb-3 flex items-center justify-between">
                  <span>Specifications</span>
                  <Award className="h-4 w-4 text-gold" />
                </h3>
                <dl className="grid grid-cols-2 gap-y-3 text-xs">
                  <div>
                    <dt className="text-ink-50 uppercase tracking-wider text-[10px]">Gold Purity</dt>
                    <dd className="font-medium text-ink mt-0.5">{product.metalPurity}</dd>
                  </div>
                  <div>
                    <dt className="text-ink-50 uppercase tracking-wider text-[10px]">Gross Weight</dt>
                    <dd className="font-medium text-ink mt-0.5">{product.grossWeightG} grams</dd>
                  </div>
                  <div>
                    <dt className="text-ink-50 uppercase tracking-wider text-[10px]">Net Gold Weight</dt>
                    <dd className="font-medium text-ink mt-0.5">{product.netWeightG} grams</dd>
                  </div>
                  <div>
                    <dt className="text-ink-50 uppercase tracking-wider text-[10px]">Making Charges</dt>
                    <dd className="font-medium text-ink mt-0.5">{product.makingCharges}</dd>
                  </div>
                  <div className="col-span-2">
                    <dt className="text-ink-50 uppercase tracking-wider text-[10px]">Gemstone & Stone Detail</dt>
                    <dd className="font-medium text-ink mt-0.5">{product.gemstoneDetails || "Pure 22K Solid Gold (No stones)"}</dd>
                  </div>
                  <div className="col-span-2 border-t border-ink-12 pt-3 flex items-center gap-2 text-emerald">
                    <ShieldCheck className="h-4 w-4" />
                    <span className="text-[11px] font-semibold">{product.bisHallmarkInfo}</span>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </main>

      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        productTitle={product.title}
        productSlug={product.slug}
      />

      <Footer />
    </div>
  );
}
