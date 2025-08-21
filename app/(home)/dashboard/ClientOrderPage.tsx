// app/admin/orders/ClientOrderPage.tsx
"use client";

import { useState } from 'react';
import Link from 'next/link';
import { IoCopyOutline } from "react-icons/io5";
import type { Order } from '@/lib/types';

interface ClientOrderPageProps {
  allOrder: Order[] | null;
}

const ClientOrderPage: React.FC<ClientOrderPageProps> = ({ allOrder }) => {
  if (!allOrder || allOrder.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div>You have not created any order</div>
        <Link href="/create-shipment" className="text-blue-500 hover:underline">
          Create Order
        </Link>
      </div>
    );
  }

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("Tracking Id Copied!");
    } catch (err) {
      console.error("Copy failed", err);
      alert("Failed to copy tracking ID.");
    }
  };

  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <h1 className="text-3xl font-bold">All Orders</h1>
      {allOrder.map((order) => (
        <div
          className="text-sm flex flex-row border border-[#222]/10 px-3 py-3 gap-4 rounded-lg"
          key={order.id}
        >
          <Link href={`/admin/edit-order/${order.recieptId}`} className="flex flex-col">
            <p className="mt-2 text-sm text-gray-800 font-medium">{order.recieptId}</p>
            <p
              className={`mt-2 text-[10px] ${
                order.status === "delivered"
                  ? "text-emerald-400"
                  : order.status === "in transit"
                  ? "text-blue-400"
                  : "text-yellow-500"
              }`}
            >
              {order.status}
            </p>
          </Link>
          <div
            className="flex items-center justify-center text-white bg-[#fa9049] cursor-pointer font-semibold h-7 w-7 rounded shadow-md"
            onClick={() => handleCopy(order.recieptId ?? '')}
          >
            <IoCopyOutline size={18} />
          </div>
        </div>
      ))}
    </main>
  );
};

export default ClientOrderPage;
