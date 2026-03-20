import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

const SEPortfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection filter="se" />
      <AboutSection filter="se" />
      <SkillsSection filter="se" />
      <ProjectsSection filter="se" />
      <ContactSection />
    </div>
  );
};

export default SEPortfolio;
