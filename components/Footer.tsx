"use client";
import Reveal from "@/animations";
import Image from "next/image";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className="px-3 pb-3">
      <div className="bg-black rounded-2xl">
        <div className="container mx-auto px-4 xl:px-0">
          <div className="py-16 lg:py-24 xl:py-38 space-y-10 md:space-y-20">
            <Reveal className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="lg:w-160 xl:w-186 p-6 rounded-xl bg-primary">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="group h-43 w-70 bg-gray-400 rounded-lg relative overflow-hidden">
                    <Image
                      src="/images/footer_hero.png"
                      alt="hero image"
                      fill
                      priority
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none"
                    />
                  </div>
                  <div className="flex-1 space-y-8">
                    <h3 className="text-[32px] text-white leading-150 font-semibold">
                      Subscribe our{" "}
                      <span className="font-playfair-display italic">
                        newsletter
                      </span>
                    </h3>
                    <div className="group border-b border-white pb-4 flex items-center justify-between transition-colors duration-300 focus-within:border-white/70">
                      <input
                        placeholder="Your email here ..."
                        className="text-white outline-none w-full text-sm placeholder:text-white"
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white cursor-pointer transition-transform duration-300 ease-out group-hover:translate-x-1 motion-reduce:transition-none"
                      >
                        <path d="M18 8L22 12L18 16" />
                        <path d="M2 12H22" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-85 space-y-6">
                <div className="text-5xl leading-120 tracking-[-3%] font-semibold text-white">
                  Mind
                  <span className="font-playfair-display italic">era</span>
                </div>
                <p className="text-base leading-150 text-[#D8D8D8]">
                  At Mindora, we believe mental wellness is a vital part of a
                  good fulfilling life. Our therapists provide personalized,
                  empathetic.
                </p>
              </div>
            </Reveal>
            <Reveal
              delay={100}
              className="flex flex-wrap gap-x-20 gap-y-10 lg:gap-0 items-start lg:justify-between"
            >
              <div className="space-y-4 lg:w-27">
                <div className="text-[#D8D8D8] text-sm font-medium uppercase leading-120 tracking-[-8%]">
                  Company
                </div>
                <div className="space-y-2">
                  <div className="text-base text-white leading-150 cursor-pointer transition-colors duration-300 hover:text-primary">
                    About Us
                  </div>
                  <div className="text-base text-white leading-150 cursor-pointer transition-colors duration-300 hover:text-primary">
                    Career
                  </div>
                  <div className="text-base text-white leading-150 cursor-pointer transition-colors duration-300 hover:text-primary">
                    Our Approach
                  </div>
                  <div className="text-base text-white leading-150 cursor-pointer transition-colors duration-300 hover:text-primary">
                    Case Studies
                  </div>
                </div>
              </div>
              <div className="space-y-4 lg:w-48">
                <div className="text-[#D8D8D8] text-sm font-medium uppercase leading-120 tracking-[-8%]">
                  Services
                </div>
                <div className="space-y-2">
                  <div className="text-base text-white leading-150 cursor-pointer transition-colors duration-300 hover:text-primary">
                    Individual Therapy
                  </div>
                  <div className="text-base text-white leading-150 cursor-pointer transition-colors duration-300 hover:text-primary">
                    Family Therapy
                  </div>
                  <div className="text-base text-white leading-150 cursor-pointer transition-colors duration-300 hover:text-primary">
                    Couples Counseling
                  </div>
                  <div className="text-base text-white leading-150 cursor-pointer transition-colors duration-300 hover:text-primary">
                    Depression Treatment
                  </div>
                </div>
              </div>
              <div className="space-y-4 lg:w-27">
                <div className="text-[#D8D8D8] text-sm font-medium uppercase leading-120 tracking-[-8%]">
                  Resources
                </div>
                <div className="space-y-2">
                  <div className="text-base text-white leading-150 cursor-pointer transition-colors duration-300 hover:text-primary">
                    Blog / Articles
                  </div>
                  <div className="text-base text-white leading-150 cursor-pointer transition-colors duration-300 hover:text-primary">
                    Detail Guides
                  </div>
                  <div className="text-base text-white leading-150 cursor-pointer transition-colors duration-300 hover:text-primary">
                    FAQs
                  </div>
                  <div className="text-base text-white leading-150 cursor-pointer transition-colors duration-300 hover:text-primary">
                    Help Center
                  </div>
                </div>
              </div>
              <div className="space-y-4 lg:w-68">
                <div className="text-[#D8D8D8] text-sm font-medium uppercase leading-120 tracking-[-8%]">
                  Social Media
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="text-base text-white leading-150 cursor-pointer transition-colors duration-300 hover:text-primary">
                      Instagram
                    </div>
                    <div className="text-base text-white leading-150 cursor-pointer transition-colors duration-300 hover:text-primary">
                      Twitter
                    </div>
                    <div className="text-base text-white leading-150 cursor-pointer transition-colors duration-300 hover:text-primary">
                      Tiktok
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-base text-white leading-150 cursor-pointer transition-colors duration-300 hover:text-primary">
                      Facebook
                    </div>
                    <div className="text-base text-white leading-150 cursor-pointer transition-colors duration-300 hover:text-primary">
                      Linkedin
                    </div>
                    <div className="text-base text-white leading-150 cursor-pointer transition-colors duration-300 hover:text-primary">
                      Youtube
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4 lg:w-37">
                <div className="text-[#D8D8D8] text-sm font-medium uppercase leading-120 tracking-[-8%]">
                  Contact Info
                </div>
                <div className="space-y-2">
                  <div className="text-base text-white leading-150">
                    hello@mindera.com
                  </div>
                  <div className="text-base text-white leading-150">
                    123 Growth Street, San Francisco, CA
                  </div>
                  <div className="text-base text-white leading-150">
                    +1 (800) 123-4567
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
          <div className="py-8 border-t border-[#575654] flex items-center justify-between">
            <div className="text-sm leading-150 text-white/90">
              © 2025 All Right Reserved by Mindera.
            </div>
            <button
              onClick={scrollToTop}
              className="group text-base leading-120 text-white p-2 border border-white rounded-full hidden md:flex items-center gap-3 transition-all duration-300 ease-out hover:bg-white hover:text-black hover:-translate-y-0.5 motion-reduce:transition-none"
            >
              <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white transition-transform duration-300 ease-out group-hover:-translate-y-0.5 motion-reduce:transition-none"
                >
                  <path d="m5 12 7-7 7 7" />
                  <path d="M12 19V5" />
                </svg>
              </div>
              Back To Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
