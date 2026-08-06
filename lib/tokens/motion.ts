/**
 * Ch.10 — Motion tokens. Maps the Motion Bible's semantic registers
 * (Settle, Reveal, Sequence, Response, Hero) to engineerable values.
 * Never invents new motion — every value here traces to a Motion
 * Bible section cited in the comment.
 */
export const easing = {
  /** Motion Bible §5 "Weighted" — the platform's most-used curve. */
  weighted: "cubic-bezier(0.22, 1, 0.36, 1)",
} as const;

export const duration = {
  /** Motion Bible §5 "Immediate" / micro-interaction feedback. */
  whisper: 0.25,
  /** Standard content reveal (RevealText). */
  settle: 0.9,
  /** Motion Bible §5 "Deliberate" — the clip-mask image wipe. */
  reveal: 1.1,
} as const;

export const stagger = {
  /** Trust Strip's fast "stamped into place" stagger. */
  fast: 0.07,
  /** Collection cards / process steps / branch lists. */
  standard: 0.09,
} as const;
