import svgPaths from "../../imports/svg-7wmd1n95bc";
import { AnimatedSection } from "./AnimatedSection";

export function HeroSection() {
  return (
    <section className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-0 pt-12 md:pt-20 pb-120">
      <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
        <div className="flex flex-col gap-10 md:gap-14 max-w-[810px]">
          <AnimatedSection>
            <div className="flex flex-col gap-4 md:gap-7">
              <p className="font-['Instrument_Sans',sans-serif] text-[#171717] text-[36px] md:text-[50px] lg:text-[60px] leading-[1.15] tracking-[-2px]">
                I'm Maria,
              </p>
              <p className="font-['Instrument_Sans',sans-serif] text-[#171717] text-[36px] md:text-[50px] lg:text-[60px] leading-[1.15] tracking-[-2px]">
                a UI/UX Designer working on{" "}
                <span className="italic text-[#8ecf25] underline">web</span>{" "}
                and{" "}
                <span className="italic text-[#8ecf25] underline">mobile products</span>.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="flex gap-4 items-start">
              <div className="relative shrink-0 size-8 mt-1">
                <svg className="absolute block size-full" fill="none" viewBox="0 0 32 32">
                  <path d={svgPaths.p15906a00} fill="#BAF45D" />
                </svg>
              </div>
              <p className="font-['Instrument_Sans',sans-serif] text-[#535353] text-[16px] md:text-[18px] lg:text-[20px] leading-[28px] max-w-[750px]">
                I design intuitive user flows and craft clean interfaces for web and mobile products. I work with complex logic, create prototypes and design systems, define user journeys, and focus on improving usability.
              </p>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.3}>
          <div className="flex gap-2.5 items-center">
            <div className="relative shrink-0 size-3.5">
              <div className="absolute inset-0 rounded-full bg-[#97E519]" />
              <div className="absolute -inset-2 rounded-full bg-[#E1FFC7] opacity-40 animate-pulse" />
            </div>
            <span className="font-['Instrument_Sans',sans-serif] tracking-[1px] text-[#121212] text-[16px] whitespace-nowrap">
              Available for work
            </span>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
