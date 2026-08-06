import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { branches, brand } from "@/data/homepage";
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";

export const metadata = {
  title: "Contact & Showrooms — Aranya Jewels Jaipur",
  description: "Get in touch with Aranya Jewels in Jaipur. Showroom addresses, phone numbers, hours, and direct WhatsApp concierge.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-ivory text-ink">
      <Header />

      <main className="pt-28 pb-24 lg:pt-36 lg:pb-32">
        <section className="wrap max-w-4xl mx-auto text-center mb-16">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold mb-3">
            Concierge & Assistance
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-light text-emerald mb-4">
            Connect With Aranya
          </h1>
          <p className="text-base text-ink-70 max-w-lg mx-auto">
            Whether inquiring about bespoke bridal commissions, BIS hallmark details, or private appointments in Jaipur, we welcome your message.
          </p>
        </section>

        <section className="wrap grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Showroom Cards */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-display text-2xl text-emerald">Our Jaipur Locations</h2>
            {branches.map((b) => (
              <div key={b.name} className="rounded-xl border border-ink-12 bg-white/70 p-6 space-y-3 shadow-sm">
                <h3 className="font-semibold text-lg text-ink flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-gold" />
                  {b.name}
                </h3>
                <p className="text-xs text-ink-70 leading-relaxed">{b.address}</p>
                <div className="flex items-center gap-2 text-xs text-emerald font-medium pt-1">
                  <Clock className="h-3.5 w-3.5" />
                  {b.hours}
                </div>
              </div>
            ))}

            <div className="rounded-xl border border-emerald/30 bg-emerald/5 p-6 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-emerald uppercase tracking-wider">
                  Instant WhatsApp Concierge
                </p>
                <p className="text-xs text-ink-70 mt-0.5">
                  Direct message with our Senior Karigar
                </p>
              </div>
              <a
                href={`https://wa.me/${brand.whatsappNumber}?text=${brand.waMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-ivory hover:bg-emerald-deep transition-all"
              >
                <MessageSquare className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Direct Message Form */}
          <div className="lg:col-span-6 rounded-2xl border border-ink-12 bg-white/80 p-8 shadow-sm">
            <h2 className="font-display text-2xl text-emerald mb-6">Send a Message</h2>
            <form className="space-y-4 text-xs">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-ink-70 font-medium mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  className="w-full rounded-lg border border-ink-12 bg-ivory/50 px-4 py-2.5 text-ink focus:border-gold focus:outline-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-ink-70 font-medium mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91..."
                    className="w-full rounded-lg border border-ink-12 bg-ivory/50 px-4 py-2.5 text-ink focus:border-gold focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-ink-70 font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="email@example.com"
                    className="w-full rounded-lg border border-ink-12 bg-ivory/50 px-4 py-2.5 text-ink focus:border-gold focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-ink-70 font-medium mb-1">
                  Message or Bespoke Inquiry
                </label>
                <textarea
                  rows={4}
                  placeholder="How can our Jaipur concierge assist you today?"
                  className="w-full rounded-lg border border-ink-12 bg-ivory/50 px-4 py-2.5 text-ink focus:border-gold focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-ink py-3.5 text-xs font-semibold uppercase tracking-widest text-ivory hover:bg-emerald transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
