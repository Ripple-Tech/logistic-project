"use client";

import { Button } from "@/components/ui/button";
import CheckIcon from "@/assets/check.svg";
import CheckWhiteIcon from "@/assets/checkwhite.svg";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import FAQSection from "./FAQquestion";

const pricingTiers = [
  {
    title: "Starter (Free)",
    monthlyPrice: 0,
    buttonText: "Get Started",
    popular: false,
    inverse: false,
    features: [
      "manage up to 10 shipments ",
      "Basic shipments tracking",
      "Standard delivery timeline",
      "Email notifications",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 20,
    buttonText: "Upgrade to Business",
    popular: true,
    inverse: false,
    features: [
      "All Starter features",
      "Unlimited shipments creation",
      "Real-time shipments tracking",
      "Performance dashboard",
      "Customer support",
    ],
  },
  {
    title: "Enterprise",
    monthlyPrice: 50,
    buttonText: "Go Enterprise",
    popular: false,
    inverse: true,
    features: [
      "All Business features",
      "Advanced analytics & reporting",
      "Multiple staff accounts",
      "Priority customer support",
      "API integrations",
      "Fraud monitoring & alerts",
    ],
  },
];

const Pricing = () => {
  return (
    <section>
      <div className="py-16 px-8 gap-4 max-w-screen-2xl mx-auto">
        <div className="text-center my-8">
          <h2 className="section-title">Pricing Plans</h2>
          <p className="text-center md:text-[28px] text-[22px] leading-[30px] tracking-tight text-[#010D3E] mt-5">
            Choose the right plan to streamline your logistics operations.
          </p>
          <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
            {pricingTiers.map(
              ({ title, monthlyPrice, buttonText, popular, inverse, features }) => (
                <div
                  key={title}
                  className={twMerge(
                    "p-10 rounded-3xl shadow-[0_7px_14px_#EAEAEA] max-w-xs w-full border border-[#ff7011] hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 relative",
                    inverse ? " bg-[#ff7011] text-white" : " bg-white text-black"
                  )}
                >
                  <div className="flex justify-between">
                    <h3
                      className={twMerge(
                        "text-lg font-bold text-black/50",
                        inverse && "text-white/80"
                      )}
                    >
                      {title}
                    </h3>
                    {popular && (
                      <div className="inline-flex text-sm px-4 font-semibold border border-white/20 py-1.5 rounded-xl">
                        <span className="text-[#ff7011] font-medium">
                          Popular
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-baseline mt-[30px] gap-1">
                    <span className="text-4xl font-bold tracking-tighter leading-none">
                      {monthlyPrice === 0 ? "Free" : `₦ ${monthlyPrice}k`}
                    </span>
                    {monthlyPrice !== 0 && (
                      <span
                        className={twMerge(
                          "tracking-tight font-bold text-black/50",
                          inverse && "text-white"
                        )}
                      >
                        /month
                      </span>
                    )}
                  </div>
                  <Button
                    className={twMerge(
                      "w-full mt-[30px] bg-[#ff7011] hover:bg-[#e6600f]",
                      inverse && "bg-white text-black hover:bg-gray-200"
                    )}
                  >
                    {buttonText}
                  </Button>
                  <ul className="flex flex-col gap-5 mt-8">
                    {features.map((feature) => (
                      <li
                        key={feature}
                        className={twMerge(
                          "text-sm flex items-center gap-4 text-gray-600",
                          inverse && "text-white"
                        )}
                      >
                        <Image
                          src={inverse ? CheckWhiteIcon : CheckIcon}
                          alt="icon"
                          width={24}
                          height={24}
                          className="inline-block w-4 h-4 mr-2"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            )}
          </div>
        </div>
      </div>
      <FAQSection />
    </section>
  );
};

export default Pricing;
