import Link from 'next/link'

export default function InitialInquiry() {
  return (
    <section className="py-24 md:py-40 bg-background relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/4 rounded-full blur-3xl -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-accent/4 rounded-full blur-3xl -mb-48" />
      
      <div className="max-w-2xl mx-auto px-4 md:px-8 relative z-10">
        <div className="space-y-10 text-center">
          {/* Pre-heading */}
          <div className="inline-block mx-auto">
            <span className="text-xs font-mono text-accent tracking-widest uppercase px-3 py-1 border border-accent/30 rounded">
              Let&apos;s talk
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Tell us what you&apos;re looking for
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Share what excites you. What you want to experience. What matters to you. This is where everything starts—an honest conversation.
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <Link
              href="/request-trip"
              className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-10 py-4 font-medium text-lg hover:bg-accent/90 transition group"
            >
              Share Your Ideas
              <span className="group-hover:translate-x-2 transition duration-300">→</span>
            </Link>
          </div>

          {/* Trust signal */}
          <div className="text-sm text-muted-foreground pt-8 border-t border-border">
            <p>No pressure. No fees. Just real talk.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
