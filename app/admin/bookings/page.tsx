"use client";

import { useState } from "react";
import { localStore } from "@/lib/db";
import { CalendarCheck, CheckCircle2, XCircle, Clock, MapPin, Phone, Mail, MessageSquare } from "lucide-react";

export default function AdminBookingsPage() {
  const [bookings, setBookings] = useState(localStore.getBookings());
  const showrooms = localStore.getShowrooms();

  const handleUpdateStatus = (id: string, newStatus: string) => {
    localStore.updateBookingStatus(id, newStatus);
    setBookings(localStore.getBookings());
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-ink-12 pb-6">
        <div>
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">
            Showroom Reservations
          </span>
          <h1 className="font-display text-3xl text-emerald font-normal">Appointment Manager</h1>
        </div>
      </div>

      <div className="space-y-4">
        {bookings.length === 0 ? (
          <div className="rounded-xl border border-ink-12 bg-white p-12 text-center text-xs text-ink-50">
            No showroom appointments registered yet.
          </div>
        ) : (
          bookings.map((b) => {
            const showroom = showrooms.find((s) => s.id === b.showroomId);
            return (
              <div key={b.id} className="rounded-xl border border-ink-12 bg-white p-6 shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className={`px-2.5 py-1 rounded text-[10px] font-semibold uppercase tracking-wider ${
                      b.status === "CONFIRMED" ? "bg-emerald/10 text-emerald" : b.status === "CANCELLED" ? "bg-red-100 text-red-700" : "bg-amber-100 text-amber-800"
                    }`}>
                      {b.status}
                    </span>
                    <span className="text-xs text-ink-50 font-mono">
                      Ref: #{b.id}
                    </span>
                  </div>

                  <h3 className="font-display text-xl text-emerald font-normal">{b.customerName}</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 text-xs text-ink-70">
                    <p className="flex items-center gap-1.5">
                      <Phone className="h-3.5 w-3.5 text-gold" />
                      {b.phone}
                    </p>
                    <p className="flex items-center gap-1.5">
                      <Mail className="h-3.5 w-3.5 text-gold" />
                      {b.email || "No email"}
                    </p>
                    <p className="flex items-center gap-1.5 font-medium text-emerald">
                      <Clock className="h-3.5 w-3.5 text-gold" />
                      {b.date} ({b.timeSlot})
                    </p>
                    <p className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-gold" />
                      {showroom?.name || "C-Scheme Showroom"}
                    </p>
                  </div>

                  {b.notes && (
                    <div className="mt-2 text-xs bg-ivory/60 p-2.5 rounded border border-ink-12 text-ink-70 italic">
                      &quot;{b.notes}&quot;
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-2 border-t lg:border-t-0 pt-4 lg:pt-0 border-ink-12">
                  <a
                    href={`https://wa.me/${b.phone.replace(/\D/g, "")}?text=${encodeURIComponent(`Hello ${b.customerName}, regarding your appointment request for ${b.date} at Aranya Jewels...`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-emerald/30 bg-emerald/10 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-emerald hover:bg-emerald hover:text-ivory transition-all"
                  >
                    <MessageSquare className="h-3.5 w-3.5" />
                    WhatsApp
                  </a>
                  {b.status !== "CONFIRMED" && (
                    <button
                      onClick={() => handleUpdateStatus(b.id, "CONFIRMED")}
                      className="rounded-lg bg-emerald px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-ivory hover:bg-emerald-deep transition-all shadow-sm"
                    >
                      Confirm
                    </button>
                  )}
                  {b.status !== "CANCELLED" && (
                    <button
                      onClick={() => handleUpdateStatus(b.id, "CANCELLED")}
                      className="rounded-lg border border-red-200 bg-red-50 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-red-700 hover:bg-red-100 transition-all"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
