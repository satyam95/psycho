import Reveal from "@/animations";
import { arrowIconClass, btnPrimary } from "@/animations/buttons";
import Image from "next/image";
import React from "react";

const FormSection = () => {
  return (
    <section className="pt-10 md:pt-19 pb-20 md:pb-38">
      <div className="container mx-auto px-4 xl:px-0">
        <div className="flex flex-col lg:flex-row items-stretch gap-16 xl:gap-38">
          <Reveal className="lg:w-125.5">
            <div className="lg:space-y-20">
              <div className="space-y-12">
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <div className="text-sm leading-150 tracking-[8%] font-medium uppercase">
                        Book Now
                      </div>
                    </div>
                  </div>
                  <h2 className="text-[32px] md:text-[48px] font-semibold leading-120 tracking-[-3%]">
                    Schedule Your Therapy
                    <br />
                    <span className="font-playfair-display italic">
                      in Minutes Easily Online
                    </span>
                  </h2>
                  <p className="text-base leading-150 text-[#51575C]">
                    Fill out the form below to get matched with a therapist and
                    choose a time that fits your needs and schedule.
                  </p>
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-16">
                  <div className="flex items-center gap-3 transition-transform duration-300 ease-out hover:-translate-y-0.5 motion-reduce:transition-none">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="26"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white"
                      >
                        <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                      </svg>
                    </div>
                    <div className="space-y-1">
                      <div className="text-sm leading-150 tracking-[8%] font-medium uppercase">
                        Call Us
                      </div>
                      <div className="text-lg leading-110 font-semibold">
                        +1 (555) 123-4567
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 transition-transform duration-300 ease-out hover:-translate-y-0.5 motion-reduce:transition-none">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="26"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white"
                      >
                        <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                      </svg>
                    </div>
                    <div className="space-y-1">
                      <div className="text-sm leading-150 tracking-[8%] font-medium uppercase">
                        Mail Us
                      </div>
                      <div className="text-lg leading-110 font-semibold">
                        hello@mindera.com
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden lg:grid grid-cols-2 gap-6">
                <div className="group w-full h-60 rounded-2xl bg-gray-400 relative overflow-hidden">
                  <Image
                    src="/images/form_hero.png"
                    alt="hero image"
                    fill
                    priority
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none"
                  />
                </div>
                <div className="group w-full h-60 rounded-2xl bg-gray-400 relative overflow-hidden">
                  <Image
                    src="/images/form_hero.png"
                    alt="hero image"
                    fill
                    priority
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none"
                  />
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal
            delay={140}
            className="flex-1 flex flex-col gap-6 justify-between"
          >
            <div className="space-y-8">
              <div className="grid-cols-1 md:grid grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="text-sm leading-120 tracking-[-3%] font-medium">
                    First Name
                  </div>
                  <input
                    placeholder="e.g Jonyu"
                    className="w-full outline-none p-3 bg-[#F6F6F6] border border-[#EEF2F5] rounded-md transition-all duration-300 ease-out focus:border-primary focus:ring-2 focus:ring-primary/15 focus:bg-white"
                  />
                </div>
                <div className="space-y-4">
                  <div className="text-sm leading-120 tracking-[-3%] font-medium">
                    Last Name
                  </div>
                  <input
                    placeholder="e.g Branstorm"
                    className="w-full outline-none p-3 bg-[#F6F6F6] border border-[#EEF2F5] rounded-md transition-all duration-300 ease-out focus:border-primary focus:ring-2 focus:ring-primary/15 focus:bg-white"
                  />
                </div>
                <div className="space-y-4">
                  <div className="text-sm leading-120 tracking-[-3%] font-medium">
                    Email
                  </div>
                  <input
                    placeholder="e.g hello@advenza.com"
                    className="w-full outline-none p-3 bg-[#F6F6F6] border border-[#EEF2F5] rounded-md transition-all duration-300 ease-out focus:border-primary focus:ring-2 focus:ring-primary/15 focus:bg-white"
                  />
                </div>
                <div className="space-y-4">
                  <div className="text-sm leading-120 tracking-[-3%] font-medium">
                    Phone
                  </div>
                  <input
                    placeholder="e.g (+62) 8123 4567 8900"
                    className="w-full outline-none p-3 bg-[#F6F6F6] border border-[#EEF2F5] rounded-md transition-all duration-300 ease-out focus:border-primary focus:ring-2 focus:ring-primary/15 focus:bg-white"
                  />
                </div>
                <div className="space-y-4">
                  <div className="text-sm leading-120 tracking-[-3%] font-medium">
                    Services
                  </div>
                  <input
                    placeholder="e.g Individual Therapy"
                    className="w-full outline-none p-3 bg-[#F6F6F6] border border-[#EEF2F5] rounded-md transition-all duration-300 ease-out focus:border-primary focus:ring-2 focus:ring-primary/15 focus:bg-white"
                  />
                </div>
                <div className="space-y-4">
                  <div className="text-sm leading-120 tracking-[-3%] font-medium">
                    Date
                  </div>
                  <input
                    placeholder="Date"
                    className="w-full outline-none p-3 bg-[#F6F6F6] border border-[#EEF2F5] rounded-md transition-all duration-300 ease-out focus:border-primary focus:ring-2 focus:ring-primary/15 focus:bg-white"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="text-sm leading-120 tracking-[-3%] font-medium">
                  Message
                </div>
                <textarea
                  rows={7}
                  placeholder="Write your message here..."
                  className="w-full outline-none p-3 bg-[#F6F6F6] border border-[#EEF2F5] rounded-md transition-all duration-300 ease-out focus:border-primary focus:ring-2 focus:ring-primary/15 focus:bg-white"
                />
              </div>
            </div>
            <div className="flex items-center">
              <div className={`group ${btnPrimary}`}>
                Book My Session
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
        </div>
      </div>
    </section>
  );
};

export default FormSection;
