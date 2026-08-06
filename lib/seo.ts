export function generateProductJsonLd(product: any) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.title,
    "image": product.images?.[0]?.imageUrl || "https://images.unsplash.com/photo-1611591437281-460bfbe1220a",
    "description": product.description,
    "sku": product.slug,
    "category": product.category,
    "material": product.metalPurity,
    "offers": {
      "@type": "Offer",
      "priceCurrency": "INR",
      "availability": product.availability === "IN_STOCK" ? "https://schema.org/InStock" : "https://schema.org/PreOrder",
      "seller": {
        "@type": "JewelryStore",
        "name": "Aranya Jewels"
      }
    }
  };
}

export function generateLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "JewelryStore",
    "name": "Aranya Jewels",
    "image": "https://images.unsplash.com/photo-1611591437281-460bfbe1220a",
    "@id": "https://aranyajewels.example.in",
    "url": "https://aranyajewels.example.in",
    "telephone": "+911412389011",
    "priceRange": "₹₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "14 Prithviraj Road, C-Scheme",
      "addressLocality": "Jaipur",
      "addressRegion": "Rajasthan",
      "postalCode": "302001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 26.9124,
      "longitude": 75.7873
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "10:30",
      "closes": "20:00"
    }
  };
}
