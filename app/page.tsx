import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="pt-5 pb-19">
        <div className="container mx-auto">
          <div className="flex items-stretch gap-10">
            <div className="w-[55%] flex flex-col justify-end">
              <div className="space-y-37">
                <div className="space-y-8">
                  <div className="space-y-6">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <div className="text-sm leading-150 tracking-[8%] font-medium uppercase">
                        Mental Clarity
                      </div>
                    </div>
                    <h1 className="text-[64px] font-semibold leading-120 tracking-[-3%]">
                      Find Balance Trusted{" "}
                      <span className="font-playfair-display italic">
                        Mental Health Experts
                      </span>
                    </h1>
                    <p className="text-base leading-150 text-[#51575C] max-w-[512px]">
                      Explore safe, confidential therapy sessions to support
                      your emotional well-being, anxiety relief, and personal
                      growth guided by professional licensed psychologists.
                    </p>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="bg-primary py-3 px-6 rounded-full text-white leading-120 text-sm font-medium flex items-center gap-1.5">
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
                        className="text-white"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </div>
                    <div className="border border-primary py-3 px-6 rounded-full text-primary leading-120 text-sm font-medium flex items-center gap-1.5">
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
                        className="text-primary"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center">
                    <div className="w-13 h-13 rounded-full border-3 border-white bg-[#C4C4C4]" />
                    <div className="w-13 h-13 rounded-full border-3 border-white bg-[#C4C4C4] -ml-5" />
                    <div className="w-13 h-13 rounded-full border-3 border-white bg-[#C4C4C4] -ml-5" />
                    <div className="w-13 h-13 rounded-full border-3 border-white bg-[#C4C4C4] -ml-5" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5">
                      <Image
                        src="/star.png"
                        alt="star"
                        height={20}
                        width={20}
                      />
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
            </div>
            <div className="relative w-[45%] h-195 bg-gray-400 rounded-2xl">
              <div className="absolute top-45 left-28">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/8 backdrop-blur-xl border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,1)]">
                  <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  <div className="text-sm leading-[150%] text-white">
                    Certified Therapists
                  </div>
                </div>
              </div>
              <div className="absolute top-65 right-18">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/8 backdrop-blur-xl border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,1)]">
                  <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  <div className="text-sm leading-[150%] text-white">
                    100% Confidential
                  </div>
                </div>
              </div>
              <div className="absolute bottom-74 left-12">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/8 backdrop-blur-xl border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,1)]">
                  <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  <div className="text-sm leading-[150%] text-white">
                    HIPAA Compliant
                  </div>
                </div>
              </div>
              <div className="absolute bottom-47 right-20">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/8 backdrop-blur-xl border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,1)]">
                  <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  <div className="text-sm leading-[150%] text-white">
                    Flexible Session
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
