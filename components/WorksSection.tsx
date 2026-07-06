import Reveal from "@/animations";
import { arrowIconClass, btnPrimary } from "@/animations/buttons";
import Image from "next/image";

const WorksSection = () => {
  return (
    <section className="py-10 md:py-19">
      <div className="container mx-auto px-4 xl:px-0">
        <div className="flex flex-col lg:flex-row items-stretch gap-10 md:gap-18 lg:gap-12 justify-between">
          <Reveal className="w-full lg:w-75 flex flex-col gap-8 justify-between">
            <div className="space-y-4 lg:space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                <div className="text-sm leading-150 tracking-[8%] font-medium uppercase">
                  How It Works
                </div>
              </div>
              <h2 className="text-[32px] md:text-[48px] font-semibold leading-120 tracking-[-3%]">
                Guided Steps{" "}
                <span className="font-playfair-display italic">
                  Toward Better Mental Health
                </span>
              </h2>
            </div>
            <div className="flex items-center">
              <div className={`group ${btnPrimary}`}>
                Free Consultation
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
            delay={100}
            className="group hidden xl:block w-100 bg-gray-400 rounded-2xl relative overflow-hidden"
          >
            <Image
              src="/images/work_hero.png"
              alt="hero image"
              fill
              priority
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none"
            />
          </Reveal>
          <Reveal
            delay={200}
            className="w-full lg:w-121 space-y-8 lg:space-y-12"
          >
            <div className="flex items-start gap-3 transition-transform duration-300 ease-out hover:translate-x-1 motion-reduce:transition-none">
              <div className="mt-1 min-w-5 min-h-5 rounded-full border border-primary flex items-center justify-center">
                <div className="min-w-3 min-h-3 rounded-full bg-primary" />
              </div>
              <div className="space-y-3">
                <div className="font-semibold text-[22px] leading-120">
                  Initial{" "}
                  <span className="font-playfair-display italic">
                    Consultation
                  </span>
                </div>
                <p className="text-base leading-150 text-[#51575C]">
                  Fill out a brief form to tell us about your needs, goals, &
                  serey has taken possession of my entire soul, like
                  preferences.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 transition-transform duration-300 ease-out hover:translate-x-1 motion-reduce:transition-none">
              <div className="mt-1 min-w-5 min-h-5 rounded-full border border-primary flex items-center justify-center">
                <div className="min-w-3 min-h-3 rounded-full bg-primary" />
              </div>
              <div className="space-y-3">
                <div className="font-semibold text-[22px] leading-120">
                  Therapist{" "}
                  <span className="font-playfair-display italic">Matching</span>
                </div>
                <p className="text-base leading-150 text-[#51575C]">
                  Get matched with the right therapist based on your issueshas
                  ins taken possession of my entire soul like.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 transition-transform duration-300 ease-out hover:translate-x-1 motion-reduce:transition-none">
              <div className="mt-1 min-w-5 min-h-5 rounded-full border border-primary flex items-center justify-center">
                <div className="min-w-3 min-h-3 rounded-full bg-primary" />
              </div>
              <div className="space-y-3">
                <div className="font-semibold text-[22px] leading-120">
                  Book a{" "}
                  <span className="font-playfair-display italic">Session</span>
                </div>
                <p className="text-base leading-150 text-[#51575C]">
                  Choose a convenient time for your first online or in-person as
                  taken possession of my entire, like session.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 transition-transform duration-300 ease-out hover:translate-x-1 motion-reduce:transition-none">
              <div className="mt-1 min-w-5 min-h-5 rounded-full border border-primary flex items-center justify-center">
                <div className="min-w-3 min-h-3 rounded-full bg-primary" />
              </div>
              <div className="space-y-3">
                <div className="font-semibold text-[22px] leading-120">
                  Begin Your{" "}
                  <span className="font-playfair-display italic">Healing</span>
                </div>
                <p className="text-base leading-150 text-[#51575C]">
                  Start your therapy journey with support, clarity, and serenity
                  is taken soul, like personalized care from day one.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default WorksSection;
