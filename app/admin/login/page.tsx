"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, Mail, Shield, Sparkles } from "lucide-react";
import { SealMark } from "@/components/ui/SealMark";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("owner@aranyajewels.com");
  const [password, setPassword] = useState("admin123");
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        router.push("/admin");
      } else {
        setErrorMsg(data.error || "Invalid credentials.");
      }
    } catch (err) {
      setErrorMsg("Connection error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-ink flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-ivory text-ink rounded-2xl border border-gold/40 p-8 shadow-2xl space-y-6 relative overflow-hidden">
        <div className="text-center space-y-2">
          <SealMark trigger="ceremonial" variant="brand" className="mx-auto h-12 w-12 text-gold" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gold">
            Aranya SaaS Digital Showroom
          </span>
          <h1 className="font-display text-3xl text-emerald font-normal">Owner Console Login</h1>
          <p className="text-xs text-ink-70">
            Enter your credentials to manage inventory, collections, and appointments.
          </p>
        </div>

        {errorMsg && (
          <div className="rounded-lg bg-red-50 border border-red-200 p-3 text-xs text-red-700 text-center">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4 text-xs">
          <div>
            <label className="block text-[11px] uppercase tracking-wider font-semibold text-ink-70 mb-1">
              Owner Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-3 h-4 w-4 text-ink-50" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-ink-12 bg-white pl-10 pr-4 py-2.5 text-xs text-ink focus:border-gold focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-[11px] uppercase tracking-wider font-semibold text-ink-70 mb-1">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-3 h-4 w-4 text-ink-50" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border border-ink-12 bg-white pl-10 pr-4 py-2.5 text-xs text-ink focus:border-gold focus:outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full rounded-lg bg-emerald py-3.5 text-xs font-semibold uppercase tracking-widest text-ivory hover:bg-emerald-deep transition-all shadow-md mt-2"
          >
            {isLoading ? "Authenticating..." : "Sign In to Owner Console"}
          </button>
        </form>

        <div className="border-t border-ink-12 pt-4 text-center">
          <p className="text-[11px] text-ink-50">
            Demo Credentials: <span className="font-mono text-emerald">owner@aranyajewels.com</span> / <span className="font-mono text-emerald">admin123</span>
          </p>
        </div>
      </div>
    </div>
  );
}
