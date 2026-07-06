import Reveal from "@/animations";
import Image from "next/image";

const WhyChooseSection = () => {
  return (
    <section className="py-10 md:py-19">
      <div className="container mx-auto px-4 xl:px-0">
        <div className="space-y-12">
          <Reveal className="space-y-6">
            <div className="flex items-center justify-center">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                <div className="text-sm leading-150 tracking-[8%] font-medium uppercase">
                  Why Choose Us
                </div>
              </div>
            </div>
            <h2 className="text-center text-[32px] md:text-[48px] font-semibold leading-120 tracking-[-3%]">
              Trusted Mental Health Support
              <br />
              <span className="font-playfair-display italic">
                That Empowers You
              </span>
            </h2>
          </Reveal>
          <div className="space-y-6 lg:space-y-0">
            <Reveal
              delay={80}
              className="group aspect-[32/15] bg-gray-400 rounded-2xl flex items-center justify-center relative overflow-hidden cursor-pointer"
            >
              <Image
                src="/images/video-bg.png"
                alt="hero image"
                fill
                priority
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none"
              />
              <div className="relative z-10 h-14 w-14 md:h-24 md:w-24 rounded-full bg-white flex items-center justify-center transition-transform duration-300 ease-out group-hover:scale-110 motion-reduce:transition-none">
                <Image
                  src="/play.png"
                  alt="play"
                  width={24}
                  height={31}
                  className="ml-1 w-4 h-4 md:w-6 md:h-[31px]"
                />
              </div>
            </Reveal>
            <div className="relative z-10 flex justify-center lg:-mt-24 lg:px-6 xl:px-0">
              <Reveal
                delay={160}
                className="p-6 rounded-2xl bg-[#E3EEED] flex flex-col md:flex-row items-center justify-center gap-6"
              >
                <div className="p-6 rounded-2xl bg-white space-y-4 max-w-88 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-xl motion-reduce:transition-none">
                  <div className="font-semibold text-[22px] leading-120">
                    👩‍⚕️ Licensed{" "}
                    <span className="font-playfair-display italic">
                      Therapists
                    </span>
                  </div>
                  <p className="text-base leading-150 text-[#51575C]">
                    All our professionals are certifiedd offi experienced,
                    deeply committ to ethical, mentaly personalized.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-white space-y-4 max-w-88 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-xl motion-reduce:transition-none">
                  <div className="font-semibold text-[22px] leading-120">
                    🔒 Confidential{" "}
                    <span className="font-playfair-display italic">& Save</span>
                  </div>
                  <p className="text-base leading-150 text-[#51575C]">
                    Your privacy is our top priority. Every hass session is
                    fully secure and judgment-its freel, mentaly personalized.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-white space-y-4 max-w-88 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-xl motion-reduce:transition-none">
                  <div className="font-semibold text-[22px] leading-120">
                    💬 Flexible{" "}
                    <span className="font-playfair-display italic">
                      & Accessible
                    </span>
                  </div>
                  <p className="text-base leading-150 text-[#51575C]">
                    Online or in-person sessions available to suit your schedule
                    — anytime, this ilearn anywhere, mentaly personalized.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
