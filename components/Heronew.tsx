"use client";
"use client"
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "@/components/ui/MagicButton";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import { PlaceholdersAndVanishInput } from "./ui/placeholder-input";
import fetchInvoiceById from "@/actions/getInvoiceById";
import { useRouter } from 'next/navigation';

// Hero Data
const data = [
  {
    id: 1,
    mainText: "Reliable Freight",
    subText: "Delivering your goods safely, on time, every time.",
    img: "/hero1.jpg",
  },
  {
    id: 2,
    mainText: "Worldwide Delivery",
    subText: "Connecting continents with efficient logistics solutions.",
    img: "/hero2.jpg",
  },
  {
    id: 3,
    mainText: "Smart Warehousing",
    subText: "Optimize your inventory with our smart storage network.",
    img: "/hero3.jpg",
  },
  {
    id: 4,
    mainText: "Real-Time Tracking",
    subText: "Know where your cargo is — always and instantly.",
    img: "/hero4.jpg",
  },
  {
    id: 5,
    mainText: "Custom Logistics",
    subText: "Tailored solutions for businesses of every size.",
    img: "/hero5.jpg",
  },
];

const HeroNew = () => {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);
  const currentData = data[activeIndex % data.length];
  const [trackId, setTrackId] = useState('');
  const handleTrack = () => {
    if (!trackId) return; // If the input is empty, exit early.

    const invoiceId = fetchInvoiceById(trackId); 
    router.push(`/shipments/${trackId}`);
  };

  return (
    <div className="w-full h-[400px] lg:h-[500px] relative overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        effect="fade"
        speed={3000}
        fadeEffect={{ crossFade: true }}
        loop
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="mySwiper h-full"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id} className="h-full">
            <img
              src={item.img}
              alt={`hero-${item.id}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Hero Overlay */}
      <div className="absolute top-0 left-0 w-full h-full z-10 flex justify-center items-center bg-black/30">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center text-white text-center px-4">
        
        <h1 className='md:text-5xl text-4xl mx-auto lg:mx-0 font-bold leading-tight text-navy'>
          We're About {" "}
        
          <span className="uppercase tracking-widest text-[28px] sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 text-[#ff7011] ">
            {currentData.mainText}
          </span>
      </h1>

        

          <p className="text-sm md:text-lg lg:text-xl mb-4">
            Streamlined logistics solutions designed to scale with your business.
          </p>

          <PlaceholdersAndVanishInput
           placeholders={[
             "Enter tracking ID",
             "E.g. LGX123456789NG",
             "Track your parcel anywhere",
           ]}
           onChange={(e) => setTrackId(e.target.value)}
           onSubmit={(e) => handleTrack()}
         />
           
        </div>
      </div>
    </div>
  );
};

export default HeroNew;
