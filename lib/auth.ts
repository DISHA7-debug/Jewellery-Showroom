import { cookies } from "next/headers";

const AUTH_COOKIE_NAME = "aranya_session";

export interface AdminSession {
  email: string;
  name: string;
  role: string;
  tenantId: string;
}

export async function getAdminSession(): Promise<AdminSession | null> {
  const cookieStore = cookies();
  const sessionCookie = cookieStore.get(AUTH_COOKIE_NAME);
  
  if (!sessionCookie || !sessionCookie.value) {
    return null;
  }

  try {
    const session = JSON.parse(Buffer.from(sessionCookie.value, "base64").toString("utf-8"));
    return session;
  } catch (err) {
    return null;
  }
}

export function createSessionCookie(session: AdminSession): string {
  const serialized = Buffer.from(JSON.stringify(session)).toString("base64");
  return serialized;
}

export { AUTH_COOKIE_NAME };
