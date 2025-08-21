'use client'
import { FormatPrice } from "@/lib/FormatPrice"

export type CartProductType = {
  id: string;
  name: string;
  quantity: number;
  price: number;
};
interface OrderItemProps{
    item: CartProductType
}
const OrderItem: React.FC<OrderItemProps> = ({item}) => {
  return (
    <div className="grid grid-cols-5 text-xs md:text-sm gap-4 border-t[1.5px] border-slate-200 py-4 items-center">
     <div className="col-span-2 justify-self-start flex gap-2 md:gap-4">
        
        <div className="flex flex-col gap-1">
            <div>{item.name}</div>
        </div>
     </div>
     <div className="justify-self-center">{FormatPrice(item.price)} </div>
     <div className="justify-self-center">{item.quantity} </div>
     <div className="justify-self-end font-semibold">₦{(item.price * item.quantity).toFixed(2)} </div>
    </div>
  )
}

export default OrderItem

