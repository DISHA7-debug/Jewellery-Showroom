import Image from "next/image";
import { CalendarDays } from "lucide-react";
import { branches, visitImage, brand } from "@/data/homepage";
import { RevealText, RevealImage, RevealStagger } from "@/components/ui/Reveal";
import { PrimaryButton, SecondaryButton } from "@/components/ui/Button";

export function Visit() {
  return (
    <section id="visit" aria-labelledby="visit-heading" className="grid grid-cols-1 lg:grid-cols-2">
      <RevealImage className="relative min-h-[420px] lg:min-h-[640px]">
        <Image
          src={visitImage.src}
          alt={visitImage.alt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      </RevealImage>

      <div className="flex flex-col justify-center bg-ivory px-6 py-20 sm:px-8 lg:px-[6vw] lg:py-[110px]">
        <RevealText weight="light">
          <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
            Visit Us
          </p>
        </RevealText>
        <RevealText weight="heavy">
          <h2
            id="visit-heading"
            className="mb-6 max-w-[12ch] text-[clamp(1.875rem,3.4vw,2.75rem)] font-light"
          >
            Two showrooms. One standard.
          </h2>
        </RevealText>
        <RevealText>
          <p className="mb-11 max-w-[42ch] text-[15px] leading-[1.8] text-ink-70">
            Walk in, or reserve a private viewing and one of our consultants
            will set aside pieces from your collection of interest before you
            arrive.
          </p>
        </RevealText>

        <RevealStagger className="mb-11 flex flex-col" staggerMs={100}>
          {branches.map((b, i) => (
            <div
              key={b.name}
              className={`flex items-start justify-between gap-5 py-5 border-t border-ink-12 ${
                i === branches.length - 1 ? "border-b" : ""
              }`}
            >
              <div>
                <p className="mb-1.5 font-display text-[17px]">{b.name}</p>
                <p className="max-w-[32ch] text-[13px] leading-[1.6] text-ink-70">
                  {b.address}
                </p>
              </div>
              <p className="whitespace-nowrap text-right text-xs text-ink-50">
                {b.hours}
              </p>
            </div>
          ))}
        </RevealStagger>

        <RevealText>
          <div id="appointment" className="flex flex-wrap gap-4">
            <PrimaryButton href="/book-appointment" ariaLabel="Book an appointment">
              <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
              Book an Appointment
            </PrimaryButton>
            <SecondaryButton
              href={`https://wa.me/${brand.whatsappNumber}?text=${brand.waMessage("planning a visit")}`}
              external
              ariaLabel="Enquire about a visit on WhatsApp"
            >
              Enquire on WhatsApp
            </SecondaryButton>
          </div>
        </RevealText>
      </div>
    </section>
  );
}
