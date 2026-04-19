import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

const GDPortfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection filter="gd" />
      <AboutSection filter="gd" />
      <SkillsSection filter="gd" />
      <ProjectsSection filter="gd" />
      <ContactSection filter="gd" />
    </div>
  );
};

export default GDPortfolio;
