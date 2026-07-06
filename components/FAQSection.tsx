"use client";

import Reveal from "@/animations";
import { arrowIconClass, btnPrimary } from "@/animations/buttons";
import { faqItems } from "@/data";
import Image from "next/image";
import { useState } from "react";

const FAQSection = () => {
  const [openFaq, setOpenFaq] = useState(0);
  return (
    <section className="py-10 md:py-19">
      <div className="container mx-auto px-4 xl:px-0">
        <div className="flex flex-col-reverse lg:flex-row items-stretch gap-10 xl:gap-16">
          <Reveal className="lg:w-76 xl:w-122 rounded-2xl bg-[#E3EEEE] p-8 space-y-6">
            <div className="group rounded-xl bg-gray-400 h-105.5 relative overflow-hidden">
              <Image
                src="/images/faq_hero.png"
                alt="hero image"
                fill
                priority
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none"
              />
            </div>
            <div className="space-y-3">
              <div className="font-semibold text-[22px] leading-120">
                Have more{" "}
                <span className="font-playfair-display italic">
                  any questions?
                </span>
              </div>
              <p className="text-base leading-150 text-[#51575C]">
                One morning, when Gregor Samsa woke will from troubled dreams,
                he found il himself brown geting questions your.
              </p>
            </div>
            <div className="flex items-center">
              <div className={`group ${btnPrimary}`}>
                Free Consultations
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`text-white ${arrowIconClass}`}
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </div>
            </div>
          </Reveal>
          <Reveal
            delay={120}
            className="flex-1 flex flex-col justify-between gap-12 lg:gap-6"
          >
            <div className="space-y-4 lg:space-y-6">
              <div className="flex items-center">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  <div className="text-sm leading-150 tracking-[8%] font-medium uppercase">
                    Need Help
                  </div>
                </div>
              </div>
              <h2 className="text-[32px] md:text-[48px] font-semibold leading-120 tracking-[-3%]">
                Get Clear Answers Common Their
                <br />
                <span className="font-playfair-display italic">
                  Mental Health Questions
                </span>
              </h2>
            </div>
            <div className="space-y-4">
              {faqItems.map((item, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={item.question}
                    className={`rounded-lg p-6 transition-colors duration-300 ease-out ${
                      isOpen ? "bg-primary" : "bg-[#F6F6F6] hover:bg-[#EEF2F5]"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between gap-4 text-left cursor-pointer bg-transparent"
                    >
                      <div
                        className={`font-semibold text-[22px] leading-120 ${
                          isOpen ? "text-white" : "text-black"
                        }`}
                      >
                        {item.question}
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`shrink-0 transition-colors duration-300 ${
                          isOpen ? "text-white" : "text-black"
                        }`}
                      >
                        <path d="M5 12h14" />
                        <path
                          d="M12 5v14"
                          className={`transition-transform duration-300 ease-out motion-reduce:transition-none ${
                            isOpen ? "scale-y-0" : "scale-y-100"
                          }`}
                        />
                      </svg>
                    </button>
                    <div
                      className={`grid overflow-hidden transition-all duration-300 ease-out motion-reduce:transition-none ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <p
                        className={`min-h-0 text-base leading-150 font-medium ${
                          isOpen ? "text-white pt-6" : "text-[#51575C]"
                        }`}
                      >
                        {item.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
