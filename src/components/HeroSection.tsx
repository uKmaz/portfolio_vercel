import { Button } from "@/components/ui/button";
import { Github, Linkedin, FileText } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted animate-gradient-shift bg-[length:400%_400%]" />
      
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-accent/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block p-4 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 mb-8 animate-glow">
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Emre Uçmaz
            </h1>

            <h2 className="text-2xl md:text-3xl text-accent mb-6 font-semibold">
              Founder • Full-Stack Engineer • System Builder
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              I design and deploy scalable digital products from idea to production. 
              As the founder and lead engineer of UniHub, I’ve built and scaled a platform serving 1000+ users across multiple universities. 
              I specialize in backend systems, system architecture, and building products that solve real coordination and community problems.
            </p>

          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[var(--hover-glow)]"
              asChild
            >
              <a href="#projects">View Projects</a>
            </Button>

            <Button 
              variant="outline" 
              size="lg"
              className="border-border/50 bg-card/50 backdrop-blur-sm px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:bg-card/80"
              asChild
            >
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
          
          <div className="flex justify-center gap-6">
            <a 
              href="https://github.com/uKmaz/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 transition-all duration-300 hover:scale-110 hover:bg-card/80 hover:shadow-[var(--hover-glow)]"
            >
              <Github className="w-6 h-6" />
            </a>

            <a 
              href="https://www.linkedin.com/in/emreucmaz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 transition-all duration-300 hover:scale-110 hover:bg-card/80 hover:shadow-[var(--hover-glow)]"
            >
              <Linkedin className="w-6 h-6" />
            </a>

            <a 
              href="/resume"
              className="p-3 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 transition-all duration-300 hover:scale-110 hover:bg-card/80 hover:shadow-[var(--hover-glow)]"
            >
              <FileText className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;