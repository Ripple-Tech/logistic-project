import { db } from "@/lib/db";

export default async function getOrderByUserId(UserId: string) {
  try {
    const user = await db.user.findUnique({
      where: { id: UserId, },
    });

     // Find all order created by the user
   const orders = await db.order.findMany({
      where: { userId: user?.id,}, 
       include: {
        reciept: true, 
      },  
    }); 
     return orders;
  } catch (error) {
    console.error("Fetch order by receiptId error", error);
    return null;
  }
}