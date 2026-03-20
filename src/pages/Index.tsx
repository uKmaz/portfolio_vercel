import { Link } from "react-router-dom";
import { Gamepad2, Code2, FileText, Github, Linkedin, Youtube } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center relative overflow-hidden py-12 px-6">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted animate-gradient-shift bg-[length:400%_400%] z-0" />
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-float z-0" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-accent/10 rounded-full blur-xl animate-float z-0" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Personality Card */}
        <div className="w-full max-w-2xl bg-card/60 backdrop-blur-md rounded-3xl border border-border/50 p-8 md:p-12 mb-16 shadow-[0_0_40px_rgba(0,0,0,0.1)] hover:shadow-[var(--hover-glow)] transition-all duration-500 animate-glow flex flex-col items-center text-center">
          <div className="w-24 h-24 rounded-full overflow-hidden mb-6 shadow-lg border-2 border-primary/50 relative flex items-center justify-center bg-card">
            <img 
              src="/photo.jpg" 
              alt="Emre Uçmaz" 
              className="w-full h-full object-cover" 
              onError={(e) => { 
                e.currentTarget.onerror = null; 
                e.currentTarget.src = '/photo.png'; 
              }} 
            />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Emre Uçmaz
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
            I build backend systems, full-stack apps, and games. Worked on production systems with real users and developed multiple projects from scratch, including system design, implementation, and deployment.
          </p>

          <div className="flex justify-center gap-6">
            <a 
              href="https://github.com/uKmaz/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-background/50 backdrop-blur-sm rounded-xl border border-border/50 transition-all duration-300 hover:scale-110 hover:bg-card/80 hover:text-primary"
            >
              <Github className="w-5 h-5" />
            </a>

            <a 
              href="https://www.linkedin.com/in/emreucmaz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-background/50 backdrop-blur-sm rounded-xl border border-border/50 transition-all duration-300 hover:scale-110 hover:bg-card/80 hover:text-primary"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            <a 
              href="https://www.youtube.com/@UçmazDev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-background/50 backdrop-blur-sm rounded-xl border border-border/50 transition-all duration-300 hover:scale-110 hover:bg-card/80 hover:text-primary"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Portfolio Split Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 w-full">
          
          {/* Software Engineering Button */}
          <Link 
            to="/se"
            className="group relative flex flex-col items-center justify-center w-56 h-56 md:w-64 md:h-64 rounded-full bg-card/40 backdrop-blur-md border border-border/50 transition-all duration-500 hover:scale-105 hover:bg-primary/5 hover:border-primary/50 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <Code2 className="w-16 h-16 text-primary mb-4 transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-110" />
            <span className="text-xl font-bold text-foreground text-center px-4 transition-transform duration-500 group-hover:-translate-y-1">
              Software Engineering
            </span>
            <span className="text-sm text-muted-foreground mt-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 text-center px-6">
              Backend systems, APIs, and scalable architecture
            </span>
          </Link>

          {/* Game Development Button */}
          <Link 
            to="/gd"
            className="group relative flex flex-col items-center justify-center w-56 h-56 md:w-64 md:h-64 rounded-full bg-card/40 backdrop-blur-md border border-border/50 transition-all duration-500 hover:scale-105 hover:bg-accent/5 hover:border-accent/50 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <Gamepad2 className="w-16 h-16 text-accent mb-4 transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-110" />
            <span className="text-xl font-bold text-foreground text-center px-4 transition-transform duration-500 group-hover:-translate-y-1">
              Game Development
            </span>
            <span className="text-sm text-muted-foreground mt-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 text-center px-6">
              Immersive worlds, mechanics, and Unity C#
            </span>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default Index;
