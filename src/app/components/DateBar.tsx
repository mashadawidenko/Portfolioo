import { useState, useEffect } from "react";

export function DateBar() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const dateStr = time.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const timeStr = time.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  return (
    <div className="border-b border-[#dadada] py-4 px-6 md:px-10 lg:px-[160px]">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between">
        <span className="font-['Instrument_Sans',sans-serif] text-[#161616] text-[14px] md:text-[16px] leading-[28px]">
          {dateStr}
        </span>
        <span className="font-['Instrument_Sans',sans-serif] text-[#161616] text-[14px] md:text-[16px] leading-[28px]">
          {timeStr}
        </span>
      </div>
    </div>
  );
}
