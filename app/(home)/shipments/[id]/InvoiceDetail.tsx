"use client";  // 👈 this makes it a client component

import moment from "moment";
import { Reciept } from "@/lib/types";
import Logo from '@/assets/logosaas.png';
import Tick from '@/assets/good.png';
import QR from '@/assets/qr.png';
import Stamp from '@/assets/stamp.jpg';
import Paypal from '@/assets/paypal.jpg';
import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import { getProgressPercentage } from "@/lib/progressHelper";
import { InvoiceTimeline } from "@/components/invoice-timeline/InvoiceTimeline";
import Map from "@/components/map/Map";

interface Props {
  id: string;
  invoice: Reciept;
  order: any;
}

export default function InvoiceDetails({ id, invoice, order }: Props) {
  const amount = invoice.totalcharges;
  const selectedPosition =
    invoice.latitude !== undefined && invoice.longitude !== undefined
      ? {
          latitude: String(invoice.latitude),
          longitude: String(invoice.longitude),
        }
      : null;

  return (
    <>
    <div className="flex p-8 gap-8 flex-col items-center justify-center ">
       
       <div className="  flex-col text-gray-700 h-auto mx-auto mt-10 mb-10 bg-white p-6 shadow-lg border border-gray-200">
      {/* First Header Section */}
      <div className="flex justify-between items-center mb-2">
        <div>
          <Image src={Logo} alt="ship logo" height={100} width={100} />
          <div className="flex justify-center gap-2">
           <h2 className="text-xl font-bold">Tracking Number: </h2>
           <h2 className="text-xl font-bold">{invoice.id}</h2>
          </div>
          </div>
        <div className="text-right">
          <Image src={Tick} alt="verified" height={80} width={80} /> </div>
      </div>

         {/* Divider */}
         <div className="border-t my-2"></div>

      {/* Second Header Section */}
      <div className="flex w-full justify-center items-center mb-4 text-gray-700">
        <div className="flex flex-col gap-2 items-center justify-center">
          <h1 className="text-xl font-bold mt-1">DHDL</h1>
          <p className="text-sm font-bold text-center">Address: Netherland, China, Asia, Europe <br></br>
          Email: chatDHDL@gmail.com<br></br>Website: www.dhdl.com
          </p>
           </div>
        
      </div>

      {/* Divider */}
      <div className="border-t my-2"></div>

      {/* Shipper and Receiver Information */}
      <div className="grid grid-cols-3 gap-1 mb-6 text-sm">
        <div>
          <h3 className="font-semibold">From (Sender)</h3>
          <h1 className="font-bold text-xl mb-4">{invoice.shippername}</h1>
          <p>{invoice.shipperaddress}</p>
          <p>Phone: {invoice.shipperphonumb}</p>
        {/*  <p>Origin Office: {invoice.originservicearex}</p> */}
        </div>
        <div>
          <h3 className="font-semibold">To (Consignee)</h3>
          <h1 className="font-bold text-xl mb-4">{invoice.recievername}</h1>
          <p>{invoice.recieveraddress}</p>
          <p>Phone: {invoice.recieverphonumb}</p>
         {/*  <p>Destination Office: {invoice.destinationservicearex}</p> */}
        </div>
        <div className="">
        <div className="flex flex-col pr-2 mb-3">
          <Image src={QR} alt="verified" height={40} width={100} /> 
          <p className="font-semibold">{invoice.id.slice(0, 13)}...</p>
          </div>
    
          <p>Est. Delivery Date: {invoice.estdeliverytime}</p>
          <p>Payment Method: <span className="tag">{invoice.modeofpayment}</span></p>
          <p>Mode of Transport: <span className="tag">{invoice.modeoftransport}</span></p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t my-20"></div>

      {/* Package Details */}
      <div>
        <div className="grid grid-cols-5 gap-4 text-sm border-b border-gray-200 pb-2 font-semibold">
          <div>Qty</div>
          <div>Type of Shipment</div>
          <div>Product</div>
          <div>Description</div>
          <div>Total Cost</div>
        </div>
        <div className="grid grid-cols-5 gap-4 text-sm py-4 border-b border-gray-200">
          <div>{invoice.quantity}</div>
          <div>{invoice.typeofpackage}</div>
          <div>{invoice.weight} </div>
          <div>{invoice.itemdescription}</div>
          <div>{amount}</div>
        </div>
      </div>

      {/* Payment Methods */}
<div className="mt-6 mb-20">
  <div className="flex justify-between items-center">
    <h3 className="font-semibold">Payment Methods:</h3>
    <p className="font-semibold">Official Stamp: {moment(invoice.createdAt).format("Do MMM, YYYY")}</p>
  </div>
  <div className="flex justify-between items-center gap-4 mt-2">
   <Image src={Paypal} alt="payment method" height={140} width={300} />         
   <Image src={Stamp} alt="payment method" height={80} width={150} />         
   </div>
  </div>

    </div>
    </div>


     
      {order && (
  <>
    {/* Divider */}
    <div className="border-t my-4"></div>

    <div className="flex flex-col p-4 gap-4 px-10">
      <h2 className="text-lg font-bold text-black">Order Status</h2>
      
      <div className="flex flex-col gap-2 text-gray-700">
        <p><strong>Order Reference ID:</strong> {order.id}</p>
        <p><strong>Status:</strong> {order.status}</p>
        <p><strong>Delivery Progress:</strong> {order.deliveryStatus}</p>
        <p><strong>Order Created:</strong> {moment(order.createDate).format("Do MMM YYYY, h:mm A")}</p>
      </div>

      {/* Progress bar */}
      <div className="mt-4 relative w-full px-10 lg:px-20">
        {/* Progress based on deliveryStatus */}
        <Progress value={order.progress || getProgressPercentage(order.deliveryStatus)} />
      
      <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-white">
        {order.progress || getProgressPercentage(order.deliveryStatus)}%
      </div>
        
      </div>
      
    </div>
    
  </>
)}
   <div className="px-5 md:px-10  lg:px-20 mb-10">
      <div className="mt-4  px-4 md:px-15 lg:px-20 w-auto  h-auto mx-auto border border-gray-500 rounded-md shadow-2xl">
        <h3 className="text-lg font-bold p-4 flex items-center justify-center">Tracking Status</h3>
        <div className="inline-block bg-[#ff7011] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
          New
        </div>
        <InvoiceTimeline timeline={order.timeline } />
       </div>
      </div>

       {/* ✅ Map section */}
      <div className="space-y-6 mt-10">
        <h3 className="text-xl font-medium">Location</h3>
        {selectedPosition ? (
          <div className="mt-2">
            <Map selectedPosition={selectedPosition} />
          </div>
        ) : (
          <p className="mt-2 text-sm text-gray-500">
            Coordinates not available for this shipment.
          </p>
        )}
      </div>
      
    </>
  );
}