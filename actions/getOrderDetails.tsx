
import { db } from "@/lib/db";

export default async function getOrderDetails(orderId: string) {
  try {
    const order = await db.order.findUnique({
      where: { id: orderId },
      include: {
        reciept: true,
      },
    });
   console.log("Order details fetched successfully", order);
    return order;
    
  } catch (error) {
    console.error("Failed to fetch order details", error);
    return null;
  }
}