import { db } from "@/lib/db";

export default async function getAllInvoiceIds() {
 try {
   const invoice = await db.reciept.findMany();
   console.log(invoice)
   return invoice;
} catch (error: any) {
  throw new Error(error);
}
}