import Link from "next/link";
import { brand } from "@/data/homepage";
import { SealMark } from "@/components/ui/SealMark";

export function Footer() {
  return (
    <footer className="bg-ink px-6 pb-12 pt-20 text-ivory sm:px-8 lg:px-[6vw] border-t border-gold/30 relative overflow-hidden">
      {/* Top Gold Accent Line */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-60" />

      {/* Top Colophon Brand Seal */}
      <div className="wrap border-b border-white/10 pb-12 mb-14 text-center">
        <SealMark
          trigger="interactive"
          variant="brand"
          className="mx-auto mb-5 h-10 w-10 text-gold"
        />
        <h3 className="font-display text-2xl tracking-widest uppercase text-ivory mb-1.5 font-normal">
          {brand.name}
        </h3>
        <p className="text-[11px] uppercase tracking-[0.25em] text-gold font-medium">
          Jaipur · Est. 1962 · Three Generations of Hand-Set Craft
        </p>
      </div>

      <div className="wrap grid grid-cols-1 gap-10 border-b border-white/10 pb-14 sm:grid-cols-2 lg:grid-cols-4">
        {/* Column 1: The House */}
        <div className="space-y-3.5">
          <h5 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
            The House
          </h5>
          <p className="text-xs leading-[1.85] text-ivory/80">
            Founded in 1962 by Radheshyam Soni in Jaipur. Every piece is hand-sketched, cast, and set by master karigars under strict 22K BIS hallmark standards.
          </p>
          <div className="pt-1">
            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 text-xs text-gold hover:text-white transition-colors uppercase tracking-wider font-semibold"
            >
              Discover Our Heritage →
            </Link>
          </div>
        </div>

        {/* Column 2: Collections */}
        <div>
          <h5 className="mb-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
            Curated Edits
          </h5>
          <ul className="flex flex-col gap-2.5 text-xs text-ivory/80">
            <li>
              <Link href="/collections/bridal-edit" className="hover:text-gold transition-colors">
                The Bridal Edit (Kundan & Emeralds)
              </Link>
            </li>
            <li>
              <Link href="/collections/temple-heritage" className="hover:text-gold transition-colors">
                Temple & Heritage Nakshi
              </Link>
            </li>
            <li>
              <Link href="/collections/everyday-fine" className="hover:text-gold transition-colors">
                Everyday Fine Gold & Solitaires
              </Link>
            </li>
            <li className="pt-1">
              <Link href="/collections" className="text-gold font-semibold hover:text-white transition-colors">
                View All Collections →
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Showrooms */}
        <div>
          <h5 className="mb-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
            Jaipur Showrooms
          </h5>
          <div className="space-y-3 text-xs text-ivory/80">
            <div>
              <p className="font-semibold text-ivory">C-Scheme Private Suite</p>
              <p className="text-[11px] text-ivory/70">14 Prithviraj Road, C-Scheme</p>
              <p className="text-[10px] text-gold/80 mt-0.5">Mon–Sat: 10:30 AM – 8:00 PM</p>
            </div>
            <div>
              <p className="font-semibold text-ivory">Johari Bazaar Flagship</p>
              <p className="text-[11px] text-ivory/70">Shop 22, Johari Bazaar</p>
              <p className="text-[10px] text-gold/80 mt-0.5">Mon–Sun: 10:00 AM – 8:30 PM</p>
            </div>
            <Link href="/visit" className="inline-block text-gold text-[11px] uppercase tracking-wider font-semibold hover:text-white">
              Showroom Information →
            </Link>
          </div>
        </div>

        {/* Column 4: Client Services & Admin */}
        <div>
          <h5 className="mb-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
            Client Concierge
          </h5>
          <ul className="flex flex-col gap-2.5 text-xs text-ivory/80">
            <li>
              <Link href="/book" className="text-ivory font-semibold hover:text-gold transition-colors">
                Book Private Viewing
              </Link>
            </li>
            <li>
              <a
                href={`https://wa.me/${brand.whatsappNumber}?text=${brand.waMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors"
              >
                WhatsApp (+91 {brand.whatsappNumber.slice(2)})
              </a>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gold transition-colors">
                Contact & General Enquiries
              </Link>
            </li>
            <li className="pt-3 border-t border-white/10">
              <Link href="/admin" className="text-gold hover:text-white transition-colors text-[11px] uppercase tracking-widest font-semibold flex items-center gap-1.5">
                <span>🔒</span> Owner CMS Console
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Catalogue Colophon */}
      <div className="wrap flex flex-wrap items-center justify-between gap-4 pt-6 text-[11px] uppercase tracking-wider text-ivory/60">
        <div>
          © {new Date().getFullYear()} {brand.name} Platform · All rights reserved.
        </div>
        <div className="flex items-center gap-4 text-gold/80 font-medium">
          <span>BIS 916 Hallmarked</span>
          <span>·</span>
          <span>Jaipur 26.9124° N, 75.7873° E</span>
        </div>
      </div>
    </footer>
  );
}
