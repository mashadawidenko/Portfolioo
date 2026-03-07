import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { SkillsMarquee } from "./components/SkillsMarquee";
import { ChatSection } from "./components/ChatSection";
import { DateBar } from "./components/DateBar";
import { ProjectsSection } from "./components/ProjectsSection";
import { WorkExperience } from "./components/WorkExperience";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden relative">
      {/* Decorative background curves */}
      <div className="absolute top-[200px] left-[-400px] w-[2800px] h-[2200px] pointer-events-none opacity-100 -z-0">
        <svg width="2528" height="2004" viewBox="0 0 2528 2004" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path 
            d="M2455.26 353.98C2028.67 139.056 1725.93 345.97 1566.67 516.414C1469.39 620.527 1429.56 761.437 1414.61 903.141L1368.26 1342.44C1340.97 1601.16 1134.11 1804.23 874.923 1826.73L725.074 1839.74C144.22 1890.17 -63.918 1091.08 467.729 851.734C604.91 789.976 718.747 669.506 704.757 519.717C689.484 356.191 598.378 166.362 259.258 160.979" 
            stroke="#F9F9F9" 
            strokeWidth="322" 
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="absolute top-[1600px] right-[-200px] w-[800px] h-[800px] pointer-events-none -z-0">
        <svg width="100%" height="100%" viewBox="0 0 800 800" fill="none">
          <circle cx="400" cy="400" r="300" stroke="#F9F9F9" strokeWidth="300" fill="none" />
        </svg>
      </div>

      <div className="relative z-10">
        <Header />
        <HeroSection />
        <SkillsMarquee />
        <ChatSection />
        <DateBar />
        <ProjectsSection />
        <WorkExperience />
        <Footer />
      </div>
    </div>
  );
}
