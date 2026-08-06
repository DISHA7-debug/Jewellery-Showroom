import { PrismaClient } from "@prisma/client";
import { initialSeedData, DEFAULT_TENANT_ID, DEFAULT_TENANT_SLUG } from "./seedData";

// Lazy Prisma Client factory for Prisma 7 compatibility
let prismaInstance: PrismaClient | null = null;

export function getPrismaClient(): PrismaClient | null {
  if (prismaInstance) return prismaInstance;
  if (!process.env.DATABASE_URL) return null;

  try {
    prismaInstance = new PrismaClient();
    return prismaInstance;
  } catch (e) {
    return null;
  }
}

export const prisma = new Proxy({} as PrismaClient, {
  get(_target, prop) {
    const client = getPrismaClient();
    if (!client) {
      // If Prisma client cannot be instantiated without database URL, throw soft fallback
      return () => Promise.reject(new Error("Prisma client uninitialized - using local storage engine."));
    }
    return (client as any)[prop];
  },
});

// In-Memory / File Storage state backing fallback if Postgres DB is unmigrated/offline
class LocalMemoryStore {
  private data = { ...initialSeedData };

  getTenant(tenantId = DEFAULT_TENANT_ID) {
    return this.data.tenant;
  }

  getCollections(tenantId = DEFAULT_TENANT_ID) {
    return this.data.collections.filter((c) => c.tenantId === tenantId && !c.isHidden);
  }

  getCollectionBySlug(slug: string, tenantId = DEFAULT_TENANT_ID) {
    return this.data.collections.find((c) => c.slug === slug && c.tenantId === tenantId);
  }

  getProducts(tenantId = DEFAULT_TENANT_ID, collectionId?: string) {
    let prods = this.data.products.filter((p) => p.tenantId === tenantId && !p.isArchived);
    if (collectionId) {
      prods = prods.filter((p) => p.collectionId === collectionId);
    }
    return prods;
  }

  getProductBySlug(slug: string, tenantId = DEFAULT_TENANT_ID) {
    return this.data.products.find((p) => p.slug === slug && p.tenantId === tenantId);
  }

  getProductById(id: string, tenantId = DEFAULT_TENANT_ID) {
    return this.data.products.find((p) => p.id === id && p.tenantId === tenantId);
  }

  addProduct(productData: any, tenantId = DEFAULT_TENANT_ID) {
    const newProduct = {
      id: `prd-${Date.now()}`,
      tenantId,
      collectionId: productData.collectionId || null,
      title: productData.title,
      slug: productData.slug || productData.title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      category: productData.category || "Necklace",
      description: productData.description || "",
      metalPurity: productData.metalPurity || "22K Yellow Gold",
      grossWeightG: Number(productData.grossWeightG || 0),
      netWeightG: Number(productData.netWeightG || 0),
      gemstoneDetails: productData.gemstoneDetails || "",
      makingCharges: productData.makingCharges || "12% per gram",
      bisHallmarkInfo: productData.bisHallmarkInfo || "BIS 916 Hallmarked",
      availability: productData.availability || "IN_STOCK",
      isFeatured: Boolean(productData.isFeatured),
      isArchived: false,
      videoUrl: productData.videoUrl || null,
      images: productData.images || [
        {
          id: `img-${Date.now()}`,
          productId: `prd-${Date.now()}`,
          imageUrl: productData.imageUrl || "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1800&auto=format&fit=crop",
          altText: productData.title,
          isHero: true,
          displayOrder: 1
        }
      ]
    };
    this.data.products.unshift(newProduct);
    return newProduct;
  }

  updateProduct(id: string, updates: any, tenantId = DEFAULT_TENANT_ID) {
    const index = this.data.products.findIndex((p) => p.id === id && p.tenantId === tenantId);
    if (index !== -1) {
      this.data.products[index] = { ...this.data.products[index], ...updates };
      return this.data.products[index];
    }
    return null;
  }

  deleteProduct(id: string, tenantId = DEFAULT_TENANT_ID) {
    this.data.products = this.data.products.filter((p) => !(p.id === id && p.tenantId === tenantId));
    return true;
  }

  getShowrooms(tenantId = DEFAULT_TENANT_ID) {
    return this.data.showrooms.filter((s) => s.tenantId === tenantId && s.isActive);
  }

  getBookings(tenantId = DEFAULT_TENANT_ID) {
    return this.data.bookings.filter((b) => b.tenantId === tenantId);
  }

  addBooking(bookingData: any, tenantId = DEFAULT_TENANT_ID) {
    const newBooking = {
      id: `bk-${Date.now()}`,
      tenantId,
      showroomId: bookingData.showroomId,
      productId: bookingData.productId || null,
      customerName: bookingData.customerName,
      phone: bookingData.phone,
      email: bookingData.email,
      date: bookingData.date,
      timeSlot: bookingData.timeSlot,
      notes: bookingData.notes || "",
      status: "PENDING",
      createdAt: new Date().toISOString()
    };
    this.data.bookings.unshift(newBooking);
    return newBooking;
  }

  updateBookingStatus(id: string, status: string, tenantId = DEFAULT_TENANT_ID) {
    const bk = this.data.bookings.find((b) => b.id === id && b.tenantId === tenantId);
    if (bk) {
      bk.status = status;
      return bk;
    }
    return null;
  }

  getTestimonials(tenantId = DEFAULT_TENANT_ID) {
    return this.data.testimonials.filter((t) => t.tenantId === tenantId && t.isApproved);
  }

  getHomepageContent(sectionKey: string, tenantId = DEFAULT_TENANT_ID) {
    const item = this.data.homepageContent.find((h) => h.sectionKey === sectionKey && h.tenantId === tenantId);
    return item ? JSON.parse(item.contentJson) : null;
  }
}

export const localStore = new LocalMemoryStore();

// Unified Database Provider
export async function getDbTenant(slug = DEFAULT_TENANT_SLUG) {
  const client = getPrismaClient();
  if (client) {
    try {
      const tenant = await client.tenant.findUnique({
        where: { slug },
        include: {
          collections: true,
          showrooms: true,
          testimonials: true
        }
      });
      if (tenant) return tenant;
    } catch (err) {
      // Fall back to local store seamlessly
    }
  }
  return localStore.getTenant();
}
