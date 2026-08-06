import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/providers/SmoothScrollProvider";

// next/font: self-hosted, zero layout shift, no external font request waterfall.
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aranyajewels.example.in"),
  title: "Aranya Jewels — Three Generations of Hand-Set Craft | Jaipur",
  description:
    "A family jewellery house in Jaipur, hand-crafting fine gold and stone jewellery since 1962. BIS hallmarked. Book a private viewing or enquire on WhatsApp.",
  openGraph: {
    title: "Aranya Jewels — Three Generations of Hand-Set Craft",
    description:
      "A family jewellery house in Jaipur, hand-crafting fine gold and stone jewellery since 1962.",
    type: "website",
    locale: "en_IN",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        {/* Lenis mount is a thin client boundary — everything inside
            (the actual page content) remains server-rendered. */}
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
