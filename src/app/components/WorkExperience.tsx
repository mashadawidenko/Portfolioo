import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { AnimatedSection } from "./AnimatedSection";
import { Plus, Minus } from "lucide-react";

interface ExperienceItem {
  id: number;
  dateRange: string;
  location: string;
  title: string;
  role: string;
  details?: string[];
  projectInfo?: { label: string; value: string }[];
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    dateRange: "Sep 2025 \u2014 Dec 2025",
    location: "Russia, Moscow",
    title: "Invoice iOS, (freelance for international market)",
    role: "Role: UI UX Designer",
    projectInfo: [
      { label: "Project", value: "Fintech app for invoicing and service management (USA, Canada, Australia)" },
      { label: "Target audience", value: "Freelancers, small business, and self-employed" },
      { label: "Tools", value: "Figma, Miro" },
    ],
    details: [
      "Designed 60+ iOS app screens with comprehensive logic and UX for all key functions: creating and editing invoices, estimates, adding services, invoice templates, client database, services catalog, account settings, PDF export;",
      "Handled the entire project independently, including UX, UI, prototyping, design system, and UX copy;",
      "Conducted competitive analysis and SWOT, including studying features of foreign apps, identifying insights, forming JTBD; defined product strategy: target semi-automation segment for busy freelancers and small businesses, ensure smooth onboarding without pressure;",
      "Optimized user flow for invoice creation: implemented templates to reduce steps, speed up the process, and lower cognitive load for users;",
      "Developed all UX copy independently, including formulations for complex and repetitive scenarios, coordinated directly with the developer;",
      "Closely collaborated with client-developer: discussed and documented solutions, ensuring correct implementation of all UX/UI patterns;",
      "Created unified style and layouts ensuring interface consistency, ease of working with client database and services catalog;",
      "Participated in all project stages: from competitor analysis and feature planning to handing off prototypes for MVP development.",
    ],
  },
  {
    id: 2,
    dateRange: "Feb 2025 \u2014 Sep 2025",
    location: "Russia, Moscow",
    title: "JTI - Japan Tobacco International (Contract)",
    role: "Role: UI UX Designer",
  },
];

function AccordionItem({ item }: { item: ExperienceItem }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-t border-[#dadada]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-8 md:py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 cursor-pointer text-left"
      >
        <div className="flex flex-col md:flex-row items-start md:items-start gap-4 md:gap-0 md:w-[50%]">
          <div className="md:w-[240px] shrink-0">
            <p className="font-['Instrument_Sans',sans-serif] text-[#454545] text-[16px] leading-[24px]">
              {item.dateRange}
            </p>
            <p className="font-['Instrument_Sans',sans-serif] text-[#454545] text-[16px] leading-[24px]">
              {item.location}
            </p>
          </div>
          <div className="flex flex-col gap-2 md:ml-auto">
            <p className="font-['Instrument_Sans',sans-serif] font-medium text-[#161616] text-[18px] md:text-[20px] leading-[24px] tracking-[-1px]">
              {item.title}
            </p>
            <p className="font-['Instrument_Sans',sans-serif] text-[#464646] text-[16px] leading-[24px]">
              {item.role}
            </p>
          </div>
        </div>
        <div className="shrink-0">
          {isOpen ? <Minus size={24} /> : <Plus size={24} />}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && item.details && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-10 md:pl-[240px]">
              {item.projectInfo && (
                <div className="mb-6 flex flex-col gap-1">
                  {item.projectInfo.map((info) => (
                    <p key={info.label} className="font-['Instrument_Sans',sans-serif] text-[16px] leading-[28px]">
                      <span className="font-medium text-[#161616]">{info.label}: </span>
                      <span className="text-[#464646]">{info.value}</span>
                    </p>
                  ))}
                </div>
              )}
              <ul className="flex flex-col gap-1">
                {item.details.map((detail, i) => (
                  <li key={i} className="font-['Instrument_Sans',sans-serif] text-[#464646] text-[16px] leading-[24px]">
                    \u2022 {detail}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function WorkExperience() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-[160px]">
        <AnimatedSection>
          <h2 className="font-['Instrument_Sans',sans-serif] font-medium text-black text-[28px] md:text-[32px] leading-[40px] capitalize mb-6">
            Work Experience
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div>
            {experiences.map((exp) => (
              <AccordionItem key={exp.id} item={exp} />
            ))}
            <div className="border-t border-[#dadada]" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
