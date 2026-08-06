"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { localStore } from "@/lib/db";
import { Plus, Trash2, Edit, Star, ShieldCheck, Search } from "lucide-react";

export default function AdminProductsPage() {
  const [products, setProducts] = useState(localStore.getProducts());
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this piece from inventory?")) {
      localStore.deleteProduct(id);
      setProducts(localStore.getProducts());
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-ink-12 pb-6">
        <div>
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">
            Inventory & Catalog CMS
          </span>
          <h1 className="font-display text-3xl text-emerald font-normal">Products Manager</h1>
        </div>
        <Link
          href="/admin/products/new"
          className="inline-flex items-center gap-2 rounded-lg bg-emerald px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-ivory hover:bg-emerald-deep transition-all shadow"
        >
          <Plus className="h-4 w-4" />
          Add New Piece
        </Link>
      </div>

      {/* Search Bar */}
      <div className="relative max-w-md">
        <Search className="absolute left-3.5 top-3 h-4 w-4 text-ink-50" />
        <input
          type="text"
          placeholder="Search by product title or category..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full rounded-lg border border-ink-12 bg-white pl-10 pr-4 py-2.5 text-xs text-ink focus:border-gold focus:outline-none"
        />
      </div>

      {/* Products Table */}
      <div className="rounded-xl border border-ink-12 bg-white overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-stone/50 border-b border-ink-12 text-[11px] font-semibold uppercase tracking-wider text-ink-70">
              <tr>
                <th className="py-3.5 px-4">Piece</th>
                <th className="py-3.5 px-4">Category</th>
                <th className="py-3.5 px-4">Purity / Weight</th>
                <th className="py-3.5 px-4">Making Charges</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-12">
              {filteredProducts.map((p) => (
                <tr key={p.id} className="hover:bg-ivory/50 transition-colors">
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="relative h-12 w-12 rounded overflow-hidden bg-stone flex-shrink-0 border">
                        <Image
                          src={p.images[0]?.imageUrl || "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1800&auto=format&fit=crop"}
                          alt={p.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-ink text-sm">{p.title}</h4>
                        <span className="text-[10px] text-ink-50 uppercase tracking-wider font-mono">
                          /{p.slug}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4 font-medium text-ink-70">{p.category}</td>
                  <td className="py-4 px-4">
                    <p className="font-medium text-emerald">{p.metalPurity}</p>
                    <p className="text-[11px] text-ink-50">{p.grossWeightG}g gross weight</p>
                  </td>
                  <td className="py-4 px-4 text-ink-70">{p.makingCharges}</td>
                  <td className="py-4 px-4">
                    <span className={`inline-block px-2.5 py-1 rounded text-[10px] font-semibold uppercase tracking-wider ${
                      p.availability === "IN_STOCK" ? "bg-emerald/10 text-emerald" : "bg-amber-100 text-amber-800"
                    }`}>
                      {p.availability}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => handleDelete(p.id)}
                        className="p-1.5 rounded text-red-600 hover:bg-red-50 transition-colors"
                        title="Delete piece"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
