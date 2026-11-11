export const site = {
  name: "Mini Bee",
  description:
    "Uşağınızla birlikdə böyüyən dərs masaları və stullar. Hündürlüyü tənzimlənir, Masallıda istehsal olunur.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://minibee.az",
  whatsappPhone: process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "",
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM || "",
  birmarketUrl: process.env.NEXT_PUBLIC_BIRMARKET_URL || "",
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID || "",
};

/** WhatsApp chat link with an optional prefilled message. */
export function whatsappLink(message?: string): string {
  if (!site.whatsappPhone) return "#elaqe";
  const base = `https://wa.me/${site.whatsappPhone}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function instagramLink(): string {
  return site.instagram ? `https://instagram.com/${site.instagram}` : "#elaqe";
}

/** Format a price in AZN, or a fallback when the price is not set yet. */
export function priceLabel(price?: number): string {
  return typeof price === "number" ? `${price} AZN-dən` : "Qiymət üçün yazın";
}
