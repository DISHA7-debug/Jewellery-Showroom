import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  external?: boolean;
  className?: string;
  ariaLabel?: string;
};

/**
 * Filled action — reserved for the highest-intent action in a given
 * section (per Visual Blueprint: Appointment is primary in Visit section;
 * both actions are equal weight only in Final CTA, achieved by using
 * Secondary + Primary side by side there rather than two Primaries).
 */
export function PrimaryButton({
  href,
  children,
  external,
  className = "",
  ariaLabel,
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 rounded-full bg-emerald px-6 py-3 text-xs font-semibold uppercase tracking-wider text-ivory transition-[background-color,transform] duration-300 ease-luxury hover:bg-emerald-deep hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] active:duration-150";
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${className}`}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={`${base} ${className}`} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}

/** Outlined action — the lower-commitment or secondary channel. */
export function SecondaryButton({
  href,
  children,
  external,
  className = "",
  ariaLabel,
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 rounded-full border border-ink px-6 py-3 text-xs font-semibold uppercase tracking-wider text-ink transition-[background-color,color,transform] duration-300 ease-luxury hover:bg-ink hover:text-ivory active:scale-[0.98] active:duration-150";
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${className}`}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={`${base} ${className}`} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}
