import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Shield } from "lucide-react";

const ProjectsSection = ({ filter }: { filter?: "se" | "gd" }) => {
  const projects = [
    {
      title: "UniHub – A Social Platform for University Communities",
      description:
        "Architected and launched a scalable full-stack social platform serving 1000+ downloads across 5+ universities and 50+ active communities. Designed backend infrastructure, relational database schemas, and cross-platform mobile applications with a focus on performance, real-time interaction, and production-grade deployment.",
      technologies: [
        "Spring Boot",
        "React Native",
        "Expo",
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
      featured: true,
      type: "se"
    },
    {
      title: "EcoBite",
      description:
        "Developed backend systems and features for EcoBite. Implemented core business logic, managed database interactions, and ensured system reliability for production environments.",
      technologies: [
        "Spring Boot",
        "Java",
        "PostgreSQL",
        "REST API"
      ],
      links: [],
      featured: true,
      type: "se"
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
      featured: true,
      type: "se"
    },
    {
      title: "TÜBİTAK Research Project – Cognitive Bias Gamification",
      description:
        "Developed a research-oriented Serious Game integrating psychology and behavioral modeling for OCD patients. Implemented Gamified Cognitive Bias Modification (GCBM), secure data collection, and behavioral pattern analysis tools in Unity to support clinical academic outcomes.",
      technologies: [
        "Unity",
        "C#",
        "Firebase (Real-time)",
        "Data Modeling",
        "System Architecture"
      ],
      links: [
        {
          label: "GitHub",
          url: "https://github.com/uKmaz/TUBITAK-Psychology",
          icon: Github
        }
      ],
      featured: true,
      type: "gd"
    },
    {
      title: "Case #0 – Myself – Narrative Mystery",
      description:
        "Built an event-driven 2D mystery game in a 48-hour Game Jam. Engineered a scalable narrative architecture using C# Actions and a custom Dialogue Manager to handle dynamic story steps, allowing rapid content creation without code duplication.",
      technologies: [
        "Unity",
        "C#",
        "Event-Driven Arch.",
        "Systems Design"
      ],
      links: [
        {
          label: "Play Game",
          url: "https://www.fiuby.com/games/case-0-myself",
          icon: ExternalLink
        }
      ],
      featured: false,
      type: "gd"
    },
    {
      title: "I Hate You – Co-op Endless Survival",
      description:
        "Co-developed a chaotic local co-op survival game in 55 hours for IZOTOP Game Jam. Engineered a robust Event Manager that triggers procedural catastrophic events, alongside a unified player spawner handling shared lives and dynamic camera behaviors.",
      technologies: [
        "Unity",
        "C#",
        "Game Systems",
        "Event Architecture",
        "Rapid Prototyping"
      ],
      links: [
        {
          label: "Play Game",
          url: "https://fiuby.com/games/i-hate-you",
          icon: ExternalLink
        },
        {
          label: "GitHub",
          url: "https://github.com/uKmaz/Bambu-Izotop-GameJam",
          icon: Github
        }
      ],
      featured: false,
      type: "gd"
    },
    {
      title: "Thiefy Thiefson! – 2D Stealth Action",
      description:
        "Developed a fast-paced stealth speedrun game during Jamination 7. Engineered complex core mechanics including threshold-based sound detection (footsteps), rigorous inventory tracking, and dynamic time limits using Singletons.",
      technologies: [
        "Unity",
        "C#",
        "Stealth Mechanics",
        "System Architecture"
      ],
      links: [
        {
          label: "Play Game",
          url: "https://ucmazj.itch.io/thiefy-thiefson-jamination-7",
          icon: ExternalLink
        }
      ],
      featured: false,
      type: "gd"
    }
  ];

  const filteredProjects = filter ? projects.filter(p => p.type === filter) : projects;

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent leading-tight">
            Featured Projects
          </h2>

          <div className="grid gap-8">
            {filteredProjects.map((project, index) => (
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