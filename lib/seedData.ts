export const DEFAULT_TENANT_ID = "aranya-tenant-001";
export const DEFAULT_TENANT_SLUG = "aranya-jewels";

export const initialSeedData = {
  tenant: {
    id: DEFAULT_TENANT_ID,
    name: "Aranya Jewels",
    slug: DEFAULT_TENANT_SLUG,
    whatsappNumber: "919999999999",
    logoUrl: "/seal-mark.svg",
    themeJson: JSON.stringify({
      primaryColor: "#0e3b2e", // Emerald
      accentColor: "#b08d57",  // Gold
      backgroundColor: "#f6f2ea" // Ivory
    })
  },
  users: [
    {
      id: "usr-admin-01",
      tenantId: DEFAULT_TENANT_ID,
      email: "owner@aranyajewels.com",
      name: "Radheshyam Soni",
      passwordHash: "admin123", // Simple demo credential for owner console
      role: "OWNER"
    }
  ],
  collections: [
    {
      id: "col-bridal-edit",
      tenantId: DEFAULT_TENANT_ID,
      name: "The Bridal Edit",
      slug: "bridal-edit",
      subtitle: "Royal Kundan & Heritage Gold",
      description: "Handcrafted bridal masterpieces designed to be passed down through generations. BIS 916 certified 22K gold featuring hand-cut un-cut diamonds and precious emeralds.",
      coverImageUrl: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=1200&auto=format&fit=crop",
      displayOrder: 1,
      isFeatured: true,
      isHidden: false
    },
    {
      id: "col-temple-heritage",
      tenantId: DEFAULT_TENANT_ID,
      name: "Temple & Heritage",
      slug: "temple-heritage",
      subtitle: "Jaipur Antique Craft",
      description: "Inspired by ancient temple architecture and royal court jewelry, sculpted in pure 22K gold by 3rd-generation karigars.",
      coverImageUrl: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=900&auto=format&fit=crop",
      displayOrder: 2,
      isFeatured: true,
      isHidden: false
    },
    {
      id: "col-everyday-fine",
      tenantId: DEFAULT_TENANT_ID,
      name: "Everyday Fine",
      slug: "everyday-fine",
      subtitle: "Contemporary Gold & Diamonds",
      description: "Subtle, lightweight 18K and 22K gold jewellery designed for effortless everyday elegance.",
      coverImageUrl: "https://images.unsplash.com/photo-1603561596112-0a132b757442?q=80&w=1200&auto=format&fit=crop",
      displayOrder: 3,
      isFeatured: true,
      isHidden: false
    }
  ],
  products: [
    {
      id: "prd-001",
      tenantId: DEFAULT_TENANT_ID,
      collectionId: "col-bridal-edit",
      title: "The Rajkumari Kundan & Emerald Haar",
      slug: "rajkumari-kundan-emerald-haar",
      category: "Necklace",
      description: "A breathtaking 22K yellow gold bridal necklace featuring multi-strand emerald beads, hand-set Polki diamonds, and delicate freshwater pearls.",
      metalPurity: "22K Yellow Gold (BIS 916)",
      grossWeightG: 142.5,
      netWeightG: 118.2,
      gemstoneDetails: "Natural Colombian Emeralds (48 carats), Uncut Polki Diamonds (18 carats)",
      makingCharges: "14% per gram",
      bisHallmarkInfo: "BIS 916 Hallmarked & Certified",
      availability: "IN_STOCK",
      isFeatured: true,
      isArchived: false,
      videoUrl: null,
      images: [
        {
          id: "img-001-1",
          productId: "prd-001",
          imageUrl: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1800&auto=format&fit=crop",
          altText: "Front view of Rajkumari Kundan & Emerald Haar",
          isHero: true,
          displayOrder: 1
        },
        {
          id: "img-001-2",
          productId: "prd-001",
          imageUrl: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=1200&auto=format&fit=crop",
          altText: "Detail view of emerald drop pendants",
          isHero: false,
          displayOrder: 2
        }
      ]
    },
    {
      id: "prd-002",
      tenantId: DEFAULT_TENANT_ID,
      collectionId: "col-bridal-edit",
      title: "Jaipur Heritage Jhumkas",
      slug: "jaipur-heritage-jhumkas",
      category: "Earrings",
      description: "Classic multi-tiered gold Jhumka earrings engraved with traditional lotus motifs and finished with seed pearl droplets.",
      metalPurity: "22K Yellow Gold (BIS 916)",
      grossWeightG: 38.4,
      netWeightG: 34.1,
      gemstoneDetails: "Basra Seed Pearls & Ruby Cabochons",
      makingCharges: "12% per gram",
      bisHallmarkInfo: "BIS 916 Hallmarked",
      availability: "IN_STOCK",
      isFeatured: true,
      isArchived: false,
      videoUrl: null,
      images: [
        {
          id: "img-002-1",
          productId: "prd-002",
          imageUrl: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1200&auto=format&fit=crop",
          altText: "Jaipur Heritage Jhumkas side profile",
          isHero: true,
          displayOrder: 1
        }
      ]
    },
    {
      id: "prd-003",
      tenantId: DEFAULT_TENANT_ID,
      collectionId: "col-temple-heritage",
      title: "Lakshmi Temple Nakshi Kada",
      slug: "lakshmi-temple-nakshi-kada",
      category: "Bangles & Kadas",
      description: "Hand-embossed Nakshi bangle depicting Goddess Lakshmi flanked by royal elephants, sculpted in solid 22K antique gold.",
      metalPurity: "22K Antique Gold",
      grossWeightG: 62.0,
      netWeightG: 62.0,
      gemstoneDetails: "Pure Solid Gold without stones",
      makingCharges: "15% per gram",
      bisHallmarkInfo: "BIS 916 Hallmarked",
      availability: "MADE_TO_ORDER",
      isFeatured: true,
      isArchived: false,
      videoUrl: null,
      images: [
        {
          id: "img-003-1",
          productId: "prd-003",
          imageUrl: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1200&auto=format&fit=crop",
          altText: "Handicrafted Nakshi Kada detail",
          isHero: true,
          displayOrder: 1
        }
      ]
    },
    {
      id: "prd-004",
      tenantId: DEFAULT_TENANT_ID,
      collectionId: "col-everyday-fine",
      title: "Minimalist Diamond Solitaire Pendant",
      slug: "minimalist-diamond-solitaire-pendant",
      category: "Pendants",
      description: "A solitary 0.50 carat VVS-EF brilliant cut diamond set in a delicate 18K rose gold bezel setting.",
      metalPurity: "18K Rose Gold",
      grossWeightG: 6.8,
      netWeightG: 6.7,
      gemstoneDetails: "0.50ct Diamond (VVS1, EF Colour, Certified)",
      makingCharges: "10% per gram",
      bisHallmarkInfo: "BIS Hallmarked & IGI Certified",
      availability: "IN_STOCK",
      isFeatured: true,
      isArchived: false,
      videoUrl: null,
      images: [
        {
          id: "img-004-1",
          productId: "prd-004",
          imageUrl: "https://images.unsplash.com/photo-1603561596112-0a132b757442?q=80&w=1200&auto=format&fit=crop",
          altText: "Solitaire diamond pendant on delicate chain",
          isHero: true,
          displayOrder: 1
        }
      ]
    }
  ],
  showrooms: [
    {
      id: "shr-01",
      tenantId: DEFAULT_TENANT_ID,
      name: "Aranya — C-Scheme Showroom",
      address: "14 Prithviraj Road, C-Scheme, Jaipur, Rajasthan 302001",
      phone: "+91 141 238 9011",
      hours: "Mon–Sat, 10:30 AM – 8:00 PM",
      mapUrl: "https://maps.google.com/?q=Prithviraj+Road+Jaipur",
      isActive: true
    },
    {
      id: "shr-02",
      tenantId: DEFAULT_TENANT_ID,
      name: "Aranya — Johari Bazaar Flagship",
      address: "Shop 22, Johari Bazaar, Jaipur, Rajasthan 302003",
      phone: "+91 141 256 4410",
      hours: "Mon–Sun, 10:00 AM – 8:30 PM",
      mapUrl: "https://maps.google.com/?q=Johari+Bazaar+Jaipur",
      isActive: true
    }
  ],
  testimonials: [
    {
      id: "tst-01",
      tenantId: DEFAULT_TENANT_ID,
      customerName: "Priya & Arjun Mehta",
      context: "Jaipur · Wedding collection, 2024",
      quote: "We had visited five showrooms before Aranya. The moment we saw their bridal set in person, we knew — the craftsmanship was in a different league entirely.",
      avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
      isApproved: true,
      isFeatured: true,
      displayOrder: 1
    },
    {
      id: "tst-02",
      tenantId: DEFAULT_TENANT_ID,
      customerName: "Kavita Sharma",
      context: "Jaipur · Third-generation customer",
      quote: "My grandmother bought her wedding jewellery here in the 1970s. Sixty years later, they still remember our family name when we walk in.",
      avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
      isApproved: true,
      isFeatured: true,
      displayOrder: 2
    },
    {
      id: "tst-03",
      tenantId: DEFAULT_TENANT_ID,
      customerName: "Rohan Gupta",
      context: "Delhi · Anniversary gift, 2025",
      quote: "The hallmark certification and the transparency on making charges made this an easy decision — no pressure, just honest craftsmanship.",
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
      isApproved: true,
      isFeatured: true,
      displayOrder: 3
    }
  ],
  bookings: [
    {
      id: "bk-01",
      tenantId: DEFAULT_TENANT_ID,
      showroomId: "shr-01",
      productId: "prd-001",
      customerName: "Ananya Deshmukh",
      phone: "+91 98200 12345",
      email: "ananya.d@example.com",
      date: "2026-08-15",
      timeSlot: "02:00 PM - 03:00 PM",
      notes: "Looking for bridal set for November wedding.",
      status: "PENDING",
      createdAt: new Date().toISOString()
    }
  ],
  homepageContent: [
    {
      tenantId: DEFAULT_TENANT_ID,
      sectionKey: "hero",
      contentJson: JSON.stringify({
        eyebrow: "Est. 1962 · Jaipur",
        headlineLines: ["Three generations", "of hand-set craft."],
        sub: "Every piece at Aranya begins as a sketch on paper and ends, weeks later, hallmarked and finished by hand. Explore the current collection, or arrange a private viewing at our Jaipur showroom.",
        image: {
          src: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1800&auto=format&fit=crop",
          alt: "A gold bridal necklace displayed on dark velvet, lit softly to reveal engraving detail."
        }
      })
    },
    {
      tenantId: DEFAULT_TENANT_ID,
      sectionKey: "story",
      contentJson: JSON.stringify({
        eyebrow: "Our Story",
        headline: "Built on trust, one family at a time.",
        paragraphs: [
          "Aranya Jewels was founded in 1962 by Radheshyam Soni, a goldsmith who believed a piece of jewellery should outlive the person who commissioned it. Today his grandchildren run the same workshop, six streets from where it began.",
          "We still design by hand before a single tool touches gold — because a family's trust, once earned, is the only inventory that matters."
        ],
        image: {
          src: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=1200&auto=format&fit=crop",
          alt: "An artisan's hands setting a stone into a gold ring at a workbench."
        },
        stats: [
          { value: "62", label: "Years of craft" },
          { value: "3", label: "Generations" },
          { value: "4,800+", label: "Families served" }
        ]
      })
    }
  ]
};
