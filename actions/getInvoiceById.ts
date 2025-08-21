import { db } from '@/lib/db';

export default async function fetchInvoiceById(id: string) {
  try {
    const invoice = await db.reciept.findUnique({
      where: {
        id
      },
     })
     //console.log(invoice)
      if (!invoice) {
        return null;
      }
  
      return invoice;
    } catch (error: any) {
      console.error("Error while fetching post:", error);
      throw new Error("Unable to fetch post");
    }
  }