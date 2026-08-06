"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { testimonials } from "@/data/homepage";
import { SealMark } from "@/components/ui/SealMark";

/**
 * The single React-state-driven interaction on the page — this is why
 * Framer Motion is used here instead of GSAP (per the tooling decision):
 * enter/exit is tied to component state (`index`), which is exactly
 * Framer's strength, and fighting that with imperative GSAP timelines
 * would add complexity without benefit.
 *
 * Auto-rotates every 6.5s, pauses on hover/focus and after manual
 * interaction (accessibility requirement — auto-advancing content must
 * be user-controllable). aria-live="polite" announces changes without
 * being disruptive.
 */
export function Testimonial() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const clearTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
  }, []);

  useEffect(() => {
    if (paused || reduceMotion) return;
    clearTimer();
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 6500);
    return clearTimer;
  }, [paused, reduceMotion, clearTimer]);

  const current = testimonials[index]!;

  return (
    <section
      aria-labelledby="testimonial-heading"
      className="bg-stone py-section-y-sm lg:py-section-y"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <h2 id="testimonial-heading" className="sr-only">
        What our customers say
      </h2>
      <div className="wrap mx-auto max-w-[840px] text-center">
        <SealMark variant="check" trigger="static" className="mx-auto mb-10 h-[34px] w-[34px] text-emerald" />

        <div aria-live="polite" className="min-h-[9rem] sm:min-h-[7rem]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: reduceMotion ? 0 : 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reduceMotion ? 0 : -10 }}
              transition={{ duration: reduceMotion ? 0.01 : 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <blockquote className="font-display text-[clamp(1.5rem,3vw,2.25rem)] font-light leading-[1.5]">
                &ldquo;{current.quote}&rdquo;
              </blockquote>
              <div className="mt-9">
                <p className="text-sm font-semibold tracking-wide">{current.name}</p>
                <p className="mt-1 text-[13px] text-ink-50">{current.context}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-12 flex justify-center gap-2" role="tablist" aria-label="Testimonials">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              role="tab"
              aria-selected={i === index}
              aria-label={`Show testimonial from ${t.name}`}
              onClick={() => setIndex(i)}
              className={`h-[7px] rounded-full transition-all duration-300 ${
                i === index ? "w-[22px] bg-emerald" : "w-[7px] bg-ink-50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
