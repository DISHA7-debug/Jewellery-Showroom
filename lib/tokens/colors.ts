/**
 * Ch.3 — Primitive color tokens.
 * The ONLY file in the codebase permitted to contain raw hex values.
 * Every other token (semantic/surface/text) and every component
 * references these indirectly, never a hex value directly (Ch.25,
 * "hardcoded colors" anti-pattern).
 */
export const colorPrimitives = {
  ivory: "#F6F2EA",
  ink: "#15130F",
  gold: "#B08D57",
  goldSoft: "#C9AC7C",
  emerald: "#0E3B2E",
  emeraldDeep: "#0A2E23",
  stone: "#DCD2BE",
} as const;

/**
 * Ch.3 — Semantic tokens. Describe purpose, not appearance.
 * This is the platform's white-label seam (Ch.3 "Future theming
 * strategy"): a tenant substitutes primitives, semantic structure
 * never changes.
 */
export const colorSemantics = {
  actionPrimary: colorPrimitives.emerald,
  actionPrimaryHover: colorPrimitives.emeraldDeep,
  actionSecondary: "transparent",
  surfaceDefault: colorPrimitives.ivory,
  surfaceInverted: colorPrimitives.ink,
  surfaceMuted: colorPrimitives.stone,
  textHeading: colorPrimitives.ink,
  textOnInverted: colorPrimitives.ivory,
  accentGold: colorPrimitives.gold,
  accentGoldSoft: colorPrimitives.goldSoft,
} as const;

/** Ch.3 — opacity-scaled Ink/Ivory pairs for text-on-surface combinations. */
export const colorOpacity = {
  ink70: "rgba(21,19,15,0.70)",
  ink50: "rgba(21,19,15,0.50)",
  ink12: "rgba(21,19,15,0.12)",
  ivory70: "rgba(246,242,234,0.72)",
  ivory50: "rgba(246,242,234,0.5)",
  ivory12: "rgba(246,242,234,0.12)",
} as const;
