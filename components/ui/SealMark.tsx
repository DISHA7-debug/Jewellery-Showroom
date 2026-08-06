/**
 * SealMark — the platform's brand hallmark, previously hand-duplicated
 * across Header, Footer, FinalCta, and Testimonial with drifting
 * implementations (one hardcoded #0E3B2E instead of the emerald token —
 * a Ch.25 "hardcoded colors" violation). Consolidated to one Server
 * Component, zero client JS.
 *
 * THE SIGNATURE MOMENT: a thin sweep of gold light crosses the engraved
 * ring — the visual echo of tilting a real hallmark stamp under a
 * showroom light to catch its engraving. This is deliberately the
 * platform's *only* bespoke, non-token motion pattern (Motion Bible §18
 * permits ceremonial exceptions used rarely; this mark is the one
 * signature device, used consistently rather than invented per-section).
 *
 * Two trigger modes, chosen per context rather than applied uniformly —
 * per Motion Bible §9, hover motion is reserved for genuinely interactive
 * elements:
 * - `interactive`: sweep plays on hover/focus (Header, Footer — always
 *   wrapped in the brand link). Pure CSS `:hover`/`:focus-visible` on
 *   the parent — no JavaScript, no client boundary.
 * - `ceremonial`: sweep plays once, automatically, on mount — reserved
 *   for the Final CTA's closing moment, the platform's one Hero-tier
 *   rarity per Motion Bible §18 ("ceremony that repeats stops being
 *   ceremony"). Implemented as a CSS animation with `animation-delay`
 *   timed to land after that section's RevealText settles, so it reads
 *   as the sentence's final, considered flourish rather than a
 *   simultaneous, competing motion.
 * - `static`: no sweep at all (Testimonial's verified-mark variant —
 *   a non-interactive, purely informational instance).
 *
 * Respects prefers-reduced-motion via a plain CSS media query — no
 * matchMedia/JS required, since this is a CSS-only animation.
 */
export function SealMark({
  variant = "brand",
  trigger = "static",
  className = "h-5 w-5",
}: {
  /** "brand" = A monogram (identity mark) | "check" = verified mark (Testimonial) */
  variant?: "brand" | "check";
  trigger?: "interactive" | "ceremonial" | "static";
  className?: string;
}) {
  return (
    <span
      className={`seal-mark seal-mark--${trigger} relative inline-block ${className}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 40 40" className="h-full w-full">
        <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="1" />
        {variant === "brand" ? (
          <text
            x="20"
            y="26"
            textAnchor="middle"
            fontFamily="var(--font-fraunces)"
            fontSize="16"
            fill="currentColor"
          >
            A
          </text>
        ) : (
          <path
            d="M13 20l5 5 9-10"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
          />
        )}
      </svg>
      {/* The sweep itself: a masked gold gradient, animated via
          background-position only (GPU-cheap, Motion Bible §16). */}
      <span className="seal-mark__sweep pointer-events-none absolute inset-0" />
    </span>
  );
}
