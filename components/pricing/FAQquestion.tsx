"use client";
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Is there a free plan?",
    answer:
      "Yes. Our Free plan allows you to manage basic shipments, track deliveries, and get started without any cost.",
  },
  {
    question: "Can I upgrade my plan later?",
    answer:
      "Absolutely. You can upgrade or downgrade your shipment management plan at any time through your account settings.",
  },
  {
    question: "Do you support bulk shipments?",
    answer:
      "Yes! Our Standard and Premium plans allow you to create and manage bulk shipments, ideal for businesses handling large volumes.",
  },
  {
    question: "How can I track my shipments?",
    answer:
      "Every shipment you create gets a unique tracking ID and link that customers can use to monitor delivery progress in real time.",
  },
  {
    question: "Can I cancel my subscription?",
    answer:
      "Yes. You can cancel anytime from your account settings. Your access will remain active until the end of the billing cycle.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#ff7011] mb-10">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = index === activeIndex;
          return (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl shadow-sm transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center text-left p-5 font-semibold text-gray-800 hover:bg-gray-50"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 transform transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`px-5 pb-5 text-gray-600 transition-all duration-300 ease-in-out ${
                  isOpen ? "block" : "hidden"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default FAQSection;
