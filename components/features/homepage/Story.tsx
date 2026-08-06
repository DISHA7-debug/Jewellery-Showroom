import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { story } from "@/data/homepage";
import { RevealText, RevealImage } from "@/components/ui/Reveal";

export function Story() {
  return (
    <section id="story" aria-labelledby="story-heading" className="py-section-y-sm lg:py-section-y">
      <div className="wrap grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-[6vw]">
        <div className="lg:col-span-5">
          <RevealImage className="relative aspect-[4/5]">
            <Image
              src={story.image.src}
              alt={story.image.alt}
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="scale-105 object-cover"
            />
            <div
              className="pointer-events-none absolute inset-5 border border-ivoryFade-50"
              aria-hidden="true"
            />
          </RevealImage>
        </div>

        <div className="lg:col-span-7">
          <RevealText weight="light">
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
              {story.eyebrow}
            </p>
          </RevealText>
          <RevealText weight="heavy">
            <h2
              id="story-heading"
              className="mb-7 max-w-[13ch] text-[clamp(1.875rem,3.6vw,2.875rem)] font-light"
            >
              {story.headline}
            </h2>
          </RevealText>

          {story.paragraphs.map((p, i) => (
            <RevealText key={p} delay={i * 0.1}>
              <p className="max-w-[46ch] text-base leading-[1.85] text-ink-70">{p}</p>
            </RevealText>
          ))}

          <RevealText>
            <dl className="mt-12 flex gap-13 sm:gap-[52px]">
              {story.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-display text-4xl text-emerald">{stat.value}</dd>
                  <p className="mt-1.5 text-xs uppercase tracking-wide text-ink-50">
                    {stat.label}
                  </p>
                </div>
              ))}
            </dl>
          </RevealText>

          <RevealText>
            <Link
              href="/about"
              className="group mt-11 inline-flex items-center gap-2.5 border-b border-ink pb-1.5 text-[13px] uppercase tracking-wide"
            >
              Read our full story
              <ArrowRight
                className="h-3.5 w-3.5 transition-transform duration-300 ease-luxury group-hover:translate-x-1.5"
                aria-hidden="true"
              />
            </Link>
          </RevealText>
        </div>
      </div>
    </section>
  );
}
