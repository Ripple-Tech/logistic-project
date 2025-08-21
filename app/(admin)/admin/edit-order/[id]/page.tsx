
import EditClient from "./EditClient";
interface IParams {
  id: string;
}

const Page = async ({ params }: { params: Promise<IParams> }) => {
   const resolvedParams = await params;

  if (!resolvedParams.id) {
    return  <h2>No Order to edit</h2>  
  }
  return (
   <EditClient orderId={resolvedParams.id}/>
  )
}
export default Page;