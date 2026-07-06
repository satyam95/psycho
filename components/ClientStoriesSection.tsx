import Reveal from "@/animations";
import Image from "next/image";

const ClientStoriesSection = () => {
  return (
    <section className="py-10 md:py-19">
      <div className="container mx-auto px-4 xl:px-0">
        <div className="space-y-20">
          <div className="flex flex-col lg:flex-row items-stretch justify-between gap-10 md:gap-16 lg:gap-8 xl:gap-12">
            <Reveal className="lg:w-82 xl:w-92 flex flex-col justify-between">
              <div className="space-y-4 lg:space-y-6">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  <div className="text-sm leading-150 tracking-[8%] font-medium uppercase">
                    Client Stories
                  </div>
                </div>
                <h2 className="text-[32px] md:text-[48px] font-semibold leading-120 tracking-[-3%]">
                  What Our Clients{" "}
                  <span className="font-playfair-display italic">
                    Say About Us
                  </span>
                </h2>
              </div>
              <div className="hidden lg:block space-y-5">
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
                <div className="space-y-0.5">
                  <div className="text-2xl leading-150 font-semibold">
                    780k<span className="text-primary">+</span> Customer
                  </div>
                  <div className="text-sm leading-150 text-[#51575C]">
                    Satisfied with our services
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={120} className="lg:w-191 space-y-6">
              <div className="p-6 bg-[#E3EEED] rounded-xl transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl motion-reduce:transition-none">
                <div className="flex flex-col md:flex-row items-stretch justify-between gap-8">
                  <div className="group w-71 h-67 bg-gray-400 rounded-lg relative overflow-hidden cursor-pointer">
                    <Image
                      src="/images/client_1.png"
                      alt="hero image"
                      fill
                      priority
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none"
                    />
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                      <div className="min-w-[146px] text-base text-white leading-150 font-semibold flex items-center gap-2 py-2 px-5 rounded-md bg-[#261C17]/16 border border-white/10 transition-transform duration-300 ease-out group-hover:scale-105 motion-reduce:transition-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-white"
                        >
                          <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
                        </svg>
                        Play Video
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="space-y-6">
                      <div className="flex items-center gap-1">
                        <Image
                          src="/star.png"
                          alt="star"
                          width={24}
                          height={24}
                        />
                        <Image
                          src="/star.png"
                          alt="star"
                          width={24}
                          height={24}
                        />
                        <Image
                          src="/star.png"
                          alt="star"
                          width={24}
                          height={24}
                        />
                        <Image
                          src="/star.png"
                          alt="star"
                          width={24}
                          height={24}
                        />
                        <Image
                          src="/star.png"
                          alt="star"
                          width={24}
                          height={24}
                        />
                      </div>
                      <p className="text-base leading-150 text-[#51575C]">
                        "I used to feel completely lost and overwhelmed. hasti
                        Thanks to my therapist at Mindora, I’ve found clarity,
                        confidence, and a new sense of peace. The sessions felt
                        safe, personal, and deeply healing."
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <div className="font-medium text-lg leading-150">
                          Brandon John
                        </div>
                        <div className="text-primary text-base leading-150">
                          CEO, TeamTalk
                        </div>
                      </div>
                      <Image
                        src="/quote.png"
                        alt="quote icon"
                        width={41}
                        height={33}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-[#E3EEED] rounded-xl transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl motion-reduce:transition-none">
                <div className="flex flex-col md:flex-row items-stretch justify-between gap-8">
                  <div className="group w-71 h-67 bg-gray-400 rounded-lg relative overflow-hidden cursor-pointer">
                    <Image
                      src="/images/client_2.png"
                      alt="hero image"
                      fill
                      priority
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none"
                    />
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                      <div className="min-w-[146px] text-base text-white leading-150 font-semibold flex items-center gap-2 py-2 px-5 rounded-md bg-[#261C17]/16 border border-white/10 transition-transform duration-300 ease-out group-hover:scale-105 motion-reduce:transition-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-white"
                        >
                          <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
                        </svg>
                        Play Video
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="space-y-6">
                      <div className="flex items-center gap-1">
                        <Image
                          src="/star.png"
                          alt="star"
                          width={24}
                          height={24}
                        />
                        <Image
                          src="/star.png"
                          alt="star"
                          width={24}
                          height={24}
                        />
                        <Image
                          src="/star.png"
                          alt="star"
                          width={24}
                          height={24}
                        />
                        <Image
                          src="/star.png"
                          alt="star"
                          width={24}
                          height={24}
                        />
                        <Image
                          src="/star.png"
                          alt="star"
                          width={24}
                          height={24}
                        />
                      </div>
                      <p className="text-base leading-150 text-[#51575C]">
                        "I never thought therapy would make such a big on isil
                        my life. Mindora helped me manage anxiety and understand
                        myself better. My therapist was patient, kind, and truly
                        listened to me every session."
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <div className="font-medium text-lg leading-150">
                          Julia Tandra
                        </div>
                        <div className="text-primary text-base leading-150">
                          CEO, Arktico
                        </div>
                      </div>
                      <Image
                        src="/quote.png"
                        alt="quote icon"
                        width={41}
                        height={33}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal className="space-y-10 md:space-y-12">
            <div className="flex justify-center">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                <div className="text-sm leading-150 tracking-[8%] font-medium uppercase">
                  Our Partner
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-6 flex-wrap">
              <div className="h-25 w-63 bg-[#F6F6F6] hover:bg-[#E3EEED] rounded-xl flex items-center justify-center transition-all duration-300 ease-out hover:-translate-y-1 motion-reduce:transition-none">
                <Image
                  src="/company-logo.png"
                  alt="company logo"
                  width={156}
                  height={40}
                />
              </div>
              <div className="h-25 w-63 bg-[#F6F6F6] hover:bg-[#E3EEED] rounded-xl flex items-center justify-center transition-all duration-300 ease-out hover:-translate-y-1 motion-reduce:transition-none">
                <Image
                  src="/company-logo.png"
                  alt="company logo"
                  width={156}
                  height={40}
                />
              </div>
              <div className="h-25 w-63 bg-[#F6F6F6] hover:bg-[#E3EEED] rounded-xl flex items-center justify-center transition-all duration-300 ease-out hover:-translate-y-1 motion-reduce:transition-none">
                <Image
                  src="/company-logo.png"
                  alt="company logo"
                  width={156}
                  height={40}
                />
              </div>
              <div className="h-25 w-63 bg-[#F6F6F6] hover:bg-[#E3EEED] rounded-xl flex items-center justify-center transition-all duration-300 ease-out hover:-translate-y-1 motion-reduce:transition-none">
                <Image
                  src="/company-logo.png"
                  alt="company logo"
                  width={156}
                  height={40}
                />
              </div>
              <div className="h-25 w-63 bg-[#F6F6F6] hover:bg-[#E3EEED] rounded-xl flex items-center justify-center transition-all duration-300 ease-out hover:-translate-y-1 motion-reduce:transition-none">
                <Image
                  src="/company-logo.png"
                  alt="company logo"
                  width={156}
                  height={40}
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ClientStoriesSection;
