"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { 
  LayoutDashboard, 
  Package, 
  Layers, 
  CalendarCheck, 
  FileText, 
  MessageSquareQuote, 
  Image as ImageIcon, 
  LogOut, 
  ShieldAlert, 
  Sparkles,
  ExternalLink
} from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  // If on login page, render plain container
  if (pathname === "/admin/login") {
    return <div className="min-h-screen bg-ink text-ivory">{children}</div>;
  }

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  };

  const navItems = [
    { label: "Overview", href: "/admin", icon: LayoutDashboard },
    { label: "Products Catalog", href: "/admin/products", icon: Package },
    { label: "Collections", href: "/admin/collections", icon: Layers },
    { label: "Appointments & Bookings", href: "/admin/bookings", icon: CalendarCheck },
    { label: "Homepage CMS", href: "/admin/content", icon: FileText },
    { label: "Testimonials", href: "/admin/testimonials", icon: MessageSquareQuote },
    { label: "Media Library", href: "/admin/media", icon: ImageIcon },
  ];

  return (
    <div className="min-h-screen bg-stone/40 text-ink flex flex-col lg:flex-row">
      {/* Sidebar Navigation */}
      <aside className="w-full lg:w-64 bg-ink text-ivory flex-shrink-0 flex flex-col justify-between p-6 border-r border-gold/20">
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-ivoryFade-12 mb-6">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-soft">
                Aranya Platform
              </span>
              <h2 className="font-display text-xl text-ivory tracking-wide">
                Owner Console
              </h2>
            </div>
            <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          </div>

          <nav className="space-y-1.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href || (item.href !== "/admin" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-3.5 py-3 rounded-lg text-xs font-medium transition-all ${
                    isActive
                      ? "bg-gold text-ink font-semibold shadow"
                      : "text-ivoryFade-70 hover:bg-white/10 hover:text-ivory"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="pt-6 border-t border-ivoryFade-12 space-y-3">
          <Link
            href="/"
            target="_blank"
            className="flex items-center justify-between text-xs text-gold hover:text-ivory transition-colors px-2 py-1 font-medium"
          >
            <span>View Public Showroom</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </Link>

          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-2 px-3 py-2.5 rounded-lg text-xs text-red-300 hover:bg-red-950/40 transition-colors"
          >
            <LogOut className="h-4 w-4" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 lg:p-10 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
