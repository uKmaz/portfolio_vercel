import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

type ProjectStatus = "Live" | "Active" | "Closed";

type Project = {
  title: string;
  role?: string;
  dates?: string;
  status?: ProjectStatus;
  description: string;
  highlights?: string[];
  technologies: string[];
  links: { label: string; url: string; icon: typeof ExternalLink }[];
  featured: boolean;
  type: "se" | "gd";
};

const statusStyles: Record<ProjectStatus, string> = {
  "Live": "bg-accent/20 text-accent border-accent/30",
  "Active": "bg-primary/20 text-primary border-primary/30",
  "Closed": "bg-muted text-muted-foreground border-border/50"
};

const ProjectsSection = ({ filter }: { filter?: "se" | "gd" }) => {
  const reachEngine = {
    title: "Reach Engine, Degree Thesis",
    role: "Co-Developer (team of 2)",
    dates: "Sep 2026 - Present",
    status: "Active" as ProjectStatus,
    description:
      "C++20 2D game engine built for thousands of simultaneous entities. In active development through graduation, with a potential open-source release.",
    highlights: [
      "Data-oriented ECS with archetype and sparse-set backends benchmarked against each other.",
      "In-process MCP server so AI agents can inspect live game state.",
      "OpenGL 3.3, CMake, Catch2, CI checks."
    ],
    technologies: ["C++20", "ECS", "OpenGL", "CMake"],
    links: [],
    featured: true
  };

  const projects: Project[] = [
    {
      title: "UniHub",
      role: "Founder & Lead Full-Stack Engineer",
      dates: "Jun 2025 - Present",
      status: "Live",
      description:
        "Social platform for verified university students: club discovery, event registration, QR tickets and an auto-generated activity portfolio. 1,000+ users across 50+ communities and 5+ universities. Built solo; now building the team for a business expansion.",
      highlights: [
        "Backend: Java 21 + Spring Boot 3.5 REST API for mobile, web and partner sites; Spring Security with Firebase JWT and partner API-key filters; 26 JPA entities on PostgreSQL; OpenAPI docs; 230 automated tests.",
        "Mobile: React Native + Expo SDK 54 (v2.0) with .edu.tr verification, QR ticketing and scanner, push notifications, TR/EN, dark mode.",
        "Web: React 18 + TypeScript + Vite, TanStack Query, Tailwind/shadcn.",
        "Community SDK: TypeScript npm package that lets clubs connect their own sites to UniHub.",
        "Infra: self-managed VPS, Nginx, Docker, GitHub Actions deploys."
      ],
      technologies: ["Spring Boot", "Java", "PostgreSQL", "Expo", "React Native", "React", "TypeScript", "Docker", "Nginx"],
      links: [
        { label: "UniHub Website", url: "https://unihub.tr", icon: ExternalLink },
        { label: "App Store", url: "https://apps.apple.com/tr/app/unihub/id6751527283?l=tr", icon: ExternalLink },
        { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.ukmaz.unihubmobile", icon: ExternalLink }
      ],
      featured: true,
      type: "se"
    },
    {
      title: "Butik, E-commerce Template",
      dates: "Aug 2026 - Present",
      status: "Live",
      description:
        "Reusable single-shop e-commerce platform for Turkish retailers: one codebase, one deploy per shop. Live for the clothing boutique MienaButik. Built with Nissth.",
      highlights: [
        "Next.js 15 on Cloudflare Workers with Supabase/PostgreSQL.",
        "PayTR checkout with refunds and stock held during payment.",
        "Admin with colour and size variants and stock sync from the shop's till export (.xlsx).",
        "JSON-LD, Google Merchant feed and llms.txt generated from config.",
        "CLI to set up a new shop, plus a go-live preflight."
      ],
      technologies: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Cloudflare", "PayTR"],
      links: [],
      featured: true,
      type: "se"
    },
    {
      title: "Nissth",
      role: "Creator",
      dates: "Sep 2026 - Present",
      status: "Active",
      description:
        "Open-source, file-based framework that makes AI coding agents (Claude Code) operate deterministically instead of re-exploring a codebase every session. I use it in all my software projects.",
      highlights: [
        "Persistent state in an append-only status ledger with a plan, execute, verify and report loop.",
        "Diagnostic Bridge bindings for Spring Boot, Expo and PostgreSQL, plus five Node.js repo checks.",
        "Verified suites of 104 Spring Boot, 80 Expo and 107 PostgreSQL tests.",
        "Products shipped quickly with it: Butik; PostPilot, an offline-first .NET 10 / WPF desktop planner with 442 automated tests; and a local-first iOS finance app (Expo SDK 57, SQLite, Drizzle)."
      ],
      technologies: ["AI agents", "Claude Code", "MCP", "Node.js", "TypeScript", "Java"],
      links: [{ label: "GitHub", url: "https://github.com/uKmaz/Nissth", icon: Github }],
      featured: true,
      type: "se"
    },
    { ...reachEngine, featured: false, type: "se" },
    {
      title: "Süprüz (formerly EcoBite)",
      role: "Co-Founder & Full-Stack Engineer (team of 5)",
      dates: "Nov 2025 - Jun 2026",
      status: "Closed",
      description:
        "Startup attempt: a location-based food-rescue marketplace connecting consumers with local businesses to cut surplus food waste.",
      highlights: [
        "Wrote the business plan, completed entrepreneurship training and reached the finals of the YGY entrepreneurship competition at Galatasaray University, out of 150+ teams.",
        "Built the product prototype: a Dockerized modular-monolith Spring Boot backend and a 1 km proximity reservation engine on PostgreSQL + PostGIS, with pessimistic locking for reservation spikes, plus a Next.js 16 waitlist site.",
        "Validated demand before scaling; when it did not materialise, the team decided to shut the venture down."
      ],
      technologies: ["Spring Boot", "PostgreSQL", "PostGIS", "Docker", "Next.js"],
      links: [],
      featured: false,
      type: "se"
    },
    {
      title: "TÜBİTAK Research Project",
      role: "Research Software Developer",
      dates: "Mar 2025 - Mar 2026",
      status: "Closed",
      description:
        "Gamified cognitive-bias-modification app for individuals with OCD, built with Dr. Sıla Derin for a TÜBİTAK-supported clinical psychology study. Unity 2022 + Firebase. Earned eligibility for a TÜBİTAK scholarship.",
      technologies: ["Unity", "C#", "Firebase"],
      links: [{ label: "GitHub", url: "https://github.com/uKmaz/TUBITAK-Psychology", icon: Github }],
      featured: false,
      type: "se"
    },
    {
      title: "Don't Blink, Light-Based Survival Action",
      role: "Winner, AniGame Jam '26 (48 hours)",
      dates: "Apr 2026",
      description:
        "Built a survival-action roguelite in 48 hours where light is the only weapon: enemies freeze under illumination and pursue in darkness. Engineered a raycast-based beam reflection system with damage scaling per bounce, a static EventBus for fully decoupled system communication, ScriptableObject-driven level and upgrade data, and object pooling for zero runtime allocations across an 8-level progression with a boss encounter.",
      technologies: ["Unity 6", "C#", "URP", "NavMesh", "Event-Driven Arch.", "Object Pooling"],
      links: [
        { label: "Play Game", url: "https://fiuby.com/games/dont-blink", icon: ExternalLink },
        { label: "GitHub", url: "https://github.com/uKmaz/Dont-Panic", icon: Github }
      ],
      featured: true,
      type: "gd"
    },
    { ...reachEngine, type: "gd" },
    {
      title: "TÜBİTAK Research Project, Cognitive Bias Gamification",
      role: "Solo Game Developer & Designer",
      dates: "Mar 2025 - Mar 2026",
      description:
        "Developed a research-oriented serious game integrating psychology and behavioural modelling for individuals with OCD, built with Dr. Sıla Derin for a TÜBİTAK-supported study. Implemented gamified cognitive bias modification, anonymous real-time data collection and behavioural pattern analysis tools in Unity. Earned eligibility for a TÜBİTAK scholarship.",
      technologies: ["Unity", "C#", "Firebase (Real-time)", "Data Modeling", "System Architecture"],
      links: [{ label: "GitHub", url: "https://github.com/uKmaz/TUBITAK-Psychology", icon: Github }],
      featured: true,
      type: "gd"
    },
    {
      title: "I Hate You, Co-op Endless Survival",
      role: "Lead Developer, IZOTOP Game Jam (team of 2)",
      dates: "Oct 2025",
      description:
        "Co-developed a chaotic local co-op survival game in 30 hours after joining the 48-hour IZOTOP Game Jam late. Engineered an event manager that triggers procedural catastrophic events, alongside a unified player spawner handling shared lives and dynamic camera behaviour.",
      technologies: ["Unity 6", "C#", "Game Systems", "Event Architecture", "Rapid Prototyping"],
      links: [
        { label: "Play Game", url: "https://fiuby.com/games/i-hate-you", icon: ExternalLink },
        { label: "GitHub", url: "https://github.com/uKmaz/IHateYout-IzotopJam", icon: Github }
      ],
      featured: false,
      type: "gd"
    },
    {
      title: "Case #0: Myself, Narrative Mystery",
      role: "Lead Developer, Sandwich Jam II (team of 2)",
      dates: "Dec 2025",
      description:
        "Built an event-driven 2D mystery game in 48 hours. Engineered a scalable narrative architecture using C# Actions and a custom dialogue manager to handle dynamic story steps, allowing rapid content creation without code duplication.",
      technologies: ["Unity 6", "C#", "Event-Driven Arch.", "Systems Design"],
      links: [{ label: "Play Game", url: "https://www.fiuby.com/games/case-0-myself", icon: ExternalLink }],
      featured: false,
      type: "gd"
    },
    {
      title: "Thiefy Thiefson!, 2D Stealth Action",
      role: "Lead Developer, Jamination 7 (team of 2)",
      dates: "May 2024",
      description:
        "Developed a fast-paced pixel-art stealth speedrun game in 48 hours. Engineered core mechanics including threshold-based footstep sound detection, enemy AI, inventory tracking and dynamic time limits.",
      technologies: ["Unity 2022", "C#", "Stealth Mechanics", "System Architecture"],
      links: [{ label: "Play Game", url: "https://ucmazj.itch.io/thiefy-thiefson-jamination-7", icon: ExternalLink }],
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
            {filteredProjects.map((project) => (
              <Card
                key={project.title}
                className="bg-card/50 backdrop-blur-sm border-border/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-[var(--hover-glow)] group"
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl mb-1 group-hover:text-accent transition-colors duration-300">
                        {project.title}
                      </CardTitle>
                      {(project.role || project.dates) && (
                        <p className="text-sm text-muted-foreground mb-3">
                          {[project.role, project.dates].filter(Boolean).join(" · ")}
                        </p>
                      )}
                      <CardDescription className="text-base leading-relaxed mt-2">
                        {project.description}
                      </CardDescription>
                    </div>
                    {project.status ? (
                      <span className={`shrink-0 whitespace-nowrap px-3 py-1 text-xs font-medium rounded-full border ${statusStyles[project.status]}`}>
                        {project.status}
                      </span>
                    ) : project.featured && (
                      <span className="px-3 py-1 bg-accent/20 text-accent text-xs font-medium rounded-full border border-accent/30">
                        Featured
                      </span>
                    )}
                  </div>
                </CardHeader>

                <CardContent>
                  {project.highlights && project.highlights.length > 0 && (
                    <ul className="list-disc pl-5 space-y-1 mb-6 text-muted-foreground">
                      {project.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  )}

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
