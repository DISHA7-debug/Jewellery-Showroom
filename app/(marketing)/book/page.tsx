"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { localStore } from "@/lib/db";
import { Calendar, Clock, MapPin, CheckCircle2, User, Phone, Mail } from "lucide-react";

function BookingFormContent() {
  const searchParams = useSearchParams();
  const preselectedProduct = searchParams.get("product");

  const showrooms = localStore.getShowrooms();
  const products = localStore.getProducts();

  const [selectedShowroom, setSelectedShowroom] = useState(showrooms[0]?.id || "");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("11:00 AM - 12:00 PM");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const timeSlots = [
    "10:30 AM - 11:30 AM",
    "11:30 AM - 12:30 PM",
    "02:30 PM - 03:30 PM",
    "04:00 PM - 05:00 PM",
    "05:30 PM - 06:30 PM",
    "06:30 PM - 07:30 PM",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !name || !phone) {
      setErrorMsg("Please fill out all required fields.");
      return;
    }

    setIsSubmitting(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          showroomId: selectedShowroom,
          customerName: name,
          phone,
          email,
          date: selectedDate,
          timeSlot: selectedSlot,
          notes: preselectedProduct ? `Interested in: ${preselectedProduct}. ${notes}` : notes,
        }),
      });

      if (res.ok) {
        setIsSuccess(true);
      } else {
        setErrorMsg("Something went wrong. Please try again or reach out on WhatsApp.");
      }
    } catch (err) {
      setErrorMsg("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="wrap max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">
          Private Showroom Suite
        </span>
        <h1 className="font-display text-4xl sm:text-5xl font-light text-emerald mt-2 mb-4">
          Book a Private Viewing
        </h1>
        <p className="text-base text-ink-70 max-w-xl mx-auto leading-relaxed">
          Reserve a private suite at our Jaipur showrooms to view fine gold and bridal jewellery with a senior karigar.
        </p>
      </div>

      {isSuccess ? (
        <div className="rounded-2xl border border-emerald/30 bg-white/80 p-10 sm:p-14 text-center space-y-5 shadow-lg">
          <CheckCircle2 className="mx-auto h-16 w-16 text-emerald" />
          <h2 className="font-display text-3xl text-emerald font-normal">
            Appointment Requested
          </h2>
          <p className="text-sm text-ink-70 max-w-md mx-auto leading-relaxed">
            Thank you, <span className="font-semibold text-ink">{name}</span>. We have received your private viewing request for <span className="font-semibold text-emerald">{selectedDate}</span> ({selectedSlot}). Our showroom manager will confirm via WhatsApp within 2 hours.
          </p>
          <div className="pt-4 border-t border-ink-12 flex justify-center gap-4">
            <a
              href={`https://wa.me/919999999999?text=Hello%20Aranya%20Jewels,%20I%20just%20submitted%20booking%20request%20for%20${encodeURIComponent(name)}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald px-6 py-3 text-xs uppercase tracking-wider text-ivory hover:bg-emerald-deep transition-all font-semibold"
            >
              Verify on WhatsApp
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="rounded-2xl border border-ink-12 bg-white/70 p-6 sm:p-10 shadow-sm space-y-8">
          {errorMsg && (
            <div className="rounded-lg bg-red-50 border border-red-200 p-4 text-xs text-red-700">
              {errorMsg}
            </div>
          )}

          {/* Step 1: Showroom Selection */}
          <div>
            <label className="block font-display text-lg text-emerald mb-3 flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gold" />
              1. Select Showroom Location
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {showrooms.map((shr) => (
                <div
                  key={shr.id}
                  onClick={() => setSelectedShowroom(shr.id)}
                  className={`cursor-pointer rounded-xl border p-4 transition-all ${
                    selectedShowroom === shr.id
                      ? "border-gold bg-gold/10 shadow-sm"
                      : "border-ink-12 hover:border-gold/50 bg-white/50"
                  }`}
                >
                  <h4 className="font-semibold text-sm text-ink">{shr.name}</h4>
                  <p className="text-xs text-ink-70 mt-1">{shr.address}</p>
                  <span className="inline-block mt-2 text-[10px] uppercase tracking-wider text-gold font-medium">
                    {shr.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Step 2: Date & Time Slot */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-ink-12 pt-6">
            <div>
              <label className="block font-display text-lg text-emerald mb-3 flex items-center gap-2">
                <Calendar className="h-4 w-4 text-gold" />
                2. Preferred Date *
              </label>
              <input
                type="date"
                required
                min={new Date().toISOString().split("T")[0]}
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full rounded-lg border border-ink-12 bg-white px-4 py-3 text-xs text-ink focus:border-gold focus:outline-none"
              />
            </div>
            <div>
              <label className="block font-display text-lg text-emerald mb-3 flex items-center gap-2">
                <Clock className="h-4 w-4 text-gold" />
                3. Time Slot *
              </label>
              <select
                value={selectedSlot}
                onChange={(e) => setSelectedSlot(e.target.value)}
                className="w-full rounded-lg border border-ink-12 bg-white px-4 py-3 text-xs text-ink focus:border-gold focus:outline-none"
              >
                {timeSlots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Step 3: Customer Details */}
          <div className="border-t border-ink-12 pt-6 space-y-4">
            <h3 className="font-display text-lg text-emerald flex items-center gap-2">
              <User className="h-4 w-4 text-gold" />
              4. Your Details
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-ink-70 font-medium mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Radhika Sharma"
                  className="w-full rounded-lg border border-ink-12 bg-white px-4 py-2.5 text-xs text-ink focus:border-gold focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-ink-70 font-medium mb-1">
                  Phone / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="w-full rounded-lg border border-ink-12 bg-white px-4 py-2.5 text-xs text-ink focus:border-gold focus:outline-none"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-[11px] uppercase tracking-wider text-ink-70 font-medium mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full rounded-lg border border-ink-12 bg-white px-4 py-2.5 text-xs text-ink focus:border-gold focus:outline-none"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-[11px] uppercase tracking-wider text-ink-70 font-medium mb-1">
                  Specific Pieces or Notes
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Mention any specific necklace, bridal edit, or custom diamond preferences..."
                  className="w-full rounded-lg border border-ink-12 bg-white px-4 py-2.5 text-xs text-ink focus:border-gold focus:outline-none"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-lg bg-emerald py-4 text-xs font-semibold uppercase tracking-widest text-ivory hover:bg-emerald-deep transition-all shadow-md"
          >
            {isSubmitting ? "Submitting Booking..." : "Confirm Private Appointment"}
          </button>
        </form>
      )}
    </section>
  );
}

export default function BookAppointmentPage() {
  return (
    <div className="min-h-screen bg-ivory text-ink">
      <Header />

      <main className="pt-28 pb-24 lg:pt-36 lg:pb-32">
        <Suspense fallback={<div className="text-center py-20 text-xs text-ink-50">Loading appointment suite...</div>}>
          <BookingFormContent />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
