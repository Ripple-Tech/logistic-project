"use client"

import { formControls } from "@/data";
import { useContext, useEffect, useState } from "react";
import { BlogFormData } from "@/lib/types";
import { useRouter, useSearchParams } from "next/navigation";
import { GlobalContext } from "@/app/context";
import { FormError } from "@/components/forms/form-error";
import { FormSuccess } from "@/components/forms/form-success";
import { Progress } from "@/components/ui/progress";
import { getProgressPercentage } from "@/lib/progressHelper";
//import getOrderByRecieptId from "@/actions/getOrderByRecieptId";
// 6826273e1ab4a1198a375551
interface EditOrderClientProps {
  orderId: string;
}
export default function EditOrderClient({ orderId }: EditOrderClientProps) {
  const [formData, setFormData] = useState<any>(null);
  const [error, setError] = useState<string>();
  const [success, setSuccess] = useState<string>();
  const [showForm, setShowForm] = useState(false);
  const router = useRouter();

  useEffect(() => {
  async function fetchData() {
    try {
      const res = await fetch(`/api/order/${orderId}`);
      const data = await res.json();
      if (res.ok && data) {
        setFormData({
          ...data.reciept,
          status: data.status,
          deliveryStatus: data.deliveryStatus,
          progress: data.progress,
        });
      } else {
        setError("Failed to load order data.");
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setError("An unexpected error occurred.");
    }
  }

  if (orderId) {
    fetchData();
  }
}, [orderId]);

  
  async function updateOrder() {
     //console.log("FormData being updated:", formData);
     try {
      const res = await fetch(`/api/order/${orderId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data?.success) {
        setSuccess("Order updated successfully!");
        router.push("/admin/orders"); // redirect to order list
      } else {
        setError("Failed to update order.");
      }
    } catch (err) {
      setError("Something went wrong.");
    }
      
  }


  if (!formData) return <p>Loading...</p>;

  return (
    <section className="-mx-4 flex flex-wrap">
      <div className="container">
        <div className="w-full px-4">
          <div className="mb-12 rounded-md bg-primary/5 py-10 px-8 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
            <div className="mb-4 text-center">
          <button
            onClick={() => setShowForm(prev => !prev)}
            className="rounded bg-[#ff7011] px-4 py-2 text-white hover:bg-[#ff7011dc]"
          >
            {showForm ? "Hide Form" : "Edit Receipt"}
          </button>
        </div>
            <h2>Edit Invoice</h2>
            <div className="flex flex-col flex-wrap items-center justify-center gap-3">
             <div className={`transition-all duration-300 ${showForm ? 'max-h-fit opacity-100' : 'max-h-48 overflow-hidden opacity-70'}`}>

              <div className="-mx-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {formControls.map(control => (
                                  <div key={control.id} className="w-full px-4">
                                    <label className="mb-3 block text-sm font-medium dark:text-white text-black">{control.label}</label>
                                    {control.component === 'shippername' ? (
                                      <input
                                        type={control.type}
                                        name={control.id}
                                        placeholder={control.placeholder}
                                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                          setFormData({
                                            ...formData,
                                            [control.id]: event.target.value
                                          });
                                        }}
                                        value={formData[control.id as keyof BlogFormData]}
                                        className="w-full mb-8 rounded-md border border-transparent py-3 px-6 text-base text-gray-500 
                                        placeholder-gray-400 shadow-one outline-none focus-border-gray-600 focus-visible:shadow-none"
                                      />
                                    ) : control.component === 'recievername' ? (
                                      <input
                                        type={control.type}
                                        name={control.id}
                                        placeholder={control.placeholder}
                                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                          setFormData({
                                            ...formData,
                                            [control.id]: event.target.value
                                          });
                                        }}
                                        value={formData[control.id as keyof BlogFormData]}
                                        className="w-full mb-8 rounded-md border border-transparent py-3 px-6 text-base text-gray-500 
                                        placeholder-gray-400 shadow-one outline-none focus-border-gray-600 focus-visible:shadow-none"
                                      />
                                    ) :
                                    control.component === 'shipperaddress' ? (
                                      <input
                                        type={control.type}
                                        name={control.id}
                                        placeholder={control.placeholder}
                                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                          setFormData({
                                            ...formData,
                                            [control.id]: event.target.value
                                          });
                                        }}
                                        value={formData[control.id as keyof BlogFormData]}
                                        className="w-full mb-8 rounded-md border border-transparent py-3 px-6 text-base text-gray-500 
                                        placeholder-gray-400 shadow-one outline-none focus-border-gray-600 focus-visible:shadow-none"
                                      />
                                    ) :
                                    control.component === 'recieveraddress' ? (
                                      <input
                                        type={control.type}
                                        name={control.id}
                                        placeholder={control.placeholder}
                                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                          setFormData({
                                            ...formData,
                                            [control.id]: event.target.value
                                          });
                                        }}
                                        value={formData[control.id as keyof BlogFormData]}
                                        className="w-full mb-8 rounded-md border border-transparent py-3 px-6 text-base text-gray-500 
                                        placeholder-gray-400 shadow-one outline-none focus-border-gray-600 focus-visible:shadow-none"
                                      />
                                    ) :
                                    control.component === 'waybilnumber' ? (
                                      <input
                                        type={control.type}
                                        name={control.id}
                                        placeholder={control.placeholder}
                                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                          setFormData({
                                            ...formData,
                                            [control.id]: event.target.value
                                          });
                                        }}
                                        value={formData[control.id as keyof BlogFormData]}
                                        className="w-full mb-8 rounded-md border border-transparent py-3 px-6 text-base text-gray-500 
                                        placeholder-gray-400 shadow-one outline-none focus-border-gray-600 focus-visible:shadow-none"
                                      />
                                    ) :
                                    control.component === 'weight' ? (
                                      <input
                                        type={control.type}
                                        name={control.id}
                                        placeholder={control.placeholder}
                                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                          setFormData({
                                            ...formData,
                                            [control.id]: event.target.value
                                          });
                                        }}
                                        value={formData[control.id as keyof BlogFormData]}
                                        className="w-full mb-8 rounded-md border border-transparent py-3 px-6 text-base text-gray-500 
                                        placeholder-gray-400 shadow-one outline-none focus-border-gray-600 focus-visible:shadow-none"
                                      />
                                    ) :
                                    control.component === 'totalcharges' ? (
                                      <input
                                        type={control.type}
                                        name={control.id}
                                        placeholder={control.placeholder}
                                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                          setFormData({
                                            ...formData,
                                            [control.id]: event.target.value
                                          });
                                        }}
                                        value={formData[control.id as keyof BlogFormData]}
                                        className="w-full mb-8 rounded-md border border-transparent py-3 px-6 text-base text-gray-500 
                                        placeholder-gray-400 shadow-one outline-none focus-border-gray-600 focus-visible:shadow-none"
                                      />
                                    ) : control.component === 'shipperphonumb' ? (
                                      <input
                                        type={control.type}
                                        name={control.id}
                                        placeholder={control.placeholder}
                                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                          setFormData({
                                            ...formData,
                                            [control.id]: event.target.value
                                          });
                                        }}
                                        value={formData[control.id as keyof BlogFormData]}
                                        className="w-full mb-8 rounded-md border border-transparent py-3 px-6 text-base text-gray-500 
                                        placeholder-gray-400 shadow-one outline-none focus-border-gray-600 focus-visible:shadow-none"
                                      />
                                    ) :
                                     control.component === 'recieverphonumb' ? (
                                      <input
                                        type={control.type}
                                        name={control.id}
                                        placeholder={control.placeholder}
                                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                          setFormData({
                                            ...formData,
                                            [control.id]: event.target.value
                                          });
                                        }}
                                        value={formData[control.id as keyof BlogFormData]}
                                        className="w-full mb-8 rounded-md border border-transparent py-3 px-6 text-base text-gray-500 
                                        placeholder-gray-400 shadow-one outline-none focus-border-gray-600 focus-visible:shadow-none"
                                          />
                                    ) :
                                    control.component === 'quantity' ? (
                                      <input
                                        type={control.type}
                                        name={control.id}
                                        placeholder={control.placeholder}
                                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                          setFormData({
                                            ...formData,
                                            [control.id]: event.target.value
                                          });
                                        }}
                                        value={formData[control.id as keyof BlogFormData]}
                                        className="w-full mb-8 rounded-md border border-transparent py-3 px-6 text-base text-gray-500 
                                        placeholder-gray-400 shadow-one outline-none focus-border-gray-600 focus-visible:shadow-none"
                                      />
                                    ) :
                                    control.component === 'shipperemail' ? (
                                      <input
                                        type={control.type}
                                        name={control.id}
                                        placeholder={control.placeholder}
                                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                          setFormData({
                                            ...formData,
                                            [control.id]: event.target.value
                                          });
                                        }}
                                        value={formData[control.id as keyof BlogFormData]}
                                        className="w-full mb-8 rounded-md border border-transparent py-3 px-6 text-base text-gray-500 
                                        placeholder-gray-400 shadow-one outline-none focus-border-gray-600 focus-visible:shadow-none"
                                      />
                                    ) :
                                    control.component === 'recieveremail' ? (
                                      <input
                                        type={control.type}
                                        name={control.id}
                                        placeholder={control.placeholder}
                                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                          setFormData({
                                            ...formData,
                                            [control.id]: event.target.value
                                          });
                                        }}
                                        value={formData[control.id as keyof BlogFormData]}
                                        className="w-full mb-8 rounded-md border border-transparent py-3 px-6 text-base text-gray-500 
                                        placeholder-gray-400 shadow-one outline-none focus-border-gray-600 focus-visible:shadow-none"
                                      />
                                    )  :
                                    control.component === 'itemdescription' ? (
                                      <input
                                        type={control.type}
                                        name={control.id}
                                        placeholder={control.placeholder}
                                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                          setFormData({
                                            ...formData,
                                            [control.id]: event.target.value
                                          });
                                        }}
                                        value={formData[control.id as keyof BlogFormData]}
                                        className="w-full mb-8 rounded-md border border-transparent py-3 px-6 text-base text-gray-500 
                                        placeholder-gray-400 shadow-one outline-none focus-border-gray-600 focus-visible:shadow-none"
                                      />
                                    ) :
                                    control.component === 'departuredate' ? (
                                      <input
                                        type={control.type}
                                        name={control.id}
                                        placeholder={control.placeholder}
                                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                          setFormData({
                                            ...formData,
                                            [control.id]: event.target.value
                                          });
                                        }}
                                        value={formData[control.id as keyof BlogFormData]}
                                        className="w-full mb-8 rounded-md border border-transparent py-3 px-6 text-base text-gray-500 
                                        placeholder-gray-400 shadow-one outline-none focus-border-gray-600 focus-visible:shadow-none"
                                      />
                                    ) :
                                    control.component === 'estdeliverytime' ? (
                                      <input
                                        type={control.type}
                                        name={control.id}
                                        placeholder={control.placeholder}
                                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                          setFormData({
                                            ...formData,
                                            [control.id]: event.target.value
                                          });
                                        }}
                                        value={formData[control.id as keyof BlogFormData]}
                                        className="w-full mb-8 rounded-md border border-transparent py-3 px-6 text-base text-gray-500 
                                        placeholder-gray-400 shadow-one outline-none focus-border-gray-600 focus-visible:shadow-none"
                                      />
                                    ) :
                                    control.component === 'longitude' ? (
                                      <input
                                        type={control.type}
                                        name={control.id}
                                        placeholder={control.placeholder}
                                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                          setFormData({
                                            ...formData,
                                            [control.id]: event.target.value
                                          });
                                        }}
                                        value={formData[control.id as keyof BlogFormData]}
                                        className="w-full mb-8 rounded-md border border-transparent py-3 px-6 text-base text-gray-500 
                                        placeholder-gray-400 shadow-one outline-none focus-border-gray-600 focus-visible:shadow-none"
                                      />
                                    ) :
                                    control.component === 'latitude' ? (
                                      <input
                                        type={control.type}
                                        name={control.id}
                                        placeholder={control.placeholder}
                                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                          setFormData({
                                            ...formData,
                                            [control.id]: event.target.value
                                          });
                                        }}
                                        value={formData[control.id as keyof BlogFormData]}
                                        className="w-full mb-8 rounded-md border border-transparent py-3 px-6 text-base text-gray-500 
                                        placeholder-gray-400 shadow-one outline-none focus-border-gray-600 focus-visible:shadow-none"
                                      />
                                    ) :
                                    control.component === 'typeofpackage' ?
                                        <select
                                          name={control.id}
                                          onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                                            setFormData({
                                              ...formData,
                                              [control.id]: event.target.value
                                            });
                                          }}
                                          value={formData[control.id as keyof BlogFormData]}
                                          className="w-full mb-8 rounded-md border border-transparent py-3 px-6 text-base text-gray-500 
                                          placeholder-gray-400 shadow-one outline-none focus-border-gray-600 focus-visible:shadow-none"
                                        >
                                          <option value={''} id=""> </option>
                                          {control.options.map(optionItem => 
                                            <option key={optionItem.label} id={optionItem.value} value={optionItem.value}>{optionItem.label}</option>
                                          )}
                                        </select> : 
                                    control.component === 'modeoftransport' ?
                                        <select
                                          name={control.id}
                                          onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                                            setFormData({
                                              ...formData,
                                              [control.id]: event.target.value
                                            });
                                          }}
                                          value={formData[control.id as keyof BlogFormData]}
                                          className="w-full mb-8 rounded-md border border-transparent py-3 px-6 text-base text-gray-500 
                                          placeholder-gray-400 shadow-one outline-none focus-border-gray-600 focus-visible:shadow-none"
                                        >
                                          <option value={''} id=""> </option>
                                          {control.options.map(optionItem => 
                                            <option key={optionItem.label} id={optionItem.value} value={optionItem.value}>{optionItem.label}</option>
                                          )}
                                        </select> : control.component === 'modeofpayment' ?
                                        <select
                                          name={control.id}
                                          onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                                            setFormData({
                                              ...formData,
                                              [control.id]: event.target.value
                                            });
                                          }}
                                          value={formData[control.id as keyof BlogFormData]}
                                          className="w-full mb-8 rounded-md border border-transparent py-3 px-6 text-base text-gray-500 
                                          placeholder-gray-400 shadow-one outline-none focus-border-gray-600 focus-visible:shadow-none"
                                        >
                                          <option value={''} id=""> </option>
                                          {control.options.map(optionItem => 
                                            <option key={optionItem.label} id={optionItem.value} value={optionItem.value}>{optionItem.label}</option>
                                          )}
                                        </select> : null}
                                  </div>
                                ))}
                
                
                
              </div>
              </div>
            </div>
          </div>
          {/* Divider for timeline controls */}
<div className="col-span-full border-t my-4"></div>


{/* Timeline Update Section */}
<div className="w-full px-4">
  <label className="mb-2 block text-sm font-semibold text-black">Delivery Status (Text)</label>
  <input
    type="text"
    name="deliveryStatus"
    placeholder="e.g. In Transit, Preparing"
    value={formData.deliveryStatus || ''}
    onChange={(e) => setFormData({ ...formData, deliveryStatus: e.target.value })}
    className="w-full mb-4 rounded-md border py-3 px-6 text-base text-gray-700 placeholder-gray-400 shadow outline-none focus:ring"
  />

  <label className="mb-2 block text-sm font-semibold text-black">Progress Percentage</label>
  <input
    type="number"
    name="progress"
    min={0}
    max={100}
    placeholder="e.g. 75"
    value={formData.progress || ''}
    onChange={(e) => setFormData({ ...formData, progress: Number(e.target.value) })}
    className="w-full mb-8 rounded-md border py-3 px-6 text-base text-gray-700 placeholder-gray-400 shadow outline-none focus:ring"
  />
</div>
<div className="mb-4 relative w-full px-10 lg:px-20">
        {/* Progress based on deliveryStatus */}
        <Progress value={formData.progress || getProgressPercentage(formData.deliveryStatus)} />
      
      <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-white">
        {formData.progress || getProgressPercentage(formData.deliveryStatus)}%
      </div>
        
      </div>
{/* Timeline Text (Admin Note) */}
<div className="w-full px-4">
  <label className="mb-2 block text-sm font-semibold text-black">Timeline Note</label>
  <input
    type="text"
    name="timelineText"
    placeholder="e.g. Package handed to courier"
    value={formData.timelineText || ''}
    onChange={(e) => setFormData({ ...formData, timelineText: e.target.value })}
    className="w-full mb-8 rounded-md border py-3 px-6 text-base text-gray-700 placeholder-gray-400 shadow outline-none focus:ring"
  />
</div>

                <div className="w-full px-4">
                   <button onClick={updateOrder}
                   className="rounded bg-[#ff7011] px-4 py-2 text-white hover:bg-[#ff7011dc]">
                    Update Order </button> 
                </div>

               <div className="mt-4">
                  <FormError message={error} />
                  <FormSuccess message={success} />
                </div>
        </div>
      </div>
    </section>
  );
}
// This code is a React component that allows users to edit an invoice. It fetches the existing invoice data based on the orderId from the URL, populates the form with that data, and allows users to update it. The component uses hooks for state management and side effects, and it handles form submission and error/success messages.
// The form fields are dynamically generated based on a predefined set of controls, and the component uses a context to manage the form data. The updateOrder function sends the updated data to the server via a PUT request.