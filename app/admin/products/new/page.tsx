"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { localStore } from "@/lib/db";
import { ArrowLeft, Save, Plus, Image as ImageIcon } from "lucide-react";

export default function AdminNewProductPage() {
  const router = useRouter();
  const collections = localStore.getCollections();

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Necklace");
  const [collectionId, setCollectionId] = useState(collections[0]?.id || "");
  const [description, setDescription] = useState("");
  const [metalPurity, setMetalPurity] = useState("22K Yellow Gold (BIS 916)");
  const [grossWeightG, setGrossWeightG] = useState("45.0");
  const [netWeightG, setNetWeightG] = useState("40.0");
  const [gemstoneDetails, setGemstoneDetails] = useState("Uncut Kundan Polki & Natural Emeralds");
  const [makingCharges, setMakingCharges] = useState("12% per gram");
  const [bisHallmarkInfo, setBisHallmarkInfo] = useState("BIS 916 Hallmarked");
  const [imageUrl, setImageUrl] = useState("https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1800&auto=format&fit=crop");
  const [availability, setAvailability] = useState("IN_STOCK");
  const [isFeatured, setIsFeatured] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStore.addProduct({
      title,
      category,
      collectionId,
      description,
      metalPurity,
      grossWeightG: parseFloat(grossWeightG),
      netWeightG: parseFloat(netWeightG),
      gemstoneDetails,
      makingCharges,
      bisHallmarkInfo,
      imageUrl,
      availability,
      isFeatured,
    });

    router.push("/admin/products");
  };

  return (
    <div className="max-w-4xl space-y-6">
      <div className="flex items-center gap-4">
        <Link
          href="/admin/products"
          className="p-2 rounded-lg border border-ink-12 bg-white text-ink hover:border-gold transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <div>
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">
            Inventory Editor
          </span>
          <h1 className="font-display text-3xl text-emerald font-normal">Add New Fine Jewellery Piece</h1>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="rounded-xl border border-ink-12 bg-white p-8 shadow-sm space-y-6 text-xs">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="sm:col-span-2">
            <label className="block text-[11px] uppercase tracking-wider font-semibold text-ink-70 mb-1">
              Piece Title *
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Royal Kundan & Ruby Bridal Necklace"
              className="w-full rounded-lg border border-ink-12 bg-white px-4 py-2.5 text-xs text-ink focus:border-gold focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-[11px] uppercase tracking-wider font-semibold text-ink-70 mb-1">
              Category *
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full rounded-lg border border-ink-12 bg-white px-4 py-2.5 text-xs text-ink focus:border-gold focus:outline-none"
            >
              <option value="Necklace">Necklace / Haar</option>
              <option value="Earrings">Earrings / Jhumkas</option>
              <option value="Bangles & Kadas">Bangles & Kadas</option>
              <option value="Rings">Rings & Band</option>
              <option value="Pendants">Pendants</option>
            </select>
          </div>

          <div>
            <label className="block text-[11px] uppercase tracking-wider font-semibold text-ink-70 mb-1">
              Assign Collection *
            </label>
            <select
              value={collectionId}
              onChange={(e) => setCollectionId(e.target.value)}
              className="w-full rounded-lg border border-ink-12 bg-white px-4 py-2.5 text-xs text-ink focus:border-gold focus:outline-none"
            >
              {collections.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>

          <div className="sm:col-span-2">
            <label className="block text-[11px] uppercase tracking-wider font-semibold text-ink-70 mb-1">
              Description & Craft Narrative *
            </label>
            <textarea
              rows={3}
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe the Karigar craft, stone quality, engraving details..."
              className="w-full rounded-lg border border-ink-12 bg-white px-4 py-2.5 text-xs text-ink focus:border-gold focus:outline-none"
            />
          </div>
        </div>

        {/* Technical Specifications Section */}
        <div className="border-t border-ink-12 pt-6 space-y-4">
          <h3 className="font-display text-lg text-emerald">Technical Specifications</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-[11px] uppercase tracking-wider font-semibold text-ink-70 mb-1">
                Gold Purity *
              </label>
              <input
                type="text"
                required
                value={metalPurity}
                onChange={(e) => setMetalPurity(e.target.value)}
                className="w-full rounded-lg border border-ink-12 bg-white px-4 py-2.5 text-xs text-ink focus:border-gold focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-[11px] uppercase tracking-wider font-semibold text-ink-70 mb-1">
                Gross Weight (grams)
              </label>
              <input
                type="number"
                step="0.1"
                value={grossWeightG}
                onChange={(e) => setGrossWeightG(e.target.value)}
                className="w-full rounded-lg border border-ink-12 bg-white px-4 py-2.5 text-xs text-ink focus:border-gold focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-[11px] uppercase tracking-wider font-semibold text-ink-70 mb-1">
                Net Gold Weight (grams)
              </label>
              <input
                type="number"
                step="0.1"
                value={netWeightG}
                onChange={(e) => setNetWeightG(e.target.value)}
                className="w-full rounded-lg border border-ink-12 bg-white px-4 py-2.5 text-xs text-ink focus:border-gold focus:outline-none"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-[11px] uppercase tracking-wider font-semibold text-ink-70 mb-1">
                Gemstone & Stone Detail
              </label>
              <input
                type="text"
                value={gemstoneDetails}
                onChange={(e) => setGemstoneDetails(e.target.value)}
                className="w-full rounded-lg border border-ink-12 bg-white px-4 py-2.5 text-xs text-ink focus:border-gold focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-[11px] uppercase tracking-wider font-semibold text-ink-70 mb-1">
                Making Charges
              </label>
              <input
                type="text"
                value={makingCharges}
                onChange={(e) => setMakingCharges(e.target.value)}
                className="w-full rounded-lg border border-ink-12 bg-white px-4 py-2.5 text-xs text-ink focus:border-gold focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Media & Status */}
        <div className="border-t border-ink-12 pt-6 space-y-4">
          <h3 className="font-display text-lg text-emerald">Media & Availability</h3>
          <div>
            <label className="block text-[11px] uppercase tracking-wider font-semibold text-ink-70 mb-1">
              Main Image URL *
            </label>
            <input
              type="url"
              required
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className="w-full rounded-lg border border-ink-12 bg-white px-4 py-2.5 text-xs text-ink focus:border-gold focus:outline-none"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] uppercase tracking-wider font-semibold text-ink-70 mb-1">
                Availability Status
              </label>
              <select
                value={availability}
                onChange={(e) => setAvailability(e.target.value)}
                className="w-full rounded-lg border border-ink-12 bg-white px-4 py-2.5 text-xs text-ink focus:border-gold focus:outline-none"
              >
                <option value="IN_STOCK">In Stock (Available in Showroom)</option>
                <option value="MADE_TO_ORDER">Made to Order (Karigar Suite)</option>
                <option value="ARCHIVED">Archived</option>
              </select>
            </div>
            <div className="flex items-center gap-2 pt-6">
              <input
                type="checkbox"
                id="isFeatured"
                checked={isFeatured}
                onChange={(e) => setIsFeatured(e.target.checked)}
                className="rounded border-ink-12 text-emerald focus:ring-gold"
              />
              <label htmlFor="isFeatured" className="text-xs text-ink font-medium">
                Feature on Homepage
              </label>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-emerald py-3.5 text-xs font-semibold uppercase tracking-widest text-ivory hover:bg-emerald-deep transition-all shadow"
        >
          Save & Publish Piece
        </button>
      </form>
    </div>
  );
}
