import getAllInvoiceIds from "@/actions/getAllInvoiceIds";
const page = async () => {
    const allInvoice = await getAllInvoiceIds();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      
        {allInvoice.map((invoice:any) => (
            <li
              key={invoice.id}
              className="list-none bg-gray-200 p-4 rounded-md shadow-md flex flex-col items-center"
           >
              <p className="mt-2 text-sm text-center font-medium">
                {invoice.id}</p>
          
            </li>
          ))}
          </main>
    </div>
  )
}

export default page