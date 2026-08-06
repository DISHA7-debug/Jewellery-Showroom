"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Runs once on mount: the load-time entrance sequence unique to the hero
 * (split-line clip reveal + staggered fade-ins), plus the hero's scroll-tied
 * parallax. Kept separate from Hero.tsx so that component stays a Server
 * Component — this wrapper only reads refs via querySelector on its own
 * subtree, it never holds or transforms the actual content data.
 */
export function HeroEntrance({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const section = root.current?.closest("section");
    if (!section) return;

    const ctx = gsap.context(() => {
      const lines = section.querySelectorAll("[data-hero-line]");
      const eyebrow = section.querySelector("[data-hero-eyebrow]");
      const sub = section.querySelector("[data-hero-sub]");
      const actions = section.querySelector("[data-hero-actions]");
      const media = section.querySelector("[data-hero-media] img");

      if (reduced) {
        gsap.set([lines, eyebrow, sub, actions], { opacity: 1, y: 0 });
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        lines,
        { yPercent: 110 },
        { yPercent: 0, duration: 1.1, stagger: 0.12 }
      )
        .fromTo(eyebrow, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.7 }, "-=0.7")
        .fromTo(sub, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.7 }, "-=0.5")
        .fromTo(actions, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.7 }, "-=0.5");

      // Subtle parallax — background drifts slower than scroll, ~10%.
      if (media) {
        gsap.to(media, {
          yPercent: 10,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, root);

    return () => ctx.revert();
  }, []);

  return <div ref={root}>{children}</div>;
}
