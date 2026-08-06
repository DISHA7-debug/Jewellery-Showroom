import { NextResponse } from "next/server";
import { createSessionCookie, AUTH_COOKIE_NAME } from "@/lib/auth";
import { DEFAULT_TENANT_ID } from "@/lib/seedData";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    // Verification for owner/admin credentials (demo default: owner@aranyajewels.com / admin123)
    if ((email === "owner@aranyajewels.com" || email === "admin@aranyajewels.com") && password === "admin123") {
      const sessionData = {
        email,
        name: "Radheshyam Soni (Owner)",
        role: "OWNER",
        tenantId: DEFAULT_TENANT_ID,
      };

      const cookieVal = createSessionCookie(sessionData);

      const res = NextResponse.json({ success: true, user: sessionData });
      res.cookies.set(AUTH_COOKIE_NAME, cookieVal, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 7, // 7 days
      });

      return res;
    }

    return NextResponse.json({ error: "Invalid email or password." }, { status: 401 });
  } catch (err) {
    return NextResponse.json({ error: "Authentication failed." }, { status: 500 });
  }
}
