"use client"
import SectionWrapper from '@/components/SectionWrapper';
import Image from 'next/image';
import Promoil from "@/assets/blog.svg"
interface Props {
  imgURL: string;
  label: string;
  subtext: string;
}
export const services = [
    {
        imgURL: "/icons/truck-fast.svg",
        label: "Free Delivery",
        subtext: "Enjoy free shipping"
    },
    {
        imgURL: "/icons/shield-tick.svg",
        label: "Money Return",
        subtext: "7 days money return"
    },
    {
        imgURL: "/icons/support.svg",
        label: "24/7 Support",
        subtext: "Online support"
    },
    {
        imgURL: "/icons/support.svg",
        label: "Secure Payment",
        subtext: "100% secure"
    },
];
const HomeBenefitCard = ({ imgURL, label, subtext }: Props) => {
    return (
       <div className='border border-gray-300 flex px-4 py-4 gap-5'>
        <div className='w-[55px] h-[55px] flex justify-center items-center bg-[#ff7011] rounded-full'>
          <Image src={imgURL} width={50} height={50} alt="image" />
        </div>
        <div className='flex flex-col gap-1'>
          <h2 className='text-black text-xl font-bold'>{label}</h2>
          <p className="text-gray-700"> {subtext} </p>
        </div>
       </div>
    ) 
}
const HomeBenefit = () => {
  return (
    <section className="mt-2 flex justify-center  flex-wrap ">
      {services.map((service) => (
              <HomeBenefitCard key={service.label} {...service} />
        ))}
    </section>
  )
}

export default  SectionWrapper(HomeBenefit, "homebenefit");
