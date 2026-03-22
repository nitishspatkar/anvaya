export default function Hero() {
  return (
    <section className="relative w-full">
      {/* Dark Hero with Gradient Accent */}
      <div className="relative w-full min-h-[600px] md:min-h-[700px] bg-background flex items-center overflow-hidden">
        {/* Geometric Accent Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                  We&apos;ll show you the Switzerland we call home
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                  We're a couple with Indian roots living in Bern who love sharing our adopted home. We are not tour guides, but we can show you many possibilities.
                </p>
              </div>

              {/* Key Points */}
              <div className="space-y-4 pt-4 border-t border-border">
                <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">
                  <span className="text-accent font-medium">Tell us what you&apos;re looking for.</span> We'll have a real conversation about what&apos;s meaningful to you.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">
                  <span className="text-accent font-medium">We craft experiences together</span> based on shared understanding and mutual respect.
                </p>
              </div>

              {/* CTA */}
              <div className="pt-2">
                <a href="/request-trip" className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-8 py-3 font-medium hover:bg-accent/90 transition group">
                  Start a Conversation
                  <span className="group-hover:translate-x-1 transition">→</span>
                </a>
              </div>
            </div>

            {/* Visual Element */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-80 h-80">
                {/* Geometric shapes */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-secondary/10 rounded-lg transform rotate-45" />
                <div className="absolute inset-12 bg-accent/10 rounded-lg" />
                <div className="absolute inset-24 border-2 border-accent/30 rounded-lg" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                  <p className="text-accent text-sm font-mono tracking-wider">EST. 2018</p>
                  <p className="text-foreground/40 text-xs mt-2">Living & Sharing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
