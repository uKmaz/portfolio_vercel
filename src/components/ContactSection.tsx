import { Button } from "@/components/ui/button";
import { Github, Linkedin, FileText, Mail } from "lucide-react";

const ContactSection = () => {
  const contactLinks = [
    {
      name: "GitHub",
      url: "https://github.com/uKmaz/",
      icon: Github,
      description: "Check out my code and projects"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/emreucmaz",
      icon: Linkedin,
      description: "Let's connect professionally"
    },
    {
      name: "Resume",
      url: "http://xn--umaz-0oa.com/resume.pdf",
      icon: FileText,
      description: "Download my full resume"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
            Let's Connect
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            I'm always interested in discussing new opportunities, collaborating on exciting projects, 
            or just having a conversation about technology and game development.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 p-8 transition-all duration-300 hover:scale-105 hover:shadow-[var(--hover-glow)] hover:bg-card/80">
                  <link.icon className="w-12 h-12 mx-auto mb-4 text-accent group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors duration-300">
                    {link.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {link.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
          
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 p-8">
            <h3 className="text-2xl font-semibold mb-4 text-accent">Ready to Collaborate?</h3>
            <p className="text-muted-foreground mb-6">
              Whether you have a project in mind, want to discuss opportunities, 
              or just want to chat about the latest in tech and gaming, I'd love to hear from you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[var(--hover-glow)]"
                asChild
              >
                <a href="https://www.linkedin.com/in/emreucmaz" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 mr-2" />
                  Connect on LinkedIn
                </a>
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-border/50 bg-card/50 backdrop-blur-sm px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:bg-card/80"
                asChild
              >
                <a href="https://github.com/uKmaz/" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  View on GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;