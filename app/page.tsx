"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion, useInView } from "framer-motion";

const navItems = ["Home", "Services", "About", "Projects", "Contact"];

// Motion variants for staggered cards
const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      ease: "easeOut" as const,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
  hover: { y: -5, scale: 1.02, transition: { duration: 0.2 } },
};

// Back to Top button component
function BackToTop() {
  const [visible, setVisible] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;
  return (
    <motion.button
      className="fixed bottom-8 right-8 bg-primary text-white p-3 rounded-full shadow-lg"
      onClick={handleClick}
      whileHover={shouldReduceMotion ? {} : { scale: 1.1 }}
      whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
      initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
      animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      ↑
    </motion.button>
  );
}

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = value;
      if (start === end) return;

      const duration = 1.5; // duration of count-up in seconds
      const totalMiliseconds = duration * 1000;
      const stepTime = Math.max(Math.floor(totalMiliseconds / end), 15);
      
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) {
          clearInterval(timer);
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const shouldReduceMotion = useReducedMotion();

  const faqs = [
    {
      question: "What is therapy, and how does it help?",
      answer: "Therapy is a safe, supportive space to explore emotions, challenges, and goals with a trained professional to improve mental well-being."
    },
    {
      question: "Is online therapy as effective as in-person sessions?",
      answer: "Yes, numerous studies show that online therapy (teletherapy) is just as effective as in-person sessions for most common mental health concerns, offering added convenience and comfort."
    },
    {
      question: "What issues do your therapists specialize in?",
      answer: "Our licensed therapists specialize in anxiety, depression, trauma, PTSD, relationship issues, family dynamics, stress management, and personal growth."
    },
    {
      question: "How do I choose the right therapist?",
      answer: "We match you with a therapist based on your specific needs, goals, and communication preferences. You can also review therapist profiles to find the best fit."
    },
    {
      question: "How do I book my first session?",
      answer: "Simply fill out our online booking form below, choose your preferred services and date, and our team will reach out to confirm your slot in minutes."
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-sm"
          : "bg-transparent"
          }`}
      >
        <div className="container mx-auto py-5 px-4 xl:px-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-20">
              <div
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="text-[26px] leading-120 tracking-[-3%] font-semibold cursor-pointer text-black hover:text-primary transition-colors duration-300 select-none"
              >
                Mind
                <span className="font-playfair-display italic">era</span>
              </div>
              <div className="flex items-center gap-8">
                {navItems.map((item) => (
                  <a
                    href={item === "Home" ? "#" : `#${item.toLowerCase()}`}
                    className="text-base leading-120 font-medium text-black/80 hover:text-primary transition-colors duration-300 relative py-1 group cursor-pointer"
                    key={item}
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                  </a>
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
                className="text-black/80 hover:text-primary transition-colors duration-300 cursor-pointer"
              >
                <path d="M4 5h16" />
                <path d="M4 12h16" />
                <path d="M4 19h16" />
              </svg>
              <a
                href="#contact"
                className="bg-primary hover:bg-[#0c6666] active:scale-95 transition-all duration-300 py-3 px-6 rounded-full text-white leading-120 text-sm font-medium flex items-center gap-1.5 cursor-pointer shadow-sm hover:shadow-md group"
              >
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
                  className="text-white transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </header>
      <main>
        <motion.section className="pt-5 pb-19" initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }} whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} viewport={{ once: true, amount: 0.2 }}>
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
                      <a
                        href="#contact"
                        className="bg-primary hover:bg-[#0c6666] active:scale-95 transition-all duration-300 py-3 px-6 rounded-full text-white leading-120 text-sm font-medium flex items-center gap-1.5 cursor-pointer shadow-sm hover:shadow-md group"
                      >
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
                          className="text-white transition-transform duration-300 group-hover:translate-x-1"
                        >
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </a>
                      <a
                        href="#services"
                        className="border border-primary hover:bg-primary/5 active:scale-95 transition-all duration-300 py-3 px-6 rounded-full text-primary leading-120 text-sm font-medium flex items-center gap-1.5 cursor-pointer group"
                      >
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
                          className="text-primary transition-transform duration-300 group-hover:translate-x-1"
                        >
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center">
                      <div className="relative overflow-hidden w-13 h-13 rounded-full border-3 border-white bg-[#C4C4C4]">
                        <Image
                          src="/images/avatar_1.jpg"
                          alt="hero image"
                          fill
                          priority
                          className="object-cover"
                        />
                      </div>
                      <div className="relative overflow-hidden w-13 h-13 rounded-full border-3 border-white bg-[#C4C4C4] -ml-5">
                        <Image
                          src="/images/avatar_2.jpg"
                          alt="hero image"
                          fill
                          priority
                          className="object-cover"
                        />
                      </div>
                      <div className="relative overflow-hidden w-13 h-13 rounded-full border-3 border-white bg-[#C4C4C4] -ml-5">
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
              </div>
              <div className="relative overflow-hidden w-[45%] h-195 bg-gray-400 rounded-2xl ">
                <Image
                  src="/images/hero.png"
                  alt="hero image"
                  fill
                  priority
                  className="object-cover"
                />
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
        </motion.section>
        <motion.section
          className="py-19"
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
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
                  <a
                    href="#about"
                    className="bg-primary hover:bg-[#0c6666] active:scale-95 transition-all duration-300 py-3 px-6 rounded-full text-white leading-120 text-sm font-medium flex items-center gap-1.5 cursor-pointer shadow-sm hover:shadow-md group"
                  >
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
                      className="text-white transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="flex items-stretch gap-8">
                <div className="relative overflow-hidden w-[475px] h-[600px] bg-gray-400 rounded-2xl">
                  <Image
                    src="/images/about_1.png"
                    alt="hero image"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between gap-8">
                  <div className="relative overflow-hidden w-full flex-1 bg-gray-400 rounded-2xl">
                    <Image
                      src="/images/about_2.png"
                      alt="hero image"
                      fill
                      priority
                      className="object-cover"
                    />
                  </div>
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
        </motion.section>
        <motion.section
          className="py-19 px-3"
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
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
                    <a
                      href="#services"
                      className="bg-primary hover:bg-[#0c6666] active:scale-95 transition-all duration-300 py-3 px-6 rounded-full text-white leading-120 text-sm font-medium flex items-center gap-1.5 cursor-pointer shadow-sm hover:shadow-md group"
                    >
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
                        className="text-white transition-transform duration-300 group-hover:translate-x-1"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </a>
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
        </motion.section>
        <motion.section
          className="py-19"
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
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
                <div className="aspect-[32/15] bg-gray-400 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  <Image
                    src="/images/video-bg.png"
                    alt="hero image"
                    fill
                    priority
                    className="object-cover"
                  />
                  <div className="relative z-10 h-24 w-24 rounded-full bg-white flex items-center justify-center">
                    <Image
                      src="/play.png"
                      alt="play"
                      width={24}
                      height={31}
                      className="ml-2"
                    />
                  </div>
                </div>
                <div className="relative z-10 flex justify-center -mt-24">
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
                        fully secure and judgment-its freel, mentaly
                        personalized.
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
        </motion.section>
        <motion.section
          className="py-19"
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
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
                  <a
                    href="#contact"
                    className="bg-primary hover:bg-[#0c6666] active:scale-95 transition-all duration-300 py-3 px-6 rounded-full text-white leading-120 text-sm font-medium flex items-center gap-1.5 cursor-pointer shadow-sm hover:shadow-md group"
                  >
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
                      className="text-white transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="w-100 bg-gray-400 rounded-2xl relative overflow-hidden">
                <Image
                  src="/images/work_hero.png"
                  alt="hero image"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
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
                      Fill out a brief form to tell us about your needs, goals,
                      & serey has taken possession of my entire soul, like
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
                      Get matched with the right therapist based on your
                      issueshas ins taken possession of my entire soul like.
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
                      Choose a convenient time for your first online or
                      in-person as taken possession of my entire, like session.
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
                      serenity is taken soul, like personalized care from day
                      one.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
        <motion.section
          className="py-19 px-3"
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="w-full h-145 bg-gray-400 rounded-2xl flex items-center justify-center relative overflow-hidden">
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
                <a
                  href="#contact"
                  className="bg-white hover:bg-white/90 active:scale-95 transition-all duration-300 py-3 px-6 rounded-full text-black leading-120 text-sm font-medium flex items-center gap-1.5 cursor-pointer shadow-sm hover:shadow-md group"
                >
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
                    className="text-black transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
                <a
                  href="#contact"
                  className="border border-white hover:bg-white/10 active:scale-95 transition-all duration-300 py-3 px-6 rounded-full text-white leading-120 text-sm font-medium flex items-center gap-1.5 cursor-pointer group"
                >
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
                    className="text-white transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </motion.section>
        <motion.section
          className="py-19"
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="container mx-auto">
            <div className="space-y-20">
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
                      <div className="relative overflow-hidden w-13 h-13 rounded-full border-3 border-white bg-[#C4C4C4]">
                        <Image
                          src="/images/avatar_1.jpg"
                          alt="hero image"
                          fill
                          priority
                          className="object-cover"
                        />
                      </div>
                      <div className="relative overflow-hidden w-13 h-13 rounded-full border-3 border-white bg-[#C4C4C4] -ml-5">
                        <Image
                          src="/images/avatar_2.jpg"
                          alt="hero image"
                          fill
                          priority
                          className="object-cover"
                        />
                      </div>
                      <div className="relative overflow-hidden w-13 h-13 rounded-full border-3 border-white bg-[#C4C4C4] -ml-5">
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
                </div>
                <div className="w-191 space-y-6">
                  <div className="p-6 bg-[#E3EEED] rounded-xl">
                    <div className="flex items-stretch justify-between gap-8">
                      <div className="w-71 h-67 bg-gray-400 rounded-lg relative overflow-hidden">
                        <Image
                          src="/images/client_1.png"
                          alt="hero image"
                          fill
                          priority
                          className="object-cover"
                        />
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
                  <div className="p-6 bg-[#E3EEED] rounded-xl">
                    <div className="flex items-stretch justify-between gap-8">
                      <div className="w-71 h-67 bg-gray-400 rounded-lg relative overflow-hidden">
                        <Image
                          src="/images/client_2.png"
                          alt="hero image"
                          fill
                          priority
                          className="object-cover"
                        />
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
                </div>
              </div>
              <div className="space-y-12">
                <div className="flex justify-center">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <div className="text-sm leading-150 tracking-[8%] font-medium uppercase">
                      Our Partner
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-6">
                  <div className="h-25 w-63 bg-[#F6F6F6] hover:bg-[#E3EEED] rounded-xl flex items-center justify-center">
                    <Image
                      src="/company-logo.png"
                      alt="company logo"
                      width={156}
                      height={40}
                    />
                  </div>
                  <div className="h-25 w-63 bg-[#F6F6F6] hover:bg-[#E3EEED] rounded-xl flex items-center justify-center">
                    <Image
                      src="/company-logo.png"
                      alt="company logo"
                      width={156}
                      height={40}
                    />
                  </div>
                  <div className="h-25 w-63 bg-[#F6F6F6] hover:bg-[#E3EEED] rounded-xl flex items-center justify-center">
                    <Image
                      src="/company-logo.png"
                      alt="company logo"
                      width={156}
                      height={40}
                    />
                  </div>
                  <div className="h-25 w-63 bg-[#F6F6F6] hover:bg-[#E3EEED] rounded-xl flex items-center justify-center">
                    <Image
                      src="/company-logo.png"
                      alt="company logo"
                      width={156}
                      height={40}
                    />
                  </div>
                  <div className="h-25 w-63 bg-[#F6F6F6] hover:bg-[#E3EEED] rounded-xl flex items-center justify-center">
                    <Image
                      src="/company-logo.png"
                      alt="company logo"
                      width={156}
                      height={40}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
        <motion.section
          className="py-19 px-3"
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="rounded-2xl bg-[#E3EEEE] py-38">
            <div className="container mx-auto">
              <div className="space-y-12">
                <div className="space-y-6">
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
                </div>
                <motion.div className="grid grid-cols-4 gap-6" variants={containerVariant} initial={shouldReduceMotion ? "visible" : "hidden"} whileInView="visible" viewport={{ once: true }}>
                  <motion.div className="space-y-4" variants={cardVariant} whileHover="hover">
                    <div className="w-full h-85 rounded-2xl bg-gray-400 relative overflow-hidden">
                      <Image
                        src="/images/team_1.png"
                        alt="hero image"
                        fill
                        priority
                        className="object-cover"
                      />
                    </div>
                    <div className="rounded-xl bg-white p-3 flex items-center justify-between">
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
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
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
                  </motion.div>
                  <motion.div className="space-y-4 mt-6" variants={cardVariant} whileHover="hover">
                    <div className="w-full h-85 rounded-2xl bg-gray-400 relative overflow-hidden">
                      <Image
                        src="/images/team_2.png"
                        alt="hero image"
                        fill
                        priority
                        className="object-cover"
                      />
                    </div>
                    <div className="rounded-xl bg-white p-3 flex items-center justify-between">
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
                      <div className="w-12 h-12 rounded-full border border-primary flex items-center justify-center">
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
                          className="text-primary -rotate-45"
                        >
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div className="space-y-4" variants={cardVariant} whileHover="hover">
                    <div className="w-full h-85 rounded-2xl bg-gray-400 relative overflow-hidden">
                      <Image
                        src="/images/team_3.png"
                        alt="hero image"
                        fill
                        priority
                        className="object-cover"
                      />
                    </div>
                    <div className="rounded-xl bg-white p-3 flex items-center justify-between">
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
                      <div className="w-12 h-12 rounded-full border border-primary flex items-center justify-center">
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
                          className="text-primary -rotate-45"
                        >
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div className="space-y-4 mt-6" variants={cardVariant} whileHover="hover">
                    <div className="w-full h-85 rounded-2xl bg-gray-400 relative overflow-hidden">
                      <Image
                        src="/images/team_4.png"
                        alt="hero image"
                        fill
                        priority
                        className="object-cover"
                      />
                    </div>
                    <div className="rounded-xl bg-white p-3 flex items-center justify-between">
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
                      <div className="w-12 h-12 rounded-full border border-primary flex items-center justify-center">
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
                          className="text-primary -rotate-45"
                        >
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
                <div className="flex items-center justify-center">
                  <a
                    href="#contact"
                    className="bg-primary hover:bg-[#0c6666] active:scale-95 transition-all duration-300 py-3 px-6 rounded-full text-white leading-120 text-sm font-medium flex items-center gap-1.5 cursor-pointer shadow-sm hover:shadow-md group"
                  >
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
                      className="text-white transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
        <motion.section
          className="py-19"
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="container mx-auto">
            <div className="flex items-stretch gap-16">
              <div className="w-122 rounded-2xl bg-[#E3EEEE] p-8 space-y-6">
                <div className="rounded-xl bg-gray-400 h-105.5 relative overflow-hidden">
                  <Image
                    src="/images/faq_hero.png"
                    alt="hero image"
                    fill
                    priority
                    className="object-cover"
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
                  <a
                    href="#contact"
                    className="bg-primary hover:bg-[#0c6666] active:scale-95 transition-all duration-300 py-3 px-6 rounded-full text-white text-sm font-medium flex items-center gap-1.5 cursor-pointer shadow-sm hover:shadow-md group"
                  >
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
                      className="text-white transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div className="space-y-6">
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
                <div className="space-y-4">
                  {faqs.map((faq, index) => {
                    const isOpen = openFaq === index;
                    return (
                      <div
                        key={index}
                        className={`p-6 rounded-lg transition-all duration-300 cursor-pointer ${
                          isOpen
                            ? "bg-primary text-white space-y-3"
                            : "bg-[#F6F6F6] text-black hover:bg-[#EEF2F5]"
                        }`}
                        onClick={() => setOpenFaq(isOpen ? null : index)}
                      >
                        <div className="flex items-center justify-between">
                          <div
                            className={`font-semibold text-[22px] leading-120 ${
                              isOpen ? "text-white" : "text-black"
                            }`}
                          >
                            {faq.question}
                          </div>
                          <motion.svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className={isOpen ? "text-white" : "text-black"}
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            {isOpen ? (
                              <path d="M5 12h14" />
                            ) : (
                              <>
                                <path d="M5 12h14" />
                                <path d="M12 5v14" />
                              </>
                            )}
                          </motion.svg>
                        </div>
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={shouldReduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                              animate={shouldReduceMotion ? { opacity: 1 } : { height: "auto", opacity: 1 }}
                              exit={shouldReduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                              className="overflow-hidden"
                            >
                              <p className="text-white text-base leading-150 font-medium pt-2">
                                {faq.answer}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
        <motion.section
          id="contact"
          className="pt-19 pb-38"
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="container mx-auto">
            <div className="flex items-stretch gap-38">
              <div className="w-125.5">
                <div className="space-y-20">
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
                    <div className="flex items-center gap-16">
                      <div className="flex items-center gap-3">
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
                      <div className="flex items-center gap-3">
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
                  <div className="grid grid-cols-2 gap-6">
                    <div className="w-full h-60 rounded-2xl bg-gray-400 relative overflow-hidden">
                      <Image
                        src="/images/form_hero.png"
                        alt="hero image"
                        fill
                        priority
                        className="object-cover"
                      />
                    </div>
                    <div className="w-full h-60 rounded-2xl bg-gray-400 relative overflow-hidden">
                      <Image
                        src="/images/form_hero.png"
                        alt="hero image"
                        fill
                        priority
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div className="space-y-8">
                  <motion.div 
                    initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-2 gap-8"
                  >
                    <div className="space-y-4">
                      <div className="text-sm leading-120 tracking-[-3%] font-medium">
                        First Name
                      </div>
                      <input
                        placeholder="e.g Jonyu"
                        className="w-full outline-none p-3 bg-[#F6F6F6] border border-[#EEF2F5] rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                      />
                    </div>
                    <div className="space-y-4">
                      <div className="text-sm leading-120 tracking-[-3%] font-medium">
                        Last Name
                      </div>
                      <input
                        placeholder="e.g Branstorm"
                        className="w-full outline-none p-3 bg-[#F6F6F6] border border-[#EEF2F5] rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                      />
                    </div>
                    <div className="space-y-4">
                      <div className="text-sm leading-120 tracking-[-3%] font-medium">
                        Email
                      </div>
                      <input
                        placeholder="e.g hello@advenza.com"
                        className="w-full outline-none p-3 bg-[#F6F6F6] border border-[#EEF2F5] rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                      />
                    </div>
                    <div className="space-y-4">
                      <div className="text-sm leading-120 tracking-[-3%] font-medium">
                        Phone
                      </div>
                      <input
                        placeholder="e.g (+62) 8123 4567 8900"
                        className="w-full outline-none p-3 bg-[#F6F6F6] border border-[#EEF2F5] rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                      />
                    </div>
                    <div className="space-y-4">
                      <div className="text-sm leading-120 tracking-[-3%] font-medium">
                        Services
                      </div>
                      <input
                        placeholder="e.g Individual Therapy"
                        className="w-full outline-none p-3 bg-[#F6F6F6] border border-[#EEF2F5] rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                      />
                    </div>
                    <div className="space-y-4">
                      <div className="text-sm leading-120 tracking-[-3%] font-medium">
                        Date
                      </div>
                      <input
                        placeholder="Date"
                        className="w-full outline-none p-3 bg-[#F6F6F6] border border-[#EEF2F5] rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                      />
                    </div>
                  </motion.div>
                   <motion.div 
                    initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="space-y-4"
                  >
                    <div className="text-sm leading-120 tracking-[-3%] font-medium">
                      Message
                    </div>
                    <textarea
                      rows={7}
                      placeholder="Write your message here..."
                      className="w-full outline-none p-3 bg-[#F6F6F6] border border-[#EEF2F5] rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                    />
                  </motion.div>
                </div>
                <div className="flex items-center">
                  <button
                    type="submit"
                    className="bg-primary hover:bg-[#0c6666] active:scale-95 transition-all duration-300 py-3 px-6 rounded-full text-white leading-120 text-sm font-medium flex items-center gap-1.5 cursor-pointer shadow-sm hover:shadow-md group border-none outline-none"
                  >
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
                      className="text-white transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
      <footer className="px-3 pb-3">
        <div className="bg-black rounded-2xl">
          <div className="container mx-auto">
            <div className="py-38 space-y-20">
              <div className="flex items-center justify-between">
                <div className="w-186 p-6 rounded-xl bg-primary">
                  <div className="flex items-center gap-8">
                    <div className="h-43 w-70 bg-gray-400 rounded-lg relative overflow-hidden">
                      <Image
                        src="/images/footer_hero.png"
                        alt="hero image"
                        fill
                        priority
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 space-y-8">
                      <h3 className="text-[32px] text-white leading-150 font-semibold">
                        Subscribe our{" "}
                        <span className="font-playfair-display italic">
                          newsletter
                        </span>
                      </h3>
                      <div className="border-b border-white pb-4 flex items-center justify-between">
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
                          className="text-white"
                        >
                          <path d="M18 8L22 12L18 16" />
                          <path d="M2 12H22" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-85 space-y-6">
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
              </div>
              <div className="flex items-start justify-between">
                <div className="space-y-4 w-27">
                  <div className="text-[#D8D8D8] text-sm font-medium uppercase leading-120 tracking-[-8%]">
                    Company
                  </div>
                  <div className="space-y-2">
                    <div className="text-base text-white leading-150">
                      About Us
                    </div>
                    <div className="text-base text-white leading-150">
                      Career
                    </div>
                    <div className="text-base text-white leading-150">
                      Our Approach
                    </div>
                    <div className="text-base text-white leading-150">
                      Case Studies
                    </div>
                  </div>
                </div>
                <div className="space-y-4 w-48">
                  <div className="text-[#D8D8D8] text-sm font-medium uppercase leading-120 tracking-[-8%]">
                    Services
                  </div>
                  <div className="space-y-2">
                    <div className="text-base text-white leading-150">
                      Individual Therapy
                    </div>
                    <div className="text-base text-white leading-150">
                      Family Therapy
                    </div>
                    <div className="text-base text-white leading-150">
                      Couples Counseling
                    </div>
                    <div className="text-base text-white leading-150">
                      Depression Treatment
                    </div>
                  </div>
                </div>
                <div className="space-y-4 w-27">
                  <div className="text-[#D8D8D8] text-sm font-medium uppercase leading-120 tracking-[-8%]">
                    Resources
                  </div>
                  <div className="space-y-2">
                    <div className="text-base text-white leading-150">
                      Blog / Articles
                    </div>
                    <div className="text-base text-white leading-150">
                      Detail Guides
                    </div>
                    <div className="text-base text-white leading-150">FAQs</div>
                    <div className="text-base text-white leading-150">
                      Help Center
                    </div>
                  </div>
                </div>
                <div className="space-y-4 w-68">
                  <div className="text-[#D8D8D8] text-sm font-medium uppercase leading-120 tracking-[-8%]">
                    Social Media
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="text-base text-white leading-150">
                        Instagram
                      </div>
                      <div className="text-base text-white leading-150">
                        Twitter
                      </div>
                      <div className="text-base text-white leading-150">
                        Tiktok
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-base text-white leading-150">
                        Facebook
                      </div>
                      <div className="text-base text-white leading-150">
                        Linkedin
                      </div>
                      <div className="text-base text-white leading-150">
                        Youtube
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 w-37">
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
              </div>
            </div>
            <div className="py-8 border-t border-[#575654] flex items-center justify-between">
              <div className="text-sm leading-150 text-white/90">
                © 2025 All Right Reserved by Mindera.
              </div>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="text-base leading-120 text-white p-2 border border-white/40 hover:border-white rounded-full flex items-center gap-3 cursor-pointer transition-all duration-300 hover:bg-white/10 active:scale-95 group shadow-sm"
              >
                <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
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
