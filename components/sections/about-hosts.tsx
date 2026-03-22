import Link from 'next/link';

export default function AboutHosts() {
  return (
    <section className="py-20 md:py-32 bg-card/30 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
          {/* Left Visual Accent */}
          <div className="hidden lg:flex flex-col justify-center relative">
            <div className="relative h-full min-h-96">
              {/* Layered geometric design */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-lg" />
              <div className="absolute inset-8 border-2 border-accent/30 rounded-lg" />
              <div className="absolute top-12 right-12 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
              <div className="absolute bottom-12 left-12 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
              
              {/* Content overlay */}
              <div className="relative h-full flex flex-col justify-center p-12 space-y-4">
                <p className="text-xs text-accent font-mono tracking-wider uppercase">Since 2018</p>
                <p className="text-4xl font-bold text-foreground/60">Lived.</p>
                <p className="text-4xl font-bold text-foreground/60">Explored.</p>
                <p className="text-4xl font-bold text-accent">Shared.</p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <p className="text-xs text-accent font-mono tracking-widest uppercase">Our Story</p>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Meet Your Hosts
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                We moved to Bern in 2018 to chase careers in tech and medicine. Since then, we have hosted many friends and been on countless hikes in the Swiss Alps across all seasons.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                We have a desire to share the Switzerland we've come to love with others who understand what it means to belong between two worlds.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Now, we curate intimate journeys for you. Every experience is personal, thoughtful, and rooted in our lived experience of Switzerland.
              </p>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-8 border-t border-border pt-8">
              <div>
                <p className="text-3xl font-bold text-accent mb-2">9+</p>
                <p className="text-sm text-muted-foreground">Years Living</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent mb-2">100+</p>
                <p className="text-sm text-muted-foreground">Happy Travelers</p>
              </div>
            </div>

            <Link href="#" className="text-accent font-medium hover:underline inline-flex items-center gap-2 text-lg pt-2">
              Read Our Full Story →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
