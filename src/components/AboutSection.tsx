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
                I'm a passionate Computer Engineering student with a drive for creating meaningful digital experiences. 
                Currently in my third year at Dokuz Eylül University, I specialize in game development and mobile applications.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My approach focuses on clean system architecture, intuitive user interactions, and game mechanics that feel natural and engaging. 
                Whether it's a social platform or a Unity-based puzzle game, I believe in shipping products that users genuinely want to engage with.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Always experimenting with new technologies and methodologies, I'm constantly learning and pushing the boundaries of what's possible in software development.
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
                  <span className="text-muted-foreground">Year</span>
                  <span className="font-medium">Third Year</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Focus</span>
                  <span className="font-medium">Games & Mobile Apps</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Philosophy</span>
                  <span className="font-medium">Always Shipping</span>
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