import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Shield } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "TÜBİTAK Project",
      description: "Conducted a research project combining psychology and technology, utilizing programming to model behavior and analyze patterns. Showcased analytical and problem-solving skills.",
      technologies: ["Python", "Research", "Data Analysis", "Psychology"],
      links: [
        { 
          label: "GitHub", 
          url: "https://github.com/uKmaz/TUBITAK-Psychology", 
          icon: Github 
        },
        { 
          label: "Privacy Policy", 
          url: "http://xn--umaz-0oa.com/privacy-policy", 
          icon: Shield 
        }
      ],
      featured: true
    },
    {
      title: "Thiefy Thiefson!",
      description: "A stealth-action game developed during a Game Jam within only 48 hours. Players experience the thrill of sneaking, strategizing, and making daring escapes. This game is also my first ever game I ever tried and did.",
      technologies: ["Unity", "C#", "Game Design", "Level Design"],
      links: [
        { 
          label: "Play Game", 
          url: "https://ucmazj.itch.io/thiefy-thiefson-jamination-7", 
          icon: ExternalLink 
        }
      ],
      featured: true
    },
    {
      title: "UniHub – A Social Platform for University Communities",
      description: "Designed and developed a mobile app tailored for university clubs and students to connect, organize events, and share content. Built using modern tools and frameworks with a focus on user experience, performance, and scalability.",
      technologies: ["React Native", "Full-Stack", "UI/UX", "Mobile Development"],
      links: [],
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.title}
                className="bg-card/50 backdrop-blur-sm border-border/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-[var(--hover-glow)] group"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-2xl mb-3 group-hover:text-accent transition-colors duration-300">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {project.description}
                      </CardDescription>
                    </div>
                    {project.featured && (
                      <span className="px-3 py-1 bg-accent/20 text-accent text-xs font-medium rounded-full border border-accent/30">
                        Featured
                      </span>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {project.links.length > 0 && (
                    <div className="flex flex-wrap gap-4">
                      {project.links.map((link) => (
                        <Button
                          key={link.label}
                          variant="outline"
                          size="sm"
                          className="border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:scale-105"
                          asChild
                        >
                          <a 
                            href={link.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <link.icon className="w-4 h-4" />
                            {link.label}
                          </a>
                        </Button>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;