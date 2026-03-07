import svgPaths from "../../imports/svg-7wmd1n95bc";
import { AnimatedSection } from "./AnimatedSection";

function TelegramIcon() {
  return (
    <div className="relative size-12 cursor-pointer hover:opacity-80 transition-opacity">
      <svg className="absolute block size-full" fill="none" viewBox="0 0 48 48">
        <path d={svgPaths.p1a1b900} fill="url(#paint_tg)" />
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint_tg" x1="24" x2="24" y1="0" y2="47.644">
            <stop stopColor="#2AABEE" />
            <stop offset="1" stopColor="#229ED9" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-[30.1%_26.8%_24.9%_18.9%]">
        <svg className="absolute block size-full" fill="none" viewBox="0 0 26.064 21.6">
          <path clipRule="evenodd" d={svgPaths.p1d968180} fill="white" fillRule="evenodd" />
        </svg>
      </div>
    </div>
  );
}

function LinkedInIcon() {
  return (
    <div className="relative size-12 cursor-pointer hover:opacity-80 transition-opacity">
      <svg className="absolute block size-full" fill="none" viewBox="0 0 48 48">
        <path d={svgPaths.p23c7d780} fill="#0A66C2" />
      </svg>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="py-20 md:py-32">
      <div className="max-w-[690px] mx-auto px-6 flex flex-col items-center gap-12 md:gap-16">
        <AnimatedSection className="flex flex-col items-center gap-6">
          <h2 className="font-['Instrument_Sans',sans-serif] text-black text-[40px] md:text-[56px] lg:text-[70px] leading-[1.15] tracking-[-1px] text-center">
            Thanks for stopping by
          </h2>
          <div className="text-center">
            <p className="font-['Instrument_Sans',sans-serif] text-[#464646] text-[18px] md:text-[24px] leading-[1.5]">
              If you think we could build something great together &mdash;
            </p>
            <p className="font-['Instrument_Sans',sans-serif] text-[#464646] text-[18px] md:text-[24px] leading-[1.5]">
              don't hesitate to message me.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="flex gap-10 items-center">
          <TelegramIcon />
          <LinkedInIcon />
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <p className="font-['Instrument_Sans',sans-serif] text-[#464646] text-[16px] leading-[24px] tracking-[-1px] text-center">
            &copy; 2026 Masha Dawidenko
          </p>
        </AnimatedSection>
      </div>
    </footer>
  );
}
