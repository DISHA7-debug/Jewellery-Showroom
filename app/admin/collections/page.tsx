"use client";

import { useState } from "react";
import Image from "next/image";
import { localStore } from "@/lib/db";
import { Layers, Plus, Eye, EyeOff, Edit, Sparkles } from "lucide-react";

export default function AdminCollectionsPage() {
  const [collections, setCollections] = useState(localStore.getCollections());

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-ink-12 pb-6">
        <div>
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">
            Curated Edits & Stories
          </span>
          <h1 className="font-display text-3xl text-emerald font-normal">Collection Manager</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {collections.map((c) => (
          <div key={c.id} className="rounded-xl border border-ink-12 bg-white p-5 shadow-sm space-y-4">
            <div className="relative aspect-[16/9] w-full rounded overflow-hidden bg-stone">
              <Image src={c.coverImageUrl} alt={c.name} fill className="object-cover" />
              <div className="absolute top-3 left-3 bg-emerald text-ivory text-[10px] uppercase font-semibold px-2.5 py-1 rounded">
                Order #{c.displayOrder}
              </div>
            </div>
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-widest text-gold">
                {c.subtitle}
              </span>
              <h3 className="font-display text-xl text-emerald font-normal mt-0.5">{c.name}</h3>
              <p className="text-xs text-ink-70 leading-relaxed mt-2 line-clamp-2">{c.description}</p>
            </div>
            <div className="pt-3 border-t border-ink-12 flex items-center justify-between text-xs">
              <span className="text-ink-50 font-mono">/collections/{c.slug}</span>
              <span className="text-emerald font-semibold uppercase tracking-wider text-[10px]">
                {c.isFeatured ? "Featured" : "Active"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
