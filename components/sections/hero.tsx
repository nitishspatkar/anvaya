export default function Hero() {
  return (
    <section className="relative w-full">
      {/* Warm, inviting hero section */}
      <div className="relative w-full min-h-[600px] md:min-h-[750px] bg-background flex items-center overflow-hidden">
        {/* Subtle background elements */}
        <div className="absolute top-20 right-1/4 w-80 h-80 bg-accent/3 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-secondary/3 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Text Content */}
            <div className="space-y-10">
              <div className="space-y-8">
                {/* Accent line */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-px bg-accent" />
                  <span className="text-xs font-mono text-accent uppercase tracking-widest">Real Experiences</span>
                </div>

                <h1 className="font-serif text-6xl md:text-7xl font-bold text-foreground leading-tight">
                  Switzerland through local eyes
                </h1>
                
                <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                  We live here, work here, and explore here. We're not tour guides—we're neighbors who'd love to share what makes this place home.
                </p>
              </div>

              {/* What makes us different */}
              <div className="space-y-6 pt-6 border-t border-border">
                <div className="flex gap-4">
                  <div className="w-1 h-12 bg-gradient-to-b from-accent to-accent/20" />
                  <div>
                    <p className="text-sm text-foreground font-medium mb-1">Honest Conversations</p>
                    <p className="text-muted-foreground text-sm">We talk about what you really want, not what fits a template.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-1 h-12 bg-gradient-to-b from-secondary to-secondary/20" />
                  <div>
                    <p className="text-sm text-foreground font-medium mb-1">Made for You</p>
                    <p className="text-muted-foreground text-sm">Every trip is built from scratch based on what you love.</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-4">
                <a href="/request-trip" className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-8 py-4 font-medium text-base hover:bg-accent/90 transition group">
                  Start a Conversation
                  <span className="group-hover:translate-x-2 transition duration-300">→</span>
                </a>
              </div>
            </div>

            {/* Visual Element */}
            <div className="hidden lg:flex items-center justify-center h-full min-h-96">
              <div className="relative w-full max-w-md aspect-square">
                {/* Subtle frame */}
                <div className="absolute inset-0 border border-accent/15 rounded-lg" />
                <div className="absolute inset-6 border border-secondary/15 rounded-lg" />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center space-y-6">
                  <div className="text-center space-y-2">
                    <p className="text-accent font-serif text-5xl font-bold">6+</p>
                    <p className="text-foreground text-sm font-medium">Years calling Switzerland home</p>
                  </div>
                  
                  <div className="flex gap-2">
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
