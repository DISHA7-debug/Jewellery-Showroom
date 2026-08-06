/**
 * Ch.7 — Sizing tokens. Named aspect ratios per Photography Bible
 * category, consumed by every image-bearing component instead of a
 * bespoke arbitrary-value ratio per instance (closes the Ch.25 "token
 * violation" anti-pattern previously present in Collections' inline
 * `aspect-[3/4.6]`).
 */
export const aspectRatio = {
  /** Editorial product/collection cover — the platform default. */
  portraitProduct: "aspect-[3/4]",
  /** The Collections gallery's one deliberately taller asymmetric card. */
  editorialTall: "aspect-[3/4.6]",
  /** Story/Craftsmanship framed portrait imagery. */
  storyPortrait: "aspect-[4/5]",
  /** Craftsmanship's macro-detail image. */
  squareDetail: "aspect-[1/1.1]",
} as const;

/** Ch.9 — hover scale, tokenized so no component invents its own value. */
export const hoverScale = {
  photography: "group-hover:scale-[1.045]",
} as const;
