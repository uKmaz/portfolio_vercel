import { Button } from "@/components/ui/button";
import { Github, Linkedin, FileText, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = ({ filter }: { filter?: "se" | "gd" }) => {
  const isSE = filter === "se";
  const isGD = filter === "gd";

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted animate-gradient-shift bg-[length:400%_400%]" />
      
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-accent/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
      
      {/* Corner Navigation */}
      <div className="absolute top-8 left-8 z-50">
        <Link 
          to="/"
          className="flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm rounded-full border border-border/50 text-muted-foreground hover:text-foreground hover:bg-card/80 transition-all duration-300 group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
          <span>Back</span>
        </Link>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block p-4 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 mb-8">
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Emre Uçmaz
            </h1>

            <h2 className="text-2xl md:text-3xl text-accent mb-6 font-semibold">
              {isGD ? "Game Developer | Unity & Systems Architect" : "Software Engineer | Full-Stack & Backend Focus"}
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {isGD 
                ? "Game Developer focused on creating immersive experiences, scalable game systems, and polished mechanics using Unity and C#. Passionate about Game Jams and rapid prototyping."
                : "Backend-focused software engineer experienced in designing and deploying scalable systems. I build robust APIs, manage relational databases, and optimize application performance."
              }
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
              href={isGD ? "/Emre_Uçmaz_CV_GD.pdf" : "/Emre_Uçmaz_CV_SE.pdf"}
              target="_blank"
              rel="noopener noreferrer"
              title="Download Resume"
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