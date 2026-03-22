import Link from 'next/link'

export default function InitialInquiry() {
  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Accent Elements */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="max-w-3xl mx-auto px-4 md:px-8 relative z-10">
        {/* Content Box */}
        <div className="border border-border bg-card/50 backdrop-blur p-12 md:p-16 space-y-8">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-xs font-mono text-accent tracking-widest uppercase">Get Started</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Tell us what you&apos;re looking for
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              This is not a transaction. It's the beginning of a meaningful conversation where we understand your vision and determine if we're the right fit for your journey.
            </p>
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-border pt-8">
            <div className="space-y-2">
              <p className="text-xs text-accent font-mono uppercase tracking-wider">Step 1</p>
              <p className="text-sm text-muted-foreground">Share your preferences and interests</p>
            </div>
            <div className="space-y-2">
              <p className="text-xs text-accent font-mono uppercase tracking-wider">Step 2</p>
              <p className="text-sm text-muted-foreground">We discuss and understand your vision</p>
            </div>
            <div className="space-y-2">
              <p className="text-xs text-accent font-mono uppercase tracking-wider">Step 3</p>
              <p className="text-sm text-muted-foreground">Craft a custom experience together</p>
            </div>
          </div>

          {/* CTA */}
          <div className="pt-6">
            <Link
              href="/request-trip"
              className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-8 py-3 font-medium hover:bg-accent/90 transition group"
            >
              Start Your Journey
              <span className="group-hover:translate-x-1 transition">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
