import { Stamp, History, Users, Gem } from "lucide-react";
import { trustFacts } from "@/data/homepage";
import { RevealStagger } from "@/components/ui/Reveal";

const ICONS = { stamp: Stamp, history: History, users: Users, gem: Gem };

/**
 * Deliberately the most compressed, low-whitespace moment on the page
 * (Visual Blueprint §2) — its job is rapid credibility, not storytelling.
 * No hover states: these are facts, not interactive elements.
 */
export function TrustStrip() {
  return (
    <div className="border-y border-ink-12 bg-stone/30 py-8">
      <RevealStagger
        className="wrap flex flex-wrap items-center justify-between gap-x-14 gap-y-7 sm:grid sm:grid-cols-2 lg:flex lg:grid-cols-none"
        staggerMs={70}
      >
        {trustFacts.map((fact) => {
          const Icon = ICONS[fact.icon];
          return (
            <div key={fact.label} className="flex items-center gap-3">
              <Icon
                className="h-[22px] w-[22px] flex-shrink-0 text-emerald"
                aria-hidden="true"
                strokeWidth={1.25}
              />
              <span className="text-[13px] text-ink-70">{fact.label}</span>
            </div>
          );
        })}
      </RevealStagger>
    </div>
  );
}
