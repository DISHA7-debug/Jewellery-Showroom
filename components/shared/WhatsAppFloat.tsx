import { brand } from "@/data/homepage";

/**
 * Fixed, low-weight, no pulse/badge (Visual Blueprint §10 — pulsing reads
 * as manufactured urgency, explicitly excluded by the Design Bible).
 * Uses the platform's own emerald accent rather than WhatsApp's brand
 * green: WhatsApp is the channel, not the brand voice.
 */
export function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${brand.whatsappNumber}?text=${brand.waMessage()}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Enquire on WhatsApp"
      className="fixed bottom-7 right-7 z-[90] grid h-14 w-14 place-items-center rounded-full bg-emerald text-ivory shadow-[0_8px_24px_rgba(14,59,46,0.35)] transition-transform duration-300 ease-luxury hover:scale-[1.06]"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.42 1.32 4.9L2 22l5.31-1.39a9.9 9.9 0 0 0 4.73 1.2h.01c5.46 0 9.9-4.45 9.9-9.9 0-2.64-1.03-5.13-2.9-7-1.87-1.87-4.36-2.9-7.01-2.9zm0 18.13c-1.47 0-2.91-.4-4.16-1.14l-.3-.18-3.15.82.84-3.07-.19-.32a8.13 8.13 0 0 1-1.25-4.33c0-4.5 3.66-8.16 8.17-8.16 2.18 0 4.23.85 5.77 2.4a8.1 8.1 0 0 1 2.39 5.77c0 4.5-3.67 8.21-8.12 8.21z" />
      </svg>
    </a>
  );
}
