const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I’m a backend-focused software engineer with hands-on experience building and deploying production-ready systems. 
                I design RESTful APIs, structure relational databases, and optimize application performance with scalability in mind.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                I’ve developed and deployed real-world applications used by active communities, taking responsibility for backend architecture, 
                data modeling, infrastructure configuration, and system reliability.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                While my primary focus is backend engineering, I’m comfortable working across the full stack — 
                from frontend implementation to deployment pipelines — ensuring systems are cohesive from database to UI.
              </p>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 p-8">
              <h3 className="text-2xl font-semibold mb-6 text-accent">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">University</span>
                  <span className="font-medium">Dokuz Eylül University</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Major</span>
                  <span className="font-medium">Computer Engineering</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Primary Focus</span>
                  <span className="font-medium">Backend Engineering</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Secondary Skills</span>
                  <span className="font-medium">Full-Stack Development</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Core Strength</span>
                  <span className="font-medium">System Design & Scalability</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Philosophy</span>
                  <span className="font-medium">Build Reliable Systems</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;