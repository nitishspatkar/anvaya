import Link from 'next/link';

export default function AboutHosts() {
  return (
    <section className="py-24 md:py-40 bg-background relative overflow-hidden">
      {/* Subtle background accents */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-secondary/3 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-accent/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Visual - Warm Card */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-sm h-96">
              {/* Nested frames */}
              <div className="absolute inset-0 border border-secondary/20 rounded-lg" />
              <div className="absolute inset-4 border border-secondary/15 rounded-lg" />
              
              {/* Content overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 space-y-6">
                <div className="space-y-2 text-center">
                  <p className="text-xs text-secondary font-mono tracking-widest uppercase">Since 2018</p>
                  <p className="text-5xl font-serif font-bold text-foreground">6+</p>
                  <p className="text-sm text-muted-foreground">years living here</p>
                </div>
                
                {/* Separator */}
                <div className="w-8 h-px bg-secondary/30" />
                
                {/* Simple list */}
                <div className="space-y-3 text-center w-full text-sm">
                  <p className="text-foreground font-medium">We hike.</p>
                  <p className="text-foreground font-medium">We explore.</p>
                  <p className="text-secondary font-medium">We share.</p>
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
                <span className="text-xs font-mono text-secondary uppercase tracking-widest">Who We Are</span>
              </div>
              
              <h2 className="font-serif text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Meet Your Hosts
              </h2>
            </div>

            {/* Story - Direct and Warm */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                We moved to Bern in 2018 for work and fell in love with living here. We hike the Alps in every season, cook in our kitchen, and spend weekends exploring parts of Switzerland most visitors never see.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Over the years, friends kept asking us to show them around. We realized what they wanted wasn't a tour—they wanted to know what our life actually feels like here. That's what we offer: honest time with people who genuinely want to experience Switzerland the way we do.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                We built Anvaya to do this properly. Every journey is unique because every person is different. We listen, we plan thoughtfully, and we show up as ourselves—not as performers.
              </p>
            </div>

            {/* Key Points */}
            <div className="grid grid-cols-2 gap-8 border-t border-border pt-8">
              <div className="space-y-2">
                <p className="text-3xl font-serif font-bold text-secondary">6+</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Years Here</p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-serif font-bold text-secondary">100+</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Happy Guests</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
