"use client";

import { arrowIconClass, btnPrimary } from "@/animations/buttons";
import { navItems } from "@/data";
import { useEffect, useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-white/80 backdrop-blur-xl shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto py-5 px-4 xl:px-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-20">
            <div className="text-[26px] leading-120 tracking-[-3%] font-semibold transition-opacity duration-300 hover:opacity-80 cursor-pointer">
              Mind
              <span className="font-playfair-display italic">era</span>
            </div>
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navItems.map((item) => (
                <div
                  className="relative text-base leading-120 font-medium cursor-pointer text-black/90 transition-colors duration-300 hover:text-primary after:absolute after:left-0 after:-bottom-1.5 after:h-[1.5px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full motion-reduce:after:transition-none"
                  key={item}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-6">
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
              className="text-white cursor-pointer transition-opacity duration-300 hover:opacity-70 hidden md:block"
            >
              <path d="M4 5h16" />
              <path d="M4 12h16" />
              <path d="M4 19h16" />
            </svg>
            <div className={`group ${btnPrimary}`}>
              Get In Touch
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
        </div>
      </div>
    </header>
  );
};

export default Header;
