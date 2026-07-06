import Reveal from "@/animations";
import { arrowIconClass, btnPrimary } from "@/animations/buttons";
import Image from "next/image";

const ServicesSection = () => {
  return (
    <section className="py-10 md:py-19 px-4">
      <div className="bg-[#E3EEEE] rounded-2xl py-10 md:py-16 lg:py-24 xl:py-38">
        <div className="container mx-auto px-4 xl:px-0">
          <div className="flex flex-col md:flex-row items-stretch gap-12 xl:gap-20">
            <Reveal className="md:w-1/2 space-y-8">
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  <div className="text-sm leading-150 tracking-[8%] font-medium uppercase">
                    Our Services
                  </div>
                </div>
                <h2 className="text-[32px] md:text-[48px] font-semibold leading-120 tracking-[-3%]">
                  Professional Mental Health{" "}
                  <span className="font-playfair-display italic">
                    Support Tailored to You
                  </span>
                </h2>
                <p className="text-base leading-150 text-[#51575C]">
                  We provide a wide range of therapy and mental wellness
                  services to support your unique you're facing anxiety,
                  depression, trauma, or personal growth. Our team ensures each
                  session is safe, confidential, and client-centered.
                </p>
              </div>
              <div className="flex items-center">
                <div className={`group ${btnPrimary}`}>
                  View All Services
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
            <Reveal delay={120} className="md:w-1/2 relative">
              <div className="hidden xl:block absolute top-0 left-0 z-10 w-full h-full">
                <div className="bg-white rounded-xl border border-[#EEF2F5] h-full"></div>
              </div>
              <div className="hidden xl:block absolute top-6 left-0 z-20 w-full h-[calc(100%-1.5rem)]">
                <div className="bg-white rounded-xl border border-[#EEF2F5] h-full"></div>
              </div>
              <div className="md:absolute bottom-0 left-0 z-30">
                <div className="bg-white rounded-xl border border-[#EEF2F5] p-6 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-xl motion-reduce:transition-none">
                  <div className="space-y-8">
                    <div className="flex items-center justify-between">
                      <div className="w-16 h-16 rounded-full bg-gray-300 relative overflow-hidden">
                        <Image
                          src="/images/service.jpg"
                          alt="hero image"
                          fill
                          priority
                          className="object-cover"
                        />
                      </div>
                      <div className="space-y-0">
                        <div className="text-sm leading-150 tracking-[8%] text-[#51575C] font-medium uppercase">
                          Start From
                        </div>
                        <div className="flex items-end gap-1">
                          <div className="font-semibold text-[22px] leading-120">
                            $185
                          </div>
                          <div className="font-playfair-display text-sm italic leading-120">
                            /Session
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="space-y-3">
                        <div className="font-semibold text-[22px] text-[#0F7676] leading-120">
                          Family{" "}
                          <span className="font-playfair-display italic">
                            Therapy
                          </span>
                        </div>
                        <p className="text-base leading-150 text-[#51575C]">
                          Build healthier family dynamics and address collective
                          issues mental through collaborative, guided sessions.
                        </p>
                      </div>
                      <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
                        <div className="text-sm leading-150 text-[#51575C] px-3 py-1.5 rounded-full border border-[#EEF2F5] transition-colors duration-300 hover:border-primary hover:text-primary">
                          Group Healing
                        </div>
                        <div className="text-sm leading-150 text-[#51575C] px-3 py-1.5 rounded-full border border-[#EEF2F5] transition-colors duration-300 hover:border-primary hover:text-primary">
                          Behavioral Guidance
                        </div>
                        <div className="text-sm leading-150 text-[#51575C] px-3 py-1.5 rounded-full border border-[#EEF2F5] transition-colors duration-300 hover:border-primary hover:text-primary">
                          Stronger Bonds
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
