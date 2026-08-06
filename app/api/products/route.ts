import { NextResponse } from "next/server";
import { localStore } from "@/lib/db";

export async function GET() {
  try {
    const products = localStore.getProducts();
    return NextResponse.json({ products });
  } catch (err) {
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const newProduct = localStore.addProduct(body);
    return NextResponse.json({ success: true, product: newProduct });
  } catch (err) {
    return NextResponse.json({ error: "Failed to add product" }, { status: 500 });
  }
}
