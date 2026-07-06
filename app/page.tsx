"use client";

import Image from "next/image";
import {
  useEffect,
  useRef,
  useState,
  type ElementType,
  type ReactNode,
} from "react";

const navItems = ["Home", "Services", "About", "Projects", "Contact"];

const faqItems = [
  {
    question: "What is therapy, and how does it help?",
    answer:
      "Therapy is a safe, supportive space to explore emotions, challenges, and goals with a trained professional to improve mental well-being.",
  },
  {
    question: "Is online therapy as effective as in-person sessions?",
    answer:
      "Yes. Studies show online therapy can be just as effective as in-person sessions for most concerns, while offering more flexibility and easier access to specialists.",
  },
  {
    question: "What issues do your therapists specialize in?",
    answer:
      "Our team specializes in anxiety, depression, trauma, relationship issues, grief, and life transitions, with several therapists offering niche expertise in areas like burnout and postpartum care.",
  },
  {
    question: "How do I choose the right therapist?",
    answer:
      "Start with a free consultation call. We'll ask about your goals and preferences, then match you with a therapist whose approach and specialty fit your needs.",
  },
  {
    question: "How do I book my first session?",
    answer:
      "Fill out the booking form below, choose a convenient date and time, and you'll receive a confirmation email with everything you need to get started.",
  },
];

/**
 * Reveal
 * Lightweight, dependency-free scroll-entrance animation.
 * Uses IntersectionObserver + opacity/transform (GPU-friendly, no layout thrash).
 * Fully respects `prefers-reduced-motion` via Tailwind's `motion-reduce:` variant.
 */
