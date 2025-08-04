const SkillsSection = () => {
  const programmingLanguages = [
    { name: "C#", level: 90 },
    { name: "Java", level: 85 },
    { name: "Python", level: 80 }
  ];

  const technologies = [
    "Git", "Unity", "Spring Boot", "React Native", "Render"
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Programming Languages */}
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 p-8">
              <h3 className="text-2xl font-semibold mb-8 text-accent flex items-center">
                <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                Programming Languages
              </h3>
              <div className="space-y-6">
                {programmingLanguages.map((lang) => (
                  <div key={lang.name} className="group">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{lang.name}</span>
                      <span className="text-sm text-muted-foreground">{lang.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 group-hover:animate-pulse"
                        style={{ width: `${lang.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies & Tools */}
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 p-8">
              <h3 className="text-2xl font-semibold mb-8 text-accent flex items-center">
                <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                Technologies & Tools
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {technologies.map((tech) => (
                  <div 
                    key={tech}
                    className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-4 text-center border border-border/30 transition-all duration-300 hover:scale-105 hover:bg-gradient-to-br hover:from-primary/20 hover:to-accent/20 hover:shadow-lg"
                  >
                    <span className="font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Skills */}
          <div className="mt-12 text-center">
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 p-8 max-w-4xl mx-auto">
              <h3 className="text-xl font-semibold mb-6 text-accent">Areas of Expertise</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {[
                  "Game Development", "Mobile App Development", "System Architecture", 
                  "UI/UX Design", "Problem Solving", "Research & Analysis", 
                  "Full-Stack Development", "Level Design"
                ].map((skill) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 transition-all duration-300 hover:bg-primary/20 hover:scale-105"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;