"use client"

import  Frame1  from "@/assets/frame1.jpg";
import  Frame2  from "@/assets/frame1.jpg";
import  Frame3  from "@/assets/frame1.jpg";
import  Frame4  from "@/assets/frame1.png";
import  Frame5  from "@/assets/frame1.png";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const listVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeInOut", 
    },
  },
};


const AboutUs = () => {
  return (
  <section className="">
    <div className='flex flex-col mb-11 gap-10 '>
    

      <h2 className='px-10 text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#01963f] text-transparent bg-clip-text mt-1'>
    Our Story </h2>

    <div className='flex flex-1 flex-col md:flex-row md:px-10 px-5 gap-8'>
        <Image
          src={Frame2}
          alt='Trainer'
          width={300}
          height={350}
          className='object-contain w-full rounded-4xl'
        />
         <Image
          src={Frame1}
          alt='Trainer'
          width={300}
          height={350}
          className='object-contain w-full rounded-4xl'
        />
      </div>
      <div className="w-full text-lg text-gray-800 px-10 md:px-20">
  <p>
    Wellness With Almazin was born out of a simple but powerful intention: to bring people of like minds together in a space
    where wellness isn&#39;t just a goal, but a way of life.
    Through years of experience across communities here in Nigeria and abroad, I&#39;ve learned one clear truth:
    when people are well, they show up better for themselves, their families, and communities.
  </p>

  <br /><br />

  <p>
    This platform is not about fitness fads or temporary habits. It&#39;s about deep, physical, mental, and spiritual sustainable growth.
    It&#39;s about creating a future where people challenge each other to become better, stronger, and more grounded.
    Wellness With Almazin is more than just a wellness platform, it&#39;s a movement. Whether it&#39;s through our run club group sessions, business mixers,
    or conversations that shift perspective, this is a space where transformation begins.
  </p>
</div>

      
     </div>

     <div className='flex justify-between px-10 mt-11 md:mt-20 mb-11 items-center max-lg:flex-col-reverse gap-10 max-container'>
     <div className='flex flex-1 flex-col font-bold gap-8'>
        <div className="flex flex-col px-10 py-5 shadow-md  bg-[#324F3B] rounded-2xl p-1">
        <h2 className='text-left text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-white text-transparent bg-clip-text mt-1'>
        MISSION </h2>
         <p className='mt-4 font-montserrat  text-white text-lg leading-7'>
          To inspire and nurture a community that values wellness, discipline, and self-awareness rooted in faith, accountability and holistic living.  </p>
        </div>
        <div className="flex flex-col px-10 py-5 shadow-md bg-[#324F3B] rounded-2xl p-1">
        <h2 className='text-left text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-white text-transparent bg-clip-text mt-1'>
        VISION </h2>
        <p className='mt-6 font-montserrat text-white text-lg leading-7'>
         To become a trusted and impactful wellness hub for youth and adults alike - combining fitness, spiritual grounding, mental health awareness, and clean living into an actionable lifestyle.  </p>
        </div>
      </div>
      <div className='flex flex-1 flex-col '>
        
          <Image
          src={Frame3}
          alt='Trainer'
          width={600}
          height={700}
          className='object-contain w-full rounded-4xl'
        />
        
      </div>

       
    </div>

    <div className="p-0 bg-[#324F3B] mt-20 pb-10">
    <h2 className='text-center text-3xl py-10 md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-white text-transparent bg-clip-text mt-1'>
    CEO&#39;s Corner </h2>

    <div className='flex flex-1 flex-col px-10 items-center justify-center pb-5'>
  <div className="p-2 bg-white rounded-full border-4 border-white">
    <Image
      src={Frame4}
      alt='Trainer'
      width={500}
      height={500}
      className='object-cover rounded-full'
    />
  </div>

  <h2 className='text-center bg-white rounded-4xl p-2 px-4 text-2xl font-bold text-[#324F3B] mt-3'>
    AHMED MOHAMMED ALMAKURA
  </h2>
  <h2 className='text-center  rounded-4xl p-2 text-2xl font-bold text-white mt-3'>
    FOUNDER & CEO
  </h2>
  <p className='mt-4 font-montserrat text-center text-white text-lg leading-7'>
        I&#39;m Ahmed Mohammed Almakura, a young man, but already deep into a lifelong pursuit of wellness, growth, and meaningful connection. 
      </p>
</div>


   <div className="bg-white pb-10 flex flex-col lg:flex-row gap-10 mt-10 mx-6 lg:mx-30 lg:py-10 text-black/20 rounded-4xl">

  <div className="flex flex-1 flex-col items-center justify-center mx-3 my-3 lg:my-10 lg:mx-10">
   <div className="p-2 bg-[#324F3B] rounded-full border-4  border-white">
    <Image
      src={Frame5}
      alt='Trainer'
      width={500}
      height={500}
      className='object-cover rounded-full'
    />
  </div>

  <h2 className='text-center bg-[#324F3B] rounded-4xl p-2 px-4 text-2xl font-bold text-white mx-3 mt-3'>
    AHMED MOHAMMED ALMAKURA
  </h2>
  <h2 className='text-center  rounded-4xl p-2 text-2xl font-bold text-[#324F3B] mt-1 mb-5'>
    FOUNDER & CEO
  </h2>
  </div>


  <div className="flex flex-1 flex-col gap-4 px-10">
   <h2 className='text-left rounded-4xl text-3xl md:text-[35px] md:leading-[45px] font-bold tracking-tighter text-[#324F3B] mt-3'>
    QUALIFICATIONS
  </h2>
    
  <motion.ul
        className="space-y-4 list-none"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={listVariants}
      >
        {[
          "Bachelors of Sciences in Occupational Therapy",
          "Certified Level 2 TRX Sports Medicine Trainer",
          "Certified Level 2 TRX Sports Medicine Trainer",
        ].map((item, index) => (
          <motion.li
            key={index}
            variants={itemVariants}
            className="flex items-start gap-3 bg-white rounded-xl mt-4  shadow-md p-2 border-l-4 border-[#324F3B] text-gray-800"
          >
            <span className="text-[#324F3B] text-xl">•</span>
            <span className="text-base md:text-lg">{item}</span>
          </motion.li>
        ))}
      </motion.ul>
    

  <h2 className='text-left rounded-4xl text-3xl md:text-[35px] md:leading-[45px] font-bold tracking-tighter text-[#324F3B] mt-3'>
    SPECIALIZATIONS
  </h2>
  <motion.ul
        className="space-y-4 list-none"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={listVariants}
      >
        {[
          "Holistic Fitness",
          "Senior and Youth Fitness",
          "Mindset and Behaviour modification",
          "Weight loss and body recomposition",
          "Group Fitness Training",
          "Nutrition & Supplimentation Guidance",
          "Specific Sport Training",
          "Rehab Training",
        ].map((item, index) => (
          <motion.li
            key={index}
            variants={itemVariants}
            className="flex items-start gap-3 bg-white rounded-xl mt-4  shadow-md p-2 border-l-4 border-[#324F3B] text-gray-800"
          >
            <span className="text-[#324F3B] text-xl">•</span>
            <span className="text-base md:text-lg">{item}</span>
          </motion.li>
        ))}
      </motion.ul>
   </div>

   </div>

    </div>
    </section>
  )
}

export default AboutUs