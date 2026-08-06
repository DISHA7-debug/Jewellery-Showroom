"use client";

import { useState } from "react";
import { localStore } from "@/lib/db";
import { MessageSquareQuote, CheckCircle2, XCircle, Plus, Star } from "lucide-react";

export default function AdminTestimonialsPage() {
  const [testimonials, setTestimonials] = useState(localStore.getTestimonials());

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-ink-12 pb-6">
        <div>
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">
            Client Endorsements & Reviews
          </span>
          <h1 className="font-display text-3xl text-emerald font-normal">Testimonials Manager</h1>
        </div>
      </div>

      <div className="space-y-4">
        {testimonials.map((t) => (
          <div key={t.id} className="rounded-xl border border-ink-12 bg-white p-6 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-ink">{t.customerName}</span>
                <span className="text-[10px] text-ink-50 uppercase tracking-wider">· {t.context}</span>
              </div>
              <p className="text-xs text-ink-70 italic">&quot;{t.quote}&quot;</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded bg-emerald/10 text-emerald text-[10px] uppercase font-semibold">
                Approved
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
