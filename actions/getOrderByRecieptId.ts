"use server"
import { db } from "@/lib/db";

export default async function getOrderByRecieptId(recieptId: string) {
  try {
    const order = await db.order.findFirst({
      where: {
        recieptId
      },
      include: {
        timeline: {
          orderBy: {
            createDate: "desc",
          }
        },
        reciept: true,
      },
    });
   //console.log("Order fetched successfully", order);
    return order;
  } catch (error) {
    console.error("Error fetching order by receipt ID:", error);
    return null;
  }
}