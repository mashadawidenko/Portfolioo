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
      <div className="absolute top-[200px] -left-[400px] w-[2000px] h-[1000px] pointer-events-none opacity-100 -z-0">
        <svg width="100%" height="100%" viewBox="0 0 2000 1000" fill="none" preserveAspectRatio="none">
          <path
            d="M-200 500 Q400 100 800 500 T1800 500"
            stroke="#F9F9F9"
            strokeWidth="300"
            fill="none"
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
