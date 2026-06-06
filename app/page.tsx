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
      <section className="py-19">
        <div className="container mx-auto">
          <div className="space-y-16">
            <div className="space-y-6">
              <div className="flex items-center justify-center">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  <div className="text-sm leading-150 tracking-[8%] font-medium uppercase">
                    About Mindora
                  </div>
                </div>
              </div>
              <h3 className="text-[32px] leading-150 font-medium text-center px-10">
                At Mindora, we believe mental wellness is a vital part of a
                fulfilling life. Our licensed therapists provide{" "}
                <span className="text-[#51575C]">
                  personalized, empathetic care to help you navigate stress,
                  anxiety, trauma, or life transitions all in a safe,
                  confidential space.
                </span>
              </h3>
              <div className="flex items-center justify-center">
                <div className="bg-primary py-3 px-6 rounded-full text-white leading-120 text-sm font-medium flex items-center gap-1.5">
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
                    className="text-white"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex items-stretch gap-8">
              <div className="w-[475px] h-[600px] bg-gray-400 rounded-2xl" />
              <div className="flex-1 flex flex-col justify-between gap-8">
                <div className="w-full flex-1 bg-gray-400 rounded-2xl" />
                <div className="flex items-center justify-between">
                  <div className="flex items-end gap-3">
                    <div className="text-6xl leading-120 font-semibold font-playfair-display">
                      25<span className="text-primary">+</span>
                    </div>
                    <div className="text-[#51575C] leading-150 text-lg">
                      Years
                      <br />
                      Experience
                    </div>
                  </div>
                  <div className="flex items-end gap-3">
                    <div className="text-6xl leading-120 font-semibold font-playfair-display">
                      20<span className="text-primary">+</span>
                    </div>
                    <div className="text-[#51575C] leading-150 text-lg">
                      Professional
                      <br />
                      Therapist
                    </div>
                  </div>
                  <div className="flex items-end gap-3">
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
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-19 px-3">
        <div className="bg-[#E3EEEE] rounded-2xl py-38">
          <div className="container mx-auto">
            <div className="flex items-stretch gap-20">
              <div className="w-1/2 space-y-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <div className="text-sm leading-150 tracking-[8%] font-medium uppercase">
                      Our Services
                    </div>
                  </div>
                  <h2 className="text-[48px] font-semibold leading-120 tracking-[-3%]">
                    Professional Mental Health{" "}
                    <span className="font-playfair-display italic">
                      Support Tailored to You
                    </span>
                  </h2>
                  <p className="text-base leading-150 text-[#51575C]">
                    We provide a wide range of therapy and mental wellness
                    services to support your unique you're facing anxiety,
                    depression, trauma, or personal growth. Our team ensures
                    each session is safe, confidential, and client-centered.
                  </p>
                </div>
                <div className="flex items-center">
                  <div className="bg-primary py-3 px-6 rounded-full text-white leading-120 text-sm font-medium flex items-center gap-1.5">
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
                      className="text-white"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="w-1/2 relative">
                <div className="absolute top-0 left-0 z-10 w-full h-full">
                  <div className="bg-white rounded-xl border border-[#EEF2F5] h-full"></div>
                </div>
                <div className="absolute top-6 left-0 z-20 w-full h-[calc(100%-1.5rem)]">
                  <div className="bg-white rounded-xl border border-[#EEF2F5] h-full"></div>
                </div>
                <div className="absolute bottom-0 left-0 z-30">
                  <div className="bg-white rounded-xl border border-[#EEF2F5] p-6">
                    <div className="space-y-8">
                      <div className="flex items-center justify-between">
                        <div className="w-16 h-16 rounded-full bg-gray-300" />
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
                            Build healthier family dynamics and address
                            collective issues mental through collaborative,
                            guided sessions.
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="text-sm leading-150 text-[#51575C] px-3 py-1.5 rounded-full border border-[#EEF2F5]">
                            Group Healing
                          </div>
                          <div className="text-sm leading-150 text-[#51575C] px-3 py-1.5 rounded-full border border-[#EEF2F5]">
                            Behavioral Guidance
                          </div>
                          <div className="text-sm leading-150 text-[#51575C] px-3 py-1.5 rounded-full border border-[#EEF2F5]">
                            Stronger Bonds
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-19">
        <div className="container mx-auto">
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="flex items-center justify-center">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  <div className="text-sm leading-150 tracking-[8%] font-medium uppercase">
                    Why Choose Us
                  </div>
                </div>
              </div>
              <h2 className="text-center text-[48px] font-semibold leading-120 tracking-[-3%]">
                Trusted Mental Health Support
                <br />
                <span className="font-playfair-display italic">
                  That Empowers You
                </span>
              </h2>
            </div>
            <div className="space-y-0">
              <div className="aspect-[32/15] bg-gray-400 rounded-2xl flex items-center justify-center">
                <div className="h-24 w-24 rounded-full bg-white flex items-center justify-center">
                  <Image
                    src="/play.png"
                    alt="play"
                    width={24}
                    height={31}
                    className="ml-2"
                  />
                </div>
              </div>
              <div className="flex justify-center -mt-24">
                <div className="p-6 rounded-2xl bg-[#E3EEED] flex items-center justify-center gap-6">
                  <div className="p-6 rounded-2xl bg-white space-y-4 max-w-88">
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
                  <div className="p-6 rounded-2xl bg-white space-y-4 max-w-88">
                    <div className="font-semibold text-[22px] leading-120">
                      🔒 Confidential{" "}
                      <span className="font-playfair-display italic">
                        & Save
                      </span>
                    </div>
                    <p className="text-base leading-150 text-[#51575C]">
                      Your privacy is our top priority. Every hass session is
                      fully secure and judgment-its freel, mentaly personalized.
                    </p>
                  </div>
                  <div className="p-6 rounded-2xl bg-white space-y-4 max-w-88">
                    <div className="font-semibold text-[22px] leading-120">
                      💬 Flexible{" "}
                      <span className="font-playfair-display italic">
                        & Accessible
                      </span>
                    </div>
                    <p className="text-base leading-150 text-[#51575C]">
                      Online or in-person sessions available to suit your
                      schedule — anytime, this ilearn anywhere, mentaly
                      personalized.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-19">
        <div className="container mx-auto">
          <div className="flex items-stretch gap-12">
            <div className="w-75 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  <div className="text-sm leading-150 tracking-[8%] font-medium uppercase">
                    How It Works
                  </div>
                </div>
                <h2 className="text-[48px] font-semibold leading-120 tracking-[-3%]">
                  Guided Steps{" "}
                  <span className="font-playfair-display italic">
                    Toward Better Mental Health
                  </span>
                </h2>
              </div>
              <div className="flex items-center">
                <div className="bg-primary py-3 px-6 rounded-full text-white leading-120 text-sm font-medium flex items-center gap-1.5">
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
                    className="text-white"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-100 bg-gray-400 rounded-2xl"></div>
            <div className="w-121 space-y-12">
              <div className="flex items-start gap-3">
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
              <div className="flex items-start gap-3">
                <div className="mt-1 min-w-5 min-h-5 rounded-full border border-primary flex items-center justify-center">
                  <div className="min-w-3 min-h-3 rounded-full bg-primary" />
                </div>
                <div className="space-y-3">
                  <div className="font-semibold text-[22px] leading-120">
                    Therapist{" "}
                    <span className="font-playfair-display italic">
                      Matching
                    </span>
                  </div>
                  <p className="text-base leading-150 text-[#51575C]">
                    Get matched with the right therapist based on your issueshas
                    ins taken possession of my entire soul like.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 min-w-5 min-h-5 rounded-full border border-primary flex items-center justify-center">
                  <div className="min-w-3 min-h-3 rounded-full bg-primary" />
                </div>
                <div className="space-y-3">
                  <div className="font-semibold text-[22px] leading-120">
                    Book a{" "}
                    <span className="font-playfair-display italic">
                      Session
                    </span>
                  </div>
                  <p className="text-base leading-150 text-[#51575C]">
                    Choose a convenient time for your first online or in-person
                    as taken possession of my entire, like session.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 min-w-5 min-h-5 rounded-full border border-primary flex items-center justify-center">
                  <div className="min-w-3 min-h-3 rounded-full bg-primary" />
                </div>
                <div className="space-y-3">
                  <div className="font-semibold text-[22px] leading-120">
                    Begin Your{" "}
                    <span className="font-playfair-display italic">
                      Healing
                    </span>
                  </div>
                  <p className="text-base leading-150 text-[#51575C]">
                    Start your therapy journey with support, clarity, and
                    serenity is taken soul, like personalized care from day one.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-19 px-3">
        <div className="w-full h-145 bg-gray-400 rounded-2xl flex items-center justify-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex justify-center">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-white rounded-full" />
                  <div className="text-sm text-white leading-150 tracking-[8%] font-medium uppercase">
                    Start Today
                  </div>
                </div>
              </div>
              <h2 className="text-center text-white text-[48px] font-semibold leading-120 tracking-[-3%]">
                Take the First Step
                <br />
                <span className="font-playfair-display italic">
                  Toward Mental Wellness
                </span>
              </h2>
              <p className="text-center text-base leading-150 text-white">
                Your healing journey starts now connect with a trusted
                therapist.
              </p>
            </div>
            <div className="flex items-center justify-center gap-6">
              <div className="bg-white py-3 px-6 rounded-full text-black leading-120 text-sm font-medium flex items-center gap-1.5">
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
                  className="text-black"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </div>
              <div className="border border-white py-3 px-6 rounded-full text-white leading-120 text-sm font-medium flex items-center gap-1.5">
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
                  className="text-white"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-19">
        <div className="container mx-auto">
          <div className="flex items-stretch justify-between gap-12">
            <div className="w-92 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  <div className="text-sm leading-150 tracking-[8%] font-medium uppercase">
                    Client Stories
                  </div>
                </div>
                <h2 className="text-[48px] font-semibold leading-120 tracking-[-3%]">
                  What Our Clients{" "}
                  <span className="font-playfair-display italic">
                    Say About Us
                  </span>
                </h2>
              </div>
              <div className="space-y-5">
                <div className="flex items-center">
                  <div className="w-13 h-13 rounded-full border-3 border-white bg-[#C4C4C4]" />
                  <div className="w-13 h-13 rounded-full border-3 border-white bg-[#C4C4C4] -ml-5" />
                  <div className="w-13 h-13 rounded-full border-3 border-white bg-[#C4C4C4] -ml-5" />
                  <div className="w-13 h-13 rounded-full border-3 border-white bg-[#C4C4C4] -ml-5" />
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
            </div>
            <div className="w-191 space-y-6">
              <div className="p-6 bg-[#E3EEED] rounded-xl">
                <div className="flex items-stretch justify-between gap-8">
                  <div className="w-71 h-67 bg-gray-400 rounded-lg relative">
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                      <div className="min-w-[146px] text-base text-white leading-150 font-semibold flex items-center gap-2 py-2 px-5 rounded-md bg-[#261C17]/16 border border-white/10">
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
              <div className="p-6 bg-[#E3EEED] rounded-xl">
                <div className="flex items-stretch justify-between gap-8">
                  <div className="w-71 h-67 bg-gray-400 rounded-lg relative">
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                      <div className="min-w-[146px] text-base text-white leading-150 font-semibold flex items-center gap-2 py-2 px-5 rounded-md bg-[#261C17]/16 border border-white/10">
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
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
