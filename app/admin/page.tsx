import Link from "next/link";
import { localStore } from "@/lib/db";
import { 
  Package, 
  Layers, 
  CalendarCheck, 
  MessageSquareQuote, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Plus
} from "lucide-react";

export default function AdminDashboardPage() {
  const products = localStore.getProducts();
  const collections = localStore.getCollections();
  const bookings = localStore.getBookings();
  const testimonials = localStore.getTestimonials();

  const pendingBookings = bookings.filter((b) => b.status === "PENDING");

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-ink-12 pb-6">
        <div>
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">
            Jaipur Flagship Tenant
          </span>
          <h1 className="font-display text-3xl text-emerald font-normal">
            Aranya Jewels — Owner Dashboard
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/admin/products/new"
            className="inline-flex items-center gap-2 rounded-lg bg-emerald px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-ivory hover:bg-emerald-deep transition-all shadow"
          >
            <Plus className="h-4 w-4" />
            Add New Piece
          </Link>
        </div>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="rounded-xl border border-ink-12 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium uppercase tracking-wider text-ink-50">Active Inventory</span>
            <Package className="h-5 w-5 text-gold" />
          </div>
          <p className="font-display text-4xl text-emerald mt-2">{products.length}</p>
          <p className="text-[11px] text-ink-70 mt-1">Fine jewellery pieces</p>
        </div>

        <div className="rounded-xl border border-ink-12 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium uppercase tracking-wider text-ink-50">Active Collections</span>
            <Layers className="h-5 w-5 text-gold" />
          </div>
          <p className="font-display text-4xl text-emerald mt-2">{collections.length}</p>
          <p className="text-[11px] text-ink-70 mt-1">Curated edits</p>
        </div>

        <div className="rounded-xl border border-ink-12 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium uppercase tracking-wider text-ink-50">Pending Appointments</span>
            <CalendarCheck className="h-5 w-5 text-emerald" />
          </div>
          <p className="font-display text-4xl text-emerald mt-2">{pendingBookings.length}</p>
          <p className="text-[11px] text-emerald font-semibold mt-1">Requires confirmation</p>
        </div>

        <div className="rounded-xl border border-ink-12 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium uppercase tracking-wider text-ink-50">Client Reviews</span>
            <MessageSquareQuote className="h-5 w-5 text-gold" />
          </div>
          <p className="font-display text-4xl text-emerald mt-2">{testimonials.length}</p>
          <p className="text-[11px] text-ink-70 mt-1">Approved testimonials</p>
        </div>
      </div>

      {/* Pending Bookings Section */}
      <div className="rounded-xl border border-ink-12 bg-white p-6 shadow-sm space-y-4">
        <div className="flex items-center justify-between border-b border-ink-12 pb-4">
          <h2 className="font-display text-xl text-emerald flex items-center gap-2">
            <Clock className="h-5 w-5 text-gold" />
            Recent Appointment Requests ({pendingBookings.length})
          </h2>
          <Link href="/admin/bookings" className="text-xs font-semibold uppercase tracking-wider text-emerald hover:text-gold flex items-center gap-1">
            View All <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {pendingBookings.length === 0 ? (
          <p className="text-xs text-ink-50 py-4 text-center">No pending appointment requests.</p>
        ) : (
          <div className="divide-y divide-ink-12">
            {pendingBookings.map((b) => (
              <div key={b.id} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h4 className="font-semibold text-sm text-ink">{b.customerName}</h4>
                  <p className="text-xs text-ink-70">{b.phone} · {b.email || "No email"}</p>
                  <p className="text-[11px] text-gold font-medium mt-1">
                    Date: {b.date} ({b.timeSlot})
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Link
                    href="/admin/bookings"
                    className="rounded-md bg-emerald px-3 py-1.5 text-xs text-ivory uppercase tracking-wider font-semibold hover:bg-emerald-deep"
                  >
                    Manage
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Quick Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link href="/admin/products" className="rounded-xl border border-ink-12 bg-white p-6 shadow-sm hover:border-gold transition-colors block">
          <Package className="h-6 w-6 text-gold mb-3" />
          <h3 className="font-display text-lg text-emerald">Manage Inventory</h3>
          <p className="text-xs text-ink-70 mt-1">Add, edit, or archive products, specifications, and images.</p>
        </Link>
        <Link href="/admin/collections" className="rounded-xl border border-ink-12 bg-white p-6 shadow-sm hover:border-gold transition-colors block">
          <Layers className="h-6 w-6 text-gold mb-3" />
          <h3 className="font-display text-lg text-emerald">Manage Collections</h3>
          <p className="text-xs text-ink-70 mt-1">Create curated edits, reorder cover images, write editorial notes.</p>
        </Link>
        <Link href="/admin/content" className="rounded-xl border border-ink-12 bg-white p-6 shadow-sm hover:border-gold transition-colors block">
          <CheckCircle2 className="h-6 w-6 text-emerald mb-3" />
          <h3 className="font-display text-lg text-emerald">Homepage CMS</h3>
          <p className="text-xs text-ink-70 mt-1">Edit hero headline, story text, trust facts, and showrooms.</p>
        </Link>
      </div>
    </div>
  );
}
