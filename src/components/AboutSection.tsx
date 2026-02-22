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
                I’m a third-year Computer Engineering student and full-stack developer focused on building scalable digital products. 
                I design and deploy production-ready systems, taking projects from idea to real-world usage.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                As the founder and lead engineer of UniHub, I’ve built and scaled a platform serving 1000+ users across multiple universities. 
                My interests lie in system architecture, backend engineering, and creating products that solve real coordination and community problems.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                I enjoy working where engineering meets product thinking — combining clean architecture, performance optimization, and rapid iteration.
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
                  <span className="text-muted-foreground">Focus</span>
                  <span className="font-medium">Backend & System Architecture</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Experience</span>
                  <span className="font-medium">Full-Stack & Founder</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Philosophy</span>
                  <span className="font-medium">Build → Ship → Improve</span>
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