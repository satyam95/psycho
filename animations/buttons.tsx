/** Shared hover-affordance classes for pill buttons (transform/opacity/shadow only). */
export const btnPrimary =
  "bg-primary py-3 px-5 md:px-6 rounded-full text-white leading-120 text-sm font-medium flex items-center gap-1 md:gap-1.5 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/25 active:translate-y-0 active:scale-[0.98] motion-reduce:transition-none motion-reduce:hover:translate-y-0";

export const btnOutlinePrimary =
  "border border-primary py-3 px-5 md:px-6 rounded-full text-primary leading-120 text-sm font-medium flex items-center gap-1 md:gap-1.5 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/20 active:translate-y-0 active:scale-[0.98] motion-reduce:transition-none motion-reduce:hover:translate-y-0";

export const btnOutlineWhite =
  "border border-white py-3 px-5 md:px-6 rounded-full text-white leading-120 text-sm font-medium flex items-center gap-1 md:gap-1.5 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-white hover:text-black hover:shadow-lg active:translate-y-0 active:scale-[0.98] motion-reduce:transition-none motion-reduce:hover:translate-y-0";

export const btnSolidWhite =
  "bg-white py-3 px-5 md:px-6 rounded-full text-black leading-120 text-sm font-medium flex items-center gap-1 md:gap-1.5 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:scale-[0.98] motion-reduce:transition-none motion-reduce:hover:translate-y-0";

/** Arrow icon nudges slightly on parent hover (uses group). */
export const arrowIconClass =
  "transition-transform duration-300 ease-out group-hover:translate-x-0.5 motion-reduce:transition-none";
