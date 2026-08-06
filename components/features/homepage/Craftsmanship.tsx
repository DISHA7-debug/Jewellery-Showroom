import Image from "next/image";
import { craftSteps, craftImage } from "@/data/homepage";
import { RevealText, RevealImage, RevealStagger } from "@/components/ui/Reveal";

/**
 * Genuinely sequential content (design → cast/set → hallmark) — the
 * numbered list is justified here, unlike decorative 01/02/03 markers
 * elsewhere would be (per frontend-design guidance). Semantic <ol> so
 * the sequence is conveyed to assistive tech, not just visually implied.
 */
export function Craftsmanship() {
  return (
    <section id="craft" aria-labelledby="craft-heading" className="py-section-y-sm lg:py-section-y">
      <div className="wrap grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-[6vw]">
        <div className="order-2 lg:order-1 lg:col-span-7">
          <RevealText weight="light">
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
              Craftsmanship
            </p>
          </RevealText>
          <RevealText weight="heavy">
            <h2
              id="craft-heading"
              className="mb-9 max-w-[12ch] text-[clamp(1.875rem,3.6vw,2.875rem)] font-light"
            >
              From sketch to hallmark.
            </h2>
          </RevealText>

          <RevealStagger as="ol" className="flex flex-col" staggerMs={110}>
            {craftSteps.map((step, i) => (
              <li
                key={step.index}
                className={`grid grid-cols-[56px_1fr] gap-5 py-6 border-t border-ink-12 ${
                  i === craftSteps.length - 1 ? "border-b" : ""
                }`}
              >
                <span className="pt-0.5 font-display text-sm text-gold" aria-hidden="true">
                  {step.index}
                </span>
                <div>
                  <h3 className="mb-2 font-display text-[19px] font-normal">
                    {step.title}
                  </h3>
                  <p className="max-w-[42ch] text-sm leading-[1.7] text-ink-70">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </RevealStagger>
        </div>

        <div className="order-1 lg:order-2 lg:col-span-5">
          <RevealImage className="relative aspect-[1/1.1]">
            <Image
              src={craftImage.src}
              alt={craftImage.alt}
              fill
              sizes="(min-width: 1024px) 35vw, 90vw"
              className="object-cover"
            />
          </RevealImage>
        </div>
      </div>
    </section>
  );
}
