import Reveal from "@/animations";
import { arrowIconClass, btnPrimary } from "@/animations/buttons";
import Image from "next/image";
import React from "react";

const TeamSection = () => {
  return (
    <section className="py-10 md:py-19 px-3">
      <div className="rounded-2xl bg-[#E3EEEE] py-16 lg:py-24 xl:py-38">
        <div className="container mx-auto px-4 xl:px-0">
          <div className="space-y-12">
            <Reveal className="space-y-6">
              <div className="flex items-center justify-center">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  <div className="text-sm leading-150 tracking-[8%] font-medium uppercase">
                    Our Team
                  </div>
                </div>
              </div>
              <h2 className="text-center text-[32px] md:text-[48px] font-semibold leading-120 tracking-[-3%]">
                Meet the Therapists
                <br />
                <span className="font-playfair-display italic">
                  Behind Your Healing
                </span>
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Reveal delay={0} className="space-y-4">
                <div className="group w-full h-85 rounded-2xl bg-gray-400 relative overflow-hidden">
                  <Image
                    src="/images/team_1.png"
                    alt="hero image"
                    fill
                    priority
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none"
                  />
                </div>
                <div className="rounded-xl bg-white p-3 flex items-center justify-between transition-shadow duration-300 ease-out hover:shadow-lg">
                  <div className="space-y-1">
                    <div className="font-semibold text-[22px] leading-120">
                      Dr. Clara{" "}
                      <span className="font-playfair-display italic">
                        Jensen
                      </span>
                    </div>
                    <p className="text-base leading-150 text-[#0B504F]">
                      Clinical Psychologist
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center transition-transform duration-300 ease-out hover:scale-110 motion-reduce:transition-none cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-white"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={80} className="space-y-4 mt-6">
                <div className="group w-full h-85 rounded-2xl bg-gray-400 relative overflow-hidden">
                  <Image
                    src="/images/team_2.png"
                    alt="hero image"
                    fill
                    priority
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none"
                  />
                </div>
                <div className="rounded-xl bg-white p-3 flex items-center justify-between transition-shadow duration-300 ease-out hover:shadow-lg">
                  <div className="space-y-1">
                    <div className="font-semibold text-[22px] leading-120">
                      Michael,{" "}
                      <span className="font-playfair-display italic">
                        M.Psi
                      </span>
                    </div>
                    <p className="text-base leading-150 text-[#0B504F]">
                      Licensed Therapist
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-primary flex items-center justify-center transition-all duration-300 ease-out hover:scale-110 hover:bg-primary motion-reduce:transition-none cursor-pointer group/icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary -rotate-45 transition-colors duration-300 group-hover/icon:text-white"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={160} className="space-y-4">
                <div className="group w-full h-85 rounded-2xl bg-gray-400 relative overflow-hidden">
                  <Image
                    src="/images/team_3.png"
                    alt="hero image"
                    fill
                    priority
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none"
                  />
                </div>
                <div className="rounded-xl bg-white p-3 flex items-center justify-between transition-shadow duration-300 ease-out hover:shadow-lg">
                  <div className="space-y-1">
                    <div className="font-semibold text-[22px] leading-120">
                      Soflea,{" "}
                      <span className="font-playfair-display italic">
                        Ph.D.
                      </span>
                    </div>
                    <p className="text-base leading-150 text-[#0B504F]">
                      Family Therapist
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-primary flex items-center justify-center transition-all duration-300 ease-out hover:scale-110 hover:bg-primary motion-reduce:transition-none cursor-pointer group/icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary -rotate-45 transition-colors duration-300 group-hover/icon:text-white"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={240} className="space-y-4 mt-6">
                <div className="group w-full h-85 rounded-2xl bg-gray-400 relative overflow-hidden">
                  <Image
                    src="/images/team_4.png"
                    alt="hero image"
                    fill
                    priority
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none"
                  />
                </div>
                <div className="rounded-xl bg-white p-3 flex items-center justify-between transition-shadow duration-300 ease-out hover:shadow-lg">
                  <div className="space-y-1">
                    <div className="font-semibold text-[22px] leading-120">
                      Lucas{" "}
                      <span className="font-playfair-display italic">
                        Ainsley
                      </span>
                    </div>
                    <p className="text-base leading-150 text-[#0B504F]">
                      Online Therapy
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-primary flex items-center justify-center transition-all duration-300 ease-out hover:scale-110 hover:bg-primary motion-reduce:transition-none cursor-pointer group/icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary -rotate-45 transition-colors duration-300 group-hover/icon:text-white"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Reveal>
            </div>
            <div className="flex items-center justify-center">
              <div className={`group ${btnPrimary}`}>
                View All Therapist
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
