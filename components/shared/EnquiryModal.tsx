"use client";

import { useState } from "react";
import { X, MessageSquare, Send, CheckCircle2 } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  productTitle?: string;
  productSlug?: string;
  collectionTitle?: string;
}

export function EnquiryModal({
  isOpen,
  onClose,
  productTitle,
  productSlug,
  collectionTitle,
}: EnquiryModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const defaultContext = productTitle
    ? `Product: ${productTitle}`
    : collectionTitle
    ? `Collection: ${collectionTitle}`
    : "General Jewellery Enquiry";

  const handleWhatsAppRedirect = () => {
    const url = buildWhatsAppUrl({
      type: productTitle ? "product" : collectionTitle ? "collection" : "custom",
      title: productTitle || collectionTitle,
      codeOrSlug: productSlug,
      customMessage: message,
    });
    window.open(url, "_blank");
    onClose();
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/70 p-4 backdrop-blur-md">
      <div className="relative w-full max-w-lg rounded-xl border border-gold/30 bg-ivory p-7 text-ink shadow-2xl transition-all">
        <button
          onClick={onClose}
          className="absolute right-5 top-5 text-ink-50 hover:text-ink transition-colors"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {submitted ? (
          <div className="py-10 text-center space-y-4">
            <CheckCircle2 className="mx-auto h-12 w-12 text-emerald" />
            <h3 className="font-display text-2xl text-emerald">Enquiry Received</h3>
            <p className="text-sm text-ink-70 max-w-xs mx-auto">
              Thank you {name || "valued client"}. Our concierge in Jaipur will contact you shortly via phone or WhatsApp.
            </p>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
                Aranya Concierge
              </span>
              <h3 className="font-display text-2xl font-normal mt-1">Enquire About Craft</h3>
              <p className="mt-1 text-xs text-ink-70">
                {defaultContext}
              </p>
            </div>

            {/* Quick Action: Direct WhatsApp */}
            <div className="mb-6 rounded-lg bg-emerald/5 border border-emerald/20 p-4 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-emerald uppercase tracking-wider">
                  Instant Response
                </p>
                <p className="text-xs text-ink-70 mt-0.5">
                  Connect with a master karigar on WhatsApp
                </p>
              </div>
              <button
                type="button"
                onClick={handleWhatsAppRedirect}
                className="inline-flex items-center gap-2 rounded-md bg-emerald px-4 py-2 text-xs uppercase tracking-wider text-ivory hover:bg-emerald-deep transition-all shadow-sm"
              >
                <MessageSquare className="h-4 w-4" />
                WhatsApp
              </button>
            </div>

            <div className="relative my-6 flex items-center justify-center">
              <div className="w-full border-t border-ink-12" />
              <span className="absolute bg-ivory px-3 text-[10px] uppercase tracking-widest text-ink-50">
                Or submit a web enquiry
              </span>
            </div>

            <form onSubmit={handleSubmitForm} className="space-y-4 text-xs">
              <div>
                <label className="block text-[11px] uppercase tracking-wider font-medium text-ink-70 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Maharani Gayatri"
                  className="w-full rounded border border-ink-12 bg-white/70 px-3.5 py-2.5 text-ink focus:border-gold focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-medium text-ink-70 mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full rounded border border-ink-12 bg-white/70 px-3.5 py-2.5 text-ink focus:border-gold focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-medium text-ink-70 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full rounded border border-ink-12 bg-white/70 px-3.5 py-2.5 text-ink focus:border-gold focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider font-medium text-ink-70 mb-1">
                  Custom Request or Gemstone Preferences
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us if you require customization, specific purity, or custom sizing..."
                  className="w-full rounded border border-ink-12 bg-white/70 px-3.5 py-2.5 text-ink focus:border-gold focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded bg-ink py-3 text-xs uppercase tracking-widest text-ivory hover:bg-emerald transition-colors"
              >
                <Send className="h-3.5 w-3.5" />
                Submit Formal Enquiry
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
