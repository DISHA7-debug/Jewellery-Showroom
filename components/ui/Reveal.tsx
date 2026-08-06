"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { duration, stagger } from "@/lib/tokens/motion";

/**
 * Three reveal primitives implement the ENTIRE site-wide motion grammar
 * defined in the Visual Blueprint (Section 11). No section should ever
 * write bespoke GSAP timelines — every reveal on the homepage composes
 * from these three, which is what keeps the motion feeling authored
 * rather than assembled, and keeps the codebase maintainable across
 * every future agency deployment.
 *
 * All three:
 * - animate only `transform` + `opacity`/`clip-path` (GPU-accelerated,
 *   never trigger layout/paint of surrounding content)
 * - run once (`once: true`) — luxury motion does not replay on re-scroll
 * - collapse to the final state instantly under prefers-reduced-motion
 */

const EASE = "power3.out";

function useReducedMotion() {
  const ref = useRef(false);
  useEffect(() => {
    ref.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
  }, []);
  return ref;
}

/**
 * Fade + rise — used for all text blocks (headlines, paragraphs, CTAs).
 * `weight` subtly calibrates rise-distance and duration to content role
 * so an eyebrow, a headline, and a paragraph don't all move identically
 * — a small, load-bearing distinction: undifferentiated motion across
 * every text size is one of the clearest tells of an auto-generated
 * page. Values stay within the Settle-token family (Motion Bible §17);
 * this is calibration, not a new motion pattern.
 */
export function RevealText({
  children,
  className,
  delay = 0,
  weight = "default",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** "light" (eyebrows/labels) | "default" (body/headlines) | "heavy" (display headlines) */
  weight?: "light" | "default" | "heavy";
}) {
  const el = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const rise = weight === "light" ? 12 : weight === "heavy" ? 28 : 22;
  const extraDuration = weight === "heavy" ? 0.15 : weight === "light" ? -0.15 : 0;

  useEffect(() => {
    if (!el.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.current,
        { opacity: 0, y: reduced.current ? 0 : rise },
        {
          opacity: 1,
          y: 0,
          duration: reduced.current ? 0.01 : duration.settle + extraDuration,
          delay: reduced.current ? 0 : delay,
          ease: EASE,
          scrollTrigger: {
            trigger: el.current,
            start: "top 88%",
            once: true,
          },
        }
      );
    }, el);
    return () => ctx.revert();
  }, [delay, reduced, rise, extraDuration]);

  return (
    <div ref={el} className={className}>
      {children}
    </div>
  );
}

/**
 * Vertical clip-mask wipe — used for EVERY image reveal on the page
 * (hero excluded, which has its own load-time sequence). This is the
 * "unveiling" motif from the Visual Blueprint: consistent direction,
 * consistent duration, everywhere an image enters the viewport.
 */
export function RevealImage({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const el = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!el.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.current,
        { clipPath: reduced.current ? "inset(0 0 0% 0)" : "inset(0 0 100% 0)" },
        {
          clipPath: "inset(0 0 0% 0)",
          duration: reduced.current ? 0.01 : duration.reveal,
          ease: "power4.out",
          scrollTrigger: {
            trigger: el.current,
            start: "top 85%",
            once: true,
          },
        }
      );
    }, el);
    return () => ctx.revert();
  }, [reduced]);

  return (
    <div ref={el} className={`overflow-hidden ${className ?? ""}`}>
      {children}
    </div>
  );
}

/**
 * Sequential stagger — used for structured/ordered content: trust facts,
 * collection cards, process steps, branch lists. Each child reveals in
 * reading order, never as a simultaneous block, per the Visual Blueprint's
 * rule that sequential content should read as sequential.
 */
export function RevealStagger({
  children,
  className,
  staggerMs = stagger.standard * 1000,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  staggerMs?: number;
  /** Render as a semantic element (e.g. "ol" for genuinely ordered content). */
  as?: "div" | "ol" | "ul";
}) {
  const el = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!el.current) return;
    const items = el.current.children;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        items,
        { opacity: 0, y: reduced.current ? 0 : 26 },
        {
          opacity: 1,
          y: 0,
          duration: reduced.current ? 0.01 : duration.settle,
          ease: EASE,
          stagger: reduced.current ? 0 : staggerMs / 1000,
          scrollTrigger: {
            trigger: el.current,
            start: "top 85%",
            once: true,
          },
        }
      );
    }, el);
    return () => ctx.revert();
  }, [reduced, staggerMs]);

  return (
    <Tag ref={el as never} className={className}>
      {children}
    </Tag>
  );
}
