// Homepage content, typed and separated from presentation.
// In production this shape is what the Owner Console (Module 6) would
// read/write per-tenant — components never hardcode business content.

export const brand = {
  name: "Aranya Jewels",
  whatsappNumber: "919999999999",
  waMessage: (context?: string) =>
    encodeURIComponent(
      context
        ? `Hello Aranya Jewels, I'd like to know more about ${context}.`
        : "Hello Aranya Jewels, I'd like to know more."
    ),
};

export const hero = {
  eyebrow: "Est. 1962 · Jaipur",
  headlineLines: ["Three generations", "of hand-set craft."],
  sub: "Every piece at Aranya begins as a sketch on paper and ends, weeks later, hallmarked and finished by hand. Explore the current collection, or arrange a private viewing at our Jaipur showroom.",
  image: {
    src: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1800&auto=format&fit=crop",
    alt: "A gold bridal necklace displayed on dark velvet, lit softly to reveal engraving detail.",
  },
};

export const trustFacts = [
  { label: "BIS Hallmarked on every piece", icon: "stamp" as const },
  { label: "62 years in Jaipur", icon: "history" as const },
  { label: "3rd generation, family-run", icon: "users" as const },
  { label: "Certified conflict-free stones", icon: "gem" as const },
];

export const story = {
  eyebrow: "Our Story",
  headline: "Built on trust, one family at a time.",
  paragraphs: [
    "Aranya Jewels was founded in 1962 by Radheshyam Soni, a goldsmith who believed a piece of jewellery should outlive the person who commissioned it. Today his grandchildren run the same workshop, six streets from where it began.",
    "We still design by hand before a single tool touches gold — because a family's trust, once earned, is the only inventory that matters.",
  ],
  image: {
    src: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1200&auto=format&fit=crop",
    alt: "An artisan's hands setting a stone into a gold ring at a workbench.",
  },
  stats: [
    { value: "62", label: "Years of craft" },
    { value: "3", label: "Generations" },
    { value: "4,800+", label: "Families served" },
  ],
};

export const collections = [
  {
    slug: "bridal-edit",
    name: "The Bridal Edit",
    count: "42 pieces",
    image: {
      src: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=1200&auto=format&fit=crop",
      alt: "A bridal gold and kundan necklace set with matching earrings.",
    },
    size: "large" as const,
  },
  {
    slug: "temple-heritage",
    name: "Temple & Heritage",
    count: "18 pieces",
    image: {
      src: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=900&auto=format&fit=crop",
      alt: "Traditional South Indian temple jewellery gold necklace.",
    },
    size: "small" as const,
  },
  {
    slug: "everyday-fine",
    name: "Everyday Fine",
    count: "31 pieces",
    image: {
      src: "https://images.unsplash.com/photo-1603561596112-0a132b757442?q=80&w=1200&auto=format&fit=crop",
      alt: "A minimal gold pendant and thin chain resting on fabric.",
    },
    size: "medium" as const,
  },
];

export const craftSteps = [
  {
    index: "01",
    title: "Design & sketch",
    description:
      "Our in-house designers translate a client's brief into hand-drawn concepts before any metal is cut.",
  },
  {
    index: "02",
    title: "Casting & setting",
    description:
      "Master karigars cast each piece and set every stone by hand — no piece leaves the bench unsigned.",
  },
  {
    index: "03",
    title: "Hallmarking & finish",
    description:
      "Every piece is BIS hallmarked and hand-polished before it's ever shown to a client.",
  },
];

export const craftImage = {
  src: "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?q=80&w=1200&auto=format&fit=crop",
  alt: "Close-up of a goldsmith engraving fine detail into a gold surface.",
};

export const testimonials = [
  {
    quote:
      "We had visited five showrooms before Aranya. The moment we saw their bridal set in person, we knew — the craftsmanship was in a different league entirely.",
    name: "Priya & Arjun Mehta",
    context: "Jaipur · Wedding collection, 2024",
  },
  {
    quote:
      "My grandmother bought her wedding jewellery here in the 1970s. Sixty years later, they still remember our family name when we walk in.",
    name: "Kavita Sharma",
    context: "Jaipur · Third-generation customer",
  },
  {
    quote:
      "The hallmark certification and the transparency on making charges made this an easy decision — no pressure, just honest craftsmanship.",
    name: "Rohan Gupta",
    context: "Delhi · Anniversary gift, 2025",
  },
];

export const branches = [
  {
    name: "Aranya — C-Scheme",
    address: "14 Prithviraj Road, C-Scheme, Jaipur, Rajasthan 302001",
    hours: "Mon–Sat, 10:30 – 8:00",
  },
  {
    name: "Aranya — Johari Bazaar",
    address: "Shop 22, Johari Bazaar, Jaipur, Rajasthan 302003",
    hours: "Mon–Sun, 10:00 – 8:30",
  },
];

export const visitImage = {
  src: "https://images.unsplash.com/photo-1600857062241-98e5dba7f214?q=80&w=1200&auto=format&fit=crop",
  alt: "Interior of the Aranya Jewels showroom with warm lighting and display cases.",
};
