import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import  getCurrentUser  from '@/actions/getCurrentUser'

export async function POST(request : NextRequest) {
  const currentUser = await getCurrentUser();
  if(!currentUser) return NextResponse.error();
   //if(currentUser.role !== "ADMIN"){
    //return NextResponse.error();
   //}
  const userId = currentUser.id;
 if (!userId) {
  return NextResponse.json(
    {
      success: false,
      message: "No user logged in!",
    },
    { status: 401 }
  );
}

  try {
   
    
    const extractPostData = await request.json();
    const {  shippername, typeofpackage, modeoftransport, modeofpayment, itemdescription, departuredate, estdeliverytime,  recievername, shipperaddress, recieveraddress, waybilnumber, weight, shipperphonumb, recieverphonumb, quantity, longitude, latitude, shipperemail, recieveremail, totalcharges } = extractPostData

    const newReciept = await db.reciept.create({
      data: {
        shippername, typeofpackage, modeoftransport, modeofpayment, itemdescription, departuredate, estdeliverytime, recievername, shipperaddress, recieveraddress, waybilnumber, weight, shipperphonumb, recieverphonumb, quantity, longitude, latitude, shipperemail, recieveremail, totalcharges
    }
    });

    const newOrder = await db.order.create({
      data: {
        userId: userId, 
        status: "Pending",
        deliveryStatus: "Preparing",
        progress: 0, 
        recieptId: newReciept.id, 
      },
    });

    await db.orderTimeline.create({
    data: {
     orderId: newOrder.id,
     text: "Order Submitted",
     },
   });

     console.log(newOrder);
     if (newOrder) {
     return NextResponse.json({ success: true, message: 'Shipment Created' });
     }
    } catch (error) {
    console.log(error);
    return NextResponse.json({
        success : false,
        message : 'Something went wrong!'
    })
  }
}