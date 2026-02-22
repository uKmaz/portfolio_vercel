import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Shield } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "UniHub – A Social Platform for University Communities",
      description:
        "Architected and launched a scalable full-stack social platform serving 1000+ downloads across 5+ universities and 50+ active communities. Designed backend infrastructure, relational database schemas, and cross-platform mobile applications with a focus on performance, real-time interaction, and production-grade deployment.",
      technologies: [
        "Spring Boot",
        "React Native",
        "PostgreSQL",
        "Firebase Auth",
        "CI/CD",
        "Nginx"
      ],
      links: [
        {
          label: "Unihub Website",
          url: "https://www.unihub.tr/",
          icon: ExternalLink
        }
      ],
      featured: true
    },
    {
      title: "Homeie – Shared Living Management Platform (In Development)",
      description:
        "Designing and developing a scalable home management system for shared living environments. Leading full-stack architecture, implementing chore automation, expense tracking, and payment balancing logic to improve transparency and coordination among housemates.",
      technologies: [
        "Spring Boot",
        "React Native",
        "PostgreSQL",
        "Firebase",
        "System Architecture"
      ],
      links: [],
      featured: true
    },
    {
      title: "TÜBİTAK Research Project",
      description:
        "Developed a research-oriented software system integrating psychology and behavioral modeling. Implemented structured data collection and behavioral pattern analysis tools in Unity to support academic research outcomes.",
      technologies: [
        "Unity",
        "C#",
        "Firebase",
        "Data Modeling",
        "Behavior Analysis"
      ],
      links: [
        {
          label: "GitHub",
          url: "https://github.com/uKmaz/TUBITAK-Psychology",
          icon: Github
        }
      ],
      featured: true
    },
    {
      title: "Case #0 – Myself",
      description:
        "Built a 2D pixel-art story-driven game in 48 hours using Unity. Designed scalable level systems, core gameplay mechanics, and a reusable workflow for rapid content creation under strict time constraints.",
      technologies: [
        "Unity",
        "C#",
        "2D Game Systems",
        "Game Architecture"
      ],
      links: [
        {
          label: "Play Game",
          url: "https://www.fiuby.com/games/case-0-myself",
          icon: ExternalLink
        }
      ],
      featured: false
    },
    {
      title: "I Hate You – Rogue-lite Co-op Game",
      description:
        "Co-developed a rogue-lite local co-op game in 30 hours, implementing procedural events, player interaction systems, and scalable gameplay mechanics. Demonstrates rapid prototyping and collaborative system design.",
      technologies: [
        "Unity",
        "C#",
        "Game Systems",
        "Local Co-op",
        "Rapid Prototyping"
      ],
      links: [
        {
          label: "Download",
          url: "https://drive.google.com/drive/folders/1-AbDAYrlNJ6I_CttLwyift7QJFRSUWSZ?usp=sharing",
          icon: ExternalLink
        },
        {
          label: "GitHub",
          url: "https://github.com/uKmaz/Bambu-Izotop-GameJam",
          icon: Github
        }
      ],
      featured: false
    },
    {
      title: "Thiefy Thiefson!",
      description:
        "Developed a stealth-action prototype within 48 hours during a Game Jam. Implemented enemy AI behavior, stealth mechanics, and gameplay balancing systems under strict time constraints.",
      technologies: [
        "Unity",
        "C#",
        "AI Systems",
        "Game Design"
      ],
      links: [
        {
          label: "Play Game",
          url: "https://ucmazj.itch.io/thiefy-thiefson-jamination-7",
          icon: ExternalLink
        }
      ],
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent leading-tight">
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