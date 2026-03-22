export default function Hero() {
  return (
    <section className="relative w-full">
      {/* Premium Hero with Alpine Aesthetic */}
      <div className="relative w-full min-h-[600px] md:min-h-[750px] bg-background flex items-center overflow-hidden">
        {/* Layered background elements */}
        <div className="absolute top-20 right-1/4 w-80 h-80 bg-accent/6 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-accent/4 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Text Content */}
            <div className="space-y-10">
              <div className="space-y-8">
                {/* Accent line */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-px bg-accent" />
                  <span className="text-xs font-mono text-accent uppercase tracking-widest">Alpine Experiences</span>
                </div>

                <h1 className="font-serif text-6xl md:text-7xl font-bold text-foreground leading-tight">
                  We&apos;ll show you the Switzerland we call home
                </h1>
                
                <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                  We're a couple with Indian roots living in Bern who love sharing our adopted home through intimate, authentic journeys crafted just for you.
                </p>
              </div>

              {/* Highlighted points */}
              <div className="space-y-6 pt-6 border-t border-border/30">
                <div className="flex gap-4">
                  <div className="w-1 h-12 bg-gradient-to-b from-accent to-accent/20" />
                  <div>
                    <p className="text-sm text-foreground font-medium mb-1">Authentic Connection</p>
                    <p className="text-muted-foreground text-sm">Not tour guides. Genuine locals sharing real life in the Alps.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-1 h-12 bg-gradient-to-b from-secondary to-secondary/20" />
                  <div>
                    <p className="text-sm text-foreground font-medium mb-1">Truly Personal</p>
                    <p className="text-muted-foreground text-sm">Every experience is crafted around what matters most to you.</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-4">
                <a href="/request-trip" className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-8 py-4 font-medium text-base hover:bg-accent/90 transition group border border-accent/50">
                  Begin Your Story
                  <span className="group-hover:translate-x-2 transition duration-300">→</span>
                </a>
              </div>
            </div>

            {/* Visual Element - Premium Card */}
            <div className="hidden lg:flex items-center justify-center h-full min-h-96">
              <div className="relative w-full max-w-md aspect-square">
                {/* Outer frame */}
                <div className="absolute inset-0 border-2 border-accent/20 rounded-lg" />
                
                {/* Inner layers */}
                <div className="absolute inset-6 border border-accent/15 rounded-lg" />
                <div className="absolute inset-12 bg-gradient-to-br from-accent/8 via-transparent to-secondary/8 rounded-lg" />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
                  <div className="text-center space-y-3">
                    <p className="text-accent font-serif text-5xl font-bold">6+</p>
                    <p className="text-foreground/70 text-sm font-mono uppercase tracking-wider">Years of Stories</p>
                  </div>
                  
                  {/* Decorative dots */}
                  <div className="flex gap-2 pt-6">
                    <div className="w-2 h-2 rounded-full bg-secondary/40" />
                    <div className="w-2 h-2 rounded-full bg-accent/40" />
                    <div className="w-2 h-2 rounded-full bg-secondary/40" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