function Reveal({
  children,
  className = "",
  delay = 0,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const Tag = as as any;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: inView ? `${delay}ms` : "0ms" }}
      className={`transition-all duration-700 ease-out will-change-transform motion-reduce:transition-none motion-reduce:transform-none ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
    >
      {children}
    </Tag>
  );
}

/** Shared hover-affordance classes for pill buttons (transform/opacity/shadow only). */
const btnPrimary =
  "bg-primary py-3 px-5 md:px-6 rounded-full text-white leading-120 text-sm font-medium flex items-center gap-1 md:gap-1.5 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/25 active:translate-y-0 active:scale-[0.98] motion-reduce:transition-none motion-reduce:hover:translate-y-0";

const btnOutlinePrimary =
  "border border-primary py-3 px-5 md:px-6 rounded-full text-primary leading-120 text-sm font-medium flex items-center gap-1 md:gap-1.5 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/20 active:translate-y-0 active:scale-[0.98] motion-reduce:transition-none motion-reduce:hover:translate-y-0";

const btnOutlineWhite =
  "border border-white py-3 px-5 md:px-6 rounded-full text-white leading-120 text-sm font-medium flex items-center gap-1 md:gap-1.5 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-white hover:text-black hover:shadow-lg active:translate-y-0 active:scale-[0.98] motion-reduce:transition-none motion-reduce:hover:translate-y-0";

const btnSolidWhite =
  "bg-white py-3 px-5 md:px-6 rounded-full text-black leading-120 text-sm font-medium flex items-center gap-1 md:gap-1.5 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:scale-[0.98] motion-reduce:transition-none motion-reduce:hover:translate-y-0";

/** Arrow icon nudges slightly on parent hover (uses group). */
const arrowIconClass =
  "transition-transform duration-300 ease-out group-hover:translate-x-0.5 motion-reduce:transition-none";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
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
      <main>
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
                        Explore safe, confidential therapy sessions to support
                        your emotional well-being, anxiety relief, and personal
                        growth guided by professional licensed psychologists.
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
        <section className="py-19">
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
                <h3 className="text-[28px] lg:text-[32px] leading-150 font-medium text-center px-10">
                  At Mindora, we believe mental wellness is a vital part of a
                  fulfilling life. Our licensed therapists provide{" "}
                  <span className="text-[#51575C]">
                    personalized, empathetic care to help you navigate stress,
                    anxiety, trauma, or life transitions all in a safe,
                    confidential space.
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
                  <div className="flex flex-col md:flex-row items-center justify-between">
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
        <section className="py-19 px-3">
          <div className="bg-[#E3EEEE] rounded-2xl py-16 lg:py-24 xl:py-38">
            <div className="container mx-auto px-4 xl:px-0">
              <div className="flex flex-col md:flex-row items-stretch gap-12 xl:gap-20">
                <Reveal className="md:w-1/2 space-y-8">
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
                    <div className={`group ${btnPrimary}`}>
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
                        className={`text-white ${arrowIconClass}`}
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Reveal>
                <Reveal delay={120} className="md:w-1/2 relative">
                  <div className="hidden xl:block absolute top-0 left-0 z-10 w-full h-full">
                    <div className="bg-white rounded-xl border border-[#EEF2F5] h-full"></div>
                  </div>
                  <div className="hidden xl:block absolute top-6 left-0 z-20 w-full h-[calc(100%-1.5rem)]">
                    <div className="bg-white rounded-xl border border-[#EEF2F5] h-full"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 z-30">
                    <div className="bg-white rounded-xl border border-[#EEF2F5] p-6 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-xl motion-reduce:transition-none">
                      <div className="space-y-8">
                        <div className="flex items-center justify-between">
                          <div className="w-16 h-16 rounded-full bg-gray-300 relative overflow-hidden">
                            <Image
                              src="/images/service.jpg"
                              alt="hero image"
                              fill
                              priority
                              className="object-cover"
                            />
                          </div>
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
                            <div className="text-sm leading-150 text-[#51575C] px-3 py-1.5 rounded-full border border-[#EEF2F5] transition-colors duration-300 hover:border-primary hover:text-primary">
                              Group Healing
                            </div>
                            <div className="text-sm leading-150 text-[#51575C] px-3 py-1.5 rounded-full border border-[#EEF2F5] transition-colors duration-300 hover:border-primary hover:text-primary">
                              Behavioral Guidance
                            </div>
                            <div className="text-sm leading-150 text-[#51575C] px-3 py-1.5 rounded-full border border-[#EEF2F5] transition-colors duration-300 hover:border-primary hover:text-primary">
                              Stronger Bonds
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
        <section className="py-19">
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
                <h2 className="text-center text-[48px] font-semibold leading-120 tracking-[-3%]">
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
                  <div className="relative z-10 h-24 w-24 rounded-full bg-white flex items-center justify-center transition-transform duration-300 ease-out group-hover:scale-110 motion-reduce:transition-none">
                    <Image
                      src="/play.png"
                      alt="play"
                      width={24}
                      height={31}
                      className="ml-2"
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
                        <span className="font-playfair-display italic">
                          & Save
                        </span>
                      </div>
                      <p className="text-base leading-150 text-[#51575C]">
                        Your privacy is our top priority. Every hass session is
                        fully secure and judgment-its freel, mentaly
                        personalized.
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
                        Online or in-person sessions available to suit your
                        schedule — anytime, this ilearn anywhere, mentaly
                        personalized.
                      </p>
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-19">
          <div className="container mx-auto px-4 xl:px-0">
            <div className="flex flex-col lg:flex-row items-stretch gap-18 lg:gap-12 justify-between">
              <Reveal className="w-full lg:w-75 flex flex-col gap-8 justify-between">
                <div className="space-y-4 lg:space-y-6">
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
              <Reveal delay={200} className="w-full lg:w-121 space-y-8 lg:space-y-12">
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
                      Fill out a brief form to tell us about your needs, goals,
                      & serey has taken possession of my entire soul, like
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
                      <span className="font-playfair-display italic">
                        Matching
                      </span>
                    </div>
                    <p className="text-base leading-150 text-[#51575C]">
                      Get matched with the right therapist based on your
                      issueshas ins taken possession of my entire soul like.
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
                      <span className="font-playfair-display italic">
                        Session
                      </span>
                    </div>
                    <p className="text-base leading-150 text-[#51575C]">
                      Choose a convenient time for your first online or
                      in-person as taken possession of my entire, like session.
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
                      <span className="font-playfair-display italic">
                        Healing
                      </span>
                    </div>
                    <p className="text-base leading-150 text-[#51575C]">
                      Start your therapy journey with support, clarity, and
                      serenity is taken soul, like personalized care from day
                      one.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
        <section className="py-19 px-4 xl:px-3">
          <Reveal className="w-full h-145 bg-gray-400 rounded-2xl flex items-center justify-center relative overflow-hidden">
            <Image
              src="/images/cta_bg.png"
              alt="hero image"
              fill
              priority
              className="object-cover"
            />
            <div className="relative z-10 space-y-8">
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
        <section className="py-19">
          <div className="container mx-auto px-4 xl:px-0">
            <div className="space-y-20">
              <div className="flex flex-col lg:flex-row items-stretch justify-between gap-16 lg:gap-8 xl:gap-12">
                <Reveal className="lg:w-82 xl:w-92 flex flex-col justify-between">
                  <div className="space-y-4 lg:space-y-6">
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
                    <div className="flex items-stretch justify-between gap-8">
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
                            "I used to feel completely lost and overwhelmed.
                            hasti Thanks to my therapist at Mindora, I’ve found
                            clarity, confidence, and a new sense of peace. The
                            sessions felt safe, personal, and deeply healing."
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
                    <div className="flex items-stretch justify-between gap-8">
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
                            "I never thought therapy would make such a big on
                            isil my life. Mindora helped me manage anxiety and
                            understand myself better. My therapist was patient,
                            kind, and truly listened to me every session."
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
              <Reveal className="space-y-12">
                <div className="flex justify-center">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <div className="text-sm leading-150 tracking-[8%] font-medium uppercase">
                      Our Partner
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-6">
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
        <section className="py-19 px-3">
          <div className="rounded-2xl bg-[#E3EEEE] py-16 lg:py-24 xl:py-38">
            <div className="container mx-auto px-4 xl:px-0">
              <div className="space-y-12">
                <Reveal className="space-y-6">
                  <div className="flex items-center justify-center">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <div className="text-sm leading-150 tracking-[8%] font-medium uppercase">
                        Our Team
                      </div>
                    </div>
                  </div>
                  <h2 className="text-center text-[48px] font-semibold leading-120 tracking-[-3%]">
                    Meet the Therapists
                    <br />
                    <span className="font-playfair-display italic">
                      Behind Your Healing
                    </span>
                  </h2>
                </Reveal>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <Reveal delay={0} className="space-y-4">
                    <div className="group w-full h-85 rounded-2xl bg-gray-400 relative overflow-hidden">
                      <Image
                        src="/images/team_1.png"
                        alt="hero image"
                        fill
                        priority
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none"
                      />
                    </div>
                    <div className="rounded-xl bg-white p-3 flex items-center justify-between transition-shadow duration-300 ease-out hover:shadow-lg">
                      <div className="space-y-1">
                        <div className="font-semibold text-[22px] leading-120">
                          Dr. Clara{" "}
                          <span className="font-playfair-display italic">
                            Jensen
                          </span>
                        </div>
                        <p className="text-base leading-150 text-[#0B504F]">
                          Clinical Psychologist
                        </p>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center transition-transform duration-300 ease-out hover:scale-110 motion-reduce:transition-none cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-white"
                        >
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </Reveal>
                  <Reveal delay={80} className="space-y-4 mt-6">
                    <div className="group w-full h-85 rounded-2xl bg-gray-400 relative overflow-hidden">
                      <Image
                        src="/images/team_2.png"
                        alt="hero image"
                        fill
                        priority
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none"
                      />
                    </div>
                    <div className="rounded-xl bg-white p-3 flex items-center justify-between transition-shadow duration-300 ease-out hover:shadow-lg">
                      <div className="space-y-1">
                        <div className="font-semibold text-[22px] leading-120">
                          Michael,{" "}
                          <span className="font-playfair-display italic">
                            M.Psi
                          </span>
                        </div>
                        <p className="text-base leading-150 text-[#0B504F]">
                          Licensed Therapist
                        </p>
                      </div>
                      <div className="w-12 h-12 rounded-full border border-primary flex items-center justify-center transition-all duration-300 ease-out hover:scale-110 hover:bg-primary motion-reduce:transition-none cursor-pointer group/icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary -rotate-45 transition-colors duration-300 group-hover/icon:text-white"
                        >
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </Reveal>
                  <Reveal delay={160} className="space-y-4">
                    <div className="group w-full h-85 rounded-2xl bg-gray-400 relative overflow-hidden">
                      <Image
                        src="/images/team_3.png"
                        alt="hero image"
                        fill
                        priority
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none"
                      />
                    </div>
                    <div className="rounded-xl bg-white p-3 flex items-center justify-between transition-shadow duration-300 ease-out hover:shadow-lg">
                      <div className="space-y-1">
                        <div className="font-semibold text-[22px] leading-120">
                          Soflea,{" "}
                          <span className="font-playfair-display italic">
                            Ph.D.
                          </span>
                        </div>
                        <p className="text-base leading-150 text-[#0B504F]">
                          Family Therapist
                        </p>
                      </div>
                      <div className="w-12 h-12 rounded-full border border-primary flex items-center justify-center transition-all duration-300 ease-out hover:scale-110 hover:bg-primary motion-reduce:transition-none cursor-pointer group/icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary -rotate-45 transition-colors duration-300 group-hover/icon:text-white"
                        >
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </Reveal>
                  <Reveal delay={240} className="space-y-4 mt-6">
                    <div className="group w-full h-85 rounded-2xl bg-gray-400 relative overflow-hidden">
                      <Image
                        src="/images/team_4.png"
                        alt="hero image"
                        fill
                        priority
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none"
                      />
                    </div>
                    <div className="rounded-xl bg-white p-3 flex items-center justify-between transition-shadow duration-300 ease-out hover:shadow-lg">
                      <div className="space-y-1">
                        <div className="font-semibold text-[22px] leading-120">
                          Lucas{" "}
                          <span className="font-playfair-display italic">
                            Ainsley
                          </span>
                        </div>
                        <p className="text-base leading-150 text-[#0B504F]">
                          Online Therapy
                        </p>
                      </div>
                      <div className="w-12 h-12 rounded-full border border-primary flex items-center justify-center transition-all duration-300 ease-out hover:scale-110 hover:bg-primary motion-reduce:transition-none cursor-pointer group/icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary -rotate-45 transition-colors duration-300 group-hover/icon:text-white"
                        >
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </Reveal>
                </div>
                <div className="flex items-center justify-center">
                  <div className={`group ${btnPrimary}`}>
                    View All Therapist
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
          </div>
        </section>
        <section className="py-19">
          <div className="container mx-auto px-4 xl:px-0">
            <div className="flex flex-col-reverse lg:flex-row items-stretch gap-10 xl:gap-16">
              <Reveal className="lg:w-76 xl:w-122 rounded-2xl bg-[#E3EEEE] p-8 space-y-6">
                <div className="group rounded-xl bg-gray-400 h-105.5 relative overflow-hidden">
                  <Image
                    src="/images/faq_hero.png"
                    alt="hero image"
                    fill
                    priority
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none"
                  />
                </div>
                <div className="space-y-3">
                  <div className="font-semibold text-[22px] leading-120">
                    Have more{" "}
                    <span className="font-playfair-display italic">
                      any questions?
                    </span>
                  </div>
                  <p className="text-base leading-150 text-[#51575C]">
                    One morning, when Gregor Samsa woke will from troubled
                    dreams, he found il himself brown geting questions your.
                  </p>
                </div>
                <div className="flex items-center">
                  <div className={`group ${btnPrimary}`}>
                    Free Consultations
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
                delay={120}
                className="flex-1 flex flex-col justify-between gap-12 lg:gap-6"
              >
                <div className="space-y-4 lg:space-y-6">
                  <div className="flex items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <div className="text-sm leading-150 tracking-[8%] font-medium uppercase">
                        Need Help
                      </div>
                    </div>
                  </div>
                  <h2 className="text-[48px] font-semibold leading-120 tracking-[-3%]">
                    Get Clear Answers Common Their
                    <br />
                    <span className="font-playfair-display italic">
                      Mental Health Questions
                    </span>
                  </h2>
                </div>
                <div className="space-y-4">
                  {faqItems.map((item, index) => {
                    const isOpen = openFaq === index;
                    return (
                      <div
                        key={item.question}
                        className={`rounded-lg p-6 transition-colors duration-300 ease-out ${
                          isOpen
                            ? "bg-primary"
                            : "bg-[#F6F6F6] hover:bg-[#EEF2F5]"
                        }`}
                      >
                        <button
                          type="button"
                          onClick={() => setOpenFaq(isOpen ? -1 : index)}
                          aria-expanded={isOpen}
                          className="w-full flex items-center justify-between gap-4 text-left cursor-pointer bg-transparent"
                        >
                          <div
                            className={`font-semibold text-[22px] leading-120 ${
                              isOpen ? "text-white" : "text-black"
                            }`}
                          >
                            {item.question}
                          </div>
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
                            className={`shrink-0 transition-colors duration-300 ${
                              isOpen ? "text-white" : "text-black"
                            }`}
                          >
                            <path d="M5 12h14" />
                            <path
                              d="M12 5v14"
                              className={`transition-transform duration-300 ease-out motion-reduce:transition-none ${
                                isOpen ? "scale-y-0" : "scale-y-100"
                              }`}
                            />
                          </svg>
                        </button>
                        <div
                          className={`grid overflow-hidden transition-all duration-300 ease-out motion-reduce:transition-none ${
                            isOpen
                              ? "grid-rows-[1fr] opacity-100"
                              : "grid-rows-[0fr] opacity-0"
                          }`}
                        >
                          <p
                            className={`min-h-0 text-base leading-150 font-medium ${
                              isOpen ? "text-white pt-6" : "text-[#51575C]"
                            }`}
                          >
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Reveal>
            </div>
          </div>
        </section>
        <section className="pt-19 pb-38">
          <div className="container mx-auto px-4 xl:px-0">
            <div className="flex flex-col lg:flex-row items-stretch gap-16 xl:gap-38">
              <Reveal className="lg:w-125.5">
                <div className="lg:space-y-20">
                  <div className="space-y-12">
                    <div className="space-y-6">
                      <div className="flex items-center">
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          <div className="text-sm leading-150 tracking-[8%] font-medium uppercase">
                            Book Now
                          </div>
                        </div>
                      </div>
                      <h2 className="text-[48px] font-semibold leading-120 tracking-[-3%]">
                        Schedule Your Therapy
                        <br />
                        <span className="font-playfair-display italic">
                          in Minutes Easily Online
                        </span>
                      </h2>
                      <p className="text-base leading-150 text-[#51575C]">
                        Fill out the form below to get matched with a therapist
                        and choose a time that fits your needs and schedule.
                      </p>
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-16">
                      <div className="flex items-center gap-3 transition-transform duration-300 ease-out hover:-translate-y-0.5 motion-reduce:transition-none">
                        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="26"
                            height="26"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-white"
                          >
                            <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                          </svg>
                        </div>
                        <div className="space-y-1">
                          <div className="text-sm leading-150 tracking-[8%] font-medium uppercase">
                            Call Us
                          </div>
                          <div className="text-lg leading-110 font-semibold">
                            +1 (555) 123-4567
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 transition-transform duration-300 ease-out hover:-translate-y-0.5 motion-reduce:transition-none">
                        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="26"
                            height="26"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-white"
                          >
                            <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                            <rect x="2" y="4" width="20" height="16" rx="2" />
                          </svg>
                        </div>
                        <div className="space-y-1">
                          <div className="text-sm leading-150 tracking-[8%] font-medium uppercase">
                            Mail Us
                          </div>
                          <div className="text-lg leading-110 font-semibold">
                            hello@mindera.com
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hidden lg:grid grid-cols-2 gap-6">
                    <div className="group w-full h-60 rounded-2xl bg-gray-400 relative overflow-hidden">
                      <Image
                        src="/images/form_hero.png"
                        alt="hero image"
                        fill
                        priority
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none"
                      />
                    </div>
                    <div className="group w-full h-60 rounded-2xl bg-gray-400 relative overflow-hidden">
                      <Image
                        src="/images/form_hero.png"
                        alt="hero image"
                        fill
                        priority
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none"
                      />
                    </div>
                  </div>
                </div>
              </Reveal>
              <Reveal
                delay={140}
                className="flex-1 flex flex-col gap-6 justify-between"
              >
                <div className="space-y-8">
                  <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="text-sm leading-120 tracking-[-3%] font-medium">
                        First Name
                      </div>
                      <input
                        placeholder="e.g Jonyu"
                        className="w-full outline-none p-3 bg-[#F6F6F6] border border-[#EEF2F5] rounded-md transition-all duration-300 ease-out focus:border-primary focus:ring-2 focus:ring-primary/15 focus:bg-white"
                      />
                    </div>
                    <div className="space-y-4">
                      <div className="text-sm leading-120 tracking-[-3%] font-medium">
                        Last Name
                      </div>
                      <input
                        placeholder="e.g Branstorm"
                        className="w-full outline-none p-3 bg-[#F6F6F6] border border-[#EEF2F5] rounded-md transition-all duration-300 ease-out focus:border-primary focus:ring-2 focus:ring-primary/15 focus:bg-white"
                      />
                    </div>
                    <div className="space-y-4">
                      <div className="text-sm leading-120 tracking-[-3%] font-medium">
                        Email
                      </div>
                      <input
                        placeholder="e.g hello@advenza.com"
                        className="w-full outline-none p-3 bg-[#F6F6F6] border border-[#EEF2F5] rounded-md transition-all duration-300 ease-out focus:border-primary focus:ring-2 focus:ring-primary/15 focus:bg-white"
                      />
                    </div>
                    <div className="space-y-4">
                      <div className="text-sm leading-120 tracking-[-3%] font-medium">
                        Phone
                      </div>
                      <input
                        placeholder="e.g (+62) 8123 4567 8900"
                        className="w-full outline-none p-3 bg-[#F6F6F6] border border-[#EEF2F5] rounded-md transition-all duration-300 ease-out focus:border-primary focus:ring-2 focus:ring-primary/15 focus:bg-white"
                      />
                    </div>
                    <div className="space-y-4">
                      <div className="text-sm leading-120 tracking-[-3%] font-medium">
                        Services
                      </div>
                      <input
                        placeholder="e.g Individual Therapy"
                        className="w-full outline-none p-3 bg-[#F6F6F6] border border-[#EEF2F5] rounded-md transition-all duration-300 ease-out focus:border-primary focus:ring-2 focus:ring-primary/15 focus:bg-white"
                      />
                    </div>
                    <div className="space-y-4">
                      <div className="text-sm leading-120 tracking-[-3%] font-medium">
                        Date
                      </div>
                      <input
                        placeholder="Date"
                        className="w-full outline-none p-3 bg-[#F6F6F6] border border-[#EEF2F5] rounded-md transition-all duration-300 ease-out focus:border-primary focus:ring-2 focus:ring-primary/15 focus:bg-white"
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="text-sm leading-120 tracking-[-3%] font-medium">
                      Message
                    </div>
                    <textarea
                      rows={7}
                      placeholder="Write your message here..."
                      className="w-full outline-none p-3 bg-[#F6F6F6] border border-[#EEF2F5] rounded-md transition-all duration-300 ease-out focus:border-primary focus:ring-2 focus:ring-primary/15 focus:bg-white"
                    />
                  </div>
                </div>
                <div className="flex items-center">
                  <div className={`group ${btnPrimary}`}>
                    Book My Session
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
            </div>
          </div>
        </section>
      </main>
      <footer className="px-3 pb-3">
        <div className="bg-black rounded-2xl">
          <div className="container mx-auto px-4 xl:px-0">
            <div className="py-16 lg:py-24 xl:py-38 space-y-20">
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
              <Reveal delay={100} className="flex flex-wrap gap-x-20 gap-y-10 lg:gap-0 items-start lg:justify-between">
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
                className="group text-base leading-120 text-white p-2 border border-white rounded-full flex items-center gap-3 transition-all duration-300 ease-out hover:bg-white hover:text-black hover:-translate-y-0.5 motion-reduce:transition-none"
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
    </>
  );
}
