import Image from "next/image";
import { Navbar } from "@/components/navbar/Navbar";
import  HeroNew  from "@/components/Heronew";
import ExperienceTimeline from "@/components/Experience";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import HomeBenefit from "@/components/HomeBenefit";
import Pricing from "@/components/pricing/Pricing";
export default function Home() {
  return (
    <div className="">
      
      <HeroNew/>
      <HomeBenefit />
      <ExperienceTimeline />
      <Services />
      <Pricing />
      <Testimonials/>
      
    </div>
  );
}
