/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // In production, restrict to the tenant's actual asset host(s) via
    // Owner Console config rather than a broad remote pattern like this.
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "gsap", "framer-motion"],
  },
};

module.exports = nextConfig;
