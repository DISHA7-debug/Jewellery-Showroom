export interface WhatsAppEnquiryParams {
  number?: string;
  type: "product" | "collection" | "appointment" | "custom";
  title?: string;
  codeOrSlug?: string;
  customMessage?: string;
}

export function buildWhatsAppUrl({
  number = "919999999999",
  type,
  title,
  codeOrSlug,
  customMessage,
}: WhatsAppEnquiryParams): string {
  let messageText = "";

  switch (type) {
    case "product":
      messageText = `Hello Aranya Jewels, I would like to enquire about the piece "${title || "Jewellery"}"${
        codeOrSlug ? ` (Ref: ${codeOrSlug})` : ""
      }. Could you please share availability and private viewing details?`;
      break;

    case "collection":
      messageText = `Hello Aranya Jewels, I am interested in viewing items from "The ${title || "Collection"}" collection. Please share the complete catalogue or showroom availability.`;
      break;

    case "appointment":
      messageText = `Hello Aranya Jewels, I would like to request a private viewing appointment at your showroom for ${
        title || "a bespoke enquiry"
      }.`;
      break;

    case "custom":
    default:
      messageText = customMessage || "Hello Aranya Jewels, I would like to make an enquiry regarding your fine jewellery pieces.";
      break;
  }

  const cleanNumber = number.replace(/\D/g, "");
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(messageText)}`;
}
