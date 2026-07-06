import Reveal from "@/animations";
import {
  arrowIconClass,
  btnOutlinePrimary,
  btnPrimary,
} from "@/animations/buttons";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="pt-28 lg:pt-5 pb-10 md:pb-19">
      <div className="container mx-auto px-4 xl:px-0">
        <div className="flex flex-col lg:flex-row items-stretch gap-10">
          <Reveal className="w-full lg:w-[55%] flex flex-col justify-end">
            <div className="space-y-10 lg:space-y-37">
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="hidden lg:flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <div className="text-sm leading-150 tracking-[8%] font-medium uppercase">
                      Mental Clarity
                    </div>
                  </div>
                  <h1 className="text-[42px] md:text-[64px] font-semibold leading-120 tracking-[-3%]">
                    Find Balance Trusted{" "}
                    <span className="font-playfair-display italic">
                      Mental Health Experts
                    </span>
                  </h1>
                  <p className="text-base leading-150 text-[#51575C] max-w-[512px]">
                    Explore safe, confidential therapy sessions to support your
                    emotional well-being, anxiety relief, and personal growth
                    guided by professional licensed psychologists.
                  </p>
                </div>
                <div className="flex items-start md:items-center gap-2 md:gap-6">
                  <div className={`group ${btnPrimary}`}>
                    Book A Session
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
                  <div className={`group ${btnOutlinePrimary}`}>
                    Explore Services
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
                      className={`text-primary group-hover:text-white ${arrowIconClass}`}
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  <div className="relative overflow-hidden w-13 h-13 rounded-full border-3 border-white bg-[#C4C4C4] transition-transform duration-300 ease-out hover:-translate-y-1 hover:z-10 motion-reduce:transition-none">
                    <Image
                      src="/images/avatar_1.jpg"
                      alt="hero image"
                      fill
                      priority
                      className="object-cover"
                    />
                  </div>
                  <div className="relative overflow-hidden w-13 h-13 rounded-full border-3 border-white bg-[#C4C4C4] -ml-5 transition-transform duration-300 ease-out hover:-translate-y-1 hover:z-10 motion-reduce:transition-none">
                    <Image
                      src="/images/avatar_2.jpg"
                      alt="hero image"
                      fill
                      priority
                      className="object-cover"
                    />
                  </div>
                  <div className="relative overflow-hidden w-13 h-13 rounded-full border-3 border-white bg-[#C4C4C4] -ml-5 transition-transform duration-300 ease-out hover:-translate-y-1 hover:z-10 motion-reduce:transition-none">
                    <Image
                      src="/images/avatar_3.jpg"
                      alt="hero image"
                      fill
                      priority
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5">
                    <Image src="/star.png" alt="star" height={20} width={20} />
                    <div className="text-base leading-150">
                      4.9/5 Rating clients
                    </div>
                  </div>
                  <div className="text-[#51575C] text-base leading-150">
                    Trusted by 1,200+ Clients
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal
            delay={120}
            className="group relative overflow-hidden w-full lg:w-[45%] h-152 lg:h-195 bg-gray-400 rounded-2xl"
          >
            <Image
              src="/images/hero.png"
              alt="hero image"
              fill
              priority
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none"
            />
            <div className="absolute top-18 md:top-45 left-6 md:left-28">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/8 backdrop-blur-xl border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,1)] transition-transform duration-300 ease-out hover:scale-105 motion-reduce:transition-none">
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
                <div className="text-sm leading-[150%] text-white">
                  Certified Therapists
                </div>
              </div>
            </div>
            <div className="absolute top-32 md:top-65 right-6 md:right-18">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/8 backdrop-blur-xl border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,1)] transition-transform duration-300 ease-out hover:scale-105 motion-reduce:transition-none">
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
                <div className="text-sm leading-[150%] text-white">
                  100% Confidential
                </div>
              </div>
            </div>
            <div className="absolute bottom-46 md:bottom-74 left-6 md:left-12">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/8 backdrop-blur-xl border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,1)] transition-transform duration-300 ease-out hover:scale-105 motion-reduce:transition-none">
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
                <div className="text-sm leading-[150%] text-white">
                  HIPAA Compliant
                </div>
              </div>
            </div>
            <div className="absolute bottom-24 md:bottom-47 right-6 md:right-20">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/8 backdrop-blur-xl border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,1)] transition-transform duration-300 ease-out hover:scale-105 motion-reduce:transition-none">
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
                <div className="text-sm leading-[150%] text-white">
                  Flexible Session
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
