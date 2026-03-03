import { HeroSection } from "@/components/sections/HeroSection"
import { ExperienceSection } from "@/components/sections/ExperienceSection"
import { EducationSection } from "@/components/sections/EducationSection"
import { TrainingSection } from "@/components/sections/TrainingSection"
import { SkillsSection } from "@/components/sections/SkillsSection"
import { ProjectSection } from "@/components/sections/ProjectSection"
import { PublicationSection } from "@/components/sections/PublicationSection"
import { FooterSection } from "@/components/sections/FooterSection"
import { SidebarTrigger } from "@/components/ui/sidebar"

export default function Home() {
  return (
    <div className="relative isolate min-h-screen">
      {/* Mobile top navigation bar */}
      <div className="sticky top-0 z-50 flex items-center justify-between p-4 bg-white border-b-4 border-border md:hidden brutal-shadow-sm">
        <SidebarTrigger className="w-10 h-10 border-2 border-border brutal-shadow hover:bg-main hover:text-main-foreground" />
        <span className="font-heading font-black text-xl tracking-tight">PORTFOLIO</span>
      </div>

      <main className="w-full h-full flex flex-col items-stretch overflow-x-hidden">
        <HeroSection />
        <ExperienceSection />
        <EducationSection />
        <TrainingSection />
        <SkillsSection />
        <ProjectSection />
        <PublicationSection />

        <FooterSection />
      </main>
    </div>
  );
}
