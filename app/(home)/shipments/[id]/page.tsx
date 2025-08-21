import fetchInvoiceById from "@/actions/getInvoiceById";
import getOrderByRecieptId from "@/actions/getOrderByRecieptId";
import InvoiceDetails from "./InvoiceDetail"
interface IParams {
  id: string;
}
const page = async  ({ params }: { params: Promise<IParams> }) => {
  const resolvedParams = await params;
  const InvoiceDetail = await fetchInvoiceById(resolvedParams.id);
  const OrderDetail = await getOrderByRecieptId(resolvedParams.id);
  if(!InvoiceDetail) {return}
  if (!resolvedParams.id) {
    return  <h2>No tracking Id Provided</h2>  
  }
  return (
    <InvoiceDetails id={resolvedParams.id}  invoice={InvoiceDetail} order={OrderDetail}/>
  )
}

export default page