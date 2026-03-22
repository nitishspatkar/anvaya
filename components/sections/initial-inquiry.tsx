import Link from 'next/link'

export default function InitialInquiry() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-4xl px-8 md:px-12">
        <div className="space-y-16">
          {/* Section header */}
          <div className="space-y-6">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight">
              How it works
            </h2>
            <p className="font-sans text-lg text-muted-foreground leading-relaxed max-w-2xl">
              We keep it simple. Real conversation. Real planning. Real experiences.
            </p>
          </div>

          {/* Steps - bold numbered format */}
          <div className="space-y-12">
            {/* Step 01 */}
            <div className="space-y-4">
              <div className="flex items-start gap-6">
                <span className="font-serif text-5xl md:text-6xl font-bold text-secondary/30 flex-shrink-0 mt-2">01</span>
                <div className="flex-1">
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2">Conversation First</h3>
                  <p className="font-sans text-base text-muted-foreground leading-relaxed">
                    We design every journey around what excites you. Share your interests, your pace, your budget. The vibe matters.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 02 */}
            <div className="space-y-4 pt-8 border-t border-border">
              <div className="flex items-start gap-6">
                <span className="font-serif text-5xl md:text-6xl font-bold text-secondary/30 flex-shrink-0 mt-2">02</span>
                <div className="flex-1">
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2">Then a Visit</h3>
                  <p className="font-sans text-base text-muted-foreground leading-relaxed">
                    We craft a custom itinerary. Hikes. Local restaurants. Hidden valleys. Everything tailored to you.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 03 */}
            <div className="space-y-4 pt-8 border-t border-border">
              <div className="flex items-start gap-6">
                <span className="font-serif text-5xl md:text-6xl font-bold text-secondary/30 flex-shrink-0 mt-2">03</span>
                <div className="flex-1">
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2">Max 2 Guests</h3>
                  <p className="font-sans text-base text-muted-foreground leading-relaxed">
                    We keep groups intimate. Two people. Two hosts. Meaningful connections don't happen in crowds.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="pt-12 border-t border-border">
            <Link
              href="/request-trip"
              className="inline-block bg-primary text-primary-foreground font-sans font-medium px-8 py-3 hover:opacity-90 transition-opacity duration-400"
            >
              Tell us your story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
