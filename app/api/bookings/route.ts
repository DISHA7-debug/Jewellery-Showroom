import { NextResponse } from "next/server";
import { localStore, prisma } from "@/lib/db";
import { DEFAULT_TENANT_ID } from "@/lib/seedData";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { showroomId, customerName, phone, email, date, timeSlot, notes, productId } = body;

    if (!showroomId || !customerName || !phone || !date || !timeSlot) {
      return NextResponse.json(
        { error: "Missing required booking details." },
        { status: 400 }
      );
    }

    let booking;
    try {
      booking = await prisma.booking.create({
        data: {
          tenantId: DEFAULT_TENANT_ID,
          showroomId,
          customerName,
          phone,
          email: email || "",
          date,
          timeSlot,
          notes: notes || "",
          productId: productId || null,
          status: "PENDING"
        }
      });
    } catch (dbErr) {
      booking = localStore.addBooking({
        showroomId,
        customerName,
        phone,
        email,
        date,
        timeSlot,
        notes,
        productId
      });
    }

    return NextResponse.json({ success: true, booking });
  } catch (err) {
    return NextResponse.json({ error: "Failed to create booking." }, { status: 500 });
  }
}

export async function GET() {
  try {
    const bookings = localStore.getBookings();
    return NextResponse.json({ bookings });
  } catch (err) {
    return NextResponse.json({ error: "Failed to fetch bookings." }, { status: 500 });
  }
}
