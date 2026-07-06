import Reveal from "@/animations";
import {
  arrowIconClass,
  btnOutlineWhite,
  btnSolidWhite,
} from "@/animations/buttons";
import Image from "next/image";

const CTASection = () => {
  return (
    <section className="py-10 md:py-19 px-4 xl:px-3">
      <Reveal className="w-full h-120 md:h-145 bg-gray-400 rounded-2xl flex items-center justify-center relative overflow-hidden">
        <Image
          src="/images/cta_bg.png"
          alt="hero image"
          fill
          priority
          className="object-cover"
        />
        <div className="relative z-10 space-y-8">
          <div className="space-y-6 px-4">
            <div className="flex justify-center">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-white rounded-full" />
                <div className="text-sm text-white leading-150 tracking-[8%] font-medium uppercase">
                  Start Today
                </div>
              </div>
            </div>
            <h2 className="text-center text-white text-[32px] md:text-[48px] font-semibold leading-120 tracking-[-3%]">
              Take the First Step
              <br />
              <span className="font-playfair-display italic">
                Toward Mental Wellness
              </span>
            </h2>
            <p className="text-center text-base leading-150 text-white">
              Your healing journey starts now connect with a trusted therapist.
            </p>
          </div>
          <div className="flex items-center justify-center gap-6">
            <div className={`group ${btnSolidWhite}`}>
              Get Started
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
                className={`text-black ${arrowIconClass}`}
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </div>
            <div className={`group ${btnOutlineWhite}`}>
              Contact Us
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
                className={`text-white group-hover:text-black ${arrowIconClass}`}
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default CTASection;
