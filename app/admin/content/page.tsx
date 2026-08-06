"use client";

import { useState } from "react";
import { hero, story } from "@/data/homepage";
import { FileText, Save, CheckCircle2 } from "lucide-react";

export default function AdminContentPage() {
  const [heroEyebrow, setHeroEyebrow] = useState(hero.eyebrow);
  const [heroLine1, setHeroLine1] = useState(hero.headlineLines[0]);
  const [heroLine2, setHeroLine2] = useState(hero.headlineLines[1]);
  const [heroSub, setHeroSub] = useState(hero.sub);

  const [storyEyebrow, setStoryEyebrow] = useState(story.eyebrow);
  const [storyHeadline, setStoryHeadline] = useState(story.headline);
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="max-w-4xl space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-ink-12 pb-6">
        <div>
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">
            Live Copy & Editorial CMS
          </span>
          <h1 className="font-display text-3xl text-emerald font-normal">Homepage Content Editor</h1>
        </div>
      </div>

      {saved && (
        <div className="rounded-lg bg-emerald/10 border border-emerald/30 p-4 text-xs text-emerald font-semibold flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4" />
          Homepage Content updated successfully!
        </div>
      )}

      <form onSubmit={handleSave} className="space-y-8 text-xs">
        {/* Hero Section */}
        <div className="rounded-xl border border-ink-12 bg-white p-6 shadow-sm space-y-4">
          <h3 className="font-display text-xl text-emerald">1. Hero Section</h3>
          <div>
            <label className="block text-[11px] uppercase tracking-wider font-semibold text-ink-70 mb-1">
              Eyebrow Tagline
            </label>
            <input
              type="text"
              value={heroEyebrow}
              onChange={(e) => setHeroEyebrow(e.target.value)}
              className="w-full rounded-lg border border-ink-12 bg-white px-4 py-2 text-xs text-ink focus:border-gold focus:outline-none"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] uppercase tracking-wider font-semibold text-ink-70 mb-1">
                Headline Line 1
              </label>
              <input
                type="text"
                value={heroLine1}
                onChange={(e) => setHeroLine1(e.target.value)}
                className="w-full rounded-lg border border-ink-12 bg-white px-4 py-2 text-xs text-ink focus:border-gold focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-[11px] uppercase tracking-wider font-semibold text-ink-70 mb-1">
                Headline Line 2
              </label>
              <input
                type="text"
                value={heroLine2}
                onChange={(e) => setHeroLine2(e.target.value)}
                className="w-full rounded-lg border border-ink-12 bg-white px-4 py-2 text-xs text-ink focus:border-gold focus:outline-none"
              />
            </div>
          </div>
          <div>
            <label className="block text-[11px] uppercase tracking-wider font-semibold text-ink-70 mb-1">
              Sub-description Paragraph
            </label>
            <textarea
              rows={3}
              value={heroSub}
              onChange={(e) => setHeroSub(e.target.value)}
              className="w-full rounded-lg border border-ink-12 bg-white px-4 py-2 text-xs text-ink focus:border-gold focus:outline-none"
            />
          </div>
        </div>

        {/* Story Section */}
        <div className="rounded-xl border border-ink-12 bg-white p-6 shadow-sm space-y-4">
          <h3 className="font-display text-xl text-emerald">2. Story & Heritage Section</h3>
          <div>
            <label className="block text-[11px] uppercase tracking-wider font-semibold text-ink-70 mb-1">
              Story Eyebrow
            </label>
            <input
              type="text"
              value={storyEyebrow}
              onChange={(e) => setStoryEyebrow(e.target.value)}
              className="w-full rounded-lg border border-ink-12 bg-white px-4 py-2 text-xs text-ink focus:border-gold focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-[11px] uppercase tracking-wider font-semibold text-ink-70 mb-1">
              Story Main Headline
            </label>
            <input
              type="text"
              value={storyHeadline}
              onChange={(e) => setStoryHeadline(e.target.value)}
              className="w-full rounded-lg border border-ink-12 bg-white px-4 py-2 text-xs text-ink focus:border-gold focus:outline-none"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-emerald py-3.5 text-xs font-semibold uppercase tracking-widest text-ivory hover:bg-emerald-deep transition-all shadow"
        >
          Save All Homepage Changes
        </button>
      </form>
    </div>
  );
}
