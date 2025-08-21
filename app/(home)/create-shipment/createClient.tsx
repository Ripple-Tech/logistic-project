"use client"
import { formControls } from "@/data";
import { useContext, useState } from "react";
import { BlogFormData } from "@/lib/types";
import { useRouter } from "next/navigation";
import { GlobalContext } from "@/app/context";
import { FormError } from "@/components/forms/form-error";
import { FormSuccess } from "@/components/forms/form-success";

// 6826273e1ab4a1198a375551
export default function CreateClient() {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const router = useRouter();
  const { formData, setFormData } = useContext(GlobalContext);
  const [content, setContent] = useState(""); 
  const [mediaUrl, setMediaUrl] = useState<string>("");


  async function saveBlogPost() {
    //console.log("FormData being sent:", formData);
    const res = await fetch('/api/order/add-order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...formData,
      })
    });

    const data = await res.json();
    console.log(data);

    if (data && data.success) {
       const success = 'New shipment Created';
       setSuccess(success);
      router.push('/admin');
    }
    else {
      const error = 'Failed to Create shipment';
      setError(error);
    }
  }



  return (
    <section className="-mx-4 flex flex-wrap">
      <div className="container">
        <div className="w-full px-4">
          <div className="mb-12 rounded-md bg-primary/5 py-10 px-8 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
            <h2>Create Invoice</h2>
            <div className="flex flex-col flex-wrap items-center justify-center gap-3">
                  
              <div className="-mx-4   grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4">
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
                <div className="w-full px-4">
                  <button onClick={saveBlogPost}
                   className="rounded bg-[#ff7011] px-4 py-2 text-white hover:bg-[#ff7011dc]">
                    Create Shipment </button> 
                </div>
                <div className="mt-4">
                  <FormError message={error} />
                  <FormSuccess message={success} /> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}