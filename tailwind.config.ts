import type { Config } from "tailwindcss";
import { colorPrimitives, colorSemantics, colorOpacity } from "./lib/tokens/colors";
import { spacing, containers } from "./lib/tokens/spacing";
import { easing } from "./lib/tokens/motion";

// Ch.17: Tailwind consumes lib/tokens/ as its single source of truth.
// No raw design value is declared in this file — every entry below is a
// reference into the token layer, so the token layer (not this file) is
// what a designer or engineer edits to change the platform's values.
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./providers/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: colorPrimitives.ivory,
        ink: {
          DEFAULT: colorPrimitives.ink,
          70: colorOpacity.ink70,
          50: colorOpacity.ink50,
          12: colorOpacity.ink12,
        },
        gold: {
          DEFAULT: colorPrimitives.gold,
          soft: colorPrimitives.goldSoft,
        },
        emerald: {
          DEFAULT: colorSemantics.actionPrimary,
          deep: colorSemantics.actionPrimaryHover,
        },
        stone: colorPrimitives.stone,
        ivoryFade: {
          70: colorOpacity.ivory70,
          50: colorOpacity.ivory50,
          12: colorOpacity.ivory12,
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      spacing: {
        "section-y": spacing.sectionY,
        "section-y-sm": spacing.sectionYSm,
      },
      maxWidth: {
        page: containers.page,
      },
      transitionTimingFunction: {
        luxury: easing.weighted,
      },
    },
  },
  plugins: [],
};
export default config;
