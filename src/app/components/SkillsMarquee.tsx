import svgPaths from "../../imports/svg-7wmd1n95bc";
import { motion } from "motion/react";

function FigmaIcon() {
  return (
    <div className="h-[25px] w-[30px] relative shrink-0 overflow-clip">
      <svg className="absolute block size-full" fill="none" viewBox="0 0 16.6667 20.8333">
        <path d={svgPaths.p3289b480} fill="#0ACF83" />
        <path d={svgPaths.p11788500} fill="#A259FF" />
        <path d={svgPaths.p13d38a00} fill="#F24E1E" />
        <path d={svgPaths.pac54880} fill="#FF7262" />
        <path d={svgPaths.p2ff34680} fill="#1ABCFE" />
      </svg>
    </div>
  );
}

function MiroIcon() {
  return (
    <div className="relative shrink-0 size-5 overflow-clip">
      <svg className="absolute block size-full" fill="none" viewBox="0 0 20 20">
        <path d={svgPaths.p642bfc0} fill="#FFD02F" />
      </svg>
      <div className="absolute inset-[12.49%_10.39%_12.49%_14.59%]">
        <svg className="absolute block size-full" fill="none" viewBox="0 0 15.0045 15.0044">
          <path d={svgPaths.p1056c500} fill="#050038" />
        </svg>
      </div>
    </div>
  );
}

const skills = [
  { name: "Figma", icon: <FigmaIcon /> },
  { name: "Miro", icon: <MiroIcon /> },
  { name: "Adobe After Effects", icon: <AeIcon /> },
  { name: "Adobe Illustrator", icon: <AiIcon /> },
  { name: "Adobe Photoshop", icon: <PsIcon /> },
  { name: "Microsoft Teams", icon: <TeamsIcon /> },
  { name: "Figma", icon: <FigmaIcon /> },
  { name: "Miro", icon: <MiroIcon /> },
  { name: "Adobe After Effects", icon: <AeIcon /> },
  { name: "Adobe Illustrator", icon: <AiIcon /> },
  { name: "Adobe Photoshop", icon: <PsIcon /> },
  { name: "Microsoft Teams", icon: <TeamsIcon /> },
];

function AeIcon() {
  return (
    <div className="h-[14.257px] relative shrink-0 w-[23.5px]">
      <svg className="absolute block size-full" fill="none" viewBox="0 0 23.4996 14.2572">
        <path d={svgPaths.p162db200} fill="#6A6AEA" />
        <path d={svgPaths.p20e2af00} fill="#6A6AEA" />
      </svg>
    </div>
  );
}

function AiIcon() {
  return (
    <div className="h-[15.136px] relative shrink-0 w-[17.726px]">
      <svg className="absolute block size-full" fill="none" viewBox="0 0 17.726 15.1358">
        <path d={svgPaths.p14fb6d80} fill="#FF9A00" />
        <path d={svgPaths.p32f01700} fill="#FF9A00" />
      </svg>
    </div>
  );
}

function PsIcon() {
  return (
    <div className="h-[14.394px] relative shrink-0 w-[19.228px]">
      <svg className="absolute block size-full" fill="none" viewBox="0 0 19.2284 14.3943">
        <path d={svgPaths.pf17ab80} fill="#2191E3" />
        <path d={svgPaths.p2a9cbd00} fill="#2191E3" />
      </svg>
    </div>
  );
}

function TeamsIcon() {
  return (
    <div className="relative shrink-0 size-[25px]">
      <svg className="absolute block size-full" fill="none" viewBox="0 0 25 25">
        <g clipPath="url(#clip_teams)">
          <path d={svgPaths.pdf37800} fill="#7B83EB" />
          <path d={svgPaths.p27b36900} fill="#5059C9" />
          <path d={svgPaths.p2a3d5980} fill="#5059C9" />
          <path d={svgPaths.p2f372000} fill="#7B83EB" />
          <path d={svgPaths.pb2e6700} fill="#4B53BC" />
          <path d={svgPaths.p32d6ec00} fill="white" />
        </g>
        <defs>
          <clipPath id="clip_teams">
            <rect fill="white" height="25" width="25" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SkillBadge({ name, icon }: { name: string; icon: React.ReactNode }) {
  return (
    <div className="flex gap-2 items-center px-4 py-2.5 rounded-xl border border-[#dadada] shrink-0">
      {icon}
      <span className="font-['Instrument_Sans',sans-serif] tracking-[1px] text-black text-[16px] leading-[24px] whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

export function SkillsMarquee() {
  return (
    <div className="w-full overflow-hidden py-6 border-y border-[#ffffff]">
      <motion.div
        className="flex gap-8"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          },
        }}
      >
        {skills.map((skill, i) => (
          <SkillBadge key={`${skill.name}-${i}`} name={skill.name} icon={skill.icon} />
        ))}
        {skills.map((skill, i) => (
          <SkillBadge key={`${skill.name}-dup-${i}`} name={skill.name} icon={skill.icon} />
        ))}
      </motion.div>
    </div>
  );
}
