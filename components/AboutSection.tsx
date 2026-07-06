import Reveal from "@/animations";
import { arrowIconClass, btnPrimary } from "@/animations/buttons";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="py-10 md:py-19">
      <div className="container mx-auto px-4 xl:px-0">
        <div className="space-y-10 lg:space-y-16">
          <Reveal className="space-y-6">
            <div className="flex items-center justify-center">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                <div className="text-sm leading-150 tracking-[8%] font-medium uppercase">
                  About Mindora
                </div>
              </div>
            </div>
            <h3 className="text-[22px] md:text-[28px] lg:text-[32px] leading-150 font-medium text-center md:px-10">
              At Mindora, we believe mental wellness is a vital part of a
              fulfilling life. Our licensed therapists provide{" "}
              <span className="text-[#51575C]">
                personalized, empathetic care to help you navigate stress,
                anxiety, trauma, or life transitions all in a safe, confidential
                space.
              </span>
            </h3>
            <div className="flex items-center justify-center">
              <div className={`group ${btnPrimary}`}>
                More About Us
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
          <div className="flex items-stretch gap-4 xl:gap-8">
            <Reveal
              delay={80}
              className="hidden lg:block group relative overflow-hidden w-[475px] h-[600px] bg-gray-400 rounded-2xl"
            >
              <Image
                src="/images/about_1.png"
                alt="hero image"
                fill
                priority
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none"
              />
            </Reveal>
            <Reveal
              delay={160}
              className="flex-1 flex flex-col justify-between gap-6 xl:gap-8"
            >
              <div className="group relative overflow-hidden w-full flex-1 bg-gray-400 rounded-2xl">
                <Image
                  src="/images/about_2.png"
                  alt="hero image"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none"
                />
              </div>
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
                <div className="flex items-end gap-2 xl:gap-3">
                  <div className="text-6xl leading-120 font-semibold font-playfair-display">
                    25<span className="text-primary">+</span>
                  </div>
                  <div className="text-[#51575C] leading-150 text-lg">
                    Years
                    <br />
                    Experience
                  </div>
                </div>
                <div className="flex items-end gap-2 xl:gap-3">
                  <div className="text-6xl leading-120 font-semibold font-playfair-display">
                    20<span className="text-primary">+</span>
                  </div>
                  <div className="text-[#51575C] leading-150 text-lg">
                    Professional
                    <br />
                    Therapist
                  </div>
                </div>
                <div className="flex items-end gap-2 xl:gap-3">
                  <div className="text-6xl leading-120 font-semibold font-playfair-display">
                    98<span className="text-primary">%</span>
                  </div>
                  <div className="text-[#51575C] leading-150 text-lg">
                    Clients
                    <br />
                    Satisfaction
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

export default AboutSection;
