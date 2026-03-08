import svgPaths from "../../imports/svg-7wmd1n95bc";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-[#dadada]">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-0 py-4 md:py-6 flex items-center justify-between">
        <div className="flex gap-2.5 items-center">
          <div className="relative shrink-0 size-5">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path d={svgPaths.p3e673e00} fill="#BAE920" />
            </svg>
          </div>
          <span className="font-['Instrument_Sans',sans-serif] font-medium text-[#3d3d3d] text-[16px] leading-[28px] whitespace-nowrap">
            Masha Dawidenko
          </span>
        </div>
        <div className="flex gap-6 md:gap-16 items-center">
          <div className="hidden sm:flex gap-6 md:gap-11 items-center">
            <a href="#" className="text-[#3d3d3d] text-[16px] underline decoration-solid font-['Instrument_Sans',sans-serif]">
              Linkedin
            </a>
            <a href="#" className="text-[#3d3d3d] text-[16px] underline decoration-solid font-['Instrument_Sans',sans-serif]">
              Email
            </a>
          </div>
          <button className="flex gap-2.5 items-center justify-center pl-6 md:pl-8 pr-4 md:pr-6 py-2.5 rounded-full border border-[#323232]/40">
            <span className="font-['Instrument_Sans',sans-serif] font-medium text-[#3d3d3d] text-[16px] leading-[28px]">CV</span>
            <svg width="18" height="17" viewBox="0 0 18 17" fill="none">
              <path d={svgPaths.p1b14380} fill="#3D3D3D" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
