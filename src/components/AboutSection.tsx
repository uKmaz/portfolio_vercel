const AboutSection = ({ filter }: { filter?: "se" | "gd" }) => {
  const isGD = filter === "gd";

  const paragraphs = isGD
    ? [
        "I'm a game developer and Computer Engineering student at Dokuz Eylül University (graduating June 2027). I build game systems in Unity and C#: core mechanics, enemy AI, event-driven architecture and procedural events.",
        "I won AniGame Jam '26 with Don't Blink and have shipped several games in 30 to 48 hour jams. For my degree thesis I'm co-developing Reach Engine, a C++20 ECS engine built for thousands of entities.",
        "I also led DEU POG, a 1,000+ member game development community, where I organized Jamination 8 and Pogathon."
      ]
    : [
        "I'm a Computer Engineering student at Dokuz Eylül University (graduating June 2027) and the founder of UniHub, a campus platform with 1,000+ users on iOS and Android.",
        "I build full-stack products end to end, from Spring Boot backends and PostgreSQL schemas to Expo mobile apps, React web clients and the infrastructure they deploy to.",
        "I work with an AI-driven SDLC: Nissth, my framework for running AI coding agents deterministically, drives the development of my current projects."
      ];

  const quickFacts = isGD
    ? [
        { label: "University", value: "Dokuz Eylül University" },
        { label: "Major", value: "Computer Engineering (expected June 2027)" },
        { label: "Primary Focus", value: "Game Systems & Architecture" },
        { label: "Engines", value: "Unity 6, custom C++20 ECS" },
        { label: "Core Strength", value: "Rapid Prototyping" },
        { label: "Highlight", value: "AniGame Jam '26 Winner" }
      ]
    : [
        { label: "University", value: "Dokuz Eylül University" },
        { label: "Major", value: "Computer Engineering (expected June 2027)" },
        { label: "Primary Focus", value: "Full-Stack Development" },
        { label: "Core Strength", value: "System Design & Shipping Products" },
        { label: "Way of Working", value: "AI-driven SDLC" }
      ];

  const background = [
    {
      heading: "Education",
      items: [
        {
          title: "Dokuz Eylül University",
          detail: "B.Sc. Computer Engineering · Oct 2023 - Jun 2027 (expected)",
          note: "Degree thesis: Reach Engine"
        },
        {
          title: "University American College Skopje",
          detail: "Erasmus+ exchange, Computer Science · Sep 2024 - Feb 2025"
        }
      ]
    },
    {
      heading: "Leadership",
      items: [
        {
          title: "Chairman, DEU POG",
          detail: "Project and Game Development Community · May 2025 - Jul 2026",
          url: "https://www.deupog.com"
        },
        {
          title: "Chairman, Fiuby Gaming Club",
          detail: "Dec 2025 - Dec 2026"
        },
        ...(isGD
          ? [{ title: "UçmazDev (YouTube)", detail: "Devlogs and tutorials on Unity and C# · Mar 2025 - Present" }]
          : [])
      ]
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-lg text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 p-8">
              <h3 className="text-2xl font-semibold mb-6 text-accent">Quick Facts</h3>
              <div className="space-y-4">
                {quickFacts.map((fact) => (
                  <div key={fact.label} className="flex justify-between gap-4">
                    <span className="text-muted-foreground">{fact.label}</span>
                    <span className="font-medium text-right">{fact.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {(
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              {background.map((group) => (
                <div key={group.heading} className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 p-8">
                  <h3 className="text-2xl font-semibold mb-6 text-accent">{group.heading}</h3>
                  <div className="space-y-5">
                    {group.items.map((item) => (
                      <div key={item.title}>
                        {"url" in item && item.url ? (
                          <a href={item.url} target="_blank" rel="noopener noreferrer" className="font-medium hover:text-accent transition-colors duration-300">
                            {item.title}
                          </a>
                        ) : (
                          <p className="font-medium">{item.title}</p>
                        )}
                        <p className="text-sm text-muted-foreground">{item.detail}</p>
                        {"note" in item && item.note && (
                          <p className="text-sm text-muted-foreground">{item.note}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              <div className="md:col-span-2 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 p-8 text-center">
                <h3 className="text-xl font-semibold mb-4 text-accent">Languages</h3>
                <p className="text-muted-foreground">Turkish (native) · English (C1) · Arabic (A2)</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
