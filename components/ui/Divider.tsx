/**
 * Divider — Ch.8 Border System: a single hairline token, used only
 * where two content-heavy sections sharing the same background color
 * meet (Visual Blueprint §0: sections otherwise transition via the
 * next section's own background/palette shift, not a line). Currently
 * the only such pair on the Homepage is Story → Craftsmanship, both
 * on the ivory surface — without this seam they read as one
 * undifferentiated block rather than two distinct story beats.
 */
export function Divider({ className = "" }: { className?: string }) {
  return (
    <div className={`wrap ${className}`} aria-hidden="true">
      <div className="border-t border-ink-12" />
    </div>
  );
}
