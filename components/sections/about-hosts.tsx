import Link from 'next/link';

export default function AboutHosts() {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/20">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Text Content */}
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
              Meet Your Hosts
            </h2>
            
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Rajesh and Priya moved from Mumbai to Bern in 2015 to chase careers in tech and design. What began as a weekend getaway tradition with visiting friends from home evolved into something deeper—a desire to share the Switzerland they&apos;ve come to love with others who understand what it means to belong between two worlds.
            </p>

            <p className="text-lg text-foreground leading-relaxed mb-8">
              Now, they curate intimate journeys that blend Alpine adventure with Indian warmth. Every experience is personal, thoughtful, and rooted in their 9 years of living, working, and exploring in Switzerland.
            </p>

            <Link href="#" className="text-primary font-medium hover:underline text-lg inline-flex items-center gap-2">
              Read Our Story →
            </Link>
          </div>

          {/* Image Placeholder */}
          <div>
            <div className="w-full aspect-square bg-gradient-to-br from-secondary/30 via-secondary/20 to-muted/30 rounded-none flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl text-secondary/40 mb-4">📸</div>
                <p className="text-muted-foreground">Image Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
