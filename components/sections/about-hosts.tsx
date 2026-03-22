import Link from 'next/link';

export default function AboutHosts() {
  return (
    <section className="py-24 md:py-40 bg-background relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-secondary/6 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Visual - Premium Card */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-sm h-96">
              {/* Nested frames with warm accent */}
              <div className="absolute inset-0 border border-secondary/30 rounded-lg" />
              <div className="absolute inset-4 border border-secondary/20 rounded-lg" />
              <div className="absolute inset-8 bg-gradient-to-br from-secondary/8 to-transparent rounded-lg" />
              
              {/* Content overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 space-y-6">
                <div className="space-y-2 text-center">
                  <p className="text-xs text-secondary font-mono tracking-widest uppercase">Our Journey</p>
                  <p className="text-5xl font-serif font-bold text-foreground">6</p>
                  <p className="text-sm text-muted-foreground">Years of Stories</p>
                </div>
                
                {/* Separator */}
                <div className="w-8 h-px bg-secondary/40" />
                
                {/* Timeline */}
                <div className="space-y-3 text-center w-full">
                  <div className="text-sm">
                    <p className="text-foreground font-medium">Lived</p>
                    <p className="text-muted-foreground text-xs">In the Alps</p>
                  </div>
                  <div className="text-sm">
                    <p className="text-foreground font-medium">Explored</p>
                    <p className="text-muted-foreground text-xs">Every Season</p>
                  </div>
                  <div className="text-sm">
                    <p className="text-secondary font-medium">Shared</p>
                    <p className="text-muted-foreground text-xs">With You</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex flex-col justify-center space-y-10">
            {/* Header */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-secondary" />
                <span className="text-xs font-mono text-secondary uppercase tracking-widest">Our Story</span>
              </div>
              
              <h2 className="font-serif text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Meet Your Hosts
              </h2>
            </div>

            {/* Story */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                We moved to Bern in 2018 to chase careers in tech and medicine. What began as a professional adventure became a love affair with Switzerland itself.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Since then, we've hiked every corner of the Alps across seasons, hosted countless friends, and discovered that the deepest travel comes from genuine connection—not Instagram moments.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                We created Anvaya because we believe travel should feel like coming home. We curate journeys that are personal, thoughtful, and rooted in our real lived experience of Switzerland.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6 border-t border-border/30 pt-8">
              <div className="space-y-2">
                <p className="text-3xl font-serif font-bold text-secondary">6+</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Years Living</p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-serif font-bold text-secondary">100+</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Happy Guests</p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-serif font-bold text-secondary">∞</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Stories</p>
              </div>
            </div>

            <Link href="#" className="text-accent font-medium hover:text-accent/80 transition inline-flex items-center gap-2 text-base pt-4">
              Read Our Full Story →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
