import { brand } from "@/data/homepage";
import { RevealText } from "@/components/ui/Reveal";
import { PrimaryButton, SecondaryButton } from "@/components/ui/Button";
import { SealMark } from "@/components/ui/SealMark";

export function FinalCta() {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="relative overflow-hidden bg-ivory py-24 sm:py-32 lg:py-40 text-center text-ink border-t border-ink-12"
    >
      {/* Background delicate gold glow / accent lines */}
      <div 
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent opacity-80" 
        aria-hidden="true"
      />

      <div className="wrap relative z-10 max-w-4xl mx-auto">
        <SealMark
          trigger="ceremonial"
          variant="brand"
          className="mx-auto mb-8 h-12 w-12 text-gold opacity-90"
        />

        <RevealText weight="light">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">
            Jaipur Workshop & Showrooms
          </p>
        </RevealText>

        <RevealText weight="heavy">
          <h2
            id="final-cta-heading"
            className="mx-auto mb-6 max-w-[20ch] text-[clamp(2.25rem,4.5vw,3.75rem)] font-light leading-[1.1] font-display text-emerald"
          >
            Some things must be felt in person.
          </h2>
        </RevealText>

        <RevealText>
          <p className="mx-auto mb-12 max-w-[50ch] text-base leading-[1.8] text-ink-70">
            The balance of solid 22K gold, the clarity of hand-set Kundan, and the whisper of three generations of craft. We invite you to a private viewing in Jaipur.
          </p>
        </RevealText>

        <RevealText>
          <div className="flex flex-wrap justify-center items-center gap-5">
            <PrimaryButton
              href="/book"
              className="bg-emerald text-ivory hover:bg-emerald-deep px-8 py-3.5 text-xs uppercase tracking-widest"
            >
              Book Private Viewing
            </PrimaryButton>
            <SecondaryButton
              href={`https://wa.me/${brand.whatsappNumber}?text=${brand.waMessage("a private viewing request")}`}
              external
              className="border-gold/60 text-ink hover:bg-gold/10 px-8 py-3.5 text-xs uppercase tracking-widest"
              ariaLabel="Enquire on WhatsApp"
            >
              WhatsApp Concierge
            </SecondaryButton>
          </div>
        </RevealText>

        <div className="mt-16 flex justify-center items-center gap-6 text-[11px] uppercase tracking-widest text-ink-50 font-medium">
          <span>BIS 916 Hallmarked</span>
          <span className="h-1 w-1 rounded-full bg-gold/60" aria-hidden="true" />
          <span>Jaipur · Est. 1962</span>
          <span className="h-1 w-1 rounded-full bg-gold/60" aria-hidden="true" />
          <span>By Appointment Only</span>
        </div>
      </div>
    </section>
  );
}
