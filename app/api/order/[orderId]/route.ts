// app/api/order/[orderId]/route.ts
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: Request, context: { params: Promise<{ orderId: string }> }) {
  const { orderId } = await context.params;

  try {
    const order = await db.order.findUnique({
      where: {
        recieptId: orderId,
      },
      include: {
        timeline: { orderBy: { createDate: "asc" } },
        reciept: true,
      },
    });
   
    console.log("Order fetched successfully", order);
    if (!order) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    return NextResponse.json(order);
  } catch (error) {
    console.error("Error fetching order:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}






// ✨ PUT method to update order and optionally add timeline entry
export async function PUT(req: Request, context: { params: Promise<{ orderId: string }> }) {
  const { orderId } = await context.params;
  const body = await req.json();

  const {
    status,
    deliveryStatus,
    progress,
    timelineText, // 👈 new
    ...recieptFields
  } = body;

  // Ensure no protected fields are updated
  delete recieptFields.id;
  delete recieptFields.createdAt;

  try {
    // Update the order
    const updatedOrder = await db.order.update({
      where: {
        recieptId: orderId,
      },
      data: {
        status,
        deliveryStatus,
        progress,
      },
    });

    // Update the reciept fields
    const updatedReciept = await db.reciept.update({
      where: {
        id: orderId,
      },
      data: recieptFields,
    });

    // Create timeline entry if text is provided
    if (timelineText && timelineText.trim() !== "") {
      await db.orderTimeline.create({
        data: {
          orderId: updatedOrder.id,
          text: timelineText.trim(),
        },
      });
    }

    return NextResponse.json({
      success: true,
      message: "Order and receipt updated successfully.",
      updatedOrder,
      updatedReciept,
    });

  } catch (error) {
    console.error("Error updating order:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}