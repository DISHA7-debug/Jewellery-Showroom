import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import { branches, visitImage } from "@/data/homepage";
import { MapPin, Clock, Calendar, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Visit Our Showrooms — Aranya Jewels Jaipur",
  description: "Visit Aranya Jewels at C-Scheme and Johari Bazaar in Jaipur. Private viewing suites, personal karigar consultations.",
};

export default function VisitPage() {
  return (
    <div className="min-h-screen bg-ivory text-ink">
      <Header />

      <main className="pt-28 pb-24 lg:pt-36 lg:pb-32">
        <section className="wrap max-w-4xl mx-auto text-center mb-16">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold mb-3">
            Jaipur Showrooms & Private Suite
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-light text-emerald mb-4">
            Visit Aranya in Jaipur
          </h1>
          <p className="text-base text-ink-70 max-w-xl mx-auto">
            Experience our fine jewellery collections in person. Feel the weight of 22K gold, examine stone cuts under workbench lighting, and consult with our master goldsmiths.
          </p>
        </section>

        <section className="wrap grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-6 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-ink-12">
            <Image
              src={visitImage.src}
              alt={visitImage.alt}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
              Private Viewing Suite
            </span>
            <h2 className="font-display text-3xl text-emerald font-normal">
              An Unhurried Experience
            </h2>
            <p className="text-sm sm:text-base text-ink-70 leading-[1.8]">
              Our C-Scheme private viewing suite is designed for bridal consultations and bespoke family commissions. Enjoy traditional Rajasthani hospitality in a secure, private room tailored for your family.
            </p>
            <div className="pt-4 border-t border-ink-12">
              <Link
                href="/book"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald px-6 py-3.5 text-xs font-semibold uppercase tracking-widest text-ivory hover:bg-emerald-deep transition-all shadow"
              >
                <Calendar className="h-4 w-4" />
                Reserve Private Appointment
              </Link>
            </div>
          </div>
        </section>

        <section className="wrap grid grid-cols-1 sm:grid-cols-2 gap-8">
          {branches.map((b) => (
            <div key={b.name} className="rounded-2xl border border-ink-12 bg-white/80 p-8 shadow-sm space-y-4">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-gold">
                Showroom Address
              </span>
              <h3 className="font-display text-2xl text-emerald">{b.name}</h3>
              <p className="text-sm text-ink-70 leading-relaxed">{b.address}</p>
              <div className="flex items-center gap-2 text-xs font-medium text-ink pt-2">
                <Clock className="h-4 w-4 text-emerald" />
                {b.hours}
              </div>
              <div className="pt-4 border-t border-ink-12 flex items-center justify-between">
                <Link href="/book" className="text-xs font-semibold uppercase tracking-wider text-emerald hover:text-gold transition-colors inline-flex items-center gap-1">
                  Book Visit <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}
