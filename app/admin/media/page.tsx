"use client";

import { useState } from "react";
import Image from "next/image";
import { Image as ImageIcon, Upload, Copy, Check, Trash2 } from "lucide-react";

export default function AdminMediaPage() {
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);

  const sampleMedia = [
    {
      id: "med-1",
      url: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1800&auto=format&fit=crop",
      title: "Bridal Haar Hero",
      size: "1.2 MB",
    },
    {
      id: "med-2",
      url: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=1200&auto=format&fit=crop",
      title: "Kundan Set Close-up",
      size: "950 KB",
    },
    {
      id: "med-3",
      url: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=900&auto=format&fit=crop",
      title: "Temple Nakshi Gold",
      size: "820 KB",
    },
    {
      id: "med-4",
      url: "https://images.unsplash.com/photo-1603561596112-0a132b757442?q=80&w=1200&auto=format&fit=crop",
      title: "Solitaire Pendant",
      size: "640 KB",
    },
  ];

  const handleCopy = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedUrl(url);
    setTimeout(() => setCopiedUrl(null), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-ink-12 pb-6">
        <div>
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">
            Reusable Asset Vault
          </span>
          <h1 className="font-display text-3xl text-emerald font-normal">Media Library</h1>
        </div>
      </div>

      {/* Drag & Drop Upload Zone */}
      <div className="rounded-xl border-2 border-dashed border-ink-12 bg-white/70 p-8 text-center space-y-3 hover:border-gold transition-colors">
        <Upload className="mx-auto h-8 w-8 text-gold" />
        <h3 className="font-display text-lg text-emerald">Drag & Drop Media Assets</h3>
        <p className="text-xs text-ink-70 max-w-sm mx-auto">
          Upload high-resolution jewellery photography. Assets are automatically compressed for high-speed WebP delivery.
        </p>
      </div>

      {/* Media Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {sampleMedia.map((m) => (
          <div key={m.id} className="rounded-xl border border-ink-12 bg-white overflow-hidden shadow-sm group">
            <div className="relative aspect-square w-full bg-stone">
              <Image src={m.url} alt={m.title} fill className="object-cover" />
            </div>
            <div className="p-3 space-y-2">
              <p className="text-xs font-semibold text-ink truncate">{m.title}</p>
              <div className="flex items-center justify-between text-[10px] text-ink-50">
                <span>{m.size}</span>
                <button
                  onClick={() => handleCopy(m.url)}
                  className="inline-flex items-center gap-1 text-emerald font-semibold uppercase tracking-wider hover:text-gold"
                >
                  {copiedUrl === m.url ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                  {copiedUrl === m.url ? "Copied" : "Copy URL"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
